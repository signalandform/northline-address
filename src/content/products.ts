export type ProductCategory =
  | "Floating Numbers"
  | "Address Plaques"
  | "QuickShip";

export type ProductOption =
  | {
      kind: "select";
      name: string;
      key: string;
      values: string[];
      help?: string;
    }
  | {
      kind: "text";
      name: string;
      key: string;
      placeholder?: string;
      help?: string;
    };

export type Product = {
  slug: string;
  name: string;
  collection: string;
  category: ProductCategory;
  startingPrice: string;
  short: string;
  long: string;
  leadTime: string;
  materials: string[];
  finishes: string[];
  sizes: string[];
  mounting: string[];
  includes: string[];
  options: ProductOption[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "axis-floating-number",
    name: "Axis Floating Number",
    collection: "Axis",
    category: "Floating Numbers",
    startingPrice: "$28 / character",
    short:
      "Clean, modern address characters mounted off the surface for depth, shadow, and crisp readability.",
    long:
      "The Axis Floating Number is designed for high visibility and a refined architectural presence. Each character is precision cut and mounted off the surface for a subtle shadow line and a finished look—ideal for modern homes, remodels, and new builds.",
    leadTime: "7–10 business days",
    materials: ["Exterior-rated aluminum"],
    finishes: ["Matte Black", "Warm White", "Dark Bronze", "Brushed Aluminum"],
    sizes: ['4"', '6"', '8"', '10"'],
    mounting: ["Concealed stud mount"],
    includes: [
      "Mounting studs",
      "Spacers",
      "Drilling template",
      "Install guide",
    ],
    options: [
      {
        kind: "text",
        name: "Characters",
        key: "characters",
        placeholder: 'e.g. “1428” (include any letters/symbols)',
        help: "For the prototype, we’ll confirm your layout and spacing via email.",
      },
      {
        kind: "select",
        name: "Size",
        key: "size",
        values: ['4"', '6"', '8"', '10"'],
      },
      {
        kind: "select",
        name: "Finish",
        key: "finish",
        values: ["Matte Black", "Warm White", "Dark Bronze", "Brushed Aluminum"],
      },
      {
        kind: "select",
        name: "Layout",
        key: "layout",
        values: ["Horizontal", "Vertical"],
      },
      {
        kind: "select",
        name: "Surface Type",
        key: "surface",
        values: ["Wood", "Stucco", "Brick", "Stone", "Siding", "Other"],
        help: "We’ll include the correct guidance for your surface.",
      },
    ],
  },
  {
    slug: "span-one-line-plaque",
    name: "Span One-Line Plaque",
    collection: "Span",
    category: "Address Plaques",
    startingPrice: "$148",
    short:
      "A modern, unified address presentation—one clean panel with clear specs and a premium finish.",
    long:
      "The Span One-Line Plaque combines crisp readability with the visual finish of a single architectural panel. It’s the right choice when you want a stronger design statement than individual numbers alone.",
    leadTime: "8–12 business days",
    materials: ["Aluminum face with exterior-rated finish"],
    finishes: ["Matte Black", "Warm White", "Dark Bronze", "Brushed Aluminum"],
    sizes: ['16" × 6"', '20" × 7"', '24" × 8"'],
    mounting: ["Concealed stud", "Stand-off mount"],
    includes: ["Template", "Studs", "Spacers", "Install guide"],
    options: [
      {
        kind: "text",
        name: "Address",
        key: "address",
        placeholder: "e.g. 1428 Northline Dr",
      },
      {
        kind: "select",
        name: "Size",
        key: "size",
        values: ['16" × 6"', '20" × 7"', '24" × 8"'],
      },
      {
        kind: "select",
        name: "Finish",
        key: "finish",
        values: ["Matte Black", "Warm White", "Dark Bronze", "Brushed Aluminum"],
      },
      {
        kind: "select",
        name: "Mount",
        key: "mount",
        values: ["Concealed stud", "Stand-off"],
      },
      {
        kind: "select",
        name: "Alignment",
        key: "alignment",
        values: ["Left", "Center", "Right"],
      },
    ],
  },
  {
    slug: "northline-quickship-set",
    name: "Northline QuickShip Set",
    collection: "Northline",
    category: "QuickShip",
    startingPrice: "$96 / set",
    short:
      "Best-selling modern numbers with fewer decisions and faster turnaround.",
    long:
      "The Northline QuickShip Set is built for speed. We keep the most popular size and finish combinations ready to move so you can get a polished modern address detail without the wait of a fully custom build.",
    leadTime: "1–3 business days",
    materials: ["Exterior-rated aluminum"],
    finishes: ["Matte Black", "Warm White"],
    sizes: ['4"', '6"', '8"'],
    mounting: ["Concealed stud mount"],
    includes: ["Studs", "Template segments", "Install guide"],
    options: [
      {
        kind: "text",
        name: "Number",
        key: "number",
        placeholder: 'e.g. “1428”',
      },
      {
        kind: "select",
        name: "Size",
        key: "size",
        values: ['4"', '6"', '8"'],
      },
      {
        kind: "select",
        name: "Finish",
        key: "finish",
        values: ["Matte Black", "Warm White"],
      },
    ],
  },
];

export const CATEGORIES = [
  {
    slug: "floating-numbers",
    name: "Floating Numbers",
    description:
      "Modern individual numbers and letters mounted off the wall for a crisp architectural look.",
    highlights: [
      "High visibility",
      "Clean shadow line",
      "Exterior-rated materials",
      "Templates + hardware included",
    ],
  },
  {
    slug: "address-plaques",
    name: "Address Plaques",
    description:
      "Unified panels for house numbers, street names, or combined address layouts.",
    highlights: [
      "One clean surface",
      "Strong design statement",
      "Clear size + finish options",
      "Easy-to-follow install guidance",
    ],
  },
  {
    slug: "quickship",
    name: "QuickShip",
    description:
      "Preconfigured best sellers with faster turnaround and fewer decisions.",
    highlights: [
      "Fast lead times",
      "Limited options (on purpose)",
      "Same premium build",
      "Great for deadlines",
    ],
  },
] as const;
