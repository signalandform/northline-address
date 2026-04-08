import Link from "next/link";

import { NAV, SITE } from "@/content/site";
import { Container } from "@/components/container";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-950/10 bg-stone-50/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight">
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          {NAV.slice(0, 6).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-950/70 hover:text-zinc-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-md border border-zinc-950/15 bg-transparent px-3 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-950/5"
          >
            Contact
          </Link>
          <Link
            href="/shop"
            className="rounded-md border border-zinc-950/15 bg-zinc-950 px-3 py-2 text-sm font-medium text-stone-50 hover:bg-zinc-900"
          >
            Shop
          </Link>
        </div>
      </Container>
    </header>
  );
}
