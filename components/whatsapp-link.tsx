"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const WHATSAPP_NUMBER = "5519988442477";
const DEFAULT_MESSAGE =
  "Olá! Conheci a Slimcapilar pelo site e gostaria de entender as condições comerciais para o meu negócio.";

type WhatsAppLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  message?: string;
  intent?: string;
  phone?: string;
};

export function WhatsAppLink({
  children,
  message = DEFAULT_MESSAGE,
  intent = "site",
  phone = WHATSAPP_NUMBER,
  onClick,
  ...props
}: WhatsAppLinkProps) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "clique_whatsapp", intent });
    onClick?.(event);
  }

  return (
    <a
      {...props}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
