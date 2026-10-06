import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { brandName } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import { AddToQuoteButton } from "../quote/AddToQuoteButton";
import { ProductImage } from "./ProductImage";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  const brand = brandName(product.brand);
  return (
    <Card className="w-full gap-0 py-0 transition hover:shadow-md">
      <Link href={href} tabIndex={-1} aria-hidden="true">
        <ProductImage src={product.images[0]} alt={product.name} brand={brand} />
      </Link>
      <CardContent className="flex flex-1 flex-col p-4">
        <Badge variant="secondary" className="uppercase tracking-wider">
          {brand}
        </Badge>
        <h3 className="mt-2 font-semibold leading-snug">
          <Link href={href} className="hover:underline">
            {product.name}
          </Link>
        </h3>
        <dl className="mt-2 space-y-0.5 text-sm text-muted-foreground">
          <div className="flex gap-1">
            <dt>MPN:</dt>
            <dd className="break-all font-mono text-foreground">{product.mpn}</dd>
          </div>
          <div className="flex gap-1">
            <dt>SKU:</dt>
            <dd className="font-mono">{product.sku}</dd>
          </div>
        </dl>
        <AddToQuoteButton product={product} size="sm" className="mt-auto pt-4" />
      </CardContent>
    </Card>
  );
}

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((p) => (
        <li key={p.slug} className="flex">
          <ProductCard product={p} />
        </li>
      ))}
    </ul>
  );
}
