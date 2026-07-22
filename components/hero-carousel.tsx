"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CirclePlay, MessageCircle, Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { CLINIC_WHATSAPP, WhatsAppLink } from "./whatsapp-link";

const slides = [
  {
    id: "produtos",
    index: "01",
    eyebrow: "Consultoria capilar personalizada",
    title: "Seu protocolo capilar,",
    accent: "montado para você.",
    text: "Encontre produtos e orientações pensados para o seu tipo de cabelo e os seus objetivos.",
    image: "/images/hero-protocolo-slimcap.png",
    alt: "Linha Slimcap com shampoo, loção, máscara e leave-in dispostos sobre pedestais de pedra",
    href: "#kits",
    cta: "Encontrar meu kit",
    secondaryHref: "#metodo",
    secondaryCta: "Ver método",
    type: "link" as const,
  },
  {
    id: "online",
    index: "02",
    eyebrow: "Consultoria personalizada online",
    title: "Um protocolo pensado para o seu couro cabeludo.",
    text: "Cris Guerra analisa seu caso e orienta a escolha do kit ideal com a experiência de uma tricologista.",
    image: "/images/hero-consultoria.webp",
    alt: "Especialista orientando uma cliente durante uma consultoria capilar",
    cta: "Agendar consultoria",
    type: "whatsapp" as const,
    phone: CLINIC_WHATSAPP,
  },
  {
    id: "presencial",
    index: "03",
    eyebrow: "Atendimento presencial em Piracicaba",
    title: "Tratamento capilar de alto nível, perto de você.",
    text: "Encontre Cris Guerra na Clínica Piellaser e descubra um protocolo alinhado às necessidades do seu cabelo.",
    image: "/images/tradicao-clinica.webp",
    alt: "Avaliação capilar realizada em uma clínica contemporânea",
    href: "https://piellaser.com.br/lpslimcap",
    cta: "Agendar na Piellaser",
    type: "link" as const,
  },
  {
    id: "profissionais",
    index: "04",
    eyebrow: "Slimcap para profissionais",
    title: "Leve o Método Slimcap para a sua clínica ou salão.",
    text: "Linha profissional, orientação técnica, materiais de apoio e condições comerciais para o seu negócio.",
    image: "/images/assessoria-tecnica.webp",
    alt: "Assessoria técnica para profissionais de saúde e beleza capilar",
    href: "/revenda",
    cta: "Conhecer a parceria",
    type: "link" as const,
  },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6800);
    return () => window.clearInterval(timer);
  }, [paused]);

  const previous = () => setActive((current) => (current - 1 + slides.length) % slides.length);
  const next = () => setActive((current) => (current + 1) % slides.length);

  return (
    <section id="inicio" className="brand-hero" aria-roledescription="carrossel" aria-label="Experiências Slimcap">
      {slides.map((slide, position) => (
        <article
          key={slide.id}
          className={`hero-slide hero-slide-${slide.id} ${position === active ? "is-active" : ""}`}
          aria-hidden={position !== active}
        >
          {/*
            DIREÇÃO VISUAL DOS BANNERS: fotografia editorial horizontal, sem textos incorporados à imagem,
            com materiais naturais, consultório contemporâneo e paleta marfim, nogueira, caramelo e bronze.
            Produtos e profissionais devem parecer reais, sem fundos verdes, claims clínicos ou estética de banco.
          */}
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={position === 0}
            sizes="100vw"
            className="hero-slide-image"
          />
          <div className="hero-slide-overlay" aria-hidden="true" />
          <div className="shell hero-slide-content">
            <p className="eyebrow hero-eyebrow">{slide.eyebrow}</p>
            <h1>{slide.title}{slide.accent ? <><br /><em>{slide.accent}</em></> : null}</h1>
            <p>{slide.text}</p>
            <div className="hero-actions">
              {slide.type === "whatsapp" ? (
                <WhatsAppLink
                  className="button button-primary"
                  intent="consultoria-online"
                  phone={slide.phone}
                  message="Olá! Vim pelo site da Slimcap e gostaria de agendar uma consultoria capilar online com a Cris Guerra."
                  tabIndex={position === active ? 0 : -1}
                >
                  <MessageCircle size={19} aria-hidden="true" /> {slide.cta}
                </WhatsAppLink>
              ) : slide.href?.startsWith("/") ? (
                <Link
                  className="button button-primary"
                  href={slide.href}
                  tabIndex={position === active ? 0 : -1}
                >
                  {slide.cta} <ArrowRight size={18} aria-hidden="true" />
                </Link>
              ) : (
                <a
                  className="button button-primary"
                  href={slide.href}
                  target={slide.href?.startsWith("http") ? "_blank" : undefined}
                  rel={slide.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                  tabIndex={position === active ? 0 : -1}
                >
                  {slide.cta} <ArrowRight size={18} aria-hidden="true" />
                </a>
              )}
              {slide.secondaryHref && slide.secondaryCta ? (
                <a className="hero-secondary-action" href={slide.secondaryHref} tabIndex={position === active ? 0 : -1}>
                  <CirclePlay size={19} aria-hidden="true" /> {slide.secondaryCta}
                </a>
              ) : null}
            </div>
          </div>
        </article>
      ))}

      <div className="shell hero-controls">
        <div className="hero-dots" aria-label="Selecionar banner">
          {slides.map((slide, position) => (
            <button
              key={slide.id}
              type="button"
              className={position === active ? "is-active" : ""}
              onClick={() => setActive(position)}
              aria-label={`Exibir banner ${position + 1}: ${slide.eyebrow}`}
              aria-current={position === active ? "true" : undefined}
            >
              <span>{slide.index}</span>
            </button>
          ))}
        </div>
        <div className="hero-arrows">
          <button type="button" onClick={previous} aria-label="Banner anterior">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Reproduzir banners" : "Pausar banners"}>
            {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
          <button type="button" onClick={next} aria-label="Próximo banner">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
