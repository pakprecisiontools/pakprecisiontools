import type { Category } from "@/lib/types";

/**
 * Category tree. Products reference a *leaf* category slug.
 * Nest by setting `parent` to another category's slug.
 */
export const categories: Category[] = [
  {
    slug: "electrical-test",
    name: "Electrical Test",
    description: "Clamp meters, insulation testers, thermal imagers and oscilloscopes.",
  },
  {
    slug: "process-instrumentation",
    name: "Process Instrumentation",
    description: "Pressure, flow, level and fluid-handling instruments.",
  },
  {
    slug: "industrial-automation",
    name: "Industrial Automation",
    description: "PLCs, contactors, drives, sensors and motor protection.",
  },
  {
    slug: "ppe-safety",
    name: "PPE & Safety",
    description: "Respirators, protective clothing, fall protection and gas detectors.",
  },
  {
    slug: "condition-monitoring",
    name: "Condition Monitoring",
    description: "Machinery-protection racks, modules and proximity probes.",
  },
  {
    slug: "calibrators",
    name: "Calibrators",
    description: "Handheld pressure calibrators and field metrology dry-wells.",
  },
  {
    slug: "rf-laboratory",
    name: "RF & Lab Electronics",
    description: "Handheld microwave analyzers, oscilloscopes and source measure units.",
  },
  {
    slug: "mass-flow",
    name: "Mass Flow",
    description: "Coriolis flowmeters and mass flow controllers.",
  },
  {
    slug: "analytical-sensors",
    name: "Analytical Sensors",
    description: "Dew point, moisture and combustion transmitters.",
  },
  {
    slug: "remote-inspection",
    name: "Remote Inspection",
    description: "Area monitors and industrial video borescopes.",
  },
];
