import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import { Breadcrumbs, buttonClass, Container, PageHeader } from "@/components/shared";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} by phone, WhatsApp or email.`,
};

export default function ContactPage() {
  const { contact, address, hours } = siteConfig;
  return (
    <Container className="py-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
      <PageHeader title="Contact us" intro="Send us a message, or for a price the fastest way is a quote request or WhatsApp." />

      <div className="grid items-start gap-6 lg:grid-cols-[1fr_1.3fr]">
       <div className="space-y-6 lg:order-1">
        <section className="space-y-4 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Sales</h2>
          <ul className="space-y-3">
            {contact.whatsapp ? (
              <li className="flex gap-3">
                <WhatsAppIcon className="mt-0.5 shrink-0" />
                <a href={whatsappLink("Hello, I would like some help.", contact.whatsapp)} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  WhatsApp {contact.whatsappDisplay || contact.whatsapp}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            {contact.landline ? (
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 shrink-0" />
                <a href={`tel:${contact.landline.replace(/[^\d+]/g, "")}`} className="hover:underline">
                  {contact.landline}
                </a>
              </li>
            ) : null}
            {contact.publicEmail ? (
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 shrink-0" />
                <a href={`mailto:${contact.publicEmail}`} className="hover:underline">
                  {contact.publicEmail}
                </a>
              </li>
            ) : null}
            {address.lines.length ? (
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 shrink-0" />
                <address className="not-italic">{address.lines.join(", ")}</address>
              </li>
            ) : null}
          </ul>
        </section>

        <section className="rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-bold">Business hours</h2>
          <dl className="mt-3 space-y-1.5">
            {hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-muted-foreground">{h.days}</dt>
                <dd className="font-medium">{h.time}</dd>
              </div>
            ))}
          </dl>
        </section>
       </div>

        <ContactForm className="lg:order-2" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/products" className={buttonClass("default", "lg")}>
          Browse products
        </Link>
        <Link href="/source" className={buttonClass("dark", "lg")}>
          Source a part
        </Link>
      </div>
    </Container>
  );
}
