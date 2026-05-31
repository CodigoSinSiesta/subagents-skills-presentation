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
      <span class="label">Estructura</span>
      <h2 class="title">Anatomía de un <span class="highlight">Skill</span></h2>
      <p class="subtitle">Los componentes que hacen funcionar un skill.</p>
    </div>

    <div class="main-layout">
      <div class="code-panel">
        <div class="code-header">
          <span class="file-icon">📄</span>
          <span class="file-name">skill-code-review.md</span>
        </div>
        <pre class="code-content"><code><span class="section-title"># Skill: Code Review Expert</span>

<span class="section-label">## Instrucciones</span>
- Revisar cada archivo modificado
- Buscar patrones de error comunes
- Verificar convenciones del proyecto

<span class="section-label">## Contexto del Proyecto</span>
- Stack: TypeScript + React + Tailwind
- Patrón: Clean Architecture
- Tests: Vitest con coverage > 80%

<span class="section-label">## Herramientas disponibles</span>
- lsp_diagnostics: errores del IDE
- grep: buscar patrones en el código
- bash: ejecutar tests y linters</code></pre>
      </div>

      <div class="annotations-panel">
        <div class="annotation-item">
          <div class="annotation-connector instructions"></div>
          <div class="annotation-card">
            <span class="annotation-icon">📜</span>
            <div class="annotation-body">
              <h4>Instrucciones</h4>
              <p>Qué debe hacer el agente. Reglas específicas de comportamiento.</p>
            </div>
          </div>
        </div>

        <div class="annotation-item">
          <div class="annotation-connector context"></div>
          <div class="annotation-card">
            <span class="annotation-icon">🧠</span>
            <div class="annotation-body">
              <h4>Contexto</h4>
              <p>Información del proyecto que el agente necesita conocer.</p>
            </div>
          </div>
        </div>

        <div class="annotation-item">
          <div class="annotation-connector tools"></div>
          <div class="annotation-card">
            <span class="annotation-icon">🔧</span>
            <div class="annotation-body">
              <h4>Herramientas</h4>
              <p>Capacidades específicas que el agente puede invocar.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">✨</span>
      <p>Un skill bien escrito es la diferencia entre un agente que <strong>ayuda</strong> y uno que <strong>estorba</strong>.</p>
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
      radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 70% 80%, rgba(30, 58, 138, 0.1) 0%, transparent 55%);
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

  /* Main layout - two columns */
  .main-layout {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: var(--spacing-2xl);
    align-items: start;
  }

  /* Code panel */
  .code-panel {
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-lg);
    overflow: hidden;
  }

  .code-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(30, 58, 138, 0.3);
    border-bottom: 1px solid rgba(96, 165, 250, 0.15);
  }

  .file-icon {
    font-size: 1rem;
  }

  .file-name {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-electric);
    opacity: 0.9;
  }

  .code-content {
    padding: var(--spacing-xl);
    margin: 0;
    font-family: var(--font-mono);
    font-size: 0.85rem;
    line-height: 1.8;
    color: var(--color-neutral-light);
    overflow-x: auto;
  }

  .section-title {
    color: var(--color-electric);
    font-weight: 800;
    font-size: 1.1rem;
  }

  .section-label {
    color: #ffbd2e;
    font-weight: 700;
  }

  /* Annotations panel */
  .annotations-panel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
    padding-top: var(--spacing-lg);
  }

  .annotation-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  .annotation-connector {
    width: 40px;
    height: 2px;
    flex-shrink: 0;
    position: relative;
  }

  .annotation-connector::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }

  .annotation-connector.instructions {
    background: linear-gradient(to right, rgba(96, 165, 250, 0.8), rgba(96, 165, 250, 0.2));
  }

  .annotation-connector.instructions::before {
    background: var(--color-electric);
  }

  .annotation-connector.context {
    background: linear-gradient(to right, rgba(255, 189, 46, 0.8), rgba(255, 189, 46, 0.2));
  }

  .annotation-connector.context::before {
    background: #ffbd2e;
  }

  .annotation-connector.tools {
    background: linear-gradient(to right, rgba(40, 200, 64, 0.8), rgba(40, 200, 64, 0.2));
  }

  .annotation-connector.tools::before {
    background: #28c840;
  }

  .annotation-card {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(30, 58, 138, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-md);
    flex: 1;
  }

  .annotation-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .annotation-body h4 {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    margin-bottom: var(--spacing-xs);
  }

  .annotation-body p {
    font-size: 0.8rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
    line-height: 1.5;
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

  .insight-icon {
    font-size: 1.5rem;
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

    .main-layout {
      grid-template-columns: 1fr;
      gap: var(--spacing-lg);
    }

    .code-panel {
      order: 2;
    }

    .code-header {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .file-name {
      font-size: 0.75rem;
    }

    .code-content {
      padding: var(--spacing-md);
      font-size: 0.78rem;
      line-height: 1.7;
    }

    .section-title {
      font-size: 1rem;
    }

    .annotations-panel {
      order: 1;
      padding-top: 0;
      gap: var(--spacing-md);
    }

    .annotation-item {
      gap: var(--spacing-sm);
    }

    .annotation-connector {
      width: 30px;
    }

    .annotation-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .annotation-icon {
      font-size: 1.1rem;
    }

    .annotation-body h4 {
      font-size: 0.9rem;
    }

    .annotation-body p {
      font-size: 0.75rem;
    }

    .bottom-insight {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .insight-icon {
      font-size: 1.3rem;
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

    .main-layout {
      gap: var(--spacing-md);
    }

    .code-header {
      padding: var(--spacing-xs) var(--spacing-sm);
      gap: var(--spacing-xs);
    }

    .file-icon {
      font-size: 0.9rem;
    }

    .file-name {
      font-size: 0.7rem;
    }

    .code-content {
      padding: var(--spacing-sm) var(--spacing-md);
      font-size: 0.72rem;
      line-height: 1.6;
    }

    .section-title {
      font-size: 0.9rem;
    }

    .section-label {
      font-size: 0.85rem;
    }

    .annotations-panel {
      gap: var(--spacing-sm);
    }

    .annotation-item {
      gap: var(--spacing-xs);
    }

    .annotation-connector {
      width: 24px;
    }

    .annotation-connector::before {
      width: 6px;
      height: 6px;
    }

    .annotation-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-xs);
    }

    .annotation-icon {
      font-size: 1rem;
    }

    .annotation-body h4 {
      font-size: 0.85rem;
    }

    .annotation-body p {
      font-size: 0.72rem;
    }

    .bottom-insight {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .insight-icon {
      font-size: 1.2rem;
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

    .main-layout {
      gap: var(--spacing-sm);
    }

    .code-content {
      padding: var(--spacing-sm);
      font-size: 0.68rem;
      line-height: 1.5;
    }

    .section-title {
      font-size: 0.85rem;
    }

    .section-label {
      font-size: 0.8rem;
    }

    .annotations-panel {
      gap: var(--spacing-xs);
    }

    .annotation-connector {
      width: 20px;
    }

    .annotation-card {
      padding: var(--spacing-sm);
    }

    .annotation-icon {
      font-size: 0.9rem;
    }

    .annotation-body h4 {
      font-size: 0.8rem;
    }

    .annotation-body p {
      font-size: 0.68rem;
    }

    .bottom-insight {
      padding: var(--spacing-sm);
    }

    .insight-icon {
      font-size: 1.1rem;
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

    .main-layout {
      gap: var(--spacing-lg);
    }

    .code-header {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .code-content {
      padding: var(--spacing-md) var(--spacing-lg);
      font-size: 0.8rem;
      line-height: 1.65;
    }

    .section-title {
      font-size: 1rem;
    }

    .annotations-panel {
      padding-top: var(--spacing-sm);
      gap: var(--spacing-md);
    }

    .annotation-item {
      gap: var(--spacing-sm);
    }

    .annotation-connector {
      width: 32px;
    }

    .annotation-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .annotation-icon {
      font-size: 1.1rem;
    }

    .annotation-body h4 {
      font-size: 0.88rem;
    }

    .annotation-body p {
      font-size: 0.75rem;
    }

    .bottom-insight {
      padding: var(--spacing-md);
      gap: var(--spacing-md);
    }

    .insight-icon {
      font-size: 1.3rem;
    }

    .bottom-insight p {
      font-size: 0.9rem;
    }
  }
</style>
