<script lang="ts">
  import SlidePatternGrid from '@codigosinsiesta/theme/slides/SlidePatternGrid.svelte';
</script>

<SlidePatternGrid
  eyebrow="Arquitectura"
  title="Patrones de Orquestación"
  titleHighlight="Orquestación"
  intro="Cómo los agentes coordinan el trabajo. Nos centramos en **Orchestrator + Workers**, el patrón que escala de verdad."
  columns={2}
  patterns={[
    { type: 'chain', title: 'Single Agent', body: 'Un agente, múltiples herramientas. Simple pero limitado. Ideal para tareas simples.' },
    { type: 'fan-out', title: 'Multi-Agent (Peers)', body: 'Agentes peers que colaboran. Cada uno con su expertise. Flexible pero complejo.' },
    { type: 'orchestrator-workers', title: 'Orchestrator + Workers', body: '**El más usado en producción.** Un coordinador delega a workers especializados. Paralelismo real.', accent: true },
    { type: 'eval-loop', title: 'Supervisor', body: 'Un agente revisa y aprueba outputs de otros. Control de calidad. Para precisión crítica.' },
  ]}
/>
