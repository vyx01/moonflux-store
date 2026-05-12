import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { products, categories, type Product } from "@/lib/products";
import { OrderModal } from "@/components/OrderModal";

export const Route = createFileRoute("/produk")({
  component: ProdukPage,
  head: () => ({
    meta: [
      { title: "Produk — MoonFlux Store" },
      { name: "description", content: "Katalog: panel Pterodactyl, jasa boost sosmed, web frontend, layanan digital." },
    ],
  }),
});

function ProdukPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [sort, setSort] = useState<"default" | "asc" | "desc">("default");
  const [detail, setDetail] = useState<Product | null>(null);
  const [orderInit, setOrderInit] = useState<{ product?: string; price?: string } | null>(null);

  const list = useMemo(() => {
    let arr = products.filter((p) =>
      (cat === "all" || p.category === cat) &&
      p.name.toLowerCase().includes(q.toLowerCase())
    );
    const num = (s: string) => Number(s.replace(/[^\d]/g, "")) || 0;
    if (sort === "asc") arr = [...arr].sort((a, b) => num(a.price) - num(b.price));
    if (sort === "desc") arr = [...arr].sort((a, b) => num(b.price) - num(a.price));
    return arr;
  }, [q, cat, sort]);

  return (
    <div className="container-tight py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Produk</h1>
        <p className="mt-2 text-sm text-muted-foreground">Pilih layanan digital yang kamu butuh.</p>
      </div>

      {/* Toolbar */}
      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Cari produk..."
            className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as typeof sort)}
          className="rounded-full border border-border bg-card px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="default">Default</option>
          <option value="asc">Harga ↑</option>
          <option value="desc">Harga ↓</option>
        </select>
      </div>

      {/* Categories */}
      <div className="mt-4 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.value}
            onClick={() => setCat(c.value)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              cat === c.value
                ? "bg-foreground text-background"
                : "border border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <article key={p.id} className="group flex flex-col rounded-2xl surface p-5 transition-colors hover:border-foreground/20">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-medium leading-snug">{p.name}</h3>
              {p.badge && (
                <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {p.badge}
                </span>
              )}
            </div>
            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-5 flex items-end justify-between">
              <span className="text-lg font-semibold tracking-tight">{p.price}</span>
              <div className="flex gap-1.5">
                <button onClick={() => setDetail(p)} className="rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-secondary">
                  Detail
                </button>
                <button
                  onClick={() => setOrderInit({ product: p.name, price: p.price })}
                  className="rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-background hover:opacity-90"
                >
                  Order
                </button>
              </div>
            </div>
          </article>
        ))}
        {list.length === 0 && (
          <div className="col-span-full py-20 text-center text-sm text-muted-foreground">
            Produk tidak ditemukan.
          </div>
        )}
      </div>

      {/* Detail modal */}
      {detail && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-4" onClick={() => setDetail(null)}>
          <div className="relative w-full max-w-md rounded-2xl surface p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setDetail(null)} className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
            <h3 className="pr-8 text-lg font-semibold">{detail.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{detail.desc}</p>
            <div className="mt-4 text-2xl font-semibold tracking-tight">{detail.price}</div>
            {detail.spec && (
              <ul className="mt-4 space-y-2 text-sm">
                {detail.spec.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-foreground" /> {s}
                  </li>
                ))}
              </ul>
            )}
            <button
              onClick={() => { setOrderInit({ product: detail.name, price: detail.price }); setDetail(null); }}
              className="mt-6 w-full rounded-full bg-foreground py-2.5 text-sm font-medium text-background hover:opacity-90"
            >
              Order sekarang
            </button>
          </div>
        </div>
      )}

      <OrderModal open={!!orderInit} onClose={() => setOrderInit(null)} init={orderInit ?? undefined} />
    </div>
  );
}
