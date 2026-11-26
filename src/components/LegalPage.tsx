import type { ReactNode } from "react";
import { Breadcrumbs, Container, PageHeader } from "./shared";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      <PageHeader title={title} />
      <div className="max-w-3xl space-y-4 leading-relaxed [&_h2]:pt-4 [&_h2]:text-xl [&_h2]:font-bold [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
        {children}
      </div>
    </Container>
  );
}
