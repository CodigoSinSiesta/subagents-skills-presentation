<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const steps = [
    'Crear la estructura del skill (SKILL.md)',
    'Definir las instrucciones del proyecto (stack, patrones, convenciones)',
    'Configurar el contexto (archivos clave, dependencias)',
    'Probar el skill con un agente real',
    'Iterar y refinar basándote en los resultados'
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Hands-on</span>
      <h2 class="title">¡Vamos al <span class="highlight">Taller!</span></h2>
      <p class="subtitle">Es hora de construir tu primer skill desde cero.</p>
    </div>

    <div class="workshop-card">
      <div class="card-header">
        <span class="card-icon">🛠️</span>
        <h3 class="card-title">Skill de Arquitectura de Proyecto</h3>
      </div>
      
      <p class="card-description">
        Un skill que enseña al agente las convenciones, patrones y reglas de TU proyecto.
      </p>

      <div class="steps-section">
        <h4 class="steps-title">Pasos del taller:</h4>
        <div class="steps-list">
          {#each steps as step, i}
            <div class="step-item">
              <span class="step-number">{i + 1}</span>
              <span class="step-text">{step}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="learn-section">
        <span class="learn-icon">💡</span>
        <p class="learn-text">Cómo un skill bien diseñado transforma por completo el output de cualquier agente.</p>
      </div>
    </div>

    <div class="cta-section">
      <p class="cta-text">Abre tu editor favorito. Vamos a programar.</p>
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
      radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(30, 58, 138, 0.12) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(96, 165, 250, 0.06) 0%, transparent 60%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 900px;
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

  /* Workshop card */
  .workshop-card {
    background: rgba(30, 58, 138, 0.12);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-lg);
    padding: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .card-icon {
    font-size: 1.8rem;
  }

  .card-title {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: 0;
  }

  .card-description {
    font-size: 0.95rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    line-height: 1.6;
    margin-bottom: 0;
  }

  /* Steps */
  .steps-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .steps-title {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-electric);
    opacity: 0.7;
    margin-bottom: 0;
  }

  .steps-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .step-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(59, 130, 246, 0.06);
    border-radius: var(--radius-sm);
    transition: all var(--transition-fast);
  }

  .step-item:hover {
    background: rgba(59, 130, 246, 0.12);
  }

  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 28px;
    background: rgba(96, 165, 250, 0.2);
    border-radius: 50%;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--color-electric);
    flex-shrink: 0;
  }

  .step-text {
    font-size: 0.88rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.5;
    padding-top: 2px;
  }

  /* Learn section */
  .learn-section {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(16, 185, 129, 0.08);
    border: 1px solid rgba(16, 185, 129, 0.2);
    border-radius: var(--radius-sm);
  }

  .learn-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .learn-text {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.55;
    margin-bottom: 0;
  }

  /* CTA */
  .cta-section {
    text-align: center;
    padding-top: var(--spacing-sm);
  }

  .cta-text {
    font-family: var(--font-mono);
    font-size: 1.1rem;
    color: var(--color-electric);
    opacity: 0.9;
    margin-bottom: 0;
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

    .workshop-card {
      padding: var(--spacing-lg);
      gap: var(--spacing-md);
    }

    .card-icon {
      font-size: 1.5rem;
    }

    .card-title {
      font-size: 1.1rem;
    }

    .card-description {
      font-size: 0.9rem;
    }

    .step-item {
      padding: var(--spacing-sm);
    }

    .step-number {
      min-width: 24px;
      height: 24px;
      font-size: 0.7rem;
    }

    .step-text {
      font-size: 0.82rem;
    }

    .learn-section {
      padding: var(--spacing-sm);
    }

    .learn-icon {
      font-size: 1.1rem;
    }

    .learn-text {
      font-size: 0.85rem;
    }

    .cta-text {
      font-size: 1rem;
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

    .workshop-card {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .card-header {
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 1.3rem;
    }

    .card-title {
      font-size: 1rem;
    }

    .card-description {
      font-size: 0.85rem;
    }

    .steps-section {
      gap: var(--spacing-sm);
    }

    .step-item {
      padding: var(--spacing-xs) var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .step-number {
      min-width: 22px;
      height: 22px;
      font-size: 0.65rem;
    }

    .step-text {
      font-size: 0.78rem;
    }

    .learn-section {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .learn-icon {
      font-size: 1rem;
    }

    .learn-text {
      font-size: 0.8rem;
    }

    .cta-text {
      font-size: 0.9rem;
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

    .workshop-card {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .card-icon {
      font-size: 1.2rem;
    }

    .card-title {
      font-size: 0.95rem;
    }

    .card-description {
      font-size: 0.8rem;
    }

    .step-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .step-number {
      min-width: 20px;
      height: 20px;
      font-size: 0.6rem;
    }

    .step-text {
      font-size: 0.72rem;
    }

    .learn-text {
      font-size: 0.75rem;
    }

    .cta-text {
      font-size: 0.85rem;
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

    .workshop-card {
      padding: var(--spacing-lg);
      gap: var(--spacing-md);
    }

    .card-title {
      font-size: 1.1rem;
    }

    .card-description {
      font-size: 0.9rem;
    }

    .steps-section {
      gap: var(--spacing-sm);
    }

    .step-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .step-text {
      font-size: 0.85rem;
    }

    .learn-section {
      padding: var(--spacing-sm);
    }

    .cta-text {
      font-size: 1rem;
    }
  }
</style>
