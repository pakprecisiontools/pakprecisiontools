import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { SourcingForm } from "@/components/forms/SourcingForm";
import { CheckIcon } from "@/components/icons";
import { Breadcrumbs, Container, PageHeader } from "@/components/shared";

export const metadata: Metadata = {
  title: "Source a part – custom import request",
  description:
    "Can’t find the part you need? We source and import industrial equipment worldwide. Send us the details.",
};

export default async function SourcePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { part } = await searchParams;
  const initialPart = (Array.isArray(part) ? part[0] : part)?.slice(0, 200) ?? "";

  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Source a part" }]} />
      <PageHeader title="Source a part / custom import request" intro={siteConfig.sourcing.intro} />

      <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
        <SourcingForm initialPart={initialPart} whatsappNumber={siteConfig.contact.whatsapp} />

        <aside className="space-y-6 rounded-lg border border-border bg-card p-5 lg:sticky lg:top-24">
          <div>
            <h2 className="mb-3 font-bold">How it works</h2>
            <ol className="space-y-3">
              {siteConfig.sourcing.steps.map((s, i) => (
                <li key={s.title} className="flex gap-3">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="mb-3 font-bold">Our import capabilities</h2>
            <ul className="space-y-2 text-sm">
              {siteConfig.sourcing.capabilities.map((c) => (
                <li key={c} className="flex gap-2">
                  <CheckIcon width={18} height={18} className="mt-0.5 shrink-0 text-success" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </Container>
  );
}
