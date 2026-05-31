<script lang="ts">
  import SlideDidactic from '@codigosinsiesta/theme/slides/SlideDidactic.svelte';
</script>

<SlideDidactic
  eyebrow="Fundamentos"
  title="¿Qué es un Sub-agente?"
  titleHighlight="Sub-agente"
  definition={{
    title: 'Definición',
    body: 'Un **agente especializado** invocado por un orquestador para realizar una tarea acotada. Opera con contexto reducido y objetivo único, y entrega un artefacto concreto.'
  }}
  analogy={{
    title: 'Analogía: el equipo de obra',
    body: 'El **arquitecto** (orquestador) planifica. El **electricista** (subagente) solo cableado. El **fontanero** solo tuberías. Cada uno con su skill, trabajando en paralelo bajo la misma dirección.'
  }}
  examples={{
    title: 'Subagentes típicos',
    items: [
      'Code reviewer — analiza diff y detecta problemas',
      'Test writer — genera tests para el código nuevo',
      'Doc generator — produce documentación a partir del código',
      'Security auditor — busca vulnerabilidades en el PR'
    ]
  }}
/>
