<script lang="ts">
  import SlideShell from '@codigosinsiesta/theme/slides/SlideShell.svelte';
  import Eyebrow from '@codigosinsiesta/theme/components/Eyebrow.svelte';
</script>

<SlideShell>
  <div class="wrapper">
    <Eyebrow>Fundamentos</Eyebrow>
    <h2>¿Qué es un <span class="highlight">Sub-agente?</span></h2>
    <p class="sub">Un agente especializado con contexto reducido y objetivo único. No decide qué hacer — solo cómo hacer lo que se le encarga.</p>

    <div class="main-layout">
      <!-- Diagrama orquestador → subagentes -->
      <div class="diagram card-glass">
        <div class="main-agent">
          <div class="agent-icon">🤖</div>
          <div class="agent-body">
            <span class="agent-name">Orquestador</span>
            <span class="agent-role">planifica · delega · sintetiza</span>
          </div>
        </div>

        <div class="arrows-row" aria-hidden="true">
          <div class="arrow-line"></div>
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
            <span class="sub-icon">🧪</span>
            <span class="sub-name">Test Writer</span>
            <span class="sub-task">Generar tests</span>
          </div>
          <div class="subagent card-glass">
            <span class="sub-icon">🔧</span>
            <span class="sub-name">Builder</span>
            <span class="sub-task">Implementar cambios</span>
          </div>
        </div>

        <div class="result-arrow" aria-hidden="true">↓ resultados parciales ↓</div>

        <div class="result-box card-glass">
          <span class="result-icon">✅</span>
          <div class="result-body">
            <span class="result-label">Output consolidado</span>
            <span class="result-desc">El orquestador sintetiza y entrega al usuario</span>
          </div>
        </div>
      </div>

      <!-- Definición + analogía -->
      <div class="right-col">
        <div class="def-card card-glass">
          <h3>Definición</h3>
          <p>Un agente especializado invocado por un orquestador. Opera con <strong>contexto reducido</strong> y <strong>objetivo único</strong>, y entrega un artefacto concreto.</p>
        </div>

        <div class="def-card card-glass analogy">
          <h3>Analogía: el equipo de obra</h3>
          <p>El <strong>arquitecto</strong> (orquestador) planifica. El <strong>electricista</strong> (subagente) solo cableado. El <strong>fontanero</strong> solo tuberías. Cada uno con su skill, trabajando en paralelo.</p>
        </div>

        <div class="key-note card-glass">
          <strong>Importante:</strong> Un subagente no decide QUÉ hacer. Solo <em>CÓMO</em> hacer lo que se le encarga.
        </div>
      </div>
    </div>
  </div>
</SlideShell>

<style>
  .wrapper { max-width: 1200px; width: 100%; }
  h2 { font-size: clamp(2rem, 4.5vw, 3.2rem); margin-bottom: var(--spacing-sm); }
  .sub { color: var(--color-electric); margin-bottom: var(--spacing-2xl); opacity: 0.9; }

  .main-layout { display: grid; grid-template-columns: 1fr 1fr; gap: var(--spacing-2xl); align-items: start; }

  /* Diagram */
  .diagram { padding: var(--spacing-xl); display: flex; flex-direction: column; align-items: center; gap: var(--spacing-md); }
  .main-agent { display: flex; align-items: center; gap: var(--spacing-md); padding: var(--spacing-lg); background: rgba(59,130,246,0.12); border: 2px solid rgba(96,165,250,0.4); border-radius: var(--radius-lg); width: 100%; }
  .agent-icon { font-size: 2rem; }
  .agent-body { display: flex; flex-direction: column; }
  .agent-name { font-weight: 700; font-size: 1.1rem; }
  .agent-role { font-family: var(--font-mono); font-size: 0.7rem; color: var(--color-electric); opacity: 0.8; }

  .arrows-row { display: flex; justify-content: space-around; width: 80%; }
  .arrow-line { width: 2px; height: 24px; background: linear-gradient(to bottom, rgba(96,165,250,0.6), rgba(96,165,250,0.1)); }

  .subagents-row { display: flex; gap: var(--spacing-sm); width: 100%; }
  .subagent { flex: 1; padding: var(--spacing-md); display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; }
  .sub-icon { font-size: 1.5rem; }
  .sub-name { font-weight: 700; font-size: 0.85rem; }
  .sub-task { font-size: 0.75rem; opacity: 0.7; font-family: var(--font-mono); }

  .result-arrow { font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-electric); opacity: 0.6; }
  .result-box { display: flex; align-items: center; gap: var(--spacing-md); padding: var(--spacing-lg); width: 100%; }
  .result-icon { font-size: 1.5rem; }
  .result-body { display: flex; flex-direction: column; gap: 2px; }
  .result-label { font-weight: 700; font-size: 0.9rem; }
  .result-desc { font-size: 0.8rem; opacity: 0.7; }

  /* Right col */
  .right-col { display: flex; flex-direction: column; gap: var(--spacing-lg); }
  .def-card { padding: var(--spacing-xl); }
  .def-card h3 { font-size: 1.1rem; margin-bottom: var(--spacing-sm); color: var(--color-electric); }
  .def-card p { font-size: 0.9rem; line-height: 1.6; margin: 0; }
  .def-card strong { color: var(--color-accent-bright); }
  .analogy { background: rgba(167,139,250,0.08); border-color: rgba(167,139,250,0.25); }
  .key-note { padding: var(--spacing-lg); font-size: 0.875rem; line-height: 1.6; border-color: rgba(34,197,94,0.3); background: rgba(34,197,94,0.06); }
  .key-note strong { color: #22c55e; }

  @media (max-width: 900px) { .main-layout { grid-template-columns: 1fr; } }
</style>
