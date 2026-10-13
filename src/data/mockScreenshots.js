export const MOCK_SCREENSHOTS = [
  {
    id: "snap-eames-chair",
    title: "Luxury Office Furniture Screenshot",
    category: "Product Purchase",
    userPrompt: "Find and prepare checkout for this exact lounge chair and ottoman",
    originalSource: "Architectural Digest Instagram Post",
    imagePlaceholderBg: "from-amber-900/60 to-stone-900/90",
    visualIcon: "Armchair",
    extractedData: {
      itemTitle: "Herman Miller Eames Lounge Chair & Ottoman",
      brand: "Herman Miller / Charles & Ray Eames",
      materials: "Molded Walnut Veneer • All-Grain Black Leather",
      dimensions: "32.75\" H x 32.75\" W x 32.75\" D",
      sku: "ES67071-OU-2109",
      confidence: 99.4,
      targetPrice: "$6,495.00"
    },
    matchedVendors: [
      {
        name: "Herman Miller Official",
        price: "$6,495.00",
        badge: "Official Brand • Direct Warranty",
        shipping: "Free White-Glove In-Room Delivery",
        stockStatus: "In Stock (Ships in 3-5 days)",
        url: "https://www.hermanmiller.com/products/seating/lounge-seating/eames-lounge-chair-and-ottoman/",
        checkoutReady: true
      },
      {
        name: "Design Within Reach (DWR)",
        price: "$6,495.00",
        badge: "Authorized Dealer",
        shipping: "$199 Freight",
        stockStatus: "In Stock",
        url: "https://www.dwr.com/living-lounge-chairs/eames-lounge-chair-and-ottoman/",
        checkoutReady: true
      },
      {
        name: "Hive Modern Corporate",
        price: "$6,170.25",
        badge: "5% Corporate Trade Discount",
        shipping: "Free Freight",
        stockStatus: "Special Order (2 weeks)",
        url: "https://hivemodern.com/pages/product1391/eames-lounge-chair",
        checkoutReady: false
      }
    ],
    boundingBox: {
      label: "Eames Lounge & Ottoman (Walnut/Black)",
      coords: "top: 15%, left: 20%, width: 60%, height: 70%"
    }
  },
  {
    id: "snap-flight-rebook",
    title: "United Polaris Flight Itinerary Grab",
    category: "Travel Booking",
    userPrompt: "Rebook this exact flight for next Tuesday's Tokyo summit",
    originalSource: "Slack Message from Founder",
    imagePlaceholderBg: "from-blue-900/60 to-slate-900/90",
    visualIcon: "Plane",
    extractedData: {
      itemTitle: "United Airlines Flight UA 875 (SFO -> HND)",
      brand: "United Airlines (Polaris Business)",
      materials: "Boeing 777-200ER • 1-2-1 Lie-Flat Suite",
      dimensions: "Dep: 11:35 AM SFO • Arr: 3:20 PM+1 HND",
      sku: "UA875-POLARIS-BUS",
      confidence: 98.7,
      targetPrice: "$4,280.00"
    },
    matchedVendors: [
      {
        name: "United.com Direct Booking",
        price: "$4,280.00",
        badge: "Best Fare Guarantee • 0 Fees",
        shipping: "Instant E-Ticket Dispatch",
        stockStatus: "3 Polaris Suites Remaining",
        url: "https://www.united.com/en/us/flight-search/sfo-hnd/ua875",
        checkoutReady: true
      },
      {
        name: "Amex Global Business Travel",
        price: "$4,195.00",
        badge: "Centurion Corporate Fare",
        shipping: "Concierge Ticketing",
        stockStatus: "Confirmed Allocation",
        url: "https://www.americanexpress.com/en-us/travel/flights",
        checkoutReady: true
      }
    ],
    boundingBox: {
      label: "UA 875 SFO-HND Lie-Flat Suite",
      coords: "top: 25%, left: 10%, width: 80%, height: 50%"
    }
  },
  {
    id: "snap-gpu-workstation",
    title: "NVIDIA Workstation Specs Photo",
    category: "Hardware Procurement",
    userPrompt: "Find who has 2 of these GPUs in stock with overnight shipping",
    originalSource: "Twitter / X Hardware Thread",
    imagePlaceholderBg: "from-emerald-950/70 to-dark-900",
    visualIcon: "Cpu",
    extractedData: {
      itemTitle: "NVIDIA RTX 6000 Ada Generation 48GB GPU",
      brand: "NVIDIA Enterprise",
      materials: "48GB GDDR6 with ECC • 18,176 CUDA Cores",
      dimensions: "Dual Slot • 300W PCIe 4.0 x16",
      sku: "900-5G133-2500-000",
      confidence: 99.8,
      targetPrice: "$6,799.00 / unit"
    },
    matchedVendors: [
      {
        name: "CDW Enterprise Solutions",
        price: "$6,799.00",
        badge: "Authorized NVIDIA Tier 1",
        shipping: "Overnight Air ($45)",
        stockStatus: "4 Units In Stock (Immediate PO)",
        url: "https://www.cdw.com/product/nvidia-rtx-6000-ada-generation-48gb/",
        checkoutReady: true
      },
      {
        name: "B&H B2B Corporate",
        price: "$6,849.00",
        badge: "In Stock at NYC Warehouse",
        shipping: "Free Next-Day",
        stockStatus: "2 Units In Stock",
        url: "https://www.bhphotovideo.com/c/product/nvidia-rtx-6000-ada",
        checkoutReady: true
      }
    ],
    boundingBox: {
      label: "RTX 6000 Ada 48GB Dual-Slot",
      coords: "top: 20%, left: 15%, width: 70%, height: 60%"
    }
  },
  {
    id: "snap-datadog-invoice",
    title: "Datadog Cloud Invoice Screenshot",
    category: "SaaS & Bill Pay",
    userPrompt: "Pay this infrastructure bill before the 15th deadline",
    originalSource: "Email Attachment PDF Screen Grab",
    imagePlaceholderBg: "from-purple-950/70 to-dark-900",
    visualIcon: "Receipt",
    extractedData: {
      itemTitle: "Datadog APM & Log Management Invoice #INV-98214",
      brand: "Datadog Inc.",
      materials: "Pro-Tier Host Monitoring • 480k Traces/sec",
      dimensions: "Billing Cycle: Sept 01 - Sept 30",
      sku: "INV-98214-DD",
      confidence: 99.1,
      targetPrice: "$2,840.50"
    },
    matchedVendors: [
      {
        name: "Datadog Billing Portal",
        price: "$2,840.50",
        badge: "Direct Vendor Autopay",
        shipping: "Instant Receipt PDF",
        stockStatus: "Due October 15, 2026",
        url: "https://app.datadoghq.com/billing/invoices/INV-98214",
        checkoutReady: true
      }
    ],
    boundingBox: {
      label: "Invoice #INV-98214 ($2,840.50 Due Oct 15)",
      coords: "top: 10%, left: 10%, width: 80%, height: 75%"
    }
  }
];
