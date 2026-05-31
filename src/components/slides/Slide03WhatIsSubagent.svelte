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
      <span class="label">Fundamentos</span>
      <h2 class="title">Anatomía de un <span class="highlight">Subagente</span></h2>
      <p class="subtitle">Un agente invocado por otro agente para una tarea específica.</p>
    </div>

    <div class="main-layout">
      <div class="diagram-section">
        <div class="main-agent card-glass">
          <div class="agent-icon">🤖</div>
          <div class="agent-body">
            <span class="agent-label">Agente Principal</span>
            <span class="agent-desc">Recibe el prompt, analiza y delega</span>
          </div>
        </div>

        <div class="arrows-row">
          <div class="arrow-line"></div>
          <div class="arrow-line"></div>
        </div>

        <div class="subagents-row">
          <div class="subagent card-glass">
            <span class="sub-icon">🔍</span>
            <span class="sub-name">Explore</span>
            <span class="sub-task">Buscar en codebase</span>
          </div>
          <div class="subagent card-glass">
            <span class="sub-icon">🔧</span>
            <span class="sub-name">Builder</span>
            <span class="sub-task">Implementar cambios</span>
          </div>
        </div>

        <div class="result-arrow">↓ resultados parciales ↓</div>

        <div class="result-box card-glass">
          <span class="result-icon">✅</span>
          <span class="result-text">Contexto enriquecido al agente principal</span>
        </div>
      </div>

      <div class="right-col">
        <div class="characteristics-card card-glass">
          <h3>Características clave</h3>
          <ul class="checklist">
            <li>
              <span class="check">✓</span>
              <div class="check-content">
                <strong>Contexto aislado:</strong>
                <span>Solo ve lo que el agente principal le pasa</span>
              </div>
            </li>
            <li>
              <span class="check">✓</span>
              <div class="check-content">
                <strong>Tarea acotada:</strong>
                <span>Una responsabilidad clara y específica</span>
              </div>
            </li>
            <li>
              <span class="check">✓</span>
              <div class="check-content">
                <strong>Ciclo de vida efímero:</strong>
                <span>Nace, ejecuta, muere</span>
              </div>
            </li>
            <li>
              <span class="check">✓</span>
              <div class="check-content">
                <strong>Sin historial completo:</strong>
                <span>No accede a toda la conversación</span>
              </div>
            </li>
            <li>
              <span class="check warn">✗</span>
              <div class="check-content warn-text">
                <strong>NO es independiente:</strong>
                <span>Siempre es invocado por otro agente</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="note-card">
          <span class="note-icon">📌</span>
          <p><strong>Importante:</strong> Un subagente no decide QUÉ hacer. Solo CÓMO hacer lo que se le encarga.</p>
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
      radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 80%, rgba(30, 58, 138, 0.1) 0%, transparent 55%);
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

  /* Main layout */
  .main-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: var(--spacing-xl);
    align-items: start;
  }

  /* Diagram */
  .diagram-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .main-agent {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-xl);
    width: 100%;
    border-color: rgba(59, 130, 246, 0.4);
    background: rgba(30, 58, 138, 0.25);
  }

  .agent-icon { font-size: 2rem; flex-shrink: 0; }

  .agent-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .agent-label {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--color-electric);
  }

  .agent-desc {
    font-size: 0.8rem;
    color: var(--color-neutral-light);
    opacity: 0.65;
  }

  .arrows-row {
    display: flex;
    justify-content: space-around;
    width: 70%;
    padding: var(--spacing-xs) 0;
  }

  .arrow-line {
    width: 2px;
    height: 24px;
    background: linear-gradient(to bottom, rgba(96, 165, 250, 0.6), rgba(96, 165, 250, 0.1));
    position: relative;
  }

  .arrow-line::after {
    content: '▼';
    position: absolute;
    bottom: -14px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.6rem;
    color: var(--color-electric);
    opacity: 0.5;
  }

  .subagents-row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-sm);
    width: 100%;
  }

  .subagent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-md);
    text-align: center;
  }

  .sub-icon { font-size: 1.5rem; }

  .sub-name {
    font-family: var(--font-display);
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .sub-task {
    font-size: 0.72rem;
    color: var(--color-electric);
    opacity: 0.7;
    font-family: var(--font-mono);
    line-height: 1.4;
  }

  .result-arrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-electric);
    opacity: 0.5;
    text-align: center;
    padding: var(--spacing-xs) 0;
  }

  .result-box {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-xl);
    width: 100%;
    justify-content: center;
    border-color: rgba(40, 200, 64, 0.3);
    background: rgba(40, 200, 64, 0.05);
  }

  .result-icon { font-size: 1.2rem; }

  .result-text {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-neutral-light);
    font-family: var(--font-display);
  }

  /* Right col */
  .right-col {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .characteristics-card {
    padding: var(--spacing-xl);
  }

  .characteristics-card h3 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-electric);
    margin-bottom: var(--spacing-lg);
  }

  .checklist {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .checklist li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.5;
  }

  .check {
    font-family: var(--font-mono);
    font-weight: 800;
    font-size: 0.9rem;
    color: #28c840;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .check.warn { color: #ff5f57; }
  .warn-text { opacity: 0.65 !important; }

  .check-content {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .check-content strong {
    color: var(--color-neutral-light);
    font-weight: 700;
  }

  .check-content span {
    font-size: 0.82rem;
    opacity: 0.75;
  }

  /* Note card */
  .note-card {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(59, 130, 246, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-sm);
  }

  .note-icon { font-size: 1.2rem; flex-shrink: 0; }

  .note-card p {
    font-size: 0.82rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    line-height: 1.55;
    margin-bottom: 0;
  }

  .note-card strong { color: var(--color-electric); font-weight: 700; }

  /* Mobile: Tablet */
  @media (max-width: 900px) {
    .main-layout { grid-template-columns: 1fr; }
  }

  /* Mobile: Small tablet / large phone */
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

    .main-agent {
      flex-direction: column;
      text-align: center;
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .agent-icon { font-size: 1.6rem; }

    .agent-label { font-size: 1rem; }

    .arrows-row {
      padding: var(--spacing-sm) 0;
    }

    .subagents-row {
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-sm);
    }

    .subagent {
      padding: var(--spacing-md);
      min-height: 60px;
    }

    .sub-icon { font-size: 1.3rem; }

    .sub-name { font-size: 0.85rem; }

    .sub-task { font-size: 0.7rem; }

    .result-box {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .result-text { font-size: 0.85rem; }

    .characteristics-card {
      padding: var(--spacing-lg);
    }

    .characteristics-card h3 {
      font-size: 0.95rem;
      margin-bottom: var(--spacing-md);
    }

    .checklist li {
      font-size: 0.82rem;
      min-height: 44px;
      align-items: center;
    }

    .check {
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .note-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .note-card p {
      font-size: 0.78rem;
    }
  }

  /* Mobile: Phone */
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

    .main-agent {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .agent-icon { font-size: 1.4rem; }

    .agent-label { font-size: 0.9rem; }

    .agent-desc { font-size: 0.72rem; }

    .arrow-line {
      height: 18px;
    }

    .arrow-line::after {
      font-size: 0.5rem;
      bottom: -12px;
    }

    .subagent {
      padding: var(--spacing-sm);
      min-height: 52px;
      gap: var(--spacing-xs);
    }

    .sub-icon { font-size: 1.2rem; }

    .sub-name { font-size: 0.8rem; }

    .sub-task { font-size: 0.65rem; }

    .result-arrow {
      font-size: 0.68rem;
      padding: var(--spacing-xs) 0;
    }

    .result-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .result-icon { font-size: 1rem; }

    .result-text { font-size: 0.8rem; }

    .characteristics-card {
      padding: var(--spacing-md);
    }

    .characteristics-card h3 {
      font-size: 0.9rem;
      margin-bottom: var(--spacing-sm);
    }

    .checklist {
      gap: var(--spacing-sm);
    }

    .checklist li {
      font-size: 0.78rem;
      gap: var(--spacing-sm);
    }

    .check {
      min-width: 44px;
      font-size: 0.85rem;
    }

    .note-card {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .note-icon { font-size: 1rem; }

    .note-card p {
      font-size: 0.75rem;
      line-height: 1.5;
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

    .main-agent {
      padding: var(--spacing-sm);
    }

    .agent-icon { font-size: 1.2rem; }

    .agent-label { font-size: 0.85rem; }

    .agent-desc { font-size: 0.68rem; }

    .subagent {
      padding: var(--spacing-sm);
      min-height: 48px;
    }

    .sub-icon { font-size: 1.1rem; }

    .sub-name { font-size: 0.75rem; }

    .sub-task { font-size: 0.6rem; }

    .characteristics-card {
      padding: var(--spacing-sm);
    }

    .characteristics-card h3 {
      font-size: 0.85rem;
    }

    .checklist li {
      font-size: 0.72rem;
    }

    .check {
      min-width: 44px;
      font-size: 0.8rem;
    }

    .note-card {
      padding: var(--spacing-sm);
    }

    .note-card p {
      font-size: 0.7rem;
    }
  }

  /* Short desktop screens */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: 12px var(--spacing-content);
      gap: var(--spacing-md);
    }

    .main-layout {
      gap: var(--spacing-md);
    }

    .diagram-section {
      gap: var(--spacing-xs);
    }

    .main-agent {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-md);
    }

    .agent-icon {
      font-size: 1.6rem;
    }

    .agent-label {
      font-size: 1rem;
    }

    .arrows-row {
      padding: 2px 0;
    }

    .arrow-line {
      height: 18px;
    }

    .subagent {
      padding: var(--spacing-sm);
    }

    .result-arrow {
      padding: 2px 0;
    }

    .result-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .right-col {
      gap: var(--spacing-md);
    }

    .characteristics-card {
      padding: var(--spacing-md);
    }

    .characteristics-card h3 {
      margin-bottom: var(--spacing-sm);
    }

    .checklist {
      gap: var(--spacing-sm);
    }

    .checklist li {
      font-size: 0.82rem;
    }

    .note-card {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .note-card p {
      font-size: 0.78rem;
    }
  }
</style>
