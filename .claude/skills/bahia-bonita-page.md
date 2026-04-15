---
name: bahia-bonita-page
description: Cria páginas HTML para o site do Hotel Boutique Bahia Bonita seguindo o design system, layout e padrão visual estabelecido. Garante consistência de cores, fontes, respiros, componentes e estrutura.
---

# Skill: Criar Páginas — Hotel Boutique Bahia Bonita

Ao criar ou editar qualquer página do site Bahia Bonita, siga RIGOROSAMENTE este guia. Nenhum elemento visual pode desviar do sistema abaixo.

---

## 1. TOKENS DE COR (nunca usar cores fora desta paleta)

| Token | Hex | Uso |
|---|---|---|
| `--accent` | `#6CC2C4` | Teal — botões primários, dividers, badges, highlights |
| `--accent-hover` | `#5AB0B2` | Hover do teal |
| `--cta` | `#C99F75` | Dourado — botões CTA, carousel "PESQUISAR" |
| `--cta-hover` | `#A8835E` | Hover do dourado |
| `--bg` | `#FFF8F2` | Fundo creme padrão da maioria das seções |
| `--surface` | `#FDFAF7` | Fundo de cards, formulários, seções intermediárias |
| `--surface-light` | `#FFF0E2` | Seções de destaque (dobra casas, transições) |
| `--text` | `#29393A` | Texto principal + fundo das seções dark |
| `--text-muted` | `#6B7A7B` | Texto secundário, body copy |
| `#fff` | branco | Seções de suítes, "Cada detalhe", rodapé de reviews |

### Cores de fundo por contexto:
- **Seções iniciais / padrão:** `var(--bg)` (#FFF8F2)
- **Seções de casas / transição:** `#FFF0E2`
- **Seções intermediárias (pós-dark):** `#FDFAF7`
- **Seções de specs/detalhe final:** `#fff`
- **Seção dark (citação + galeria):** `var(--text)` (#29393A)
- **Header scroll (solid):** `#C99F75`

---

## 2. TIPOGRAFIA

| Elemento | Fonte | Peso | Tamanho | Obs |
|---|---|---|---|---|
| Headings (h1-h3) | `Fraunces`, serif | 300 | clamp responsivo | Elegante, leve |
| Body / paragraphs | `Nunito Sans`, sans-serif | 300 | clamp(.88rem,1vw,1rem) | line-height: 1.85 |
| Overline | `Nunito Sans` | 700 | .62-.72rem | letter-spacing: .24em, uppercase |
| Intro overline | `Nunito Sans` | 400 | .72rem | Itálico, cor `--accent` |
| Nav links | `Nunito Sans` | 400 | .95rem | Sem uppercase |
| Botões | `Nunito Sans` | 500-700 | .65-.78rem | Variável por contexto |

### Tamanhos de heading por contexto:
- **Hero (home):** `clamp(2rem,5vw,3.5rem)` weight 300
- **Hero (property):** `clamp(2.2rem,5vw,3.8rem)` weight 300
- **Intro heading:** `clamp(1.6rem,3vw,2.3rem)` weight 300
- **Blocos de conteúdo (prop-block/ab-txt):** `clamp(1.3rem,2.2vw,1.7rem)` weight 300
- **Seções (sec-head):** `clamp(1.4rem,2.4vw,2rem)` weight 300

### Google Fonts link (usar em TODA página):
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300;1,400&display=swap" rel="stylesheet">
```

---

## 3. ESPAÇAMENTO / RESPIRO

### Variáveis de spacing (reduzidas em 25% do padrão):
```
--space-xs: clamp(.375rem,.75vw,.55rem)
--space-sm: clamp(.75rem,1.5vw,1.125rem)
--space-md: clamp(1.5rem,3vw,2.25rem)
--space-lg: clamp(3rem,6vw,4.5rem)
--space-xl: clamp(4.5rem,9vw,7.5rem)
```

### Regras de respiro:
- `section` padrão: `padding: var(--space-xl) 0`
- Seção `.compact`: `padding: clamp(2.5rem,5vw,4.2rem) 0` (25% menor)
- Seções que continuam a mesma cor da anterior: `padding-top: 0` ou `.5rem`
- Gaps entre blocos `.ab-grid`: `clamp(3rem,7vw,7rem)`
- Gaps entre blocos `.prop-block`: `clamp(2.5rem,5vw,5rem)`
- `.container`: `max-width: 1200px; margin: 0 auto; padding: 0 clamp(1.5rem,4vw,3rem)`

---

## 4. COMPONENTES PADRÃO

### 4.1 Header (todas as páginas)
```
.hdr.hero-mode → transparente sobre hero/page-top-hero
.hdr.solid → fundo #C99F75 (transição ao scroll, 80px threshold)
Logo: logo-branco.svg, height 60px
Nav: Início | Bahia Bonita Casas ▾ | Hotel Boutique ▾ | Experiências | Galeria | Contato
Botão: "Reservar agora" — pill branco (bg #fff, color --text, border-radius 50px)
```
- Scroll solid: logo permanece branca, texto permanece branco, botão permanece branco
- Mobile: `.mobnav` com `.mob-dropdown-toggle` para submenus

### 4.2 Page Top Hero (subpáginas sem hero fullscreen)
```css
.page-top-hero { height: 88px; overflow: hidden; }
/* img com animation: heroScale 14s ease-in-out infinite alternate */
/* overlay rgba(20,25,15,.55) */
```

### 4.3 Intro Section (logo + dividers)
```html
<section class="intro-section" style="background:[cor];">
  <div class="intro-logo-row">
    <div class="intro-line"></div>
    <img src="[path]/logo.svg" alt="Bahia Bonita">
    <div class="intro-line"></div>
  </div>
  <!-- Opcionalmente: -->
  <p class="intro-overline">[overline]</p>
  <h2 class="intro-heading">[heading]</h2>
</section>
```
- Logo: 65px height, margin 0 2rem
- Linhas: 1px, cor `--accent`, opacity .4, flex:1

### 4.4 Blocos de Conteúdo Alternados

**Padrão `.ab-grid` (foto + texto):**
```html
<div class="ab-grid">
  <div class="ab-img"><img src="..." loading="lazy"></div>
  <div class="ab-txt">
    <h2>Título</h2>
    <p>Texto...</p>
  </div>
</div>
```
- Imagem: `max-width: 320px`, height auto (proporção natural)
- Texto: `max-width: 340px`
- Inversão: usar `style="direction:rtl"` no grid + `direction:ltr` nos filhos

**Padrão `.prop-block` (property pages):**
- Imagem: `max-width: 300px`
- Texto: `max-width: 360px`
- Inversão: classe `.reverse`

**Padrão `.casas-block` (texto centralizado + foto à direita):**
- Texto centralizado via flex (`.casas-txt` max-width 340px)
- Foto: `.casas-img` position absolute, `right: -40px a -60px`, 280px wide, aspect 3/4

### 4.5 Split Background (transição de cor com foto)
```html
<section class="split-bg" style="padding:0;">
  <div class="split-bg-inner">
    <div class="split-bg-img"><img src="..."></div>
  </div>
</section>
```
- Gradient: `linear-gradient(to bottom, [cor-cima] 60%, [cor-baixo] 60%)`
- Foto: `max-width: 340px`, aspect 3/2
- Para foto à direita: `style="display:flex;justify-content:flex-end;"` no inner

### 4.6 Seção Dark (citação + galeria)
```html
<section class="prop-dark">
  <p class="prop-dark-quote">"Citação itálica..."</p>
  <div class="prop-dark-gallery">
    <div class="prop-dark-gallery-item"><img></div> <!-- 3 itens -->
  </div>
  <a href="/galeria/" class="btn-pill">Ver galeria completa</a>
</section>
```
- Fundo: `var(--text)` (#29393A)
- Galeria: grid 3 colunas, aspect 3/4, gap .6rem, max-width 800px

### 4.7 Carousel de Acomodações
```
Grid: 340px (card) + 1fr (thumbs row)
Card: bg var(--bg), 520px height, título + descrição + badges + botão + nav
Thumbs: flex row, 38px narrow (pill 60px radius) → 520px expanded (8px radius)
Overlay escuro 65% nas inativas, 0% na ativa
Autoplay: 5000ms com reset ao interagir
```

### 4.8 Botões
| Classe | Background | Color | Border | Radius | Uso |
|---|---|---|---|---|---|
| `.intro-btn.teal` | `--accent` | #fff | none | 50px | CTAs primários inline |
| `.intro-btn.gold` | `--cta` | #fff | none | 50px | CTAs secundários |
| `.btn-pill` / `.final-cta-btn` | transparent | #fff | 1.5px rgba(255,255,255,.6) | 50px | Hero / dark sections |
| `.hdr-btn` | #fff | `--text` | none | 50px | Menu "Reservar agora" |
| `.btn-accent` | `--accent` | #fff | none | — | Links inline |
| `.cc-card-btn` | `--accent` | #fff | none | 50px | Carousel "Conhecer" |
| `.bp-btn` / `.ob-btn-search` | `--cta` | #fff | none | 50px | Booking "PESQUISAR" |

### 4.9 CTA Final (antes do footer, todas as páginas exceto contato)
```html
<section class="final-cta">
  <img class="final-cta-bg" src="[path]/suites/suite-master/01.jpg">
  <div class="final-cta-overlay"></div>
  <div class="final-cta-content">
    <img src="[path]/logo-branco.svg" class="final-cta-logo">
    <h2>Trancoso está esperando por você.<br>Reserve sua experiência.</h2>
    <p>Onde você vive as melhores histórias e as melhores experiências com as melhores pessoas.</p>
    <a href="https://wa.me/5573988017764?text=Tenho%20interesse" class="final-cta-btn">Reservar agora</a>
  </div>
</section>
```

### 4.10 Footer (todas as páginas)
```
ft-logo-center: logo-branco.svg (55px) centralizado + tagline + social icons
Separador: border-bottom 1px rgba(255,255,255,.08)
ft-grid: 3 colunas (Sobre o Hotel | Contatos | Legal)
ft-bottom: copyright + crédito Komplexa Hotéis
Fundo: var(--text)
```

### 4.11 Reviews (TripAdvisor)
```html
<section class="reviews-section compact" style="background:#fff;">
  <!-- 4 badges: 2020-btrip-v2.png, 2021trip-v2.png, 2022trip-v2.png, 2024trip-v2.png -->
  <!-- Em assets/img/icons/ -->
</section>
```

### 4.12 Amenidades (12 ícones SVG line-art)
Grid 4x3, ícones 42px stroke-width 2, labels em Fraunces itálico cor `--accent`.
Itens: Piscina privativa, Wi-fi veloz, Equipe Bilíngue, Serviço de quarto, Estacionamento, Massagem, Roupão, Aceita animais, Ar-condicionado, Berço (demanda), Frigobar, Cozinha equipada.

---

## 5. ESTRUTURA DE PÁGINA — PROPERTY (Casa/Suíte)

Toda página de acomodação segue esta sequência exata:

```
1.  HEADER (.hdr hero-mode) + mobnav
2.  HERO fullscreen (.prop-hero) — título + subtitle + CTA pill
3.  DESCUBRA (.prop-feats-section) — imagem/vídeo + features badges
4.  INTRO LOGO (.intro-section) — logo + dividers
5.  BLOCO 1 (.prop-block) — foto esq + texto dir [título + parágrafo]
6.  BLOCO 2 (.prop-block.reverse) — texto esq + foto dir [continuação + CTA]
7.  SPLIT-BG — foto dividindo cores (esquerda)
8.  CASAS-BLOCK — texto centralizado + foto dir [ritmo/experiência]
9.  AB-GRID — foto esq + texto dir [piscina/experiência sensorial]
10. DARK SECTION (.prop-dark) — citação + galeria 3 fotos + "Ver galeria"
11. SEPARADOR — div 2px teal opacity .2
12. CASAS-BLOCK — texto centralizado + foto dir [liberdade/intimidade]
13. AB-GRID — foto esq + texto dir [serviço hotel + CTA]
14. SPLIT-BG DIREITA — foto dividindo cores (direita)
15. AB-GRID — foto esq + texto dir [arquitetura]
16. PROP-BLOCK.REVERSE — texto esq + foto dir [interior/decoração]
17. PROP-BLOCK — foto esq + texto dir ["Cada detalhe, antecipado" + specs]
18. PROP-BLOCK.REVERSE — texto esq + foto dir [final + CTA]
19. REVIEWS — selos TripAdvisor
20. AMENIDADES — 12 ícones SVG
21. CTA FINAL — imagem bg + overlay + logo + heading
22. FOOTER + WhatsApp flutuante + Cookie banner
```

### Cores por seção nesta sequência:
```
Seções 2-9:  var(--bg) → split → #FFF0E2
Seção 10:    var(--text) (dark)
Seções 11-13: #FDFAF7
Seção 14:    split #FDFAF7 → #FFF0E2
Seções 15-16: #FFF0E2
Seções 17-18: #fff
```

---

## 6. ESTRUTURA DE PÁGINA — LISTAGEM (Casas/Hotel Boutique)

```
1. HEADER hero-mode + mobnav
2. PAGE-TOP-HERO (88px strip + overlay)
3. INTRO SECTION (logo + dividers) — fundo #FFF0E2 para casas, #fff para suítes
4. AB-GRID — foto esq + texto dir (título + descrição da categoria)
5. AB-GRID inverso — texto esq + foto dir (complemento)
6. CAROUSEL — card texto + thumbs afuniladas (autoplay 5s)
7. REVIEWS — TripAdvisor
8. AMENIDADES — 12 ícones
9. CTA FINAL
10. FOOTER
```

---

## 7. ESTRUTURA DE PÁGINA — HOME

```
1.  HEADER hero-mode
2.  HERO fullscreen (100vh, scale animation 14s, booking widget OceanBook)
3.  INTRO SECTION (logo + dividers + "Como você prefere viver Trancoso?" + 2 botões)
4.  AB-GRID — foto esq + texto dir
5.  AB-GRID inverso — texto esq + foto dir + CTA
6.  SPLIT-BG — foto dividindo cores
7.  CASAS-BLOCK — "Sua casa em Trancoso" + foto dir
8.  AB-GRID — foto esq + texto dir
9.  CASAS CAROUSEL — 5 casas
10. CASAS-BLOCK — texto + foto dir
11. AB-GRID — foto esq + texto dir
12. SUÍTES CAROUSEL — 7 suítes
13. DARK SECTION — "Experiências que completam o cenário" + 3 cards + CTA
14. REVIEWS — TripAdvisor
15. AMENIDADES — 12 ícones
16. CTA FINAL (background image)
17. FOOTER
```

---

## 8. REGRAS ABSOLUTAS

1. **Nunca usar emojis** em botões ou headings
2. **Todos os botões são pill** (border-radius: 50px)
3. **Header scroll** sempre transiciona para `#C99F75` — logo, texto e botão permanecem brancos
4. **Imagens nunca são esticadas** — sempre `object-fit: cover` ou `height: auto`
5. **Hero fullscreen** sempre tem animation `heroScale 14s` na imagem
6. **WhatsApp** sempre usa número `5573988017764` com mensagem "Tenho interesse"
7. **Idioma** sempre Português Brasileiro
8. **Fontes**: Fraunces para headings, Nunito Sans para body — sem exceções
9. **Todas as subpáginas** usam `../assets/` para paths de assets
10. **CTA Final** presente em todas as páginas exceto contato
11. **Reviews + Amenidades** presentes em todas as property pages e listagens
12. **Footer** sempre 3 colunas (Sobre o Hotel | Contatos | Legal) com logo centralizada acima
13. **Seções que continuam** a mesma cor: usar `padding-top: 0` ou `.5rem` para colar
14. **Classe `.compact`** deve ser aplicada em seções da segunda metade da página
