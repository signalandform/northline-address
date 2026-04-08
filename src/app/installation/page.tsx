import type { Metadata } from "next";

import { Button } from "@/components/button";
import { Section, SectionHeader } from "@/components/section";

export const metadata: Metadata = {
  title: "Installation",
};

export default function InstallationPage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="Installation"
          title="Clean installs come from calm steps"
          desc="Most installs are straightforward with a level, tape measure, and the right bit for your surface. We’ll confirm surface guidance when you submit a request."
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-950/10 bg-white p-8">
            <div className="text-sm font-medium">Tools (typical)</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-950/70">
              <li>• Tape measure + pencil</li>
              <li>• Level</li>
              <li>• Drill + appropriate bit (wood/masonry)</li>
              <li>• Painter’s tape (helpful for layout)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-950/10 bg-white p-8">
            <div className="text-sm font-medium">Surface notes</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-950/70">
              <li>• Brick/stone/stucco may require a masonry bit.</li>
              <li>• Siding may require additional backing guidance.</li>
              <li>• If you’re unsure, request guidance before drilling.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="border-t border-zinc-950/10 bg-white">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">1) Plan your layout</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Use the template to confirm spacing and alignment. Step back and check
              readability from the street.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">2) Mark and level</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Leveling is the difference between “fine” and “finished.” Take your time
              here.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">3) Drill and mount</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Use the correct bit for your surface. Install studs/spacers per guide,
              then set the characters or plaque.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-zinc-950/10 bg-stone-50 p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-sm font-medium">Have a tricky surface?</div>
              <p className="mt-1 text-sm text-zinc-950/70">
                Tell us what you’re mounting to and we’ll recommend the right approach.
              </p>
            </div>
            <Button href="/contact">Ask a question</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
