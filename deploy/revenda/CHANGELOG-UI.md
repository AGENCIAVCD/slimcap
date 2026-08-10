# CHANGELOG-UI — Refinamento visual Slimcapilar

**Branch:** `refinamento-ui` (12 commits sobre `main@2d11035`) · **Escopo:** Fases 2–5 do plano aprovado na `AUDITORIA-UI.md`
**Regra respeitada:** nenhuma seção nova, nenhuma feature nova além das costuras aprovadas, nenhuma dependência nova.

**Decisões do cliente registradas:** simulador assado com Anti-Queda × 24 × 40% · stats do hero 2×2 no mobile · menu mobile simples autorizado · texto único "Chamar no WhatsApp".

---

## Fundação (Fase 2)

| Mudança | Justificativa (1 linha) |
|---|---|
| Tokens de cor por função (`--bg`, `--surface`, `--ink`, `--ink-soft`, `--brand`, `--brand-strong`, `--accent` + derivados); 111 valores → 21 tokens + `color-mix`/rgba | consistência |
| `--ink-soft` #66736c → #5c6963 | credibilidade/acessibilidade — corrige o único FAIL AA (4,32:1 → ≥5:1 sobre surface-2) |
| Escala tipográfica: 33 tamanhos → 8 tokens (12/14/16/18/22/28 + h2 + h1 fluidos, redefinidos por breakpoint) | hierarquia |
| h2 unificado (máx 52px) < h1 (máx 70px) — antes o h2 do "Como funciona" chegava a 74px | hierarquia — título de seção não supera mais o da página |
| Pesos de fonte: 400/700/900 (era 400–900 com 850 inexistente); Google Fonts deixa de baixar 500/600/800 | consistência + performance |
| Espaçamento em escala 4/8pt (`--s-1`…`--s-10`); ritmo vertical único `--section-y: clamp(64px, 9vw, 104px)` em todas as seções (hero compacto deliberado, é a dobra) | consistência |
| 2 raios (8px controles/cards, 24px destaque) + pill; elimina 7px/12px/16px/18px/28px dispersos | consistência |
| 2 elevações (`--shadow-sm`/`--shadow-lg`) + `--shadow-brand` para o CTA primário | consistência |
| Motion: 150ms micro / 300ms entrada, 1 easing, `prefers-reduced-motion` global (inclui scroll suave e reveals — antes só os floats respeitavam) | acessibilidade |
| ~150 linhas de CSS morto removidas (hero v1 sobrescrito, `.featured-product`, `.margin-badge`, `.visual-note`, `.channel-pill`, keyframe órfão, duplicatas) | consistência — arquivo de 2.017 → 1.9xx linhas com mais recursos |
| `:focus-visible` customizado global + variante para painel escuro | acessibilidade |
| Skip-link "Pular para o conteúdo" | acessibilidade |
| `scroll-padding-top` compensa o header sticky nas âncoras | clareza — seções não somem mais sob o header |

## Assets (commit `perf(assets)`)

| Mudança | Justificativa |
|---|---|
| Hero: PNG 1.665KB → WebP **93KB** (mesmos 1254×1254), `fetchpriority="high"` + `width/height` | conversão — LCP ~18× mais leve, zero CLS |
| 6 imagens do catálogo: fundo branco único, conteúdo normalizado (altura 160px em canvas 192×192, cobre 2× do slot de 96px), WebP ~2KB cada | credibilidade — linha percebida como única |
| Renomeação kebab-case sem espaços (`assets/`, `assets/produtos/…`); fim dos `%20` nas URLs | robustez |
| Removidos: 4 imagens de produto sem uso, webp órfão da raiz, PNG original do hero | performance/manutenção |
| `og-cover.jpg` 1200×630 gerado do hero | credibilidade — preview rico ao compartilhar o link no WhatsApp |
| `loading="lazy"` + dimensões explícitas em toda imagem abaixo da dobra | performance (CLS = 0) |

## Setores (Fase 3 — 1 commit cada)

| Setor | Mudança | Justificativa |
|---|---|---|
| Header | CTA vira o único botão cheio, com ícone WhatsApp e texto unificado; ganha fundo sólido + sombra e altura 76→64px ao rolar | conversão + clareza |
| Header | Scroll-spy discreto (sublinha + cor no link da seção visível) | clareza |
| Header | Menu mobile: hambúrguer 44×44, painel com as mesmas 5 âncoras, `aria-expanded`, Esc fecha — antes não havia navegação nenhuma ≤960px | acessibilidade (autorizado) |
| Hero | CTA primário ganha ícone WhatsApp (tinha gráfico) e o secundário ganha calculadora (tinha caixa) | clareza — ícone diz o que o botão faz |
| Hero | Stats em faixa disciplinada com números tabulares; **voltam a existir no mobile em 2×2** (estavam `display:none`) | credibilidade |
| Hero | Cards de vidro: fim do loop infinito de 7,8s; mantêm hover/parallax; continuam ocultos no mobile | clareza — nada compete com o CTA |
| Como funciona | Numeração 01–04 agora é exclusiva desta seção; conectores mantidos; reveal com stagger de 70ms (uma vez só) | hierarquia |
| Quem compra | Cada card ganha "Iniciar cadastro →" com área clicável total, pré-selecionando o perfil no formulário (costura de feature existente) | conversão |
| Catálogo | Cards com hover único (elevação), nome/descrição em hierarquia clara, descrição 14px AA | credibilidade |
| Simulador | Carrega com resultado assado no markup: **R$ 3.704,64** (nunca mais R$ 0,00, nem sem JS) | conversão — elemento-assinatura abre provando valor |
| Simulador | Breakdown vivo: lucro grande tabular + linhas Faturamento/Custo; contagem animada de 300ms (respeita reduced-motion) | credibilidade |
| Simulador | Botões de margem viram segmented control com estado selecionado inequívoco + hover/focus | clareza |
| Simulador | Novo CTA "Chamar no WhatsApp com esta simulação" — mensagem leva kit, quantidade, margem, lucro, faturamento e custo | conversão — a simulação vira a abertura da conversa comercial |
| Simulador | "Margem desejada" vira `fieldset/legend`; quantidade exibida em `<output for>`; disclaimer discreto no painel | acessibilidade |
| Simulador | Passos comerciais 01–03 viram ícones temáticos (perfil/mix/negociação) — dispositivo numerado não se repete mais | hierarquia |
| Cadastro | Agrupamento lógico: identificação (nome/WhatsApp) → contato (e-mail/empresa) → contexto (perfil/cidade) → interesse | clareza |
| Cadastro | Validação inline no blur com mensagens específicas ("Informe um WhatsApp com DDD (ex.: 19 98844-2477)."), `aria-invalid` + `aria-describedby` | conversão |
| Cadastro | `autocomplete` completo (name/tel/email/organization/address-level2) + `inputmode` no telefone | conversão mobile |
| Cadastro | Submit com loading ("Abrindo o WhatsApp…", `aria-busy`) e status que explica o que aconteceu; dados **não são mais apagados** antes de o WhatsApp abrir | conversão — popup bloqueado não destrói o preenchimento |
| FAQ | Um item aberto por vez; ícone "+" rotaciona 45°; linha inteira clicável; foco visível | consistência |
| Footer | Consolidado: marca + frase de autoridade / navegação âncora / © + crédito Você Digital; contrastes AA mantidos (9,4:1 e 11,7:1) | credibilidade |
| Sticky mobile | Verde próprio #117a49 → token `--brand`; texto unificado | consistência |
| Voz | "Chamar no WhatsApp" em 100% das ocorrências (header, hero, form, sticky; simulador usa a variante contextual definida no briefing) | conversão |

## Qualidade transversal (Fase 4)

| Mudança | Justificativa |
|---|---|
| `meta description`, `canonical`, `theme-color`, Open Graph completo + `twitter:card` | credibilidade — link compartilhado no WhatsApp com preview de título, descrição e imagem |
| Responsivo: catálogo 2 colunas no mobile (cards verticais), simulador acima dos passos no empilhamento, margem 2×2, footer empilhado | clareza mobile |
| Corrigido `.container` ≤520px com `margin-left` fixo que desalinhava o conteúdo em 420–520px | consistência |
| Contraste AA: todos os pares medidos ≥4,5:1 (texto) ou ≥3:1 (ícones grandes) | acessibilidade |

---

## Checklist final (com evidência)

- [x] **Zero hex hardcoded fora dos tokens** — grep no CSS: `ZERO` (únicos literais: 2 `font-weight:900` exigidos pelos glifos Font Awesome; `#fbfaf6` no `theme-color` é meta HTML, não CSS)
- [x] **≤ 8 tamanhos de fonte em uso real** — grep: exatamente 8 (`--fs-xs/sm/md/lg/xl/2xl/h2/h1`)
- [x] **Espaçamento vertical entre seções idêntico** — `--section-y` única em todas as `section` (hero compacto documentado como exceção deliberada de dobra)
- [x] **Simulador carrega com resultado calculado** — markup: `R$ 3.704,64 · Faturamento R$ 12.966,24 · Custo R$ 9.261,60` (JS confere os mesmos valores no init, sem animação no load)
- [x] **6 imagens do catálogo com fundo/proporção padronizados** — 192×192, fundo #fff, conteúdo a 160px de altura, WebP
- [x] **Todos os interativos com hover + focus-visible + active** — `:focus-visible` global (3px `--brand-bright`), hovers em nav/btn/margin-btn/sku/buyer/summary/footer, `.btn:active`
- [x] **Formulário com validação inline e estados completos** — blur + input, mensagens específicas, `aria-invalid/aria-describedby`, loading, status, disabled
- [x] **Zero px solto em padding/margin/gap** — grep: nenhum fora da escala
- [x] **JS íntegro** — `node --check` OK; todos os IDs referenciados existem no HTML
- [x] **CLS = 0 estrutural** — `width/height` em 100% das `<img>` + `aspect-ratio` no hero
- [ ] **Lighthouse ≥ 90/95** — pendente: requer o preview deployado (sem browser neste ambiente); base favorável: −1,6MB no LCP, 3 pesos de fonte, lazy abaixo da dobra
- [x] **Nenhuma seção nova, feature nova ou dependência nova** — menu mobile e links dos cards foram autorizados como acessibilidade/costura; zero bibliotecas adicionadas

## Pendências e notas

1. **QA visual/Lighthouse:** rodar no preview da Vercel após push da branch (o Chrome local não abre `file://`). Os screenshots `check-*.png` da raiz continuam como referência do "antes".
2. **Font Awesome mantido** via CDN (decisão de risco: trocar ~22 ícones + 2 glifos em pseudo-elemento por SVG inline seria reescrita, não refinamento). Ganho já capturado ao cortar 3 pesos da Inter.
3. `canonical`/OG apontam para `slimcap.vercel.app` — atualizar quando houver domínio próprio.
4. Copy "10 SKUs" no hero vs 6 no catálogo: registrado na auditoria, sem ação (fora de escopo visual).
