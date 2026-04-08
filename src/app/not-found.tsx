import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="max-w-xl">
        <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-zinc-950/70">
          The page you’re looking for doesn’t exist (or moved). Use the Shop page to
          start.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-flex rounded-md border border-zinc-950/15 bg-zinc-950 px-4 py-2 text-sm font-medium text-stone-50 hover:bg-zinc-900"
        >
          Go to Shop
        </Link>
      </div>
    </Container>
  );
}
