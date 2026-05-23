<script lang="ts">
  import SlideToolsGrid from '@codigosinsiesta/theme/slides/SlideToolsGrid.svelte';
</script>

<SlideToolsGrid
  eyebrow="Vocabulario canónico · IBM, abril 2026"
  title="Roles dentro de un agente"
  titleHighlight="Roles"
  intro="Diseña tu agente como diseñas un equipo humano. Un agente complejo necesita **doers, thinkers, supervisors, communicators** y roles especializados."
  columns={3}
  tools={[
    { icon: '🛠️', title: 'Doer', subtitle: 'El ejecutor', body: 'El junior. Ejecuta pasos individuales: escribe código, redacta, transforma. No tiene visión global.' },
    { icon: '🎯', title: 'Planner', subtitle: 'El estratega', body: 'El tech lead. Recibe el objetivo, lo descompone en pasos. Solo planifica, no ejecuta.' },
    { icon: '🔌', title: 'Tool Operator', subtitle: 'El integrador', body: 'Construye llamadas a APIs / CLIs / web services con argumentos correctos y consume su salida.' },
    { icon: '📚', title: 'Learner', subtitle: 'El investigador', body: 'Recopila info externa (RAG, scraping, búsqueda) y la introduce al flujo.' },
    { icon: '🔍', title: 'Critic', subtitle: 'El revisor', body: 'El feedback directo. Revisa outputs en busca de alucinaciones, ejecuta tests, puntúa propuestas.' },
    { icon: '👁️', title: 'Supervisor', subtitle: 'El PM', body: 'Vigila a nivel tarea o proyecto. Detecta atascos y caminos rotos.' },
    { icon: '🎤', title: 'Presenter', subtitle: 'El comunicador', body: 'Recompone las piezas y comunica el resultado al usuario final con coherencia.' },
  ]}
/>
