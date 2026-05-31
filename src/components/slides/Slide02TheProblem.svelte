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
      <span class="label">El Reto</span>
      <h2 class="title">¿Por qué un solo agente <span class="highlight">no escala?</span></h2>
      <p class="subtitle">Cuando la complejidad supera la capacidad de un agente individual.</p>
    </div>

    <div class="problems-grid">
      <div class="problem-card card-glass">
        <div class="problem-icon">🧠</div>
        <h3 class="problem-title">Contexto limitado</h3>
        <p class="problem-desc">Un solo agente tiene una ventana de contexto finita. Tareas grandes desbordan su capacidad de atención.</p>
      </div>

      <div class="problem-card card-glass">
        <div class="problem-icon">🔧</div>
        <h3 class="problem-title">Sin especialización</h3>
        <p class="problem-desc">Un agente generalista no puede ser experto en todo. Testing, review, documentación... cada tarea requiere expertise diferente.</p>
      </div>

      <div class="problem-card card-glass">
        <div class="problem-icon">⏱️</div>
        <h3 class="problem-title">Ejecución secuencial</h3>
        <p class="problem-desc">Un solo agente procesa una cosa a la vez. Sin paralelismo, los proyectos complejos se eternizan.</p>
      </div>
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">💡</span>
      <p>La solución no es un agente más grande. Es un <strong>equipo de agentes que colaboran.</strong></p>
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
      radial-gradient(ellipse at 20% 30%, rgba(239, 68, 68, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 70%, rgba(30, 58, 138, 0.1) 0%, transparent 55%);
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
    background: linear-gradient(135deg, #f87171, #fb923c);
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

  /* Problems grid */
  .problems-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }

  .problem-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-md);
    padding: var(--spacing-xl);
    transition: all var(--transition-base);
  }

  .problem-card:hover {
    transform: translateY(-4px);
    border-color: rgba(239, 68, 68, 0.4);
    background: rgba(239, 68, 68, 0.08);
  }

  .problem-icon {
    font-size: 3rem;
    line-height: 1;
  }

  .problem-title {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: 0;
    font-family: var(--font-display);
  }

  .problem-desc {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
    line-height: 1.6;
    margin-bottom: 0;
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

  .insight-icon { font-size: 2rem; flex-shrink: 0; margin-top: 2px; }

  .bottom-insight p {
    font-size: 1.05rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.65;
    margin-bottom: 0;
  }

  .bottom-insight strong { color: var(--color-electric); font-weight: 800; }

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

    .problems-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .problem-card {
      padding: var(--spacing-lg);
      flex-direction: row;
      text-align: left;
      align-items: flex-start;
      min-height: 60px;
    }

    .problem-icon {
      font-size: 2rem;
      flex-shrink: 0;
    }

    .problem-title {
      font-size: 1rem;
    }

    .problem-desc {
      font-size: 0.82rem;
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

    .problem-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
      min-height: 48px;
    }

    .problem-icon {
      font-size: 1.6rem;
    }

    .problem-title {
      font-size: 0.95rem;
    }

    .problem-desc {
      font-size: 0.78rem;
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

    .problem-card {
      padding: var(--spacing-sm);
      min-height: 44px;
    }

    .problem-icon {
      font-size: 1.4rem;
    }

    .problem-title {
      font-size: 0.9rem;
    }

    .problem-desc {
      font-size: 0.72rem;
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

  /* Short desktop screens */
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

    .problems-grid {
      gap: var(--spacing-md);
    }

    .problem-card {
      padding: var(--spacing-lg);
      gap: var(--spacing-sm);
    }

    .problem-icon {
      font-size: 2.2rem;
    }

    .problem-title {
      font-size: 1rem;
    }

    .problem-desc {
      font-size: 0.82rem;
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
