import type { Metadata } from "next";

import { ProductCard } from "@/components/product-card";
import { Section, SectionHeader } from "@/components/section";
import { PRODUCTS } from "@/content/products";

export const metadata: Metadata = {
  title: "Floating Numbers",
};

export default function FloatingNumbersPage() {
  const products = PRODUCTS.filter((p) => p.category === "Floating Numbers");

  return (
    <>
      <Section>
        <SectionHeader
          kicker="Category"
          title="Floating Numbers"
          desc="Modern individual numbers and letters mounted off the wall for a crisp architectural look. Durable materials, clean specs, and clear installation guidance."
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
            <div className="text-sm font-medium">Why floating numbers</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              They read cleanly from the street and add depth without visual clutter.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Mounting</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Concealed stud mounts create a crisp shadow line and a high-end finished
              look.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Installation confidence</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Templates + clear surface guidance (wood, stucco, brick, stone, siding).
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
