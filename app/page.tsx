import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Boxes,
  CalendarCheck,
  Check,
  ChevronDown,
  HeartHandshake,
  MessageCircle,
  Microscope,
  PackageCheck,
  ScanSearch,
  Sparkles,
  Stethoscope,
  Store,
  Video,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { HeroCarousel } from "@/components/hero-carousel";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppLink } from "@/components/whatsapp-link";

const kits = [
  {
    concern: "Eflúvio telógeno",
    title: "Queda após parto, emagrecimento ou dengue",
    formula: "Esfoliante · Shampoo revitalizante · Loção tônica",
    products: [
      "/produtos/gerados/esfoliante.png",
      "/produtos/gerados/shampoo-revitalizante.png",
      "/produtos/gerados/locao-tonica.png",
    ],
    accent: "terracotta",
  },
  {
    concern: "Protocolo de 3 meses",
    title: "Queda, calvície e alopecias",
    formula: "Esfoliante · Shampoo revitalizante · Loção tônica",
    products: [
      "/produtos/gerados/esfoliante.png",
      "/produtos/gerados/shampoo-revitalizante.png",
      "/produtos/gerados/locao-tonica.png",
    ],
    accent: "bronze",
  },
  {
    concern: "Equilíbrio do couro cabeludo",
    title: "Caspa, dermatite seborreica e coceira",
    formula: "Loção A · Shampoo anticaspa · Loção calmante",
    products: [
      "/produtos/gerados/shampoo-anticaspa.png",
      "/produtos/gerados/locao-tonica.png",
    ],
    accent: "amber",
  },
  {
    concern: "Hidratação e maciez",
    title: "Kit nutrição completa",
    formula: "Shampoo · Máscara · Condicionador · Leave-in",
    products: [
      "/produtos/gerados/shampoo-revitalizante.png",
      "/produtos/gerados/mascara-capilar.png",
      "/produtos/gerados/condicionador.png",
      "/produtos/gerados/leave-in.png",
    ],
    accent: "rose",
  },
  {
    concern: "Protocolo de 3 meses",
    title: "Crescimento saudável e reparação",
    formula: "Tratamento completo do couro cabeludo aos fios",
    products: [
      "/produtos/gerados/esfoliante.png",
      "/produtos/gerados/shampoo-revitalizante.png",
      "/produtos/gerados/condicionador.png",
      "/produtos/gerados/locao-tonica.png",
    ],
    accent: "cocoa",
  },
  {
    concern: "Cuidado delicado",
    title: "Cabelos infantis",
    formula: "Esfoliante · Shampoo hidratante",
    products: [
      "/produtos/gerados/esfoliante.png",
      "/produtos/gerados/shampoo-revitalizante.png",
    ],
    accent: "sand",
  },
  {
    concern: "Reparação dos fios",
    title: "Nutrição intensiva",
    formula: "Máscara nutrirreparadora · Leave-in",
    products: [
      "/produtos/gerados/mascara-capilar.png",
      "/produtos/gerados/leave-in.png",
    ],
    accent: "clay",
  },
  {
    concern: "Limpeza profunda",
    title: "Kit detox",
    formula: "Loção A · Shampoo revitalizante",
    products: [
      "/produtos/gerados/esfoliante.png",
      "/produtos/gerados/shampoo-revitalizante.png",
      "/produtos/gerados/locao-tonica.png",
    ],
    accent: "gold",
  },
];

const methodSteps = [
  { icon: ScanSearch, number: "01", title: "Identificar", text: "Entender a origem e o momento do problema capilar." },
  { icon: Microscope, number: "02", title: "Personalizar", text: "Selecionar o protocolo coerente com cada necessidade." },
  { icon: CalendarCheck, number: "03", title: "Acompanhar", text: "Orientar uso, consistência e evolução ao longo da rotina." },
];

const faq = [
  {
    question: "Como descubro qual kit é o mais indicado?",
    answer: "Você pode começar pelo problema que mais se aproxima do seu momento ou falar com nossa equipe. Quando há dúvida, histórico complexo ou queda persistente, recomendamos uma consultoria personalizada antes da escolha.",
  },
  {
    question: "A consultoria pode ser feita totalmente online?",
    answer: "Sim. Na consultoria online, Cris Guerra avalia as informações do seu caso e orienta o protocolo de cuidado mais adequado, incluindo kit e rotina de uso quando aplicável.",
  },
  {
    question: "Onde acontece o atendimento presencial?",
    answer: "O atendimento presencial com Cris Guerra acontece em Piracicaba, dentro da Clínica Piellaser, mediante agendamento.",
  },
  {
    question: "Os produtos são regularizados pela ANVISA?",
    answer: "A linha segue a regularização sanitária aplicável a cada categoria de produto. Informações específicas podem ser confirmadas na embalagem ou diretamente com a equipe Slimcap.",
  },
  {
    question: "Quanto tempo dura um protocolo?",
    answer: "A duração varia conforme a necessidade. Alguns kits foram organizados para ciclos de três meses; a recomendação de uso acompanha cada protocolo.",
  },
  {
    question: "Clínicas e salões podem revender Slimcap?",
    answer: "Sim. A Slimcap atende profissionais, clínicas, salões, farmácias e distribuidores com orientação de mix, materiais de apoio e condições comerciais próprias.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroCarousel />

        <section className="manifesto-strip" aria-label="Princípio do Método Slimcap">
          <div className="shell">
            <span>40 anos de escuta, pesquisa e cuidado</span>
            <p>“Identificar a raiz do problema é o primeiro passo para escolher o kit correto.”</p>
          </div>
        </section>

        <section id="kits" className="kits-section section-pad" aria-labelledby="kits-title">
          <div className="shell">
            <Reveal className="section-heading kits-heading">
              <div>
                <p className="eyebrow">Encontre seu protocolo</p>
                <h2 id="kits-title">O cuidado certo começa por aquilo que você sente.</h2>
              </div>
              <div className="heading-side">
                <p>Identifique sua principal necessidade e conheça uma composição pensada para esse momento.</p>
                <WhatsAppLink
                  className="text-link"
                  phone="5511952616077"
                  intent="ajuda-kit-vani"
                  message="Olá, Vani! Vim pelo site da Slimcap e gostaria de ajuda para descobrir qual kit combina com a minha necessidade."
                >
                  Ainda estou em dúvida <ArrowRight size={17} aria-hidden="true" />
                </WhatsAppLink>
              </div>
            </Reveal>

            <div className="kits-grid">
              {kits.map((kit, index) => (
                <Reveal key={kit.title} className={`kit-item kit-${kit.accent}`}>
                  <div className="kit-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className={`kit-product kit-product-${kit.products.length}`} aria-label={`Produtos do ${kit.title}`}>
                    {kit.products.map((product, productIndex) => (
                      <Image key={`${kit.title}-${productIndex}`} src={product} alt="" width={192} height={192} sizes="(max-width: 640px) 80px, 100px" />
                    ))}
                  </div>
                  <div className="kit-copy">
                    <span>{kit.concern}</span>
                    <h3>{kit.title}</h3>
                    <p>{kit.formula}</p>
                    <a href="https://loja.slimcap.com.br" target="_blank" rel="noopener noreferrer" aria-label={`Conhecer ${kit.title}`}>
                      Conhecer kit <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="new-phase-section" aria-labelledby="phase-title">
          <div className="shell new-phase-grid">
            <Reveal className="new-phase-media">
              <Image
                src="/images/cris-e-vani.webp"
                alt="Cris Guerra e Vani, duas gerações do Método Slimcap"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className="media-seal media-seal-duo" aria-hidden="true">
                <strong>Cris &amp; Vani</strong><span>Duas gerações do método</span>
              </div>
            </Reveal>
            <Reveal className="new-phase-copy">
              <p className="eyebrow">A nova fase Slimcap</p>
              <h2 id="phase-title">O Método Slimcap evoluiu. O cuidado continua próximo.</h2>
              <p>
                Há mais de uma década, Cris Guerra e sua mãe, Vani, construíram juntas uma referência em tricologia
                no interior de São Paulo. As unidades físicas cumpriram um papel importante. Agora, o método chega
                a mais pessoas por produtos, orientação online e atendimento presencial em Piracicaba.
              </p>
              <p>
                Cris segue atendendo dentro da Clínica Piellaser, com a estrutura que um acompanhamento especializado
                exige. Para quem prefere a praticidade de casa, a linha Slimcap leva a lógica do método para a rotina.
              </p>
              <div className="phase-actions">
                <a className="button button-dark" href="https://piellaser.com.br/lpslimcap" target="_blank" rel="noopener noreferrer">
                  <Stethoscope size={18} aria-hidden="true" /> Atendimento presencial
                </a>
                <WhatsAppLink
                  className="text-link"
                  phone="5519988303434"
                  intent="nova-fase-online"
                  message="Olá! Gostaria de saber mais sobre a consultoria capilar online com a Cris Guerra."
                >
                  Prefiro atendimento online <Video size={17} aria-hidden="true" />
                </WhatsAppLink>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="atendimento" className="method-section section-pad" aria-labelledby="method-title">
          <div className="shell">
            <Reveal className="method-intro">
              <p className="eyebrow eyebrow-light">Resultados começam com método</p>
              <h2 id="method-title">Não existe tratamento genérico.</h2>
              <p>
                Um protocolo responsável respeita a história, o couro cabeludo e a rotina de cada pessoa. É essa
                sequência que orienta a experiência Slimcap.
              </p>
            </Reveal>
            <div className="method-steps">
              {methodSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Reveal key={step.number} className="method-step">
                    <span>{step.number}</span>
                    <Icon aria-hidden="true" />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </Reveal>
                );
              })}
            </div>
            <div className="method-trust">
              <span><BadgeCheck aria-hidden="true" /> Experiência construída ao longo de 40 anos</span>
              <span><PackageCheck aria-hidden="true" /> Protocolos organizados por necessidade</span>
              <span><HeartHandshake aria-hidden="true" /> Orientação humana antes e durante o cuidado</span>
            </div>
          </div>
        </section>

        <section className="vani-section" aria-labelledby="vani-title">
          <div className="shell vani-grid">
            <Reveal className="vani-portrait">
              <Image
                src="/images/vani-aceno.webp"
                alt="Vani sorrindo e cumprimentando quem visita o espaço Slimcap"
                fill
                sizes="(max-width: 640px) 90vw, 340px"
              />
              <small>Dicas da Vani</small>
            </Reveal>
            <Reveal className="vani-quote">
              <p className="eyebrow">Cuidado que atravessa gerações</p>
              <blockquote id="vani-title">
                “Minha filha Cris e eu criamos esse método com muito amor e pesquisa. Se você é de Jundiaí ou de
                qualquer lugar, pode me perguntar sem cerimônia. Eu te ajudo a escolher o que é certo para o seu cabelo.”
              </blockquote>
              <div className="vani-actions">
                <WhatsAppLink
                  className="button button-primary"
                  phone="5511952616077"
                  intent="dicas-vani"
                  message="Olá, Vani! Vim pelo site da Slimcap e gostaria de ajuda para escolher meu kit."
                >
                  <MessageCircle size={19} aria-hidden="true" /> Falar com a Vani
                </WhatsAppLink>
                <a className="text-link" href="#kits">Descobrir meu kit ideal <ArrowRight size={17} aria-hidden="true" /></a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="profissionais" className="professional-section section-pad" aria-labelledby="professional-title">
          <div className="shell professional-grid">
            <Reveal className="professional-copy">
              <p className="eyebrow eyebrow-light">Slimcap para profissionais</p>
              <h2 id="professional-title">Uma linha pronta para fortalecer o seu atendimento.</h2>
              <p>
                Clínicas, salões, farmácias, revendedores e distribuidores recebem mais do que produtos: orientação
                de mix, materiais de apoio e direção comercial para construir recorrência com responsabilidade.
              </p>
              <div className="professional-benefits">
                <span><Check aria-hidden="true" /> Seleção de mix por canal</span>
                <span><Check aria-hidden="true" /> Materiais e treinamento</span>
                <span><Check aria-hidden="true" /> Apoio técnico e comercial</span>
                <span><Check aria-hidden="true" /> Estratégia de reposição</span>
              </div>
              <Link className="button button-gold" href="/revenda">
                <Store size={19} aria-hidden="true" /> Conhecer programa de revenda
              </Link>
            </Reveal>
            <Reveal className="professional-media">
              <Image
                src="/images/assessoria-tecnica.webp"
                alt="Seleção técnica de materiais durante uma assessoria Slimcap"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
              />
              <div className="professional-note">
                <strong>3º</strong>
                <span>maior mercado consumidor de beleza e cuidados pessoais</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="duvidas" className="faq-section section-pad" aria-labelledby="faq-title">
          <div className="shell faq-grid">
            <Reveal className="faq-intro">
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 id="faq-title">Clareza também faz parte do cuidado.</h2>
              <p>Reunimos as respostas essenciais para você escolher seu próximo passo com mais segurança.</p>
              <WhatsAppLink className="text-link" intent="faq">
                Falar com a equipe <MessageCircle size={17} aria-hidden="true" />
              </WhatsAppLink>
            </Reveal>
            <div className="faq-list">
              {faq.map((item) => (
                <Reveal key={item.question}>
                  <details>
                    <summary>
                      {item.question}<ChevronDown aria-hidden="true" />
                    </summary>
                    <p>{item.answer}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="journal-section section-pad" aria-labelledby="journal-title">
          <div className="shell">
            <Reveal className="journal-heading">
              <div>
                <p className="eyebrow">Conteúdo Slimcap</p>
                <h2 id="journal-title">Terapia capilar integrativa em casa.</h2>
              </div>
              <p>Conhecimento sobre tricologia, queda capilar, protocolos home care e os cuidados do Método Slimcap.</p>
            </Reveal>
            <div className="journal-grid">
              <Reveal className="journal-feature">
                <Image src="/images/tradicao-clinica.webp" alt="Avaliação profissional do couro cabeludo" fill sizes="(max-width: 900px) 100vw, 50vw" />
                <div><span>Guia de cuidado</span><h3>Queda capilar: quando observar e quando buscar orientação.</h3></div>
              </Reveal>
              <div className="journal-list">
                <Reveal className="journal-item"><BookOpen aria-hidden="true" /><div><span>Rotina em casa</span><h3>Como manter a constância de um protocolo capilar.</h3></div></Reveal>
                <Reveal className="journal-item"><Sparkles aria-hidden="true" /><div><span>Couro cabeludo</span><h3>Caspa, oleosidade e sensibilidade não são a mesma coisa.</h3></div></Reveal>
                <Reveal className="journal-item"><Boxes aria-hidden="true" /><div><span>Escolha consciente</span><h3>O que considerar antes de montar seu kit de cuidados.</h3></div></Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="conversion-section" aria-labelledby="conversion-title">
          <div className="shell conversion-inner">
            <div>
              <p className="eyebrow eyebrow-light">Seu próximo passo pode ser simples</p>
              <h2 id="conversion-title">Comece pelo cuidado que faz sentido para você.</h2>
            </div>
            <div className="conversion-action">
              <p>Escolha um kit ou converse com a equipe para receber orientação antes de decidir.</p>
              <div className="conversion-buttons">
                <a className="button button-gold" href="https://loja.slimcap.com.br" target="_blank" rel="noopener noreferrer">
                  Escolher meu kit <ArrowRight size={19} aria-hidden="true" />
                </a>
                <WhatsAppLink className="button button-outline-light" intent="cta-final">Falar com a Slimcap</WhatsAppLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <Image src="/brand/logo-slimcapilar.webp" alt="Slimcapilar" width={255} height={83} />
          <p>Terapia capilar integrativa, produtos e orientação construídos com quatro décadas de experiência.</p>
          <WhatsAppLink className="footer-contact" intent="rodape"><MessageCircle size={18} aria-hidden="true" /> +55 19 98844-2477</WhatsAppLink>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Slimcapilar. Todos os direitos reservados.</span>
          <span>Site desenvolvido por <a href="https://vocedigitalpropaganda.com.br/" target="_blank" rel="noopener noreferrer">Você Digital Propaganda</a></span>
        </div>
      </footer>
      <FloatingActions />
    </>
  );
}
