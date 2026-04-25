<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const benefits = [
    {
      icon: '⚡',
      title: 'Paralelismo',
      description: 'Múltiples subagentes trabajando simultáneamente',
      metric: '4-8x',
      metricLabel: 'más rápido en tareas complejas'
    },
    {
      icon: '🎯',
      title: 'Especialización',
      description: 'Cada agente domina su tarea',
      metric: '↑ Calidad',
      metricLabel: 'resultados más precisos y consistentes'
    },
    {
      icon: '🔒',
      title: 'Aislamiento de Contexto',
      description: 'Cada subagente ve solo lo necesario',
      metric: '↓ Ruido',
      metricLabel: 'menos confusión, menos alucinaciones'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Ventajas</span>
      <h2 class="title">Por qué <span class="highlight">orquestar</span></h2>
      <p class="subtitle">Los beneficios reales de la arquitectura multi-agente.</p>
    </div>

    <div class="benefits-grid">
      {#each benefits as benefit}
        <div class="benefit-card card-glass">
          <div class="benefit-icon">{benefit.icon}</div>
          <h3 class="benefit-title">{benefit.title}</h3>
          <p class="benefit-description">{benefit.description}</p>
          <div class="benefit-metric">
            <span class="metric-value">{benefit.metric}</span>
            <span class="metric-label">{benefit.metricLabel}</span>
          </div>
        </div>
      {/each}
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">💡</span>
      <p>La orquestación no es overhead. Es la diferencia entre un junior que hace todo y un equipo senior que <strong>divide y vencerás</strong>.</p>
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
      radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(30, 58, 138, 0.1) 0%, transparent 55%),
      radial-gradient(ellipse at 50% 90%, rgba(96, 165, 250, 0.05) 0%, transparent 40%);
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

  /* Benefits grid */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
  }

  .benefit-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--spacing-xl);
    gap: var(--spacing-md);
  }

  .benefit-icon {
    font-size: 2.5rem;
    line-height: 1;
  }

  .benefit-title {
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--color-electric);
    margin-bottom: 0;
  }

  .benefit-description {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    line-height: 1.5;
    margin-bottom: 0;
  }

  .benefit-metric {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    margin-top: var(--spacing-sm);
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(96, 165, 250, 0.15);
    width: 100%;
  }

  .metric-value {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 800;
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .metric-label {
    font-size: 0.75rem;
    color: var(--color-electric);
    opacity: 0.7;
    font-family: var(--font-mono);
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
    font-size: 1.8rem;
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

    .benefits-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .benefit-card {
      padding: var(--spacing-lg);
    }

    .benefit-icon {
      font-size: 2rem;
    }

    .benefit-title {
      font-size: 1.1rem;
    }

    .benefit-description {
      font-size: 0.85rem;
    }

    .metric-value {
      font-size: 1.5rem;
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

    .benefit-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .benefit-icon {
      font-size: 1.8rem;
    }

    .benefit-title {
      font-size: 1rem;
    }

    .benefit-description {
      font-size: 0.8rem;
    }

    .benefit-metric {
      margin-top: var(--spacing-xs);
      padding-top: var(--spacing-sm);
    }

    .metric-value {
      font-size: 1.3rem;
    }

    .metric-label {
      font-size: 0.7rem;
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

    .benefit-card {
      padding: var(--spacing-sm);
    }

    .benefit-icon {
      font-size: 1.6rem;
    }

    .benefit-title {
      font-size: 0.95rem;
    }

    .benefit-description {
      font-size: 0.75rem;
    }

    .metric-value {
      font-size: 1.2rem;
    }

    .metric-label {
      font-size: 0.65rem;
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

    .subtitle {
      font-size: 0.9rem;
    }

    .benefits-grid {
      gap: var(--spacing-md);
    }

    .benefit-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .benefit-icon {
      font-size: 2rem;
    }

    .benefit-title {
      font-size: 1rem;
    }

    .benefit-description {
      font-size: 0.82rem;
    }

    .benefit-metric {
      margin-top: var(--spacing-xs);
      padding-top: var(--spacing-sm);
    }

    .metric-value {
      font-size: 1.4rem;
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
</style>
