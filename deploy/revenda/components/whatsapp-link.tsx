"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const CLINIC_WHATSAPP = "5519988303434";
export const RESELLER_WHATSAPP = "5511952616077";
const DEFAULT_MESSAGE =
  "Olá! Conheci a Slimcap pelo site e gostaria de receber orientação.";

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
  phone = CLINIC_WHATSAPP,
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
