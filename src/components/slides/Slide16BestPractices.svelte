<script lang="ts">
  import SlideCompare from '@codigosinsiesta/theme/slides/SlideCompare.svelte';
</script>

<SlideCompare
  eyebrow="Buenas prácticas"
  title="El camino correcto"
  titleHighlight="correcto"
  leftKind="err"
  rightKind="ok"
  left={{
    label: 'Evita',
    headline: 'Patrones que fallan',
    items: [
      'Skills vagos: "escribe buen código"',
      'Orquestación para tareas que un agente resuelve',
      'Subagentes sin instrucciones claras',
      'Compartir historial completo de conversación',
      'Aprobar planes sin leerlos: 1.000 líneas plan ≈ 1.000 líneas código'
    ]
  }}
  right={{
    label: 'Aplica',
    headline: 'Patrones que funcionan',
    items: [
      'Skills concretos con reglas específicas del proyecto',
      'Pasa el contexto mínimo necesario a cada subagente',
      'Usa CLAUDE.md como fuente de verdad del proyecto',
      'Verifica el output de cada subagente antes de integrarlo',
      'Empieza con un solo agente. Escala solo cuando sea necesario'
    ]
  }}
/>
