import { Badge } from "@/components/ui/badge";
import type { Brand } from "@/lib/types";
import { cn } from "../shared";

/** Brand logo if one is configured, otherwise a clean text wordmark. */
export function BrandMark({ brand, className }: { brand: Brand; className?: string }) {
  return brand.logo ? (
    // eslint-disable-next-line @next/next/no-img-element -- static logo assets
    <img src={brand.logo} alt={brand.name} loading="lazy" className={cn("max-h-10 w-auto object-contain", className)} />
  ) : (
    <span className={cn("text-lg font-extrabold uppercase tracking-wide", className)}>{brand.name}</span>
  );
}

export function AuthorisedBadge() {
  return <Badge className="bg-success/10 text-success">Authorised distributor</Badge>;
}
