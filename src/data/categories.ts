import type { Category } from "@/lib/types";
import { categoryAliases } from "./category-aliases";

/**
 * Category tree. Products reference a *leaf* category slug.
 * Nest by setting `parent` to another category's slug.
 * Slugs match the published URLs, so do not shorten them.
 */
export const categories: Category[] = [
  {
    slug: "electrical-test-and-measurement",
    name: "Electrical Test & Measurement",
    description:
      "Multimeters, clamp meters, insulation testers, thermal imagers and oscilloscopes for electrical maintenance.",
  },
  {
    slug: "process-instrumentation",
    name: "Process Instrumentation",
    description: "Pressure gauges, transmitters, flow meters and level instruments for process plants.",
  },
  {
    slug: "industrial-automation-and-motor-protection",
    name: "Industrial Automation & Motor Protection",
    description:
      "Genuine PLCs, VFDs, contactors, sensors and relays from an industrial automation parts supplier in Pakistan.",
  },
  {
    slug: "ppe-safety-and-gas-detection",
    name: "PPE, Safety & Gas Detection",
    description: "Gas detectors, respirators, fall protection and protective clothing for site safety.",
  },
  {
    slug: "condition-monitoring-and-vibration",
    name: "Condition Monitoring & Vibration",
    description: "Vibration monitors, machinery protection racks and proximity probes for rotating equipment.",
  },
  {
    slug: "pressure-and-temperature-calibrators",
    name: "Pressure & Temperature Calibrators",
    description: "Handheld pressure calibrators, loop calibrators and dry-block calibrators for field and lab use.",
  },
  {
    slug: "rf-microwave-and-lab-electronics",
    name: "RF, Microwave & Lab Electronics",
    description: "Spectrum and microwave analyzers, oscilloscopes and source measure units.",
  },
  {
    slug: "coriolis-flowmeters-and-mass-flow-controllers",
    name: "Coriolis Flowmeters & Mass Flow Controllers",
    description: "Coriolis meters and mass flow controllers for liquids and gases.",
  },
  {
    slug: "environmental-and-analytical-sensors",
    name: "Environmental & Analytical Sensors",
    description: "Dew point, moisture and combustion analyzers and transmitters.",
  },
  {
    slug: "safety-and-remote-inspection",
    name: "Safety & Remote Inspection",
    description: "Industrial video borescopes and area gas monitors.",
  },
];

const normalizeKey = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const slugLookup = new Map<string, string>();
for (const category of categories) {
  slugLookup.set(category.slug, category.slug);
  slugLookup.set(normalizeKey(category.name), category.slug);
}
for (const [legacy, canonical] of Object.entries(categoryAliases)) slugLookup.set(legacy, canonical);

/**
 * Dashboard rows and older links still carry the pre-migration slugs, so every
 * category value is mapped to its canonical slug before it is rendered.
 */
export function canonicalCategorySlug(value: string): string {
  const trimmed = value.trim().toLowerCase();
  return slugLookup.get(trimmed) ?? slugLookup.get(normalizeKey(value)) ?? value;
}
