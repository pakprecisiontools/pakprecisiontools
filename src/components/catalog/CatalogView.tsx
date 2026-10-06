import { buildFacets, filterProducts, type Filters } from "@/lib/catalog";
import type { Product } from "@/lib/types";
import { ProductGrid } from "../product/ProductCard";
import { FilterBar } from "./FilterBar";

/** Filter sidebar + result grid, shared by the products, category, brand and search pages. */
export function CatalogView({
  base,
  filters,
  pathname,
  preserve,
  showCategories,
  empty,
}: {
  base: Product[];
  filters: Filters;
  pathname: string;
  preserve?: Record<string, string>;
  showCategories?: boolean;
  empty: React.ReactNode;
}) {
  const facets = buildFacets(base, filters);
  const results = filterProducts(base, filters);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
      <FilterBar
        facets={facets}
        filters={filters}
        pathname={pathname}
        preserve={preserve}
        showCategories={showCategories}
      />
      <section aria-label="Results" className="min-w-0 flex-1">
        <p className="mb-4 text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "product" : "products"}
        </p>
        {results.length > 0 ? (
          <ProductGrid products={results} />
        ) : (
          <div className="rounded-lg border border-dashed border-border bg-card p-8 text-center">{empty}</div>
        )}
      </section>
    </div>
  );
}
