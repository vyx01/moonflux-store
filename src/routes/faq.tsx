import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
  head: () => ({
    meta: [
      { title: "FAQ — MoonFlux Store" },
      { name: "description", content: "Pertanyaan umum seputar order, pembayaran, dan layanan." },
    ],
  }),
});

const faqs = [
  { q: "Bagaimana cara order?", a: "Pilih produk → klik Order → isi form → kirim ke admin via WhatsApp/Telegram." },
  { q: "Metode pembayaran apa saja?", a: "DANA, OVO, GoPay, SeaBank, dan QRIS. Detail di halaman Pembayaran." },
  { q: "Apakah ada garansi?", a: "Ya, garansi refill 30 hari untuk layanan boost (sesuai ketentuan)." },
  { q: "Berapa lama proses panel Pterodactyl?", a: "Setelah pembayaran, panel siap dalam 5-30 menit." },
  { q: "Apakah followers/likes-nya real?", a: "Tersedia opsi real & high quality, pilih saat order." },
  { q: "Bagaimana jika layanan tidak masuk?", a: "Hubungi admin untuk refund/refill sesuai kebijakan." },
  { q: "Panel UNLIMITED beneran tanpa batas?", a: "Untuk paket UNLIMITED, RAM & CPU diset unlimited dengan fair use policy." },
  { q: "Aman bertransaksi?", a: "Aman. 5K+ customer puas, ratusan testimoni." },
];

function FAQPage() {
  return (
    <div className="container-tight py-12 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pertanyaan umum</h1>
        <p className="mt-2 text-sm text-muted-foreground">Jawaban cepat untuk hal yang sering ditanyakan.</p>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => <Item key={i} {...f} />)}
        </div>
      </div>
    </div>
  );
}

function Item({ q, a }: { q: string; a: string }) {
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
