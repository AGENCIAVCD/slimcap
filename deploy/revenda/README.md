# Slimcap

Site institucional da Slimcap, blog e landing page B2B para clínicas,
revendedores e distribuidores.

## Stack

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- `next/image` e `next/font`
- Google Tag Manager (`GTM-NWPH76JL`)

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Produção

```bash
npm run build
npm start
```

## Blog

O conteúdo publicado no WordPress atual pode ser trazido para este projeto com:

```bash
npm run blog:sync
```

O comando importa todos os artigos, categorias e capas do WordPress, otimiza as
capas em WebP e atualiza `content/blog-posts.json`. Depois da sincronização,
revise localmente e publique uma nova versão do site.

Enquanto o WordPress atual estiver ativo, o fluxo editorial é:

1. Criar ou editar o artigo no painel do WordPress.
2. Definir a imagem destacada e a categoria.
3. Executar `npm run blog:sync` neste projeto.
4. Executar `npm run build` para validar o conteúdo.
5. Fazer o deploy da nova versão.

## Canais de contato

- Clínica: `+55 19 98830-3434`
- Revenda e distribuição: `+55 11 95261-6077`

Os cliques em WhatsApp registram o evento `clique_whatsapp` no `dataLayer`.
