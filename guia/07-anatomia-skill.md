# Anatomía de un Skill

## Tiempo estimado
4 minutos

## Puntos clave
- **Estructura típica de un skill**:
  ```markdown
  # Título del Skill
  
  ## Objetivo
  Qué consigue este skill
  
  ## Contexto
  Información que el agente necesita saber
  
  ## Instrucciones
  Pasos específicos a seguir
  
  ## Herramientas
  Qué herramientas tiene disponibles
  
  ## Restricciones
  Qué NO debe hacer
  
  ## Ejemplos
  Input/output esperados
  ```

- **Tipos de skills**:
  - Skills de framework (React, Next.js, Django)
  - Skills de tarea (testing, documenting, reviewing)
  - Skills de proyecto (arquitectura específica)

- **Niveles de granularidad**:
  - Global: CLAUDE.md en home del usuario
  - Proyecto: CLAUDE.md en raíz del repo
  - Directorio: AGENTS.md en carpeta específica
  - Skill dedicado: archivo .md con nombre descriptivo

- **El skill perfecto**:
  - Lo bastante específico para ser útil
  - Lo bastante general para reutilizarse
  - Incluye ejemplos concretos
  - Define límites claros

## Datos relevantes
- Un skill de 100-300 líneas es el sweet spot
- Skills muy largos se ignoran; muy cortos no aportan valor
- Los ejemplos son la parte más importante del skill

## Transición
"¿Qué skills existen ya? No hace falta reinventar la rueda..."

## Notas
- Mostrar un ejemplo REAL de skill en pantalla
- Enfatizar que los ejemplos > la teoría
- Advertir contra skills de 1000+ líneas
- Mencionar que los skills evolucionan con el proyecto
