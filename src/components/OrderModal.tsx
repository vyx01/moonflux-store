import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "sonner";

export type OrderInit = { product?: string; price?: string };

export function OrderModal({ open, onClose, init }: { open: boolean; onClose: () => void; init?: OrderInit }) {
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("1");
  const [note, setNote] = useState("");

  useEffect(() => {
    if (init?.product) setProduct(init.product);
  }, [init]);

  if (!open) return null;

  const submit = (channel: "wa" | "tg") => {
    if (!name || !product) {
      toast.error("Nama dan produk wajib diisi");
      return;
    }
    const msg = `Halo admin MoonFlux Store, saya ingin order:\n\nNama: ${name}\nProduk: ${product}${init?.price ? ` (${init.price})` : ""}\nJumlah: ${qty}\nCatatan: ${note || "-"}`;
    const encoded = encodeURIComponent(msg);
    const url = channel === "wa"
      ? `https://wa.me/6285185127539?text=${encoded}`
      : `https://t.me/moonflxxyz?text=${encoded}`;
    window.open(url, "_blank");
    toast.success("Mengarahkan ke admin...");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-md rounded-2xl surface p-6 shadow-xl animate-in zoom-in-95">
        <button onClick={onClose} className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground hover:text-foreground" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
        <h3 className="text-lg font-semibold">Form Order</h3>
        <p className="mt-1 text-sm text-muted-foreground">Isi data, kami arahkan ke admin.</p>

        <div className="mt-5 space-y-3">
          <Field label="Nama" value={name} onChange={setName} placeholder="Nama kamu" />
          <Field label="Produk" value={product} onChange={setProduct} placeholder="Produk yang dipesan" />
          <Field label="Jumlah" value={qty} onChange={setQty} type="number" />
          <div>
            <label className="text-xs font-medium text-muted-foreground">Catatan</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Detail tambahan (opsional)"
            />
          </div>
        </div>

        <div className="mt-5 flex gap-2">
          <button
            onClick={() => submit("wa")}
            className="flex-1 rounded-full bg-foreground py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Kirim via WhatsApp
          </button>
          <button
            onClick={() => submit("tg")}
            className="rounded-full border border-border px-4 py-2.5 text-sm font-medium hover:bg-secondary"
          >
            Telegram
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text", placeholder }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
