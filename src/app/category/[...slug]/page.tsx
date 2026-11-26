import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CatalogView } from "@/components/catalog/CatalogView";
import { SourcingCta } from "@/components/catalog/SourcingCta";
import { ChevronRightIcon } from "@/components/icons";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";
import { categoryContent } from "@/data/category-content";
import {
  categories,
  categoryHref,
  categoryPath,
  childCategories,
  parseFilters,
  catalogProducts,
  productsInCategory,
  resolveCategory,
} from "@/lib/catalog";

type Props = {
  params: Promise<{ slug: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({
    slug: categoryPath(c.slug).map((x) => x.slug),
  }));
}

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  const category = resolveCategory((await params).slug);
  if (!category) return {};
  const content = categoryContent[category.slug];
  if (content) {
    // The copy already ends with the brand name, so skip the layout title template.
    return {
      title: { absolute: content.metaTitle },
      description: content.metaDescription,
      alternates: { canonical: categoryHref(category.slug) },
    };
  }
  return {
    title: category.name,
    description: category.description ?? `Browse ${category.name} products and request a quote.`,
    alternates: { canonical: categoryHref(category.slug) },
  };
}

export default async function CategoryPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const category = resolveCategory(slug);
  if (!category) notFound();

  const filters = parseFilters(await searchParams);
  const base = productsInCategory(category.slug, await catalogProducts());
  const children = childCategories(category.slug);
  const path = categoryPath(category.slug);
  const pathname = categoryHref(category.slug);
  const content = categoryContent[category.slug];

  const faqJsonLd = content
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <Container className="py-8">
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          ...path.slice(0, -1).map((c) => ({ label: c.name, href: categoryHref(c.slug) })),
          { label: category.name },
        ]}
      />
      <PageHeader title={content?.h1 ?? category.name} intro={content?.intro ?? category.description} />

      {children.length > 0 && (
        <nav aria-label="Subcategories" className="mb-8">
          <ul className="flex flex-wrap gap-2">
            {children.map((c) => (
              <li key={c.slug}>
                <Link
                  href={categoryHref(c.slug)}
                  className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-medium hover:border-primary"
                >
                  {c.name}
                  <span className="ml-2 text-xs text-muted-foreground">{productsInCategory(c.slug).length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <CatalogView
        base={base}
        filters={filters}
        pathname={pathname}
        showCategories={children.length > 0}
        empty={
          base.length === 0 ? (
            <SourcingCta compact />
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

      {content && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-2xl font-bold tracking-tight">{content.supplier.heading}</h2>
          <p className="mt-3 max-w-4xl text-muted-foreground">{content.supplier.body}</p>

          <details className="group mt-8 rounded-xl border border-border bg-card">
            <summary className="flex cursor-pointer list-none items-center gap-2 px-5 py-4 font-semibold marker:hidden sm:px-6 [&::-webkit-details-marker]:hidden">
              <ChevronRightIcon
                width={18}
                height={18}
                className="shrink-0 text-primary transition-transform group-open:rotate-90"
              />
              Read more about {category.name}
            </summary>
            <div className="space-y-10 border-t border-border px-5 py-6 sm:px-6">
              <section>
                <h2 className="text-xl font-bold tracking-tight">{content.guide.heading}</h2>
                <div className="mt-4 gap-x-10 lg:columns-2">
                  {content.guide.sections.map((section) => (
                    <div key={section.h3} className="mb-5 break-inside-avoid">
                      <h3 className="font-semibold">{section.h3}</h3>
                      <p className="mt-1 leading-relaxed text-muted-foreground">{section.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              {content.pricing && (
                <section>
                  <h2 className="text-xl font-bold tracking-tight">{content.pricing.heading}</h2>
                  <p className="mt-2 max-w-4xl leading-relaxed text-muted-foreground">{content.pricing.body}</p>
                </section>
              )}

              <section>
                <h2 className="text-xl font-bold tracking-tight">{content.whyBuy.heading}</h2>
                <ul className="mt-3 grid gap-x-10 gap-y-2 text-muted-foreground sm:grid-cols-2">
                  {content.whyBuy.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </details>

          <section aria-labelledby="category-faq" className="mt-12">
            <h2 id="category-faq" className="text-2xl font-bold tracking-tight">
              {content.faqHeading}
            </h2>
            <div className="mt-4 grid items-start gap-3 lg:grid-cols-2">
              {content.faqs.map((item) => (
                <details key={item.q} className="group rounded-xl border border-border bg-card px-5 py-4">
                  <summary className="flex cursor-pointer list-none items-start gap-2 font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                    <ChevronRightIcon
                      width={18}
                      height={18}
                      className="mt-0.5 shrink-0 text-primary transition-transform group-open:rotate-90"
                    />
                    {item.q}
                  </summary>
                  <p className="mt-2 pl-6 text-muted-foreground">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        </section>
      )}
    </Container>
  );
}
