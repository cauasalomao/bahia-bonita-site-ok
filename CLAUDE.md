# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Site estático do **Hotel Boutique Bahia Bonita** em Trancoso, Bahia. Construído com HTML5, CSS3 e JavaScript vanilla puro — sem build tools, sem frameworks. Deploy em GitHub Pages (repo: `cauasalomao/bahia-bonita-site-ok`) a partir da branch `main`. O site foi recriado a partir de um export WordPress/Elementor do site original (bahiabonita.com.br), mantendo o conteúdo e a identidade visual mas com código limpo e manutenível, e somando o sistema de blog automático da Komplexa Hotéis.

## Development

```bash
npx serve . -p 8000
```

Não há testes nem linting configurados.

### Image optimization pipeline

Qualquer foto nova que for adicionada ao site passa por `scripts/optimize-images.js` (sharp, max-width 2000px, JPEG quality 82, mozjpeg progressive). Uso:

```bash
node scripts/optimize-images.js assets/img/<pasta>/<arquivo>.jpg
```

Fotos grandes vindas de `assets/img/inserir/` devem ser convertidas/otimizadas antes de entrar no destino final. `assets/img/inserir/` está no `.gitignore` — é staging de trabalho.

### Git / Deploy

Site entra em produção assim que sobe para `main`. Convenções:
- `git add` específico por arquivo/pasta — nunca `-A` (há assets grandes em staging fora do projeto).
- Commits em português, mensagem imperativa curta.
- Trailer obrigatório: `Co-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>`.
- Sempre push para `origin main` após commit (o usuário quer deploy imediato).

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

| Suíte | Slug | Cap. | Área | Destaques |
|---|---|---|---|---|
| Suíte Luxo Térreo com Varanda | suite-luxo-terreo-com-varanda | 4 | 65m² | Térreo, varanda, rede, closet, vista jardim |
| Suíte Luxo Superior com Varanda | suite-luxo-superior | 2 | 65m² | Andar superior, varanda, rede, closet, vista jardim |
| Suíte Master com Vista Mar | suite-master | 4 | 70m² | Vista mar, varanda ampla, chuveiro duplo |
| Suíte com Hidromassagem e Vista Mar | suite-diamante-trancoso | 5 | 90m² | Banheira, hidromassagem, vista piscina e mar |
| Duplex com Hidromassagem Vista Mar | suite-duplex-com-hidromassagem | 4 | 110m² | Duplex, 2 banheiros, hidromassagem, vista piscina e mar |
| Suíte com Piscina Aquecida Vista Mar | suite-master-com-piscina-privativa | 4 | 135m² | Piscina borda infinita, jacuzzi aquecida, terraço |
| Bangalô com Piscina Privativa e Jacuzzi | bangalo-master | 3 | 135m² | Piscina privativa, jacuzzi, área de estar independente |

### Casas Exclusivas (5 unidades)

| Casa | Slug | Cap. | Área | Destaques |
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

## Design System (identidade visual — OBRIGATÓRIO)

Esta é a identidade visual definitiva do Bahia Bonita. **Qualquer página nova deve seguir estas regras** — não improvisar fontes, cores, paddings ou estruturas diferentes. Se o usuário pedir uma nova página, reproduza o header/footer/CTA/fontes exatamente como estão em `index.html` e nas subpáginas existentes.

### Design Tokens (`:root` em `assets/css/style.css`)

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#6CC2C4` | Teal primário — botões, dividers, destaques |
| `--accent-hover` | `#5AB0B2` | Hover do teal |
| `--cta` | `#C99F75` | Dourado/marrom — botões CTA, badges, header solid |
| `--cta-hover` | `#A8835E` | Hover do dourado |
| `--bg` | `#FFF8F2` | Fundo principal (creme claro) |
| `--surface` | `#FDFAF7` | Cards, formulários |
| `--surface-light` | `#FFF0E2` | Seções de destaque (dobra casas) |
| `--text` | `#29393A` | Texto principal / fundo dark sections |
| `--text-muted` | `#6B7A7B` | Texto secundário |
| `--font-display` | `Fraunces`, serif | Headings (weight **300** sempre) |
| `--font-body` | `Nunito Sans`, sans-serif | Corpo (weight 200-400) |

**Regras não-negociáveis:**
- Todos os headings (H1, H2, H3) usam `var(--font-display)` com `font-weight: 300`. Nunca usar Nunito Sans bold para título.
- Botões pill: `border-radius: 50px`.
- Fundo padrão: `#FFF8F2`. Seção casas: `#FFF0E2`. Seção suítes: `#fff`.
- Labels e overlines (sec-head `.overline`) em caixa alta só com `letter-spacing: .12em` — nunca escrever HTML em caps.
- Cores de marca: teal `#6CC2C4` para Casas e elementos de leitura; dourado `#C99F75` para CTAs, badges e estado scrolled do header.

### Google Fonts (ÚNICA URL a usar)

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
```

**Nunca** carregar Cormorant Garamond, The Seasons, Playfair ou outra serif — isso já foi migrado para Fraunces.

### Favicon (todas as páginas)

```html
<link rel="icon" type="image/svg+xml" href="{relative}/assets/img/logo.svg">
```

### Header / Menu

Markup idêntico em toda página — mudar apenas os paths relativos. Logo: `assets/img/logo-branco.svg` a 60px (default CSS, nunca sobrescrever com inline style).

**Nav items (ordem obrigatória):**
1. Início
2. **Bahia Bonita Casas ▾** (dropdown com as 5 casas)
3. **Hotel Boutique ▾** (dropdown com as 7 suítes)
4. Experiências
5. Galeria
6. Blog (quando existir)
7. Contato

Botão pill branco à direita: **"Reservar agora"** (nunca "Reservar" apenas). Link: `https://wa.me/5573988017764?text=Tenho%20interesse`.

**Estados do header:**
- `class="hdr hero-mode"` — transparente sobre hero full ou sobre `.page-top-hero`. Uso em: home, todas as subpáginas, blog.
- Scroll > 80px → header fica dourado `#C99F75`, logo/texto brancos, botão branco.

Ícones de seta dos dropdowns: `▾` (não `▼`).

### Início de Página (padrão subpágina)

Ordem de seções obrigatória para qualquer página nova:

1. **Header** (`hdr hero-mode`) + mobnav.
2. **Page top hero** (`.page-top-hero`) — faixa fina 88px com foto + overlay escuro (`.page-top-hero-ov`) e animação scale 14s.
3. **Intro section** (`.intro-section`) — logo SVG centralizado com linhas teal (`.intro-logo-row`), overline + heading Fraunces.
4. **Blocos de conteúdo** (`.ab-grid` alternados).
5. **CTA final** (`.final-cta`) com imagem `assets/img/experiencias/villa-ruda.jpg`, overlay, logo branca e heading "Trancoso está esperando por você. Reserve sua experiência.".
6. **Footer** (`.ft-logo-center` + `.ft-grid` 3 colunas).
7. **WhatsApp flutuante** (`.wa-btn`).
8. **Cookie banner** (`.ck`).

### Componentes recorrentes

| Componente | Classe | Descrição |
|---|---|---|
| Divisor (horizontal teal) | `.divider` / `.divider.cx` | Linha teal 2px 60px, `.cx` centraliza |
| Overline (caps, letra esparçada, dourado) | `.overline` | `font-size: .68rem; letter-spacing: .12em; color: var(--cta)` |
| Bloco alternado foto+texto | `.ab-grid` | Grid 2 colunas com `gap: clamp(3rem,6vw,6rem)`; `.ab-img` max-width 320px, `.ab-txt` max-width 340px |
| Carousel de acomodação | `.casas-carousel` | Card 340px + thumbs afuniladas (ativa 520px fallback); padrão home. Variante grande: `.cc-large` (620px) — usada em `/hotel-boutique-suites/` e `/bahia-bonita-casas/` |
| CTA final | `.final-cta` + `.final-cta-bg` + `.final-cta-overlay` + `.final-cta-content` | Bloco full-width com imagem, logo branca e botão outline branco pill |
| Botões | `.btn-gold` (CTA dourado), `.btn-green` (accent), `.btn-outline` (outline teal), `.btn-outline-w` (outline branco), `.hdr-btn` (pill header), `.final-cta-btn` (pill outline branco) | Todos pill (border-radius 50px) quando aplicados com `style="border-radius:50px"` no mobile nav |

### Footer (padrão único)

```
<footer>
  <div class="container">
    <!-- Bloco topo: logo centralizada + tagline + social -->
    <div class="ft-logo-center">
      <img src="{assets}/logo-branco.svg">
      <p>Autenticidade que não se compra, se vive.</p>
      <div class="ft-social">[Instagram SVG] [WhatsApp SVG]</div>
    </div>
    <!-- 3 colunas -->
    <div class="ft-grid">
      <div class="ft-col"><h4>Sobre o Hotel</h4>...</div>
      <div class="ft-col"><h4>Contato</h4>...</div>
      <div class="ft-col"><h4>Legal</h4> termos-e-condicoes / cookie-policy-br / Fale conosco</div>
    </div>
    <div class="ft-bottom">CNPJ · © 2026 · Desenvolvido por Komplexa Hotéis</div>
  </div>
</footer>
```

### Seções Especiais da Home

- **Hero:** fullscreen com animação scale 14s, overlay `rgba(20,25,15,.75)`, título "Sua história em Trancoso começa aqui", booking widget OceanBook/Omnibees (pill branco com 4 campos + botão laranja "PESQUISAR").
- **Intro:** logo + dividers teal + "Descubra o paraíso" + "Como você prefere viver Trancoso?" + 2 botões (Casas teal / Suítes gold).
- **Blocos alternados, split-bg, casas carousel + suítes carousel**.
- **Dark section** (fundo `--text`): "Experiências que completam o cenário" com 3 cards.
- **Reviews TripAdvisor** 2020-2024.
- **Amenidades** grid 4x3 com SVG line-art inline.

---

## Architecture

### Page Structure

```
/index.html                               — Home
/hotel-boutique-suites/                   — Listagem suítes (.cc-large carousel)
/suite-master/                            — Suíte Master (70m²)
/suite-master-com-piscina-privativa/      — Suíte Master c/ Piscina (135m²)
/suite-luxo-superior/                     — Suíte Luxo Superior (65m²)
/suite-luxo-terreo-com-varanda/           — Suíte Luxo Térreo (65m²)
/suite-diamante-trancoso/                 — Suíte Diamante (90m²)
/suite-duplex-com-hidromassagem/          — Duplex c/ Hidromassagem (110m²)
/bangalo-master/                          — Bangalô Master (135m²)
/bahia-bonita-casas/                      — Listagem casas (.cc-large carousel)
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
/blog/_template/                          — Template de post com marcadores %%PLACEHOLDER%%
/termos-e-condicoes/                      — Termos e Condições
/cookie-policy-br/                        — Política de Cookies
```

### Paths relativos obrigatórios (GitHub Pages)

Deploy é em subdiretório (`/bahia-bonita-site-ok/...`). **Nunca usar paths absolutos `/path/`**. Sempre relativos:
- Home para subpágina: `href="bahia-bonita-casas/"`
- Subpágina para outra subpágina: `href="../casa-tupa/"`
- Subpágina para assets: `src="../assets/img/..."`
- Blog post (dois níveis): `href="../../hotel-boutique-suites/"`, assets `src="../../assets/..."`
- JS que constrói URLs: use `'../' + slug + '/'` (não `'/' + slug`)

### Convenção de imagens

- **Foto principal de cada acomodação sempre em `01.jpg`** (tanto `assets/img/casas/{slug}/01.jpg` quanto `assets/img/suites/{slug}/01.jpg`). Carousels e thumbnails puxam dessa.
- Estrutura: `assets/img/casas/casa-tupa/01.jpg` … `05.jpg`; `assets/img/suites/suite-master/01.jpg`; `assets/img/experiencias/{nome}.jpg`; `assets/img/hero/hero-01.jpg`.
- Fotos do hero da experiencias usa `experiencias-hero.jpg` — **não reutilizar** `cafe-manha.jpg` como hero.

### Single CSS: `assets/css/style.css`

Todas as estilizações em um arquivo. Design tokens via CSS custom properties. Breakpoints: 1024px, 768px, 480px. Espaçamento fluido com `clamp()`. Classes `.compact` reduzem padding 25%. `@media(prefers-reduced-motion:reduce)` desabilita animações. **Não criar arquivos CSS adicionais** — qualquer override vai no fim de `style.css` com comentário de seção.

### Single JS: `assets/js/main.js`

Constantes: `WEBHOOK_URL`, `HOTEL_NAME`, `WA_NUMBER`. Sistemas: GTM dataLayer (`pushLead`), webhook (`sendToWebhook`), header scroll (hero-mode → solid #C99F75), mobile menu com dropdowns (`.mob-dropdown-toggle`), lazy load (IntersectionObserver), cookie banner, filtros de galeria (`filterGal`), lightbox (`openLB/closeLB/navLB`), formulário de contato.

### External Integrations

- **OceanBook/Omnibees** (Hotel ID 6588) — booking widget com Flatpickr, carregado dinamicamente via `<template>` + JS na home.
- **Google Maps** — iframe embed na página de contato (busca: "Hotel Boutique Bahia Bonita Trancoso").
- **WhatsApp** — botão flutuante + links `wa.me/5573988017764?text=Tenho%20interesse`.
- **TripAdvisor** — selos 2020-2024 em `assets/img/icons/`.

---

## Criando uma página nova

Quando o usuário pedir uma página nova, o fluxo é sempre:

1. **Partir de uma página existente similar** (ex: para uma suíte nova, duplicar `/suite-master/index.html`). Nunca escrever HTML do zero.
2. **Atualizar paths relativos** do header, footer, assets e links internos.
3. **Manter a estrutura canônica**: header `hdr hero-mode` → `page-top-hero` → `intro-section` → blocos `ab-grid` → `final-cta` → footer `ft-logo-center` + `ft-grid` → WhatsApp flutuante → cookie banner.
4. **Fontes via Google Fonts URL canônica** (Fraunces + Nunito Sans) — nunca outra família.
5. **Favicon SVG** apontando para `assets/img/logo.svg` com o número certo de `../`.
6. **Adicionar entrada no sitemap.xml** e no mobnav/nav dos outros arquivos, se fizer sentido.
7. **SEO mínimo:** title + meta description (≤ 155 chars) + canonical + og:title/description/image/url + twitter:card.
8. **Commit imediato com push para `main`** (o site só existe em produção).

---

## Blog System

### Structure

```
/blog/
  index.html                    — Listagem
  _template/
    index.html                  — Template com marcadores %%PLACEHOLDER%%
  {slug}/
    index.html                  — Post individual
```

### Identidade visual do blog

O blog segue **exatamente** a mesma identidade do site — mesmo header, mesmo footer, mesmas fontes (Fraunces + Nunito Sans), mesmo page-top-hero, mesmo CTA final. Nunca aplicar uma tipografia de "artigo" genérico. Regras específicas:

- H1/H2/H3 do post: `font-family: var(--font-display); font-weight: 300;` (já configurado em `.blog-post-header h1` e `.blog-post-content h2/h3`).
- CTA box dentro do post: `.blog-cta-box` (background `--accent-soft`, heading Fraunces, botão `.btn-green` pill).
- Parágrafos: Nunito Sans 300-400, line-height 1.7-1.85.
- Blog card H3 na listagem: Fraunces 300.
- Nunca usar emojis em títulos ou headings.
- Nav do header destaca "Blog" com `class="active"`.

### Creating a New Blog Post

1. Ler `blog-plan.json` → próximo item de `upcoming` com `target_date` ≤ hoje.
2. Ler `hotel-config.json` → contexto, tom, keywords, design tokens.
3. Copiar `blog/_template/index.html` → `blog/{slug}/index.html` **sem alterar header, footer, fonts ou estrutura** — o template já está alinhado à identidade visual.
4. Substituir marcadores: `%%POST_TITLE%%`, `%%META_DESCRIPTION%%`, `%%SLUG%%`, `%%ISO_DATE%%`, `%%DISPLAY_DATE%%`, `%%PILLAR%%`, `%%CONTENT_START%%`/`%%CONTENT_END%%`, `%%RELATED_POSTS%%`.
5. Conteúdo: 800-1200 palavras, intro (2-3 parágrafos com keyword principal) + 3-5 seções H2 + 2+ links internos + `.blog-cta-box` antes do fechamento.
6. Atualizar `blog/index.html` (adicionar card `.blog-card` ao grid, mantendo a classe e a estrutura do card).
7. Atualizar `sitemap.xml`.
8. Mover post de `upcoming` para `published` no `blog-plan.json`.
9. `git add` → `git commit` → `git push`.

### Blog SEO Checklist

- `<title>` formato: `{Título} | Blog Hotel Boutique Bahia Bonita`
- `<meta name="description">` ≤ 155 chars
- Canonical, OG tags, `article:published_time`
- Schema.org `BlogPosting` + `BreadcrumbList` (Início → Blog → Post)
- Único `<h1>`, H2 por seção, 2+ links internos, `.blog-cta-box` antes do fim

### Remote Agent (Schedule)

- **Frequência:** terça e sexta
- **Prompt:** "Read blog-plan.json. If there is an upcoming post with target_date ≤ today, generate it following the blog post creation instructions in CLAUDE.md."
- Quando `upcoming` ≤ 2 itens, gerar 6 novos tópicos baseados em pilares: Destino, Experiência, Cultura, Dicas práticas.

---

## Configuration Files

### `hotel-config.json`

Config central: dados do hotel, contato, endereço, coordenadas, suítes (7), casas (5) com capacidade/área/destaques/imagem, experiências (5), integrações (webhook, GTM, OceanBook Hotel ID 6588), design tokens (com Fraunces como display), Google Fonts URL canônica e seção `blog.visual_identity` descrevendo todo o estilo que deve ser replicado.

### `blog-plan.json`

Estratégia editorial (tom sofisticado e acolhedor, 4 pilares, 800-1200 palavras), seção `visual_identity` obrigatória para todos os posts, regras SEO, template path, posts publicados e planejados.

---

## Conventions

- HTML semântico com class names curtos (`.cb` content block, `.ab-grid` about grid, `.cc-card` carousel card, `.rc` room card, `.gi` gallery item, `.ft-logo-center`, `.ft-grid`, `.final-cta`).
- Data attributes controlam JS: `data-cat` nos gallery items.
- Modais: toggle de `.open` com `body.style.overflow='hidden'`.
- Formulários: prevent default → webhook → ação UI.
- Idioma: Português Brasileiro.
- Cor do fundo padrão: `#FFF8F2`, seção casas: `#FFF0E2`, seção suítes: `#fff`.
- Botões pill com `border-radius: 50px`.
- Headings em Fraunces weight 300 (serif elegante, nunca bold).
- `▾` como ícone de seta de dropdown (não `▼`).
- "Reservar agora" é o texto canônico do botão de reserva (header e final-cta); "Reservar estadia" dentro de CTA boxes do blog.
