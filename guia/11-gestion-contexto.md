# Gestión de Contexto

## Tiempo estimado
3 minutos

## Puntos clave
- **El problema**: Contexto finito + tareas infinitas
- **Reglas de oro**:
  1. Menos es más: filtra antes de cargar
  2. Jerarquía: global → proyecto → dominio → tarea
  3. Lazy loading: carga solo lo que necesitas
  4. Cache inteligente: reutiliza contexto entre tareas relacionadas

- **Estrategias de filtrado**:
  - Por extensión: solo archivos relevantes
  - Por directorio: exclude node_modules, dist, .git
  - Por recencia: archivos modificados recientemente
  - Por relevancia: semantic search en el código

- **El stack de contexto**:
  ```
  ┌─────────────────────────┐
  │ Contexto de tarea       │ ← Más específico, menor volumen
  ├─────────────────────────┤
  │ Skill cargado           │
  ├─────────────────────────┤
  │ AGENTS.md del directorio│
  ├─────────────────────────┤
  │ CLAUDE.md del proyecto  │
  ├─────────────────────────┤
  │ Contexto global         │ ← Menos específico, mayor volumen
  └─────────────────────────┘
  ```

- **Errores comunes**:
  - Cargar TODO el proyecto en contexto
  - Ignorar .gitignore al buscar archivos
  - No filtrar por tipo de tarea

## Datos relevantes
- El 80% del contexto típico es irrelevante para la tarea actual
- Filtrar contexto mejora resultados un 40-50%
- Claude Code usa semantic search para encontrar archivos relevantes

## Transición
"¿Cómo se ve esto en herramientas reales? Vamos a ver patrones que funcionan..."

## Notas
- Mostrar ejemplo de archivo .gitignore bien configurado
- Enfatizar que el contexto ES el recurso más valioso
- Advertir: contexto contaminado = resultados basura
- Preguntar: "¿Cuántos habéis tenido agentes que 'no ven' vuestro código?"
