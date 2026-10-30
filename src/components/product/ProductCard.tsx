import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { brandName, leadingBrandName, primaryProductName } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import { AddToQuoteButton } from "../quote/AddToQuoteButton";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  const title = primaryProductName(product.name);
  const brand = leadingBrandName(product.name) ?? brandName(product.brand);
  return (
    <Card className="h-full w-full gap-0 overflow-hidden py-0 shadow-none transition hover:shadow-md">
      <Link href={href} tabIndex={-1} aria-hidden="true" className="block">
        <ProductImage src={product.images[0]} alt={title} brand={brand} />
      </Link>
      <CardContent className="flex flex-1 flex-col gap-1 p-3">
        <p className="text-xs font-bold tracking-wide">{brand}</p>
        <h3 className="mt-1 text-sm font-semibold leading-snug">
          <Link href={href} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-xs leading-snug text-muted-foreground">
          MPN: <span className="font-mono break-words text-foreground">{product.mpn}</span>
        </p>
        <AddToQuoteButton product={product} size="sm" className="mt-auto pt-3" />
      </CardContent>
    </Card>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="@container">
      <ul className="grid grid-cols-2 gap-3 @sm:grid-cols-3 @3xl:grid-cols-4 @5xl:grid-cols-5">
        {products.map((p) => (
          <li key={p.slug} className="flex min-w-0">
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
