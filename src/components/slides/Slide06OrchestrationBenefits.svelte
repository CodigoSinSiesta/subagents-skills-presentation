<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Ventajas"
  title="Por qué orquestar"
  titleHighlight="orquestar"
  columns={3}
  items={[
    {
      title: 'Paralelismo',
      body: 'Múltiples subagentes trabajando **al mismo tiempo** en partes independientes de la tarea. Lo que tardaba horas, en minutos.'
    },
    {
      title: 'Especialización',
      body: 'Cada subagente recibe un **skill específico** para su dominio. Un tester experto produce mejores tests que un generalista.'
    },
    {
      title: 'Aislamiento de contexto',
      body: 'Cada subagente recibe **solo lo que necesita**. Menos ruido = menos alucinaciones = outputs más precisos y consistentes.'
    }
  ]}
/>
