# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site estático do **Hotel Boutique Bahia Bonita** em Trancoso, Bahia. Construído com HTML5, CSS3 e JavaScript vanilla puro — sem build tools, sem frameworks. Deploy em qualquer host estático (GitHub Pages, Netlify, Vercel). O site foi recriado a partir de um export WordPress/Elementor do site original (bahiabonita.com.br), mantendo o conteúdo e a identidade visual mas com código limpo e manutenível, adicionando o sistema de blog automático da Komplexa Hotéis.

## Development

```bash
npx serve . -p 8000
```

Não há testes nem linting configurados.

---

## Hotel Boutique Bahia Bonita — Dados de Referência

| Campo | Valor |
|---|---|
| Nome | Hotel Boutique Bahia Bonita |
| Razão Social | Bahia Bonita Quadrado Hospedagens LTDA |
| CNPJ | 29.073.818/0001-16 |
| Endereço | Rua Bom Jesus, 196 — Trancoso, Porto Seguro – BA, 45818-000 |
| Coordenadas | -16.5897, -39.0947 |
| Telefone | (73) 3668-1658 |
| WhatsApp | (73) 98801-7764 / 5573988017764 |
| Email | contato@bahiabonita.com.br |
| Instagram | @bahiabonitatrancoso |
| TripAdvisor | Hotel_Boutique_Bahia_Bonita-Trancoso_Porto_Seguro |
| Domínio | https://bahiabonita.com.br |
| Localização | 100m do Quadrado, 400m da praia |
| Motor de Reservas | OceanBook / Omnibees (Hotel ID: 6588) |
| Tagline | "Autenticidade que não se compra, se vive." |
| Tom de voz | Sofisticado e acolhedor, natureza como protagonista, exclusivo sem ser esnobe |

### Suítes do Hotel (7 categorias)

| Suíte | Slug | Capacidade | Área | Destaques |
|---|---|---|---|---|
| Suíte Luxo Térreo com Varanda | suite-luxo-terreo-com-varanda | 4 | 65m² | Térreo, varanda, rede, closet, vista jardim |
| Suíte Luxo Superior com Varanda | suite-luxo-superior | 2 | 65m² | Andar superior, varanda, rede, closet, vista jardim |
| Suíte Master com Vista Mar | suite-master | 4 | 70m² | Vista mar, varanda ampla, chuveiro duplo |
| Suíte com Hidromassagem e Vista Mar | suite-diamante-trancoso | 5 | 90m² | Banheira, hidromassagem, vista piscina e mar |
| Duplex com Hidromassagem Vista Mar | suite-duplex-com-hidromassagem | 4 | 110m² | Duplex, 2 banheiros, hidromassagem, vista piscina e mar |
| Suíte com Piscina Aquecida Vista Mar | suite-master-com-piscina-privativa | 4 | 135m² | Piscina borda infinita, jacuzzi aquecida, terraço |
| Bangalô com Piscina Privativa e Jacuzzi | bangalo-master | 3 | 135m² | Piscina privativa, jacuzzi, área de estar independente |

### Casas Exclusivas (5 unidades)

| Casa | Slug | Capacidade | Área | Destaques |
|---|---|---|---|---|
| Casa Tupã | casa-tupa | 8 | 200m² | 4 suítes king, piscina privativa, jacuzzi |
| Casa Yara | casa-yara | 6 | 155m² | 3 suítes king, piscina, mosquiteiros dossel |
| Casa Mangará | casa-mangara-trancoso | 6 | 140m² | 3 suítes king, piscina-jacuzzi no terraço |
| Casa Jaci | casa-jaci-trancoso | 4 | 100m² | 2 suítes king, piscina privativa, próximo ao Rio Trancoso |
| Casa Yakã | casa-yaka | 4 | 140m² | 2 suítes king, jacuzzi no terraço |

**Serviços inclusos nas casas:** Transfer diário ao hotel, abertura de cama, limpeza diária, café da manhã (servido no hotel até 13h ou entregue na casa).

### Experiências / Serviços

1. **Café da Manhã Artesanal** — servido até 13h, no hotel ou entregue na casa
2. **Chá da Tarde Completo** — servido no hotel
3. **Passeios para as Praias** — tours guiados (Nativos, Coqueiros, Espelho), concierge
4. **Reservas em Restaurantes** — curadoria e recomendações do Quadrado e arredores
5. **Serviços de Transfer** — transfers diários e traslado aeroporto Porto Seguro–Trancoso

---

## Design System & Layout

### Design Tokens (`:root` em `assets/css/style.css`)

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#6CC2C4` | Teal primário — botões, dividers, destaques |
| `--accent-hover` | `#5AB0B2` | Hover do teal |
| `--cta` | `#C99F75` | Dourado/marrom — botões CTA, badges |
| `--cta-hover` | `#A8835E` | Hover do dourado |
| `--bg` | `#FFF8F2` | Fundo principal (creme claro) |
| `--surface` | `#FDFAF7` | Cards, formulários |
| `--surface-light` | `#FFF0E2` | Seções de destaque (dobra casas) |
| `--text` | `#29393A` | Texto principal / fundo dark sections |
| `--text-muted` | `#6B7A7B` | Texto secundário |
| `--font-display` | `Fraunces`, serif | Headings (weight 300) |
| `--font-body` | `Nunito Sans`, sans-serif | Corpo (weight 200-400) |

### Header / Menu (padrão para todas as páginas)

```
Logo (assets/img/logo-branco.svg, 60px) | Nav | Botão "Reservar agora" (pill branco)
```

**Nav items:** Início, Bahia Bonita Casas ▾ (dropdown 5 casas), Hotel Boutique ▾ (dropdown 7 suítes), Experiências, Galeria, Contato

- **Home:** `class="hdr hero-mode"` (transparente sobre hero)
- **Subpáginas com hero:** `class="hdr hero-mode"` sobre `.page-top-hero` (faixa fina 88px com foto + overlay)
- **Experiências:** hero full-screen com overlay
- **Scroll:** header transiciona para fundo `#C99F75` (dourado), logo/texto permanecem brancos, botão "Reservar agora" permanece branco

### Padrão de Início de Página (subpáginas)

1. **Page top hero** (`.page-top-hero`) — faixa fina com imagem + overlay escuro + animação scale
2. **Intro section** (`.intro-section`) — logo SVG centralizado com linhas teal horizontais dos dois lados (`.intro-logo-row`), opcionalmente com overline + heading
3. **Blocos de conteúdo** usando `.ab-grid` (foto esquerda + texto direita ou vice-versa)

### Blocos de Conteúdo Alternados (`.ab-grid`)

Grid 2 colunas com `gap:clamp(3rem,6vw,6rem)`, `.ab-img` (max-width 320px, height auto) e `.ab-txt` (max-width 340px). Usado em múltiplas páginas para criar blocos foto+texto com muito respiro.

### Carousels de Acomodação (`.casas-carousel`)

Layout com 2 colunas: card de texto (340px) + thumbnails afuniladas (flex row). Thumbnails inativos são strips verticais estreitos (38px, border-radius pill 60px, overlay escuro 65%). Thumb ativo expande para 520px fixo com border-radius 8px. Autoplay 5 segundos. Card mostra: título, descrição, features (badges teal), botão pill "Conhecer casa/suíte", navegação (setas + contador 01-05 ou 01-07).

### Footer (padrão para todas as páginas)

```
ft-logo-center: Logo SVG branco centralizado + tagline + social icons (Instagram/WhatsApp)
───────────────────
ft-grid (3 colunas): Sobre o Hotel | Contatos | Legal
ft-bottom: Copyright + crédito Komplexa Hotéis
```

### CTA Final (todas as páginas exceto contato)

Seção `.final-cta` com imagem de fundo (suite-master/01.jpg) + overlay escuro + logo branca + heading "Trancoso está esperando por você. Reserve sua experiência." + botão pill com borda branca "Reservar agora".

### Seções Especiais da Home

- **Hero:** fullscreen com animação scale 14s, overlay rgba(20,25,15,.75), título "Sua história em Trancoso começa aqui", booking widget OceanBook/Omnibees (pill branco com 4 campos + botão laranja "PESQUISAR")
- **Intro:** logo + dividers + "Descubra o paraíso" + "Como você prefere viver Trancoso?" + 2 botões (Casas teal / Suítes gold)
- **Blocos alternados:** imagem+texto com muito respiro
- **Split-bg:** transição de cor com foto pequena sobreposta
- **Casas carousel + Suítes carousel**
- **Dark section** (fundo `--text`): "Experiências que completam o cenário" com 3 cards de experiências
- **Reviews:** selos TripAdvisor (2020, 2021, 2022, 2024 em `assets/img/icons/`)
- **Amenidades:** grid 4x3 com ícones SVG line-art inline

---

## Architecture

### Page Structure

```
/index.html                              — Home
/hotel-boutique-suites/                   — Listagem suítes (carousel)
/suite-master/                            — Suíte Master (70m²)
/suite-master-com-piscina-privativa/      — Suíte Master c/ Piscina (135m²)
/suite-luxo-superior/                     — Suíte Luxo Superior (65m²)
/suite-luxo-terreo-com-varanda/           — Suíte Luxo Térreo (65m²)
/suite-diamante-trancoso/                 — Suíte Diamante (90m²)
/suite-duplex-com-hidromassagem/          — Duplex c/ Hidromassagem (110m²)
/bangalo-master/                          — Bangalô Master (135m²)
/bahia-bonita-casas/                      — Listagem casas (carousel)
/casa-tupa/                               — Casa Tupã (200m²)
/casa-yara/                               — Casa Yara (155m²)
/casa-mangara-trancoso/                   — Casa Mangará (140m²)
/casa-jaci-trancoso/                      — Casa Jaci (100m²)
/casa-yaka/                               — Casa Yakã (140m²)
/experiencias/                            — Experiências (hero full + blocos alternados)
/galeria/                                 — Galeria (lightbox + filtros)
/contato/                                 — Contato (formulário + mapa + dados)
/blog/                                    — Listagem de posts
/blog/{slug}/                             — Posts individuais
/termos-e-condicoes/                      — Termos e Condições
/cookie-policy-br/                        — Política de Cookies
```

### Single CSS: `assets/css/style.css`

Todas as estilizações em um arquivo. Design tokens via CSS custom properties. Breakpoints: 1024px, 768px, 480px. Espaçamento fluido com `clamp()`. Classes `.compact` reduzem padding em 25%. `@media(prefers-reduced-motion:reduce)` desabilita animações.

### Single JS: `assets/js/main.js`

Constantes: `WEBHOOK_URL`, `HOTEL_NAME`, `WA_NUMBER`. Sistemas: GTM dataLayer (`pushLead`), webhook (`sendToWebhook`), header scroll (hero-mode → solid #C99F75), mobile menu com dropdowns (`.mob-dropdown-toggle`), lazy load (IntersectionObserver), cookie banner, filtros de galeria (`filterGal`), lightbox (`openLB/closeLB/navLB`), formulário de contato.

### External Integrations

- **OceanBook/Omnibees** (Hotel ID 6588) — booking widget com Flatpickr, carregado dinamicamente via `<template>` + JS na home
- **Google Maps** — iframe embed na página de contato (busca: "Hotel Boutique Bahia Bonita Trancoso")
- **WhatsApp** — botão flutuante + links wa.me/5573988017764 com mensagem "Tenho interesse"
- **TripAdvisor** — selos 2020-2024 em assets/img/icons/

---

## Blog System

### Structure

```
/blog/
  index.html                    — Listagem (grid vazio, pronto para posts)
  _template/
    index.html                  — Template com marcadores %%PLACEHOLDER%%
  {slug}/
    index.html                  — Post individual
```

### Creating a New Blog Post

1. Ler `blog-plan.json` → próximo item de `upcoming` com `target_date` ≤ hoje
2. Ler `hotel-config.json` → contexto, tom, keywords
3. Copiar `blog/_template/index.html` → `blog/{slug}/index.html`
4. Substituir: `%%POST_TITLE%%`, `%%META_DESCRIPTION%%`, `%%SLUG%%`, `%%ISO_DATE%%`, `%%DISPLAY_DATE%%`, `%%PILLAR%%`, `%%CONTENT_START%%`/`%%CONTENT_END%%`, `%%RELATED_POSTS%%`
5. Conteúdo: 800-1200 palavras, intro + 3-5 seções H2 + 2+ links internos + CTA box
6. Atualizar `blog/index.html` (adicionar card ao grid)
7. Atualizar `sitemap.xml`
8. Mover post de `upcoming` para `published` no `blog-plan.json`
9. `git add` → `git commit` → `git push`

### Blog SEO Checklist

- `<title>` formato: `{Título} | Blog Hotel Boutique Bahia Bonita`
- `<meta name="description">` ≤ 155 chars
- Canonical, OG tags, `article:published_time`
- Schema.org `BlogPosting` + `BreadcrumbList` (Início → Blog → Post)
- Único `<h1>`, H2 por seção, 2+ links internos, CTA box

### Remote Agent (Schedule)

- **Frequência:** terça e sexta
- **Prompt:** "Read blog-plan.json. If there is an upcoming post with target_date ≤ today, generate it following the blog post creation instructions in CLAUDE.md."
- Quando `upcoming` ≤ 2 itens, gerar 6 novos tópicos baseados em pilares: Destino, Experiência, Cultura, Dicas práticas

---

## Configuration Files

### `hotel-config.json`

Config central com dados do hotel, contato, endereço, coordenadas, suítes (7), casas (5), experiências (5), integrações (webhook, GTM, OceanBook), design tokens e configurações do blog.

### `blog-plan.json`

Estratégia editorial: tom sofisticado e acolhedor, 4 pilares (Destino, Experiência, Cultura, Dicas práticas), regras SEO, template de post, posts publicados e planejados.

## Conventions

- HTML semântico com class names curtos (`.cb` content block, `.ab-grid` about grid, `.cc-card` carousel card, `.rc` room card, `.gi` gallery item)
- Data attributes controlam JS: `data-cat` nos gallery items
- Modais: toggle de `.open` com `body.style.overflow='hidden'`
- Formulários: prevent default → webhook → ação UI
- Idioma: Português Brasileiro
- Cor do fundo padrão: `#FFF8F2`, seção casas: `#FFF0E2`, seção suítes: `#fff`
- Botões pill arredondados com `border-radius:50px`
- Headings em Fraunces weight 300 (serif elegante)
