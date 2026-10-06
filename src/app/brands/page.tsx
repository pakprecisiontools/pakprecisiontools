import type { Metadata } from "next";
import Link from "next/link";
import { AuthorisedBadge, BrandMark } from "@/components/product/BrandMark";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";
import { brands, productsByBrand } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Brands",
  description: "Industrial brands we supply and source, including Parker, Festo, SMC, Siemens, Omron and Fluke.",
};

export default function BrandsPage() {
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Brands" }]} />
      <PageHeader
        title="Brands"
        intro="Genuine products from leading manufacturers. Don’t see your brand? We can source it."
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {brands.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/brands/${b.slug}`}
              className="flex h-full flex-col gap-2 rounded-lg border border-border bg-card p-5 transition hover:border-primary hover:shadow-md"
            >
              <div className="flex min-h-10 items-center justify-between gap-2">
                <BrandMark brand={b} />
                {b.authorised && <AuthorisedBadge />}
              </div>
              <p className="text-sm text-muted-foreground">{b.description}</p>
              <p className="mt-auto pt-2 text-sm font-semibold text-primary">
                {productsByBrand(b.slug).length} products →
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
