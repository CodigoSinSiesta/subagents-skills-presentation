<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="El reto"
  title="¿Por qué un solo agente no escala?"
  titleHighlight="no escala"
  columns={3}
  items={[
    {
      title: 'Contexto limitado',
      body: 'Un solo agente tiene una **ventana de contexto finita**. Tareas grandes desbordan su capacidad de atención y degradan la calidad.'
    },
    {
      title: 'Sin especialización',
      body: 'Un agente generalista no puede ser experto en todo. Testing, review, documentación… cada tarea requiere **expertise diferente**.'
    },
    {
      title: 'Ejecución secuencial',
      body: 'Un solo agente procesa una cosa a la vez. Sin paralelismo, los proyectos complejos se eternizan. La solución: **equipo de agentes**.'
    }
  ]}
/>
