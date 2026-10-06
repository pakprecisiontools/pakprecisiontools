"use client";

import Link from "next/link";
import { BasketIcon } from "../icons";
import { useQuote } from "../quote/QuoteProvider";
import { buttonClass } from "../shared";

export function QuoteLink() {
  const { count, ready } = useQuote();
  return (
    <Link href="/quote" className={buttonClass("outline", "default", "relative")}>
      <BasketIcon width={20} height={20} />
      <span className="hidden sm:inline">Quote</span>
      {ready && count > 0 && (
        <span
          aria-hidden="true"
          className="absolute -right-2 -top-2 grid min-w-5 place-items-center rounded-full bg-charcoal px-1 text-xs font-bold text-charcoal-foreground"
        >
          {count}
        </span>
      )}
      <span className="sr-only">
        {" "}
        basket{ready && count > 0 ? `, ${count} ${count === 1 ? "item" : "items"}` : ", empty"}
      </span>
    </Link>
  );
}
