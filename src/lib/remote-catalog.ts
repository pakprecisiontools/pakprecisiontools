import { inboxSiteKey, inboxUrl } from "./dashboard";
import type { Product } from "./types";

function catalogUrl(): string {
  return inboxUrl().replace(/\/submissions\/?$/, "/catalog/products");
}

function publicSpecs(specs: unknown): Record<string, string> {
  if (!specs || typeof specs !== "object" || Array.isArray(specs)) return {};
  return Object.fromEntries(
    Object.entries(specs).filter(
      (entry): entry is [string, string] =>
        entry[0].trim().toLowerCase() !== "supply status" && typeof entry[1] === "string",
    ),
  );
}

function isProduct(value: unknown): value is Product {
  if (!value || typeof value !== "object") return false;
  const row = value as Partial<Product>;
  return typeof row.slug === "string" && row.slug !== "" && typeof row.name === "string" && row.name !== "";
}

/** Published products created in the Laravel dashboard for this site. */
export async function fetchRemoteProducts(): Promise<Product[]> {
  const url = catalogUrl();
  const key = inboxSiteKey();

  try {
    const res = await fetch(url, {
      headers: { "X-Site-Key": key, Accept: "application/json" },
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const body = (await res.json()) as { products?: unknown };
    if (!Array.isArray(body.products)) return [];
    return body.products.filter(isProduct).map((row) => ({
      slug: row.slug,
      name: row.name,
      sku: row.sku || "",
      mpn: row.mpn || "",
      brand: row.brand || "",
      category: row.category || "",
      description: row.description || "",
      specs: publicSpecs(row.specs),
      images: Array.isArray(row.images) ? row.images.filter((src): src is string => typeof src === "string") : [],
      datasheets: Array.isArray(row.datasheets) ? row.datasheets : [],
    }));
  } catch {
    return [];
  }
}
