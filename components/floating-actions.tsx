"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { WhatsAppLink } from "./whatsapp-link";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 620);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <WhatsAppLink
        className="floating-whatsapp"
        intent="flutuante"
        aria-label="Falar com a Slimcapilar pelo WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
        <span>Fale com um especialista</span>
      </WhatsAppLink>

      <button
        type="button"
        className={`back-to-top ${showTop ? "is-visible" : ""}`}
        aria-label="Voltar ao topo"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp aria-hidden="true" />
      </button>
    </>
  );
}
