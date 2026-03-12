<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const pitfalls = [
    {
      icon: '❌',
      title: 'Sobre-orquestar',
      text: 'No todo necesita subagentes. Una tarea simple con un orquestador es como matar moscas a cañonazos.'
    },
    {
      icon: '❌',
      title: 'Contexto excesivo',
      text: 'Pasar TODO el contexto a cada subagente. Más datos no es más inteligencia — es más ruido.'
    },
    {
      icon: '❌',
      title: 'Skills genéricos',
      text: 'Un skill que dice "haz buen código" no aporta nada. Los skills deben ser ESPECÍFICOS y CONCRETOS.'
    },
    {
      icon: '❌',
      title: 'No verificar outputs',
      text: 'Confiar ciegamente en el resultado de un subagente sin validación. Siempre verifica.'
    },
    {
      icon: '❌',
      title: 'Ignorar el coste',
      text: 'Cada subagente consume tokens. 5 subagentes haciendo lo que uno podría = 5x el coste.'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Cuidado</span>
      <h2 class="title">Errores <span class="highlight">Comunes</span></h2>
      <p class="subtitle">Lo que puede salir mal con subagentes y skills.</p>
    </div>

    <div class="pitfalls-grid">
      {#each pitfalls as pitfall, i}
        <div class="pitfall-card">
          <div class="pitfall-icon">{pitfall.icon}</div>
          <div class="pitfall-body">
            <h3 class="pitfall-title">{pitfall.title}</h3>
            <p class="pitfall-text">{pitfall.text}</p>
          </div>
        </div>
      {/each}
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">⚠️</span>
      <p>El 90% de los fracasos con agentes vienen de <strong>sobre-ingeniería</strong>. Empieza simple, escala cuando sea necesario.</p>
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
      radial-gradient(ellipse at 20% 20%, rgba(239, 68, 68, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 80%, rgba(239, 68, 68, 0.04) 0%, transparent 50%),
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
    color: #f87171;
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
    background: linear-gradient(135deg, #f87171, #ef4444);
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

  /* Pitfalls grid */
  .pitfalls-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--spacing-lg);
  }

  .pitfall-card {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: rgba(239, 68, 68, 0.05);
    border: 1px solid rgba(239, 68, 68, 0.15);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .pitfall-card:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
    transform: translateY(-2px);
  }

  .pitfall-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .pitfall-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .pitfall-title {
    font-size: 1rem;
    font-weight: 700;
    color: #fca5a5;
    margin-bottom: 0;
  }

  .pitfall-text {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    line-height: 1.55;
    margin-bottom: 0;
  }

  /* Bottom insight */
  .bottom-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.2);
    border-radius: var(--radius-md);
  }

  .insight-icon { font-size: 1.8rem; flex-shrink: 0; margin-top: 2px; }

  .bottom-insight p {
    font-size: 1rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.65;
    margin-bottom: 0;
  }

  .bottom-insight strong { color: #f87171; font-weight: 800; }

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

    .pitfalls-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .pitfall-card {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .pitfall-icon {
      font-size: 1.3rem;
    }

    .pitfall-title {
      font-size: 0.95rem;
    }

    .pitfall-text {
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

    .pitfall-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .pitfall-icon {
      font-size: 1.1rem;
    }

    .pitfall-title {
      font-size: 0.9rem;
    }

    .pitfall-text {
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

    .pitfall-card {
      padding: var(--spacing-sm);
    }

    .pitfall-icon {
      font-size: 1rem;
    }

    .pitfall-title {
      font-size: 0.85rem;
    }

    .pitfall-text {
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

    .pitfalls-grid {
      gap: var(--spacing-md);
    }

    .pitfall-card {
      padding: var(--spacing-md);
    }

    .pitfall-title {
      font-size: 0.95rem;
    }

    .pitfall-text {
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
</style>
