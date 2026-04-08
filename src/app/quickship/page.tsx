import type { Metadata } from "next";

import { ProductCard } from "@/components/product-card";
import { Section, SectionHeader } from "@/components/section";
import { PRODUCTS } from "@/content/products";

export const metadata: Metadata = {
  title: "QuickShip",
};

export default function QuickShipPage() {
  const products = PRODUCTS.filter((p) => p.category === "QuickShip");

  return (
    <>
      <Section>
        <SectionHeader
          kicker="Category"
          title="QuickShip"
          desc="Preconfigured best sellers with faster turnaround. Limited options by design—so you can move quickly without second-guessing every detail."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-zinc-950/10 bg-white">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Built for deadlines</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Listing photos, remodel wrap-ups, new-build completion—QuickShip keeps
              the finish detail on schedule.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Limited options (on purpose)</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              We keep the most popular size/finish combinations ready to move.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Same premium build</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Fast doesn’t mean cheap—just fewer decision points.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
