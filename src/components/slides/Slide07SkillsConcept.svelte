<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const skillComponents = [
    {
      icon: '📜',
      title: 'Instrucciones',
      description: 'Reglas, patrones y convenciones que el agente debe seguir'
    },
    {
      icon: '🧠',
      title: 'Contexto',
      description: 'Información del dominio que el agente no tiene por defecto'
    },
    {
      icon: '🔧',
      title: 'Herramientas',
      description: 'Capacidades específicas que el agente puede invocar'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Skills</span>
      <h2 class="title">¿Qué es un <span class="highlight">Skill?</span></h2>
      <p class="subtitle">La pieza que transforma un agente genérico en un experto.</p>
    </div>

    <div class="main-layout">
      <div class="definition-card card-glass">
        <div class="definition-icon">📚</div>
        <p class="definition-text">
          Un <strong>skill</strong> es un paquete de conocimiento especializado que modifica el comportamiento de un agente para una tarea o dominio concreto.
        </p>
      </div>

      <div class="components-section">
        <h3 class="section-title">Un skill proporciona:</h3>
        <div class="components-grid">
          {#each skillComponents as component}
            <div class="component-card card-glass">
              <span class="component-icon">{component.icon}</span>
              <h4 class="component-title">{component.title}</h4>
              <p class="component-description">{component.description}</p>
            </div>
          {/each}
        </div>
      </div>

      <div class="analogy-card">
        <span class="analogy-icon">💡</span>
        <p>
          <strong>Analogy:</strong> Piensa en un skill como las especificaciones de un puesto de trabajo. Sin ellas, el empleado es capaz pero no sabe <em>QUÉ</em> hacer ni <em>CÓMO</em> hacerlo en tu empresa.
        </p>
      </div>
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
      radial-gradient(ellipse at 25% 20%, rgba(96, 165, 250, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 75% 80%, rgba(59, 130, 246, 0.08) 0%, transparent 55%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1100px;
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

  /* Main layout */
  .main-layout {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
  }

  /* Definition card - prominent */
  .definition-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-xl);
    padding: var(--spacing-2xl);
    background: rgba(30, 58, 138, 0.25);
    border-color: rgba(96, 165, 250, 0.35);
  }

  .definition-icon {
    font-size: 3rem;
    flex-shrink: 0;
  }

  .definition-text {
    font-size: 1.15rem;
    color: var(--color-neutral-light);
    line-height: 1.7;
    margin-bottom: 0;
  }

  .definition-text strong {
    color: var(--color-electric);
    font-weight: 800;
  }

  /* Components section */
  .components-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .section-title {
    font-family: var(--font-subheader);
    font-size: 1rem;
    font-weight: 600;
    color: var(--color-electric);
    opacity: 0.8;
    margin-bottom: 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .components-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
  }

  .component-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--spacing-xl);
    gap: var(--spacing-md);
  }

  .component-icon {
    font-size: 2rem;
    line-height: 1;
  }

  .component-title {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: 0;
  }

  .component-description {
    font-size: 0.82rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
    line-height: 1.5;
    margin-bottom: 0;
  }

  /* Analogy card */
  .analogy-card {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: rgba(255, 189, 46, 0.06);
    border: 1px solid rgba(255, 189, 46, 0.2);
    border-radius: var(--radius-md);
  }

  .analogy-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .analogy-card p {
    font-size: 0.95rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.6;
    margin-bottom: 0;
  }

  .analogy-card strong {
    color: #ffbd2e;
    font-weight: 700;
  }

  .analogy-card em {
    font-style: italic;
    color: var(--color-electric);
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

    .main-layout {
      gap: var(--spacing-lg);
    }

    .definition-card {
      flex-direction: column;
      text-align: center;
      padding: var(--spacing-xl);
      gap: var(--spacing-md);
    }

    .definition-icon {
      font-size: 2.5rem;
    }

    .definition-text {
      font-size: 1rem;
    }

    .components-section {
      gap: var(--spacing-md);
    }

    .components-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .component-card {
      flex-direction: row;
      text-align: left;
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .component-icon {
      font-size: 1.8rem;
    }

    .component-title {
      font-size: 0.95rem;
    }

    .component-description {
      font-size: 0.8rem;
    }

    .analogy-card {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .analogy-icon {
      font-size: 1.3rem;
    }

    .analogy-card p {
      font-size: 0.88rem;
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

    .definition-card {
      padding: var(--spacing-md);
    }

    .definition-icon {
      font-size: 2rem;
    }

    .definition-text {
      font-size: 0.9rem;
    }

    .section-title {
      font-size: 0.9rem;
    }

    .component-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .component-icon {
      font-size: 1.5rem;
    }

    .component-title {
      font-size: 0.9rem;
    }

    .component-description {
      font-size: 0.75rem;
    }

    .analogy-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .analogy-icon {
      font-size: 1.2rem;
    }

    .analogy-card p {
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

    .definition-card {
      padding: var(--spacing-sm);
    }

    .definition-icon {
      font-size: 1.8rem;
    }

    .definition-text {
      font-size: 0.85rem;
    }

    .section-title {
      font-size: 0.85rem;
    }

    .component-card {
      padding: var(--spacing-sm);
    }

    .component-icon {
      font-size: 1.3rem;
    }

    .component-title {
      font-size: 0.85rem;
    }

    .component-description {
      font-size: 0.72rem;
    }

    .analogy-card {
      padding: var(--spacing-sm);
    }

    .analogy-icon {
      font-size: 1.1rem;
    }

    .analogy-card p {
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

    .main-layout {
      gap: var(--spacing-md);
    }

    .definition-card {
      padding: var(--spacing-lg) var(--spacing-xl);
      gap: var(--spacing-lg);
    }

    .definition-icon {
      font-size: 2.5rem;
    }

    .definition-text {
      font-size: 1rem;
    }

    .components-section {
      gap: var(--spacing-sm);
    }

    .section-title {
      font-size: 0.9rem;
    }

    .components-grid {
      gap: var(--spacing-md);
    }

    .component-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .component-icon {
      font-size: 1.6rem;
    }

    .component-title {
      font-size: 0.9rem;
    }

    .component-description {
      font-size: 0.78rem;
    }

    .analogy-card {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .analogy-icon {
      font-size: 1.3rem;
    }

    .analogy-card p {
      font-size: 0.88rem;
    }
  }
</style>
