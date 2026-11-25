/**
 * Long-form SEO copy for the product detail pages. Keyed by the published
 * catalogue slug (dashboard `pkpt.products.json`). Products without an entry
 * keep their short catalogue description.
 */
export type ProductContent = {
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  paragraphs: string[];
  features: string[];
  applications: string;
};

/** Same buyer block on every product page. */
export const productBuyerNote =
  "Bulk and project quotes, GST invoices, PO and LC accepted, import to order for models not in stock, and delivery from Karachi to sites across Pakistan.";

export const productContent: Record<string, ProductContent> = {
  "fluke-117-electrician-s-true-rms-digital-multimeter": {
    metaTitle: "Fluke 117 True-RMS Multimeter | Fluke Supplier in Pakistan | PAK Precision Tools",
    metaDescription:
      "Genuine Fluke 117 True-RMS multimeter with VoltAlert and LoZ from an authorized Fluke supplier in Pakistan. Bulk and project quotes for industry.",
    shortDescription:
      "The Fluke 117 is a True-RMS digital multimeter for electricians, with non-contact VoltAlert detection and a LoZ mode that stops ghost-voltage readings. Supplied to plants and contractors by PAK Precision Tools, an authorized Fluke dealer in Pakistan.",
    paragraphs: [
      "The Fluke 117 Electrician’s True-RMS Digital Multimeter is one of the most used meters for electrical work in factories, commercial buildings and control panels. True-RMS gives accurate readings on non-linear loads such as VFDs and LED lighting, and the low-impedance LoZ mode removes ghost voltages so you don’t get false readings in panels.",
      "Built-in VoltAlert non-contact voltage detection lets you check for live wires before you touch them. Auto-ranging and a backlit display make it quick to use on site.",
      "PAK Precision Tools is an authorized Fluke supplier in Pakistan, based in Karachi (Fluke Karachi) and supplying plants, EPC contractors and maintenance teams nationwide. Procurement teams can request the Fluke multimeter price in Pakistan for single units or bulk orders, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "True-RMS for accurate AC voltage and current readings",
      "VoltAlert non-contact voltage detection",
      "LoZ (low impedance) mode to prevent ghost voltages",
      "AC/DC voltage, current, resistance, continuity, frequency and capacitance",
      "CAT III 600 V safety rating",
      "Auto-ranging with a backlit display",
    ],
    applications: "electrical maintenance, control panels, commercial and industrial installations, motor and HVAC troubleshooting.",
  },

  "fluke-101-fluke-107-pocket-digital-multimeter": {
    metaTitle: "Fluke 101 & Fluke 107 Multimeters | Fluke Dealer in Pakistan | PAK Precision Tools",
    metaDescription:
      "Fluke 101 and Fluke 107 pocket multimeters, CAT III 600 V, from an authorized Fluke dealer in Pakistan. Bulk quotes for maintenance teams.",
    shortDescription:
      "The Fluke 101 and Fluke 107 are compact pocket multimeters with a CAT III 600 V rating, made for quick checks by maintenance teams and field technicians.",
    paragraphs: [
      "The Fluke 101 is Fluke’s entry-level pocket digital multimeter: small enough for a shirt pocket, but built to the same safety standard as larger Fluke meters. It covers the basic measurements that maintenance and HVAC teams use every day, which makes it a common choice when equipping a whole team.",
      "The Fluke 107 adds a backlight for dark panels and plant rooms, plus duty cycle measurement. Both are a practical way to issue genuine Fluke meters across a maintenance department.",
      "As a Fluke supplier in Pakistan, we supply both models in bulk to plants, facility management companies and contractors. Request the Fluke multimeter price in Pakistan for your quantity, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Pocket-size design",
      "CAT III 600 V safety rating",
      "Fluke 107 adds a backlight and duty cycle measurement",
      "Built for everyday voltage, resistance and continuity checks",
    ],
    applications: "plant and facility maintenance teams, HVAC maintenance, field service technicians.",
  },

  "fluke-115-fluke-116-compact-true-rms-digital-multimeter": {
    metaTitle: "Fluke 115 & Fluke 116 True-RMS Multimeters | Fluke Supplier in Pakistan",
    metaDescription:
      "Fluke 115 and HVAC Fluke 116 True-RMS multimeters from an authorized Fluke supplier in Pakistan, Karachi. Quotes for HVAC contractors and plants.",
    shortDescription:
      "The Fluke 115 is a compact True-RMS multimeter for field service. The Fluke 116 adds microamps for flame sensors and comes with the 80BK-A temperature probe for HVAC work.",
    paragraphs: [
      "The Fluke 115 True-RMS multimeter is a compact meter for field technicians who need accurate readings on modern electrical loads. True-RMS keeps readings correct on drives, electronic ballasts and other non-linear loads.",
      "The Fluke 116 is the HVAC version. It measures microamps to test flame sensors and comes with the 80BK-A thermocouple probe for temperature checks, which is why it is popular with chiller and commercial HVAC contractors.",
      "As an authorized Fluke supplier in Pakistan, we deliver genuine Fluke 115 and 116 meters from Karachi (Fluke Karachi) nationwide. HVAC contractors and facility teams can request the Fluke multimeter price in Pakistan for single units or team orders, with GST invoices and PO accepted.",
    ],
    features: [
      "True-RMS measurement",
      "Compact, one-hand design",
      "Fluke 116: microamp range for flame sensor testing",
      "Fluke 116: temperature with the included 80BK-A probe",
    ],
    applications: "HVAC and chiller contractors, commercial building services, plant field service teams.",
  },

  "fluke-177-fluke-179-industrial-true-rms-digital-multimeter": {
    metaTitle: "Fluke 177 & Fluke 179 Industrial Multimeters | Fluke Dealer in Pakistan",
    metaDescription:
      "Fluke 177 and Fluke 179 True-RMS industrial multimeters from an authorized Fluke dealer in Pakistan. Bulk quotes for plants, GST invoice.",
    shortDescription:
      "The Fluke 177 and Fluke 179 are True-RMS industrial multimeters used for plant maintenance across Pakistan. The Fluke 179 adds built-in temperature measurement.",
    paragraphs: [
      "The Fluke 177 and Fluke 179 are the standard plant-maintenance meters in many fertilizer, cement, power generation and food processing plants. True-RMS gives accurate readings on the non-linear loads found in modern plants, and the 6000-count display gives clear, stable readings.",
      "Choose the Fluke 179 when your team also needs temperature readings on motors, bearings and panels, without carrying a separate thermometer.",
      "PAK Precision Tools is an authorized Fluke dealer in Pakistan and an industrial instruments supplier in Pakistan, supplying plants from Karachi. Request the Fluke multimeter price in Pakistan for your maintenance department, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Industrial True-RMS measurement",
      "6000-count display",
      "Fluke 179: built-in temperature measurement",
      "Built for daily use in plant maintenance",
    ],
    applications: "plant maintenance in fertilizer, cement, power generation, textile and food processing plants.",
  },

  "fluke-87v-87-5-heavy-duty-industrial-true-rms-multimeter": {
    metaTitle: "Fluke 87V Industrial Multimeter | Fluke Supplier in Pakistan | PAK Precision Tools",
    metaDescription:
      "Fluke 87V industrial True-RMS multimeter with VFD low-pass filter, CAT III 1000 V / CAT IV 600 V, from an authorized Fluke supplier in Pakistan.",
    shortDescription:
      "The Fluke 87V is a heavy-duty industrial True-RMS multimeter with a low-pass filter for accurate readings on variable frequency drives, rated CAT III 1000 V / CAT IV 600 V.",
    paragraphs: [
      "The Fluke 87V (87-5) is the meter of choice for VFD troubleshooting in Pakistan’s textile and steel mills. Its low-pass filter removes drive noise, so voltage and frequency readings on motor drives are accurate, and the CAT III 1000 V / CAT IV 600 V rating covers work on distribution panels and incoming supplies.",
      "Built for heavy industrial use, the 87V is the meter maintenance engineers rely on when other meters give unstable readings on drives and automation equipment.",
      "As an authorized Fluke supplier in Pakistan based in Karachi (Fluke Karachi), we supply the 87V to mills, plants and automation contractors nationwide. Request the Fluke multimeter price in Pakistan for your order, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Industrial True-RMS measurement",
      "Low-pass filter for accurate VFD readings",
      "CAT III 1000 V / CAT IV 600 V safety rating",
      "Heavy-duty build for plant environments",
    ],
    applications: "VFD and motor-drive troubleshooting, textile and steel mills, industrial automation, power distribution maintenance.",
  },

  "fluke-302-fluke-323-fluke-325-compact-clamp-meters": {
    metaTitle: "Fluke 302+, 323 & 325 Clamp Meters | Fluke Dealer in Pakistan | PAK Precision Tools",
    metaDescription:
      "Fluke 302+, 323 and 325 400 A clamp meters from an authorized Fluke dealer in Pakistan. Bulk and project quotes, GST invoice.",
    shortDescription:
      "Compact 400 A clamp meters from Fluke for everyday electrical maintenance. The Fluke 302+ and Fluke 323 measure AC current, and the Fluke 325 adds DC current and temperature.",
    paragraphs: [
      "A clamp meter measures current without breaking the circuit, which makes it the fastest way to check motor and feeder loads. These three compact Fluke models cover up to 400 A in a design that fits into crowded panels.",
      "The Fluke 302+ is the entry model, the Fluke 323 adds True-RMS for accurate readings on non-linear loads, and the Fluke 325 measures both AC and DC current, plus temperature, for solar, battery and DC drive work.",
      "As a Fluke dealer in Pakistan, we supply all three models from Karachi to plants and electrical contractors. Request the clamp meter price in Pakistan for your quantity, and we’ll help your team choose the right model.",
    ],
    features: [
      "400 A current range",
      "Fluke 302+ / 323: AC current",
      "Fluke 323 and 325: True-RMS",
      "Fluke 325: AC/DC current and temperature",
      "Compact jaw for tight panels",
    ],
    applications: "industrial electrical maintenance, panel and feeder load checks, HVAC, DC and battery systems (Fluke 325).",
  },

  "fluke-376-fc-1000a-ac-dc-wireless-clamp-meter-with-iflex": {
    metaTitle: "Fluke 376 FC Clamp Meter with iFlex | Fluke Supplier in Pakistan",
    metaDescription:
      "Fluke 376 FC 1000 A AC/DC True-RMS clamp meter with 2500 A iFlex, from an authorized Fluke supplier in Pakistan. Quotes for utilities and EPCs.",
    shortDescription:
      "The Fluke 376 FC is a 1000 A AC/DC True-RMS clamp meter with an iFlex flexible probe for up to 2500 A AC, and wireless Fluke Connect for sharing readings.",
    paragraphs: [
      "The Fluke 376 FC handles high-current work that a standard jaw can’t reach. Its 1000 A jaw measures AC and DC current, and the iFlex flexible coil wraps around thick LT busbars and parallel cables in narrow switchgear panels for readings up to 2500 A AC.",
      "Fluke Connect lets you view and share readings on your phone, so one person can stay clear of the panel while the measurement is taken.",
      "PAK Precision Tools is an authorized Fluke supplier in Pakistan supplying utilities, switchgear contractors and solar EPCs from Karachi. Request the clamp meter price in Pakistan for your project, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "1000 A AC/DC True-RMS jaw",
      "iFlex flexible probe up to 2500 A AC",
      "Wireless Fluke Connect",
      "Made for busbars, large cables and switchgear",
    ],
    applications: "switchgear and busbar measurements, LT panels, large motors, power distribution and solar plants.",
  },

  "fluke-1507-fluke-1587-fc-digital-insulation-resistance-tester-megger": {
    metaTitle: "Fluke 1507 & 1587 FC Insulation Tester | Fluke Supplier in Pakistan",
    metaDescription:
      "Fluke 1507 and 1587 FC 1000 V insulation testers from an authorized Fluke supplier in Pakistan. Bulk and project quotes for plants and contractors.",
    shortDescription:
      "The Fluke 1507 is a 1000 V digital insulation tester, and the Fluke 1587 FC combines a True-RMS multimeter with a 1000 V insulation tester in one instrument.",
    paragraphs: [
      "Insulation resistance testing is a required part of preventive maintenance on industrial motors, generators, cables and transformers. The Fluke insulation tester range gives maintenance teams reliable readings, so they can catch insulation breakdown before it causes a failure or an outage.",
      "Choose the Fluke 1507 as a dedicated insulation tester. Choose the Fluke 1587 FC when your team also wants a True-RMS multimeter in the same instrument, with Fluke Connect to log and share results.",
      "PAK Precision Tools is an authorized Fluke supplier in Pakistan and an electrical test equipment supplier in Pakistan, supplying plants, utilities and contractors from Karachi. Procurement teams can request the megger tester price in Pakistan for single units or bulk orders.",
    ],
    features: [
      "Insulation testing up to 1000 V",
      "Fluke 1587 FC: True-RMS multimeter plus insulation tester",
      "Fluke 1587 FC: Fluke Connect for logging and sharing results",
      "Built for motor, cable, generator and transformer testing",
    ],
    applications: "preventive maintenance of motors, generators and transformers, cable testing, commissioning, utilities.",
  },

  "megger-mit420-2": {
    metaTitle: "Megger MIT420/2 1 kV Insulation Tester | Megger Supplier in Pakistan",
    metaDescription:
      "Genuine Megger MIT420/2 handheld 1 kV insulation tester from a Megger supplier in Pakistan. Bulk and project quotes, GST invoice, PO and LC accepted.",
    shortDescription:
      "The Megger MIT420/2 is a handheld insulation tester rated to 1 kV, made for routine insulation testing of motors, cables and LV installations.",
    paragraphs: [
      "Megger is the name most engineers in Pakistan use for insulation testing, and the MIT420/2 is its handheld 1 kV model for everyday maintenance work. It lets electrical teams test motors, cables and switchgear quickly in the field, and record readings for their maintenance records.",
      "Its handheld design suits maintenance departments, panel builders and electrical contractors who test LV equipment regularly and need a genuine Megger instrument.",
      "As a Megger supplier in Pakistan, PAK Precision Tools supplies the MIT420/2 from Karachi to plants, utilities and contractors nationwide. Request the Megger price in Pakistan for your order.",
    ],
    features: [
      "Insulation testing up to 1 kV",
      "Handheld design for field use",
      "Suited to motors, cables and LV installations",
      "Genuine Megger instrument",
    ],
    applications: "LV motor and cable testing, panel builders, electrical contractors, plant maintenance.",
  },

  "megger-mit515": {
    metaTitle: "Megger MIT515 5 kV Insulation Tester | Megger Supplier in Pakistan",
    metaDescription:
      "Megger MIT515 5 kV insulation resistance tester for HV equipment, from a Megger supplier in Pakistan. Quotes for utilities, EPCs and commissioning teams.",
    shortDescription:
      "The Megger MIT515 is a 5 kV insulation resistance tester for high-voltage equipment such as transformers, HV motors, switchgear and cables.",
    paragraphs: [
      "High-voltage assets need testing at higher voltages than a 1 kV tester can provide. The MIT515 is a 5 kV insulation tester used by utilities, HV maintenance contractors and commissioning teams to check the insulation of transformers, HV motors, generators and cables.",
      "Diagnostic tests such as PI and DAR help engineers judge the condition of insulation over time, not only whether it passes on the day.",
      "PAK Precision Tools is a Megger supplier in Pakistan supplying utilities, 11 kV grid contractors and EPCs from Karachi. Request the Megger price in Pakistan for your project, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Insulation testing up to 5 kV",
      "For transformers, HV motors, switchgear and cables",
      "Diagnostic insulation tests (PI, DAR)",
      "Genuine Megger instrument",
    ],
    applications: "utilities, HV transformer maintenance, 11 kV networks, commissioning of HV equipment, power plants.",
  },

  "uni-t-ut33b-ut33d-palm-size-digital-multimeter": {
    metaTitle: "UNI-T UT33B+ & UT33D+ Multimeters | Bulk Supply in Pakistan | PAK Precision Tools",
    metaDescription:
      "UNI-T UT33B+ and UT33D+ palm-size multimeters in bulk for contractors and maintenance teams. Digital multimeter supplier Pakistan, Karachi.",
    shortDescription:
      "The UNI-T UT33B+ and UT33D+ are palm-size digital multimeters supplied in bulk to contractors and maintenance teams. The UT33D+ adds non-contact voltage (NCV) detection.",
    paragraphs: [
      "The UNI-T UT33 series is a cost-effective way to equip large electrical crews. Contractors and facility management companies issue it as a standard meter for routine checks on sockets, wiring and distribution boards.",
      "Choose the UT33D+ if you want built-in NCV detection, which warns you of a live wire before you touch it.",
      "As a digital multimeter supplier in Pakistan, we supply both models in bulk from Karachi. Request the UNI-T multimeter price in Pakistan for your quantity, with GST invoices and PO accepted.",
    ],
    features: [
      "Palm-size digital multimeter",
      "UT33D+: non-contact voltage (NCV) detection",
      "Suited to everyday voltage, resistance and continuity checks",
      "Cost-effective for equipping large crews",
    ],
    applications: "electrical contractors, facility management companies, building maintenance crews.",
  },

  "uni-t-ut201-ut202-ut202a-ac-digital-clamp-meters": {
    metaTitle: "UNI-T UT201+, UT202+ & UT202A+ Clamp Meters | Bulk Supply Pakistan",
    metaDescription:
      "UNI-T UT201+, UT202+ and UT202A+ AC clamp meters (400 A to 600 A) in bulk for contractors. Get the UNI-T clamp meter Pakistan quote.",
    shortDescription:
      "UNI-T clamp meters covering 400 A to 600 A, supplied in bulk to electrical and HVAC contractors. The UT202+ adds temperature measurement.",
    paragraphs: [
      "The UNI-T UT201+, UT202+ and UT202A+ are standard-issue clamp meters for electrical contractors, HVAC service companies and maintenance crews. They measure AC current up to 400 A to 600 A depending on the model, without breaking the circuit.",
      "The UT202+ adds temperature measurement, which is useful for HVAC and motor checks.",
      "We supply all three models in bulk from Karachi. Request the clamp meter price in Pakistan for your quantity, with GST invoices and PO accepted.",
    ],
    features: [
      "AC current from 400 A to 600 A, depending on model",
      "UT202+: temperature measurement",
      "Digital display",
      "Cost-effective for equipping crews",
    ],
    applications: "electrical and HVAC contractors, maintenance crews, panel load checks.",
  },

  "uni-t-ut203-ut204-ac-dc-true-rms-clamp-meters": {
    metaTitle: "UNI-T UT203+ & UT204+ AC/DC Clamp Meters | Solar Clamp Meter Pakistan",
    metaDescription:
      "UNI-T UT203+ (400 A) and UT204+ (600 A) AC/DC True-RMS clamp meters for solar EPCs and industry. Solar clamp meter Pakistan, bulk quotes.",
    shortDescription:
      "The UNI-T UT203+ (400 A) and UT204+ (600 A) are True-RMS clamp meters that measure both AC and DC current, supplied to solar EPC contractors and industrial maintenance teams.",
    paragraphs: [
      "DC current measurement is what sets the UT203+ and UT204+ apart. Solar EPC teams use them to check battery and inverter currents, and industrial electricians use them on DC drives and control circuits, as well as for normal AC load checks.",
      "True-RMS keeps AC readings accurate on non-linear loads. Choose the UT203+ for currents up to 400 A, or the UT204+ for up to 600 A.",
      "We supply both models in bulk from Karachi as a solar clamp meter supplier in Pakistan. Request the UNI-T clamp meter Pakistan quote for your project, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "AC and DC current measurement",
      "True-RMS",
      "UT203+: up to 400 A; UT204+: up to 600 A",
      "Suited to solar, battery and inverter work",
    ],
    applications: "solar EPC projects, batteries and inverters, industrial electrical maintenance, DC drives.",
  },

  "uni-t-ut501a-1000v-ut502a-2500v-insulation-resistance-testers-meggers": {
    metaTitle: "UNI-T UT501A & UT502A Insulation Testers | Bulk Supply in Pakistan",
    metaDescription:
      "UNI-T UT501A (1000 V) and UT502A (2500 V) digital insulation tester models in bulk for panel builders and motor rewinders. Quotes from Karachi.",
    shortDescription:
      "The UNI-T UT501A (1000 V) and UT502A (2500 V) are digital insulation resistance testers used widely by LT panel builders and motor rewinding workshops.",
    paragraphs: [
      "These two UNI-T meggers are a standard purchase for LT panel builders, motor rewinders and electrical contractors across Pakistan. The UT501A covers 1000 V testing for LV motors and cables, and the UT502A goes up to 2500 V for higher-rated equipment.",
      "They are a cost-effective way to equip several teams or workshops with an insulation tester, alongside premium Megger and Fluke models for critical assets.",
      "We supply both models in bulk from Karachi as an electrical test equipment supplier in Pakistan. Request the UNI-T insulation tester Pakistan quote for your quantity, with GST invoices and PO accepted.",
    ],
    features: [
      "UT501A: insulation testing up to 1000 V",
      "UT502A: insulation testing up to 2500 V",
      "Digital display",
      "Cost-effective for equipping several teams",
    ],
    applications: "LT panel builders, motor rewinding workshops, electrical contractors, plant maintenance.",
  },

  "uni-t-ut513a-5000v-5kv-digital-high-voltage-insulation-resistance-tester": {
    metaTitle: "UNI-T UT513A 5kV Insulation Tester | 5kV Insulation Tester Pakistan",
    metaDescription:
      "UNI-T UT513A 5000 V (5kV) digital insulation tester with USB, PI and DAR, for HV transformer and 11 kV contractors. Bulk and project quotes.",
    shortDescription:
      "The UNI-T UT513A is a 5000 V (5 kV) digital insulation resistance tester with PI and DAR tests and USB data transfer.",
    paragraphs: [
      "The UT513A gives HV maintenance contractors, 11 kV grid subcontractors and commissioning teams a cost-effective 5 kV insulation tester. It tests the insulation of transformers, HV cables, motors and switchgear at up to 5000 V.",
      "PI and DAR results help assess insulation condition, and USB data transfer makes it easier to include results in test reports for clients and utilities.",
      "We supply the UT513A from Karachi to contractors and utilities across Pakistan. Request the UNI-T insulation tester Pakistan quote for your project, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Insulation testing up to 5000 V (5 kV)",
      "PI and DAR diagnostic tests",
      "USB data transfer for test reports",
      "Suited to transformers, HV cables and switchgear",
    ],
    applications: "HV transformer maintenance, 11 kV grid contractors, commissioning teams, power distribution.",
  },

  "fluke-393-fc-cat-iii-1500v-dc-solar-clamp-meter-hioki-cm4375-50-solar-clamp": {
    metaTitle: "Fluke 393 FC & Hioki CM4375-50 Solar Clamp Meters | Solar Clamp Meter Pakistan",
    metaDescription:
      "Fluke 393 FC CAT III 1500 V DC and Hioki CM4375-50 solar clamp meter models for C&I and utility solar EPCs in Pakistan. Project quotes.",
    shortDescription:
      "The Fluke 393 FC is a CAT III 1500 V DC solar clamp meter with IP54 protection and DC power measurement. The Hioki CM4375-50 is an AC/DC solar clamp for PV work.",
    paragraphs: [
      "Utility-scale and C&I solar plants run strings at up to 1500 V DC, beyond the rating of standard clamp meters. The Fluke 393 FC is rated CAT III 1500 V DC, so EPC teams can safely measure string combiners, inverters and DC cabling. Its IP54 rating suits outdoor plant work, and DC power measurement helps check string performance.",
      "The Hioki CM4375-50 is an alternative AC/DC clamp meter for solar commissioning and O&M teams.",
      "PAK Precision Tools is an authorized Fluke supplier in Pakistan supplying solar EPCs and O&M contractors from Karachi. Request the solar clamp meter Pakistan quote for your project, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Fluke 393 FC: CAT III 1500 V DC safety rating",
      "Fluke 393 FC: IP54 for outdoor use",
      "Fluke 393 FC: DC power measurement",
      "Hioki CM4375-50: AC/DC solar clamp meter",
    ],
    applications: "utility-scale and C&I solar EPC projects, string combiners and inverters, solar O&M.",
  },

  "uni-t-ut196-1700v-dc-solar-dmm-ut219pv-solar-clamp-meter": {
    metaTitle: "UNI-T UT196 Solar Multimeter & UT219PV Solar Clamp | Solar Clamp Meter Pakistan",
    metaDescription:
      "UNI-T UT196 1700 V DC solar multimeter and UT219PV solar clamp meter for solar EPCs and installers in Pakistan. Bulk and project quotes.",
    shortDescription:
      "The UNI-T UT196 is a True-RMS solar multimeter rated 1700 V DC / 1500 V AC with IP65 protection, and the UT219PV is a solar clamp meter for PV systems.",
    paragraphs: [
      "Commercial solar strings often exceed the 600 V or 1000 V limit of standard meters. The UT196 measures up to 1700 V DC, so solar EPC teams can safely test high-voltage strings, and its IP65 rating suits rooftop and field conditions.",
      "Pair it with the UT219PV solar clamp meter to measure string and inverter currents without breaking the circuit.",
      "We supply both models in bulk from Karachi to solar EPC and O&M contractors. Request the solar clamp meter Pakistan quote for your crews, with GST invoices and PO accepted.",
    ],
    features: [
      "UT196: True-RMS, 1700 V DC / 1500 V AC",
      "UT196: IP65 protection",
      "UT219PV: solar clamp meter for PV currents",
      "Made for high-voltage solar strings",
    ],
    applications: "commercial and industrial solar EPC, rooftop solar installation teams, solar O&M.",
  },

  "testo-868-thermal-imager": {
    metaTitle: "Testo 868 Thermal Imager | Testo Supplier in Pakistan | PAK Precision Tools",
    metaDescription:
      "Testo 868 thermal imaging camera with 160 x 120 IR detector, from a Testo supplier in Pakistan. Quotes for plants, auditors and maintenance teams.",
    shortDescription:
      "The Testo 868 is an infrared thermal imager with a 160 x 120 IR detector, used for electrical and mechanical inspections in plants and buildings.",
    paragraphs: [
      "Thermal imaging finds problems that a visual check misses: loose connections, overloaded breakers, failing bearings and heat loss. The Testo 868 gives maintenance teams and inspection companies clear thermal images for regular electrical panel thermography and preventive maintenance.",
      "Many insurers and compliance auditors now expect annual thermography reports on electrical panels, and a dedicated thermal camera lets plants do this in-house.",
      "PAK Precision Tools is a Testo supplier in Pakistan, supplying plants and inspection companies from Karachi. Request the thermal imaging camera price in Pakistan for your team, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "160 x 120 IR detector",
      "Handheld thermal imager",
      "Suited to electrical panel thermography",
      "Mechanical and building inspections",
    ],
    applications: "electrical panel thermography, preventive maintenance, insurance and compliance inspections, building inspections.",
  },

  "uni-t-uti120s-uti260b-industrial-handheld-infrared-thermal-imaging-cameras": {
    metaTitle: "UNI-T UTi120S & UTi260B Thermal Imaging Cameras | Bulk Supply Pakistan",
    metaDescription:
      "UNI-T UTi120S and UTi260B industrial thermal imaging cameras, -20 to 550 °C. Quotes for plants and inspection teams: thermal imaging camera price in Pakistan.",
    shortDescription:
      "The UNI-T UTi120S and UTi260B are industrial handheld thermal imaging cameras measuring from -20 °C to 550 °C, with 256 x 192 IR resolution on the UTi260B.",
    paragraphs: [
      "These UNI-T cameras give maintenance teams a cost-effective way to start regular thermography. They are used for electrical panel inspections in textile mills and factories, where insurers and compliance auditors ask for annual thermography reports.",
      "Choose the UTi260B for higher 256 x 192 IR resolution on larger panels and switchgear, or the UTi120S for routine checks.",
      "We supply both models from Karachi as an electrical test equipment supplier in Pakistan. Request the thermal imaging camera price in Pakistan for your plant, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Temperature range -20 °C to 550 °C",
      "UTi260B: 256 x 192 IR resolution",
      "Handheld design for panel inspections",
      "Suited to annual thermography reports",
    ],
    applications: "electrical panel thermography, textile and manufacturing plants, insurance and compliance audits, preventive maintenance.",
  },

  "fluke-771-773-milliamp-clamp": {
    metaTitle: "Fluke 771 & 773 Milliamp Process Clamp | Fluke Supplier in Pakistan",
    metaDescription:
      "Fluke 771 and 773 milliamp process clamp meters to measure 4-20 mA loops without breaking them. Authorized Fluke supplier in Pakistan.",
    shortDescription:
      "The Fluke 771 and Fluke 773 are milliamp process clamp meters that measure 4-20 mA signals without breaking the loop.",
    paragraphs: [
      "Instrument technicians spend a lot of time checking 4-20 mA loops between transmitters, PLCs and DCS systems. A milliamp clamp lets them measure the loop current without disconnecting wires, which saves time and avoids interrupting the process.",
      "The Fluke 773 adds more functions for instrument work, making it a common choice for process plants, refineries and power stations.",
      "PAK Precision Tools is an authorized Fluke supplier in Pakistan and supplier of instrumentation and calibration equipment in Pakistan, based in Karachi. Request a quote for single units or instrument team orders, with GST invoices, PO and LC accepted.",
    ],
    features: [
      "Measures 4-20 mA loop current without breaking the loop",
      "Fluke 773: additional functions for instrument work",
      "Made for transmitters, PLC and DCS loops",
    ],
    applications: "process plants, refineries, power stations, instrumentation and control maintenance.",
  },
};

/**
 * Legacy short slugs that point at the same physical product as a longer
 * catalogue URL. Copy is written once, under the canonical slug.
 */
const aliases: Record<string, string> = {
  "fluke-117": "fluke-117-electrician-s-true-rms-digital-multimeter",
  "fluke-101": "fluke-101-fluke-107-pocket-digital-multimeter",
  "fluke-115": "fluke-115-fluke-116-compact-true-rms-digital-multimeter",
  "fluke-177": "fluke-177-fluke-179-industrial-true-rms-digital-multimeter",
  "fluke-87v": "fluke-87v-87-5-heavy-duty-industrial-true-rms-multimeter",
  "fluke-302": "fluke-302-fluke-323-fluke-325-compact-clamp-meters",
  "fluke-302-325-clamp-meter": "fluke-302-fluke-323-fluke-325-compact-clamp-meters",
  "fluke-376-fc": "fluke-376-fc-1000a-ac-dc-wireless-clamp-meter-with-iflex",
  "fluke-376-fc-iflex": "fluke-376-fc-1000a-ac-dc-wireless-clamp-meter-with-iflex",
  "fluke-393-fc": "fluke-393-fc-cat-iii-1500v-dc-solar-clamp-meter-hioki-cm4375-50-solar-clamp",
  "fluke-1507": "fluke-1507-fluke-1587-fc-digital-insulation-resistance-tester-megger",
  "uni-t-ut33b": "uni-t-ut33b-ut33d-palm-size-digital-multimeter",
  "uni-t-ut201": "uni-t-ut201-ut202-ut202a-ac-digital-clamp-meters",
  "uni-t-ut203": "uni-t-ut203-ut204-ac-dc-true-rms-clamp-meters",
  "uni-t-ut501a": "uni-t-ut501a-1000v-ut502a-2500v-insulation-resistance-testers-meggers",
  "uni-t-ut513a": "uni-t-ut513a-5000v-5kv-digital-high-voltage-insulation-resistance-tester",
  "uni-t-ut196": "uni-t-ut196-1700v-dc-solar-dmm-ut219pv-solar-clamp-meter",
  "uni-t-uti120s": "uni-t-uti120s-uti260b-industrial-handheld-infrared-thermal-imaging-cameras",
};

/** Copy for a catalogue slug, following the legacy-slug aliases. */
export function productContentFor(slug: string): ProductContent | undefined {
  return productContent[slug] ?? productContent[aliases[slug] ?? ""];
}
