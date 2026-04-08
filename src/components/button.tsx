import Link from "next/link";

import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center rounded-md border border-zinc-950/15 bg-zinc-950 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-950/20";

const ghost =
  "inline-flex items-center justify-center rounded-md border border-zinc-950/15 bg-transparent px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-zinc-950/5 focus:outline-none focus:ring-2 focus:ring-zinc-950/10";

export function Button({
  children,
  className,
  variant = "solid",
  href,
  type,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "ghost";
  href?: string;
}) {
  const cls = cn(variant === "solid" ? base : ghost, className);

  if (href) {
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cls} type={type} {...props}>
      {children}
    </button>
  );
}
