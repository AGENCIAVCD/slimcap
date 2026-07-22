"use client";

import Image from "next/image";
import { ArrowRight, Check, MessageCircle, PackageOpen, TrendingUp } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { WhatsAppLink } from "./whatsapp-link";

const MIN_INVESTMENT = 1500;
const MAX_INVESTMENT = 10000;

const tiers = [
  { min: 1500, margin: 30, name: "Primeira faixa" },
  { min: 3000, margin: 40, name: "Mais margem" },
  { min: 5000, margin: 50, name: "Melhor condição" },
] as const;

const resellerKits = [
  {
    id: "giro",
    eyebrow: "Para começar",
    name: "Mix Essencial",
    description: "Para validar a demanda com uma seleção enxuta, fácil de explicar e de oferecer.",
    referenceCost: 204.3,
    products: ["Shampoo anticaspa", "Loção tônica"],
    images: ["/produtos/shampoo-anticaspa.webp", "/produtos/locao-tonica.webp"],
  },
  {
    id: "protocolo",
    eyebrow: "Para clínicas e especialistas",
    name: "Protocolo Anti-Queda",
    description: "Para elevar o ticket com um protocolo de couro cabeludo, fortalecimento e continuidade em casa.",
    referenceCost: 385.9,
    products: ["Shampoo revitalizante", "Loção tônica", "Condicionador"],
    images: [
      "/produtos/shampoo-revitalizante.webp",
      "/produtos/locao-tonica.webp",
      "/produtos/condicionador.webp",
    ],
  },
  {
    id: "prateleira",
    eyebrow: "Para lojas e distribuidores",
    name: "Mix Loja Completo",
    description: "Para atender mais necessidades, ampliar a vitrine e gerar novas combinações de venda.",
    referenceCost: 519.9,
    products: ["Shampoo", "Loção", "Máscara", "Leave-in"],
    images: [
      "/produtos/shampoo-revitalizante.webp",
      "/produtos/locao-tonica.webp",
      "/produtos/mascara-capilar.webp",
      "/produtos/leave-in.webp",
    ],
  },
] as const;

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

function getTier(investment: number) {
  if (investment >= 5000) return tiers[2];
  if (investment >= 3000) return tiers[1];
  return tiers[0];
}

export function ResellerCalculator() {
  const [investment, setInvestment] = useState(3000);
  const [selectedKitId, setSelectedKitId] = useState<(typeof resellerKits)[number]["id"]>("protocolo");
  const selectedKit = resellerKits.find((kit) => kit.id === selectedKitId) ?? resellerKits[1];
  const tier = getTier(investment);
  const projectedRevenue = investment * (1 + tier.margin / 100);
  const projectedProfit = projectedRevenue - investment;
  const estimatedKits = Math.max(1, Math.floor(investment / selectedKit.referenceCost));
  const suggestedTicket = selectedKit.referenceCost * (1 + tier.margin / 100);
  const rangeProgress = ((investment - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT)) * 100;
  const nextTier = tiers.find((item) => item.min > investment);
  const amountToNextTier = nextTier ? nextTier.min - investment : 0;
  const message = `Olá! Simulei o ${selectedKit.name} com um pedido de ${currency.format(investment)}, aproximadamente ${estimatedKits} kits e margem potencial de até ${tier.margin}%. Quero receber uma proposta de revenda para o meu negócio.`;

  return (
    <div className="reseller-calculator">
      <div className="kit-selector-heading">
        <div>
          <span>01</span>
          <p>Escolha seu ponto de partida</p>
          <strong>O que você quer colocar para vender?</strong>
        </div>
        <small>Compare os cenários. A quantidade, o ticket e a projeção financeira mudam com a sua escolha.</small>
      </div>

      <div className="calculator-kit-options" role="radiogroup" aria-label="Mix de produtos para simulação">
        {resellerKits.map((kit) => {
          const isSelected = kit.id === selectedKit.id;
          return (
            <button
              key={kit.id}
              type="button"
              role="radio"
              aria-checked={isSelected}
              className={isSelected ? "is-selected" : ""}
              onClick={() => setSelectedKitId(kit.id)}
            >
              <div className="kit-option-products" aria-hidden="true">
                {kit.images.map((image, index) => (
                  <Image key={image} src={image} alt="" width={1000} height={1000} style={{ "--product-index": index } as CSSProperties} />
                ))}
              </div>
              <div className="kit-option-copy">
                <span>{kit.eyebrow}</span>
                <strong>{kit.name}</strong>
                <p>{kit.description}</p>
                <small>{kit.products.join(" + ")}</small>
              </div>
              <i aria-hidden="true">{isSelected ? <Check /> : null}</i>
            </button>
          );
        })}
      </div>

      <div className="calculator-body">
        <div className="calculator-controls">
          <div className="calculator-step-label"><span>02</span> Defina o tamanho do pedido</div>
          <div className="calculator-label-row">
            <div>
              <span>Valor do pedido simulado</span>
              <strong>{currency.format(investment)}</strong>
            </div>
            <div className="calculator-tier-badge">
              <TrendingUp aria-hidden="true" />
              <span>{tier.name}</span>
            </div>
          </div>

          <label className="sr-only" htmlFor="reseller-investment">
            Valor de compra mensal
          </label>
          <input
            id="reseller-investment"
            type="range"
            min={MIN_INVESTMENT}
            max={MAX_INVESTMENT}
            step={100}
            value={investment}
            onChange={(event) => setInvestment(Number(event.target.value))}
            style={{ "--range-progress": `${rangeProgress}%` } as CSSProperties}
          />

          <div className="calculator-scale" aria-hidden="true">
            <span>R$ 1,5 mil</span>
            <span>R$ 3 mil</span>
            <span>R$ 5 mil</span>
            <span>R$ 10 mil</span>
          </div>

          <div className="calculator-next-tier" aria-live="polite">
            {nextTier ? (
              <>Adicione <strong>{currency.format(amountToNextTier)}</strong> ao pedido e avance para uma margem potencial de até {nextTier.margin}%.</>
            ) : (
              <>Você alcançou a <strong>faixa máxima de oportunidade</strong> da simulação.</>
            )}
          </div>

          <WhatsAppLink className="button button-dark calculator-whatsapp" intent="simulador-revenda" message={message}>
            <MessageCircle size={19} aria-hidden="true" />
            Quero uma proposta com este mix
            <ArrowRight size={18} aria-hidden="true" />
          </WhatsAppLink>
        </div>

        <div className="calculator-results" aria-live="polite">
          <p>Projeção para o {selectedKit.name}</p>
          <div className="calculator-kit-result">
            <div className="calculator-result-products" aria-hidden="true">
              {selectedKit.images.map((image, index) => (
                <Image key={image} src={image} alt="" width={1000} height={1000} style={{ "--product-index": index } as CSSProperties} />
              ))}
            </div>
            <div>
              <span>Com este valor, você pode formar aproximadamente</span>
              <strong>{estimatedKits} <small>kits</small></strong>
            </div>
          </div>
          <div className="calculator-margin">
            <span>Margem potencial de até</span>
            <strong>{tier.margin}%</strong>
          </div>
          <dl>
            <div>
              <dt>Ticket estimado por kit</dt>
              <dd>{currency.format(suggestedTicket)}</dd>
            </div>
            <div>
              <dt>Faturamento bruto estimado</dt>
              <dd>{currency.format(projectedRevenue)}</dd>
            </div>
            <div>
              <dt>Lucro bruto estimado</dt>
              <dd>{currency.format(projectedProfit)}</dd>
            </div>
          </dl>
          <div className="calculator-result-note"><PackageOpen aria-hidden="true" /> O comercial ajusta produtos e quantidades ao seu canal antes do pedido.</div>
          <small>
            Simulação ilustrativa baseada no custo médio de referência do mix e na margem máxima da faixa. O resultado
            real varia conforme composição, preço praticado, canal e negociação.
          </small>
        </div>
      </div>
    </div>
  );
}
