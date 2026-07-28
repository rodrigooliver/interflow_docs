# Plantillas de proyectos de tareas

Al crear un proyecto en **Tareas**, elige una **plantilla de tablero** con columnas listas — y, cuando corresponde, con reglas de automatización ya configuradas.

> Relacionado: [Visión general](/es/guide/tasks/) · [Automatizaciones](/es/guide/tasks/project-automations) · [Changelog v2026.7.19](/es/changelog/2026/07/2026.7.19)

## Para qué sirve

- Empezar un tablero alineado a la forma de trabajar del equipo
- Evitar armar columnas (y reglas) desde cero en cada proyecto nuevo
- Mantener estado o prioridad coherentes con la columna cuando la plantilla trae automatizaciones

## Cómo usar

1. En **Tareas**, haz clic en **Agregar proyecto** (o **Crear primer proyecto**)
2. Indica nombre y descripción → **Continuar**
3. En **Configurar etapas**, elige la **plantilla de tablero**
4. Ajusta nombres y colores de las columnas si hace falta → **Crear**

La **primera columna** de la plantilla se convierte en la **etapa predeterminada** del proyecto (editable después en **Editar proyecto**).

## Plantillas disponibles

| Plantilla | Columnas | Automatizaciones iniciales |
|-----------|----------|----------------------------|
| **Libre** | Backlog (tú defines cuántas columnas, de 1 a 10) | Ninguna — armas el flujo desde cero |
| **Por estado** | Iniciar · En desarrollo · Completadas | Sincroniza estado ↔ columna (ambos sentidos) |
| **Por prioridad** | Baja · Media · Alta | Sincroniza prioridad ↔ columna (ambos sentidos) |
| **Sprint simple** | Backlog · En progreso · En revisión · Hecho | Sincroniza “Completada” ↔ columna Hecho |

### Libre

Ideal cuando el equipo tiene un flujo propio. Solo **Backlog** viene lista; agregas el resto al crear o después en el tablero (**Agregar etapa**).

### Por estado

Mejor cuando el equipo piensa en **iniciar → en desarrollo → completadas**. Al **Iniciar** o **Completar** en la tarjeta, la columna puede acompañar — y al arrastrar a una columna, el estado puede actualizarse. Detalles de las reglas: [Automatizaciones](/es/guide/tasks/project-automations).

### Por prioridad

Organiza el tablero por urgencia. Mover la tarjeta entre **Baja**, **Media** y **Alta** puede ajustar la prioridad de la tarea (y al revés).

### Sprint simple

Flujo corto de entrega, con columnas de backlog, progreso, revisión y hecho. La automatización inicial vincula el estado **Completada** a la columna **Hecho**.

## Etapa predeterminada

Después de crear el proyecto, en **Editar proyecto** defines la **etapa predeterminada al crear tarea**. Ese valor se preselecciona en el formulario de nueva tarea (y al crear desde una columna, esa columna ya viene elegida).

## Después de crear

- Renombra o cambia el color de las etapas en el tablero
- Agrega o quita columnas (según tu rol en el proyecto)
- Revisa o desactiva las automatizaciones de la plantilla en **Automatizaciones**
- Cambiar de “mentalidad” de plantilla después es manual: ajusta columnas y reglas según el equipo

## Consejos

- Si la duda es “¿cómo trabajamos el estado?”, empieza por **Por estado**
- Si el tablero es solo organización visual sin sync, usa **Libre**
- Prefiere ajustar la plantilla después de crear a cambiar todo día a día sin estándar

## Próximos pasos

- [Automatizaciones de proyectos](/es/guide/tasks/project-automations)
- [Visión general de Tareas](/es/guide/tasks/)
