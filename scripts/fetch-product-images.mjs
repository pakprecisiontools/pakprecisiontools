#!/usr/bin/env node
/**
 * Downloads product photos from manufacturer / distributor product pages.
 *
 *   node scripts/fetch-product-images.mjs            # all products
 *   node scripts/fetch-product-images.mjs <slug> …   # only these slugs
 *
 * For each product, the listed `pages` are tried in order. The script looks for the page's
 * og:image / twitter:image / JSON-LD image, saves it to public/products/<slug>.<ext> and
 * records where it came from in data/image-sources.json (keep this for attribution).
 * A `direct` URL skips page parsing.
 *
 * NOTE: product photos belong to their manufacturers. Confirm you are authorised to use them
 * (distributors normally get them from the manufacturer's media portal) before going live.
 */
import { mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { extname } from "node:path";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

/** slug -> candidate pages / direct image URLs */
const manifest = JSON.parse(readFileSync(new URL("./product-image-sources.json", import.meta.url), "utf8"));

const only = process.argv.slice(2);
const outDir = new URL("../public/products/", import.meta.url);
mkdirSync(outDir, { recursive: true });
const sourcesFile = new URL("../data/image-sources.json", import.meta.url);
const sources = existsSync(sourcesFile) ? JSON.parse(readFileSync(sourcesFile, "utf8")) : {};

const get = (url, opts = {}) =>
  fetch(url, { headers: { "user-agent": UA, accept: "text/html,image/*,*/*", ...opts.headers }, redirect: "follow", signal: AbortSignal.timeout(25000) });

function candidatesFromHtml(html, base) {
  const out = [];
  const meta = (re) => [...html.matchAll(re)].map((m) => m[1]);
  out.push(...meta(/<meta[^>]+property=["']og:image(?::secure_url)?["'][^>]*content=["']([^"']+)["']/gi));
  out.push(...meta(/<meta[^>]+content=["']([^"']+)["'][^>]*property=["']og:image["']/gi));
  out.push(...meta(/<meta[^>]+name=["']twitter:image["'][^>]*content=["']([^"']+)["']/gi));
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const walk = (n) => {
        if (!n || typeof n !== "object") return;
        if (Array.isArray(n)) return n.forEach(walk);
        if (n.image) [].concat(n.image).forEach((i) => out.push(typeof i === "string" ? i : i?.url));
        Object.values(n).forEach(walk);
      };
      walk(JSON.parse(m[1]));
    } catch {}
  }
  return out
    .filter(Boolean)
    .map((u) => u.replace(/&amp;/g, "&"))
    .map((u) => { try { return new URL(u, base).href; } catch { return null; } })
    .filter((u) => u && !/logo|favicon|placeholder|default[-_]?image|no[-_]?image/i.test(u));
}

async function download(url, slug) {
  const res = await get(url, { headers: { accept: "image/avif,image/webp,image/*,*/*" } });
  const type = res.headers.get("content-type") ?? "";
  if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 4000) throw new Error(`too small (${buf.length} B)`);
  const ext = type.includes("png") ? ".png" : type.includes("webp") ? ".webp" : type.includes("svg") ? ".svg" : ".jpg";
  const file = `${slug}${ext}`;
  writeFileSync(new URL(file, outDir), buf);
  return { file, bytes: buf.length };
}

let ok = 0;
const failed = [];
for (const [slug, entry] of Object.entries(manifest)) {
  if (only.length && !only.includes(slug)) continue;
  let done = false;
  const tried = [];
  for (const src of [...(entry.direct ?? []).map((u) => ({ direct: u })), ...(entry.pages ?? []).map((u) => ({ page: u }))]) {
    try {
      let imageUrls;
      if (src.direct) imageUrls = [src.direct];
      else {
        const res = await get(src.page);
        if (!res.ok) throw new Error(`page ${res.status}`);
        imageUrls = candidatesFromHtml(await res.text(), src.page).slice(0, 4);
        if (!imageUrls.length) throw new Error("no image found on page");
      }
      for (const imageUrl of imageUrls) {
        try {
          const { file, bytes } = await download(imageUrl, slug);
          sources[slug] = { file: `/products/${file}`, imageUrl, page: src.page ?? null, fetched: new Date().toISOString().slice(0, 10) };
          console.log(`OK    ${slug}  ${file} (${Math.round(bytes / 1024)} KB)  <- ${imageUrl}`);
          done = true;
          break;
        } catch (e) {
          tried.push(`${imageUrl}: ${e.message}`);
        }
      }
      if (done) break;
    } catch (e) {
      tried.push(`${src.page ?? src.direct}: ${e.message}`);
    }
  }
  if (done) ok++;
  else {
    failed.push(slug);
    console.log(`FAIL  ${slug}\n      ${tried.join("\n      ")}`);
  }
}

mkdirSync(new URL("../data/", import.meta.url), { recursive: true });
writeFileSync(sourcesFile, JSON.stringify(sources, null, 2) + "\n");
console.log(`\n${ok} downloaded, ${failed.length} failed${failed.length ? `: ${failed.join(", ")}` : ""}`);
