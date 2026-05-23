<script lang="ts">
  import SlideHandsOn from '@codigosinsiesta/theme/slides/SlideHandsOn.svelte';
</script>

<SlideHandsOn
  eyebrow="Caso de uso"
  title="Persona Reviewers"
  titleHighlight="Persona Reviewers"
  intro="Cada miembro del equipo tiene un agente revisor que replica su perspectiva en cada PR. Corren en paralelo en CI."
  current={null}
  steps={[
    {
      title: 'Persona doc',
      body: 'Cada engineer escribe **qué espera de un buen PR** según su rol: criterios de seguridad, arquitectura, performance, UX.',
    },
    {
      title: 'Reviewer agent',
      body: 'Un **subagente por persona**: system prompt = doc del engineer + skill del dominio + diff del PR.',
    },
    {
      title: 'Trigger en CI',
      body: 'En cada push, **todos los reviewers corren en paralelo**. Feedback en minutos, no horas.',
      code: '$ on: pull_request → run persona-reviewers\n✓ alice-security: no issues\n✓ bob-arch: 2 suggestions\n✓ carol-perf: 1 warning'
    },
    {
      title: 'Verdict',
      body: '**P2+ bloquean merge**. P3 se anotan como suggestions. P4 pasan automáticamente. Tú decides el umbral.',
    }
  ]}
/>
