import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { SearchBar } from "@/components/layout/SearchBar";
import { ArrowRightIcon, BasketIcon, GlobeIcon, SearchIcon, ShieldIcon } from "@/components/icons";
import { BrandCard } from "@/components/product/BrandMark";
import { ProductGrid } from "@/components/product/ProductCard";
import { buttonClass, Container, SectionHeading } from "@/components/shared";
import { brands, catalogProducts, categoryHref, childCategories, productsInCategory, topCategories } from "@/lib/catalog";

export default async function HomePage() {
  const products = await catalogProducts();
  const featured = products.slice(0, 6);

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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest opacity-80">{siteConfig.tagline}</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Find the exact part. Or we’ll import it for you.
          </h1>
          <p className="mt-4 max-w-2xl text-lg opacity-90">
            Search by part number or brand, build a quote list in minutes, and let our team source anything that isn’t
            on the shelf.
          </p>
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
            <Link
              href="/source"
              className={buttonClass("light", "lg")}
            >
              Source a part
              <ArrowRightIcon width={18} height={18} />
            </Link>
          </div>
         </div>
         <ContactForm compact className="w-full lg:justify-self-end" />
        </Container>
      </section>

      <Container className="space-y-16 py-14">
        <section aria-label="Categories">
          <SectionHeading title="Shop by category" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topCategories().map((c) => (
              <li key={c.slug}>
                <Link
                  href={categoryHref(c.slug)}
                  className="flex h-full flex-col rounded-lg border border-border bg-card p-5 transition hover:border-primary hover:shadow-md"
                >
                  <span className="text-lg font-bold">{c.name}</span>
                  <span className="mt-1 text-sm text-muted-foreground">{c.description}</span>
                  <span className="mt-3 text-xs text-muted-foreground">
                    {childCategories(c.slug)
                      .map((x) => x.name)
                      .join(" · ")}
                  </span>
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
            title="Featured products"
            action={
              <Link href="/products" className="text-sm font-semibold text-primary underline">
                View all products
              </Link>
            }
          />
          <ProductGrid products={featured} />
        </section>

        <section aria-label="Brands">
          <SectionHeading title="Brands we supply" />
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-2">
            {brands.map((b) => (
              <li key={b.slug}>
                <BrandCard brand={b} />
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-card p-6 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Can’t find it? We can import it.</h2>
              <p className="mt-3 text-muted-foreground">{siteConfig.sourcing.intro}</p>
              <Link href="/source" className={buttonClass("dark", "lg", "mt-6")}>
                Send a sourcing request
                <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
            <ol className="grid gap-4 sm:grid-cols-3">
              {siteConfig.sourcing.steps.map((s, i) => (
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
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: SearchIcon, title: "Part-number search", text: "Exact, partial or brand search that understands MPNs." },
              { icon: BasketIcon, title: "One quote, many items", text: "Build a basket and send a single request." },
              { icon: GlobeIcon, title: "Worldwide sourcing", text: "Discontinued or unlisted parts imported on request." },
              { icon: ShieldIcon, title: "Importers and suppliers", text: "Hydraulic, pneumatic, automation and test equipment." },
            ].map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-muted text-primary">
                  <Icon width={22} height={22} />
                </span>
                <div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}
