<script lang="ts">
  import SlideList from '@codigosinsiesta/theme/slides/SlideList.svelte';
</script>

<SlideList
  eyebrow="Implementación"
  title="Skills en la Práctica"
  titleHighlight="Práctica"
  columns={3}
  items={[
    {
      title: 'CLAUDE.md',
      body: '**El archivo raíz** del proyecto para Claude Code y Cursor. Define arquitectura, stack, reglas de estilo, comandos. Heredado por todos los agentes compatibles.'
    },
    {
      title: 'AGENTS.md',
      body: '**Instrucciones granulares** por directorio. `src/components/AGENTS.md` hereda de la raíz y añade reglas específicas para componentes. Compatible con multi-agente.'
    },
    {
      title: '.claude/skills/',
      body: '**Skills reutilizables** como archivos Markdown. `~/.claude/skills/react-19/SKILL.md` (user-level) o `./.claude/skills/` (project-level). Se cargan por contexto.'
    }
  ]}
/>
