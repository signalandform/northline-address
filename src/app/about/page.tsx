import type { Metadata } from "next";

import { Button } from "@/components/button";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="About"
          title="A premium finish detail — made approachable"
          desc="Northline Address is positioned as design-forward, durable, and made-to-order—without sign-shop confusion or decision fatigue."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-zinc-950/80">
            <p>
              Exterior address products are a small detail with an outsized impact. They
              affect curb appeal, readability, and the sense that a home or project is
              fully finished.
            </p>
            <p>
              The goal of this prototype is simple: present a tight catalog that feels
              credible—clean specs, clear lead times, and installation guidance that
              reduces purchase anxiety.
            </p>
            <p>
              When the brand is ready for real checkout, we can graduate this site into
              Shopify (standard or headless) with the same product architecture.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-950/10 bg-white p-8">
            <div className="text-sm font-medium">What we optimize for</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-950/70">
              <li>• Calm, architectural presentation</li>
              <li>• Simple ordering decisions</li>
              <li>• Durable finishes + clear specs</li>
              <li>• Installation confidence</li>
              <li>• Trade and custom support</li>
            </ul>

            <div className="mt-6">
              <Button href="/shop">Browse categories</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
