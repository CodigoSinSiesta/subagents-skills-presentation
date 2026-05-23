<script lang="ts">
  import SlideResources from '@codigosinsiesta/theme/slides/SlideResources.svelte';
</script>

<SlideResources
  eyebrow="Takeaways"
  title="Para llevarte a casa"
  titleHighlight="casa"
  closing="Hecho con ♥ por Código Sin Siesta · 2026"
  takeaways={[
    { text: 'Un solo agente no escala. **Orquesta, especializa, paraleliza.**' },
    { text: 'Los **skills** son el conocimiento especializado que transforma un agente genérico en experto.' },
    { text: '**Contexto filtrado** = menos ruido = mejor output. No pases todo a todos.' },
    { text: 'Empieza simple. **Escala solo cuando sea necesario**, no por defecto.' },
    { text: 'Verifica siempre: el output de un subagente **no es correcto hasta que lo compruebas**.' }
  ]}
  links={[
    { icon: '🤖', title: 'Claude Code', url: 'https://claude.ai/code', tag: 'tool' },
    { icon: '📖', title: '12-Factor Agents', url: 'https://github.com/humanlayer/12-factor-agents', tag: 'github' },
    { icon: '🚀', title: 'Más presentaciones', url: 'https://codigosinsiesta.github.io', tag: 'web' }
  ]}
  qr={{ title: 'Código Sin Siesta', url: 'https://codigosinsiesta.github.io' }}
/>
