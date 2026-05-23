<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Contexto"
  title="Gestión de Contexto"
  titleHighlight="Contexto"
  columns={2}
  items={[
    {
      title: 'Flujo de contexto',
      body: '**User → full context → Agent → filtered context → Subagent → relevant only → Result**. El orquestador es el guardián: decide qué pasa y qué no.'
    },
    {
      title: 'Regla de oro',
      body: 'Cada subagente recibe **solo el contexto relevante para su tarea**. Más datos no es más inteligencia — es más ruido. Menos contexto = outputs más precisos.'
    },
    {
      title: 'Gestión de ventana',
      body: '**Compresión progresiva**: resume conversaciones largas. **RAG**: inyecta solo los fragmentos relevantes. **Checkpoints**: guarda estado entre sesiones largas.'
    },
    {
      title: 'Anti-patrón',
      body: 'Pasar el **historial completo de conversación** a cada subagente. El subagente no necesita saber todo lo que hizo el orquestador, solo lo que debe ejecutar.'
    }
  ]}
/>
