import type { Metadata } from "next";

import { Button } from "@/components/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { Section, SectionHeader } from "@/components/section";
import { FAQS } from "@/content/faqs";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="FAQ"
          title="Straight answers"
          desc="Clear lead times, clear installation expectations, and a simple path to get the right configuration."
        />

        <FaqAccordion faqs={FAQS} />

        <div className="mt-10 rounded-2xl border border-zinc-950/10 bg-stone-50 p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium">Still unsure?</div>
              <p className="mt-1 text-sm text-zinc-950/70">
                Send a note with your surface type and preferred finish and we’ll guide
                you.
              </p>
            </div>
            <Button href="/contact">Contact</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
