import Link from "next/link";
import { NAV_LINKS, siteConfig } from "@/config/site";
import { categoryHref, topCategories } from "@/lib/catalog";
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../icons";
import { Container } from "../shared";
import { Logo } from "./Logo";

export function Footer() {
  const { contact, address, hours } = siteConfig;
  return (
    <footer className="mt-16 border-t border-border bg-card">
      <Container className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">{siteConfig.description}</p>
        </div>

        <nav aria-label="Categories">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider">Categories</h2>
          <ul className="space-y-2 text-sm">
            {topCategories().map((c) => (
              <li key={c.slug}>
                <Link href={categoryHref(c.slug)} className="text-muted-foreground hover:text-foreground hover:underline">
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/source" className="font-semibold text-primary hover:underline">
                Source a Part
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider">Company</h2>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted-foreground hover:text-foreground hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground hover:underline">
                Terms of Inquiries &amp; Quotations
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider">Contact</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {address.lines.length ? (
              <li className="flex gap-2">
                <PinIcon width={18} height={18} className="mt-0.5 shrink-0" />
                <address className="not-italic">{address.lines.join(", ")}</address>
              </li>
            ) : null}
            {contact.landline ? (
              <li className="flex gap-2">
                <PhoneIcon width={18} height={18} className="mt-0.5 shrink-0" />
                <a href={`tel:${contact.landline.replace(/[^\d+]/g, "")}`} className="hover:text-foreground hover:underline">
                  {contact.landline}
                </a>
              </li>
            ) : null}
            {contact.whatsapp ? (
              <li className="flex gap-2">
                <WhatsAppIcon width={18} height={18} className="mt-0.5 shrink-0" />
                <a href={`https://wa.me/${contact.whatsapp}`} className="hover:text-foreground hover:underline">
                  {contact.whatsappDisplay || contact.whatsapp}
                </a>
              </li>
            ) : null}
            {contact.publicEmail ? (
              <li className="flex gap-2">
                <MailIcon width={18} height={18} className="mt-0.5 shrink-0" />
                <a href={`mailto:${contact.publicEmail}`} className="hover:text-foreground hover:underline">
                  {contact.publicEmail}
                </a>
              </li>
            ) : null}
          </ul>
          <h3 className="mb-1 mt-5 text-sm font-bold">Business hours</h3>
          <ul className="space-y-0.5 text-sm text-muted-foreground">
            {hours.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All brand names and logos are property of their respective owners.
      </div>
    </footer>
  );
}
