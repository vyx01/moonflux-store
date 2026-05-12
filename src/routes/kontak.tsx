import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Send, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/kontak")({
  component: KontakPage,
  head: () => ({
    meta: [
      { title: "Kontak — MoonFlux Store" },
      { name: "description", content: "Hubungi MoonFlux Store via WhatsApp atau Telegram." },
    ],
  }),
});

function KontakPage() {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const send = () => {
    if (!name || !msg) { toast.error("Lengkapi nama & pesan"); return; }
    const url = `https://wa.me/6285185127539?text=${encodeURIComponent(`Halo MoonFlux, saya ${name}.\n\n${msg}`)}`;
    window.open(url, "_blank");
    toast.success("Mengarahkan ke WhatsApp...");
  };

  return (
    <div className="container-tight py-12 sm:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Hubungi kami</h1>
        <p className="mt-2 text-sm text-muted-foreground">Standby 24/7. Respon cepat di WhatsApp & Telegram.</p>
      </div>

      <div className="mt-10 grid gap-3 md:grid-cols-2">
        <a href="https://wa.me/6285185127539" target="_blank" rel="noopener" className="group flex items-center justify-between rounded-2xl surface p-5 hover:border-foreground/20">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium">WhatsApp</div>
              <div className="text-xs text-muted-foreground">+62 851-8512-7539</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </a>
        <a href="https://t.me/moonflxxyz" target="_blank" rel="noopener" className="group flex items-center justify-between rounded-2xl surface p-5 hover:border-foreground/20">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <Send className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-medium">Telegram</div>
              <div className="text-xs text-muted-foreground">@moonflxxyz</div>
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="mt-6 rounded-2xl surface p-6">
        <h3 className="text-base font-medium">Kirim pesan cepat</h3>
        <p className="mt-1 text-sm text-muted-foreground">Pesan diteruskan ke WhatsApp admin.</p>
        <div className="mt-5 grid gap-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama"
            className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <textarea
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={4}
            placeholder="Tulis pesan kamu..."
            className="rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button onClick={send} className="rounded-full bg-foreground py-2.5 text-sm font-medium text-background hover:opacity-90">
            Kirim
          </button>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <Clock className="h-3.5 w-3.5" /> Online 24/7 • Respon &lt; 5 menit
      </div>
    </div>
  );
}
