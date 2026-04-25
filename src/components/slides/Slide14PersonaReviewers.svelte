<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const sources = [
    {
      logo: '🅞',
      brand: 'OpenAI',
      who: 'Ryan Lopopolo',
      tag: 'Token billionaire',
      claim: 'Cada engineer documenta su rol técnico. Reviewer agents en CI bloquean merges con esa lente.',
      origin: 'Harness Engineering · AI Engineer London'
    },
    {
      logo: '🅨',
      brand: 'Y Combinator',
      who: 'Garry Tan',
      tag: 'Comoditizado en gstack',
      claim: '5 reviewer agents preconfigurados (CEO, Eng Manager, Designer, DevEx, CSO). 23 skills opinionadas.',
      origin: 'gstack · MIT, github.com/garrytan/gstack'
    },
    {
      logo: '🅗',
      brand: 'HumanLayer',
      who: 'Dexter Horthy',
      tag: '12-factor agents',
      claim: 'Factor 10: small focused agents. Cada reviewer es un micro-agente con instrucciones acotadas.',
      origin: '12-factor agents · Heavybit, marzo 2026'
    },
  ];

  const flow = [
    { step: '01', icon: '📝', title: 'Persona doc', desc: 'Cada engineer escribe qué espera de un buen PR según su rol.' },
    { step: '02', icon: '🤖', title: 'Reviewer agent', desc: 'Un agente por persona, prompt = doc + diff.' },
    { step: '03', icon: '⚙️', title: 'Trigger en CI', desc: 'En cada push, todos los reviewers corren en paralelo.' },
    { step: '04', icon: '🚦', title: 'Verdict', desc: 'P2+ bloquean merge. P3 se anotan. P4 pasan.' },
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Convergencia 2026</span>
      <h2 class="title">Persona-based <span class="highlight">reviewer agents</span></h2>
      <p class="subtitle">Cada engineer escribe su rol. El equipo se multiplica en CI.</p>
    </div>

    <div class="quote-block">
      <span class="quote-mark">"</span>
      <p>Tres autores independientes describen el mismo patrón en menos de seis meses. Cuando OpenAI, YC y HumanLayer convergen, deja de ser moda y pasa a ser <strong>pieza estable</strong>.</p>
    </div>

    <div class="sources-grid">
      {#each sources as src}
        <div class="source card-glass">
          <div class="source-head">
            <span class="source-logo">{src.logo}</span>
            <div class="source-info">
              <span class="source-brand">{src.brand}</span>
              <span class="source-who">{src.who}</span>
            </div>
            <span class="source-tag">{src.tag}</span>
          </div>
          <p class="source-claim">{src.claim}</p>
          <span class="source-origin">{src.origin}</span>
        </div>
      {/each}
    </div>

    <div class="flow-section">
      <h3 class="flow-title">Cómo se monta en tu repo</h3>
      <div class="flow-grid">
        {#each flow as f, i}
          <div class="flow-item">
            <span class="flow-step">{f.step}</span>
            <span class="flow-icon">{f.icon}</span>
            <span class="flow-name">{f.title}</span>
            <span class="flow-desc">{f.desc}</span>
            {#if i < flow.length - 1}
              <span class="flow-arrow">→</span>
            {/if}
          </div>
        {/each}
      </div>
    </div>

    <div class="bottom-insight">
      <span class="insight-icon">⚡</span>
      <p>El reviewer agent es la cristalización del rol <strong>critic</strong> de la taxonomía IBM (slide 4). Reusable: una vez escrito, todo el equipo se beneficia de la mejor cabeza en cada disciplina sin esperar disponibilidad humana.</p>
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
      radial-gradient(ellipse at 75% 25%, rgba(168, 139, 250, 0.08) 0%, transparent 55%),
      radial-gradient(ellipse at 15% 75%, rgba(30, 58, 138, 0.12) 0%, transparent 55%);
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
    gap: var(--spacing-lg);
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
    background: linear-gradient(135deg, #a78bfa, var(--color-accent-bright));
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

  /* Quote */
  .quote-block {
    position: relative;
    padding: var(--spacing-md) var(--spacing-2xl);
    background: rgba(167, 139, 250, 0.06);
    border-left: 3px solid #a78bfa;
    border-radius: var(--radius-sm);
  }

  .quote-mark {
    position: absolute;
    top: -8px;
    left: var(--spacing-md);
    font-family: var(--font-display);
    font-size: 2.4rem;
    color: #a78bfa;
    opacity: 0.5;
    line-height: 1;
  }

  .quote-block p {
    font-size: 1rem;
    color: var(--color-neutral-light);
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 0;
    font-style: italic;
  }

  .quote-block strong { color: #a78bfa; font-weight: 800; opacity: 1; }

  /* Sources grid */
  .sources-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-md);
  }

  .source {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    min-height: 200px;
  }

  .source-head {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
  }

  .source-logo {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(167, 139, 250, 0.15);
    border: 1px solid rgba(167, 139, 250, 0.3);
    border-radius: var(--radius-sm);
    font-size: 1.2rem;
    font-weight: 800;
    color: #a78bfa;
    flex-shrink: 0;
  }

  .source-info {
    display: flex;
    flex-direction: column;
    gap: 2px;
    flex: 1;
  }

  .source-brand {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--color-neutral-light);
    line-height: 1;
  }

  .source-who {
    font-size: 0.72rem;
    color: var(--color-electric);
    opacity: 0.75;
  }

  .source-tag {
    font-family: var(--font-mono);
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 3px 8px;
    background: rgba(167, 139, 250, 0.12);
    color: #a78bfa;
    border: 1px solid rgba(167, 139, 250, 0.25);
    border-radius: var(--radius-sm);
    flex-shrink: 0;
  }

  .source-claim {
    font-size: 0.85rem;
    color: var(--color-neutral-light);
    opacity: 0.85;
    line-height: 1.6;
    margin-bottom: 0;
    flex: 1;
  }

  .source-origin {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    color: var(--color-electric);
    opacity: 0.55;
  }

  /* Flow */
  .flow-section { display: flex; flex-direction: column; gap: var(--spacing-sm); }

  .flow-title {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-electric);
    opacity: 0.7;
    margin-bottom: 0;
  }

  .flow-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-sm);
  }

  .flow-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(30, 58, 138, 0.18);
    border: 1px solid rgba(96, 165, 250, 0.15);
    border-radius: var(--radius-sm);
    min-height: 120px;
  }

  .flow-step {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    color: #a78bfa;
    opacity: 0.7;
  }

  .flow-icon { font-size: 1.4rem; }

  .flow-name {
    font-family: var(--font-display);
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--color-neutral-light);
  }

  .flow-desc {
    font-size: 0.78rem;
    color: var(--color-neutral-light);
    opacity: 0.72;
    line-height: 1.5;
  }

  .flow-arrow {
    position: absolute;
    right: -16px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--color-electric);
    opacity: 0.5;
    font-size: 1.1rem;
    z-index: 2;
    pointer-events: none;
  }

  /* Bottom insight */
  .bottom-insight {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: rgba(59, 130, 246, 0.08);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: var(--radius-sm);
  }

  .insight-icon { font-size: 1.3rem; flex-shrink: 0; margin-top: 1px; }

  .bottom-insight p {
    font-size: 0.95rem;
    color: var(--color-neutral-light);
    opacity: 0.88;
    line-height: 1.6;
    margin-bottom: 0;
  }

  .bottom-insight strong { color: var(--color-electric); font-weight: 700; }

  /* Mobile: Tablet */
  @media (max-width: 900px) {
    .sources-grid { grid-template-columns: 1fr; }
    .flow-grid { grid-template-columns: repeat(2, 1fr); }
    .flow-arrow { display: none; }
  }

  /* Mobile: Small tablet / large phone */
  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-sm);
    }

    .title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
    .subtitle { font-size: 0.9rem; }

    .quote-block { padding: var(--spacing-sm) var(--spacing-md); }
    .quote-mark { font-size: 2rem; }
    .quote-block p { font-size: 0.82rem; }

    .source { padding: var(--spacing-sm) var(--spacing-md); }
    .source-brand { font-size: 0.88rem; }
    .source-claim { font-size: 0.76rem; }

    .flow-item { padding: var(--spacing-sm); }
    .flow-name { font-size: 0.78rem; }
    .flow-desc { font-size: 0.66rem; }

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

    .flow-grid { grid-template-columns: 1fr; }

    .quote-block p { font-size: 0.76rem; }
    .source-brand { font-size: 0.85rem; }
    .source-claim { font-size: 0.74rem; }
    .flow-name { font-size: 0.78rem; }
    .flow-desc { font-size: 0.68rem; }

    .bottom-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .bottom-insight p { font-size: 0.74rem; }
  }

  /* Mobile: Small phone */
  @media (max-width: 390px) {
    .slide-content { padding: var(--spacing-sm); }
    .title { font-size: clamp(1.2rem, 6vw, 1.6rem); }

    .source-claim, .flow-desc { font-size: 0.68rem; }
    .bottom-insight p { font-size: 0.7rem; }
  }

  /* Short desktop screens */
  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: 12px var(--spacing-content);
      gap: var(--spacing-sm);
    }

    .title { font-size: clamp(1.6rem, 3.5vw, 2.4rem); }

    .quote-block { padding: var(--spacing-xs) var(--spacing-lg); }
    .quote-block p { font-size: 0.82rem; }

    .source { padding: var(--spacing-sm) var(--spacing-md); gap: var(--spacing-xs); }
    .source-claim { font-size: 0.74rem; }

    .flow-item { padding: var(--spacing-xs) var(--spacing-sm); }
    .flow-name { font-size: 0.78rem; }
    .flow-desc { font-size: 0.66rem; line-height: 1.3; }

    .bottom-insight { padding: var(--spacing-sm) var(--spacing-md); }
    .bottom-insight p { font-size: 0.78rem; }
  }
</style>
