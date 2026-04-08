export type FAQ = {
  q: string;
  a: string;
};

export const FAQS: FAQ[] = [
  {
    q: "Do you keep inventory on hand?",
    a: "Most items are made-to-order or built after confirmation. QuickShip items are limited-option sets designed for faster turnaround.",
  },
  {
    q: "When will my order ship?",
    a: "Lead times depend on product type. Floating numbers are typically 7–10 business days, plaques 8–12 business days, and QuickShip sets 1–3 business days. We’ll confirm timing with your request.",
  },
  {
    q: "Is installation difficult?",
    a: "No—if you can measure and drill carefully, you can install most sets. We include templates and guidance, and we’ll recommend the right approach based on your surface (wood, stucco, brick, stone, siding).",
  },
  {
    q: "What finishes do you offer?",
    a: "Core finishes include Matte Black, Warm White, Dark Bronze, and Brushed Aluminum (QuickShip is limited to the fastest options).",
  },
  {
    q: "Can you do trade / bulk orders?",
    a: "Yes. Builders, designers, and developers can request trade pricing and coordination for multi-home or phased projects.",
  },
  {
    q: "What if something is delayed or unavailable?",
    a: "If a constraint arises (finish availability, unusual surface requirements, or custom complexity), we’ll contact you quickly with options: adjust, wait, or cancel.",
  },
];
