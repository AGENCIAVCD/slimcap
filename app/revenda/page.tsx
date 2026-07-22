import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Building2,
  ChartNoAxesCombined,
  Check,
  ChevronDown,
  CircleDollarSign,
  Gem,
  Headphones,
  MessageCircle,
  PackageCheck,
  RefreshCw,
  ShieldCheck,
  Star,
  Store,
  UsersRound,
  Zap,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { ResellerCalculator } from "@/components/reseller-calculator";
import { Reveal } from "@/components/reveal";
import { WhatsAppLink } from "@/components/whatsapp-link";

export const metadata: Metadata = {
  title: "Seja Revendedor Slimcap | Margens de até 50%",
  description:
    "Monte uma simulação de pedido e conheça as condições de revenda Slimcap para clínicas, lojas, salões, farmácias e distribuidores.",
  alternates: { canonical: "/revenda" },
  openGraph: {
    title: "Revenda Slimcap | Mais ticket, margem e recompra",
    description: "Comece a partir de R$ 1.500, com margem potencial de até 50%, mix orientado e suporte comercial.",
    url: "/revenda",
    images: [{ url: "/images/revenda-hero-real.webp", width: 1920, height: 1081 }],
  },
};

const commercialTiers = [
  {
    name: "Essencial",
    investment: "R$ 1.500",
    margin: "30%",
    benefit: "Comece com segurança",
    icon: ShieldCheck,
    benefitIcon: Check,
  },
  {
    name: "Crescimento",
    investment: "R$ 3.000",
    margin: "40%",
    benefit: "Equilíbrio entre investimento e retorno",
    icon: ChartNoAxesCombined,
    benefitIcon: Star,
    featured: true,
  },
  {
    name: "Premium",
    investment: "R$ 5.000+",
    margin: "50%",
    benefit: "Maior margem da tabela",
    icon: Gem,
    benefitIcon: Zap,
  },
];

const channels = [
  {
    icon: Building2,
    number: "01",
    title: "Clínicas e profissionais",
    text: "Inclua o home care na recomendação e gere mais receita por paciente sem adicionar horários à agenda.",
    result: "Mais receita por paciente",
  },
  {
    icon: Store,
    number: "02",
    title: "Lojas, salões e farmácias",
    text: "Venda por necessidade, eleve o ticket com kits e crie uma rotina natural de retorno para reposição.",
    result: "Mais giro por cliente",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Distribuidores regionais",
    text: "Abra novos pontos com uma linha especializada, condições progressivas e apoio para desenvolver sua região.",
    result: "Mais pontos de venda ativos",
  },
];

const supportItems = [
  { icon: Boxes, title: "Pedido com lógica de giro", text: "O mix é montado conforme seu canal, público e capacidade de venda, não como um pacote genérico." },
  { icon: PackageCheck, title: "Argumentos para sua equipe", text: "Materiais que ajudam a explicar cada protocolo, recomendar com segurança e conduzir a venda." },
  { icon: Headphones, title: "Consultor próximo", text: "Atendimento direto para condições, dúvidas, novas oportunidades e decisões comerciais." },
  { icon: RefreshCw, title: "Reposição sem adivinhação", text: "Acompanhamento do giro para recomprar com mais clareza e reduzir produto parado." },
];

const faq = [
  {
    question: "Qual é o investimento inicial para revender Slimcap?",
    answer: "O programa começa com pedidos a partir de R$ 1.500. Antes de fechar, o comercial ajuda a ajustar produtos e quantidades ao seu canal para que o primeiro mix faça sentido para a operação.",
  },
  {
    question: "Como funcionam as faixas de margem?",
    answer: "Pedidos a partir de R$ 1.500 podem alcançar até 30%; a partir de R$ 3.000, até 40%; e a partir de R$ 5.000, até 50%. O percentual efetivo depende do mix, da condição negociada e do preço praticado no seu canal.",
  },
  {
    question: "A Slimcap ajuda a escolher quais produtos comprar?",
    answer: "Sim. Você conta como vende, para quem vende e quanto pretende investir. A partir disso, o comercial sugere uma composição mais coerente com seu público e potencial de giro.",
  },
  {
    question: "Existe suporte depois da primeira compra?",
    answer: "Sim. A parceria continua depois do pedido: sua equipe recebe apoio para conhecer a linha, apresentar os protocolos e planejar a reposição conforme as vendas.",
  },
  {
    question: "Posso revender em loja física e também online?",
    answer: "O formato de atuação é alinhado com o comercial durante o cadastro, considerando canal, região e estratégia de venda.",
  },
  {
    question: "Preciso conhecer terapia capilar para começar?",
    answer: "Não é necessário dominar toda a linha antes do primeiro pedido. A Slimcap orienta o parceiro sobre produtos, protocolos e argumentos para que a recomendação seja feita com mais confiança.",
  },
];

const resellerMessage =
  "Olá! Quero conhecer o programa de revenda Slimcap e receber uma sugestão de mix para o meu negócio.";

export default function ResellerPage() {
  return (
    <div className="reseller-page">
      <header className="reseller-header">
        <div className="shell reseller-header-inner">
          <Link href="/" className="reseller-brand" aria-label="Slimcap - voltar ao site principal">
            <Image src="/brand/logo-slimcapilar.webp" alt="Slimcap" width={255} height={83} loading="eager" />
          </Link>
          <nav aria-label="Navegação da página de revenda">
            <a href="#simulador">Simulador</a>
            <a href="#margens">Margens</a>
            <a href="#canais">Para quem</a>
            <a href="#suporte">Suporte</a>
          </nav>
          <WhatsAppLink className="reseller-header-cta" intent="revenda-header" message={resellerMessage}>
            <MessageCircle size={17} aria-hidden="true" /> Receber proposta
          </WhatsAppLink>
        </div>
      </header>

      <main>
        <section className="reseller-hero" aria-labelledby="reseller-title">
          <Image
            src="/images/revenda-hero-real.webp"
            alt="Consultora e proprietária de clínica analisam uma proposta ao lado da linha Slimcap"
            fill
            priority
            sizes="100vw"
            className="reseller-hero-image"
          />
          <div className="reseller-hero-overlay" aria-hidden="true" />
          <div className="shell reseller-hero-content">
            <p className="eyebrow eyebrow-light">Programa de revenda Slimcap</p>
            <h1 id="reseller-title">Revenda Slimcap e transforme cada atendimento em <em>uma nova fonte de receita.</em></h1>
            <p>
              Comece com pedidos a partir de R$ 1.500, margem potencial de até 50% e suporte para escolher o mix,
              preparar sua equipe e planejar a reposição.
            </p>
            <div className="reseller-hero-actions">
              <a href="#simulador" className="button button-gold">
                Calcular minha margem <ChartNoAxesCombined size={19} aria-hidden="true" />
              </a>
              <WhatsAppLink className="reseller-hero-link" intent="revenda-hero" message={resellerMessage}>
                Falar com consultor B2B <ArrowRight size={17} aria-hidden="true" />
              </WhatsAppLink>
            </div>
            <small className="reseller-hero-microcopy">Sem carrinho. Atendimento direto com o time comercial.</small>
            <div className="reseller-hero-proof">
              <span><CircleDollarSign aria-hidden="true" /> Margem potencial de até 50%</span>
              <span><BadgeCheck aria-hidden="true" /> Pedidos a partir de R$ 1.500</span>
              <span><Headphones aria-hidden="true" /> Suporte técnico e comercial</span>
            </div>
          </div>
          <Link href="/" className="reseller-back-link"><ArrowLeft size={16} aria-hidden="true" /> Site Slimcap</Link>
        </section>

        <section id="simulador" className="reseller-simulator-section" aria-labelledby="simulator-title">
          <div className="shell">
            <Reveal className="reseller-section-heading">
              <div>
                <p className="eyebrow">Simulador comercial</p>
                <h2 id="simulator-title">Monte seu pedido e veja <em>quanto ele pode faturar.</em></h2>
              </div>
              <p>
                Compare as categorias, ajuste o valor e veja na hora a quantidade aproximada de unidades, o ticket sugerido,
                o faturamento e o lucro bruto estimado.
              </p>
            </Reveal>
            <Reveal><ResellerCalculator /></Reveal>
          </div>
        </section>

        <section id="margens" className="reseller-tiers-section" aria-labelledby="tiers-title">
          <div className="shell">
            <Reveal className="reseller-tier-intro">
              <p className="eyebrow eyebrow-light">Faixas comerciais claras</p>
              <h2 id="tiers-title">Quanto maior seu pedido, <em>maior sua margem.</em></h2>
              <p>Escolha a faixa que faz sentido para o seu negócio.</p>
            </Reveal>
            <div className="reseller-tier-cards">
              {commercialTiers.map((tier, index) => {
                const Icon = tier.icon;
                const BenefitIcon = tier.benefitIcon;
                return (
                  <Reveal key={tier.investment} className={`reseller-tier-card ${tier.featured ? "is-featured" : ""}`}>
                    {tier.featured ? <span className="tier-featured-badge"><Star aria-hidden="true" /> Melhor equilíbrio</span> : null}
                    <div className="tier-card-top">
                      <span className="tier-card-icon"><Icon aria-hidden="true" /></span>
                      <span className="tier-card-number">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <h3>{tier.name}</h3>
                    <strong className="tier-card-margin">{tier.margin}</strong>
                    <span className="tier-margin-label">Margem potencial</span>
                    <div className="tier-card-order">
                      <small>Pedido mínimo</small>
                      <strong>{tier.investment}</strong>
                    </div>
                    <p><BenefitIcon aria-hidden="true" /> {tier.benefit}</p>
                  </Reveal>
                );
              })}
            </div>
            <Reveal className="reseller-tier-cta">
              <span className="tier-cta-icon"><ChartNoAxesCombined aria-hidden="true" /></span>
              <div><strong>Mais investimento, mais retorno.</strong><p>Escale suas compras e aumente sua lucratividade.</p></div>
              <WhatsAppLink intent="faixas-comerciais" message={resellerMessage}>
                Falar com um especialista <ArrowRight aria-hidden="true" />
              </WhatsAppLink>
            </Reveal>
          </div>
        </section>

        <section className="reseller-ticket-section" aria-labelledby="ticket-title">
          <div className="shell reseller-ticket-grid">
            <Reveal className="reseller-ticket-copy">
              <p className="eyebrow">Mais receita sem mais agenda</p>
              <h2 id="ticket-title">Aumente o ticket de cada cliente <em>sem aumentar seus horários.</em></h2>
              <p>
                Quando o cliente leva para casa um protocolo alinhado à necessidade dele, o atendimento gera uma
                nova venda hoje e abre espaço para reposição nas próximas semanas.
              </p>
              <div className="reseller-revenue-levers">
                <span><Check aria-hidden="true" /> Venda um protocolo, não apenas um produto isolado</span>
                <span><Check aria-hidden="true" /> Gere receita adicional em cada atendimento</span>
                <span><Check aria-hidden="true" /> Crie recompra com produtos de uso contínuo</span>
              </div>
            </Reveal>
            <Reveal className="reseller-giro-media">
              <Image
                src="/images/revenda-giro-real.webp"
                alt="Proprietária de loja organiza o estoque e a exposição dos produtos Slimcap"
                fill
                sizes="(max-width: 900px) 100vw, 58vw"
              />
              <div className="reseller-giro-caption">
                <span>Giro + reposição</span>
                <strong>A primeira venda gera ticket. A reposição constrói recorrência.</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="canais" className="reseller-channels-section" aria-labelledby="channels-title">
          <div className="shell">
            <Reveal className="reseller-section-heading reseller-heading-light">
              <div><p className="eyebrow eyebrow-light">Uma estratégia para cada canal</p><h2 id="channels-title">O produto é o mesmo. <em>A oportunidade de venda muda.</em></h2></div>
              <p>A Slimcap adapta o mix e o suporte à forma como sua clínica, loja ou distribuição gera receita.</p>
            </Reveal>
            <div className="reseller-channel-list">
              {channels.map((channel) => {
                const Icon = channel.icon;
                return (
                  <Reveal key={channel.number} className="reseller-channel-item">
                    <div className="reseller-channel-top"><Icon aria-hidden="true" /><span>{channel.number}</span></div>
                    <h3>{channel.title}</h3>
                    <p>{channel.text}</p>
                    <strong>{channel.result}</strong>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="suporte" className="reseller-support-section" aria-labelledby="support-title">
          <div className="shell reseller-support-grid">
            <Reveal className="reseller-support-media">
              <Image src="/images/assessoria-tecnica.webp" alt="Assessoria de mix e materiais para parceiros Slimcap" fill sizes="(max-width: 900px) 100vw, 48vw" />
              <div><Headphones aria-hidden="true" /><span>Você não compra sozinho.<br />E não vende sozinho.</span></div>
            </Reveal>
            <div className="reseller-support-copy">
              <Reveal>
                <p className="eyebrow">Menos risco no primeiro pedido</p>
                <h2 id="support-title">Você entra com o relacionamento. <em>A Slimcap ajuda com o resto.</em></h2>
                <p className="reseller-support-lead">Do primeiro mix à reposição, você recebe direção para comprar melhor, apresentar a linha com segurança e manter o estoque alinhado ao giro.</p>
              </Reveal>
              <div className="reseller-support-list">
                {supportItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} className="reseller-support-item">
                      <span>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><div><h3>{item.title}</h3><p>{item.text}</p></div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="reseller-process-section" aria-labelledby="process-title">
          <div className="shell">
            <Reveal className="reseller-process-heading">
              <p className="eyebrow">Comece sem complicação</p>
              <h2 id="process-title">Seu primeiro pedido <em>em quatro passos.</em></h2>
            </Reveal>
            <ol className="reseller-process-list">
              <li><span>01</span><strong>Conte como você vende</strong><p>Canal, público, região e objetivo comercial.</p></li>
              <li><span>02</span><strong>Receba um mix sugerido</strong><p>Produtos e quantidades coerentes com seu investimento.</p></li>
              <li><span>03</span><strong>Prepare a argumentação</strong><p>Entenda como apresentar protocolos e benefícios.</p></li>
              <li><span>04</span><strong>Venda, acompanhe e reponha</strong><p>Use o giro real para orientar as próximas compras.</p></li>
            </ol>
          </div>
        </section>

        <section className="reseller-faq-section" aria-labelledby="reseller-faq-title">
          <div className="shell reseller-faq-grid">
            <Reveal className="reseller-faq-intro">
              <p className="eyebrow">Decida com segurança</p>
              <h2 id="reseller-faq-title">Dúvidas antes de investir?</h2>
              <WhatsAppLink className="text-link" intent="revenda-faq" message={resellerMessage}>Tirar dúvida com um consultor <MessageCircle size={17} aria-hidden="true" /></WhatsAppLink>
            </Reveal>
            <div className="reseller-faq-list">
              {faq.map((item) => (
                <Reveal key={item.question}>
                  <details><summary>{item.question}<ChevronDown aria-hidden="true" /></summary><p>{item.answer}</p></details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="reseller-final-section" aria-labelledby="reseller-final-title">
          <Image src="/images/hero-produtos-slimcap.webp" alt="" fill sizes="100vw" className="reseller-final-image" />
          <div className="reseller-final-overlay" aria-hidden="true" />
          <div className="shell reseller-final-content">
            <p className="eyebrow eyebrow-light">Seu próximo canal de receita</p>
            <h2 id="reseller-final-title">Comece com um pedido pensado <em>para vender e voltar a vender.</em></h2>
            <p>Converse com o time comercial e receba uma sugestão de mix alinhada ao seu canal e investimento.</p>
            <WhatsAppLink className="button button-gold" intent="revenda-final" message={resellerMessage}>
              Quero uma proposta de revenda <ArrowRight size={18} aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <footer className="reseller-footer">
        <div className="shell reseller-footer-inner">
          <Image src="/brand/logo-slimcapilar.webp" alt="Slimcap" width={255} height={83} />
          <p>Produtos para vender hoje, suporte para repor melhor e margem para crescer.</p>
          <Link href="/">Voltar ao site Slimcap <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </footer>
      <FloatingActions intent="revenda-flutuante" message={resellerMessage} />
    </div>
  );
}
