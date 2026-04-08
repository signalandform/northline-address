import type { FAQ } from "@/content/faqs";

export function FaqAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="rounded-xl border border-zinc-950/10 bg-white px-5 py-4"
        >
          <summary className="cursor-pointer list-none text-sm font-medium text-zinc-950">
            {f.q}
          </summary>
          <p className="mt-3 text-sm text-zinc-950/70">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
