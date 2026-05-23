<script lang="ts">
  import SlideDidactic from '@codigosinsiesta/theme/slides/SlideDidactic.svelte';
</script>

<SlideDidactic
  eyebrow="Skills"
  title="¿Qué es un Skill?"
  titleHighlight="Skill"
  definition={{
    title: 'Definición',
    body: 'Un **paquete de conocimiento especializado** que modifica el comportamiento de un agente para una tarea o dominio concreto. Proporciona instrucciones, contexto y herramientas.'
  }}
  analogy={{
    title: 'Analogía: las especificaciones del puesto',
    body: 'Piensa en un skill como las **especificaciones de un puesto de trabajo**. Sin ellas, el empleado es capaz pero no sabe QUÉ hacer ni CÓMO hacerlo en tu empresa.'
  }}
  examples={{
    title: 'Un skill proporciona',
    items: [
      'Instrucciones — reglas, patrones y convenciones que el agente debe seguir',
      'Contexto — información del dominio que el agente no tiene por defecto',
      'Herramientas — capacidades específicas que el agente puede invocar'
    ]
  }}
/>
