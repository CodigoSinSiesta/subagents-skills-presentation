<script lang="ts">
  import { onMount } from 'svelte';
  import { animateSlideEntrance } from '@/utils/animations';
  let slideElement: HTMLElement;
  onMount(() => { animateSlideEntrance(slideElement); });

  const steps = [
    {
      num: 1,
      title: 'Identifica el contexto',
      desc: '¿Qué tecnología/framework usas frecuentemente?',
      example: 'React 19, Tailwind 4, Zustand, Django...',
      tip: 'Empieza por lo que más repites'
    },
    {
      num: 2,
      title: 'Crea la estructura',
      desc: 'Crea el directorio y archivo SKILL.md',
      example: '~/.claude/skills/mi-skill/SKILL.md',
      tip: 'El nombre del directorio = nombre del skill'
    },
    {
      num: 3,
      title: 'Define el frontmatter',
      desc: 'Nombre y descripción para que el agente sepa cuándo usarlo',
      example: 'name: react-19\ndescription: Use when working with React 19...',
      tip: 'La descripción es clave para la activación automática'
    },
    {
      num: 4,
      title: 'Añade contenido útil',
      desc: 'Patrones, reglas, ejemplos de código',
      example: '## Server Components\n### use() Hook\n### Actions',
      tip: 'Incluye DOs y DON\'Ts'
    }
  ];
</script>

<div class="swiper-slide" bind:this={slideElement}>
  <div class="slide-background"></div>

  <div class="slide-content">
    <div class="slide-header">
      <span class="label">Workshop</span>
      <h2 class="title">Crea tu <span class="highlight">Primer Skill</span></h2>
      <p class="subtitle">4 pasos para tener un skill funcional en 5 minutos.</p>
    </div>

    <div class="steps-container">
      {#each steps as step}
        <div class="step-card">
          <div class="step-number">{step.num}</div>
          <div class="step-content">
            <h3 class="step-title">{step.title}</h3>
            <p class="step-desc">{step.desc}</p>
            <div class="step-example">
              <code>{step.example}</code>
            </div>
            <span class="step-tip">💡 {step.tip}</span>
          </div>
        </div>
      {/each}
    </div>

    <div class="cta-box">
      <p><strong>Tu reto:</strong> Antes de acabar esta sesión, crea un skill para tu framework favorito.</p>
      <span class="cta-path">~/.claude/skills/[tu-framework]/SKILL.md</span>
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
      radial-gradient(ellipse at 25% 25%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
      radial-gradient(ellipse at 75% 75%, rgba(96, 165, 250, 0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 50%, rgba(30, 58, 138, 0.08) 0%, transparent 60%);
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

  /* Steps container */
  .steps-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--spacing-md);
  }

  .step-card {
    display: flex;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(30, 58, 138, 0.2);
    border: 1px solid rgba(96, 165, 250, 0.15);
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
  }

  .step-card:hover {
    background: rgba(30, 58, 138, 0.35);
    border-color: rgba(96, 165, 250, 0.3);
    transform: translateY(-2px);
  }

  .step-number {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--color-accent-bright), var(--color-electric));
    border-radius: 50%;
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
    flex-shrink: 0;
  }

  .step-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    flex: 1;
  }

  .step-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-electric);
    margin: 0;
  }

  .step-desc {
    font-size: 0.82rem;
    color: var(--color-neutral-light);
    opacity: 0.8;
    margin: 0;
    line-height: 1.4;
  }

  .step-example {
    background: rgba(10, 22, 40, 0.6);
    border: 1px solid rgba(96, 165, 250, 0.1);
    border-radius: var(--radius-sm);
    padding: var(--spacing-sm);
    margin-top: var(--spacing-xs);
  }

  .step-example code {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--color-electric);
    opacity: 0.9;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .step-tip {
    font-size: 0.72rem;
    color: var(--color-neutral-light);
    opacity: 0.7;
    font-style: italic;
    margin-top: auto;
  }

  /* CTA box */
  .cta-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg);
    background: rgba(34, 197, 94, 0.1);
    border: 1px solid rgba(34, 197, 94, 0.25);
    border-radius: var(--radius-md);
    text-align: center;
  }

  .cta-box p {
    font-size: 0.9rem;
    color: var(--color-neutral-light);
    margin: 0;
  }

  .cta-box strong {
    color: #22c55e;
  }

  .cta-path {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    color: #22c55e;
    background: rgba(34, 197, 94, 0.1);
    padding: var(--spacing-xs) var(--spacing-md);
    border-radius: var(--radius-sm);
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .steps-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .slide-content {
      padding: var(--spacing-lg) var(--spacing-md);
      gap: var(--spacing-lg);
    }

    .title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
    .subtitle { font-size: 0.9rem; }

    .steps-container {
      grid-template-columns: 1fr;
      gap: var(--spacing-md);
    }

    .step-card { padding: var(--spacing-md); }
    .step-number { width: 32px; height: 32px; font-size: 1rem; }
    .step-title { font-size: 0.95rem; }
    .step-desc { font-size: 0.78rem; }
    .step-example code { font-size: 0.68rem; }
    .step-tip { font-size: 0.68rem; }
  }

  @media (max-width: 480px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-sm);
      gap: var(--spacing-md);
    }

    .label { font-size: 0.7rem; }
    .title { font-size: clamp(1.4rem, 6vw, 1.8rem); }
    .subtitle { font-size: 0.8rem; }

    .step-card {
      padding: var(--spacing-sm) var(--spacing-md);
      gap: var(--spacing-sm);
    }
    .step-number { width: 28px; height: 28px; font-size: 0.9rem; }
    .step-title { font-size: 0.9rem; }
    .step-desc { font-size: 0.75rem; }
    .step-example { padding: var(--spacing-xs); }
    .step-example code { font-size: 0.62rem; }
    .step-tip { font-size: 0.62rem; }

    .cta-box { padding: var(--spacing-md); }
    .cta-box p { font-size: 0.82rem; }
    .cta-path { font-size: 0.78rem; }
  }

  @media (max-width: 390px) {
    .slide-content {
      padding: var(--spacing-sm);
      gap: var(--spacing-sm);
    }

    .title { font-size: clamp(1.2rem, 6vw, 1.6rem); }
    .subtitle { font-size: 0.75rem; }

    .step-card { padding: var(--spacing-sm); }
    .step-number { width: 26px; height: 26px; font-size: 0.85rem; }
    .step-title { font-size: 0.85rem; }
    .step-desc { font-size: 0.7rem; }
    .step-example code { font-size: 0.58rem; }
    .step-tip { font-size: 0.58rem; }

    .cta-box { padding: var(--spacing-sm); }
    .cta-box p { font-size: 0.75rem; }
    .cta-path { font-size: 0.7rem; }
  }

  @media (max-height: 900px) and (min-width: 769px) {
    .slide-content {
      padding: var(--spacing-md) var(--spacing-content);
      gap: var(--spacing-md);
    }

    .steps-container { gap: var(--spacing-md); }
    .step-card { padding: var(--spacing-md); }
    .step-number { width: 36px; height: 36px; font-size: 1.1rem; }
    .step-title { font-size: 0.95rem; }
    .step-desc { font-size: 0.78rem; }
    .step-example code { font-size: 0.68rem; }
    .step-tip { font-size: 0.68rem; }
  }
</style>
