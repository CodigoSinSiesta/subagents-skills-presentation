# ¿Qué es un Subagente?

## Tiempo estimado
4 minutos

## Puntos clave
- **Definición**: Agente especializado con contexto acotado y misión específica
- **Anatomía de un subagente**:
  - Instrucciones específicas (no genéricas)
  - Contexto limitado a su dominio
  - Herramientas relevantes para su tarea
  - Salida estructurada y predecible
- **Tipos de subagentes comunes**:
  - Subagente de testing: Jest, Vitest, Playwright
  - Subagente de documentación: Markdown, JSDoc
  - Subagente de refactorización: clean code, patterns
  - Subagente de revisión: code review, security
  - Subagente de investigación: web search, docs lookup
- **Comunicación entre agentes**:
  - Agente principal → subagente: prompt específico + contexto mínimo
  - Subagente → agente principal: resultado + resumen
- **No es magia**: cada subagente es una llamada al LLM con contexto filtrado

## Datos relevantes
- OpenCode usa subagentes para tareas exploratorias (explore, librarian, oracle)
- Claude Code invoca subagentes automáticamente para tareas complejas
- El overhead de comunicación es menor que el coste de contexto contaminado

## Transición
"Pero tener subagentes no basta. ¿Cómo los coordinamos? Hablemos de patrones de orquestación..."

## Notas
- Dibujar en la pizarra el flujo de comunicación
- Usar analogía de un equipo de desarrollo: frontend, backend, QA, DevOps
- Mencionar que NO siempre necesitas subagentes — tareas simples = agente único
- Advertir: más subagentes ≠ mejor, hay overhead
