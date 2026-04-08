import type { Metadata } from "next";

import { InquiryForm } from "@/components/inquiry-form";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Custom Orders",
};

export default function CustomPage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="Custom"
          title="Custom orders without the confusion"
          desc="If your project doesn’t fit a standard size, finish, or layout, we’ll map it out clearly—clean specs, clear lead times, and a straightforward approval loop."
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-4 text-sm text-zinc-950/75">
            <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
              <div className="text-sm font-medium text-zinc-950">
                Typical custom requests
              </div>
              <ul className="mt-3 space-y-1">
                <li>• Custom plaque sizes and layouts</li>
                <li>• Street name + number combinations</li>
                <li>• Vertical layouts</li>
                <li>• Custom fonts (when feasible)</li>
                <li>• Specialty signage and one-off needs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
              <div className="text-sm font-medium text-zinc-950">Process</div>
              <ol className="mt-3 space-y-1">
                <li>1) Request details</li>
                <li>2) We confirm options + lead time</li>
                <li>3) Approve the configuration</li>
                <li>4) Production + shipment</li>
              </ol>
            </div>
          </div>

          <div>
            <InquiryForm type="custom" page="/custom" />
          </div>
        </div>
      </Section>
    </>
  );
}
