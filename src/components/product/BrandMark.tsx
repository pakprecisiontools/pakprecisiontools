"use client";

import Link from "next/link";
import { useState } from "react";
import type { Brand } from "@/lib/types";
import { cn } from "../shared";

function monogram(name: string) {
  const letters = name.replace(/[^A-Za-z0-9]/g, "");
  return (letters.slice(0, 2) || name.slice(0, 2)).toUpperCase();
}

/** Brand logo if one is configured, otherwise a short monogram. The brand name is shown separately. */
export function BrandMark({ brand, className }: { brand: Brand; className?: string }) {
  const [failed, setFailed] = useState(false);

  if (!brand.logo || failed) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "grid h-8 min-w-8 place-items-center rounded-md bg-muted px-1 text-[10px] font-extrabold tracking-wide",
          className,
        )}
      >
        {monogram(brand.name)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- remote wordmarks and local SVG logos
    <img
      src={brand.logo}
      alt=""
      width={96}
      height={32}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("max-h-8 w-auto max-w-full object-contain", className)}
    />
  );
}

/** Compact brand tile: logo above the name. No description and no product count. */
export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="flex h-full flex-col items-center gap-1.5 rounded-md border border-border bg-card px-1.5 py-2 text-center transition hover:border-primary hover:shadow-sm"
    >
      <span className="flex h-8 w-full items-center justify-center">
        <BrandMark brand={brand} />
      </span>
      <span className="line-clamp-2 w-full text-[11px] font-medium leading-tight">{brand.name}</span>
    </Link>
  );
}
