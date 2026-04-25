# Errores Comunes

## Tiempo estimado
3 minutos

## Puntos clave
- **Error 1: El CLAUDE.md infinito**
  - Síntoma: archivo de 1000+ líneas
  - Resultado: el agente ignora la mitad
  - Solución: dividir en skills específicos

- **Error 2: Subagentes para todo**
  - Síntoma: 10 subagentes para "añadir un botón"
  - Resultado: overhead innecesario, tokens desperdiciados
  - Solución: usar subagentes solo para tareas que lo merecen

- **Error 3: Skills sin ejemplos**
  - Síntoma: skill teórico sin código real
  - Resultado: el agente no entiende QUÉ esperar
  - Solución: incluir 2-3 ejemplos concretos

- **Error 4: Ignorar el contexto global**
  - Síntoma: cada sesión empieza de cero
  - Resultado: inconsistencia entre sesiones
  - Solución: CLAUDE.md persistente + bien mantenido

- **Error 5: No filtrar archivos**
  - Síntoma: el agente lee node_modules o dist
  - Resultado: contexto contaminado, tokens desperdiciados
  - Solución: .gitignore + exclude patterns

- **Error bonus: Confianza ciega**
  - Síntoma: commit sin revisar el código generado
  - Resultado: bugs en producción
  - Solución: SIEMPRE revisar antes de confiar

## Datos relevantes
- El 70% de problemas con agentes vienen de estos 5 errores
- El CLAUDE.md infinito es el error #1 más común
- La confianza ciega causa el 80% de los bugs introducidos por IA

## Transición
"Vale, ya sabemos qué NO hacer. ¿Qué sí deberíamos hacer?"

## Notas
- Usar ejemplos reales de cada error
- Preguntar: "¿Cuántos habéis cometido alguno de estos?"
- Enfatizar que los errores son NORMALES, lo importante es aprender
- Mostrar el "error bonus" como el más peligroso
