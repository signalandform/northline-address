import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Trade",
};

export default function TradePage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="Trade"
          title="Trade + bulk ordering for real projects"
          desc="Builders, designers, contractors, and developers: consistent finishes, clean coordination, and support for multi-unit or phased installs."
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-sm text-zinc-950/75">
            <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
              <div className="text-sm font-medium text-zinc-950">Best for</div>
              <ul className="mt-3 space-y-1">
                <li>• Multi-home developments</li>
                <li>• Remodel pipelines</li>
                <li>• Spec packages with consistent finishes</li>
                <li>• Commercial / multifamily signage</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
              <div className="text-sm font-medium text-zinc-950">What you get</div>
              <ul className="mt-3 space-y-1">
                <li>• Bulk pricing guidance</li>
                <li>• Production + lead time coordination</li>
                <li>• Phased shipping options</li>
                <li>• Clear spec confirmation</li>
              </ul>
            </div>
          </div>

          <div>
            <InquiryForm type="trade" page="/trade" />
          </div>
        </div>
      </Section>
    </>
  );
}
