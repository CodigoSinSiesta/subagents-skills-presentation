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
      <span class="label">Contexto</span>
      <h2 class="title">Gestión de <span class="highlight">Contexto</span></h2>
      <p class="subtitle">El recurso más valioso y escaso en la orquestación.</p>
    </div>

    <div class="main-layout">
      <div class="flow-section">
        <h3 class="section-title">Cómo fluye el contexto</h3>
        
        <div class="flow-diagram">
          <div class="flow-step user-step">
            <span class="step-icon">👤</span>
            <span class="step-label">User</span>
            <span class="step-desc">Petición completa con todo el contexto</span>
          </div>

          <div class="flow-arrow">
            <div class="arrow-line"></div>
            <span class="arrow-text">full context</span>
          </div>

          <div class="flow-step agent-step">
            <span class="step-icon">🤖</span>
            <span class="step-label">Agent</span>
            <span class="step-desc">Recibe y procesa contexto completo</span>
          </div>

          <div class="flow-arrow filtered">
            <div class="arrow-line"></div>
            <span class="arrow-text">filtered context</span>
          </div>

          <div class="flow-step subagent-step">
            <span class="step-icon">⚡</span>
            <span class="step-label">Subagent</span>
            <span class="step-desc">Solo el contexto relevante para su tarea</span>
          </div>

          <div class="flow-arrow result">
            <div class="arrow-line"></div>
            <span class="arrow-text">relevant only</span>
          </div>

          <div class="flow-step result-step">
            <span class="step-icon">✅</span>
            <span class="step-label">Result</span>
            <span class="step-desc">Output + contexto relevante, no todo</span>
          </div>
        </div>
      </div>

      <div class="rules-section">
        <h3 class="section-title">Reglas de oro</h3>
        
        <div class="rules-list">
          <div class="rule-item card-glass">
            <span class="rule-num">01</span>
            <p class="rule-text">Pasa <strong>SOLO lo necesario</strong> al subagente. Más contexto ≠ mejor resultado.</p>
          </div>

          <div class="rule-item card-glass">
            <span class="rule-num">02</span>
            <p class="rule-text">El resultado del subagente debe incluir <strong>contexto relevante</strong>, no solo el output.</p>
          </div>

          <div class="rule-item card-glass">
            <span class="rule-num">03</span>
            <p class="rule-text">El agente principal <strong>consolida</strong> resultados. No expone detalles internos al usuario.</p>
          </div>

          <div class="rule-item card-glass">
            <span class="rule-num">04</span>
            <p class="rule-text">Cada salto de contexto <strong>consume tokens</strong>. Diseña el flujo con eficiencia.</p>
          </div>
        </div>

        <div class="warning-card">
          <span class="warn-icon">⚠️</span>
          <div class="warn-content">
            <span class="warn-stat">80%</span>
            <p>de los fallos en orquestación vienen de pasar <strong>demasiado</strong> o <strong>demasiado poco</strong> contexto.</p>
          </div>
        </div>
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
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
  }

  .slide-background {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 30% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 70%, rgba(30, 58, 138, 0.1) 0%, transparent 50%);
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

  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--spacing-xl);
    align-items: start;
  }

  .section-title {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-electric);
    margin: 0 0 var(--spacing-lg) 0;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .flow-section {
    display: flex;
    flex-direction: column;
  }

  .flow-diagram {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .flow-step {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    border-radius: var(--radius-sm);
  }

  .step-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .step-label {
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    min-width: 70px;
  }

  .step-desc {
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    font-family: var(--font-mono);
  }

  .user-step {
    background: rgba(255, 189, 46, 0.08);
    border: 1px solid rgba(255, 189, 46, 0.25);
  }

  .agent-step {
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.3);
  }

  .subagent-step {
    background: rgba(96, 165, 250, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.2);
  }

  .result-step {
    background: rgba(40, 200, 64, 0.08);
    border: 1px solid rgba(40, 200, 64, 0.25);
  }

  .flow-arrow {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2px 0;
  }

  .arrow-line {
    width: 2px;
    height: 20px;
    background: linear-gradient(to bottom, rgba(96, 165, 250, 0.5), rgba(96, 165, 250, 0.2));
  }

  .arrow-text {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--color-electric);
    opacity: 0.5;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .flow-arrow.filtered .arrow-line {
    background: linear-gradient(to bottom, rgba(96, 165, 250, 0.4), rgba(96, 165, 250, 0.1));
  }

  .flow-arrow.result .arrow-line {
    background: linear-gradient(to bottom, rgba(40, 200, 64, 0.4), rgba(40, 200, 64, 0.2));
  }

  .rules-section {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .rules-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .rule-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    border-color: rgba(59, 130, 246, 0.2);
  }

  .rule-num {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 800;
    color: var(--color-electric);
    opacity: 0.6;
    flex-shrink: 0;
    min-width: 28px;
  }

  .rule-text {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.55;
    margin: 0;
  }

  .rule-text strong {
    color: var(--color-electric);
    font-weight: 700;
  }

  .warning-card {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg);
    background: rgba(255, 95, 87, 0.08);
    border: 1px solid rgba(255, 95, 87, 0.25);
    border-radius: var(--radius-md);
  }

  .warn-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .warn-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .warn-stat {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 800;
    color: #ff5f57;
    line-height: 1;
  }

  .warning-card p {
    font-size: 0.82rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.5;
    margin: 0;
  }

  .warning-card strong {
    color: #ff5f57;
  }

  @media (max-width: 900px) {
    .main-layout {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }
  }

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

    .section-title {
      font-size: 0.9rem;
      margin-bottom: var(--spacing-md);
    }

    .flow-step {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .step-icon {
      font-size: 1.1rem;
    }

    .step-label {
      font-size: 0.85rem;
      min-width: 60px;
    }

    .step-desc {
      font-size: 0.72rem;
    }

    .arrow-line {
      height: 16px;
    }

    .arrow-text {
      font-size: 0.58rem;
    }

    .rules-section {
      gap: var(--spacing-md);
    }

    .rule-item {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .rule-num {
      font-size: 0.78rem;
      min-width: 24px;
    }

    .rule-text {
      font-size: 0.8rem;
    }

    .warning-card {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .warn-icon {
      font-size: 1.3rem;
    }

    .warn-stat {
      font-size: 1.5rem;
    }

    .warning-card p {
      font-size: 0.78rem;
    }
  }

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

    .section-title {
      font-size: 0.85rem;
    }

    .flow-step {
      padding: var(--spacing-sm);
      flex-wrap: wrap;
    }

    .step-icon {
      font-size: 1rem;
    }

    .step-label {
      font-size: 0.8rem;
      min-width: 50px;
    }

    .step-desc {
      font-size: 0.68rem;
      width: 100%;
      padding-left: calc(1rem + var(--spacing-sm) + 50px);
    }

    .arrow-line {
      height: 14px;
    }

    .rule-item {
      padding: var(--spacing-sm);
    }

    .rule-num {
      font-size: 0.72rem;
    }

    .rule-text {
      font-size: 0.75rem;
    }

    .warning-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
      flex-direction: column;
      align-items: flex-start;
    }

    .warn-icon {
      font-size: 1.2rem;
    }

    .warn-stat {
      font-size: 1.3rem;
    }

    .warning-card p {
      font-size: 0.72rem;
    }
  }

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

    .flow-step {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .step-icon {
      font-size: 0.95rem;
    }

    .step-label {
      font-size: 0.75rem;
    }

    .step-desc {
      font-size: 0.62rem;
    }

    .rule-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .rule-text {
      font-size: 0.7rem;
    }

    .warning-card {
      padding: var(--spacing-sm);
    }

    .warn-stat {
      font-size: 1.2rem;
    }

    .warning-card p {
      font-size: 0.68rem;
    }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-content);
      gap: var(--spacing-md);
    }

    .main-layout {
      gap: var(--spacing-md);
    }

    .section-title {
      font-size: 0.9rem;
      margin-bottom: var(--spacing-md);
    }

    .flow-step {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .step-icon {
      font-size: 1.1rem;
    }

    .step-label {
      font-size: 0.85rem;
    }

    .step-desc {
      font-size: 0.72rem;
    }

    .arrow-line {
      height: 14px;
    }

    .rules-section {
      gap: var(--spacing-md);
    }

    .rule-item {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .rule-num {
      font-size: 0.78rem;
    }

    .rule-text {
      font-size: 0.8rem;
    }

    .warning-card {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .warn-icon {
      font-size: 1.3rem;
    }

    .warn-stat {
      font-size: 1.5rem;
    }

    .warning-card p {
      font-size: 0.78rem;
    }
  }
</style>
