"use client";

import { ArrowRight, MessageCircle, TrendingUp } from "lucide-react";
import { useState, type CSSProperties } from "react";
import { WhatsAppLink } from "./whatsapp-link";

const MIN_INVESTMENT = 1500;
const MAX_INVESTMENT = 10000;

const tiers = [
  { min: 1500, margin: 30, name: "Entrada profissional" },
  { min: 3000, margin: 40, name: "Crescimento" },
  { min: 5000, margin: 50, name: "Máxima oportunidade" },
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
  const tier = getTier(investment);
  const projectedRevenue = investment * (1 + tier.margin / 100);
  const projectedProfit = projectedRevenue - investment;
  const rangeProgress = ((investment - MIN_INVESTMENT) / (MAX_INVESTMENT - MIN_INVESTMENT)) * 100;
  const nextTier = tiers.find((item) => item.min > investment);
  const amountToNextTier = nextTier ? nextTier.min - investment : 0;
  const message = `Olá! Fiz uma simulação na LP de revenda Slimcap com investimento de ${currency.format(investment)} e margem potencial de até ${tier.margin}%. Quero entender o melhor mix para o meu negócio.`;

  return (
    <div className="reseller-calculator">
      <div className="calculator-controls">
        <div className="calculator-label-row">
          <div>
            <span>Compra mensal simulada</span>
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
            <>
              Faltam <strong>{currency.format(amountToNextTier)}</strong> para liberar potencial de até {nextTier.margin}%.
            </>
          ) : (
            <>
              Você alcançou a <strong>faixa máxima de oportunidade</strong> da simulação.
            </>
          )}
        </div>

        <WhatsAppLink className="button button-dark calculator-whatsapp" intent="simulador-revenda" message={message}>
          <MessageCircle size={19} aria-hidden="true" />
          Receber uma proposta para este valor
          <ArrowRight size={18} aria-hidden="true" />
        </WhatsAppLink>
      </div>

      <div className="calculator-results" aria-live="polite">
        <p>Potencial da sua operação</p>
        <div className="calculator-margin">
          <span>Margem potencial de até</span>
          <strong>{tier.margin}%</strong>
        </div>
        <dl>
          <div>
            <dt>Faturamento potencial</dt>
            <dd>{currency.format(projectedRevenue)}</dd>
          </div>
          <div>
            <dt>Lucro bruto potencial</dt>
            <dd>{currency.format(projectedProfit)}</dd>
          </div>
        </dl>
        <small>
          Simulação comercial ilustrativa baseada na margem máxima da faixa. O resultado real varia conforme mix,
          preço praticado, canal e negociação.
        </small>
      </div>
    </div>
  );
}
