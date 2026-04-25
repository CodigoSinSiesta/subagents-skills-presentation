<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const roles = [
    { icon: '🛠️', name: 'Doer', desc: 'El junior. Ejecuta pasos individuales: escribe código, redacta, transforma. No tiene visión global.' },
    { icon: '🎯', name: 'Planner', desc: 'El tech lead. Recibe el objetivo, lo descompone en pasos. Solo planifica, no ejecuta.' },
    { icon: '🔌', name: 'Tool Operator', desc: 'Construye llamadas a APIs / CLIs / web services con argumentos correctos y consume su salida.' },
    { icon: '📚', name: 'Learner', desc: 'El que se mantiene al día. Recopila info externa (RAG, scraping, búsqueda) y la introduce al flujo.' },
    { icon: '🔍', name: 'Critic', desc: 'El feedback directo. Revisa outputs en busca de alucinaciones, ejecuta tests, puntúa propuestas.' },
    { icon: '👁️', name: 'Supervisor', desc: 'El project manager. Vigila a nivel tarea o proyecto. Detecta atascos y caminos rotos.' },
    { icon: '🎤', name: 'Presenter', desc: 'Recompone las piezas y comunica el resultado al usuario final con coherencia.' },
  ];

  const levers = [
    { num: '01', title: 'Prompting', cost: 'Bajo', desc: 'Primera línea siempre. Funciona más de lo que parece.' },
    { num: '02', title: 'Model selection', cost: 'Medio', desc: 'Elegir el modelo adecuado al rol (tamaño, razonamiento, persona).' },
    { num: '03', title: 'Model tuning', cost: 'Alto', desc: 'Fine-tune con ejemplos buenos/malos. Caro en datos y compute.' },
    { num: '04', title: 'Context', cost: 'Medio', desc: 'Onboarding del rol: qué ficheros y qué APIs sí, y cuáles no.' },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Vocabulario canónico · IBM, abril 2026</span>
      <h2 class="title">Roles dentro de un <span class="highlight">agente</span></h2>
      <p class="subtitle">Diseña tu agente como diseñas un equipo humano.</p>
    </div>

    <div class="thesis card-glass">
      <span class="thesis-icon">👥</span>
      <p>"Un agente complejo no lo hace solo. Necesita <strong>doers, thinkers, supervisors, communicators</strong>, y otros roles que aporten capacidad y conocimiento especializado." — IBM Technology</p>
    </div>

    <div class="roles-grid">
      {#each roles as role}
        <div class="role card-glass">
          <span class="role-icon">{role.icon}</span>
          <div class="role-body">
            <span class="role-name">{role.name}</span>
            <span class="role-desc">{role.desc}</span>
          </div>
        </div>
      {/each}
    </div>

    <div class="levers-section">
      <h3 class="levers-title">4 palancas para hacer bueno a un rol</h3>
      <div class="levers-grid">
        {#each levers as lever}
          <div class="lever">
            <div class="lever-head">
              <span class="lever-num">{lever.num}</span>
              <span class="lever-name">{lever.title}</span>
              <span class="lever-cost cost-{lever.cost.toLowerCase()}">{lever.cost}</span>
            </div>
            <span class="lever-desc">{lever.desc}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">💡</span>
      <p>Si tu agente entrega <strong>outputs incoherentes</strong>, te falta `critic`. Si <strong>pierde el hilo</strong>, te falta `supervisor`. Si <strong>fabrica datos</strong>, te falta `learner`. La taxonomía es checklist, no doctrina.</p>
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
      radial-gradient(ellipse at 20% 25%, rgba(96, 165, 250, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 85% 70%, rgba(30, 58, 138, 0.12) 0%, transparent 55%);
    z-index: 1;
  }

  .slide-content {
    position: relative;
    z-index: 2;
    max-width: 1280px;
    width: 100%;
    padding: var(--spacing-2xl) var(--spacing-content);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .slide-header { text-align: center; }

  .label {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.72rem;
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

  /* Thesis */
  .thesis {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-lg);
  }

  .thesis-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 2px; }

  .thesis p {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.55;
    margin-bottom: 0;
    font-style: italic;
  }

  .thesis strong { color: var(--color-electric); font-style: normal; font-weight: 700; opacity: 1; }

  /* Roles grid: 7 roles in adaptive grid */
  .roles-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-sm);
  }

  .role {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .role-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 1px; }

  .role-body {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .role-name {
    font-family: var(--font-display);
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--color-neutral-light);
  }

  .role-desc {
    font-size: 0.7rem;
    color: var(--color-neutral-light);
    opacity: 0.65;
    line-height: 1.4;
  }

  /* Levers */
  .levers-section { display: flex; flex-direction: column; gap: var(--spacing-sm); }

  .levers-title {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-electric);
    opacity: 0.7;
    margin-bottom: 0;
  }

  .levers-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-sm);
  }

  .lever {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: var(--spacing-sm) var(--spacing-md);
    background: rgba(30, 58, 138, 0.18);
    border: 1px solid rgba(96, 165, 250, 0.15);
    border-radius: var(--radius-sm);
  }

  .lever-head {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  .lever-num {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: var(--color-accent-bright);
    opacity: 0.6;
    flex-shrink: 0;
  }

  .lever-name {
    font-family: var(--font-display);
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--color-neutral-light);
    flex: 1;
  }

  .lever-cost {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 2px 6px;
    border-radius: var(--radius-sm);
  }

  .cost-bajo {
    color: #34d399;
    background: rgba(16, 185, 129, 0.15);
    border: 1px solid rgba(16, 185, 129, 0.25);
  }

  .cost-medio {
    color: #fbbf24;
    background: rgba(251, 191, 36, 0.12);
    border: 1px solid rgba(251, 191, 36, 0.22);
  }

  .cost-alto {
    color: #f87171;
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.22);
  }

  .lever-desc {
    font-size: 0.7rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    line-height: 1.45;
  }

  /* Bottom insight */
  .bottom-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(59, 130, 246, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-sm);
  }

  .insight-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 1px; }

  .bottom-insight p {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.55;
    margin-bottom: 0;
  }

  .bottom-insight strong { color: var(--color-electric); font-weight: 700; }

  /* Mobile: Tablet */
  @media (max-width: 900px) {
    .roles-grid { grid-template-columns: repeat(2, 1fr); }
    .levers-grid { grid-template-columns: repeat(2, 1fr); }
  }

  /* Mobile: Small tablet / large phone */
  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
    .subtitle { font-size: 0.9rem; }

    .thesis { padding: var(--spacing-sm) var(--spacing-md); }
    .thesis p { font-size: 0.8rem; }

    .role { padding: var(--spacing-sm); }
    .role-name { font-size: 0.85rem; }
    .role-desc { font-size: 0.68rem; }

    .lever { padding: var(--spacing-sm); }
    .lever-name { font-size: 0.78rem; }
    .lever-desc { font-size: 0.68rem; }

    .bottom-insight { padding: var(--spacing-md); gap: var(--spacing-sm); }
    .bottom-insight p { font-size: 0.78rem; }
  }

  /* Mobile: Phone */
  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .label { font-size: 0.68rem; }
    .title { font-size: clamp(1.4rem, 6vw, 1.8rem); }
    .subtitle { font-size: 0.78rem; }

    .roles-grid { grid-template-columns: 1fr; }
    .levers-grid { grid-template-columns: 1fr; }

    .thesis p { font-size: 0.76rem; }
    .role-name { font-size: 0.85rem; }
    .role-desc { font-size: 0.7rem; }
    .lever-name { font-size: 0.78rem; }
    .lever-desc { font-size: 0.7rem; }

    .bottom-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .bottom-insight p { font-size: 0.74rem; }
  }

  /* Mobile: Small phone */
  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); }
    .title { font-size: clamp(1.2rem, 6vw, 1.6rem); }

    .role-desc, .lever-desc { font-size: 0.66rem; }
    .bottom-insight p { font-size: 0.7rem; }
  }

  /* Short desktop screens */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: 12px var(--spacing-content);
      gap: var(--spacing-sm);
    }

    .title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }

    .thesis { padding: var(--spacing-xs) var(--spacing-md); }
    .thesis p { font-size: 0.78rem; }

    .role { padding: var(--spacing-xs) var(--spacing-sm); }
    .role-icon { font-size: 1.1rem; }
    .role-name { font-size: 0.82rem; }
    .role-desc { font-size: 0.66rem; line-height: 1.3; }

    .lever { padding: var(--spacing-xs) var(--spacing-sm); }
    .lever-name { font-size: 0.78rem; }
    .lever-desc { font-size: 0.66rem; line-height: 1.35; }

    .bottom-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .bottom-insight p { font-size: 0.78rem; }
  }
</style>
