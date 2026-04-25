# Sinergia Subagente + Skills

## Tiempo estimado
4 minutos

## Puntos clave
- **El flujo completo**:
  1. Usuario da instrucción general
  2. Agente principal analiza y descompone
  3. Agente principal carga skills relevantes
  4. Agente principal dispatcha a subagentes
  5. Cada subagente carga SU skill específico
  6. Subagentes ejecutan en paralelo/secuencial
  7. Resultados se agregan y presentan

- **Diagrama de flujo**:
  ```
  Usuario → Agente Principal
              ├── Carga CLAUDE.md
              ├── Detecta skills necesarios
              └── Dispatcha:
                  ├── Subagente Testing → skill: playwright.md
                  ├── Subagente Docs → skill: documentation.md
                  └── Subagente Review → skill: code-review.md
  ```

- **Ejemplo concreto**:
  - Input: "Añade autenticación JWT al proyecto"
  - Agente principal:
    1. Lee CLAUDE.md (arquitectura)
    2. Detecta: necesita skill de auth + skill de testing
    3. Crea subagentes:
       - Auth agent: implementa JWT (con skill auth.md)
       - Test agent: genera tests (con skill playwright.md)
       - Doc agent: documenta API (con skill docs.md)

- **Beneficios de la sinergia**:
  - Cada subagente tiene contexto PERFECTO
  - Skills eliminan ambigüedad
  - Resultados predecibles y consistentes

## Datos relevantes
- La combinación subagente+skill mejora resultados un 70-80%
- Sin skills, los subagentes alucinan arquitectura
- Sin subagentes, los skills se vuelven prompts largos

## Transición
"Pero hay un problema: el contexto. ¿Cómo lo gestionamos sin explotar?"

## Notas
- Dibujar el diagrama de flujo en la pizarra
- Usar analogía de una cocina con recetas (skills) y especialistas (subagentes)
- Enfatizar que el skill es lo que hace al subagente PREDICTIBLE
- Advertir: sin gestión de contexto, todo esto falla
