"use client";

import { useMemo, useState } from "react";

import type { Product, ProductOption } from "@/content/products";
import { cn } from "@/lib/utils";

type InquiryType = "contact" | "custom" | "trade" | "product";

type Props = {
  type: InquiryType;
  page?: string;
  product?: Pick<Product, "slug" | "name" | "options">;
  className?: string;
  compact?: boolean;
};

function FieldLabel({ title, help }: { title: string; help?: string }) {
  return (
    <div className="mb-1">
      <div className="text-sm font-medium text-zinc-950">{title}</div>
      {help ? <div className="text-xs text-zinc-950/60">{help}</div> : null}
    </div>
  );
}

function OptionField({
  opt,
  value,
  onChange,
}: {
  opt: ProductOption;
  value: string;
  onChange: (v: string) => void;
}) {
  if (opt.kind === "select") {
    return (
      <div>
        <FieldLabel title={opt.name} help={opt.help} />
        <select
          className="w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select…</option>
          {opt.values.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div>
      <FieldLabel title={opt.name} help={opt.help} />
      <input
        className="w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
        value={value}
        placeholder={opt.placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export function InquiryForm({
  type,
  page,
  product,
  className,
  compact,
}: Props) {
  const optionKeys = useMemo(
    () => (product?.options || []).map((o) => ({ key: o.key, name: o.name, opt: o })),
    [product?.options],
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState(""); // honeypot

  const [selections, setSelections] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const payload = {
        type,
        name,
        email,
        phone,
        message,
        page,
        productSlug: product?.slug,
        productName: product?.name,
        selections,
        company,
      };

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => null);
        throw new Error(j?.error || "Request failed");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("rounded-xl border border-zinc-950/10 bg-white p-6", className)}>
        <div className="text-sm font-medium">Request received.</div>
        <p className="mt-2 text-sm text-zinc-950/70">
          We’ll follow up by email with the next steps and any clarifying questions.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-xl border border-zinc-950/10 bg-white p-6",
        compact ? "p-5" : "p-6",
        className,
      )}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-1">
          <FieldLabel title="Name" />
          <input
            className="w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="md:col-span-1">
          <FieldLabel title="Email" />
          <input
            className="w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />
        </div>

        <div className="md:col-span-2">
          <FieldLabel title="Phone (optional)" />
          <input
            className="w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            inputMode="tel"
          />
        </div>

        {/* Honeypot */}
        <div className="hidden">
          <FieldLabel title="Company" />
          <input
            className="w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {optionKeys.length ? (
          <div className="md:col-span-2">
            <div className="mb-2 text-sm font-medium">Configuration</div>
            <div className="grid gap-4 md:grid-cols-2">
              {optionKeys.map(({ key, name, opt }) => (
                <OptionField
                  key={key}
                  opt={opt}
                  value={selections[name] || ""}
                  onChange={(v) =>
                    setSelections((prev) => ({ ...prev, [name]: v }))
                  }
                />
              ))}
            </div>
          </div>
        ) : null}

        <div className="md:col-span-2">
          <FieldLabel title="Message" help="Include any notes about layout, spacing, mounting, or surface type." />
          <textarea
            className="min-h-[120px] w-full rounded-md border border-zinc-950/15 bg-white px-3 py-2 text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
      </div>

      {status === "error" ? (
        <div className="mt-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {errorMsg}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex items-center justify-center rounded-md border border-zinc-950/15 bg-zinc-950 px-4 py-2 text-sm font-medium text-stone-50 transition hover:bg-zinc-900 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>

      <p className="mt-3 text-xs text-zinc-950/50">
        This is a prototype inquiry form. We’ll respond by email.
      </p>
    </form>
  );
}
