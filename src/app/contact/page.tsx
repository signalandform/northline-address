import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="Contact"
          title="Ask a question or request guidance"
          desc="Send a note about sizing, finishes, surfaces, or trade/custom needs. We’ll respond by email."
        />

        <div className="max-w-2xl">
          <InquiryForm type="contact" page="/contact" />
        </div>
      </Section>
    </>
  );
}
