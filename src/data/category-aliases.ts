/**
 * Category slugs that were live before the SEO migration, mapped to the canonical
 * slug published in the SEO content sheet. Old URLs are 301'd in `next.config.ts`,
 * and dashboard product rows still carry the legacy value, so it is also used to
 * resolve a product's category at render time.
 */
export const categoryAliases: Record<string, string> = {
  "electrical-test": "electrical-test-and-measurement",
  "industrial-automation": "industrial-automation-and-motor-protection",
  "ppe-safety": "ppe-safety-and-gas-detection",
  "condition-monitoring": "condition-monitoring-and-vibration",
  calibrators: "pressure-and-temperature-calibrators",
  "rf-laboratory": "rf-microwave-and-lab-electronics",
  "mass-flow": "coriolis-flowmeters-and-mass-flow-controllers",
  "analytical-sensors": "environmental-and-analytical-sensors",
  "remote-inspection": "safety-and-remote-inspection",
};
