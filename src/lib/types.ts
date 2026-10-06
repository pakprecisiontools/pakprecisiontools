export type Category = {
  slug: string;
  name: string;
  /** Slug of the parent category. Omit for top-level categories. */
  parent?: string;
  description?: string;
};

export type Brand = {
  slug: string;
  name: string;
  /** Path under /public, e.g. "/brands/parker.svg". Falls back to a text wordmark. */
  logo?: string;
  description?: string;
  /** Show an "Authorised distributor" badge. */
  authorised?: boolean;
};

export type Datasheet = { title: string; url: string };

export type Product = {
  slug: string;
  name: string;
  sku: string;
  /** Manufacturer Part Number */
  mpn: string;
  /** Brand slug */
  brand: string;
  /** Leaf category slug */
  category: string;
  description: string;
  specs: Record<string, string>;
  images: string[];
  datasheets: Datasheet[];
};

export type QuoteItem = {
  slug: string;
  name: string;
  sku: string;
  mpn: string;
  brand: string;
  quantity: number;
  note?: string;
};
