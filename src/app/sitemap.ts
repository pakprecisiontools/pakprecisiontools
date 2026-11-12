import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { catalogBrands, catalogProducts, categories, categoryHref } from "@/lib/catalog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const [products, brands] = await Promise.all([catalogProducts(), catalogBrands()]);
  return [
    ...["", "/products", "/brands", "/source", "/about", "/contact", "/privacy", "/terms"].map((p) => ({ url: url(p) })),
    ...categories.map((c) => ({ url: url(categoryHref(c.slug)) })),
    ...brands.map((b) => ({ url: url(`/brands/${b.slug}`) })),
    ...products.map((p) => ({ url: url(`/products/${p.slug}`) })),
  ];
}
