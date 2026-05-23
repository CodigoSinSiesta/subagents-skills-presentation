<script lang="ts">
  import SlideCompare from '@codigosinsiesta/theme/slides/SlideCompare.svelte';
</script>

<SlideCompare
  eyebrow="Potencia"
  title="Subagente + Skill"
  titleHighlight="Skill"
  leftKind="neutral"
  rightKind="ok"
  left={{
    label: 'Sin sinergia',
    headline: 'Separados no alcanzan su potencial',
    items: [
      'Skill sin subagente → prompt largo y acoplado',
      'Subagente sin skill → ejecuta rápido pero con variabilidad alta',
      'Contexto no filtrado → más ruido, más alucinaciones',
      'Sin especialización → resultados genéricos'
    ]
  }}
  right={{
    label: 'Con sinergia',
    headline: 'Juntos se multiplican',
    items: [
      'Subagente recibe skill con conocimiento del dominio',
      'Contexto filtrado + instrucciones precisas',
      'Paralelismo con calidad consistente',
      'Cada worker opera como experto en su área'
    ]
  }}
/>
