# Patrones de Orquestación

## Tiempo estimado
4 minutos

## Puntos clave
- **Patrón 1: Secuencial**
  - Agente A → Agente B → Agente C
  - Cada uno recibe el output del anterior
  - Ejemplo: código → tests → documentación
  - Pros: simple, predecible
  - Contras: lento, sin paralelismo

- **Patrón 2: Paralelo**
  - Agente principal dispatcha varios a la vez
  - Agente A | Agente B | Agente C (simultáneos)
  - Ejemplo: generar tests unitarios + e2e + docs en paralelo
  - Pros: rápido, maximiza throughput
  - Contras: coordinación de resultados

- **Patrón 3: Jerárquico**
  - Agente principal delega a managers intermedios
  - Manager → subagentes especializados
  - Ejemplo: feature manager → frontend + backend + testing agents
  - Pros: escala bien para proyectos grandes
  - Contras: complejidad de diseño

- **Patrón 4: Hub-and-Spoke**
  - Agente central como router
  - Cada subagente es independiente
  - El hub coordina y agrega resultados
  - Pros: flexible, fácil de añadir agentes
  - Contras: cuello de botella en el hub

## Datos relevantes
- El patrón más común en coding agents: híbrido secuencial + paralelo
- OpenCode usa hub-and-spoke con agente principal como coordinador
- El 90% de tareas de coding se resuelven con 2-3 subagentes máximo

## Transición
"¿Y qué ganamos con todo esto? Vamos a ver los beneficios de la orquestación..."

## Notas
- Mostrar diagramas visuales de cada patrón
- Preguntar: "¿Qué patrón usaríais para un proyecto con frontend y backend?"
- Enfatizar que el patrón depende del problema, no hay uno mejor
- Mencionar que puedes mezclar patrones según necesidad
