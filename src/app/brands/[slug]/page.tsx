import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/catalog/CatalogView";
import { SourcingCta } from "@/components/catalog/SourcingCta";
import { AuthorisedBadge } from "@/components/product/BrandMark";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";
import { brands, getBrand, parseFilters, productsByBrand } from "@/lib/catalog";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export const generateStaticParams = () => brands.map((b) => ({ slug: b.slug }));

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const brand = getBrand((await params).slug);
  return brand ? { title: `${brand.name} products`, description: `${brand.name} parts and equipment – request a quote.` } : {};
}

export default async function BrandPage({ params, searchParams }: Props) {
  const brand = getBrand((await params).slug);
  if (!brand) notFound();

  const filters = parseFilters(await searchParams);
  const pathname = `/brands/${brand.slug}`;
  const base = productsByBrand(brand.slug);

  return (
    <Container className="py-8">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Brands", href: "/brands" }, { label: brand.name }]}
      />
      <PageHeader title={brand.name} intro={brand.description}>
        {brand.authorised && (
          <div className="mt-3">
            <AuthorisedBadge />
          </div>
        )}
      </PageHeader>
      <CatalogView
        base={base}
        filters={{ ...filters, brands: [] }}
        pathname={pathname}
        empty={
          base.length === 0 ? (
            <SourcingCta compact query={brand.name} />
          ) : (
            <>
              <p className="font-semibold">No products match these filters.</p>
              <Link href={pathname} className="mt-2 inline-block text-primary underline">
                Clear filters
              </Link>
            </>
          )
        }
      />
    </Container>
  );
}
