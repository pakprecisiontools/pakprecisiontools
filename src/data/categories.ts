import type { Category } from "@/lib/types";

/**
 * Category tree. Products reference a *leaf* category slug.
 * Nest by setting `parent` to another category's slug.
 */
export const categories: Category[] = [
  {
    slug: "hydraulics",
    name: "Hydraulics",
    description: "Valves, pumps and components for hydraulic power systems.",
  },
  { slug: "hydraulic-valves", name: "Valves", parent: "hydraulics" },
  { slug: "solenoid-valves", name: "Solenoid Valves", parent: "hydraulic-valves" },
  {
    slug: "directional-control-valves",
    name: "Directional Control Valves",
    parent: "hydraulic-valves",
  },
  { slug: "hydraulic-pumps", name: "Pumps", parent: "hydraulics" },

  {
    slug: "pneumatics",
    name: "Pneumatics",
    description: "Cylinders, valves and air preparation for pneumatic automation.",
  },
  { slug: "pneumatic-valves", name: "Valves", parent: "pneumatics" },
  { slug: "pneumatic-cylinders", name: "Cylinders", parent: "pneumatics" },

  {
    slug: "automation-control",
    name: "Automation & Control",
    description: "PLCs, sensors and control components for industrial automation.",
  },
  { slug: "plcs", name: "PLCs", parent: "automation-control" },
  { slug: "sensors", name: "Sensors", parent: "automation-control" },

  {
    slug: "test-measurement",
    name: "Test & Measurement",
    description: "Multimeters, clamp meters and diagnostic instruments.",
  },
  { slug: "multimeters", name: "Multimeters", parent: "test-measurement" },
  { slug: "clamp-meters", name: "Clamp Meters", parent: "test-measurement" },
];
