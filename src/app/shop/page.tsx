import type { Metadata } from "next";

import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";
import { Section, SectionHeader } from "@/components/section";
import { CATEGORIES, PRODUCTS } from "@/content/products";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <>
      <Section>
        <SectionHeader
          kicker="Shop"
          title="Choose your product family"
          desc="Start with a category, then request a configuration from a flagship product page. This prototype is lead-gen only."
        />

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

      <Section className="border-t border-zinc-950/10 bg-white">
        <SectionHeader
          kicker="Flagship"
          title="Featured products"
          desc="Three complete product pages with selectable options, specs, and clear lead times."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </Section>
    </>
  );
}
