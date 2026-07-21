"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { WhatsAppLink } from "./whatsapp-link";

const navItems = [
  { href: "#kits", label: "Encontre seu kit" },
  { href: "#metodo", label: "Método Slimcap" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "/revenda", label: "Profissionais" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#inicio" className="brand-link" aria-label="Slimcapilar - início">
          <Image
            src="/brand/logo-slimcapilar.webp"
            alt="Slimcapilar"
            width={255}
            height={83}
            loading="eager"
          />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => item.href.startsWith("/") ? (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ) : (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>

        <WhatsAppLink
          className="header-cta"
          intent="header-kit"
          phone="5511952616077"
          message="Olá, Vani! Vim pelo site da Slimcap e gostaria de ajuda para descobrir meu kit ideal."
        >
          <Sparkles size={17} aria-hidden="true" />
          Descobrir meu kit
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
          {navItems.map((item) => item.href.startsWith("/") ? (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ) : (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>
          ))}
          <WhatsAppLink
            className="mobile-menu-cta"
            intent="menu-mobile"
            phone="5511952616077"
            message="Olá, Vani! Vim pelo site da Slimcap e gostaria de ajuda para descobrir meu kit ideal."
          >
            Conversar no WhatsApp
          </WhatsAppLink>
        </nav>
      </div>
    </header>
  );
}
