<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const sections = [
    {
      title: 'CLAUDE.md',
      desc: 'El archivo que define las reglas de tu proyecto para CUALQUIER agente de IA',
      code: `# Mi Proyecto
## Stack
## Arquitectura
## Reglas
## Skills`,
      label: 'Usado por: Claude Code, Cursor, todos los agentes compatibles'
    },
    {
      title: 'AGENTS.md',
      desc: 'Instrucciones más granulares, por directorio o por agente',
      code: `# Instructions for agents
## Frontend team
## Backend team`,
      label: 'Herencia: AGENTS.md en subdirectorios hereda del padre'
    },
    {
      title: '.claude/skills/',
      desc: 'Skills reutilizables como archivos',
      code: `~/.claude/skills/react-19/SKILL.md`,
      label: 'User-level vs Project-level skills'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Implementación</span>
      <h2 class="title">Skills en la <span class="highlight">Práctica</span></h2>
      <p class="subtitle">CLAUDE.md, AGENTS.md y el ecosistema real de skills.</p>
    </div>

    <div class="sections-grid">
      {#each sections as section}
        <div class="section-card">
          <h3 class="section-title">{section.title}</h3>
          <p class="section-desc">{section.desc}</p>
          <div class="code-block">
            <pre><code>{section.code}</code></pre>
          </div>
          <span class="section-label">{section.label}</span>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 75% 75%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(30, 58, 138, 0.08) 0%, transparent 60%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    padding: var(--spacing-xl) var(--spacing-content);
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

  /* Sections grid */
  .sections-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }

  .section-card {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.2);
    border: 1px solid rgba(96, 165, 250, 0.15);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .section-card:hover {
    background: rgba(30, 58, 138, 0.35);
    border-color: rgba(96, 165, 250, 0.3);
    transform: translateY(-2px);
  }

  .section-title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--color-electric);
    margin-bottom: var(--spacing-sm);
    font-family: var(--font-mono);
  }

  .section-desc {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    margin-bottom: var(--spacing-md);
    line-height: 1.5;
  }

  .code-block {
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(96, 165, 250, 0.1);
    border-radius: var(--radius-sm);
    padding: var(--spacing-md);
    margin-bottom: var(--spacing-md);
    flex-grow: 1;
  }

  .code-block pre,
  .code-block code {
    margin: 0;
    padding: 0;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-electric);
    opacity: 0.9;
    line-height: 1.6;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .section-label {
    font-size: 0.75rem;
    color: var(--color-neutral-light);
    opacity: 0.6;
    font-style: italic;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-lg);
    }

    .title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
    .subtitle { font-size: 0.9rem; }

    .sections-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .section-card { padding: var(--spacing-md); }
    .section-title { font-size: 1rem; }
    .section-desc { font-size: 0.82rem; }
    .code-block { padding: var(--spacing-sm); }
    .code-block pre,
    .code-block code { font-size: 0.75rem; }
    .section-label { font-size: 0.7rem; }
  }

  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
    }

    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.4rem, 6vw, 1.8rem); }
    .subtitle { font-size: 0.8rem; }

    .section-card { padding: var(--spacing-sm) var(--spacing-md); }
    .section-title { font-size: 0.95rem; }
    .section-desc { font-size: 0.78rem; }
    .code-block { padding: var(--spacing-xs); }
    .code-block pre,
    .code-block code { font-size: 0.7rem; }
    .section-label { font-size: 0.65rem; }
  }

  @media (max-width: 390px) {
    .slide-content {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .title { font-size: clamp(1.2rem, 6vw, 1.6rem); }
    .subtitle { font-size: 0.75rem; }

    .section-card { padding: var(--spacing-sm); }
    .section-title { font-size: 0.9rem; }
    .section-desc { font-size: 0.72rem; }
    .code-block pre,
    .code-block code { font-size: 0.65rem; }
    .section-label { font-size: 0.6rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: 12px var(--spacing-content);
      gap: var(--spacing-md);
    }

    .slide-header { margin-bottom: var(--spacing-sm); }
    .title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }

    .sections-grid { gap: var(--spacing-md); }
    .section-card { padding: var(--spacing-md); }
    .section-title { font-size: 1rem; }
    .section-desc { font-size: 0.82rem; }
    .code-block { padding: var(--spacing-sm); }
    .code-block pre,
    .code-block code { font-size: 0.72rem; }
    .section-label { font-size: 0.7rem; }
  }
</style>
