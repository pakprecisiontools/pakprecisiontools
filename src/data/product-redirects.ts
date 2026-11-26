/**
 * Product slugs that were published twice. The key redirects (301) to the value,
 * and the sitemap skips the key so it never lists a URL that redirects.
 */
export const productRedirects: Record<string, string> = {
  "fluke-302-325-clamp-meter": "fluke-302-fluke-323-fluke-325-compact-clamp-meters",
  "fluke-376-fc-iflex": "fluke-376-fc-1000a-ac-dc-wireless-clamp-meter-with-iflex",
};
