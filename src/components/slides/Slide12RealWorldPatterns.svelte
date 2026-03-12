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
      <span class="label">Casos Reales</span>
      <h2 class="title">Patrones del <span class="highlight">Mundo Real</span></h2>
      <p class="subtitle">Cómo se usan subagentes y skills en herramientas reales.</p>
    </div>

    <div class="main-layout">
      <div class="example-card card-glass">
        <div class="example-header">
          <div class="brand-logo claude">🅒</div>
          <div class="brand-info">
            <h3 class="brand-name">Claude Code</h3>
            <span class="brand-type">CLI Agent · Anthropic</span>
          </div>
        </div>
        <div class="example-body">
          <p class="example-desc">
            Lanza subagentes para <strong>explorar el codebase</strong>, planificar cambios, e implementar en paralelo. Cada subagente tiene su propio contexto acotado.
          </p>
          <div class="flow-visual">
            <div class="flow-item">
              <span class="flow-icon">🔍</span>
              <span class="flow-label">Explore</span>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-item">
              <span class="flow-icon">📋</span>
              <span class="flow-label">Plan</span>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-item">
              <span class="flow-icon">🔨</span>
              <span class="flow-label">Build</span>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-item">
              <span class="flow-icon">✓</span>
              <span class="flow-label">Verify</span>
            </div>
          </div>
          <div class="tech-badges">
            <span class="badge">Subagentes paralelos</span>
            <span class="badge">Contexto acotado</span>
            <span class="badge">Consolidación de resultados</span>
          </div>
        </div>
      </div>

      <div class="example-card card-glass">
        <div class="example-header">
          <div class="brand-logo opencode">⚡</div>
          <div class="brand-info">
            <h3 class="brand-name">OpenCode / Sisyphus</h3>
            <span class="brand-type">Orquestador · OhMyOpenCode</span>
          </div>
        </div>
        <div class="example-body">
          <p class="example-desc">
            Orquestador que lee un plan, despacha tareas a <strong>agentes especializados</strong> (quick, deep, visual-engineering), y verifica resultados con QA scenarios.
          </p>
          <div class="flow-visual">
            <div class="flow-item main">
              <span class="flow-icon">📖</span>
              <span class="flow-label">Plan</span>
            </div>
            <div class="flow-arrow down">↓</div>
            <div class="flow-row">
              <div class="flow-item small">
                <span class="flow-icon">⚡</span>
                <span class="flow-label">Quick</span>
              </div>
              <div class="flow-item small">
                <span class="flow-icon">🧠</span>
                <span class="flow-label">Deep</span>
              </div>
              <div class="flow-item small">
                <span class="flow-icon">🎨</span>
                <span class="flow-label">Visual</span>
              </div>
            </div>
          </div>
          <div class="tech-badges">
            <span class="badge">Plan-driven</span>
            <span class="badge">Agentes tipados</span>
            <span class="badge">QA automático</span>
          </div>
        </div>
      </div>

      <div class="example-card card-glass">
        <div class="example-header">
          <div class="brand-logo v0">▲</div>
          <div class="brand-info">
            <h3 class="brand-name">Vercel v0</h3>
            <span class="brand-type">UI Generator · Vercel</span>
          </div>
        </div>
        <div class="example-body">
          <p class="example-desc">
            Agente que genera UI. Usa <strong>skills de referencia</strong> para React, Tailwind, accesibilidad. Cada iteración refina el output sin perder contexto.
          </p>
          <div class="flow-visual">
            <div class="flow-item">
              <span class="flow-icon">💬</span>
              <span class="flow-label">Prompt</span>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-item highlight">
              <span class="flow-icon">📚</span>
              <span class="flow-label">Skills</span>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-item">
              <span class="flow-icon">🎨</span>
              <span class="flow-label">UI</span>
            </div>
            <div class="flow-arrow">→</div>
            <div class="flow-item">
              <span class="flow-icon">🔄</span>
              <span class="flow-label">Iterate</span>
            </div>
          </div>
          <div class="tech-badges">
            <span class="badge">React 19 Skill</span>
            <span class="badge">Tailwind Skill</span>
            <span class="badge">A11y Skill</span>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom-takeaway">
      <span class="takeaway-icon">🎯</span>
      <p><strong>Patrón común:</strong> Todas estas herramientas combinan <span class="highlight-text">orquestación inteligente</span> + <span class="highlight-text">contexto especializado</span> + <span class="highlight-text">iteración con memoria</span>.</p>
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
      radial-gradient(ellipse at 20% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 75%, rgba(30, 58, 138, 0.1) 0%, transparent 50%);
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
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-lg);
    align-items: stretch;
  }

  .example-card {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding: 0;
    border-color: rgba(59, 130, 246, 0.25);
    overflow: hidden;
  }

  .example-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.2);
    border-bottom: 1px solid rgba(59, 130, 246, 0.15);
  }

  .brand-logo {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-sm);
    font-size: 1.3rem;
    font-weight: 800;
    flex-shrink: 0;
  }

  .brand-logo.claude {
    background: linear-gradient(135deg, #d97706, #f59e0b);
    color: white;
  }

  .brand-logo.opencode {
    background: linear-gradient(135deg, var(--color-primary-cobalt), var(--color-accent-bright));
    color: white;
  }

  .brand-logo.v0 {
    background: #000;
    color: white;
    font-family: var(--font-display);
  }

  .brand-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .brand-name {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    margin: 0;
  }

  .brand-type {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-electric);
    opacity: 0.7;
  }

  .example-body {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    flex: 1;
  }

  .example-desc {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.6;
    margin: 0;
  }

  .example-desc strong {
    color: var(--color-electric);
    font-weight: 700;
  }

  .flow-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-md);
    background: rgba(10, 22, 40, 0.4);
    border-radius: var(--radius-sm);
  }

  .flow-row {
    display: flex;
    gap: var(--spacing-sm);
  }

  .flow-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(59, 130, 246, 0.1);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: var(--radius-sm);
  }

  .flow-item.small {
    padding: var(--spacing-xs) var(--spacing-sm);
  }

  .flow-item.highlight {
    background: rgba(96, 165, 250, 0.2);
    border-color: rgba(96, 165, 250, 0.4);
  }

  .flow-icon {
    font-size: 1rem;
  }

  .flow-item.small .flow-icon {
    font-size: 0.9rem;
  }

  .flow-label {
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--color-electric);
    font-weight: 600;
  }

  .flow-arrow {
    font-size: 0.9rem;
    color: var(--color-electric);
    opacity: 0.4;
  }

  .flow-arrow.down {
    font-size: 0.8rem;
  }

  .tech-badges {
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacing-xs);
    margin-top: auto;
  }

  .badge {
    padding: 4px var(--spacing-sm);
    background: rgba(96, 165, 250, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.25);
    border-radius: var(--radius-sm);
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--color-electric);
    font-weight: 600;
  }

  .bottom-takeaway {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.15);
    border: 1px solid rgba(59, 130, 246, 0.2);
    border-radius: var(--radius-md);
  }

  .takeaway-icon {
    font-size: 1.3rem;
    flex-shrink: 0;
  }

  .bottom-takeaway p {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.55;
    margin: 0;
  }

  .bottom-takeaway strong {
    color: var(--color-electric);
  }

  .highlight-text {
    font-weight: 700;
    color: var(--color-accent-bright);
  }

  @media (max-width: 1000px) {
    .main-layout {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
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
      gap: var(--spacing-md);
    }

    .example-header {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .brand-logo {
      width: 38px;
      height: 38px;
      font-size: 1.1rem;
    }

    .brand-name {
      font-size: 0.9rem;
    }

    .brand-type {
      font-size: 0.62rem;
    }

    .example-body {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.8rem;
    }

    .flow-visual {
      padding: var(--spacing-sm);
    }

    .flow-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .flow-icon {
      font-size: 0.9rem;
    }

    .flow-label {
      font-size: 0.62rem;
    }

    .flow-arrow {
      font-size: 0.8rem;
    }

    .tech-badges {
      gap: 4px;
    }

    .badge {
      font-size: 0.58rem;
      padding: 3px var(--spacing-xs);
    }

    .bottom-takeaway {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .takeaway-icon {
      font-size: 1.1rem;
    }

    .bottom-takeaway p {
      font-size: 0.82rem;
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

    .example-header {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .brand-logo {
      width: 34px;
      height: 34px;
      font-size: 1rem;
    }

    .brand-name {
      font-size: 0.85rem;
    }

    .brand-type {
      font-size: 0.58rem;
    }

    .example-body {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.75rem;
    }

    .flow-visual {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .flow-row {
      gap: 4px;
    }

    .flow-item {
      padding: 4px var(--spacing-xs);
    }

    .flow-item.small {
      padding: 2px 6px;
    }

    .flow-icon {
      font-size: 0.85rem;
    }

    .flow-item.small .flow-icon {
      font-size: 0.8rem;
    }

    .flow-label {
      font-size: 0.58rem;
    }

    .flow-arrow {
      font-size: 0.7rem;
    }

    .badge {
      font-size: 0.55rem;
      padding: 2px 6px;
    }

    .bottom-takeaway {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .takeaway-icon {
      font-size: 1rem;
    }

    .bottom-takeaway p {
      font-size: 0.75rem;
      line-height: 1.5;
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

    .example-header {
      padding: var(--spacing-sm);
    }

    .brand-logo {
      width: 30px;
      height: 30px;
      font-size: 0.9rem;
    }

    .brand-name {
      font-size: 0.8rem;
    }

    .brand-type {
      font-size: 0.55rem;
    }

    .example-body {
      padding: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.7rem;
    }

    .flow-item {
      padding: 3px 6px;
    }

    .flow-icon {
      font-size: 0.8rem;
    }

    .flow-label {
      font-size: 0.55rem;
    }

    .badge {
      font-size: 0.52rem;
    }

    .bottom-takeaway {
      padding: var(--spacing-sm);
    }

    .bottom-takeaway p {
      font-size: 0.7rem;
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

    .example-header {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .brand-logo {
      width: 38px;
      height: 38px;
      font-size: 1.1rem;
    }

    .brand-name {
      font-size: 0.9rem;
    }

    .brand-type {
      font-size: 0.62rem;
    }

    .example-body {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .example-desc {
      font-size: 0.8rem;
    }

    .flow-visual {
      padding: var(--spacing-sm);
    }

    .flow-item {
      padding: var(--spacing-xs) var(--spacing-sm);
    }

    .flow-icon {
      font-size: 0.9rem;
    }

    .flow-label {
      font-size: 0.62rem;
    }

    .tech-badges {
      gap: 4px;
    }

    .badge {
      font-size: 0.58rem;
      padding: 3px var(--spacing-xs);
    }

    .bottom-takeaway {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .takeaway-icon {
      font-size: 1.1rem;
    }

    .bottom-takeaway p {
      font-size: 0.82rem;
    }
  }
</style>
