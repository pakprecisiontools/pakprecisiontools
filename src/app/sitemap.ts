import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { brands, catalogProducts, categories, categoryHref } from "@/lib/catalog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => `${siteConfig.url.replace(/\/$/, "")}${path}`;
  const products = await catalogProducts();
  const brandsWithProducts = new Set(products.map((p) => p.brand).filter(Boolean));
  return [
    ...["", "/products", "/brands", "/source", "/about", "/contact", "/privacy", "/terms"].map((p) => ({
      url: url(p),
    })),
    ...categories.map((c) => ({ url: url(categoryHref(c.slug)) })),
    ...brands
      .filter((b) => brandsWithProducts.has(b.slug))
      .map((b) => ({ url: url(`/brands/${b.slug}`) })),
    ...products.map((p) => ({ url: url(`/products/${p.slug}`) })),
  ];
}
