import type { Brand } from "@/lib/types";

/**
 * Brand list. To use a real logo, drop the file into `public/brands/` and set `logo`,
 * e.g. `logo: "/brands/parker.svg"`. Set `authorised: true` only for brands where the
 * company holds an authorised distributor agreement (shows a badge).
 */
export const brands: Brand[] = [
  { slug: "parker", name: "Parker", description: "Motion and control technologies." },
  { slug: "bosch-rexroth", name: "Bosch Rexroth", description: "Drive and control technology." },
  { slug: "festo", name: "Festo", description: "Pneumatic and electric automation." },
  { slug: "smc", name: "SMC", description: "Pneumatic control equipment." },
  { slug: "siemens", name: "Siemens", description: "Industrial automation and drives." },
  { slug: "omron", name: "Omron", description: "Sensing and control components." },
  { slug: "fluke", name: "Fluke", description: "Professional test and measurement tools." },
];
