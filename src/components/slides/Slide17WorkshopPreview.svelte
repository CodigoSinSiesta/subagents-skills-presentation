<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';
</script>

<SlideHandsOn
  eyebrow="Hands-on · Ahora"
  title="¡Vamos al Taller!"
  titleHighlight="Taller"
  intro="Es hora de construir tu primer skill desde cero. Un skill de arquitectura de proyecto que enseñe al agente las convenciones de TU proyecto."
  current={0}
  steps={[
    {
      title: 'Crea el directorio del skill',
      body: 'Elige un nombre descriptivo. El directorio define el identificador del skill.',
      code: '$ mkdir -p ~/.claude/skills/mi-proyecto\n$ cd ~/.claude/skills/mi-proyecto'
    },
    {
      title: 'Escribe el SKILL.md',
      body: '**Frontmatter** con nombre y descripción de activación + cuerpo con reglas concretas del proyecto.',
      code: '---\nname: mi-proyecto\ndescription: Use when working on mi-proyecto\n---\n## Stack\n- React 19 + TypeScript strict\n## Reglas\n- Sin any, sin as'
    },
    {
      title: 'Prueba el skill',
      body: 'Abre Claude Code en tu proyecto y describe una tarea. Verifica que el agente aplica las reglas del skill.',
      code: '$ claude\n> Implementa un componente Button siguiendo nuestras reglas\n✓ Skill "mi-proyecto" activado'
    }
  ]}
/>
