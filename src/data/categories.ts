import type { Category } from "@/lib/types";

/**
 * Category tree. Products reference a *leaf* category slug.
 * Nest by setting `parent` to another category's slug.
 */
export const categories: Category[] = [
  {
    slug: "electrical-test",
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
    slug: "industrial-automation",
    name: "Industrial Automation & Motor Protection",
    description:
      "Genuine PLCs, VFDs, contactors, sensors and relays from an industrial automation parts supplier in Pakistan.",
  },
  {
    slug: "ppe-safety",
    name: "PPE, Safety & Gas Detection",
    description: "Gas detectors, respirators, fall protection and protective clothing for site safety.",
  },
  {
    slug: "condition-monitoring",
    name: "Condition Monitoring & Vibration",
    description: "Vibration monitors, machinery protection racks and proximity probes for rotating equipment.",
  },
  {
    slug: "calibrators",
    name: "Pressure & Temperature Calibrators",
    description: "Handheld pressure calibrators, loop calibrators and dry-block calibrators for field and lab use.",
  },
  {
    slug: "rf-laboratory",
    name: "RF, Microwave & Lab Electronics",
    description: "Spectrum and microwave analyzers, oscilloscopes and source measure units.",
  },
  {
    slug: "mass-flow",
    name: "Coriolis Flowmeters & Mass Flow Controllers",
    description: "Coriolis meters and mass flow controllers for liquids and gases.",
  },
  {
    slug: "analytical-sensors",
    name: "Environmental & Analytical Sensors",
    description: "Dew point, moisture and combustion analyzers and transmitters.",
  },
  {
    slug: "remote-inspection",
    name: "Safety & Remote Inspection",
    description: "Industrial video borescopes and area gas monitors.",
  },
];
