const env = process.env;
const text = (value: string | undefined) => (value ?? "").trim();
const lines = (value: string | undefined) =>
  text(value)
    .split("|")
    .map((line) => line.trim())
    .filter(Boolean);

const whatsapp = text(env.NEXT_PUBLIC_WHATSAPP_NUMBER);
const whatsappDisplay = text(env.NEXT_PUBLIC_WHATSAPP_DISPLAY);
const landline = text(env.NEXT_PUBLIC_LANDLINE);
const publicEmail = text(env.NEXT_PUBLIC_CONTACT_EMAIL) || "sales@pakprecisiontools.com";

export const siteConfig = {
  name: text(env.NEXT_PUBLIC_COMPANY_NAME) || "PAK Precision Tools",
  shortName: "PAK",
  tagline: "Industrial instruments and parts, supplied across Pakistan and imported worldwide",
  description:
    "PAK Precision Tools is an industrial equipment supplier and importer in Pakistan, supplying test and measurement, process, automation, calibration and safety equipment to businesses nationwide.",
  metaDescription:
    "Importer and supplier of test & measurement, automation, calibration and safety equipment in Pakistan. Search by part number and get a quote in 1 business day.",
  url: text(env.NEXT_PUBLIC_SITE_URL) || "https://www.pakprecisiontools.com.pk",

  contact: {
    salesEmails: (env.SALES_EMAIL || publicEmail)
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean),
    publicEmail,
    whatsapp,
    whatsappDisplay,
    landline,
  },

  address: {
    lines: lines(env.NEXT_PUBLIC_ADDRESS),
    city: "Karachi",
    country: "Pakistan",
    mapUrl: text(env.NEXT_PUBLIC_MAP_URL),
  },

  hours: [
    { days: "Monday to Saturday", time: "9:00 AM – 7:00 PM" },
  ],

  hero: {
    eyebrow: "Find the exact part. Or we’ll import it for you.",
    title: "Industrial Instruments & Equipment Supplier in Pakistan",
    intro:
      "An industrial instruments supplier in Pakistan for test and measurement, process instrumentation and calibration equipment, automation parts and safety gear from Fluke, Megger, Siemens, Endress+Hauser, Testo and 100+ other brands. Search by part number, build a quote list in minutes, and let our team source anything that isn’t on the shelf.",
    proof: [
      "Quotes within 1 business day",
      "Delivery across Pakistan",
      "Single units and bulk orders",
    ],
  },

  sections: {
    categories: {
      title: "Industrial Equipment Categories",
      intro:
        "From test and measurement equipment and process instruments to industrial automation parts and PPE, browse the main product lines we supply to plants, contractors and engineering teams across Pakistan.",
    },
    popular: {
      title: "Popular Test & Measurement Instruments",
      intro:
        "Fluke clamp meters, Megger insulation testers and Testo analyzers that maintenance teams order most often. Add any item to your quote list, or ask on WhatsApp for price and stock.",
    },
    brands: {
      title: "Brands We Supply in Pakistan",
      intro:
        "We supply genuine instruments and parts from leading global manufacturers, including Fluke, Megger, Siemens, Endress+Hauser, Testo, Honeywell, ABB, Schneider Electric, Yokogawa and WIKA. Don’t see your brand? We can source it.",
    },
    why: {
      title: "Why Businesses Buy from PAK Precision Tools",
      items: [
        {
          title: "Part-number search",
          text: "Search exact, partial or brand part numbers and find the right model fast.",
        },
        {
          title: "One quote, many items",
          text: "Add every item to one basket and send a single request for quotation.",
        },
        {
          title: "Worldwide sourcing",
          text: "Discontinued or unlisted parts imported on request, with lead time stated up front.",
        },
        {
          title: "Genuine brands",
          text: "Industrial automation parts, instruments and safety equipment from original manufacturers.",
        },
        {
          title: "Business-ready ordering",
          text: "GST invoices, purchase orders and LC accepted. Single units, bulk and wholesale orders.",
        },
        {
          title: "Delivery across Pakistan",
          text: "Delivered to plants and sites in Karachi, Lahore, Islamabad, Faisalabad, Multan, Peshawar and beyond.",
        },
      ],
    },
    industries: {
      title: "Industrial Tools and Instruments for Plants Across Pakistan",
      intro: "We supply instruments and parts to maintenance, instrumentation and procurement teams in:",
      items: [
        "Textile and spinning mills",
        "Cement and steel plants",
        "Power plants and IPPs",
        "Oil, gas, refinery and fertilizer",
        "Pharmaceutical and food processing",
        "Solar EPC and C&I solar",
        "HVAC and chiller contractors",
      ],
    },
    about: {
      title: "Industrial Instruments Supplier in Pakistan",
      paragraphs: [
        "PAK Precision Tools is an industrial instruments supplier in Karachi and an importer of test, measurement and automation equipment. We serve plants, contractors and engineering teams across Pakistan with electrical test equipment, process instruments, instrumentation and calibration equipment, industrial automation parts, and PPE and gas detection.",
        "We stock and source models from Fluke, Megger, Siemens, Endress+Hauser, Testo, Honeywell, ABB, Schneider Electric and more than 100 other brands. If a part isn’t held locally, we import it, including discontinued models, and handle freight and customs clearance for you.",
        "As an industrial equipment supplier in Pakistan working with businesses, we keep ordering simple: search by part number, add items to one quote request, and get a price and lead time within one business day. Single units, bulk and wholesale orders are welcome, with GST invoices and purchase orders accepted.",
      ],
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Do you supply industrial instruments across Pakistan?",
          a: "Yes. We deliver to plants and sites in all major cities, including Karachi, Lahore, Islamabad, Faisalabad, Multan and Peshawar.",
        },
        {
          q: "Can you import a part that isn’t on your website?",
          a: "Yes. Send the part number, brand and quantity through Source a Part or WhatsApp, and we will quote the exact part or a compatible alternative with lead time.",
        },
        {
          q: "Are your products genuine?",
          a: "We supply original products from the manufacturer or its official distribution channel. Ask for import documents or a calibration certificate with your quote.",
        },
        {
          q: "How do I get a price?",
          a: `Add items to your quote basket and send one request, or message us on WhatsApp at ${whatsappDisplay || whatsapp}. We reply within one business day.`,
        },
        {
          q: "Do you accept company purchase orders?",
          a: "Yes. We accept purchase orders, bank transfer and LC, and issue GST invoices.",
        },
      ],
    },
  },

  sourcing: {
    title: "Can’t Find It? We Import Industrial Parts to Pakistan",
    intro:
      "As an industrial parts importer, we source equipment from manufacturers and distributors worldwide, including discontinued models and parts that aren’t held in local stock. Send us the details and we handle the rest, from purchase to customs clearance and delivery to your site.",
    cta: "Send a sourcing request",
    steps: [
      {
        title: "Send us the details",
        text: "Part number, brand, quantity and any drawings, datasheets or photos of the old part.",
      },
      {
        title: "We identify and quote",
        text: "We confirm the exact part or a compatible alternative and send a quotation with lead time.",
      },
      {
        title: "We import and deliver",
        text: "Once you approve, we handle purchasing, freight, customs clearance and delivery to your site anywhere in Pakistan.",
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
