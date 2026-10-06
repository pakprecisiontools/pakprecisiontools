/**
 * Central business configuration.
 * Replace the placeholder values (or set the matching env vars in `.env.local`)
 * with the real details supplied by the client.
 */
const env = process.env;

export const siteConfig = {
  name: env.NEXT_PUBLIC_COMPANY_NAME ?? "PAK Precision Tools",
  shortName: "PAK",
  tagline: "Industrial parts, supplied and imported worldwide",
  description:
    "Authorised supplier of hydraulic, pneumatic, automation and test equipment. Request a quote or let us source and import the part you need.",
  url: env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",

  contact: {
    /** Inboxes that receive RFQs (comma separated in env). Used once email is wired up. */
    salesEmails: (env.SALES_EMAIL ?? "sales@example.com")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean),
    /** Public email shown on the site. */
    publicEmail: env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@example.com",
    /** WhatsApp Business number, digits only with country code (no + or spaces). */
    whatsapp: env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "920000000000",
    whatsappDisplay: env.NEXT_PUBLIC_WHATSAPP_DISPLAY ?? "+92 000 0000000",
    landline: env.NEXT_PUBLIC_LANDLINE ?? "+92 00 0000 0000",
  },

  address: {
    lines: ["Office / Showroom address line 1", "City, Province, Country"],
    mapUrl: "",
  },

  hours: [
    { days: "Monday – Friday", time: "9:00 – 18:00" },
    { days: "Saturday", time: "10:00 – 15:00" },
    { days: "Sunday", time: "Closed" },
  ],

  sourcing: {
    intro:
      "We source and import industrial equipment from manufacturers and authorised distributors worldwide, including parts that are discontinued or not held in local stock.",
    steps: [
      {
        title: "Send us the details",
        text: "Part number, brand, quantity and any drawings, datasheets or photos of the old part.",
      },
      {
        title: "We identify and quote",
        text: "We verify the exact part or a compatible alternative and return a quotation with lead time.",
      },
      {
        title: "We import and deliver",
        text: "Once approved, we handle purchasing, freight, customs clearance and delivery to your site.",
      },
    ],
    // TODO(client): replace with real sourcing countries, lead times and freight capabilities.
    capabilities: [
      "Sourcing regions: Europe, USA, Japan, China, Middle East",
      "Typical lead time: 2–4 weeks (air freight), 6–10 weeks (sea freight)",
      "Air and sea freight with customs clearance support",
      "Genuine parts with manufacturer documentation on request",
    ],
  },
} as const;

export const NAV_LINKS = [
  { href: "/products", label: "Products" },
  { href: "/brands", label: "Brands" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
