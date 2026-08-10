"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { CLINIC_WHATSAPP, WhatsAppLink } from "./whatsapp-link";

const navItems = [
  { href: "/#metodo", label: "Método Slimcap" },
  { href: "/#atendimento", label: "Atendimento" },
  { href: "/blog", label: "Blog" },
  { href: "https://loja.slimcap.com.br", label: "Loja online", external: true },
  { href: "/#duvidas", label: "Dúvidas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand-link" aria-label="Slimcapilar - início">
          <Image
            src="/brand/logo-slimcapilar.webp"
            alt="Slimcapilar"
            width={255}
            height={83}
            loading="eager"
          />
        </Link>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
          ) : item.href.startsWith("/") ? (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ) : (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <WhatsAppLink
          className="header-cta"
          intent="header-kit"
          phone={CLINIC_WHATSAPP}
          message="Olá, Vani! Vim pelo site da Slimcap e gostaria de ajuda para descobrir meu kit ideal."
        >
          <Sparkles size={17} aria-hidden="true" />
          Descobrir seu kit
        </WhatsAppLink>

        <button
          type="button"
          className="menu-button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <nav aria-label="Navegação móvel">
          {navItems.map((item) => item.external ? (
            <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>{item.label}</a>
          ) : item.href.startsWith("/") ? (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ) : (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <WhatsAppLink
            className="mobile-menu-cta"
            intent="menu-mobile"
            phone={CLINIC_WHATSAPP}
            message="Olá, Vani! Vim pelo site da Slimcap e gostaria de ajuda para descobrir meu kit ideal."
          >
            Conversar no WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
