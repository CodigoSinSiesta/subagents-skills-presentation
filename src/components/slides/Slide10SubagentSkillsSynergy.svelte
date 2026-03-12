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
      <span class="label">Potencia</span>
      <h2 class="title">Subagente + <span class="highlight">Skill</span></h2>
      <p class="subtitle">Cuando la orquestación se combina con el conocimiento especializado.</p>
    </div>

    <div class="main-layout">
      <div class="diagram-section">
        <div class="task-box card-glass">
          <span class="task-icon">🎯</span>
          <span class="task-text">Tarea compleja del usuario</span>
        </div>

        <div class="connector-down">
          <div class="connector-line"></div>
          <span class="connector-label">descompone</span>
        </div>

        <div class="orchestrator card-glass">
          <div class="orch-icon">🎛️</div>
          <div class="orch-body">
            <span class="orch-label">Orquestador</span>
            <span class="orch-desc">Analiza, planifica y despacha a subagentes especializados</span>
          </div>
        </div>

        <div class="dispatch-arrows">
          <div class="arrow-col">
            <div class="arrow-line"></div>
            <span class="arrow-label">dispatch</span>
          </div>
          <div class="arrow-col">
            <div class="arrow-line"></div>
            <span class="arrow-label">dispatch</span>
          </div>
          <div class="arrow-col">
            <div class="arrow-line"></div>
            <span class="arrow-label">dispatch</span>
          </div>
        </div>

        <div class="subagents-row">
          <div class="subagent card-glass">
            <div class="sub-header">
              <span class="sub-icon">🎨</span>
              <span class="sub-name">Subagente Frontend</span>
            </div>
            <div class="skill-badge">
              <span class="skill-icon">⚡</span>
              <span class="skill-name">React 19 Skill</span>
            </div>
            <div class="sub-output">
              <span class="output-label">→</span>
              <span class="output-text">Componentes tipados</span>
            </div>
          </div>

          <div class="subagent card-glass">
            <div class="sub-header">
              <span class="sub-icon">🧪</span>
              <span class="sub-name">Subagente Testing</span>
            </div>
            <div class="skill-badge">
              <span class="skill-icon">⚡</span>
              <span class="skill-name">Testing Skill</span>
            </div>
            <div class="sub-output">
              <span class="output-label">→</span>
              <span class="output-text">Tests E2E + unitarios</span>
            </div>
          </div>

          <div class="subagent card-glass">
            <div class="sub-header">
              <span class="sub-icon">🔍</span>
              <span class="sub-name">Subagente Review</span>
            </div>
            <div class="skill-badge">
              <span class="skill-icon">⚡</span>
              <span class="skill-name">Code Review Skill</span>
            </div>
            <div class="sub-output">
              <span class="output-label">→</span>
              <span class="output-text">Feedback estructurado</span>
            </div>
          </div>
        </div>

        <div class="converge-arrows">
          <div class="converge-line"></div>
          <span class="converge-label">resultados convergen</span>
        </div>

        <div class="result-box card-glass">
          <span class="result-icon">✅</span>
          <span class="result-text">Resultado integrado y verificado</span>
        </div>
      </div>

      <div class="insight-panel">
        <div class="insight-card card-glass">
          <div class="insight-header">
            <span class="insight-icon">💡</span>
            <h3>Key Insight</h3>
          </div>
          <p class="insight-text">
            El skill <strong>no hace</strong> al subagente más inteligente.<br>
            Lo hace más <span class="highlight-text">ENFOCADO</span>.
          </p>
        </div>

        <div class="why-card card-glass">
          <h4>¿Por qué funciona?</h4>
          <ul class="why-list">
            <li>
              <span class="bullet">1</span>
              <span>El skill carga contexto específico SIN ocupar la ventana del orquestador</span>
            </li>
            <li>
              <span class="bullet">2</span>
              <span>Cada subagente opera con instrucciones PRECISAS para su dominio</span>
            </li>
            <li>
              <span class="bullet">3</span>
              <span>El orquestador consolida SIN conocer los detalles de cada skill</span>
            </li>
            <li>
              <span class="bullet">4</span>
              <span>Paralelismo real + especialización = mejor resultado en menos tiempo</span>
            </li>
          </ul>
        </div>

        <div class="warning-card">
          <span class="warn-icon">⚠️</span>
          <p><strong>Anti-patrón:</strong> Pasar el skill completo al orquestador. El orquestador solo necesita SABER que existe el skill, no su contenido.</p>
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
      radial-gradient(ellipse at 25% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(ellipse at 75% 80%, rgba(30, 58, 138, 0.08) 0%, transparent 50%);
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
    grid-template-columns: 1.1fr 0.9fr;
    gap: var(--spacing-xl);
    align-items: start;
  }

  .diagram-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .task-box {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-xl);
    width: 100%;
    justify-content: center;
    border-color: rgba(255, 189, 46, 0.3);
    background: rgba(255, 189, 46, 0.05);
  }

  .task-icon { font-size: 1.3rem; }

  .task-text {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .connector-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .connector-line {
    width: 2px;
    height: 20px;
    background: linear-gradient(to bottom, rgba(255, 189, 46, 0.5), rgba(96, 165, 250, 0.5));
  }

  .connector-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--color-electric);
    opacity: 0.5;
  }

  .orchestrator {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-lg) var(--spacing-xl);
    width: 100%;
    border-color: rgba(59, 130, 246, 0.4);
    background: rgba(30, 58, 138, 0.25);
  }

  .orch-icon { font-size: 1.8rem; flex-shrink: 0; }

  .orch-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .orch-label {
    font-family: var(--font-display);
    font-size: 1.05rem;
    font-weight: 800;
    color: var(--color-electric);
  }

  .orch-desc {
    font-size: 0.75rem;
    color: var(--color-neutral-light);
    opacity: 0.65;
  }

  .dispatch-arrows {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    padding: var(--spacing-xs) 0;
  }

  .arrow-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .arrow-line {
    width: 2px;
    height: 24px;
    background: linear-gradient(to bottom, rgba(96, 165, 250, 0.6), rgba(96, 165, 250, 0.2));
  }

  .arrow-label {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    color: var(--color-electric);
    opacity: 0.4;
  }

  .subagents-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-sm);
    width: 100%;
  }

  .subagent {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    border-color: rgba(59, 130, 246, 0.25);
  }

  .sub-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .sub-icon { font-size: 1.2rem; }

  .sub-name {
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .skill-badge {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs) var(--spacing-sm);
    background: rgba(96, 165, 250, 0.15);
    border: 1px solid rgba(96, 165, 250, 0.3);
    border-radius: var(--radius-sm);
    font-size: 0.68rem;
    font-family: var(--font-mono);
    color: var(--color-electric);
  }

  .skill-icon { font-size: 0.8rem; }

  .sub-output {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
    padding-top: var(--spacing-xs);
    border-top: 1px solid rgba(96, 165, 250, 0.1);
  }

  .output-label {
    font-family: var(--font-mono);
    font-weight: 800;
    color: #28c840;
    font-size: 0.85rem;
  }

  .output-text {
    font-size: 0.72rem;
    color: var(--color-neutral-light);
    opacity: 0.75;
  }

  .converge-arrows {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: var(--spacing-xs) 0;
  }

  .converge-line {
    width: 2px;
    height: 20px;
    background: linear-gradient(to bottom, rgba(96, 165, 250, 0.3), rgba(40, 200, 64, 0.5));
  }

  .converge-label {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--color-electric);
    opacity: 0.4;
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

  .insight-panel {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
  }

  .insight-card {
    padding: var(--spacing-xl);
    border-color: rgba(59, 130, 246, 0.3);
    background: rgba(30, 58, 138, 0.2);
  }

  .insight-header {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
  }

  .insight-icon { font-size: 1.3rem; }

  .insight-header h3 {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--color-electric);
    margin: 0;
  }

  .insight-text {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    line-height: 1.6;
    margin: 0;
  }

  .insight-text strong {
    color: var(--color-electric);
  }

  .highlight-text {
    font-weight: 800;
    color: var(--color-accent-bright);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .why-card {
    padding: var(--spacing-lg);
  }

  .why-card h4 {
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--color-electric);
    margin: 0 0 var(--spacing-md) 0;
  }

  .why-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    margin: 0;
    padding: 0;
  }

  .why-list li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.5;
  }

  .bullet {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(96, 165, 250, 0.2);
    border-radius: 50%;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 800;
    color: var(--color-electric);
  }

  .warning-card {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(255, 95, 87, 0.05);
    border: 1px solid rgba(255, 95, 87, 0.25);
    border-radius: var(--radius-sm);
  }

  .warn-icon { font-size: 1.1rem; flex-shrink: 0; }

  .warning-card p {
    font-size: 0.8rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    line-height: 1.5;
    margin: 0;
  }

  .warning-card strong { color: #ff5f57; font-weight: 700; }

  @media (max-width: 900px) {
    .main-layout {
      grid-template-columns: 1fr;
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

    .task-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .task-icon { font-size: 1.1rem; }

    .task-text { font-size: 0.85rem; }

    .connector-line { height: 16px; }

    .orchestrator {
      flex-direction: column;
      text-align: center;
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .orch-icon { font-size: 1.5rem; }

    .orch-label { font-size: 0.95rem; }

    .dispatch-arrows {
      padding: 2px 0;
    }

    .arrow-line { height: 18px; }

    .subagents-row {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .subagent {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--spacing-sm);
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .sub-header {
      flex: 1;
      min-width: 150px;
    }

    .skill-badge {
      flex: 0 0 auto;
    }

    .sub-output {
      width: 100%;
      padding-top: var(--spacing-xs);
      border-top: 1px solid rgba(96, 165, 250, 0.1);
    }

    .converge-line { height: 16px; }

    .result-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .result-icon { font-size: 1rem; }

    .result-text { font-size: 0.85rem; }

    .insight-panel {
      gap: var(--spacing-md);
    }

    .insight-card {
      padding: var(--spacing-lg);
    }

    .insight-icon { font-size: 1.1rem; }

    .insight-header h3 { font-size: 0.9rem; }

    .insight-text { font-size: 0.85rem; }

    .why-card {
      padding: var(--spacing-md);
    }

    .why-card h4 {
      font-size: 0.85rem;
      margin-bottom: var(--spacing-sm);
    }

    .why-list li {
      font-size: 0.75rem;
    }

    .bullet {
      width: 18px;
      height: 18px;
      font-size: 0.65rem;
    }

    .warning-card {
      padding: var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .warning-card p {
      font-size: 0.75rem;
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

    .task-box {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .task-icon { font-size: 1rem; }

    .task-text { font-size: 0.8rem; }

    .connector-line { height: 14px; }

    .connector-label { font-size: 0.58rem; }

    .orchestrator {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .orch-icon { font-size: 1.3rem; }

    .orch-label { font-size: 0.85rem; }

    .orch-desc { font-size: 0.68rem; }

    .arrow-line { height: 14px; }

    .arrow-label { font-size: 0.55rem; }

    .subagent {
      padding: var(--spacing-sm);
    }

    .sub-icon { font-size: 1rem; }

    .sub-name { font-size: 0.75rem; }

    .skill-badge {
      font-size: 0.62rem;
      padding: 2px var(--spacing-xs);
    }

    .output-label { font-size: 0.8rem; }

    .output-text { font-size: 0.68rem; }

    .converge-line { height: 14px; }

    .converge-label { font-size: 0.55rem; }

    .result-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .result-icon { font-size: 0.95rem; }

    .result-text { font-size: 0.8rem; }

    .insight-card {
      padding: var(--spacing-md);
    }

    .insight-icon { font-size: 1rem; }

    .insight-header h3 { font-size: 0.85rem; }

    .insight-text { font-size: 0.8rem; }

    .highlight-text {
      font-size: 0.75rem;
    }

    .why-card {
      padding: var(--spacing-sm);
    }

    .why-card h4 {
      font-size: 0.8rem;
    }

    .why-list {
      gap: var(--spacing-xs);
    }

    .why-list li {
      font-size: 0.7rem;
    }

    .bullet {
      width: 16px;
      height: 16px;
      font-size: 0.6rem;
    }

    .warning-card {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .warn-icon { font-size: 1rem; }

    .warning-card p {
      font-size: 0.7rem;
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

    .orchestrator {
      padding: var(--spacing-sm);
    }

    .orch-icon { font-size: 1.2rem; }

    .orch-label { font-size: 0.8rem; }

    .subagent {
      padding: var(--spacing-sm);
    }

    .sub-icon { font-size: 0.95rem; }

    .sub-name { font-size: 0.7rem; }

    .skill-badge {
      font-size: 0.58rem;
    }

    .output-text { font-size: 0.62rem; }

    .result-text { font-size: 0.75rem; }

    .insight-card {
      padding: var(--spacing-sm);
    }

    .insight-header h3 { font-size: 0.8rem; }

    .insight-text { font-size: 0.75rem; }

    .why-card h4 {
      font-size: 0.75rem;
    }

    .why-list li {
      font-size: 0.65rem;
    }

    .warning-card {
      padding: var(--spacing-sm);
    }

    .warning-card p {
      font-size: 0.65rem;
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

    .diagram-section {
      gap: 2px;
    }

    .task-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .task-icon { font-size: 1.1rem; }

    .task-text { font-size: 0.85rem; }

    .connector-line { height: 14px; }

    .orchestrator {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-md);
    }

    .orch-icon { font-size: 1.5rem; }

    .orch-label { font-size: 0.95rem; }

    .dispatch-arrows {
      padding: 2px 0;
    }

    .arrow-line { height: 16px; }

    .subagent {
      padding: var(--spacing-sm);
    }

    .sub-icon { font-size: 1rem; }

    .sub-name { font-size: 0.75rem; }

    .skill-badge {
      font-size: 0.62rem;
      padding: 2px var(--spacing-xs);
    }

    .converge-line { height: 14px; }

    .result-box {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .insight-panel {
      gap: var(--spacing-md);
    }

    .insight-card {
      padding: var(--spacing-md);
    }

    .insight-icon { font-size: 1.1rem; }

    .insight-header h3 { font-size: 0.85rem; }

    .insight-text { font-size: 0.8rem; }

    .why-card {
      padding: var(--spacing-md);
    }

    .why-card h4 {
      font-size: 0.8rem;
      margin-bottom: var(--spacing-sm);
    }

    .why-list li {
      font-size: 0.72rem;
    }

    .warning-card {
      padding: var(--spacing-sm) var(--spacing-md);
    }

    .warning-card p {
      font-size: 0.75rem;
    }
  }
</style>
