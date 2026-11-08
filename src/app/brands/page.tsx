import type { Metadata } from "next";
import { BrandCard } from "@/components/product/BrandMark";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";
import { brands, catalogProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Brands",
  description: "Industrial brands in our catalogue – electrical test, process, automation, PPE and calibration.",
};

export default async function BrandsPage() {
  const products = await catalogProducts();
  const withStock = new Set(products.map((p) => p.brand).filter(Boolean));
  const listed = brands.filter((b) => withStock.has(b.slug));

  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands" }]} />
      <PageHeader
        title="Brands"
        intro="Brands with products in the catalogue. Don’t see yours? We can still source it."
      />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-2">
        {listed.map((b) => (
          <li key={b.slug}>
            <BrandCard brand={b} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
