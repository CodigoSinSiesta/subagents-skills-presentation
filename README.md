# Subagentes y Skills - Presentación

Presentación sobre **subagentes de IA, skills y orquestación** — cómo organizar agentes especializados, crear skills reutilizables y coordinar flujos de trabajo complejos.

**Presentado por**: Alejandro de la Fuente  
**Duración**: 45-60 minutos  
**Live**: https://codigosinsiesta.github.io/subagents-skills-presentation/

---

## 📋 Tabla de Contenidos

- [Visión General](#visión-general)
- [Contenido de la Presentación](#contenido-de-la-presentación)
- [Inicio Rápido](#inicio-rápido)
- [Stack Tecnológico](#stack-tecnológico)
- [Notas del Ponente](#notas-del-ponente)
- [Licencia](#licencia)

---

## 🎯 Visión General

Esta presentación explora el mundo de los **subagentes de IA y skills**:

- **Subagentes**: Agentes especializados para tareas específicas
- **Skills**: Conjuntos de instrucciones y conocimientos reutilizables
- **Orquestación**: Patrones para coordinar múltiples agentes
- **Gestión de contexto**: Estrategias para mantener coherencia
- **Buenas prácticas**: Cómo evitar errores comunes

---

## 📑 Contenido de la Presentación

### Estructura (16 Slides)

| # | Slide | Descripción |
|---|-------|-------------|
| 1 | **Inicio (Hero)** | Portada y título de la presentación |
| 2 | **El Problema** | Limitaciones de un solo agente genérico |
| 3 | **Qué es un Subagente** | Definición y concepto de especialización |
| 4 | **Patrones de Orquestación** | Cómo coordinar múltiples subagentes |
| 5 | **Beneficios** | Ventajas del enfoque multi-agente |
| 6 | **Concepto de Skills** | Qué son y para qué sirven las skills |
| 7 | **Anatomía de un Skill** | Estructura y componentes de un skill |
| 8 | **Skills de Referencia** | Ejemplos de skills bien diseñadas |
| 9 | **Skills en Práctica** | Aplicación real de skills |
| 10 | **Sinergia Subagente+Skills** | Combinación poderosa de ambos conceptos |
| 11 | **Gestión de Contexto** | Estrategias para manejar información |
| 12 | **Patrones Reales** | Ejemplos de implementaciones exitosas |
| 13 | **Errores Comunes** | Trampas típicas a evitar |
| 14 | **Buenas Prácticas** | Recomendaciones para éxito |
| 15 | **Preview del Taller** | Vista previa del taller práctico |
| 16 | **Cierre** | Resumen y próximos pasos |

---

## 🚀 Inicio Rápido

### Prerrequisitos
- **Node.js** 20.x o superior
- **pnpm** 9.x

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CodigoSinSiesta/subagents-skills-presentation.git
cd subagents-skills-presentation

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

La presentación estará disponible en **http://localhost:4323**

### Build para Producción

```bash
pnpm build    # Build para producción
pnpm preview  # Preview del build localmente
```

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| [Astro](https://astro.build) | 4.16 | Framework de presentación |
| [Svelte](https://svelte.dev) | 5 | Componentes reactivos |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Sistema de diseño |
| [GSAP](https://greensock.com/gsap/) | 3 | Animaciones |
| pnpm | 9 | Gestor de paquetes |

---

## 📝 Notas del Ponente

Las notas detalladas para cada slide se encuentran en el directorio `guia/`:

```
guia/
├── slide-01-inicio.md
├── slide-02-problema.md
├── slide-03-que-es-subagente.md
├── ...
└── slide-16-cierre.md
```

Cada archivo incluye:
- Puntos clave a cubrir
- Tiempo estimado
- Ejemplos adicionales
- Posibles preguntas del público

---

## 🔗 Enlaces Rápidos

- **Presentación Live**: https://codigosinsiesta.github.io/subagents-skills-presentation/
- **Repositorio**: https://github.com/CodigoSinSiesta/subagents-skills-presentation

---

## 📝 Licencia

Este proyecto es open source. Consulta el archivo LICENSE para más detalles.

---

**Hecho con ❤️ por Código Sin Siesta**
