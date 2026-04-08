import { cn } from "@/lib/utils";
import { Container } from "@/components/container";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-14", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  title,
  kicker,
  desc,
}: {
  title: string;
  kicker?: string;
  desc?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      {kicker ? (
        <div className="mb-2 text-xs font-medium tracking-widest text-zinc-950/60">
          {kicker.toUpperCase()}
        </div>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h1>
      {desc ? <p className="mt-3 text-zinc-950/70">{desc}</p> : null}
    </div>
  );
}
