<script lang="ts">
  import SlideCode from '@codigosinsiesta/theme/slides/SlideCode.svelte';
</script>

<SlideCode
  eyebrow="Estructura"
  title="Anatomía de un Skill"
  titleHighlight="Skill"
  language="markdown"
  code={`# Skill: Code Review Expert

## Instrucciones
- Revisar cada archivo modificado
- Buscar patrones de error comunes
- Verificar cobertura de tests
- Reportar SOLO issues reales

## Contexto del Proyecto
- Stack: TypeScript + React + Tailwind
- Patrón: Clean Architecture
- Tests: Vitest + Testing Library

## Herramientas disponibles
- lsp_diagnostics: errores del IDE
- grep: buscar patrones en el código
- run_tests: ejecutar suite completa`}
  annotations={[
    { line: 1, text: 'Nombre del skill' },
    { line: 3, text: 'Instrucciones específicas' },
    { line: 9, text: 'Contexto del dominio' },
    { line: 14, text: 'Tools disponibles' }
  ]}
  callout={{
    kind: 'ok',
    title: 'Clave',
    body: 'Un skill bien escrito es la diferencia entre un agente que **ayuda** y uno que **estorba**.'
  }}
/>
