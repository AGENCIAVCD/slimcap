"use client";

import Image from "next/image";
import { ArrowRight, Check, MessageCircle, PackageOpen, TrendingUp } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { RESELLER_WHATSAPP, WhatsAppLink } from "./whatsapp-link";

const MIN_INVESTMENT = 1500;
const MAX_INVESTMENT = 10000;

const tiers = [
  { min: 1500, margin: 30, name: "Primeira faixa" },
  { min: 3000, margin: 40, name: "Mais margem" },
  { min: 5000, margin: 50, name: "Melhor condição" },
] as const;

const resellerProducts = [
  {
    id: "shampoo",
    eyebrow: "Giro recorrente",
    name: "Shampoo revitalizante",
    description: "Base de recompra para rotina capilar.",
    referenceCost: 56.43,
    unit: "unidades",
    ticketLabel: "unidade",
    image: "/produtos/gerados/shampoo-revitalizante.png",
  },
  {
    id: "condicionador",
    eyebrow: "Venda complementar",
    name: "Condicionador",
    description: "Completa o ritual e ajuda a elevar o ticket.",
    referenceCost: 45,
    unit: "unidades",
    ticketLabel: "unidade",
    image: "/produtos/gerados/condicionador.png",
  },
  {
    id: "locao",
    eyebrow: "Protocolos capilares",
    name: "Loção tônica",
    description: "Indicação estratégica para o couro cabeludo.",
    referenceCost: 49.29,
    unit: "unidades",
    ticketLabel: "unidade",
    image: "/produtos/gerados/locao-tonica.png",
  },
  {
    id: "mascara",
    eyebrow: "Nutrição e brilho",
    name: "Máscara capilar",
    description: "Complemento de alto apelo para a prateleira.",
    referenceCost: 38.57,
    unit: "unidades",
    ticketLabel: "unidade",
    image: "/produtos/gerados/mascara-capilar.png",
  },
  {
    id: "esfoliante",
    eyebrow: "Cuidado do couro cabeludo",
    name: "Esfoliante",
    description: "Porta de entrada para protocolos completos.",
    referenceCost: 27.86,
    unit: "unidades",
    ticketLabel: "unidade",
    image: "/produtos/gerados/esfoliante.png",
  },
  {
    id: "kits",
    eyebrow: "Protocolos completos",
    name: "Kit completo anti-queda",
    description: "Solução pronta para aumentar o ticket médio.",
    referenceCost: 215.54,
    unit: "kits",
    ticketLabel: "kit",
    image: "/produtos/gerados/kit-antiqueda.png",
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
  const [selectedProductId, setSelectedProductId] = useState<(typeof resellerProducts)[number]["id"]>("kits");
  const selectedProduct = resellerProducts.find((product) => product.id === selectedProductId) ?? resellerProducts[5];
  const tier = getTier(investment);
  const projectedRevenue = investment * (1 + tier.margin / 100);
  const projectedProfit = projectedRevenue - investment;
  const estimatedUnits = Math.max(1, Math.floor(investment / selectedProduct.referenceCost));
  const suggestedTicket = selectedProduct.referenceCost * (1 + tier.margin / 100);
  const rangeProgress = ((investment - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT)) * 100;
  const nextTier = tiers.find((item) => item.min > investment);
  const amountToNextTier = nextTier ? nextTier.min - investment : 0;
  const message = `Olá! Simulei ${selectedProduct.name} com um pedido de ${currency.format(investment)}, aproximadamente ${estimatedUnits} ${selectedProduct.unit} e margem potencial de até ${tier.margin}%. Quero receber uma proposta de revenda para o meu negócio.`;

  return (
    <div className="reseller-calculator">
      <div className="kit-selector-heading">
        <div>
          <span>01</span>
          <p>Escolha seu ponto de partida</p>
          <strong>Qual produto você quer colocar para vender?</strong>
        </div>
        <small>Escolha uma categoria. A quantidade, o ticket e a projeção financeira mudam com a sua escolha.</small>
      </div>

      <div className="calculator-product-options" role="radiogroup" aria-label="Produtos para simulação">
        {resellerProducts.map((product) => {
          const isSelected = product.id === selectedProduct.id;
          return (
            <div key={product.id} className={`calculator-product-option ${isSelected ? "is-selected" : ""}`}>
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelectedProductId(product.id)}
              >
                <span className="product-option-image" aria-hidden="true">
                  <Image src={product.image} alt="" width={1000} height={1000} sizes="(max-width: 640px) 40vw, 140px" />
                </span>
                <span className="product-option-copy">
                  <span>{product.eyebrow}</span>
                  <strong>{product.name}</strong>
                  <small>{product.description}</small>
                </span>
                <i aria-hidden="true">{isSelected ? <Check /> : null}</i>
              </button>
              <span className="product-option-status" aria-hidden="true">
                {isSelected ? "Produto selecionado" : "Selecionar para simular"}
              </span>
            </div>
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

          <WhatsAppLink className="button button-dark calculator-whatsapp" intent="simulador-revenda" message={message} phone={RESELLER_WHATSAPP}>
            <MessageCircle size={19} aria-hidden="true" />
            Quero uma proposta com este mix
            <ArrowRight size={18} aria-hidden="true" />
          </WhatsAppLink>
        </div>

        <div className="calculator-results" aria-live="polite">
          <p>Projeção para {selectedProduct.name}</p>
          <div className="calculator-kit-result">
            <div className="calculator-result-product" aria-hidden="true"><Image src={selectedProduct.image} alt="" width={1000} height={1000} sizes="145px" /></div>
            <div>
              <span>Com este valor, você pode formar aproximadamente</span>
              <strong>{estimatedUnits} <small>{selectedProduct.unit}</small></strong>
            </div>
          </div>
          <div className="calculator-margin">
            <span>Margem potencial de até</span>
            <strong>{tier.margin}%</strong>
          </div>
          <dl>
            <div>
              <dt>Ticket estimado por {selectedProduct.ticketLabel}</dt>
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
