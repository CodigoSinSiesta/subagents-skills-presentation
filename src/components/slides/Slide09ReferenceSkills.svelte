<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Implementación</span>
      <h2 class="title">Skills en la <span class="highlight">Práctica</span></h2>
      <p class="subtitle">CLAUDE.md, AGENTS.md y el ecosistema real de skills.</p>
    </div>

    <div class="main-layout">
      <!-- CLAUDE.md Card -->
      <div class="skill-card card-glass">
        <div class="card-header">
          <span class="card-icon">📄</span>
          <h3 class="card-title">CLAUDE.md</h3>
        </div>
        <p class="card-desc">El archivo que define las reglas de tu proyecto para CUALQUIER agente de IA</p>
        <div class="code-block">
          <pre><code><span class="c"># CLAUDE.md</span>
<span class="c">// Reglas del proyecto</span>

## Stack
- React 19 + TypeScript
- Tailwind 4
- Zustand para estado

## Patrones
- Container/Presenter
- Atomic Design
- TDD obligatorio

## Prohibido
- any type
- useEffect sin cleanup
- Props drilling</code></pre>
        </div>
        <div class="card-label">
          <span class="label-icon">✓</span>
          <span>Usado por: Claude Code, Cursor, todos los agentes compatibles</span>
        </div>
      </div>

      <!-- AGENTS.md Card -->
      <div class="skill-card card-glass">
        <div class="card-header">
          <span class="card-icon">📁</span>
          <h3 class="card-title">AGENTS.md</h3>
        </div>
        <p class="card-desc">Instrucciones más granulares, por directorio o por agente</p>
        <div class="code-block">
          <pre><code><span class="c"># src/components/AGENTS.md</span>

## Componentes UI
- Usar design tokens
- Accesibilidad AA
- Storybook para docs

## Naming
- PascalCase
- Prefijo por dominio:
  - Ui* (genéricos)
  - Feature* (dominio)
  - Layout* (estructura)</code></pre>
        </div>
        <div class="card-label">
          <span class="label-icon">↳</span>
          <span>Herencia: AGENTS.md en subdirectorios hereda del padre</span>
        </div>
      </div>

      <!-- Skills Directory Card -->
      <div class="skill-card card-glass">
        <div class="card-header">
          <span class="card-icon">⚡</span>
          <h3 class="card-title">.claude/skills/</h3>
        </div>
        <p class="card-desc">Skills reutilizables como archivos Markdown con instrucciones detalladas</p>
        <div class="code-block">
          <pre><code><span class="c"># ~/.claude/skills/react-19/SKILL.md</span>

## React 19 Patterns

### Server Components
- 'use server' directive
- No hooks en server

### use() Hook
- Lee recursos en render
- Suspense boundary

### Actions
- form action prop
- useFormStatus()</code></pre>
        </div>
        <div class="card-label">
          <span class="label-icon">∞</span>
          <span>User-level (~/.claude) vs Project-level (./.claude)</span>
        </div>
      </div>
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">💡</span>
      <p><strong>Clave:</strong> Los skills NO son mágicos. Son prompts estructurados que el agente carga automáticamente según el contexto. Cuanto más específico, mejor resultado.</p>
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 70%, rgba(30, 58, 138, 0.1) 0%, transparent 55%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    padding: var(--spacing-2xl) var(--spacing-content);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  .slide-header { text-align: center; }

  .label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
  }

  .title {
    font-size: clamp(2rem, 4.5vw, 3.2rem);
    font-weight: 800;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-sm);
    line-height: 1.15;
  }

  .highlight {
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--color-electric);
    opacity: 0.8;
    margin-bottom: 0;
    font-family: var(--font-mono);
  }

  /* Main layout */
  .main-layout {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    align-items: stretch;
  }

  /* Skill cards */
  .skill-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-xl);
    border-color: rgba(59, 130, 246, 0.25);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .card-icon {
    font-size: 1.5rem;
  }

  .card-title {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--color-electric);
    margin: 0;
  }

  .card-desc {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
    line-height: 1.5;
    margin: 0;
  }

  .code-block {
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(59, 130, 246, 0.15);
    border-radius: var(--radius-sm);
    overflow: hidden;
    flex: 1;
  }

  .code-block pre {
    padding: var(--spacing-md);
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    line-height: 1.6;
    color: var(--color-neutral-light);
    opacity: 0.9;
  }

  .c {
    color: var(--color-electric);
    opacity: 0.6;
    font-style: italic;
  }

  .card-label {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(30, 58, 138, 0.2);
    border-radius: var(--radius-sm);
    font-size: 0.72rem;
    color: var(--color-electric);
    font-family: var(--font-mono);
  }

  .label-icon {
    font-weight: 800;
    font-size: 0.9rem;
  }

  /* Bottom insight */
  .bottom-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: var(--radius-md);
  }

  .insight-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .bottom-insight p {
    font-size: 0.88rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.55;
    margin: 0;
  }

  .bottom-insight strong {
    color: var(--color-electric);
    font-weight: 700;
  }

  /* Mobile: Tablet */
  @media (max-width: 900px) {
    .main-layout {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }
  }

  /* Mobile: Small tablet / large phone */
  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-lg);
    }

    .title {
      font-size: clamp(1.6rem, 5vw, 2.4rem);
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .main-layout {
      gap: var(--spacing-md);
    }

    .skill-card {
      padding: var(--spacing-lg);
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 1.3rem;
    }

    .card-title {
      font-size: 1rem;
    }

    .card-desc {
      font-size: 0.8rem;
    }

    .code-block pre {
      padding: var(--spacing-sm) var(--spacing-md);
      font-size: 0.68rem;
    }

    .card-label {
      font-size: 0.68rem;
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .bottom-insight {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .insight-icon {
      font-size: 1.1rem;
    }

    .bottom-insight p {
      font-size: 0.8rem;
    }
  }

  /* Mobile: Phone */
  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
    }

    .slide-header {
      margin-bottom: var(--spacing-sm);
    }

    .label {
      font-size: 0.7rem;
      margin-bottom: var(--spacing-xs);
    }

    .title {
      font-size: clamp(1.4rem, 6vw, 1.8rem);
    }

    .subtitle {
      font-size: 0.8rem;
    }

    .skill-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .card-header {
      gap: var(--spacing-xs);
    }

    .card-icon {
      font-size: 1.2rem;
    }

    .card-title {
      font-size: 0.95rem;
    }

    .card-desc {
      font-size: 0.75rem;
    }

    .code-block pre {
      padding: var(--spacing-sm);
      font-size: 0.62rem;
      line-height: 1.5;
    }

    .card-label {
      font-size: 0.62rem;
      padding: var(--spacing-xs);
    }

    .label-icon {
      font-size: 0.85rem;
    }

    .bottom-insight {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .insight-icon {
      font-size: 1rem;
    }

    .bottom-insight p {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  }

  /* Mobile: Small phone */
  @media (max-width: 390px) {
    .slide-content {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .title {
      font-size: clamp(1.2rem, 6vw, 1.6rem);
    }

    .subtitle {
      font-size: 0.75rem;
    }

    .skill-card {
      padding: var(--spacing-sm);
    }

    .card-icon {
      font-size: 1.1rem;
    }

    .card-title {
      font-size: 0.9rem;
    }

    .card-desc {
      font-size: 0.7rem;
    }

    .code-block pre {
      padding: var(--spacing-sm);
      font-size: 0.58rem;
    }

    .card-label {
      font-size: 0.58rem;
    }

    .bottom-insight {
      padding: var(--spacing-sm);
    }

    .bottom-insight p {
      font-size: 0.7rem;
    }
  }

  /* Short desktop screens */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-content);
      gap: var(--spacing-md);
    }

    .main-layout {
      gap: var(--spacing-md);
    }

    .skill-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 1.3rem;
    }

    .card-title {
      font-size: 1rem;
    }

    .card-desc {
      font-size: 0.8rem;
    }

    .code-block pre {
      padding: var(--spacing-sm) var(--spacing-md);
      font-size: 0.68rem;
    }

    .card-label {
      font-size: 0.68rem;
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .bottom-insight {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .insight-icon {
      font-size: 1.1rem;
    }

    .bottom-insight p {
      font-size: 0.8rem;
    }
  }
</style>
