# Persona-based Reviewer Agents

## Tiempo estimado
4 minutos

## Puntos clave
- **Patrón emergente 2026** documentado de forma independiente por tres autores en menos de seis meses:
  - **Ryan Lopopolo** (OpenAI) en *Harness Engineering*: cada engineer documenta su rol técnico (front-end architect, reliability, scalability, product). Un reviewer agent por persona se ejecuta en CI bloqueando merges con esa lente.
  - **Garry Tan** (YC) en `gstack`: comoditiza el patrón en 5 reviewer agents preconfigurados (CEO, Eng Manager, Designer, DevEx, CSO). 23 skills opinionadas que cubren un sprint completo.
  - **Dexter Horthy** (HumanLayer) en `12-factor-agents`: factor 10 = small focused agents. Cada reviewer es un micro-agente con instrucciones acotadas (<40 instrucciones para no saturar el context window).
- **Cómo se monta**:
  1. **Persona doc** — cada engineer escribe qué espera de un buen PR según su rol (no más de 1-2 páginas).
  2. **Reviewer agent** — un agent por persona, prompt = persona doc + diff del PR.
  3. **Trigger en CI** — en cada push, todos los reviewers corren en paralelo.
  4. **Verdict** — P2+ bloquean merge, P3 se anotan, P4 pasan.
- **Conexión con esta presentación**:
  - Slide 4 (taxonomía IBM): el reviewer agent es la **cristalización del rol `critic`** aplicada a code review.
  - Slide 13 (patrones reales): muestra Claude Code, Roo/Kilo y Kiro como harnesses; gstack es el **proceso operacional** que se construye encima.
  - Slide 11 (sinergia): subagentes + skills + reviewer agents = pipeline reusable.

## Datos relevantes
- Cita memorable de Lopopolo: *"Una vez que un engineer del equipo escribe lo que es un buen QA plan, todo el equipo se beneficia de la mejor cabeza en cada disciplina sin esperar disponibilidad humana."*
- Por qué es estable: el patrón emerge en tres organizaciones con culturas radicalmente distintas (OpenAI lab, YC startup, HumanLayer SaaS). Cuando convergen sin acuerdo previo, deja de ser moda y pasa a ser pieza estable.
- Implicación: el code review síncrono se desplaza a alineación previa. El humano revisa el código del PR, no anota línea a línea (eso lo hace el reviewer agent).

## Transición
"Pero todos estos patrones tienen errores comunes. Vamos a ver dónde tropezamos..."

## Notas
- Énfasis en la convergencia (3 fuentes) — es lo que diferencia este patrón de "ah, una herramienta más". Genera credibilidad en la audiencia escéptica.
- Si la audiencia es más operacional (consultoría, equipos grandes), profundizar en el flujo de 4 pasos. Si es más estratégica, quedarse en la convergencia y la implicación cultural.
- Mencionar gstack solo como ejemplo de implementación, no como recomendación. La idea es el patrón.
