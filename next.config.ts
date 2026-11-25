import type { NextConfig } from "next";
import { categoryAliases } from "./src/data/category-aliases";

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
        permanent: true,
      })),
      // Duplicate catalogue rows that point at the canonical product page.
      {
        source: "/products/fluke-302-325-clamp-meter",
        destination: "/products/fluke-302-fluke-323-fluke-325-compact-clamp-meters",
        permanent: true,
      },
      {
        source: "/products/fluke-376-fc-iflex",
        destination: "/products/fluke-376-fc-1000a-ac-dc-wireless-clamp-meter-with-iflex",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
