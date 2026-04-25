# Roles dentro de un Agente (IBM)

## Tiempo estimado
4 minutos

## Puntos clave
- **Origen**: IBM Technology, abril 2026 — vídeo "Building a Team of AI Agents: Roles, Feedback, & Teamwork Explained".
- **Tesis**: un agente complejo se diseña como un **equipo humano**. 7 roles canónicos cubren la mayoría de casos.
- **Los 7 roles**:
  - **Doer** (junior worker): ejecuta pasos individuales, sin visión global.
  - **Planner** (tech lead): descompone el objetivo en pasos. SOLO planifica, no ejecuta.
  - **Tool operator** (especialista de herramienta): construye llamadas con argumentos correctos.
  - **Learner** (el que se mantiene al día): RAG, scraping, búsqueda. Trae info externa relevante.
  - **Critic** (feedback directo): revisa outputs en busca de alucinaciones, ejecuta tests.
  - **Supervisor** (project manager): vigila atascos a nivel tarea o proyecto.
  - **Presenter** (quien presenta el trabajo del grupo): comunica el resultado al usuario final.
- **Las 4 palancas para hacer bueno a un rol** (de menor a mayor coste):
  1. **Prompting** — barato, primera línea.
  2. **Model selection** — medio: tamaño, razonamiento sí/no, persona.
  3. **Model tuning** — caro: requiere dataset y compute. Reserva para dolores reproducibles.
  4. **Context** — medio: onboarding del rol, qué ficheros y APIs ve. Tan importante elegir qué NO darle.
- **Mapeo a ReAct**: action = tool operator, reasoning = planner, observe = critic, answer = presenter. ReAct cubre 4 de 7 roles, por eso se queda corto a escala.

## Datos relevantes
- Heurística para auditar tu agente:
  - Outputs incoherentes → te falta `critic`.
  - Pierde el hilo entre pasos → te falta `supervisor`.
  - Fabrica datos → te falta `learner`.
  - Resultado no se entiende → te falta `presenter`.
- Conexión con el resto de la presentación: este vocabulario se reusa en Slide 11 (sinergia subagente+skills) y Slide 14 (persona-based reviewers).

## Transición
"Y si tenemos 7 roles canónicos, ¿cómo los conectamos? Vamos a ver los patrones de orquestación..."

## Notas
- No leer los 7 roles uno por uno — que la audiencia los escanee. Detenerse en `critic` y `supervisor` que son los que más fallan en agentes reales.
- La heurística "outputs incoherentes → falta critic" suele encajar con experiencias previas de la audiencia. Provoca asentimientos.
- Si la audiencia es senior, profundizar en las 4 palancas. Si es junior, quedarse en los 7 roles.
- Conectar con el slide siguiente: cuando tienes los roles, los patrones de orquestación deciden CÓMO se hablan entre ellos.
