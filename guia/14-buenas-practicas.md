# Buenas Prácticas

## Tiempo estimado
3 minutos

## Puntos clave
- **DO: Hacer**:
  - Mantener CLAUDE.md bajo 200 líneas
  - Incluir ejemplos concretos en cada skill
  - Usar subagentes para tareas complejas multi-paso
  - Filtrar contexto antes de cada tarea
  - Revisar SIEMPRE el código generado
  - Iterar: primera versión no es la final
  - Documentar arquitectura para el agente
  - Usar skills de la comunidad como base

- **DON'T: No hacer**:
  - No ignores el contexto global
  - No crees skills de 1000 líneas
  - No uses subagentes para tareas simples
  - No confíes ciegamente en el output
  - No cargues todo el proyecto en contexto
  - No copies skills sin entenderlos
  - No dejes el CLAUDE.md desactualizado

- **Checklist rápido**:
  ```
  □ CLAUDE.md existe y está actualizado
  □ CLAUDE.md < 200 líneas
  □ Skills tienen ejemplos
  □ .gitignore excluye node_modules, dist
  □ Reviso código antes de commit
  □ Subagentes solo cuando aporta valor
  ```

## Datos relevantes
- Seguir estas prácticas reduce errores un 60-70%
- El checklist de 6 items cubre el 90% de casos
- Los equipos que documentan para IA rinden un 40% mejor

## Transición
"¿Qué vamos a construir en el taller? Un vistazo rápido..."

## Notas
- Mostrar el checklist en pantalla
- Enfatizar que son 6 reglas, no 50
- Mencionar que la consistencia > la perfección
- Preguntar: "¿Qué práctica os cuesta más seguir?"
