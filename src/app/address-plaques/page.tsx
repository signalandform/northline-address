import type { Metadata } from "next";

import { ProductCard } from "@/components/product-card";
import { Section, SectionHeader } from "@/components/section";
import { PRODUCTS } from "@/content/products";

export const metadata: Metadata = {
  title: "Address Plaques",
};

export default function AddressPlaquesPage() {
  const products = PRODUCTS.filter((p) => p.category === "Address Plaques");

  return (
    <>
      <Section>
        <SectionHeader
          kicker="Category"
          title="Address Plaques"
          desc="Unified panels for house numbers, street names, or combined address layouts—built to feel architectural and intentional."
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
            <div className="text-sm font-medium">One clean presentation</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              A plaque reads as a single design element—especially strong on modern
              elevations.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Clear sizing</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Standard sizes keep decisions simple, with custom available when needed.
            </p>
          </div>
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Mounting options</div>
            <p className="mt-2 text-sm text-zinc-950/70">
              Concealed stud or stand-off mounts depending on the look and surface.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
