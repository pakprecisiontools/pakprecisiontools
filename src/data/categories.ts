import type { Category } from "@/lib/types";

/**
 * Category tree. Products reference a *leaf* category slug.
 * Nest by setting `parent` to another category's slug.
 */
export const categories: Category[] = [
  {
    slug: "electrical-test",
    name: "Electrical Test & Measurement",
    description: "Clamp meters, insulation testers, thermal imagers and oscilloscopes.",
  },
  {
    slug: "process-instrumentation",
    name: "Process Instrumentation, Flow, Pressure, Level & Fluid Handling",
    description: "Pressure, flow, level and fluid-handling instruments.",
  },
  {
    slug: "industrial-automation",
    name: "Industrial Automation, Control Logic & Motor Protection",
    description: "PLCs, contactors, drives, sensors and motor protection.",
  },
  {
    slug: "ppe-safety",
    name: "PPE, Occupational Safety & Gas Detection",
    description: "Respirators, protective clothing, fall protection and gas detectors.",
  },
  {
    slug: "condition-monitoring",
    name: "Turbomachinery Condition Monitoring & Vibration",
    description: "Machinery-protection racks, modules and proximity probes.",
  },
  {
    slug: "calibrators",
    name: "Metrology-Grade Pressure & Temperature Calibrators",
    description: "Handheld pressure calibrators and field metrology dry-wells.",
  },
  {
    slug: "rf-laboratory",
    name: "High-Bandwidth RF, Microwave & Laboratory Electronics",
    description: "Handheld microwave analyzers, oscilloscopes and source measure units.",
  },
  {
    slug: "mass-flow",
    name: "Coriolis Flowmeters & Mass Flow Controllers",
    description: "Coriolis flowmeters and mass flow controllers.",
  },
  {
    slug: "analytical-sensors",
    name: "Environmental & Trace Analytical Sensors",
    description: "Dew point, moisture and combustion transmitters.",
  },
  {
    slug: "remote-inspection",
    name: "Transportable Multi-Threat Safety & Remote Inspection",
    description: "Area monitors and industrial video borescopes.",
  },
];
