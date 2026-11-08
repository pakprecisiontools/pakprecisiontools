import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const origin = siteConfig.url.replace(/\/$/, "");
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/quote", "/search"],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: new URL(origin).host,
  };
}
