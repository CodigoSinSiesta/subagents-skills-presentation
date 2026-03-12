<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const dos = [
    { text: 'Define skills concretos con reglas específicas del proyecto' },
    { text: 'Pasa el contexto mínimo necesario a cada subagente' },
    { text: 'Usa CLAUDE.md como fuente de verdad del proyecto' },
    { text: 'Verifica el output de cada subagente antes de integrarlo' },
    { text: 'Empieza con un solo agente. Escala a orquestación solo cuando sea necesario' },
    { text: 'Mantén tus skills versionados y documentados' },
  ];

  const donts = [
    { text: 'Skills vagos: "escribe buen código" no es un skill' },
    { text: 'Orquestación para tareas que un solo agente resuelve bien' },
    { text: 'Subagentes sin instrucciones claras — producirán outputs inconsistentes' },
    { text: 'Compartir el historial completo de conversación con subagentes' },
    { text: 'Ignorar el coste en tokens de la multi-agentación' },
    { text: 'Copiar skills entre proyectos sin adaptarlos al contexto local' },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Craftmanship</span>
      <h2 class="title">Buenas <span class="highlight">Prácticas</span></h2>
      <p class="subtitle">Los skills y subagentes son tan buenos como quien los diseña.</p>
    </div>

    <div class="practices-grid">
      <div class="practices-col">
        <div class="col-header do-header">
          <span class="col-icon">✅</span>
          <h3>Hazlo</h3>
        </div>
        <div class="practices-list">
          {#each dos as item}
            <div class="practice-item do-item">
              <span class="item-check do-check">✓</span>
              <span class="item-text">{item.text}</span>
            </div>
          {/each}
        </div>
      </div>

      <div class="practices-col">
        <div class="col-header dont-header">
          <span class="col-icon">❌</span>
          <h3>Evita</h3>
        </div>
        <div class="practices-list">
          {#each donts as item}
            <div class="practice-item dont-item">
              <span class="item-check dont-check">✗</span>
              <span class="item-text">{item.text}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">🏗️</span>
      <p>Tú eres el <strong>arquitecto</strong>. Los agentes son el <strong>equipo</strong>. Si el arquitecto no sabe lo que quiere, el equipo construye un desastre.</p>
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
      radial-gradient(ellipse at 15% 30%, rgba(16, 185, 129, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 85% 70%, rgba(239, 68, 68, 0.04) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 80%, rgba(30, 58, 138, 0.1) 0%, transparent 55%);
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

  /* Practices grid */
  .practices-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }

  .practices-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .col-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-sm);
  }

  .do-header {
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
  }

  .dont-header {
    background: rgba(239, 68, 68, 0.08);
    border: 1px solid rgba(239, 68, 68, 0.2);
  }

  .col-icon { font-size: 1.2rem; }

  .col-header h3 {
    font-size: 1.1rem;
    font-weight: 800;
    margin-bottom: 0;
    color: var(--color-neutral-light);
  }

  .do-header h3  { color: #34d399; }
  .dont-header h3 { color: #f87171; }

  /* Practice items */
  .practices-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .practice-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-sm);
    border: 1px solid;
    transition: all var(--transition-fast);
  }

  .do-item {
    background: rgba(16, 185, 129, 0.05);
    border-color: rgba(16, 185, 129, 0.12);
  }

  .do-item:hover {
    background: rgba(16, 185, 129, 0.1);
    border-color: rgba(16, 185, 129, 0.25);
  }

  .dont-item {
    background: rgba(239, 68, 68, 0.04);
    border-color: rgba(239, 68, 68, 0.1);
  }

  .dont-item:hover {
    background: rgba(239, 68, 68, 0.08);
    border-color: rgba(239, 68, 68, 0.2);
  }

  .item-check {
    font-family: var(--font-mono);
    font-weight: 800;
    font-size: 0.9rem;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .do-check   { color: #34d399; }
  .dont-check { color: #f87171; }

  .item-text {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.82;
    line-height: 1.5;
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
    font-size: 1rem;
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

    .practices-grid {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .col-header {
      padding: var(--spacing-md);
    }

    .col-header h3 {
      font-size: 1rem;
    }

    .practice-item {
      padding: var(--spacing-md);
      min-height: 44px;
    }

    .item-text {
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

    .col-header {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .col-icon {
      font-size: 1rem;
    }

    .col-header h3 {
      font-size: 0.95rem;
    }

    .practice-item {
      padding: var(--spacing-sm) var(--spacing-md);
      min-height: 48px;
      gap: var(--spacing-sm);
    }

    .item-check {
      font-size: 0.85rem;
    }

    .item-text {
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

    .col-header {
      padding: var(--spacing-sm);
    }

    .col-icon {
      font-size: 0.9rem;
    }

    .col-header h3 {
      font-size: 0.9rem;
    }

    .practice-item {
      padding: var(--spacing-sm);
      min-height: 44px;
    }

    .item-check {
      font-size: 0.8rem;
    }

    .item-text {
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

    .practices-grid {
      gap: var(--spacing-md);
    }

    .practices-col {
      gap: var(--spacing-sm);
    }

    .col-header {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .practices-list {
      gap: var(--spacing-xs);
    }

    .practice-item {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .item-text {
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
