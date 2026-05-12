import { createFileRoute } from "@tanstack/react-router";
import { Copy, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/pembayaran")({
  component: PembayaranPage,
  head: () => ({
    meta: [
      { title: "Pembayaran — MoonFlux Store" },
      { name: "description", content: "DANA, OVO, GoPay, SeaBank, QRIS. Konfirmasi via WhatsApp." },
    ],
  }),
});

const methods = [
  { name: "DANA", num: "085185127539" },
  { name: "OVO", num: "085185127539" },
  { name: "GoPay", num: "085185127539" },
  { name: "SeaBank", num: "901258599297" },
];

function PembayaranPage() {
  const copy = (v: string) => {
    navigator.clipboard.writeText(v);
    toast.success(`Disalin: ${v}`);
  };

  return (
    <div className="container-tight py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Pembayaran</h1>
        <p className="mt-2 text-sm text-muted-foreground">Pilih metode favoritmu — semua aman & cepat.</p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2">
        {methods.map((m) => (
          <div key={m.name} className="rounded-2xl surface p-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium">{m.name}</div>
              <span className="text-xs text-muted-foreground">a.n MoonFlux</span>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-subtle px-4 py-3">
              <div>
                <div className="text-xs text-muted-foreground">Nomor</div>
                <div className="font-mono text-base tracking-wider">{m.num}</div>
              </div>
              <button
                onClick={() => copy(m.num)}
                className="rounded-full border border-border bg-card p-2 hover:bg-secondary"
                aria-label="Copy"
              >
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* QRIS */}
      <div className="mt-6 rounded-2xl surface p-6 text-center">
        <h3 className="text-base font-medium">QRIS — Scan & bayar</h3>
        <p className="mt-1 text-sm text-muted-foreground">Scan dengan e-wallet / m-banking.</p>
        <div className="mx-auto mt-5 grid h-52 w-52 place-items-center rounded-2xl border border-dashed border-border bg-subtle">
          <div className="text-center">
            <div className="text-xs text-muted-foreground">[ QRIS Image ]</div>
            <div className="mt-1 text-xs text-muted-foreground">Hubungi admin</div>
          </div>
        </div>
      </div>

      {/* Tutorial */}
      <div className="mt-6 rounded-2xl surface p-6">
        <h3 className="text-base font-medium">Cara bayar</h3>
        <ol className="mt-4 space-y-3 text-sm">
          {[
            "Pilih produk & klik Order, isi form.",
            "Admin kirim total harga & detail rekening.",
            "Transfer sesuai nominal.",
            "Kirim bukti transfer ke WhatsApp admin.",
            "Pesanan diproses sesuai estimasi.",
          ].map((s, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-[10px] font-medium text-background">{i + 1}</span>
              <span className="text-muted-foreground">{s}</span>
            </li>
          ))}
        </ol>
        <a
          href="https://wa.me/6285185127539?text=Halo%20admin%2C%20saya%20mau%20konfirmasi%20pembayaran"
          target="_blank"
          rel="noopener"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-90"
        >
          <MessageCircle className="h-4 w-4" /> Konfirmasi pembayaran
        </a>
      </div>
    </div>
  );
}
