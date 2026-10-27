import Link from "next/link";
import { NAV_LINKS, siteConfig } from "@/config/site";
import { categoryNav, subcategoryNav } from "@/lib/catalog";
import { PhoneIcon, WhatsAppIcon } from "../icons";
import { buttonClass } from "../shared";
import { CategoryDropdown } from "./CategoryDropdown";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { QuoteLink } from "./QuoteLink";
import { SearchBar } from "./SearchBar";

export function Header() {
  const categories = categoryNav();
  const subcategories = subcategoryNav();
  const mobileLinks = [{ href: "/source", label: "Source a Part" }, ...NAV_LINKS];

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      {/* Utility bar */}
      <div className="hidden bg-ink text-white lg:block">
        <div className="mx-auto flex h-9 w-full max-w-screen-2xl items-center justify-between px-8 text-sm">
          <p>{siteConfig.tagline}</p>
          <p className="flex items-center gap-5">
            {siteConfig.contact.landline ? (
              <a href={`tel:${siteConfig.contact.landline.replace(/[^\d+]/g, "")}`} className="flex items-center gap-1.5 hover:underline">
                <PhoneIcon width={15} height={15} />
                {siteConfig.contact.landline}
              </a>
            ) : null}
            {siteConfig.contact.whatsapp ? (
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:underline"
              >
                <WhatsAppIcon width={15} height={15} />
                {siteConfig.contact.whatsappDisplay || siteConfig.contact.whatsapp}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : null}
          </p>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center gap-3 lg:gap-6">
          <Logo />
          <div className="mx-2 hidden max-w-2xl flex-1 lg:block">
            <SearchBar id="site-search-desktop" />
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/source" className={buttonClass("dark", "default", "hidden sm:inline-flex")}>
              Source a Part
            </Link>
            <QuoteLink />
            <MobileNav links={mobileLinks} categories={categories} />
          </div>
        </div>

        <div className="pb-3 lg:hidden">
          <SearchBar id="site-search-mobile" />
        </div>

        <nav aria-label="Main" className="hidden h-11 w-full items-center border-t border-border lg:flex">
          <CategoryDropdown items={subcategories} />
          <div className="ml-auto flex items-center">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-2.5 py-2 text-sm whitespace-nowrap text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
