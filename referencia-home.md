# Referência fiel — Home oficial (bahiabonita.com.br)

Documento gerado a partir de inspeção dos **computed styles reais** do site Elementor em produção, viewport 1440px (página renderizada em 1905px de largura interna).

Use este arquivo como **fonte de verdade** ao replicar a home no código. Se a sua versão divergir do que está aqui, está errado.

---

## Padrão canônico do bloco texto + imagem (`.ab-grid`)

A estrutura é **3 colunas em flex/grid**, não 2. O "texto centralizado, imagem encostada na borda" não é `text-align: center` — é o efeito do **spacer column** no lado oposto à imagem + padding lateral grande na coluna de texto.

### Anatomia exata (medidas reais do oficial)

```
Container interno: max-width 1372px, margin 0 auto
┌────────────┬────────────────────────┬──────────┐
│  IMAGEM    │  TEXTO                 │ SPACER   │
│  457px     │  591px                 │ 324px    │
│  aspect    │  padding-left: 247px   │ (vazio)  │
│  2/3       │  text-align: start     │          │
│            │  content w: 344px      │          │
└────────────┴────────────────────────┴──────────┘
                    ↑
            Total: 457 + 591 + 324 = 1372px
```

- **Imagem column**: `width: 457px`, `aspect-ratio: 2/3` (~457×686). Mesma proporção nos dois lados.
- **Texto column**: `width: 591px` com **`padding-left: 246.875px`** (default) ou **`padding-right: 246.875px`** (flip). Display flex column, justify-content center, gap 16px.
- **Spacer column**: `width: 324px`, vazia. Existe pra equilibrar a respiração visual.
- **Heading interno**: `font-family: Fraunces 300`, `text-align: start` (esquerda, não centralizada). Largura útil **~344px** (= 591 − 247).
- **Container externo da seção**: `display: flex; flex-direction: column; align-items: center;`. Padding vertical típico **128px top / 128px bottom**, `gap: 80px` entre rows.

### Flip (imagem à direita)

**Não é uma classe com imagem menor.** É o **mesmo template** com `flex-direction: row-reverse` e o **padding migra de lado** (`padding-left: 247px` → `padding-right: 247px`).

```
Default (.ab-grid):    [ IMG ][ TEXT pad-left ][ SPACER ]
Flip   (.ab-grid.flip):[ SPACER ][ TEXT pad-right ][ IMG ]
```

---

## Mapa das 14 seções da home

| # | Heading | Altura | Padrão de layout |
|---|---|---|---|
| 0 | "Sua história em Trancoso começa aqui" | 945px | Hero full-bleed, heading H2 center w:640, booking widget |
| 1 | "Descubra o paraíso" | 756px | Intro: row com dividers + ícone central, H1 center, 2 botões |
| 2 | "Um lugar onde Trancoso revela sua essência" | 1362px | **2× ab-grid** (row 1 default, row 2 **flip**). Padding-bottom 224px |
| 3 | (sem heading) | 152px | Divisor / spacer |
| 4 | "Sua casa em Trancoso..." | 1987px | 2× ab-grid (**ambos default**, image à esquerda) + carousel casas |
| 5 | "Refúgios com vista mar..." | 2146px | 2× ab-grid (row 1 default com H2; row 2 **flip** com botão "Reservar") + carousel suítes |
| 6 | "O Bahia Bonita não imita o paraíso..." | 996px | Quote/depoimento: H2 center w:762, padding 128 |
| 7 | "Aqui você pode comer sem pressa" | 1487px | 2× ab-grid (row 1 **flip** com H2; row 2 default) — **café da manhã + chá da tarde** |
| 8 | (sem heading) | 152px | Divisor |
| 9 | "Experiências que completam o cenário" | 1319px | 2× ab-grid **ambos flip** (image à direita nas duas rows) — segunda row tem botão "Conhecer experiências" |
| 10 | "Reconhecido pela excelência..." | 680px | Reviews TripAdvisor: H2 + grid 4 cols × 1 row de selos |
| 11 | "Em nossa hospedagem você desfrutará de:" | 680px | Amenidades: H2 center + **grid 3×3** (305px de col × 189px linha) |
| 12 | "Bahia Bonita / Trancoso está esperando por você" | 756px | CTA final: logo center + H1 + H2 center w:716 + botão |
| 13 | (vazia) | 0px | Footer wrapper |

### Padrões recorrentes detectados

- **Padding vertical de seção:** `128px` (top e/ou bottom). Quando a seção precisa de "respiro extra" antes da próxima, o bottom vira `224px`.
- **Gap entre rows na mesma seção:** `80px` (ab-grid) ou `96px` (quote/CTA).
- **Heading H2 alinhado center:** apenas em headings de seção sem imagem ao lado (sec 6, 10, 11, 12). Em rows ab-grid: sempre `text-align: start`.
- **Largura útil do heading dentro de ab-grid:** 333–344px (não a coluna inteira de 591).
- **Padding-left/right do texto:** **247px** na maioria. Na seção 7 sobe pra **258.5px**. Na seção 9 (experiências) também ~258.5px. Diferença mínima.

---

## Divergências da versão atual vs oficial

| Problema | Versão atual (`style.css`) | Versão oficial |
|---|---|---|
| **Aspect-ratio da imagem no flip** | `5/4` (paisagem 580×464) | **`2/3`** (retrato 457×686) — mesma do default |
| **Larguras das colunas** | `460 / 1fr / 437` (default) e `1fr / 437 / 580` (flip) | **`457 / 591 / 324`** (mesmo em ambos, só inverte direção) |
| **Container max-width** | `1700px` | **`1372px`** |
| **Padding interno do texto** | Inexistente (depende do gap do grid) | **`padding-left: 247px`** (default) ou **`padding-right: 247px`** (flip), criando o "afastamento" visual |
| **Posição relativa da imagem flip** | grid-column: 3 (col 3 = imagem maior) | grid-column: 3 (mas com mesma dimensão da default) |
| **Heading max-width** | implícito pela col 437px | **344px explícito** dentro de coluna de 591px |

### Origem do bug visual relatado

> "no oficial o texto está centralizado e a imagem na direita, mas no nosso o texto está no canto esquerdo"

Causa: o `.ab-grid.flip` atual coloca a imagem na col 3 (580px landscape) e o texto na col 2 (437px), com **filler na col 1**. Como não há padding no texto, ele encosta na borda do filler (esquerda da página). No oficial, o texto também está na col 2 mas com **padding-right de 247px**, o que **puxa o conteúdo do texto pra esquerda da sua coluna** (longe da imagem), enquanto o spacer vazio do lado esquerdo da página cria o efeito visual de "texto centralizado".

---

## Como aplicar em código novo

```html
<!-- Default: imagem à esquerda -->
<div class="ab-grid">
  <div class="ab-img"><img src="..." alt=""></div>
  <div class="ab-txt">
    <h2>Heading</h2>
    <p>Texto…</p>
  </div>
</div>

<!-- Flip: imagem à direita (mesma estrutura, só adicione .flip) -->
<div class="ab-grid flip">
  <div class="ab-img"><img src="..." alt=""></div>
  <div class="ab-txt">
    <h2>Heading</h2>
    <p>Texto…</p>
  </div>
</div>
```

Não inverta a ordem do HTML manualmente — quem inverte é o CSS via `flex-direction: row-reverse` (ou re-posicionando via grid-column). Acessibilidade e SEO ficam preservados.

---

## Workflow de verificação para próximas seções/páginas

1. Abrir a URL oficial no Chrome conectado ao Claude.
2. Pedir varredura com o inspector instalado (`window.__bbMd(i)` se ainda estiver carregado) ou re-instalar via console.
3. Comparar `display`, `flexDirection`, `justifyContent`, `alignItems`, `textAlign`, `maxWidth`, `padding`, `gap` entre oficial e local.
4. Sempre confirmar com **screenshot lado a lado** no mesmo viewport antes de declarar a seção pronta.

Viewport canônico para auditoria: **1440px** (ou 1905px para reproduzir o oficial).

---

_Última atualização: 2026-05-13 — gerada por inspeção automática via Claude in Chrome MCP._
