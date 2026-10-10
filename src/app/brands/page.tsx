import type { Metadata } from "next";
import { BrandCard } from "@/components/product/BrandMark";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";
import { brands } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Brands",
  description: "Industrial brands we supply and source.",
};

export default function BrandsPage() {
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands" }]} />
      <PageHeader
        title="Brands"
        intro="Genuine products from leading manufacturers. Don’t see your brand? We can source it."
      />
      <ul className="grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-2">
        {brands.map((b) => (
          <li key={b.slug}>
            <BrandCard brand={b} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
