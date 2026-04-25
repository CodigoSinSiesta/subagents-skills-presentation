# Patrones Reales

## Tiempo estimado
4 minutos

## Puntos clave
- **Claude Code**:
  - CLAUDE.md como centro del universo
  - Subagentes automáticos para tareas exploratorias
  - Skills en .claude/skills/ cargados bajo demanda
  - Fortaleza: integración con Anthropic, mejor modelo
  - Patrón: híbrido secuencial + paralelo

- **OpenCode**:
  - AGENTS.md jerárquico por directorio
  - Subagentes explícitos: explore, librarian, oracle, hephaestus
  - Skills built-in + customizables
  - Fortaleza: transparencia, control, open source
  - Patrón: hub-and-spoke con agente principal

- **Cursor**:
  - .cursorrules como CLAUDE.md equivalente
  - Composer mode para multi-archivo
  - Fortaleza: integración con VSCode, UX pulida
  - Patrón: secuencial con contexto de IDE

- **Vercel v0**:
  - Subagentes implícitos (UI + código + preview)
  - Skills de Next.js/React hardcodeados
  - Fortaleza: output inmediato, visual
  - Patrón: paralelo con aggregación visual

- **Lecciones comunes**:
  - Todas usan algún tipo de "context file"
  - Todas tienen subagentes (explícitos o implícitos)
  - El skill loading es clave para predecibilidad
  - La UX determina si la gente LO USA

## Datos relevantes
- Claude Code: mejor para proyectos complejos
- Cursor: mejor para quienes viven en VSCode
- OpenCode: mejor para control total y transparencia
- v0: mejor para prototipado rápido de UI

## Transición
"Pero no todo es color de rosa. Vamos a ver los errores más comunes..."

## Notas
- Mostrar capturas de cada herramienta si es posible
- Enfatizar que NO hay una "mejor", depende del caso de uso
- Mencionar que se pueden usar varias herramientas en el mismo proyecto
- Advertir contra el "shiny object syndrome"
