import type { Metadata } from "next";

import { Button } from "@/components/button";
import { CategoryCard } from "@/components/category-card";
import { Container } from "@/components/container";
import { ProductCard } from "@/components/product-card";
import { Section } from "@/components/section";
import { CATEGORIES, PRODUCTS } from "@/content/products";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <section className="border-b border-zinc-950/10 bg-white">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <div className="text-xs font-medium tracking-widest text-zinc-950/60">
                PREMIUM • ARCHITECTURAL • MADE TO ORDER
              </div>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                Modern exterior address products.
              </h1>
              <p className="mt-4 max-w-xl text-lg text-zinc-950/70">
                {SITE.tagline}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/shop">Shop the collection</Button>
                <Button href="/custom" variant="ghost">
                  Custom order request
                </Button>
              </div>

              <div className="mt-8 grid gap-3 rounded-xl border border-zinc-950/10 bg-stone-50 p-5 text-sm text-zinc-950/75">
                <div>
                  <span className="font-medium text-zinc-950">Made to order</span>
                  {": "}clear lead times and a straightforward process.
                </div>
                <div>
                  <span className="font-medium text-zinc-950">Exterior-rated materials</span>
                  {": "}durable finishes designed for real conditions.
                </div>
                <div>
                  <span className="font-medium text-zinc-950">Easy installation</span>
                  {": "}hardware + templates where applicable.
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-950/10 bg-gradient-to-br from-stone-100 to-stone-50 p-10">
              <div className="text-xs font-medium tracking-widest text-zinc-950/60">
                FLAGSHIP PRODUCTS
              </div>
              <div className="mt-4 space-y-3 text-sm text-zinc-950/70">
                <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 bg-white px-4 py-3">
                  <div className="font-medium text-zinc-950">Axis Floating Number</div>
                  <div>$28 / character</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 bg-white px-4 py-3">
                  <div className="font-medium text-zinc-950">Span One-Line Plaque</div>
                  <div>$148</div>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-zinc-950/10 bg-white px-4 py-3">
                  <div className="font-medium text-zinc-950">Northline QuickShip Set</div>
                  <div>$96 / set</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-zinc-950/60">
                This is a lead-gen prototype: request a configuration and we’ll confirm
                details by email.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {CATEGORIES.map((c) => (
            <CategoryCard
              key={c.slug}
              href={`/${c.slug}`}
              title={c.name}
              description={c.description}
              highlights={[...c.highlights]}
            />
          ))}
        </div>
      </Section>

      <Section className="border-y border-zinc-950/10 bg-white">
        <div className="mb-8 max-w-2xl">
          <div className="text-xs font-medium tracking-widest text-zinc-950/60">
            START HERE
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Three flagship products. Fully specified.
          </h2>
          <p className="mt-3 text-zinc-950/70">
            A small, complete system—designed to feel premium and credible without
            overwhelming the customer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="text-xs font-medium tracking-widest text-zinc-950/60">
              INSTALLATION CONFIDENCE
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Clean installs come from clear guidance.
            </h2>
            <p className="mt-3 text-zinc-950/70">
              We include templates and hardware where applicable, plus surface-specific
              notes (wood, stucco, brick, stone, and siding).
            </p>
            <div className="mt-6">
              <Button href="/installation">View installation guide</Button>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-950/10 bg-white p-8">
            <div className="text-sm font-medium">Typical lead times</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-950/70">
              <li>
                • Floating Numbers: <span className="font-medium">7–10</span>
                {" "}
                business days
              </li>
              <li>
                • Plaques / Custom: <span className="font-medium">8–12</span>
                {" "}
                business days
              </li>
              <li>
                • QuickShip: <span className="font-medium">1–3</span> business days
              </li>
            </ul>
            <p className="mt-4 text-xs text-zinc-950/50">
              Lead times are shown as expectations; we’ll confirm the details in your
              request.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-t border-zinc-950/10 bg-white">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-950/10 bg-stone-50 p-8">
            <div className="text-xs font-medium tracking-widest text-zinc-950/60">
              CUSTOM
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              Made-to-fit signage without sign-shop chaos.
            </h3>
            <p className="mt-3 text-sm text-zinc-950/70">
              Custom fonts, layouts, plaques, and specialty signage—with a clear process
              and clean specs.
            </p>
            <div className="mt-6">
              <Button href="/custom">Start a custom request</Button>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-950/10 bg-stone-50 p-8">
            <div className="text-xs font-medium tracking-widest text-zinc-950/60">
              TRADE
            </div>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              Trade + bulk support for real projects.
            </h3>
            <p className="mt-3 text-sm text-zinc-950/70">
              Builders, designers, and developers: consistent finishes, multi-unit
              coordination, and straightforward communication.
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
