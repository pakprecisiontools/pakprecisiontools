#!/usr/bin/env node
/**
 * Converts a products spreadsheet (CSV) into src/data/products.generated.json.
 *
 * Usage:  npm run import:products              (reads data/products.csv)
 *         npm run import:products -- my.csv    (reads a custom file)
 *
 * Columns (header row required):
 *   name, brand, sku, mpn, category, description, specs, images, datasheets
 *
 *   brand / category : slugs from src/data/brands.ts and src/data/categories.ts
 *   specs            : "Key: Value; Key: Value"
 *   images           : "/products/a.jpg|/products/b.jpg"   (paths under /public)
 *                      Leave empty to auto-use public/products/<product-slug>.<ext>
 *   datasheets       : "Title::/datasheets/file.pdf|Title 2::https://..."
 *
 * Export from Excel with "CSV UTF-8 (Comma delimited)".
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { dirname, resolve } from "node:path";

const input = resolve(process.argv[2] ?? "data/products.csv");
const output = resolve("src/data/products.generated.json");

/** Minimal RFC 4180 CSV parser (quoted fields, escaped quotes, CRLF). */
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const src = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"' && src[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && src[i + 1] === "\n") i++;
      row.push(field);
      field = "";
      if (row.some((v) => v.trim() !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  row.push(field);
  if (row.some((v) => v.trim() !== "")) rows.push(row);
  return rows;
}

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const [header, ...body] = parseCsv(readFileSync(input, "utf8"));
const col = (r, name) => (r[header.indexOf(name)] ?? "").trim();

const required = ["name", "brand", "sku", "mpn", "category"];
const missing = required.filter((c) => !header.includes(c));
if (missing.length) {
  console.error(`Missing required column(s): ${missing.join(", ")}`);
  process.exit(1);
}

const productFiles = existsSync(resolve("public/products")) ? readdirSync(resolve("public/products")) : [];

const seen = new Set();
const products = [];
body.forEach((r, i) => {
  const line = i + 2;
  const p = Object.fromEntries(required.map((c) => [c, col(r, c)]));
  const empty = required.filter((c) => !p[c]);
  if (empty.length) {
    console.warn(`Row ${line}: skipped (empty ${empty.join(", ")})`);
    return;
  }
  let slug = slugify(`${p.brand}-${p.mpn}`);
  if (seen.has(slug)) slug = `${slug}-${slugify(p.sku)}`;
  seen.add(slug);

  const specs = Object.fromEntries(
    col(r, "specs")
      .split(";")
      .map((s) => s.split(/:(.*)/s).map((x) => x.trim()))
      .filter(([k, v]) => k && v),
  );
  let images = col(r, "images").split("|").filter(Boolean);
  if (!images.length) {
    // Convention: public/products/<slug>.<ext> is used automatically.
    images = productFiles
      .filter((f) => f.slice(0, f.lastIndexOf(".")) === slug)
      .map((f) => `/products/${f}`);
  }
  const datasheets = col(r, "datasheets")
    .split("|")
    .filter(Boolean)
    .map((d) => {
      const [title, url] = d.split("::").map((x) => x.trim());
      return { title: url ? title : "Datasheet", url: url ?? title };
    });

  products.push({
    slug,
    name: p.name,
    sku: p.sku,
    mpn: p.mpn,
    brand: p.brand,
    category: p.category,
    description: col(r, "description"),
    specs,
    images,
    datasheets,
  });
});

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, JSON.stringify(products, null, 2) + "\n");
console.log(`Imported ${products.length} products -> ${output}`);
