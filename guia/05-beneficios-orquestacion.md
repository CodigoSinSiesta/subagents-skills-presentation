# Beneficios de la Orquestación

## Tiempo estimado
3 minutos

## Puntos clave
- **Paralelismo**:
  - Tareas independientes se ejecutan simultáneamente
  - Reducción drástica del tiempo total
  - Ejemplo: 3 tareas de 2 min secuencial = 6 min, paralelo = 2 min

- **Especialización**:
  - Cada subagente tiene instrucciones optimizadas para SU tarea
  - Mejores resultados porque el contexto está filtrado
  - Menos alucinaciones por scope limitado

- **Aislamiento de errores**:
  - Si un subagente falla, no contamina a los demás
  - Fácil debugging: sabes qué agente falló
  - Recuperación parcial: los otros agentes siguen

- **Contexto controlado**:
  - Cada agente ve solo lo que necesita
  - Menos tokens desperdiciados
  - Decisiones más informadas

- **Reutilización**:
  - El mismo subagente de testing sirve para cualquier proyecto
  - Composición de agentes como LEGO

## Datos relevantes
- Paralelismo reduce tiempo un 60-70% en tareas típicas de coding
- Especialización mejora calidad de output un 40-60%
- El aislamiento de errores reduce tiempo de debugging a la mitad

## Transición
"Pero los subagentes necesitan saber QUÉ hacer y CÓMO hacerlo. Aquí entran los skills..."

## Notas
- Usar analogía de la cocina: chef principal + especialistas (pastelero, grillero, etc.)
- Enfatizar que el beneficio NO es solo velocidad, es CALIDAD
- Mencionar el trade-off: más complejidad inicial, pero mejor resultado
- Preguntar: "¿Qué os preocupa más: velocidad o calidad?"
