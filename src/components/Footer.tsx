import { Link } from "@tanstack/react-router";
import { Send, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="container-tight grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-foreground" />
            <span className="text-base font-semibold tracking-tight">MoonFlux Store</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Marketplace digital untuk panel Pterodactyl, jasa boost sosmed,
            web frontend, dan layanan digital lainnya.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigasi</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/produk" className="text-muted-foreground hover:text-foreground">Produk</Link></li>
            <li><Link to="/pembayaran" className="text-muted-foreground hover:text-foreground">Pembayaran</Link></li>
            <li><Link to="/profile" className="text-muted-foreground hover:text-foreground">Profile</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-foreground">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kontak</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="https://wa.me/6285185127539" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href="https://t.me/moonflxxyz" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Send className="h-4 w-4" /> Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MoonFlux Store
      </div>
    </footer>
  );
}
