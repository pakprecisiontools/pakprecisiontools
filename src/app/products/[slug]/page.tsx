import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { DownloadIcon } from "@/components/icons";
import { ProductActions } from "@/components/product/ProductActions";
import { ProductGrid } from "@/components/product/ProductCard";
import { ProductImage } from "@/components/product/ProductImage";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Breadcrumbs, Container, SectionHeading } from "@/components/shared";
import { productBuyerNote, productContentFor } from "@/data/product-content";
import {
  brandName,
  catalogBrands,
  catalogProduct,
  leadingBrandName,
  primaryProductName,
  catalogProducts,
  categoryHref,
  categoryPath,
  relatedProducts,
} from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await catalogProduct((await params).slug);
  if (!product) return {};
  const content = productContentFor(product.slug);
  if (content) {
    // The copy already ends with the brand name, so skip the layout title template.
    return { title: { absolute: content.metaTitle }, description: content.metaDescription };
  }
  const brandList = await catalogBrands();
  const brand =
    leadingBrandName(product.name, brandList) ??
    brandList.find((b) => b.slug === product.brand)?.name ??
    brandName(product.brand);
  const title = primaryProductName(product.name);
  return {
    title: `${brand} ${product.mpn} – ${title}`,
    description: product.description || `${title} (${product.mpn}). Request a quote.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const [all, brandList] = await Promise.all([catalogProducts(), catalogBrands()]);
  const product = all.find((p) => p.slug === slug);
  if (!product) notFound();

  const title = primaryProductName(product.name);
  const matched = brandList.find((b) => b.slug === product.brand);
  const brandLabel = leadingBrandName(product.name, brandList) ?? matched?.name ?? brandName(product.brand);
  const brandSlug = matched?.slug ?? product.brand;
  const path = categoryPath(product.category);
  const related = relatedProducts(product, 4, all);
  const specs = Object.entries(product.specs);
  const content = productContentFor(product.slug);
  const lead = content?.shortDescription ?? product.description;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    sku: product.sku,
    mpn: product.mpn,
    description: lead,
    brand: { "@type": "Brand", name: brandLabel },
    image: product.images.length ? product.images : undefined,
  };

  return (
    <Container className="py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...path.map((c) => ({ label: c.name, href: categoryHref(c.slug) })),
          { label: title },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-3">
          <ProductImage
            src={product.images[0]}
            alt={title}
            brand={brandLabel}
            frame="square"
            preload
            sizes="(max-width: 1024px) 92vw, 560px"
            className="rounded-xl border border-border"
          />
          {product.images.length > 1 && (
            <ul className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((src) => (
                <li key={src}>
                  <ProductImage src={src} alt="" frame="square" sizes="96px" className="rounded-md border border-border" />
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <p className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-wider text-muted-foreground">
            <Link href={`/brands/${brandSlug}`} className="hover:underline">
              {brandLabel}
            </Link>
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight">{title}</h1>

          <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
            <dt className="text-muted-foreground">MPN</dt>
            <dd className="font-mono font-semibold">{product.mpn}</dd>
            <dt className="text-muted-foreground">SKU</dt>
            <dd className="font-mono">{product.sku}</dd>
            <dt className="text-muted-foreground">Category</dt>
            <dd>
              <Link href={categoryHref(product.category)} className="text-primary underline">
                {path.at(-1)?.name}
              </Link>
            </dd>
          </dl>

          {lead && <p className="mt-5 text-muted-foreground">{lead}</p>}

          <div className="mt-6 rounded-xl border border-border bg-card p-5">
            <ProductActions product={product} whatsappNumber={siteConfig.contact.whatsapp} />
          </div>

          <section aria-labelledby="datasheets" className="mt-6">
            <h2 id="datasheets" className="mb-2 font-bold">
              Technical documents
            </h2>
            {product.datasheets.length > 0 ? (
              <ul className="space-y-2">
                {product.datasheets.map((d) => (
                  <li key={d.url}>
                    <a
                      href={d.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      <DownloadIcon width={18} height={18} />
                      {d.title}
                      <span className="sr-only"> (PDF, opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-muted-foreground">
                No datasheet uploaded yet. Request one with your quote and we’ll send it over.
              </p>
            )}
          </section>
        </div>
      </div>

      {content && (
        <section className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}

            <div>
              <h2 className="text-2xl font-bold tracking-tight">Key features</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {content.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="font-bold">For business buyers</h2>
              <p className="mt-2 text-sm text-muted-foreground">{productBuyerNote}</p>
            </div>

            <div className="rounded-xl border border-border bg-muted p-5">
              <h2 className="font-bold">Applications</h2>
              <p className="mt-2 text-sm text-muted-foreground first-letter:uppercase">{content.applications}</p>
            </div>
          </div>
        </section>
      )}

      {specs.length > 0 && (
        <section aria-labelledby="specs" className="mt-12">
          <h2 id="specs" className="mb-4 text-2xl font-bold">
            Specifications
          </h2>
          <div className="overflow-hidden rounded-xl border bg-card">
            <Table>
              <TableBody>
                {[...specs, ["Manufacturer Part No.", product.mpn] as [string, string]].map(([k, v]) => (
                  <TableRow key={k}>
                    <TableHead scope="row" className="w-1/3 bg-muted px-4 py-2.5">
                      {k}
                    </TableHead>
                    <TableCell className="whitespace-normal px-4 py-2.5">{v}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-14">
          <SectionHeading title="Related products" />
          <ProductGrid products={related} />
        </section>
      )}
    </Container>
  );
}
