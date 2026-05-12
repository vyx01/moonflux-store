import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Star, ChevronDown } from "lucide-react";
import { OrderModal } from "@/components/OrderModal";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "MoonFlux Store — Marketplace Digital" },
      { name: "description", content: "Panel Pterodactyl, jasa boost sosmed, web frontend, & layanan digital. Cepat, terpercaya, harga jujur." },
    ],
  }),
});

function Home() {
  const [orderOpen, setOrderOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <section className="container-tight pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Trusted sejak 2023
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            Marketplace digital, <span className="text-muted-foreground">simple & cepat.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground text-balance">
            Panel Pterodactyl, boost sosmed, jasa web, dan layanan digital lainnya — di satu tempat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <Link to="/produk" className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90">
              Lihat Produk <ArrowRight className="h-4 w-4" />
            </Link>
            <button onClick={() => setOrderOpen(true)} className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-secondary">
              Order Sekarang
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {[
            { v: "5.2K+", l: "Customer" },
            { v: "12K+", l: "Order" },
            { v: "120+", l: "Produk" },
            { v: "4.9", l: "Rating" },
          ].map((s) => (
            <div key={s.l} className="bg-card px-4 py-5 text-center">
              <div className="text-2xl font-semibold tracking-tight">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-tight py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Layanan kami</h2>
            <p className="mt-2 text-sm text-muted-foreground">Pilih kategori, kami siapkan sisanya.</p>
          </div>
          <Link to="/produk" className="hidden sm:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            Semua produk <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Panel Pterodactyl", d: "RAM 1GB hingga UNLIMITED.", p: "dari Rp2.000" },
            { t: "Boost Sosmed", d: "IG, TikTok, YouTube, Telegram.", p: "dari Rp1.000" },
            { t: "Web & Programming", d: "Landing, dashboard, API.", p: "dari Rp75.000" },
            { t: "Layanan Digital", d: "MC, rekber, promosi, dll.", p: "Custom" },
          ].map((c) => (
            <Link
              key={c.t}
              to="/produk"
              className="group rounded-2xl surface p-5 transition-colors hover:border-foreground/20"
            >
              <div className="text-sm font-medium">{c.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{c.p}</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="container-tight py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Kenapa MoonFlux?</h2>
        <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { t: "Proses cepat", d: "Sebagian instant, sisanya tepat waktu." },
            { t: "Garansi refill", d: "Layanan boost dijamin sampai target." },
            { t: "Support 24/7", d: "Admin standby di WhatsApp & Telegram." },
            { t: "Harga jujur", d: "Tanpa biaya tersembunyi." },
          ].map((f) => (
            <div key={f.t}>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <Check className="h-4 w-4" />
              </div>
              <div className="mt-3 text-sm font-medium">{f.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW */}
      <section className="container-tight py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Cara order</h2>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {[
            { n: "01", t: "Pilih produk", d: "Browse katalog & pilih layanan." },
            { n: "02", t: "Isi form order", d: "Klik Order, isi data, kirim ke admin." },
            { n: "03", t: "Bayar & terima", d: "Bayar via QRIS / e-wallet. Selesai." },
          ].map((s) => (
            <div key={s.n} className="bg-card p-6">
              <div className="text-xs font-medium text-muted-foreground">{s.n}</div>
              <div className="mt-2 text-base font-medium">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="container-tight py-16">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Customer kami</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { n: "Reza", t: "Panel UNLIMITED murah & stabil. Worth banget." },
            { n: "Dinda", t: "Boost IG fast, real followers. Recommended." },
            { n: "Arif", t: "Web landing page hasilnya rapi, harga friendly." },
          ].map((t) => (
            <div key={t.n} className="rounded-2xl surface p-5">
              <div className="flex gap-0.5 text-foreground">
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <p className="mt-3 text-sm">{t.t}</p>
              <div className="mt-4 text-xs text-muted-foreground">— {t.n}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-tight py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Pertanyaan umum</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {[
              { q: "Apakah pembayaran aman?", a: "Aman. QRIS, DANA, OVO, GoPay, SeaBank — konfirmasi via WhatsApp." },
              { q: "Berapa lama proses order?", a: "Sebagian instant. Web/programming 1–7 hari sesuai kompleksitas." },
              { q: "Apakah ada garansi?", a: "Ya, garansi refill 30 hari untuk layanan boost sosmed." },
              { q: "Bagaimana cara order?", a: "Pilih produk → klik Order → isi form → kirim ke admin." },
            ].map((f, i) => <FAQItem key={i} {...f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-tight py-16">
        <div className="rounded-3xl bg-foreground p-8 text-background sm:p-12">
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Siap mulai? Order sekarang, kami proses cepat.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a href="https://wa.me/6285185127539" target="_blank" rel="noopener" className="rounded-full bg-background px-5 py-2.5 text-sm font-medium text-foreground hover:opacity-90">
              WhatsApp
            </a>
            <a href="https://t.me/moonflxxyz" target="_blank" rel="noopener" className="rounded-full border border-background/20 px-5 py-2.5 text-sm font-medium hover:bg-background/10">
              Telegram
            </a>
          </div>
        </div>
      </section>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 py-4 text-left">
        <span className="text-sm font-medium">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-muted-foreground">{a}</p>}
    </div>
  );
}
