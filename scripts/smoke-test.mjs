#!/usr/bin/env node
/**
 * End-to-end smoke test against a running server (default http://localhost:3000).
 *   npm run dev       (in one terminal)
 *   npm run smoke     (in another)
 */
const BASE = process.env.BASE_URL ?? "http://localhost:3000";
let failed = 0;
const check = (name, ok, extra = "") => {
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${extra ? `  ${extra}` : ""}`);
};

const productNames = (html) =>
  [...html.matchAll(/<h3 class="mt-1[^>]*><a[^>]*>([^<]+)<\/a>/g)].map((m) => m[1]);

async function search(q) {
  const res = await fetch(`${BASE}/search?q=${encodeURIComponent(q)}`);
  const html = await res.text();
  return { names: productNames(html), cta: /find what you are looking for/.test(html) };
}

/* ------------------------------- Search ------------------------------- */
let r = await search("4WE6D6X/EG24N9K4");
check("search: exact MPN ranks first", r.names[0]?.includes("NG6") && r.names.length >= 1, r.names[0]);

r = await search("d1vw 002");
check("search: partial MPN with space", r.names.some((n) => n.startsWith("D1VW")), r.names.join(" | "));

r = await search("D1VW-002-CNJW");
check("search: MPN with dashes", r.names.length === 1, r.names.join(" | "));

r = await search("fluke");
check("search: brand name", r.names.length === 3, `${r.names.length} results`);

r = await search("solenoid valve");
check("search: multi-word", r.names.length >= 3, `${r.names.length} results`);

r = await search("zzz-nothing-123");
check("search: zero results shows sourcing fallback", r.names.length === 0 && r.cta);

/* ------------------------------ Filtering ----------------------------- */
let html = await (await fetch(`${BASE}/category/pneumatics/pneumatic-cylinders?brand=smc`)).text();
check("filter: brand=smc narrows cylinders", productNames(html).length === 2, productNames(html).join(" | "));

/* --------------------------------- API -------------------------------- */
const contact = { name: "Ali Khan", company: "ACME", email: "ali@acme.com", phone: "+92 300 1234567" };
const form = (obj, files = []) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(obj)) fd.set(k, v);
  for (const [name, body] of files) fd.append("files", new Blob([body]), name);
  return fd;
};
const post = async (path, fd) => {
  const res = await fetch(`${BASE}${path}`, { method: "POST", body: fd });
  return { status: res.status, body: await res.json() };
};

let p = await post(
  "/api/inquiry",
  form({ ...contact, message: "Urgent", items: JSON.stringify([{ slug: "parker-d1vw002cnjw", quantity: 5 }, { slug: "does-not-exist", quantity: 1 }]) }),
);
check("inquiry: valid request accepted", p.status === 200 && /^RFQ-\d{8}-[A-Z0-9]{4}$/.test(p.body.reference), p.body.reference);

p = await post("/api/inquiry", form({ name: "A", email: "bad" }));
check(
  "inquiry: invalid input rejected with field errors",
  p.status === 422 && p.body.errors?.email && p.body.errors?.phone && p.body.errors?.items,
  Object.keys(p.body.errors ?? {}).join(","),
);

p = await post("/api/inquiry", form({ ...contact, items: JSON.stringify([{ slug: "nope", quantity: 1 }]) }));
check("inquiry: unknown products only -> rejected", p.status === 422 && !!p.body.errors?.items);

p = await post("/api/inquiry", form({ website: "http://spam.example", name: "bot" }));
check("inquiry: honeypot silently accepted (not processed)", p.status === 200 && p.body.reference === "RFQ-RECEIVED");

p = await post("/api/sourcing", form({ ...contact, partName: "Proportional valve", quantity: "2" }, [["drawing.pdf", "pdf-bytes"]]));
check("sourcing: valid request with PDF accepted", p.status === 200 && p.body.reference?.startsWith("SRC-"), p.body.reference);

p = await post("/api/sourcing", form({ ...contact, partName: "Valve", quantity: "2" }, [["virus.exe", "x"]]));
check("sourcing: disallowed file type rejected", p.status === 422 && !!p.body.errors?.files, p.body.errors?.files);

p = await post("/api/sourcing", form({ ...contact, partName: "Valve", quantity: "0" }));
check("sourcing: quantity 0 rejected", p.status === 422 && !!p.body.errors?.quantity);

console.log(failed ? `\n${failed} check(s) failed` : "\nAll checks passed");
process.exit(failed ? 1 : 0);
