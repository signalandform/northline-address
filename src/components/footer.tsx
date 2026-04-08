import Link from "next/link";

import { NAV, SITE } from "@/content/site";
import { Container } from "@/components/container";

export function Footer() {
  return (
    <footer className="border-t border-zinc-950/10 bg-stone-50">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="font-semibold">{SITE.name}</div>
            <p className="text-sm text-zinc-950/70">{SITE.tagline}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-950/70 hover:text-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="space-y-2 text-sm text-zinc-950/70">
            <div className="font-medium text-zinc-950">Policies</div>
            <div>Shipping</div>
            <div>Returns</div>
            <div>Privacy</div>
            <div>Terms</div>
            <p className="pt-2 text-xs text-zinc-950/50">
              Prototype site — lead-generation only.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-950/10 pt-6 text-xs text-zinc-950/60">
          <div>
            © {new Date().getFullYear()} {SITE.name}
          </div>
          <div>Built for Signal & Form demos</div>
        </div>
      </Container>
    </footer>
  );
}
