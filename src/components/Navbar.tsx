import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/produk", label: "Produk" },
  { to: "/pembayaran", label: "Pembayaran" },
  { to: "/profile", label: "Profile" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontak", label: "Kontak" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container-tight flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-foreground" />
          <span className="text-base font-semibold tracking-tight">MoonFlux</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "rounded-full px-3.5 py-1.5 text-sm text-foreground bg-secondary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/6285185127539"
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Hubungi Admin
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-md p-2"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-5 py-3">
          <ul className="flex flex-col gap-0.5">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/6285185127539"
                target="_blank"
                rel="noopener"
                className="mt-2 block rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
              >
                Hubungi Admin
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
