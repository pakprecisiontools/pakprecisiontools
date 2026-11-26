import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { SearchBar } from "@/components/layout/SearchBar";
import {
  ArrowRightIcon,
  BasketIcon,
  CheckIcon,
  ChevronRightIcon,
  GlobeIcon,
  PinIcon,
  SearchIcon,
  ShieldIcon,
} from "@/components/icons";
import { BrandGrid } from "@/components/product/BrandMark";
import { ProductGrid } from "@/components/product/ProductCard";
import { buttonClass, Container, SectionHeading } from "@/components/shared";
import { catalogBrands, catalogProducts, categoryHref, productsInCategory, topCategories } from "@/lib/catalog";

/** One icon per item in siteConfig.sections.why.items, in the same order. */
const whyIcons = [SearchIcon, BasketIcon, GlobeIcon, ShieldIcon, CheckIcon, PinIcon];

export const metadata: Metadata = {
  // The layout title template doesn't apply to the root page, so add the brand here.
  title: `Industrial Instruments Supplier Pakistan | ${siteConfig.name}`,
};

export default async function HomePage() {
  const products = await catalogProducts();
  const brands = await catalogBrands();
  const featured = products.slice(0, 6);
  const { hero, sections, sourcing } = siteConfig;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white">
        {/* Soft brand-blue glow (decorative) so the white form card stands out on the dark hero. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 90% at 85% 40%, rgba(0,71,187,0.55) 0%, rgba(0,71,187,0.18) 45%, transparent 75%)",
          }}
        />
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
         <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80">{hero.eyebrow}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">{hero.intro}</p>
          <div className="mt-8 max-w-3xl">
            <SearchBar size="lg" id="hero-search" />
            <p className="mt-2 text-sm opacity-80">
              Try: <Link href="/search?q=Fluke%20376" className="underline">Fluke 376</Link>,{" "}
              <Link href="/search?q=MIT515" className="underline">MIT515</Link>,{" "}
              <Link href="/search?q=S7-1200" className="underline">S7-1200</Link>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/products" className={buttonClass("default", "lg", "ring-1 ring-white/30")}>
              Browse catalogue
            </Link>
            <Link href="/source" className={buttonClass("light", "lg")}>
              Source a part
              <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
          <p className="mt-6 text-sm opacity-80">{hero.proof.join(" · ")}</p>
         </div>
         <ContactForm compact className="w-full lg:justify-self-end" />
        </Container>
      </section>

      <Container className="space-y-16 py-14">
        <section aria-label="Categories">
          <SectionHeading title={sections.categories.title} intro={sections.categories.intro} />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topCategories().map((c) => (
              <li key={c.slug}>
                <Link
                  href={categoryHref(c.slug)}
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-5 transition hover:border-primary hover:shadow-md"
                >
                  <span className="text-lg font-bold">{c.name}</span>
                  <span className="mt-1 text-sm text-muted-foreground">{c.description}</span>
                  <span className="mt-auto pt-4 text-sm font-semibold text-primary">
                    {productsInCategory(c.slug, products).length} products →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading
            title={sections.popular.title}
            intro={sections.popular.intro}
            action={
              <Link href="/products" className="text-sm font-semibold text-primary underline">
                View all products
              </Link>
            }
          />
          <ProductGrid products={featured} />
        </section>

        <section aria-label="Brands">
          <SectionHeading
            title={sections.brands.title}
            intro={sections.brands.intro}
            action={
              <Link href="/brands" className="text-sm font-semibold text-primary underline">
                View all brands
              </Link>
            }
          />
          <BrandGrid brands={brands} />
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">{sourcing.title}</h2>
              <p className="mt-3 text-muted-foreground">{sourcing.intro}</p>
              <Link href="/source" className={buttonClass("dark", "lg", "mt-6")}>
                {sourcing.cta}
                <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3">
              {sourcing.steps.map((s, i) => (
                <li key={s.title} className="rounded-lg bg-muted p-4">
                  <span className="grid size-8 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-label="Why buy from us">
          <SectionHeading title={sections.why.title} />
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.why.items.map(({ title, text }, i) => {
              const Icon = whyIcons[i % whyIcons.length];
              return (
                <li key={title} className="flex gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-muted text-primary">
                    <Icon width={22} height={22} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-label="Industries we supply">
          <SectionHeading title={sections.industries.title} intro={sections.industries.intro} />
          <ul className="flex flex-wrap gap-2">
            {sections.industries.items.map((label) => (
              <li key={label}>
                <span className="inline-flex h-10 items-center rounded-full border border-border bg-card px-4 text-sm font-medium">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <section aria-labelledby="home-about">
            <h2 id="home-about" className="text-3xl font-bold tracking-tight">
              {sections.about.title}
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground">
              {sections.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section aria-labelledby="home-faq">
            <h2 id="home-faq" className="text-3xl font-bold tracking-tight">
              {sections.faq.title}
            </h2>
            <div className="mt-4 space-y-3">
              {sections.faq.items.map((item) => (
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
        </div>
      </Container>
    </>
  );
}
