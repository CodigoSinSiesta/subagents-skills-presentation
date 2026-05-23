<script lang="ts">
  import SlideToolsGrid from '@codigosinsiesta/theme/slides/SlideToolsGrid.svelte';
</script>

<SlideToolsGrid
  eyebrow="Casos reales"
  title="Patrones del Mundo Real"
  titleHighlight="Mundo Real"
  intro="Cómo se usan subagentes y skills en herramientas reales de producción en 2026."
  columns={3}
  tools={[
    {
      icon: '🤖',
      title: 'Claude Code',
      subtitle: 'Hub-and-Spoke + Agent Teams',
      tag: 'Anthropic',
      body: 'Por defecto secuencial/conversacional. Subagents opcionales en paralelo con opt-in explícito. Ecosistema maduro de skills.',
      meta: ['Paralelo (opt-in)', 'Context isolation', 'Skills']
    },
    {
      icon: '🦘',
      title: 'Roo / Kilo Code',
      subtitle: 'Human-in-the-Loop',
      tag: 'Open source',
      body: 'Flujo secuencial con approval humano obligatorio. Visibilidad total de cada paso. Modos por rol.',
      meta: ['Secuencial', 'Human-in-loop', 'Modos']
    },
    {
      icon: '🪁',
      title: 'Kiro',
      subtitle: 'Spec-driven + Hooks',
      tag: 'AWS',
      body: 'Specs antes que código: defines el qué, Kiro implementa el cómo. Hooks para automatización y observabilidad.',
      meta: ['Spec-first', 'AWS native', 'Hooks']
    }
  ]}
/>
