<script lang="ts">
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';

  const subagents = [
    { icon: '🎨', name: 'UI Agent', task: 'Diseña componentes', skill: 'React 19 Skill', output: 'Button.tsx · Form.tsx' },
    { icon: '🧪', name: 'Test Agent', task: 'Genera tests', skill: 'Testing Skill', output: 'Button.test.tsx' },
    { icon: '🔍', name: 'Review Agent', task: 'Revisa código', skill: 'Code Review Skill', output: 'Comentarios + aprobación' }
  ];
</script>

<SlideShell>
  <div class="wrapper">
    <Eyebrow>Potencia</Eyebrow>
    <h2>Subagente + <span class="highlight">Skill</span></h2>
    <p class="sub">El skill no hace al subagente más inteligente. Lo hace más <strong>ENFOCADO</strong>.</p>

    <div class="main-layout">
      <!-- Orquestador -->
      <div class="orchestrator card-glass">
        <div class="orch-icon">🤖</div>
        <div class="orch-body">
          <span class="orch-name">Orquestador</span>
          <span class="orch-desc">Analiza, planifica y despacha a subagentes especializados</span>
        </div>
      </div>

      <div class="arrows" aria-hidden="true">
        {#each subagents as _, i}
          <div class="spawn-arrow"></div>
        {/each}
      </div>

      <!-- Subagentes con skills -->
      <div class="subagents-row">
        {#each subagents as s}
          <div class="subagent card-glass">
            <div class="sub-header">
              <span class="sub-icon">{s.icon}</span>
              <span class="sub-name">{s.name}</span>
              <span class="sub-task">{s.task}</span>
            </div>
            <div class="skill-badge">
              <span class="skill-icon">⚡</span>
              <span class="skill-name">{s.skill}</span>
            </div>
            <div class="sub-output">
              <span class="output-label">Output</span>
              <span class="output-val">{s.output}</span>
            </div>
          </div>
        {/each}
      </div>

      <!-- Insight -->
      <div class="insight card-glass">
        <span class="insight-icon">💡</span>
        <p>El skill carga <strong>contexto específico SIN ocupar</strong> la ventana del orquestador. Cada subagente opera como experto en su área con el mínimo de información necesaria.</p>
      </div>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1100px; width: 100%; }
  h2 { font-size: clamp(2rem, 4.5vw, 3.2rem); margin-bottom: var(--spacing-sm); }
  .sub { margin-bottom: var(--spacing-2xl); }
  .sub strong { color: var(--color-accent-bright); }

  .main-layout { display: flex; flex-direction: column; align-items: center; gap: var(--spacing-md); }

  .orchestrator { display: flex; align-items: center; gap: var(--spacing-lg); padding: var(--spacing-lg) var(--spacing-2xl); width: 100%; max-width: 600px; border-color: rgba(96,165,250,0.4); }
  .orch-icon { font-size: 2rem; }
  .orch-body { display: flex; flex-direction: column; gap: 2px; }
  .orch-name { font-weight: 700; font-size: 1.1rem; }
  .orch-desc { font-size: 0.8rem; opacity: 0.75; font-family: var(--font-mono); }

  .arrows { display: flex; justify-content: space-around; width: 80%; }
  .spawn-arrow { width: 2px; height: 20px; background: linear-gradient(to bottom, rgba(96,165,250,0.5), rgba(96,165,250,0.1)); }

  .subagents-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--spacing-lg); width: 100%; }
  .subagent { padding: var(--spacing-lg); display: flex; flex-direction: column; gap: var(--spacing-sm); }
  .sub-header { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; }
  .sub-icon { font-size: 1.75rem; }
  .sub-name { font-weight: 700; font-size: 0.9rem; }
  .sub-task { font-size: 0.75rem; opacity: 0.7; }

  .skill-badge { display: flex; align-items: center; gap: var(--spacing-xs); padding: 4px 8px; background: rgba(167,139,250,0.12); border: 1px solid rgba(167,139,250,0.3); border-radius: var(--radius-sm); font-size: 0.75rem; }
  .skill-icon { font-size: 0.9rem; }
  .skill-name { font-family: var(--font-mono); color: #a78bfa; }

  .sub-output { display: flex; flex-direction: column; gap: 2px; }
  .output-label { font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-electric); opacity: 0.6; }
  .output-val { font-size: 0.8rem; opacity: 0.85; }

  .insight { display: flex; align-items: flex-start; gap: var(--spacing-md); padding: var(--spacing-lg) var(--spacing-xl); width: 100%; }
  .insight-icon { font-size: 1.5rem; flex-shrink: 0; }
  .insight p { font-size: 0.9rem; margin: 0; line-height: 1.6; }
  .insight strong { color: var(--color-accent-bright); }

  @media (max-width: 768px) { .subagents-row { grid-template-columns: 1fr; } }
</style>
