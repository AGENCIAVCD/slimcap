# AUDITORIA-UI — Landing Slimcapilar

**Página:** https://slimcap.vercel.app/ · **Fonte auditada:** `index.html` (2.017 linhas, CSS/JS inline), commit `2d11035` em `main`
**Paridade:** conteúdo do deploy confere com o arquivo local (fetch em 10/07/2026). Nenhum código foi alterado nesta fase.
**Método:** leitura integral do código + extração quantitativa (grep/contagem) + cálculo de contraste WCAG + inspeção dos assets (dimensões/peso reais).

---

## 1.1 Inventário de setores

| Setor | Linhas (HTML) | Composição | Estados existentes |
|---|---|---|---|
| Barra superior (referral) | 1534–1539 | Oculta por padrão; aparece com `?ref/utm_*` e injeta texto (via `textContent`, seguro) | show/hide |
| Header | 1541–1555 | Logo, nav 5 âncoras, CTA "Falar no WhatsApp" | hover na nav; **sem** estado ao rolar, sem scroll-spy, sem menu mobile |
| Hero | 1558–1606 | Eyebrow-pill, h1, subhead, 2 CTAs (com sublinha cada), 3 chips de confiança, 4 stat-cards, imagem, 3 cards flutuantes de vidro | hover+parallax nos floats; animação infinita 7,8s |
| Como funciona | 1608–1650 | Kicker, h2, lead, 4 passos numerados 01–04 com setas conectoras | reveal no scroll |
| Quem compra | 1652–1680 | 3 cards de canal unidos por borda | nenhum (cards inertes, não linkam) |
| Catálogo | 1682–1717 | Copy sticky + 6 cards de SKU (img 96px + nome + papel comercial) | hover (elevação -2px + bg) |
| Margens + Simulador | 1719–1782 | 3 passos numerados 01–03 + painel escuro: select de kit, range 5–120, 4 botões de margem, resultado `aria-live` | `aria-pressed` nos botões; focus só nos inputs |
| Cadastro comercial | 1784–1847 | 3 notes de apoio (coluna esq.) + form 6 campos + textarea + submit | focus nos campos; status pós-envio genérico |
| FAQ | 1849–1875 | 4 `details/summary`, primeiro aberto; ícone +/− | nativo; múltiplos abertos simultâneos |
| Sticky WhatsApp (mobile) | 1878–1880 | Barra fixa inferior ≤640px | sem hover/active |
| Footer | 1882–1889 | Logo, frase 40+ anos, ©, crédito Você Digital | hover no link |
| JS | 1891–2015 | wa.me builder, GTM push, simulador, reveal observer, parallax, submit→WhatsApp | — |

**Estados ausentes em toda a página:** `:focus-visible` customizado (zero ocorrências), `:active`, `disabled`, loading no submit, validação de campo com mensagem própria (só a nativa do navegador; o token `--danger` existe na l.24 e nunca é usado).

---

## 1.2 Inconsistências por categoria

### A. Cores — 38 hex + 73 rgba() distintos = 111 valores; só 11 tokens no `:root`

- **10 verdes de verdade:** `#146b43` (--green), `#0f5d39` (hover l.178), `#117a49` (**sticky WhatsApp, verde próprio**, l.1185), `#0b3d28`, `#083722` (l.830), `#64c994` (range l.1016), `#c9ead8`, `#e8f4ee` + 2 em CSS morto (`#103d2a`, `#0c2b1e`).
- **8 cremes de fundo vivos** para ~3 papéis: `#fbfaf6`, `#f3efe6`, `#fbf6e9`, `#f7efe0`, `#fffdf7`, `#fbf6eb`, `#fff8e8`, `#fffdf8`.
- **4 tintas de texto escuro** para o mesmo papel: `#18221d` (--ink), `#3d4a42` (nav), `#43544b` (hero-text), `#40524a` (assurance).
- **Família dourada dispersa sem token:** `--gold #b88634` existe, mas `#e8c777`, `#f4deb0`, `#fff4d4`, `#fff8df`, `#f2d185`, `#fff3cf` estão soltos.
- Não existe verde-WhatsApp oficial na página (todos os CTAs usam verde-marca). Recomendo **manter** assim — 1 cor de ação única — em vez de introduzir cor nova.

### B. Tipografia — 33 tamanhos distintos (meta: 6–8)

- 17 tamanhos em px (10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 22, 24, 27, 28, 31, 35, 58) + 16 `clamp()` diferentes.
- **Hierarquia invertida:** h2 do "Como funciona" chega a 74px (l.760) > h1 do hero, máx. 70px (l.380). O título de seção supera o título da página em desktop largo.
- `font-weight: 850` usado 2× (l.168, l.1154) — peso não carregado (Google Fonts traz 400–900 estáticos); o navegador arredonda para 900. Pesos 500 e 600 são **carregados e nunca usados** (l.10).
- Nenhum `font-variant-numeric: tabular-nums` nos números do simulador/stats — o resultado "salta" de largura ao mudar valores.
- 14+ line-heights ad hoc (.92, .94, .98, 1, 1.1, 1.15, 1.25, 1.35, 1.4, 1.42, 1.45, 1.48, 1.5, 1.55).

### C. Espaçamento — sem escala; ritmo vertical desigual

- Valores fora de 4/8pt: gap 9px (l.82), padding `0 13px` (inputs l.995), 26px, 34px, 42px, 46px, 54px, `margin-bottom: 58px` (l.857), 62px, 78px, 94px, `top: 104px` (l.886).
- Padding vertical por seção: hero 34px (l.339) · como-funciona 78/94px (l.713) · demais 84px (l.671) · footer 34px. Mobile: 62 vs 58/74. **Nenhum ritmo comum.**
- `.container` ≤520px: `max-width: 362px + margin-left: 14px` fixo (l.1497–1503) → conteúdo desalinhado (fora de centro) em viewports de 420–520px.

### D. Raios e sombras

- Raios: token 8px dominante ✓, mas 7px no badge do passo (l.828), 12px (hero-float), 16px e 18px (mobile), 28px (hero-visual), 999px (eyebrow) → **7 valores para os 2 papéis previstos** (controles/cards).
- Sombras: **23 declarações, ≥12 receitas vivas distintas.** Cards do mesmo nível divergem: proof `0 14px 34px` vs flow-step `0 20px 58px` vs sku **sem sombra**. O token `--shadow` é usado só 2× (calculadora e form).

### E. Botões — o CTA de WhatsApp tem 4 encarnações

| Ocorrência | Altura | Ícone | Texto | Cor |
|---|---|---|---|---|
| Header (l.1553) | 42px | **fa-arrow-right** | "Falar no WhatsApp" | `--green` |
| Hero (l.1565–68) | 62px | **fa-chart-line** (!) | "Chamar no WhatsApp" | `--green` |
| Form (l.1843) | 52px | fa-whatsapp | "Enviar pelo WhatsApp" | `--green` |
| Sticky (l.1878) | 54px | fa-whatsapp | "Falar no WhatsApp" | **#117a49** |

- Ícones semanticamente trocados no hero: o CTA de WhatsApp ganha ícone de gráfico; "Simular margem" ganha ícone de caixa (l.1570).
- Sem hover: `header-cta`, `margin-btn`, `sticky-whatsapp`.

### F. Estados faltando (consolidado)

Zero `:focus-visible`; zero `:active`; zero loading; validação apenas nativa; `form.reset()` roda imediatamente no submit (l.2012) — apaga os dados antes de o usuário confirmar que o WhatsApp abriu (se o popup for bloqueado, perde tudo).

### G. CSS morto e duplicações (achado não previsto — maior risco de regressão)

- O hero foi redesenhado **por cima** do antigo: l.92–336 contêm a v1 inteira, sobrescrita pela v2 (l.338+). Classes órfãs sem nenhum uso no HTML: `.featured-products/.featured-product` (l.242–284), `.margin-badge` (l.285–307), `.visual-note` (l.308–323), `.channel-pill` (l.324–336), `@keyframes rise` (l.1225).
- `html { overflow-x: hidden }` duplicado (l.30 e 39); `.flow-list` com grid duplicado no media 960 (l.1282–1291).
- **≈150 linhas (~12% do CSS) são peso morto.** Qualquer edição futura corre risco de mexer na definição errada.

---

## 1.3 Veredito das 6 suspeitas

**1. "Simulador inicia em R$ 0,00" — REFUTADA em runtime (procedente só no markup).**
O JS chama `calcularLucro()` no load (l.1958); a página carrega exibindo **R$ 3.704,64** (Kit Anti-Queda R$ 385,90 × 24 × 40%). O R$ 0,00 existe apenas no HTML estático (l.1776–77) — aparece se o JS falhar e para crawlers. Recomendação: assar o cenário default calculado direto no markup (progressive enhancement). **Decisão pendente:** qual cenário default — o prompt sugere Anticaspa × 24 × 30%; o código atual usa Anti-Queda × 24 × 40%.

**2. Imagens do catálogo misturadas — CONFIRMADA.**
1 PNG com fundo transparente (Shampoo Revitalizante) + 5 JPG de fundo branco. Todas 180×180 exibidas a 96px — em telas 2× seriam necessários 192px: **levemente subdimensionadas em retina**. Enquadramentos percebidos diferentes. Padronização de fundo/proporção é viável via container `aspect-ratio` + tratamento das fontes.

**3. Numeração 01/02/03 repetida — CONFIRMADA.**
"Como funciona" usa 01–04 (badge verde quadrado, l.1618+); "Margens" usa 01–03 (número dourado, l.1732+). Mesmo dispositivo estrutural, dois tratamentos — dilui a leitura de processo. Justifica-se manter numeração só no "Como funciona" (sequência real) e tratar os passos comerciais de outra forma.

**4. Nomes de arquivo e otimização — CONFIRMADA (com um ponto crítico).**
`Logo Fundo Transparente .webp` (espaço antes da extensão), pasta `Produtos Slim Capilar/`, prefixos de export (`imgi_N_180_…hash`). Tudo vira `%20` nas URLs. Pesos: produtos OK (3–18KB); **hero é o problema: PNG de 1.665KB, 1254×1254, sem `fetchpriority`, sem dimensões — e é o LCP da página.** Zero `loading="lazy"`, zero `width/height` em `<img>` (o CLS é mitigado por CSS: `aspect-ratio` no hero e tamanho fixo nos SKUs — mas logo do header não tem altura reservada). Extras: 4 imagens de produto commitadas sem uso (aromatizador, esfoliante, hidratante, loção anticaspa), 1 webp órfão na raiz; `check-*.png` já estão no `.gitignore` ✓.

**5. Hero com elementos competindo — CONFIRMADA.**
8 grupos disputam atenção: eyebrow, h1, subhead, 2 CTAs (cada um com 2 linhas), 3 chips, 4 stat-cards, imagem e 3 cards de vidro **animados em loop infinito** ao lado do CTA. Agravante: no mobile as 4 stats são `display: none` (l.1443) — a prova social morre exatamente onde mais se converte. Os floats já são removidos no mobile ✓.

**6. Textos de apoio do formulário — PARCIALMENTE CONFIRMADA.**
Os 3 notes (l.1790–94) estão ancorados à coluna do heading, não soltos; porém "Espaço para informar volume…" descreve o **textarea da outra coluna** sem vínculo visual ou `aria-describedby`, e os notes têm a mesma hierarquia tipográfica do lead. Costura leve resolve.

---

## 1.4 Scores e priorização

### Score por setor (0–10)

| Setor | Hierarquia | Consistência | Credibilidade | Acessibilidade | Média |
|---|:-:|:-:|:-:|:-:|:-:|
| Header + barra | 7 | 6 | 7 | 4 | 6,0 |
| Hero | 5 | 5 | 7 | 6 | 5,8 |
| Como funciona | 7 | 5 | 7 | 6 | 6,3 |
| Quem compra | 7 | 7 | 8 | 7 | 7,3 |
| Catálogo | 7 | 4 | 5 | 5 | **5,3** |
| Margens + Simulador | 7 | 6 | 7 | 5 | 6,3 |
| Cadastro | 7 | 7 | 6 | 5 | 6,3 |
| FAQ | 7 | 7 | 7 | 6 | 6,8 |
| Footer | 6 | 6 | 7 | 8 | 6,8 |
| Estados interativos (global) | — | 4 | 5 | 3 | **4,0** |

Contraste medido: quase tudo passa AA. **Falha real:** `--muted #66736c` sobre `--surface-2 #f3efe6` = **4,32:1** (< 4,5) — afeta descrições dos SKUs (13px) e respostas do FAQ. Dourado `#b88634` sobre creme = 3,18:1 (aceitável só para ícones/elementos grandes).

### Top 15 — maior impacto / menor risco (nada além disto entra sem aprovação)

| # | Mudança | Fase | Justificativa | Risco |
|---|---|:-:|---|:-:|
| 1 | Hero: converter PNG 1,6MB → WebP/AVIF (~10× menor) + `width/height` + `fetchpriority="high"` | 3.2/4 | Performance (LCP) | zero |
| 2 | Simulador: assar cenário default calculado no markup (nunca R$ 0,00) + `tabular-nums` | 3.6 | Conversão + credibilidade | baixo |
| 3 | CTA WhatsApp único: mesmo texto, ícone fa-whatsapp e receita nas 4 ocorrências; sticky `#117a49` → token | 2/3.1 | Conversão + consistência | baixo |
| 4 | "Chamar no WhatsApp com esta simulação": CTA no painel de resultado levando valores na mensagem (costura do JS existente) | 3.6 | Conversão | baixo |
| 5 | `:focus-visible` custom + hover/active em todos os interativos | 2/4 | Acessibilidade | zero |
| 6 | Remover ~150 linhas de CSS morto (hero v1, classes órfãs, duplicatas) | 2 | Consistência/manutenção | zero* |
| 7 | Tokens de cor: 111 valores → 7 tokens funcionais + variantes derivadas | 2 | Consistência (fundação) | baixo |
| 8 | Escala tipográfica: 33 → ≤8 tamanhos; corrigir h2 (74px) > h1 (70px) | 2 | Hierarquia | baixo |
| 9 | Catálogo: padronizar fundo/proporção/enquadramento das 6 imagens + container `aspect-ratio` | 3.5 | Credibilidade | baixo |
| 10 | Renomear assets para kebab-case sem espaço + remover órfãos + atualizar refs | 4 | Robustez/perf | baixo |
| 11 | Hero: disciplinar hierarquia (chips → 1 linha discreta; stats em faixa única; conter animação dos floats) | 3.2 | Clareza | médio |
| 12 | Ritmo vertical único: `--section-y` (hoje 34/78–94/84) | 2 | Consistência | baixo |
| 13 | Form: validação inline no blur + mensagens específicas + `inputmode`/`autocomplete` completos + loading no submit | 3.7 | Conversão | médio |
| 14 | Contraste AA: escurecer `--muted` p/ uso sobre `surface-2`; subir textos de 10–11px | 4 | Acessibilidade | baixo |
| 15 | FAQ: um item aberto por vez, ícone rotacionando, focus-visible | 3.8 | Consistência | zero |

\* com verificação de que nenhuma classe morta é referenciada por GTM/JS externo.

---

## Notas e conflitos — precisam da sua decisão (regra: código real vence)

1. **Default do simulador:** prompt pede Anticaspa × 24 × 30%; código já carrega Anti-Queda × 24 × 40% (R$ 3.704,64). Qual cenário assar no markup?
2. **Stats do hero no mobile:** o código as esconde (`display:none`, l.1443); a Fase 4 do prompt pede 2×2. Reexibir ou manter ocultas?
3. **Menu mobile:** hoje a nav simplesmente some ≤960px (l.1235) — não há menu nenhum. Criar um menu acessível é, a rigor, componente novo. Autoriza?
4. **`form.reset()` prematuro (l.2012):** lógica, não visual — reporto e não mexo sem ok.
5. **Meta description e OG tags ausentes:** link compartilhado no WhatsApp (o canal da página!) rende preview pobre. Head-only, sem UI. Autoriza incluir na Fase 4?
6. **Peso de terceiros:** Font Awesome completo via CDN para ~20 ícones; Inter carrega pesos 500/600 sem uso. Enxugar na Fase 4?
7. `scroll-behavior: smooth` e `.reveal` sem guard de `prefers-reduced-motion` (só os floats têm) — entra na Fase 2 (motion tokens).
8. Copy: hero promete "10 SKUs", catálogo mostra 6 ("catálogo inicial") — só registro, sem ação.
9. Label "Margem desejada" (l.1765) sem controle associado — vira `fieldset/legend` na Fase 3.6.
10. Cards de canal (Quem compra) não linkam para o form com perfil pré-selecionado — costura prevista na Fase 3.4, sem feature nova.

---

**Status: ⛔ parado ao fim da Fase 1, como combinado.** Nenhum código alterado. Aguardo aprovação do Top 15 e das decisões 1–6 para abrir a branch `refinamento-ui` e iniciar a Fase 2.
