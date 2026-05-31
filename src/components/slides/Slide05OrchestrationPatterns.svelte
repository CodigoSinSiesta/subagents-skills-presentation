<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const patterns = [
    {
      id: 'single-agent',
      icon: '🎯',
      title: 'Single Agent',
      description: 'Un agente, múltiples herramientas. Simple pero limitado.',
      tag: 'Ideal para tareas simples',
    },
    {
      id: 'multi-agent',
      icon: '🤝',
      title: 'Multi-Agent',
      description: 'Agentes peers que colaboran. Cada uno con su expertise.',
      tag: 'Flexible pero complejo',
    },
    {
      id: 'orchestrator',
      icon: '🎭',
      title: 'Orchestrator',
      description: 'Un coordinador delega a workers especializados. Paralelismo real.',
      tag: 'El más usado en producción',
      featured: true,
    },
    {
      id: 'supervisor',
      icon: '👁️',
      title: 'Supervisor',
      description: 'Un agente revisa y aprueba outputs de otros. Control de calidad.',
      tag: 'Para precisión crítica',
    },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Arquitectura</span>
      <h2 class="title">Patrones de <span class="highlight">Orquestación</span></h2>
      <p class="subtitle">Cómo los agentes coordinan el trabajo.</p>
    </div>

    <div class="patterns-grid">
      {#each patterns as pattern}
        <div class="pattern-card card-glass" class:featured={pattern.featured}>
          <div class="card-icon">{pattern.icon}</div>
          <h3 class="card-title">{pattern.title}</h3>
          <p class="card-description">{pattern.description}</p>
          <span class="card-tag">{pattern.tag}</span>
        </div>
      {/each}
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">💡</span>
      <p>En esta charla nos centramos en <strong>Orchestrator + Workers</strong>, el patrón que escala de verdad.</p>
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
      radial-gradient(ellipse at 20% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 45%),
      radial-gradient(ellipse at 80% 75%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(30, 58, 138, 0.12) 0%, transparent 60%);
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

  .slide-header {
    text-align: center;
  }

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

  /* Patterns Grid */
  .patterns-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }

  .pattern-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg) var(--spacing-xl);
    border-radius: var(--radius-md);
    background: rgba(30, 58, 138, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.15);
    transition: all var(--transition-fast);
  }

  .pattern-card:hover {
    background: rgba(30, 58, 138, 0.12);
    border-color: rgba(96, 165, 250, 0.3);
    transform: translateY(-2px);
  }

  .pattern-card.featured {
    background: rgba(59, 130, 246, 0.12);
    border-color: rgba(96, 165, 250, 0.35);
    box-shadow: 0 0 30px rgba(59, 130, 246, 0.1);
  }

  .pattern-card.featured:hover {
    background: rgba(59, 130, 246, 0.18);
    border-color: rgba(96, 165, 250, 0.5);
  }

  .card-icon {
    font-size: 2.5rem;
    line-height: 1;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    margin-bottom: 0;
    line-height: 1.2;
  }

  .card-description {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
    line-height: 1.6;
    margin-bottom: 0;
    flex-grow: 1;
  }

  .card-tag {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    padding: var(--spacing-xs) var(--spacing-md);
    font-size: 0.72rem;
    font-family: var(--font-mono);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-electric);
    background: rgba(59, 130, 246, 0.12);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-sm);
  }

  .pattern-card.featured .card-tag {
    background: rgba(59, 130, 246, 0.2);
    border-color: rgba(96, 165, 250, 0.35);
    color: var(--color-accent-bright);
  }

  /* Bottom insight */
  .bottom-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: rgba(59, 130, 246, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-md);
  }

  .insight-icon {
    font-size: 2rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .bottom-insight p {
    font-size: 1rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.65;
    margin-bottom: 0;
  }

  .bottom-insight strong {
    color: var(--color-electric);
    font-weight: 800;
  }

  /* Mobile: Tablet / large phone */
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

    .patterns-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .pattern-card {
      padding: var(--spacing-md) var(--spacing-lg);
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 2rem;
    }

    .card-title {
      font-size: 1.1rem;
    }

    .card-description {
      font-size: 0.85rem;
    }

    .bottom-insight {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .insight-icon {
      font-size: 1.5rem;
    }

    .bottom-insight p {
      font-size: 0.9rem;
    }
  }

  /* Mobile: Phone */
  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
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

    .pattern-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 1.75rem;
    }

    .card-title {
      font-size: 1rem;
    }

    .card-description {
      font-size: 0.8rem;
    }

    .card-tag {
      font-size: 0.68rem;
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .bottom-insight {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .insight-icon {
      font-size: 1.3rem;
    }

    .bottom-insight p {
      font-size: 0.82rem;
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

    .pattern-card {
      padding: var(--spacing-sm);
      gap: var(--spacing-xs);
    }

    .card-icon {
      font-size: 1.5rem;
    }

    .card-title {
      font-size: 0.95rem;
    }

    .card-description {
      font-size: 0.75rem;
      line-height: 1.5;
    }

    .card-tag {
      font-size: 0.62rem;
    }

    .bottom-insight {
      padding: var(--spacing-sm);
    }

    .insight-icon {
      font-size: 1.2rem;
    }

    .bottom-insight p {
      font-size: 0.75rem;
    }
  }

  /* Short desktop screens: compress vertical spacing so content fits without scroll */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: 12px var(--spacing-content);
      gap: var(--spacing-md);
    }

    .slide-header {
      margin-bottom: var(--spacing-sm);
    }

    .title {
      font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    }

    .patterns-grid {
      gap: var(--spacing-md);
    }

    .pattern-card {
      padding: var(--spacing-md) var(--spacing-lg);
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 2rem;
    }

    .card-title {
      font-size: 1.1rem;
    }

    .card-description {
      font-size: 0.85rem;
    }

    .bottom-insight {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .insight-icon {
      font-size: 1.6rem;
    }

    .bottom-insight p {
      font-size: 0.9rem;
    }
  }
</style>
