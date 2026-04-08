import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/button";
import { InquiryForm } from "@/components/inquiry-form";
import { Section, SectionHeader } from "@/components/section";
import { PRODUCTS } from "@/content/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const product = PRODUCTS.find((p) => p.slug === slug);
    if (!product) return { title: "Product" };
    return {
      title: product.name,
      description: product.short,
    };
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Section>
        <SectionHeader
          kicker={product.category}
          title={product.name}
          desc={product.long}
        />

        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="rounded-2xl border border-zinc-950/10 bg-gradient-to-br from-stone-100 to-stone-50 p-10">
            <div className="text-xs font-medium tracking-widest text-zinc-950/60">
              STARTING AT
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight">
              {product.startingPrice}
            </div>
            <div className="mt-5 grid gap-3 text-sm text-zinc-950/70">
              <div>
                <span className="font-medium text-zinc-950">Lead time:</span> {" "}
                {product.leadTime}
              </div>
              <div>
                <span className="font-medium text-zinc-950">Finishes:</span> {" "}
                {product.finishes.join(", ")}
              </div>
              <div>
                <span className="font-medium text-zinc-950">Mounting:</span> {" "}
                {product.mounting.join(", ")}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/installation" variant="ghost">
                Installation
              </Button>
              <Button href="/trade" variant="ghost">
                Trade
              </Button>
            </div>
          </div>

          <div>
            <div className="mb-3 text-sm font-medium">Request this configuration</div>
            <InquiryForm
              type="product"
              page={`/products/${product.slug}`}
              product={product}
              compact
            />
            <p className="mt-3 text-xs text-zinc-950/50">
              Prototype flow: requests are confirmed by email. Checkout is a next-step
              implementation.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-zinc-950/10 bg-white">
        <SectionHeader
          kicker="Specs"
          title="Materials, sizing, and what’s included"
          desc="Clear specs reduce uncertainty and make installs cleaner."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Materials</div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-950/70">
              {product.materials.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>

            <div className="mt-6 text-sm font-medium">Finish options</div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-950/70">
              {product.finishes.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-950/10 bg-white p-6">
            <div className="text-sm font-medium">Available sizes</div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-950/70">
              {product.sizes.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>

            <div className="mt-6 text-sm font-medium">Included</div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-950/70">
              {product.includes.map((x) => (
                <li key={x}>• {x}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-zinc-950/10 bg-stone-50 p-6">
          <div className="text-sm font-medium">Notes</div>
          <ul className="mt-2 space-y-1 text-sm text-zinc-950/70">
            <li>• Surface type matters (wood, stucco, brick, stone, siding).</li>
            <li>• Coastal/industrial environments may require finish guidance.</li>
            <li>
              • For multi-unit needs, use the Trade page so we can coordinate cleanly.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-950/10 bg-white p-8">
            <div className="text-xs font-medium tracking-widest text-zinc-950/60">
              CUSTOM
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight">
              Need a different layout or sizing?
            </div>
            <p className="mt-3 text-sm text-zinc-950/70">
              If you want a specific arrangement, plaque layout, or project-specific
              finish, we’ll map it out clearly.
            </p>
            <div className="mt-6">
              <Button href="/custom">Start a custom request</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-950/10 bg-white p-8">
            <div className="text-xs font-medium tracking-widest text-zinc-950/60">
              TRADE
            </div>
            <div className="mt-2 text-xl font-semibold tracking-tight">
              Builders, designers, and developers
            </div>
            <p className="mt-3 text-sm text-zinc-950/70">
              Trade requests support bulk quantities, phased installs, and clean project
              communication.
            </p>
            <div className="mt-6">
              <Button href="/trade">Request trade pricing</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
