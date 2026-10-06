import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

/** The official logo lives at /public/logo.png (916×402). */
export function Logo({ className, height = 44 }: { className?: string; height?: number }) {
  return (
    <Link href="/" className={`inline-flex shrink-0 items-center ${className ?? ""}`} aria-label={`${siteConfig.name} – home`}>
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={Math.round((916 / 402) * height)}
        height={height}
        priority
        className="logo-img w-auto"
        style={{ height }}
      />
    </Link>
  );
}
