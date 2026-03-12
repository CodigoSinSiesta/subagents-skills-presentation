# El Problema de los Agentes Monolíticos

## Tiempo estimado
3 minutos

## Puntos clave
- **Síntomas del agente sobrecargado**:
  - Instrucciones largas que el agente ignora parcialmente
  - Resultados inconsistentes según el contexto
  - "Se pierde" en tareas complejas multi-paso
- **El límite del contexto**:
  - Ventana de contexto finita (200K tokens no es infinito)
  - Más instrucciones ≠ mejores resultados
  - Ruido en el contexto = peores decisiones
- **Ejemplo real**:
  - "Hazme una app completa" → el agente alucina arquitectura
  - "Refactoriza, añade tests, documenta, y despliega" → caos
- **La raíz del problema**:
  - Un agente no puede especializarse en todo
  - No hay separación de responsabilidades
  - El contexto se contamina entre tareas

## Datos relevantes
- Los LLMs rinden peor con instrucciones muy largas (lost in the middle problem)
- La especialización mejora resultados un 40-60% según benchmarks de Anthropic
- El 80% de los errores de agentes vienen de contexto mal gestionado

## Transición
"¿Y si en lugar de un agente que hace todo, tuviéramos varios agentes especializados? Aquí entran los subagentes..."

## Notas
- Usar analogía del empleado que hace de todo: contable, marketing, ventas, IT
- Preguntar si alguien ha experimentado estos problemas
- Enfatizar que NO es culpa del modelo, es problema de diseño
- Mostrar ejemplo visual del agente abrumado vs. equipo organizado
