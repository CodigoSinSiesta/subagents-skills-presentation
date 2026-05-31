# Subagentes y Skills - Presentación

Presentación sobre **Subagentes y Skills** — orquestación, patrones de diseño, anatomía de skills y cómo potenciar agentes de IA.

## Stack

- **Framework**: Astro 5.x (static site)
- **Components**: Svelte 5.x
- **Styling**: `@codigosinsiesta/theme` v0.7.0 (V4 "dark blueprint") + Tailwind CSS 4.x
- **Animations**: GSAP 3.x
- **Runtime**: pnpm + Node 20+

## Arquitectura de la Presentación

```
src/
├── components/
│   ├── Navigation.svelte       # Control de slides + keyboard nav
│   └── slides/                 # 18 slides individuales
│       ├── Slide01Hero.svelte
│       ├── Slide02TheProblem.svelte
│       ├── Slide03WhatIsSubagent.svelte
│       ├── Slide04RolesIbm.svelte
│       ├── Slide05OrchestrationPatterns.svelte
│       ├── Slide06OrchestrationBenefits.svelte
│       ├── Slide07SkillsConcept.svelte
│       ├── Slide08SkillAnatomy.svelte
│       ├── Slide09ReferenceSkills.svelte
│       ├── Slide10SkillsPractice.svelte
│       ├── Slide11SubagentSkillsSynergy.svelte
│       ├── Slide12ContextManagement.svelte
│       ├── Slide13RealWorldPatterns.svelte
│       ├── Slide14PersonaReviewers.svelte
│       ├── Slide15CommonPitfalls.svelte
│       ├── Slide16BestPractices.svelte
│       ├── Slide17WorkshopPreview.svelte
│       └── Slide18Closing.svelte
├── layouts/
│   └── PresentationLayout.astro  # imports global.css + paints V4 chrome (top bar + breadcrumb + footer)
├── styles/
│   ├── global.css                # imports @codigosinsiesta/theme/all.css + deck-specific overrides
│   └── animations.css            # GSAP animation classes
├── utils/
│   └── animations.ts             # GSAP helpers
└── pages/
    └── index.astro               # Entry point
```

## Design System — `@codigosinsiesta/theme` (V4)

The visual language lives in [`@codigosinsiesta/theme`](https://github.com/CodigoSinSiesta/theme) — a shared package consumed by all Código Sin Siesta presentations. **Do not redefine its tokens here.**

Importing `@codigosinsiesta/theme/all.css` (done from `src/styles/global.css`) gives you:

- `src/tokens.css` — palette, type, spacing, radii, transitions, legacy aliases
- `src/chrome.css`  — `.slide-accent-bar`, `.slide-breadcrumb`, `.slide-footer`, `.label`, `.highlight`

### Paleta V4 (slate-blueprint)

```css
--color-fondo:      #0F172A    /* slate-900 — canvas principal */
--color-fondo-alt:  #1E293B    /* slate-800 — superficies alt */
--color-fondo-elev: #152033    /* intermedio — cards */
--color-borde:      #334155    /* slate-700 — líneas finas */
--color-tinta:      #F1F5F9    /* slate-100 — texto principal */
--color-tinta2:     #CBD5E1    /* slate-300 — texto secundario */
--color-cobalto:    #1E3A8A    /* azul cobalto */
--color-azul:       #2563EB    /* azul royal — links body */
--color-electrico:  #3B82F6    /* azul brillante — CTA, glow */
--color-cielo:      #60A5FA    /* azul cielo — eyebrow, links activos */
```

Legacy V5 aliases (still defined in the theme for backward compat — slides that use them keep working):

```css
--color-base-dark      → var(--color-fondo)
--color-primary-cobalt → var(--color-cobalto)
--color-accent-bright  → var(--color-electrico)
--color-electric       → var(--color-cielo)
--color-neutral-light  → var(--color-tinta)
```

### Tipografía

- **Display**: Space Grotesk 400–900 (`var(--font-display)`)
- **Body**:    Inter 400–900 (`var(--font-body)`)
- **Mono**:    JetBrains Mono 400–800 (`var(--font-mono)`)

The theme imports all three fonts from Google Fonts — **do not re-import in `global.css`**.

### Chrome canónico

Cada deck pinta una vez en su layout (ya hecho en `PresentationLayout.astro`):

```html
<div class="slide-accent-bar"></div>         <!-- 3px top bar, cobalto→electrico→cielo -->
<div class="slide-breadcrumb">                <!-- mono uppercase pulse-dot + counter -->
  <div class="crumbs">
    <span class="pulse-dot"></span>
    <span class="org">código sin siesta</span>
    <span class="sep">/</span>
    <span class="deck">subagents-skills</span>
  </div>
  <div class="counter" id="slide-counter">01 / 18</div>
</div>
<div class="slide-footer">…</div>
```

The inline script in `PresentationLayout.astro` keeps `#slide-counter` in sync with the active `.swiper-slide`.

## Slide Components

Most slides use canonical shells from `@codigosinsiesta/theme/slides/*`:

- `SlideHero` — cover
- `SlideShell` — wrapper used when you want a custom layout (e.g. `Slide03WhatIsSubagent`, `Slide11SubagentSkillsSynergy`)
- `SlideToolsGrid` — N-column tool/role grid (e.g. `Slide04RolesIbm`)
- See [theme/src/slides/](https://github.com/CodigoSinSiesta/theme/tree/main/src/slides) for the full list (26 shells in v0.7.0)

Atoms: `Eyebrow`, `Callout`, `ToolCard`, `TerminalLine`, `TerminalWindow`, `QRCode` from `@codigosinsiesta/theme/components/*`.

## Navegación

- **Teclado**: `←` / `→` para navegar entre slides
- **Botones**: prev/next en los laterales
- **Hash URLs**: `#/slide-name` para enlazar directamente a un slide
- **Contador**: el del chrome V4 (top-right). El contador legacy de `Navigation.svelte` está oculto vía `global.css`.

## Slide Names (para hash navigation)

```
hero, the-problem, what-is-subagent, roles-ibm, orchestration-patterns,
orchestration-benefits, skills-concept, skill-anatomy, reference-skills,
skills-practice, subagent-skills-synergy, context-management,
real-world-patterns, persona-reviewers, common-pitfalls, best-practices,
workshop-preview, closing
```

## Dev Commands

```bash
pnpm dev     # Inicia en http://localhost:4324
pnpm build   # Build para producción
pnpm preview # Preview del build
```

## Deploy

GitHub Pages en: `https://codigosinsiesta.github.io/subagents-skills-presentation`

Base configurada en `astro.config.mjs`: `/subagents-skills-presentation`

## Notas Importantes

- **NO usar `lucide-svelte`** para iconos en los slides — usar inline SVGs o emoji. La versión instalada tiene un bug de resolución de módulos con Vite.
- **Svelte 5 syntax**: usar `$state()`, `$effect()`, `onclick` (sin `on:click`) para código nuevo.
- **Tailwind 4**: no usar `tailwind.config.js` para temas — usar las CSS custom properties del theme directamente.
- **No redefinir tokens en `global.css`**. Si necesitas un valor nuevo, súbelo a [`@codigosinsiesta/theme`](https://github.com/CodigoSinSiesta/theme) primero.
