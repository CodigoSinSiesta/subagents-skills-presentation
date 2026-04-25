# Skills en la Práctica

## Tiempo estimado
4 minutos

## Puntos clave
- **CLAUDE.md (Claude Code)**:
  - Archivo en la raíz del proyecto
  - Se carga automáticamente al iniciar
  - Contiene: stack, arquitectura, convenciones
  - Es el "contexto persistente" del proyecto

- **AGENTS.md (OpenCode)**:
  - Jerarquía de archivos por directorio
  - Más específico que CLAUDE.md
  - Puede haber uno por carpeta: /src/AGENTS.md, /tests/AGENTS.md
  - Se combina con CLAUDE.md global

- **Directorio .claude/skills/ (Claude Code)**:
  - Skills modulares y reutilizables
  - Cada skill es un archivo .md
  - Se cargan bajo demanda
  - Ejemplo: `.claude/skills/react-19.md`

- **Patrón recomendado**:
  1. CLAUDE.md: arquitectura general + stack
  2. AGENTS.md por dominio: reglas específicas
  3. Skills dedicados: frameworks y herramientas

- **Ejemplo de estructura**:
  ```
  proyecto/
  ├── CLAUDE.md           # Arquitectura + stack
  ├── src/
  │   ├── AGENTS.md       # Reglas de frontend
  │   └── components/
  │       └── AGENTS.md   # Reglas de componentes
  ├── tests/
  │   └── AGENTS.md       # Reglas de testing
  └── .claude/
      └── skills/
          ├── react-19.md
          └── tailwind-4.md
  ```

## Datos relevantes
- CLAUDE.md se carga en CADA interacción, mantenerlo conciso
- AGENTS.md jerárquico permite contexto progresivo
- Los skills dedicados se cargan solo cuando se necesitan

## Transición
"Ya tenemos subagentes y skills. ¿Cómo se potencian mutuamente?"

## Notas
- Mostrar ejemplo REAL de CLAUDE.md en pantalla
- Enfatizar que CLAUDE.md es el archivo MÁS importante del proyecto
- Advertir contra CLAUDE.md de 500+ líneas
- Mencionar que la estructura evoluciona con el proyecto
