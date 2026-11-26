import type { NextConfig } from "next";
import { categoryAliases } from "./src/data/category-aliases";
import { productRedirects } from "./src/data/product-redirects";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps catalog photos sharp after resizing. 75 stays available for other images.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // Category URLs that were published before the SEO slug migration.
      ...Object.entries(categoryAliases).map(([legacy, canonical]) => ({
        source: `/category/${legacy}`,
        destination: `/category/${canonical}`,
        statusCode: 301,
      })),
      // Duplicate catalogue rows that point at the canonical product page.
      ...Object.entries(productRedirects).map(([source, canonical]) => ({
        source: `/products/${source}`,
        destination: `/products/${canonical}`,
        statusCode: 301,
      })),
    ];
  },
};

export default nextConfig;
