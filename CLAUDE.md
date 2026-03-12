# Subagentes y Skills - Presentación

Presentación sobre **Subagentes y Skills** — orquestación, patrones de diseño, anatomía de skills y cómo potenciar agentes de IA.

## Stack

- **Framework**: Astro 4.16.19 (static site)
- **Components**: Svelte 5.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: GSAP 3.x
- **Runtime**: pnpm + Node 25.x

## Arquitectura de la Presentación

```
src/
├── components/
│   ├── Navigation.svelte       # Control de slides + keyboard nav
│   └── slides/                 # 16 slides individuales
│       ├── Slide01Hero.svelte
│       ├── Slide02TheProblem.svelte
│       ├── Slide03WhatIsSubagent.svelte
│       ├── Slide04OrchestrationPatterns.svelte
│       ├── Slide05OrchestrationBenefits.svelte
│       ├── Slide06SkillsConcept.svelte
│       ├── Slide07SkillAnatomy.svelte
│       ├── Slide08ReferenceSkills.svelte
│       ├── Slide09SkillsPractice.svelte
│       ├── Slide10SubagentSkillsSynergy.svelte
│       ├── Slide11ContextManagement.svelte
│       ├── Slide12RealWorldPatterns.svelte
│       ├── Slide13CommonPitfalls.svelte
│       ├── Slide14BestPractices.svelte
│       ├── Slide15WorkshopPreview.svelte
│       └── Slide16Closing.svelte
├── layouts/
│   └── PresentationLayout.astro
├── styles/
│   ├── global.css              # Design system tokens + reset
│   └── animations.css          # GSAP animation classes
├── utils/
│   └── animations.ts           # GSAP helpers
└── pages/
    └── index.astro             # Entry point
```

## Design System

### Colors (CSS Custom Properties)
```css
--color-base-dark: #0A1628      /* Fondo oscuro */
--color-primary-cobalt: #1E3A8A  /* Azul cobalto */
--color-accent-bright: #3B82F6   /* Azul brillante */
--color-electric: #60A5FA        /* Azul eléctrico */
--color-neutral-light: #FAF9F6   /* Blanco hueso */
```

### Typography
- **Display**: Space Grotesk (títulos principales)
- **Subheader**: Bricolage Grotesque (subtítulos)
- **Body**: IBM Plex Sans (cuerpo)
- **Mono**: JetBrains Mono (código)

## Slide Structure Pattern

Cada slide sigue este patrón:
```svelte
<div class="swiper-slide">
  <div class="slide-content">
    <!-- header eyebrow + title + subtitle -->
    <!-- main content grid/layout -->
  </div>
</div>
```

El sistema de navegación se basa en CSS (opacity + visibility) + GSAP para las transiciones. NO usar Swiper JS.

## Navegación

- **Teclado**: `←` / `→` para navegar entre slides
- **Botones**: prev/next en los laterales
- **Hash URLs**: `#/slide-name` para enlazar directamente a un slide
- **Contador**: muestra "N/16" en la esquina inferior derecha

## Slide Names (para hash navigation)

```
hero, the-problem, what-is-subagent, orchestration-patterns, orchestration-benefits, 
skills-concept, skill-anatomy, reference-skills, skills-practice, 
subagent-skills-synergy, context-management, real-world-patterns, 
common-pitfalls, best-practices, workshop-preview, closing
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

- **NO usar `lucide-svelte`** para iconos en los slides — usar inline SVGs en su lugar. La versión instalada tiene un bug de resolución de módulos con Vite.
- **Svelte 5 syntax**: usar `$state()`, `$effect()`, `onclick` (sin `on:click`) para código nuevo.
- **Tailwind 4**: no usar `tailwind.config.js` para temas — usar CSS custom properties directamente en `global.css`.
