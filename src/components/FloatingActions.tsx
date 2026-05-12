import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 w-11 items-center justify-center rounded-full surface shadow-sm transition-transform hover:scale-105"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
      <a
        href="https://wa.me/6285185127539"
        target="_blank"
        rel="noopener"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background shadow-md transition-transform hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-4 w-4" />
      </a>
    </div>
  );
}
