<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';
</script>

<SlideHandsOn
  eyebrow="Workshop · 5 min"
  title="Crea tu Primer Skill"
  titleHighlight="Primer Skill"
  intro="4 pasos para tener un skill funcional. Empieza por lo que más repites en tu día a día."
  current={0}
  steps={[
    {
      title: 'Identifica el contexto',
      body: '¿Qué tecnología/framework usas **frecuentemente**? Empieza por lo que más repites.',
      code: '# Ejemplos: React 19, Tailwind 4, Zustand, Django, FastAPI...'
    },
    {
      title: 'Crea la estructura',
      body: 'Crea el directorio y archivo `SKILL.md`. El nombre del directorio = nombre del skill.',
      code: '$ mkdir -p ~/.claude/skills/mi-skill\n$ touch ~/.claude/skills/mi-skill/SKILL.md'
    },
    {
      title: 'Define el frontmatter',
      body: 'Nombre y descripción para que el agente sepa **cuándo activarlo** automáticamente.',
      code: '---\nname: react-19\ndescription: Use when working with React 19 components,\n  hooks, server components or RSC patterns\n---'
    },
    {
      title: 'Añade contenido útil',
      body: 'Patrones, reglas, ejemplos. Incluye **DOs y DON\'Ts** concretos para tu proyecto.',
      code: '## Server Components\n### DO: use() Hook for async data\n### DON\'T: use useState in Server Components'
    }
  ]}
/>
