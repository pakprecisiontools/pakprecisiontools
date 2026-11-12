import type { Metadata } from "next";
import Link from "next/link";
import { CatalogView } from "@/components/catalog/CatalogView";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";
import { catalogProducts, parseFilters } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "All products",
  description: "Browse industrial hydraulic, pneumatic, automation and test equipment by brand and specification.",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const filters = parseFilters(await searchParams);
  const all = await catalogProducts();
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Products" }]} />
      <PageHeader title="All products" intro="Filter by brand, category and technical specification." />
      <CatalogView
        base={all}
        filters={filters}
        pathname="/products"
        empty={
          <>
            <p className="font-semibold">No products match these filters.</p>
            <Link href="/products" className="mt-2 inline-block text-primary underline">
              Clear filters
            </Link>
          </>
        }
      />
    </Container>
  );
}
