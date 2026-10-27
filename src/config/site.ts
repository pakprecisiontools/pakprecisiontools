const env = process.env;
const text = (value: string | undefined) => (value ?? "").trim();
const lines = (value: string | undefined) =>
  text(value)
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);

export const siteConfig = {
  name: text(env.NEXT_PUBLIC_COMPANY_NAME) || "PAK Precision Tools",
  shortName: "PAK",
  tagline: "Industrial parts, supplied and imported worldwide",
  description: "Importers and suppliers of hydraulic, pneumatic, automation and test equipment.",
  url: text(env.NEXT_PUBLIC_SITE_URL) || "http://localhost:3001",

  contact: {
    salesEmails: (env.SALES_EMAIL || text(env.NEXT_PUBLIC_CONTACT_EMAIL))
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean),
    publicEmail: text(env.NEXT_PUBLIC_CONTACT_EMAIL),
    whatsapp: text(env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    whatsappDisplay: text(env.NEXT_PUBLIC_WHATSAPP_DISPLAY),
    landline: text(env.NEXT_PUBLIC_LANDLINE),
  },

  address: {
    lines: lines(env.NEXT_PUBLIC_ADDRESS),
    mapUrl: text(env.NEXT_PUBLIC_MAP_URL),





    
  },

  hours: [
    { days: "Monday – Sunday", time: "9:00 AM – 7:00 PM" },
  ],

  sourcing: {
    intro:
      "We source and import industrial equipment from manufacturers and distributors worldwide, including parts that are discontinued or not held in local stock.",
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
