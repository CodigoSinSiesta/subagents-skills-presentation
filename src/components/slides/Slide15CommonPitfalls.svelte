<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Errores frecuentes"
  title="Trampas comunes"
  titleHighlight="Trampas"
  columns={2}
  items={[
    {
      title: 'Sobre-orquestar',
      body: 'No todo necesita subagentes. Una tarea simple con un orquestador es como **matar moscas a cañonazos**. Empieza con un solo agente.'
    },
    {
      title: 'Contexto excesivo',
      body: 'Pasar TODO el contexto a cada subagente. **Más datos no es más inteligencia** — es más ruido. Filtra antes de delegar.'
    },
    {
      title: 'Skills genéricos',
      body: 'Un skill que dice "haz buen código" no aporta nada. Los skills deben ser **ESPECÍFICOS y CONCRETOS** para tu proyecto y stack.'
    },
    {
      title: 'No verificar outputs',
      body: 'Confiar ciegamente en el resultado de un subagente sin validación. **Siempre verifica** antes de integrar o pasar al siguiente paso.'
    },
    {
      title: 'Ignorar el coste',
      body: 'Cada subagente consume tokens. 5 subagentes haciendo lo que uno podría = **5x el coste**. Mide y optimiza.'
    }
  ]}
/>
