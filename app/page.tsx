import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Handshake,
  MessageCircle,
  Microscope,
  PackageCheck,
  Sparkles,
} from "lucide-react";
import { FloatingActions } from "@/components/floating-actions";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppLink } from "@/components/whatsapp-link";

const marketStats = [
  { value: "3º", label: "maior mercado consumidor de beleza e cuidados pessoais" },
  { value: "R$ 200 bi", label: "de faturamento do setor brasileiro em 2024" },
  { value: "+6,8%", label: "de crescimento no mesmo período" },
];

const advisorySteps = [
  {
    icon: Microscope,
    number: "01",
    title: "Leitura do seu negócio",
    text: "Entendemos seu canal, público e momento comercial antes de indicar qualquer composição.",
  },
  {
    icon: Boxes,
    number: "02",
    title: "Seleção técnica do mix",
    text: "Construímos uma proposta de produtos e materiais coerente com a demanda real da sua operação.",
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Direção para crescer",
    text: "Acompanhamos giro, reposição e oportunidades para orientar decisões comerciais mais seguras.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section id="inicio" className="hero-section" aria-labelledby="hero-title">
          {/*
            DIREÇÃO DA IMAGEM HERO: fotografia editorial horizontal de uma especialista brasileira em saúde
            capilar orientando uma proprietária de clínica, em ambiente contemporâneo com travertino, madeira
            nogueira e bronze. A ação deve permanecer no lado direito para preservar contraste e área de leitura
            à esquerda. Luz natural quente, pele e cabelos reais, sem logos, textos, verde ou estética hospitalar.
          */}
          <Image
            src="/images/hero-consultoria.webp"
            alt="Especialista em saúde capilar orientando uma profissional em uma clínica contemporânea"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="shell hero-content">
            <p className="eyebrow hero-eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Parceria para o mercado capilar
            </p>
            <h1 id="hero-title">
              O mercado cresce.
              <span>Seu negócio pode crescer com ele.</span>
            </h1>
            <p className="hero-lead">
              A Slimcapilar reúne experiência, linha profissional e assessoria para transformar potencial em uma
              operação mais segura, preparada e rentável.
            </p>
            <div className="hero-actions">
              <WhatsAppLink className="button button-primary" intent="hero">
                <MessageCircle size={20} aria-hidden="true" />
                Conversar com um especialista
              </WhatsAppLink>
              <a className="text-link text-link-light" href="#mercado">
                Conhecer a oportunidade <ArrowDownRight size={18} aria-hidden="true" />
              </a>
            </div>
            <div className="hero-proof" aria-label="Diferenciais Slimcapilar">
              <span><BadgeCheck aria-hidden="true" /> 40 anos de experiência</span>
              <span><Handshake aria-hidden="true" /> Atendimento consultivo</span>
              <span><PackageCheck aria-hidden="true" /> Mix orientado por canal</span>
            </div>
          </div>
        </section>

        <section id="mercado" className="market-section section-pad" aria-labelledby="market-title">
          <div className="shell">
            <Reveal className="section-heading market-heading">
              <div>
                <p className="eyebrow">01 / Mercado em expansão</p>
                <h2 id="market-title">Um setor relevante hoje. Uma oportunidade ainda maior amanhã.</h2>
              </div>
              <p>
                O Brasil já ocupa uma posição de destaque mundial em beleza e cuidados pessoais. Para quem atua
                com saúde capilar, isso significa demanda, recorrência e espaço para uma oferta mais especializada.
              </p>
            </Reveal>

            <Reveal className="market-visual">
              <figure className="editorial-image market-image-wrap">
                {/*
                  DIREÇÃO DA IMAGEM MERCADO: still life conceitual 4:3 com patamares ascendentes de pedra clara,
                  arcos de bronze, amostras de fibra capilar e frascos laboratoriais sem rótulo. A composição deve
                  sugerir crescimento sem usar setas literais, moedas ou gráficos com números. Paleta marfim,
                  âmbar, nogueira e bronze; iluminação de galeria; nenhum verde, texto ou marca.
                */}
                <Image
                  src="/images/mercado-capilar.webp"
                  alt="Composição conceitual em pedra e bronze representando o crescimento do mercado capilar"
                  fill
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
              </figure>
              <div className="market-note">
                <span>Potencial com direção</span>
                <p>Não basta entrar em um mercado aquecido. É preciso saber o que oferecer, para quem e como repor.</p>
              </div>
            </Reveal>

            <div className="stats-row">
              {marketStats.map((stat) => (
                <Reveal key={stat.value} className="stat-item">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </Reveal>
              ))}
            </div>
            <p className="source-note">
              Dados de mercado: {" "}
              <a
                href="https://abihpec.org.br/site2019/wp-content/uploads/2026/02/Panorama-do-Setor-de-Beleza-e-Cuidados-Pessoais_20.05.2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Panorama ABIHPEC 2026
              </a>
              {" "}e levantamento setorial de 2024.
            </p>
          </div>
        </section>

        <section id="tradicao" className="heritage-section" aria-labelledby="heritage-title">
          <div className="shell heritage-grid">
            <Reveal className="heritage-copy">
              <p className="eyebrow eyebrow-light">02 / Autoridade e tradição</p>
              <div className="heritage-number" aria-hidden="true">40</div>
              <h2 id="heritage-title">Quatro décadas transformadas em segurança para decidir.</h2>
              <p>
                Nossa experiência não vive apenas na história da marca. Ela aparece na curadoria da linha, na
                orientação técnica e na forma como acompanhamos cada parceiro.
              </p>
              <blockquote>
                “Tradição, para nós, é ter repertório para indicar com responsabilidade e construir relações que
                permanecem.”
              </blockquote>
            </Reveal>

            <Reveal className="heritage-media">
              {/*
                DIREÇÃO DA IMAGEM TRADIÇÃO: retrato documental vertical de uma especialista brasileira experiente
                transmitindo conhecimento a uma profissional mais jovem durante uma avaliação capilar. Consultório
                moderno em linho, madeira nogueira e bronze, luz natural, expressão concentrada e humana. Evitar
                jalecos hospitalares, poses publicitárias, textos, logos, plantas verdes e aparelhos futuristas.
              */}
              <Image
                src="/images/tradicao-clinica.webp"
                alt="Especialista experiente orientando uma profissional durante uma avaliação capilar"
                fill
                sizes="(max-width: 900px) 100vw, 46vw"
              />
              <div className="heritage-caption">
                <span>Desde os primeiros atendimentos</span>
                <strong>Conhecimento passado adiante.</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="assessoria" className="advisory-section section-pad" aria-labelledby="advisory-title">
          <div className="shell">
            <Reveal className="section-heading advisory-heading">
              <div>
                <p className="eyebrow">03 / Assessoria completa</p>
                <h2 id="advisory-title">Você não recebe apenas produtos. Recebe direção.</h2>
              </div>
              <p>
                Da escolha dos materiais à organização do mix, nossa equipe atua ao lado do seu negócio para dar
                clareza a cada próxima decisão.
              </p>
            </Reveal>

            <div className="advisory-grid">
              <Reveal className="advisory-media">
                {/*
                  DIREÇÃO DA IMAGEM ASSESSORIA: fotografia 4:3 em ângulo superior de uma mesa de consultoria com
                  mãos de dois profissionais, amostras capilares, câmera de análise, frascos âmbar sem rótulo,
                  tablet e materiais neutros sendo selecionados. Mesa de nogueira e pedra clara, detalhes em
                  bronze, composição organizada e real. Sem texto legível, marcas, verde ou estética de e-commerce.
                */}
                <Image
                  src="/images/assessoria-tecnica.webp"
                  alt="Profissionais selecionando materiais e referências durante uma assessoria técnica"
                  fill
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
              </Reveal>

              <div className="advisory-list">
                {advisorySteps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <Reveal key={step.number} className="advisory-item">
                      <span className="advisory-number">{step.number}</span>
                      <Icon aria-hidden="true" />
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="conversion-section" aria-labelledby="conversion-title">
          <div className="shell conversion-inner">
            <div>
              <p className="eyebrow eyebrow-light">O próximo passo começa em uma conversa</p>
              <h2 id="conversion-title">Vamos entender o potencial do seu negócio?</h2>
            </div>
            <div className="conversion-action">
              <p>Fale diretamente com a equipe Slimcapilar e receba uma orientação inicial para o seu canal.</p>
              <WhatsAppLink className="button button-gold" intent="cta-final">
                Chamar no WhatsApp <ArrowRight size={20} aria-hidden="true" />
              </WhatsAppLink>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-main">
          <Image src="/brand/logo-slimcapilar.webp" alt="Slimcapilar" width={255} height={83} />
          <p>Experiência, linha profissional e assessoria para o mercado capilar.</p>
          <WhatsAppLink className="footer-contact" intent="rodape">
            <MessageCircle size={18} aria-hidden="true" /> +55 19 98844-2477
          </WhatsAppLink>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} Slimcapilar. Todos os direitos reservados.</span>
          <span>
            Site desenvolvido por {" "}
            <a href="https://vocedigitalpropaganda.com.br/" target="_blank" rel="noopener noreferrer">
              Você Digital Propaganda
            </a>
          </span>
        </div>
      </footer>
      <FloatingActions />
    </>
  );
}
