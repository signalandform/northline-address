import { z } from "zod";

export const InquirySchema = z.object({
  type: z.enum(["contact", "custom", "trade", "product"]),
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  phone: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(1).max(5000),

  // Optional context
  page: z.string().max(500).optional(),
  productSlug: z.string().max(200).optional(),
  productName: z.string().max(200).optional(),
  selections: z.record(z.string(), z.string()).optional(),

  // Anti-spam
  company: z.string().max(200).optional(), // honeypot (should be empty)
});

export type Inquiry = z.infer<typeof InquirySchema>;

export function formatInquiryEmail(i: Inquiry) {
  const selections = i.selections && Object.keys(i.selections).length
    ? Object.entries(i.selections)
        .map(([k, v]) => `- ${k}: ${v}`)
        .join("\n")
    : "(none)";

  const lines = [
    `New inquiry (${i.type})`,
    "",
    `Name: ${i.name}`,
    `Email: ${i.email}`,
    i.phone ? `Phone: ${i.phone}` : undefined,
    i.page ? `Page: ${i.page}` : undefined,
    i.productName ? `Product: ${i.productName}` : undefined,
    i.productSlug ? `Product slug: ${i.productSlug}` : undefined,
    "",
    "Selections:",
    selections,
    "",
    "Message:",
    i.message,
    "",
    `Timestamp: ${new Date().toISOString()}`,
  ].filter(Boolean);

  const subjectBase =
    i.type === "product"
      ? `Product request — ${i.productName || i.productSlug || "(unknown)"}`
      : i.type === "trade"
        ? "Trade inquiry"
        : i.type === "custom"
          ? "Custom order inquiry"
          : "Contact inquiry";

  return {
    subject: `[Northline] ${subjectBase} — ${i.name}`,
    text: lines.join("\n"),
  };
}
