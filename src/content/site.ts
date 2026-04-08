export const SITE = {
  name: "Northline Address",
  tagline: "Architectural address products that look custom, install cleanly, and make your exterior feel finished.",
  toneWords: ["Calm", "Confident", "Precise", "Modern", "Helpful"],
  leadTimes: {
    standard: "7–10 business days",
    plaquesAndCustom: "8–12 business days",
    quickShip: "1–3 business days",
  },
  contact: {
    // Display only (forms route to configured recipients)
    email: "support@northline.signalandform.net",
  },
} as const;

export const NAV = [
  { href: "/shop", label: "Shop" },
  { href: "/floating-numbers", label: "Floating Numbers" },
  { href: "/address-plaques", label: "Plaques" },
  { href: "/quickship", label: "QuickShip" },
  { href: "/custom", label: "Custom" },
  { href: "/trade", label: "Trade" },
  { href: "/installation", label: "Installation" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;
