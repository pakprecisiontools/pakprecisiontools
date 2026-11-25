import type { Faq, ProductGuide } from "@/lib/types";

/**
 * Long-form SEO copy for the category pages. Keyed by category slug from
 * `src/data/categories.ts`. Meta titles already carry the brand, so pages must
 * render them with `title: { absolute }` to avoid the layout template suffix.
 */
export type CategoryContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  supplier: { heading: string; body: string };
  guide: ProductGuide;
  pricing?: { heading: string; body: string };
  whyBuy: { heading: string; points: string[] };
  faqHeading: string;
  faqs: Faq[];
};

export const categoryContent: Record<string, CategoryContent> = {
  "electrical-test": {
    metaTitle: "Electrical Test Equipment in Pakistan | PAK Precision Tools",
    metaDescription:
      "Multimeters, clamp meters, insulation testers and thermal imagers from Fluke, Megger, UNI-T and Testo. Get the latest price in Pakistan within 1 business day.",
    h1: "Electrical Test & Measurement Equipment in Pakistan",
    intro:
      "Buy genuine electrical test equipment in Pakistan from Fluke, Megger, UNI-T, Testo, Extech and Tektronix. Browse digital multimeters, clamp meters, insulation testers (meggers), thermal imaging cameras, oscilloscopes, panel meters and solar test tools for electrical maintenance, installation and commissioning. Add models to your quote list for the latest price, or send us a part number and we’ll source it.",
    supplier: {
      heading: "Electrical Test Equipment Supplier in Pakistan",
      body: "PAK Precision Tools is an electrical test equipment supplier in Pakistan, based in Karachi and delivering nationwide. We supply electrical maintenance teams, contractors and engineers in textile mills, cement plants, power plants, oil and gas sites and solar projects with the meters and testers they rely on every day. Choose from stocked models, or send us a part number for anything not listed and we’ll import it.",
    },
    guide: {
      heading: "Choose the Right Electrical Tester",
      sections: [
        {
          h3: "Digital Multimeters",
          body: "A digital multimeter measures voltage, current, resistance and continuity, and is the first tool in any electrician’s kit. As a digital multimeter supplier in Pakistan, we stock pocket meters such as the Fluke 101 and UNI-T UT33D+, and industrial True-RMS meters such as the Fluke 117, 177/179 and 87V for VFD and control panel work. Ask for the current multimeter price in Pakistan on any model with your quote.",
        },
        {
          h3: "Clamp Meters",
          body: "Clamp meters measure current without breaking the circuit, which makes them faster and safer on live panels. Choose from the Fluke 302+, 323 and 325, the Fluke 376 FC with an iFlex probe for large busbars, the Fluke 771/773 for 4–20 mA loops, and UNI-T clamp meters for everyday maintenance. We confirm the latest clamp meter price in Pakistan within one business day.",
        },
        {
          h3: "Insulation Testers (Meggers)",
          body: "An insulation tester checks the insulation resistance of motors, cables, generators and transformers before they fail. We supply 1 kV testers such as the Megger MIT420/2 and Fluke 1507/1587 FC, and 5 kV insulation testers such as the Megger MIT515 and UNI-T UT513A for high-voltage equipment. Send a model number for today’s megger tester price in Pakistan.",
        },
        {
          h3: "Earth Testers",
          body: "An earth tester measures earth (ground) resistance at substations, panels and lightning protection systems. Earth testers from Megger and Fluke are available to order. Send your required model and we’ll quote with lead time.",
        },
        {
          h3: "Thermal Imaging Cameras",
          body: "Thermal cameras find hot joints, overloaded breakers and failing bearings before they cause a shutdown. We supply the Testo 868 and UNI-T UTi120S and UTi260B. Ask for the current thermal imaging camera price in Pakistan and the right resolution for your plant.",
        },
        {
          h3: "Oscilloscopes",
          body: "For electronics repair, drives and control boards, we supply Tektronix TBS1000C and TBS2000B digital storage oscilloscopes. Request the latest oscilloscope price in Pakistan with your quote.",
        },
        {
          h3: "Panel Meters and Current Transformers",
          body: "We supply digital and analog panel meters (ammeters and voltmeters) from Revalco, 22 mm LED panel indicators, and current transformers (CTs) from 50/5 A to 2000/5 A for switchboards and MCCs across Pakistan.",
        },
        {
          h3: "Solar Test Tools",
          body: "For C&I and utility-scale solar projects, choose a solar clamp meter rated for high DC voltage, such as the Fluke 393 FC (CAT III 1500 V DC) or UNI-T UT219PV, plus PV testers such as the UNI-T UT673PV.",
        },
      ],
    },
    pricing: {
      heading: "Electrical Test Equipment Prices in Pakistan",
      body: "Most test equipment is imported, so prices in Pakistan move with the exchange rate and stock levels. Instead of showing a price that may be out of date, we send the current price, availability and lead time with every quote, usually within one business day. This applies to every model on this page, from multimeters and clamp meters to meggers and thermal cameras. Bulk and repeat orders for companies are quoted separately.",
    },
    whyBuy: {
      heading: "Why Buy Electrical Test Equipment from Us",
      points: [
        "Genuine brands: original instruments from the manufacturer or its official distribution channel",
        "One quote, many items: add several models to one basket and send a single request",
        "Imported on request: models that aren’t stocked locally, including discontinued ones",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to sites in every major city",
      ],
    },
    faqHeading: "Electrical Test Equipment: Frequently Asked Questions",
    faqs: [
      {
        q: "What is the multimeter price in Pakistan?",
        a: "It depends on the model and the exchange rate. Pocket meters such as the Fluke 101 cost far less than industrial meters such as the Fluke 87V. Add the model to your quote list and we’ll send today’s price within one business day.",
      },
      {
        q: "Which insulation tester should I buy: 1 kV or 5 kV?",
        a: "A 1 kV insulation tester such as the Megger MIT420/2 covers low-voltage motors, cables and panels. Choose a 5 kV insulation tester such as the Megger MIT515 for medium-voltage motors, generators, transformers and HV cables.",
      },
      {
        q: "What is the difference between a clamp meter and a multimeter?",
        a: "A multimeter measures current by connecting into the circuit; a clamp meter measures it by clamping around one conductor, without disconnecting anything. Many clamp meters also measure voltage and resistance.",
      },
      {
        q: "Are your Fluke and Megger instruments genuine?",
        a: "We supply original instruments from the manufacturer or its official distribution channel. Ask for import documents or a calibration certificate with your quote.",
      },
      {
        q: "Can you supply a model that isn’t listed here?",
        a: "Yes. Send the part number through Source a Part or WhatsApp and we’ll import it, including discontinued models.",
      },
      {
        q: "Do you deliver electrical test equipment outside Karachi?",
        a: "Yes. We deliver to plants and sites across Pakistan.",
      },
    ],
  },

  "process-instrumentation": {
    metaTitle: "Process Instrumentation in Pakistan | PAK Precision Tools",
    metaDescription:
      "Pressure gauges, transmitters, flow meters and level instruments from WIKA, Rosemount, Endress+Hauser and Yokogawa. Get the latest price in Pakistan within 1 day.",
    h1: "Process Instrumentation Supplier in Pakistan",
    intro:
      "Buy genuine pressure, flow and level instruments in Pakistan from WIKA, Rosemount, Endress+Hauser, Yokogawa, Ashcroft, Dwyer, Keller, Gems and Danfoss. Browse pressure gauges, pressure transmitters, flow meters, level transmitters, level switches, pressure switches and diaphragm pumps for process plants. Add items to your quote list for the latest price, or send us a part number and we’ll source it.",
    supplier: {
      heading: "Process Instrumentation Supplier in Pakistan for Plants and EPCs",
      body: "PAK Precision Tools is a process instrumentation supplier in Pakistan, working with instrumentation engineers, maintenance teams and EPC contractors in oil and gas, fertilizer, chemical, pharma, food, textile and water treatment plants. We deliver across Pakistan from Karachi. Choose from stocked models, or send the full model code of any gauge, transmitter or flow meter and we’ll import it.",
    },
    guide: {
      heading: "Process Instruments We Supply",
      sections: [
        {
          h3: "Pressure Gauges",
          body: "As a pressure gauge supplier in Pakistan, we stock WIKA 232.50 stainless steel and 233.50 liquid-filled gauges (100 mm, up to 400 bar), Ashcroft 1009 and 1279 process gauges, and the Dwyer Series 2000 Magnehelic differential pressure gauge for filters, ducts and clean rooms.",
        },
        {
          h3: "Pressure and Differential Pressure Transmitters",
          body: "We supply the Rosemount 3051C and 3051S, Yokogawa EJA110E DPharp and Keller Series 33X and 21Y pressure transmitters for pressure, differential pressure, level and flow measurement. Send the full model code and we’ll quote the exact configuration.",
        },
        { h3: "Pressure Switches", body: "Danfoss KP35 and KP36 pressure switches for pumps, compressors and hydraulic systems." },
        {
          h3: "Flow Meters",
          body: "We supply Endress+Hauser Promag W 400 and Promag 50W electromagnetic flowmeters for water, wastewater and other conductive liquids. Send the line size and process details for the latest flow meter price in Pakistan.",
        },
        {
          h3: "Level Transmitters and Level Switches",
          body: "Measure tank and sump levels with Flowline EchoPod and EchoTouch ultrasonic level transmitters, or detect high and low levels with Gems LS-7 and LS-800 level switches.",
        },
        {
          h3: "Temperature Transmitters",
          body: "Temperature transmitters from Rosemount, Yokogawa, Endress+Hauser and WIKA are available to order. Send the model or sensor type and we’ll quote with lead time.",
        },
        {
          h3: "Diaphragm Pumps",
          body: "Wilden Pro-Flo air-operated double-diaphragm (AODD) pumps transfer chemicals, slurries and viscous fluids. Ask for the right diaphragm pump size and material for your process.",
        },
      ],
    },
    pricing: {
      heading: "Process Instrument Prices in Pakistan",
      body: "Most process instruments are imported, and many are built to order, so prices in Pakistan depend on the exact model code, range, materials and exchange rate. Send the full specification and we’ll reply with the current price, availability and lead time, usually within one business day. Bulk and project orders for EPCs are quoted separately.",
    },
    whyBuy: {
      heading: "Why Buy Process Instruments from Us",
      points: [
        "Authorized brands: original instruments from Endress+Hauser, Yokogawa, WIKA and other manufacturers",
        "Exact model codes: we quote the full configuration you specify, not a near match",
        "Imported on request: instruments that aren’t stocked locally, including discontinued models",
        "Business-ready: GST invoices, purchase orders and LC accepted; single units, bulk and project orders",
        "Delivery across Pakistan: from Karachi to plants and sites in every major city",
      ],
    },
    faqHeading: "Process Instrumentation: Frequently Asked Questions",
    faqs: [
      {
        q: "What is the flow meter price in Pakistan?",
        a: "It depends on the type, line size, materials and exchange rate. Send the pipe size, fluid and flow range, and we’ll quote a suitable flow meter with today’s price within one business day.",
      },
      {
        q: "Can you supply a Rosemount 3051 or Yokogawa EJA transmitter to my model code?",
        a: "Yes. Send the full model code from the datasheet or nameplate and we’ll quote that exact configuration.",
      },
      {
        q: "Can you replace an old or discontinued instrument?",
        a: "Yes. Send a nameplate photo or the old part number. We’ll source the same model if it’s still available, or suggest a current equivalent.",
      },
      {
        q: "Do you supply liquid-filled pressure gauges?",
        a: "Yes. The WIKA 233.50 is liquid-filled for applications with vibration or pulsation, such as pumps and compressors.",
      },
      {
        q: "Do you deliver process instruments outside Karachi?",
        a: "Yes. We deliver to plants and sites across Pakistan.",
      },
    ],
  },

  "industrial-automation": {
    metaTitle: "Industrial Automation Parts in Pakistan | PAK Precision Tools",
    metaDescription:
      "PLCs, VFDs, contactors, relays, timers and sensors from Siemens, Schneider, ABB, Omron and Allen-Bradley. Get the latest price in Pakistan within 1 business day.",
    h1: "Industrial Automation & Motor Protection Parts in Pakistan",
    intro:
      "Buy genuine industrial automation parts in Pakistan from Siemens, Schneider Electric, ABB, Omron, Allen-Bradley, Autonics and SICK. Browse PLCs, VFDs, contactors, relays, timers, sensors, push buttons and motor protection devices for control panels, MCCs and machines. Add items to your quote list for the latest price, or send us a part number and we’ll source it.",
    supplier: {
      heading: "Industrial Automation Parts Supplier in Pakistan",
      body: "PAK Precision Tools supplies industrial automation parts in Pakistan to panel builders, OEMs, electrical contractors and maintenance teams in textile, cement, food, pharma and power plants. We deliver across Pakistan from Karachi. Choose from stocked models, or send a part number for any PLC module, drive or relay not listed, including discontinued ones, and we’ll import it.",
    },
    guide: {
      heading: "Automation and Control Products We Supply",
      sections: [
        {
          h3: "PLCs (Programmable Logic Controllers)",
          body: "As a PLC supplier in Pakistan, we stock the Siemens SIMATIC S7-1200 CPU 1214C, Allen-Bradley CompactLogix 5069 and MicroLogix 1400, and Omron CP1E and CP2E micro PLCs. Ask for the current Siemens PLC price in Pakistan, or send the full order code (such as 6ES7214-1AG40-0XB0) and we’ll quote the exact module.",
        },
        {
          h3: "VFDs and Inverter Drives",
          body: "Variable frequency drives control motor speed and cut energy use on fans, pumps and conveyors. We supply Schneider Altivar ATV310 and ATV610 drives and the ABB ACS580 general-purpose drive. Send the motor kW and voltage for the latest VFD price in Pakistan, or ask us to match a replacement inverter drive for an old unit.",
        },
        {
          h3: "Contactors and MCCBs",
          body: "We supply Schneider TeSys D contactors (LC1D09, LC1D18, LC1D25, LC1D32, LC1D95), Siemens SIRIUS 3RT20 contactors and Schneider EasyPact MCCBs for motor starters and distribution panels. We confirm the latest contactor price in Pakistan within one business day.",
        },
        {
          h3: "Overload and Motor Protection Relays",
          body: "Protect motors from overload, phase failure and wrong phase sequence. We supply phase failure, phase sequence and under/over-voltage relays from Revalco, Tense and Entes. Thermal overload relays to match TeSys and SIRIUS contactors, and other motor protection relays, are available to order.",
        },
        {
          h3: "Relays, Timers and Temperature Controllers",
          body: "Choose Omron plug-in relays (MY, LY, MK and G2R series) with bases, Fotek solid state relays, Omron and Autonics timers (H3Y, H3CR, AT8N), Hugo Müller digital timers, and Autonics TC4S and TK4S temperature controllers.",
        },
        {
          h3: "Proximity and Photoelectric Sensors",
          body: "For position and object detection on machines and conveyors, we supply Autonics PR series inductive proximity sensors (PR12, PR18) and SICK V180-2 and WL100 photoelectric sensors.",
        },
        {
          h3: "Push Buttons, Pilot Lights, Limit Switches and Cam Switches",
          body: "Schneider Harmony XB4 (metal) and XB5 (plastic) push buttons, pilot lamps, selector switches, emergency stops and beacons; Omron limit switches (D4MC, D4C) and micro switches; Merz selector and changeover switches; forward-reverse drum switches; TER crane pendant stations and KEDU joysticks.",
        },
        {
          h3: "HMIs",
          body: "HMI touch panels from Siemens, Schneider, Omron and Delta are available to order. Send the model and we’ll confirm the current HMI price in Pakistan and lead time.",
        },
        {
          h3: "Safety Relays, Isolated Barriers and Power Supplies",
          body: "Pilz PNOZ safety relays, Schmersal and Carlo Gavazzi safety interlocks, Pepperl+Fuchs K-System isolated barriers for hazardous areas, and Mean Well DIN-rail power supplies.",
        },
      ],
    },
    pricing: {
      heading: "Automation Parts Prices in Pakistan",
      body: "Most automation parts are imported, so prices in Pakistan change with the exchange rate and stock. We send the current price, availability and lead time with every quote, usually within one business day, whether you need one relay or a full panel’s worth of contactors and drives. Bulk orders for panel builders and OEMs are quoted separately.",
    },
    whyBuy: {
      heading: "Why Buy Automation Parts from Us",
      points: [
        "Authorized brands: original parts from Siemens, Schneider Electric, ABB, Omron and other manufacturers",
        "Exact part matching: send an order code, nameplate photo or old part and we’ll identify the right replacement",
        "Imported on request: discontinued PLC modules, drives and relays sourced worldwide",
        "Business-ready: GST invoices, purchase orders and LC accepted; single units, bulk and wholesale orders",
        "Delivery across Pakistan: from Karachi to sites in every major city",
      ],
    },
    faqHeading: "Industrial Automation Parts: Frequently Asked Questions",
    faqs: [
      {
        q: "What is the VFD price in Pakistan?",
        a: "It depends on the brand, the motor’s kW rating and the exchange rate. Send the motor kW, voltage and application, and we’ll quote suitable Schneider or ABB drives with today’s price within one business day.",
      },
      {
        q: "Do you supply Siemens S7-1200 PLCs?",
        a: "Yes. We supply the Siemens S7-1200 CPU 1214C and can source other S7-1200 CPUs, signal modules and communication modules on request. Send the full order code for an exact quote.",
      },
      {
        q: "Can you replace a discontinued PLC or drive?",
        a: "Yes. Send the part number or a nameplate photo. We’ll source the same part if it’s still available worldwide, or suggest a compatible current model.",
      },
      {
        q: "Which contactor size do I need?",
        a: "Contactors are sized by motor current (AC-3 rating). For example, a TeSys LC1D09 handles motors up to about 4 kW at 400 V, and an LC1D25 up to about 11 kW. Send the motor rating and we’ll confirm the right size.",
      },
      {
        q: "Do you supply panel builders and OEMs in bulk?",
        a: "Yes. We quote bulk and repeat orders for panel builders, OEMs and contractors, with GST invoices and purchase orders accepted.",
      },
      {
        q: "Do you deliver automation parts outside Karachi?",
        a: "Yes. We deliver to plants and sites across Pakistan.",
      },
    ],
  },

  "ppe-safety": {
    metaTitle: "PPE Supplier in Pakistan | PAK Precision Tools",
    metaDescription:
      "Respirators, gas detectors, safety harnesses, safety shoes, hard hats and coveralls from 3M, MSA, Dräger, Honeywell and Karam. Get the latest price within 1 day.",
    h1: "PPE, Safety Equipment & Gas Detectors in Pakistan",
    intro:
      "Buy genuine PPE and safety equipment in Pakistan from 3M, MSA, Dräger, Honeywell, Ansell, DuPont, Karam and Vaultex. Browse respirators and cartridges, multi-gas detectors, hard hats, chemical and work gloves, fall arrest harnesses, safety shoes and protective coveralls for plants, construction sites and confined spaces. Add items to your quote list for the latest price, or send us a part number and we’ll source it.",
    supplier: {
      heading: "PPE and Safety Equipment Supplier in Pakistan",
      body: "PAK Precision Tools is a PPE supplier in Pakistan and a safety equipment supplier to HSE managers, contractors and procurement teams in oil and gas, fertilizer, cement, steel, chemical and construction projects. We deliver across Pakistan from Karachi and supply single items or full-site orders. Choose from stocked models, or send a part number for anything not listed and we’ll import it.",
    },
    guide: {
      heading: "Safety Equipment We Supply",
      sections: [
        {
          h3: "Gas Detectors",
          body: "Protect workers in confined spaces and process areas with portable gas detectors. We supply the MSA Altair 4XR multi gas detector (LEL, O2, CO and H2S) and the Dräger X-am 2500 portable multi-gas detector. Ask for the current gas detector price in Pakistan and the right sensor set for your site.",
        },
        {
          h3: "Respirators and Cartridges",
          body: "Choose a reusable respirator mask for dust, gases and vapors: the 3M 6200 half facepiece with 3M 6001 and 6003 cartridges and 2091 and 2097 P100 particulate filters, Honeywell North 5500 and 7700 half masks, and Blue Eagle NP-305 and NP-306 half face respirators.",
        },
        {
          h3: "Fall Protection and Safety Harnesses",
          body: "For work at height, we supply Karam PN112 and PN113 full body fall arrest harnesses. Send your quantity for the latest safety harness price in Pakistan and other fall protection equipment.",
        },
        {
          h3: "Safety Shoes",
          body: "As a safety shoes supplier in Pakistan, we supply Vaultex V-Cut and high-ankle steel-toe safety footwear for plants, workshops and construction sites, in single pairs or bulk sizes.",
        },
        {
          h3: "Coveralls, Gloves and Hard Hats",
          body: "DuPont Tyvek 400 and 500 disposable coverall suits for dust and light splash protection, Ansell AlphaTec 37-175 nitrile chemical gloves and HyFlex 11-800 assembly gloves, and MSA V-Gard industrial hard hats with Fas-Trac III suspension.",
        },
      ],
    },
    pricing: {
      heading: "PPE and Safety Equipment Prices in Pakistan",
      body: "Most branded PPE and gas detection equipment is imported, so prices in Pakistan change with the exchange rate and stock. We send the current price, availability and lead time with every quote, usually within one business day. Bulk orders for whole sites, contractors and annual PPE supply are quoted separately.",
    },
    whyBuy: {
      heading: "Why Buy Safety Equipment from Us",
      points: [
        "Genuine brands: original PPE from 3M, MSA, Dräger, Honeywell, Ansell and DuPont",
        "Full-site orders: respirators, gloves, harnesses, shoes and coveralls on one quote",
        "Imported on request: models and sizes that aren’t stocked locally",
        "Business-ready: GST invoices, purchase orders and LC accepted; single units, bulk and wholesale orders",
        "Delivery across Pakistan: from Karachi to plants and sites in every major city",
      ],
    },
    faqHeading: "PPE and Safety Equipment: Frequently Asked Questions",
    faqs: [
      {
        q: "What is the gas detector price in Pakistan?",
        a: "It depends on the brand, the number and type of gas sensors, and the exchange rate. Tell us which gases you need to detect and we’ll quote a suitable MSA or Dräger detector with today’s price within one business day.",
      },
      {
        q: "Which gas detector do I need for confined spaces?",
        a: "Most confined space work needs a 4-gas detector that measures LEL (flammable gas), oxygen, carbon monoxide and hydrogen sulfide, such as the MSA Altair 4XR. Check your site’s safety procedure for any other gases.",
      },
      {
        q: "Which 3M cartridge should I use?",
        a: "The 3M 6001 cartridge is for organic vapors, the 6003 for organic vapors and acid gases, and the 2091 and 2097 P100 filters for particulates such as dust and fumes. Send your application and we’ll confirm the right one.",
      },
      {
        q: "Do you supply PPE in bulk for factories and contractors?",
        a: "Yes. We quote bulk and repeat PPE orders for factories, contractors and projects, with GST invoices and purchase orders accepted.",
      },
      {
        q: "Do you deliver safety equipment outside Karachi?",
        a: "Yes. We deliver to plants and sites across Pakistan.",
      },
    ],
  },

  "condition-monitoring": {
    metaTitle: "Vibration Monitoring System in Pakistan | PAK Precision Tools",
    metaDescription:
      "Bently Nevada 3500 machinery protection racks, monitor modules and 3300 XL proximity probes for turbines, compressors and pumps. Get the latest price within 1 day.",
    h1: "Condition Monitoring & Vibration Monitoring Systems in Pakistan",
    intro:
      "Buy genuine Bently Nevada machinery protection and condition monitoring equipment in Pakistan. Browse 3500 series racks and monitor modules and 3300 XL proximity probes for steam and gas turbines, compressors, pumps and other critical rotating machines. Add items to your quote list for the latest price, or send the module or probe part number and we’ll source it.",
    supplier: {
      heading: "Machinery Protection Systems for Pakistani Plants",
      body: "PAK Precision Tools supplies vibration monitoring and machinery protection system parts to rotating equipment, reliability and instrumentation teams in power plants, refineries, fertilizer plants and oil and gas facilities across Pakistan. We deliver from Karachi, and we import modules, probes and spares that aren’t held in local stock, including parts for older installed systems.",
    },
    guide: {
      heading: "Vibration Monitoring Products We Supply",
      sections: [
        {
          h3: "Bently Nevada 3500 Racks and Monitor Modules",
          body: "The Bently Nevada 3500 is a continuous vibration monitoring system that protects critical machines by alarming or tripping on high vibration. We supply the 3500/05 system rack, the 3500/22M transient data interface and the 3500/42M proximitor and seismic monitor. Send your rack configuration or module part numbers for an exact quote.",
        },
        {
          h3: "Proximity Probes",
          body: "Bently Nevada 3300 XL 8 mm proximity probes measure shaft vibration and position on turbines, compressors and large pumps. Send the probe, extension cable and proximitor part numbers so we can quote a matched set.",
        },
        {
          h3: "Portable Vibration Analyzers",
          body: "Portable vibration analyzers from Adash and other brands are available to order for route-based condition monitoring. Send your requirement and we’ll quote with lead time.",
        },
      ],
    },
    whyBuy: {
      heading: "Why Buy Vibration Monitoring Parts from Us",
      points: [
        "Genuine parts: original Bently Nevada racks, modules and probes",
        "Exact part matching: send a module or probe part number and we’ll quote that exact item",
        "Imported on request: spares for installed systems, including older modules",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to plants and sites in every major city",
      ],
    },
    faqHeading: "Condition Monitoring: Frequently Asked Questions",
    faqs: [
      {
        q: "Do you supply Bently Nevada 3500 modules in Pakistan?",
        a: "Yes. We supply the 3500/05 rack, 3500/22M and 3500/42M modules, and can source other 3500 modules on request. Send the part number for an exact quote.",
      },
      {
        q: "Can you supply a matched proximity probe set?",
        a: "Yes. Send the part numbers of the probe, extension cable and proximitor sensor, and we’ll quote them as a matched set.",
      },
      {
        q: "Can you source spares for an older vibration monitoring system?",
        a: "Yes. Send the part number or a photo of the module label, and we’ll source the same part if it’s still available worldwide.",
      },
      { q: "Do you deliver outside Karachi?", a: "Yes. We deliver to plants and sites across Pakistan." },
    ],
  },

  calibrators: {
    metaTitle: "Calibration Equipment in Pakistan | PAK Precision Tools",
    metaDescription:
      "Pressure calibrators, dry-well temperature calibrators and Mitutoyo measuring tools from Druck, Additel and Fluke Calibration. Get the latest price within 1 day.",
    h1: "Pressure & Temperature Calibrators in Pakistan",
    intro:
      "Buy genuine calibration equipment in Pakistan from Druck, Additel, Fluke Calibration and Mitutoyo. Browse handheld pressure calibrators, multifunction process calibrators, field dry-well temperature calibrators and precision measuring tools for instrument workshops, QC labs and site calibration. Add items to your quote list for the latest price, or send us a part number and we’ll source it.",
    supplier: {
      heading: "Calibration Equipment Supplier in Pakistan",
      body: "PAK Precision Tools supplies calibration equipment in Pakistan to instrumentation departments, calibration labs and service companies in oil and gas, power, pharma, food and process plants. We deliver across Pakistan from Karachi. Choose from stocked models, or send the model and options you need and we’ll import it.",
    },
    guide: {
      heading: "Calibrators and Measuring Tools We Supply",
      sections: [
        {
          h3: "Pressure Calibrators",
          body: "For calibrating pressure gauges, transmitters and switches, we supply the Additel ADT760 and ADT761A automated handheld pressure calibrators, which generate and measure pressure without a hand pump.",
        },
        {
          h3: "Process and Loop Calibrators",
          body: "The Druck DPI 620 Genii and DPI 611 are modular process calibrators that measure pressure and also measure and source mA, so they work as loop calibrators for 4–20 mA transmitters and control loops. For a dedicated loop calibrator, see the Fluke 789 ProcessMeter and Fluke 754 in Electrical Test & Measurement.",
        },
        {
          h3: "Dry-Well Temperature Calibrators",
          body: "Fluke Calibration (Hart Scientific) 9142 and 9144 field metrology wells are dry block calibrators for checking RTDs, thermocouples and temperature transmitters on site. The 9142 covers –25 to 150 °C and the 9144 covers 50 to 660 °C. Ask for the right temperature calibrator for your range.",
        },
        {
          h3: "Deadweight Testers",
          body: "Deadweight testers for primary pressure calibration are available to order. Send the pressure range and accuracy you need and we’ll quote with lead time.",
        },
        {
          h3: "Precision Measuring Tools",
          body: "For machine shops, maintenance and QC, we supply Mitutoyo vernier and digital calipers, outside micrometers (including IP65 coolant-proof Digimatic models), dial and dial test indicators, cylinder bore gauge sets and feeler gauge sets.",
        },
      ],
    },
    pricing: {
      heading: "Calibration Equipment Prices in Pakistan",
      body: "Calibrators are imported and often built with options, so prices in Pakistan depend on the model, range, modules and exchange rate. Send the model and options and we’ll reply with the current price, availability and lead time, usually within one business day.",
    },
    whyBuy: {
      heading: "Why Buy Calibration Equipment from Us",
      points: [
        "Genuine brands: original calibrators from Druck, Additel and Fluke Calibration, and Mitutoyo measuring tools",
        "Exact configurations: we quote the ranges, modules and accessories you specify",
        "Imported on request: models and options that aren’t stocked locally",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to plants and labs in every major city",
      ],
    },
    faqHeading: "Calibration Equipment: Frequently Asked Questions",
    faqs: [
      {
        q: "What is the difference between a pressure calibrator and a deadweight tester?",
        a: "A handheld pressure calibrator is portable and fast, so it suits site and workshop calibration. A deadweight tester uses calibrated weights for higher accuracy and is usually kept in the calibration lab as a reference.",
      },
      {
        q: "Which dry-well do I need, the Fluke 9142 or 9144?",
        a: "Choose the 9142 for low and medium temperatures (–25 to 150 °C), and the 9144 for higher temperatures (50 to 660 °C), such as thermocouples on boilers and furnaces.",
      },
      {
        q: "Can the Druck DPI 620 Genii calibrate HART transmitters?",
        a: "The DPI 620 Genii can be supplied with HART communication. Send the configuration you need and we’ll quote the right model and modules.",
      },
      { q: "Do you supply calibration equipment outside Karachi?", a: "Yes. We deliver to plants and labs across Pakistan." },
    ],
  },

  "rf-laboratory": {
    metaTitle: "RF Test Equipment in Pakistan | PAK Precision Tools",
    metaDescription:
      "Keysight FieldFox microwave analyzers, Infiniium oscilloscopes and Keithley source measure units for labs and field RF work. Get the latest price within 1 day.",
    h1: "RF, Microwave & Lab Test Equipment in Pakistan",
    intro:
      "Buy genuine RF test equipment in Pakistan from Keysight and Keithley. Browse handheld microwave analyzers, high-bandwidth oscilloscopes and source measure units for telecom field work, electronics R&D, university labs and production testing. Add items to your quote list for the latest price, or send us a model number and we’ll source it.",
    supplier: {
      heading: "RF and Lab Test Equipment Supplier in Pakistan",
      body: "PAK Precision Tools supplies RF and lab test equipment in Pakistan to telecom engineers, electronics manufacturers, research labs and universities. We deliver across Pakistan from Karachi. Choose from stocked models, or send the model and options you need and we’ll import it.",
    },
    guide: {
      heading: "RF and Lab Instruments We Supply",
      sections: [
        {
          h3: "Handheld Microwave and Spectrum Analyzers",
          body: "The Keysight FieldFox N9918B is a handheld microwave analyzer for testing cables, antennas and RF systems in the field, with spectrum analyzer and network analyzer modes available as options. It’s a portable alternative to a benchtop spectrum analyzer for telecom sites and installations. Send the frequency range and options you need for an exact quote.",
        },
        {
          h3: "High-Bandwidth Oscilloscopes",
          body: "For high-speed digital, RF and power electronics work, we supply Keysight Infiniium oscilloscopes. For general-purpose maintenance and repair, see the Tektronix oscilloscopes in Electrical Test & Measurement.",
        },
        {
          h3: "Source Measure Units",
          body: "Keithley 2450 and 2600B SourceMeter source measure units source and measure voltage and current in one instrument, for characterizing semiconductors, solar cells, LEDs and other components in R&D and production.",
        },
      ],
    },
    whyBuy: {
      heading: "Why Buy RF and Lab Equipment from Us",
      points: [
        "Genuine brands: original instruments from Keysight and Keithley",
        "Exact configurations: we quote the frequency ranges, options and accessories you specify",
        "Imported on request: models and options that aren’t stocked locally",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to labs and sites in every major city",
      ],
    },
    faqHeading: "RF and Lab Equipment: Frequently Asked Questions",
    faqs: [
      {
        q: "Can the FieldFox work as a spectrum analyzer?",
        a: "Yes, when ordered with the spectrum analyzer option. FieldFox models are configured with options, so send the measurements you need and we’ll quote the right configuration.",
      },
      {
        q: "What is a source measure unit used for?",
        a: "A source measure unit (SMU) supplies a precise voltage or current and measures the result at the same time. It’s used to test semiconductors, solar cells, LEDs, sensors and batteries.",
      },
      {
        q: "Do you supply universities and research labs?",
        a: "Yes. We quote for universities, research labs and R&D departments, with GST invoices and purchase orders accepted.",
      },
      { q: "Do you deliver outside Karachi?", a: "Yes. We deliver to labs and sites across Pakistan." },
    ],
  },

  "mass-flow": {
    metaTitle: "Coriolis Flow Meters in Pakistan | PAK Precision Tools",
    metaDescription:
      "Micro Motion ELITE Coriolis flowmeters and Alicat and Aalborg mass flow controllers for liquids and gases. Get the latest price in Pakistan within 1 day.",
    h1: "Coriolis Flowmeters & Mass Flow Controllers in Pakistan",
    intro:
      "Buy genuine Coriolis flow meters in Pakistan from Micro Motion, and gas mass flow controllers from Alicat Scientific and Aalborg. Measure mass flow and density directly for custody transfer, batching and dosing, or control gas flow precisely in labs and production. Add items to your quote list for the latest price, or send your model code and we’ll source it.",
    supplier: {
      heading: "Mass Flow Meter and Controller Supplier in Pakistan",
      body: "PAK Precision Tools supplies Coriolis and mass flow meters in Pakistan to instrumentation engineers in oil and gas, chemical, fertilizer, food and pharma plants, and mass flow controllers to labs and process lines. We deliver across Pakistan from Karachi. Send your fluid, flow range and line size, or the model code, and we’ll quote the right meter or import it.",
    },
    guide: {
      heading: "Mass Flow Products We Supply",
      sections: [
        {
          h3: "Coriolis Flow Meters",
          body: "Micro Motion ELITE Coriolis flow meters (CMFS and CMF300 sensors) measure mass flow and density directly, for liquids and gases, without needing pressure or temperature compensation. They’re used for custody transfer, batching, blending and chemical dosing. Send the fluid, flow range and line size for an exact quote.",
        },
        {
          h3: "Mass Flow Controllers",
          body: "For precise gas flow control, we supply Alicat Scientific MC and MCR series and Aalborg GFC mass flow controllers. Each gas flow controller measures and controls flow in one unit, for lab gas mixing, burners, coating, packaging and analyzer calibration. Send the gas type and flow range and we’ll recommend the right model.",
        },
      ],
    },
    whyBuy: {
      heading: "Why Buy Mass Flow Instruments from Us",
      points: [
        "Genuine brands: original instruments from Micro Motion, Alicat Scientific and Aalborg",
        "Exact configurations: we quote the sensor size, materials, outputs and calibration you specify",
        "Imported on request: models and options that aren’t stocked locally",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to plants and labs in every major city",
      ],
    },
    faqHeading: "Coriolis and Mass Flow: Frequently Asked Questions",
    faqs: [
      {
        q: "What is the difference between a Coriolis flow meter and a magnetic flow meter?",
        a: "A Coriolis meter measures mass flow and density directly and works with almost any liquid or gas. A magnetic (electromagnetic) flow meter measures volume flow and only works with conductive liquids such as water. See our electromagnetic flowmeters in Process Instrumentation.",
      },
      {
        q: "Can one mass flow controller work with different gases?",
        a: "Many Alicat controllers can be set for several gases. Tell us which gases and flow ranges you need, and we’ll confirm the right model.",
      },
      {
        q: "What details do you need to quote a Coriolis meter?",
        a: "The fluid, flow range, operating pressure and temperature, line size and required output. A datasheet or the existing meter’s model code also works.",
      },
      { q: "Do you deliver outside Karachi?", a: "Yes. We deliver to plants and labs across Pakistan." },
    ],
  },

  "analytical-sensors": {
    metaTitle: "Moisture & Oxygen Analyzers in Pakistan | PAK Precision Tools",
    metaDescription:
      "Vaisala dew point and humidity transmitters, Panametrics moisture analyzers and Rosemount OCX8800 oxygen analyzers. Get the latest price in Pakistan within 1 day.",
    h1: "Environmental & Analytical Sensors in Pakistan",
    intro:
      "Buy genuine dew point, humidity, moisture and oxygen measurement instruments in Pakistan from Vaisala, Panametrics and Rosemount Analytical. Browse dew point transmitters, humidity transmitters, moisture analyzers and in-situ oxygen analyzers for compressed air, natural gas, boilers and process plants. Add items to your quote list for the latest price, or send us a model code and we’ll source it.",
    supplier: {
      heading: "Analytical Instruments Supplier in Pakistan",
      body: "PAK Precision Tools supplies analytical sensors and transmitters to instrumentation, utilities and energy teams in power plants, oil and gas facilities, fertilizer and chemical plants, pharma and food factories. We deliver across Pakistan from Karachi. Send the model code or your measurement requirement, and we’ll quote the right instrument or import it.",
    },
    guide: {
      heading: "Analytical Instruments We Supply",
      sections: [
        {
          h3: "Dew Point and Humidity Transmitters",
          body: "Vaisala DMT340 dew point transmitters measure dryness in compressed air, dryers and process gases, and Vaisala HMT330 humidity transmitters measure humidity and temperature in clean rooms, warehouses, HVAC and industrial processes.",
        },
        {
          h3: "Moisture Analyzers and Flare Gas Meters",
          body: "The Panametrics moisture.IQ moisture analyzer measures trace moisture and dew point in natural gas and process gases. The Panametrics flare.IQ is an ultrasonic flare gas flow meter for measuring flare flow in refineries and gas plants.",
        },
        {
          h3: "Oxygen and Combustion Analyzers",
          body: "The Rosemount Analytical OCX8800 is an in-situ oxygen analyzer and combustibles transmitter that sits in the flue to help tune boilers, heaters and furnaces for efficiency. It works as a fixed flue gas analyzer. For a portable combustion analyzer, see the Testo 310 in Electrical Test & Measurement and ask for its current price in Pakistan.",
        },
      ],
    },
    whyBuy: {
      heading: "Why Buy Analytical Instruments from Us",
      points: [
        "Genuine brands: original instruments from Vaisala, Panametrics and Rosemount Analytical",
        "Exact configurations: we quote the probe, range, output and options you specify",
        "Imported on request: models and spares that aren’t stocked locally",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to plants and sites in every major city",
      ],
    },
    faqHeading: "Analytical Sensors: Frequently Asked Questions",
    faqs: [
      {
        q: "Which dew point transmitter do I need for compressed air?",
        a: "For compressed air and dryers, a dew point transmitter such as the Vaisala DMT340 is the usual choice. Tell us the expected dew point range and pressure, and we’ll confirm the right model and probe.",
      },
      {
        q: "What is the difference between a fixed oxygen analyzer and a portable combustion analyzer?",
        a: "A fixed analyzer such as the Rosemount OCX8800 measures continuously in the flue for automatic combustion control. A portable combustion analyzer such as the Testo 310 is used for periodic checks and burner tuning.",
      },
      {
        q: "Can you supply spare probes and sensors?",
        a: "Yes. Send the model and serial number of your instrument and we’ll quote the matching probe or sensor.",
      },
      { q: "Do you deliver outside Karachi?", a: "Yes. We deliver to plants and sites across Pakistan." },
    ],
  },

  "remote-inspection": {
    metaTitle: "Industrial Borescopes in Pakistan | PAK Precision Tools",
    metaDescription:
      "Waygate Mentor Visual iQ video borescopes and RAE Systems AreaRAE area gas monitors. Get the latest video borescope price in Pakistan within 1 day.",
    h1: "Safety & Remote Inspection Equipment in Pakistan",
    intro:
      "Buy genuine remote inspection and area safety equipment in Pakistan from Waygate Technologies and RAE Systems. Browse the Mentor Visual iQ industrial borescope for internal inspection of turbines, engines, pipes and pressure vessels, and AreaRAE transportable area gas monitors for confined spaces, shutdowns and hazmat response. Add items to your quote list for the latest price, or send us a model code and we’ll source it.",
    supplier: {
      heading: "Industrial Borescope and Area Monitor Supplier in Pakistan",
      body: "PAK Precision Tools supplies video borescopes and multi-gas area monitors to maintenance, inspection, NDT and HSE teams in power plants, oil and gas facilities, refineries, aviation workshops and heavy industry. We deliver across Pakistan from Karachi. Send the model code or describe what you need to inspect or monitor, and we’ll quote the right configuration or import it.",
    },
    guide: {
      heading: "Remote Inspection and Area Monitoring Equipment We Supply",
      sections: [
        {
          h3: "Industrial Video Borescopes",
          body: "The Waygate Technologies Mentor Visual iQ is an industrial video borescope for remote visual inspection of areas you can’t see directly: gas and steam turbines, aircraft engines, boilers, heat exchangers, pipes and welds. It works as a remote inspection camera with articulating probes in several diameters and lengths, and it can capture images, video and measurements for inspection reports.",
        },
        {
          h3: "Transportable Area Gas Monitors",
          body: "The RAE Systems AreaRAE Plus and AreaRAE Pro are transportable multi-gas area monitors that measure toxic gases, combustible gases, oxygen and VOCs, with optional gamma radiation sensing on supported models. They are set up around confined space entries, tank cleaning, plant shutdowns and emergency response, and they send live readings and alarms wirelessly to a supervisor. For personal multi-gas detectors worn by each worker, see PPE, Safety & Gas Detection.",
        },
      ],
    },
    pricing: {
      heading: "Video Borescope Price in Pakistan",
      body: "The video borescope price in Pakistan depends on the probe diameter, length, articulation and measurement options, and prices change with the exchange rate. Send us your application and access size, and we’ll send a quote within 1 business day.",
    },
    whyBuy: {
      heading: "Why Buy Inspection and Safety Equipment from Us",
      points: [
        "Genuine brands: original equipment from Waygate Technologies and RAE Systems",
        "Exact configurations: we quote the probe, sensors and accessories you specify",
        "Imported on request: models, probes and spares that aren’t stocked locally",
        "Business-ready: GST invoices, purchase orders and LC accepted",
        "Delivery across Pakistan: from Karachi to plants and sites in every major city",
      ],
    },
    faqHeading: "Safety & Remote Inspection: Frequently Asked Questions",
    faqs: [
      {
        q: "Which probe size do I need for an industrial borescope?",
        a: "It depends on the smallest access port and how far you need to reach. Tell us the port diameter and inspection length, and we’ll confirm the right Mentor Visual iQ probe.",
      },
      {
        q: "What is the difference between an area gas monitor and a personal gas detector?",
        a: "An area gas monitor such as the AreaRAE is placed at the work site to watch the whole area and alert a supervisor remotely. A personal gas detector is worn by each worker to measure the air in their breathing zone.",
      },
      {
        q: "Can you supply sensors, probes and spares?",
        a: "Yes. Send the model and serial number of your equipment and we’ll quote the matching sensor, probe or spare part.",
      },
      { q: "Do you deliver outside Karachi?", a: "Yes. We deliver to plants and sites across Pakistan." },
    ],
  },
};
