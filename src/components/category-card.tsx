import Link from "next/link";

import { cn } from "@/lib/utils";

export function CategoryCard({
  href,
  title,
  description,
  highlights,
  className,
}: {
  href: string;
  title: string;
  description: string;
  highlights: string[];
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group rounded-xl border border-zinc-950/10 bg-white p-6 transition hover:border-zinc-950/20",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-lg font-semibold tracking-tight">{title}</div>
          <p className="mt-2 text-sm text-zinc-950/70">{description}</p>
          <ul className="mt-4 space-y-1 text-sm text-zinc-950/70">
            {highlights.slice(0, 4).map((h) => (
              <li key={h}>• {h}</li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-zinc-950/40 transition group-hover:text-zinc-950/70">
          →
        </div>
      </div>
    </Link>
  );
}
