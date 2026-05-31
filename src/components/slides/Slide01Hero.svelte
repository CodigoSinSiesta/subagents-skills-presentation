<script lang="ts">
  import SlideHero from '@codigosinsiesta/theme/slides/SlideHero.svelte';
</script>

<SlideHero
  eyebrow="Código Sin Siesta · 2026"
  title="Orquestando inteligencia"
  titleHighlight="inteligencia"
  subtitle="Subagentes, skills y la arquitectura de agentes que escalan."
  tools={[
    { label: 'Claude Code' },
    { label: 'Orchestration' },
    { label: 'Skills' },
    { label: 'Multi-Agent', highlight: true },
  ]}
  author={{
    name: 'Alejandro de la Fuente',
    role: 'Technical Leader · NTT Data · GDNE',
    avatarUrl: '/subagents-skills-presentation/assets/alejandro-avatar.png',
    links: [{ url: 'https://codigosinsiesta.github.io', label: 'codigosinsiesta.github.io' }]
  }}
/>
