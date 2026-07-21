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
  Headphones,
  MessageCircle,
  PackageCheck,
  RefreshCw,
  Store,
  UsersRound,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { ResellerCalculator } from "@/components/reseller-calculator";
import { Reveal } from "@/components/reveal";
import { WhatsAppLink } from "@/components/whatsapp-link";

export const metadata: Metadata = {
  title: "Revenda Slimcap | Margem, recorrência e suporte comercial",
  description:
    "Simule seu potencial de margem e conheça a parceria Slimcap para clínicas, lojas, farmácias, salões e distribuidores.",
  alternates: { canonical: "/revenda" },
  openGraph: {
    title: "Revenda Slimcap | Uma linha que movimenta o seu negócio",
    description: "Margem potencial de até 50%, mix orientado e suporte para vender e repor melhor.",
    url: "/revenda",
    images: [{ url: "/images/hero-produtos-slimcap.webp", width: 1448, height: 1086 }],
  },
};

const commercialTiers = [
  { investment: "R$ 1.500", margin: "30%", label: "Entrada profissional" },
  { investment: "R$ 3.000", margin: "40%", label: "Crescimento" },
  { investment: "R$ 5.000 ou mais", margin: "50%", label: "Máxima oportunidade" },
];

const channels = [
  {
    icon: Building2,
    number: "01",
    title: "Clínicas e profissionais",
    text: "Estenda o cuidado para a rotina em casa e aumente o valor gerado por paciente sem ocupar mais agenda.",
    result: "Mais valor por atendimento",
  },
  {
    icon: Store,
    number: "02",
    title: "Lojas, salões e farmácias",
    text: "Transforme dores recorrentes em uma linha consultiva, com kits claros e novas oportunidades de recompra.",
    result: "Mais giro e ticket médio",
  },
  {
    icon: UsersRound,
    number: "03",
    title: "Distribuidores regionais",
    text: "Trabalhe volume, abra novos pontos de venda e leve uma marca especializada para a sua cobertura comercial.",
    result: "Mais escala regional",
  },
];

const supportItems = [
  { icon: Boxes, title: "Mix orientado", text: "Seleção de produtos e kits de acordo com seu canal, público e potencial de giro." },
  { icon: PackageCheck, title: "Materiais de venda", text: "Conteúdo para apresentar a linha, explicar protocolos e apoiar a decisão do cliente." },
  { icon: Headphones, title: "Apoio comercial", text: "Contato próximo para dúvidas, oportunidades, condições e planejamento de reposição." },
  { icon: RefreshCw, title: "Reposição inteligente", text: "Leitura do giro para manter disponibilidade sem perder eficiência de estoque." },
];

const faq = [
  {
    question: "Qual é o investimento inicial para revender Slimcap?",
    answer: "A primeira faixa comercial da simulação começa em R$ 1.500. O mix e a condição final são definidos com o comercial conforme o perfil e o canal do parceiro.",
  },
  {
    question: "Como funcionam as faixas de margem?",
    answer: "Compras a partir de R$ 1.500 têm potencial de até 30%; a partir de R$ 3.000, até 40%; e a partir de R$ 5.000, até 50%. A margem efetiva depende do mix, preço praticado e condição negociada.",
  },
  {
    question: "A Slimcap ajuda a escolher quais produtos comprar?",
    answer: "Sim. A proposta é construída de acordo com o tipo de negócio, público e objetivo comercial, evitando um pedido genérico sem relação com a operação.",
  },
  {
    question: "Existe suporte depois da primeira compra?",
    answer: "Sim. O parceiro recebe apoio para conhecer a linha, organizar a argumentação de venda e planejar reposições conforme o giro.",
  },
  {
    question: "Posso revender em loja física e também online?",
    answer: "O formato de atuação é alinhado com o comercial durante o cadastro, considerando canal, região e estratégia de venda.",
  },
];

const resellerMessage =
  "Olá! Conheci o programa de revenda Slimcap pelo site e quero entender as condições comerciais para o meu negócio.";

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
            <MessageCircle size={17} aria-hidden="true" /> Falar com comercial
          </WhatsAppLink>
        </div>
      </header>

      <main>
        <section className="reseller-hero" aria-labelledby="reseller-title">
          <Image
            src="/images/hero-produtos-slimcap.webp"
            alt="Produtos Slimcap apresentados em uma composição premium"
            fill
            priority
            sizes="100vw"
            className="reseller-hero-image"
          />
          <div className="reseller-hero-overlay" aria-hidden="true" />
          <div className="shell reseller-hero-content">
            <p className="eyebrow eyebrow-light">Programa de parceria Slimcap</p>
            <h1 id="reseller-title">Mais valor por atendimento. Mais margem por reposição.</h1>
            <p>
              Leve uma linha de terapia capilar com quatro décadas de experiência para sua clínica, loja ou região,
              com mix orientado e suporte para vender com confiança.
            </p>
            <div className="reseller-hero-actions">
              <a href="#simulador" className="button button-gold">
                Simular meu lucro <ChartNoAxesCombined size={19} aria-hidden="true" />
              </a>
              <WhatsAppLink className="reseller-hero-link" intent="revenda-hero" message={resellerMessage}>
                Conhecer condições <ArrowRight size={17} aria-hidden="true" />
              </WhatsAppLink>
            </div>
            <div className="reseller-hero-proof">
              <span><CircleDollarSign aria-hidden="true" /> Margem potencial de até 50%</span>
              <span><BadgeCheck aria-hidden="true" /> 40 anos de experiência</span>
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
                <h2 id="simulator-title">Veja o que a sua faixa de compra pode movimentar.</h2>
              </div>
              <p>
                Ajuste o investimento mensal. Conforme o volume cresce, a margem potencial aumenta e os números da
                operação acompanham a nova faixa.
              </p>
            </Reveal>
            <Reveal><ResellerCalculator /></Reveal>
          </div>
        </section>

        <section id="margens" className="reseller-tiers-section" aria-labelledby="tiers-title">
          <div className="shell">
            <Reveal className="reseller-tier-intro">
              <p className="eyebrow eyebrow-light">Faixas comerciais claras</p>
              <h2 id="tiers-title">Seu volume abre novas possibilidades de margem.</h2>
            </Reveal>
            <div className="reseller-tier-list">
              {commercialTiers.map((tier, index) => (
                <Reveal key={tier.investment} className="reseller-tier-item">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><small>Compras a partir de</small><strong>{tier.investment}</strong></div>
                  <div><small>Margem potencial de até</small><strong>{tier.margin}</strong></div>
                  <p>{tier.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="reseller-ticket-section" aria-labelledby="ticket-title">
          <div className="shell reseller-ticket-grid">
            <Reveal className="reseller-ticket-copy">
              <p className="eyebrow">Uma linha, novas receitas</p>
              <h2 id="ticket-title">O ticket não precisa terminar no atendimento ou na primeira compra.</h2>
              <p>
                Protocolos completos permitem combinar produtos de couro cabeludo e fios, construir uma indicação
                mais valiosa e criar motivos reais para o cliente voltar.
              </p>
              <div className="reseller-revenue-levers">
                <span><Check aria-hidden="true" /> Kits por necessidade elevam o valor da venda</span>
                <span><Check aria-hidden="true" /> Rotina home care amplia o ticket da clínica</span>
                <span><Check aria-hidden="true" /> Uso contínuo favorece recompra e reposição</span>
              </div>
            </Reveal>
            <Reveal className="reseller-product-stage" aria-label="Produtos da linha Slimcap">
              <div className="reseller-product pedestal-one">
                <Image src="/produtos/mascara-capilar.webp" alt="Máscara capilar Slimcap" width={1000} height={1000} />
              </div>
              <div className="reseller-product pedestal-two">
                <Image src="/produtos/shampoo-revitalizante.webp" alt="Shampoo revitalizante Slimcap" width={1000} height={1000} />
              </div>
              <div className="reseller-product pedestal-three">
                <Image src="/produtos/locao-tonica.webp" alt="Loção tônica Slimcap" width={1000} height={1000} />
              </div>
              <div className="reseller-stage-note"><strong>Mix completo</strong><span>couro cabeludo + fios</span></div>
            </Reveal>
          </div>
        </section>

        <section id="canais" className="reseller-channels-section" aria-labelledby="channels-title">
          <div className="shell">
            <Reveal className="reseller-section-heading reseller-heading-light">
              <div><p className="eyebrow eyebrow-light">Feito para diferentes canais</p><h2 id="channels-title">A oportunidade muda. O suporte acompanha.</h2></div>
              <p>O mix e a conversa comercial são ajustados ao modo como cada parceiro atende, vende e recompra.</p>
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
                <p className="eyebrow">Suporte que ajuda a girar</p>
                <h2 id="support-title">Produto na prateleira não basta. É preciso direção.</h2>
                <p className="reseller-support-lead">Da composição do primeiro pedido à reposição, a parceria é construída para deixar sua equipe mais preparada e seu estoque mais inteligente.</p>
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
              <p className="eyebrow">Da conversa à reposição</p>
              <h2 id="process-title">Um começo simples. Uma parceria para continuar.</h2>
            </Reveal>
            <ol className="reseller-process-list">
              <li><span>01</span><strong>Conte sobre o seu negócio</strong><p>Canal, público, região e objetivo comercial.</p></li>
              <li><span>02</span><strong>Receba uma sugestão de mix</strong><p>Produtos e volume alinhados à sua operação.</p></li>
              <li><span>03</span><strong>Prepare sua equipe para vender</strong><p>Materiais e orientação para apresentar a linha.</p></li>
              <li><span>04</span><strong>Acompanhe giro e reposição</strong><p>Mais clareza para manter o estoque saudável.</p></li>
            </ol>
          </div>
        </section>

        <section className="reseller-faq-section" aria-labelledby="reseller-faq-title">
          <div className="shell reseller-faq-grid">
            <Reveal className="reseller-faq-intro">
              <p className="eyebrow">Antes de começar</p>
              <h2 id="reseller-faq-title">O que parceiros querem saber.</h2>
              <WhatsAppLink className="text-link" intent="revenda-faq" message={resellerMessage}>Perguntar ao comercial <MessageCircle size={17} aria-hidden="true" /></WhatsAppLink>
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
            <p className="eyebrow eyebrow-light">Pronto para colocar a linha em movimento?</p>
            <h2 id="reseller-final-title">Converse com quem entende de produto e de parceria.</h2>
            <p>Receba uma sugestão comercial de acordo com o seu canal e potencial de compra.</p>
            <WhatsAppLink className="button button-gold" intent="revenda-final" message={resellerMessage}>
              Falar com o comercial <ArrowRight size={18} aria-hidden="true" />
            </WhatsAppLink>
          </div>
        </section>
      </main>

      <footer className="reseller-footer">
        <div className="shell reseller-footer-inner">
          <Image src="/brand/logo-slimcapilar.webp" alt="Slimcap" width={255} height={83} />
          <p>Linha profissional, margem e suporte para clínicas, lojas e distribuidores.</p>
          <Link href="/">Voltar ao site Slimcap <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
      </footer>
      <FloatingActions intent="revenda-flutuante" message={resellerMessage} />
    </div>
  );
}
