import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Breadcrumbs, buttonClass, Container, PageHeader } from "@/components/shared";

export const metadata: Metadata = {
  title: "About us",
  description: `About ${siteConfig.name}: industrial equipment supply and worldwide sourcing.`,
};

export default function AboutPage() {
  const { address, sections } = siteConfig;
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About us" }]} />
      <PageHeader title={`About ${siteConfig.name}`} intro={siteConfig.description} />
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div className="max-w-none space-y-4 text-lg leading-relaxed">
          {sections.about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <Link href="/source" className={buttonClass("dark", "lg")}>
            Source a part
          </Link>
        </div>
        <aside className="h-fit rounded-lg border border-border bg-card p-5">
          <h2 className="font-bold">Contact</h2>
          {address.lines.length ? (
            <address className="mt-2 not-italic text-muted-foreground">
              {[...address.lines, address.city, address.country].filter(Boolean).map((line, i) => (
                <span key={`${line}-${i}`} className="block">
                  {line}
                </span>
              ))}
            </address>
          ) : null}
          <Link href="/contact" className="mt-4 inline-block font-semibold text-primary underline">
            Send a message
          </Link>
        </aside>
      </div>
    </Container>
  );
}
