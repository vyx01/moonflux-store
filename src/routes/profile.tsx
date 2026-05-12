import { createFileRoute } from "@tanstack/react-router";
import { Send, MessageCircle, Code2 } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
  head: () => ({
    meta: [
      { title: "Profile — MoonFlux Store" },
      { name: "description", content: "Profile owner & programmer MoonFlux Store." },
    ],
  }),
});

const stack = ["React", "Next.js", "TanStack", "Tailwind", "Node.js", "TypeScript", "Supabase", "Pterodactyl"];

function ProfilePage() {
  return (
    <div className="container-tight py-12 sm:py-16">
      <div className="grid gap-10 md:grid-cols-[260px,1fr]">
        <div>
          <div className="rounded-2xl surface p-6 text-center">
            <div className="mx-auto h-24 w-24 rounded-full bg-foreground" />
            <h2 className="mt-4 text-base font-semibold">MoonFlux Owner</h2>
            <p className="mt-1 text-xs text-muted-foreground">Owner & Developer</p>
            <div className="mt-5 flex justify-center gap-2">
              <a href="https://wa.me/6285185127539" className="rounded-full border border-border p-2 hover:bg-secondary" aria-label="WhatsApp"><MessageCircle className="h-4 w-4" /></a>
              <a href="https://t.me/moonflxxyz" className="rounded-full border border-border p-2 hover:bg-secondary" aria-label="Telegram"><Send className="h-4 w-4" /></a>
              <a href="#" className="rounded-full border border-border p-2 hover:bg-secondary" aria-label="GitHub"><Code2 className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Halo, saya MoonFlux.</h1>
            <p className="mt-4 text-base text-muted-foreground text-balance">
              Programmer & founder MoonFlux Store. 3+ tahun membangun website,
              menyediakan layanan panel Pterodactyl, dan menggarap berbagai project digital.
              Fokus pada hasil rapi, cepat, dan trusted.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tech stack</h3>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Skill</h3>
            <ul className="mt-3 grid gap-1.5 text-sm text-muted-foreground sm:grid-cols-2">
              <li>— Frontend modern (React, Next, TanStack)</li>
              <li>— UI/UX premium & responsive</li>
              <li>— API integration & dashboard admin</li>
              <li>— Pterodactyl panel management</li>
              <li>— Bot WhatsApp & automation</li>
              <li>— Deployment & optimization</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pencapaian</h3>
            <div className="mt-3 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {[
                { v: "120+", l: "Project" },
                { v: "5K+", l: "Customer" },
                { v: "3+", l: "Tahun" },
                { v: "4.9", l: "Rating" },
              ].map((a) => (
                <div key={a.l} className="bg-card p-4 text-center">
                  <div className="text-xl font-semibold tracking-tight">{a.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{a.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
