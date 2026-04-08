import Link from "next/link";

import type { Product } from "@/content/products";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group rounded-xl border border-zinc-950/10 bg-white p-6 transition hover:border-zinc-950/20",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-xs font-medium tracking-widest text-zinc-950/50">
            {product.category.toUpperCase()}
          </div>
          <div className="mt-2 text-lg font-semibold tracking-tight">
            {product.name}
          </div>
          <p className="mt-2 text-sm text-zinc-950/70">{product.short}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-zinc-950">
            {product.startingPrice}
          </div>
          <div className="mt-2 text-sm text-zinc-950/40 transition group-hover:text-zinc-950/70">
            View →
          </div>
        </div>
      </div>
    </Link>
  );
}
