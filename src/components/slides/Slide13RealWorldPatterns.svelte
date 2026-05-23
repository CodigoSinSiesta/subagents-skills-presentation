<script lang="ts">
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';

  const agents = [
    {
      id: 'claude',
      name: 'Claude Code',
      type: 'Hub-and-Spoke + Agent Teams',
      tag: 'Anthropic',
      desc: 'Por defecto <strong>secuencial/conversacional</strong>. Subagents opcionales en paralelo con opt-in explícito.',
      badges: ['Paralelo (opt-in)', 'Context isolation', 'Ecosistema maduro'],
      flow: [
        { icon: '👤', label: 'Prompt' },
        { icon: '🔍', label: 'Explore', parallel: true },
        { icon: '📋', label: 'Plan', parallel: true },
        { icon: '🔨', label: 'Build', parallel: true },
        { icon: '✓', label: 'Resultado', merge: true }
      ]
    },
    {
      id: 'roo',
      name: 'Roo / Kilo Code',
      type: 'Human-in-the-Loop obligatorio',
      tag: 'Open source',
      desc: 'Flujo <strong>secuencial con approval</strong> humano obligatorio. Visibilidad total de cada paso.',
      badges: ['Secuencial', 'Human-in-loop', 'Modos por rol'],
      flow: [
        { icon: '🏗️', label: 'Architect' },
        { icon: '👤', label: 'Approve', human: true },
        { icon: '⌨️', label: 'Code' },
        { icon: '👤', label: 'Approve', human: true },
        { icon: '🧪', label: 'Test' }
      ]
    },
    {
      id: 'kiro',
      name: 'Kiro',
      type: 'Spec-driven + Hooks',
      tag: 'AWS',
      desc: '<strong>Specs antes que código</strong>: defines el qué, Kiro implementa el cómo. Hooks para automatización.',
      badges: ['Spec-first', 'AWS native', 'Hooks system'],
      flow: [
        { icon: '📝', label: 'Spec' },
        { icon: '👀', label: 'Review', human: true },
        { icon: '🔨', label: 'Implement' },
        { icon: '🎣', label: 'Hooks' },
        { icon: '✓', label: 'Done' }
      ]
    }
  ];
</script>

<SlideShell>
  <div class="wrapper">
    <Eyebrow>Casos Reales</Eyebrow>
    <h2>Patrones del <span class="highlight">Mundo Real</span></h2>
    <p class="sub">Cómo se usan subagentes y skills en herramientas reales de producción en 2026.</p>

    <div class="agents-grid">
      {#each agents as agent}
        <div class="agent-card card-glass">
          <div class="agent-header">
            <div class="agent-meta">
              <span class="agent-name">{agent.name}</span>
              <span class="agent-type">{agent.type}</span>
            </div>
            <span class="agent-tag">{agent.tag}</span>
          </div>

          <p class="agent-desc">{@html agent.desc}</p>

          <!-- Flow visual -->
          <div class="flow-visual">
            {#each agent.flow as step, i}
              <div class="flow-item" class:flow-parallel={step.parallel} class:flow-human={step.human} class:flow-merge={step.merge}>
                <span class="flow-icon">{step.icon}</span>
                <span class="flow-label">{step.label}</span>
              </div>
              {#if i < agent.flow.length - 1}
                <span class="flow-sep" aria-hidden="true">→</span>
              {/if}
            {/each}
          </div>

          <div class="badges">
            {#each agent.badges as badge}
              <span class="badge">{badge}</span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1200px; width: 100%; }
  h2 { font-size: clamp(2rem, 4.5vw, 3.2rem); margin-bottom: var(--spacing-sm); }
  .sub { color: var(--color-electric); margin-bottom: var(--spacing-2xl); opacity: 0.9; }

  .agents-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-lg); }

  .agent-card { padding: var(--spacing-xl); display: flex; flex-direction: column; gap: var(--spacing-lg); }
  .agent-header { display: flex; justify-content: space-between; align-items: flex-start; gap: var(--spacing-sm); }
  .agent-meta { display: flex; flex-direction: column; gap: 2px; }
  .agent-name { font-weight: 800; font-size: 1.1rem; }
  .agent-type { font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-electric); opacity: 0.8; }
  .agent-tag { font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; padding: 2px 6px; background: rgba(96,165,250,0.1); border: 1px solid rgba(96,165,250,0.25); border-radius: 4px; color: var(--color-electric); flex-shrink: 0; }

  .agent-desc { font-size: 0.85rem; line-height: 1.5; margin: 0; opacity: 0.9; }
  .agent-desc :global(strong) { color: var(--color-accent-bright); }

  /* Flow visual */
  .flow-visual { display: flex; align-items: center; flex-wrap: wrap; gap: 4px; padding: var(--spacing-md); background: rgba(10,22,40,0.4); border-radius: var(--radius-md); }
  .flow-item { display: flex; flex-direction: column; align-items: center; gap: 2px; padding: 4px 6px; border-radius: 6px; background: rgba(59,130,246,0.1); border: 1px solid rgba(96,165,250,0.2); }
  .flow-item.flow-parallel { background: rgba(59,130,246,0.2); border-color: rgba(96,165,250,0.5); }
  .flow-item.flow-human { background: rgba(251,191,36,0.12); border-color: rgba(251,191,36,0.35); }
  .flow-item.flow-merge { background: rgba(34,197,94,0.12); border-color: rgba(34,197,94,0.35); }
  .flow-icon { font-size: 1rem; }
  .flow-label { font-family: var(--font-mono); font-size: 0.6rem; opacity: 0.8; white-space: nowrap; }
  .flow-sep { color: var(--color-electric); opacity: 0.4; font-size: 0.8rem; }

  .badges { display: flex; flex-wrap: wrap; gap: var(--spacing-xs); }
  .badge { font-family: var(--font-mono); font-size: 0.65rem; padding: 2px 6px; border-radius: 4px; background: rgba(96,165,250,0.08); border: 1px solid rgba(96,165,250,0.2); color: var(--color-electric); }

  @media (max-width: 900px) { .agents-grid { grid-template-columns: 1fr; } }
</style>
