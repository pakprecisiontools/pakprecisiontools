import Link from "next/link";
import { siteConfig } from "@/config/site";
import { sourcingWhatsappMessage, whatsappLink } from "@/lib/whatsapp";
import { ArrowRightIcon, GlobeIcon, WhatsAppIcon } from "../icons";
import { buttonClass } from "../shared";

/** The "Can't find it? We can import it" fallback block. */
export function SourcingCta({ query, compact = false }: { query?: string; compact?: boolean }) {
  const href = query ? `/source?part=${encodeURIComponent(query)}` : "/source";
  return (
    <div
      className={
        compact
          ? "flex flex-col items-center gap-3 text-center"
          : "flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center sm:p-10"
      }
    >
      <span className="grid size-12 place-items-center rounded-full bg-muted text-primary">
        <GlobeIcon width={26} height={26} />
      </span>
      <h2 className="text-xl font-bold sm:text-2xl">Didn’t find what you are looking for?</h2>
      <p className="max-w-2xl text-muted-foreground">
        We source and import industrial equipment worldwide. Tell us what you need.
      </p>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        <Link href={href} className={buttonClass("dark", "lg")}>
          Request a custom import
          <ArrowRightIcon width={18} height={18} />
        </Link>
        <a
          href={whatsappLink(sourcingWhatsappMessage(query), siteConfig.contact.whatsapp)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("whatsapp", "lg")}
        >
          <WhatsAppIcon width={22} height={22} />
          Ask on WhatsApp
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
