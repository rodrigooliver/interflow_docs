# Automatizaciones de proyectos de tareas

Configura reglas para que el tablero del proyecto reaccione solo a los cambios de las tareas.

> Relacionado: [Visión general](/es/guide/tasks/) · [Plantillas de tablero](/es/guide/tasks/templates) · [Plantillas de tarea](/es/guide/tasks/task-templates) · [Changelog v2026.8.11](/es/changelog/2026/08/2026.8.11)

## Qué es

Cada **proyecto de tareas** puede tener una lista ordenada de **automatizaciones**. Cuando una tarea se **crea** o se **actualiza**, Interflow evalúa las reglas activas y, si se cumplen las condiciones, aplica las acciones (mover de columna, cambiar estado, archivar, crear seguimiento, etc.).

Las acciones de estado y archivado hechas por la automatización registran **historial** y envían **notificaciones** a los miembros del proyecto con notificaciones activas — igual que iniciar, completar o cancelar de forma manual.

::: tip Plantillas
Algunas [plantillas](/es/guide/tasks/templates) ya crean reglas listas (por estado, prioridad o sprint). Puedes editarlas o crear nuevas en cualquier momento.
:::

## Dónde acceder

| Acción | Ruta |
|--------|------|
| Gestionar automatizaciones | Proyecto abierto → menú del proyecto → **Automatizaciones** |
| Definir etapa predeterminada | Menú del proyecto → **Editar proyecto** → etapa predeterminada |

## Anatomía de una regla

En el modal **Automatizaciones del proyecto**:

1. **Evento** — **Tarea registrada** o **Tarea actualizada**
2. **Condiciones** — qué debe cumplirse (**Y** / **O**), con opción de comparar valor **antes** y **después** en la actualización
3. **Acciones** — qué debe hacer el sistema
4. **Orden** — las reglas se evalúan de arriba abajo
5. **Activa / inactiva** — desactiva sin borrar

### Campos en condiciones

- Estado, etapa (columna), prioridad, [plantilla](/es/guide/tasks/task-templates)
- Archivada / no archivada
- Vencimiento (incluyendo “está atrasada”)

### Acciones disponibles

- Definir estado · Mover etapa · Definir prioridad
- Archivar · Desarchivar · Limpiar vencimiento
- **Crear tarea** (seguimiento) — [plantilla de tarea](/es/guide/tasks/task-templates) opcional, título con variables (título, descripción, nombre del cliente, estado, prioridad), cliente (mismo / ninguno), vencimiento en X días
- **Iniciar flujo silencioso** — flujos del tipo automatización de tareas

## Ejemplos prácticos

### El estado mueve la columna

Cuando el estado pasa a **En progreso** y la tarea aún no está en la columna correspondiente, la automatización mueve la tarjeta a **En desarrollo**.

### Arrastrar la columna actualiza el estado

Cuando la etapa pasa a **Completadas** y el estado aún no es **Completada**, la automatización marca la tarea como completada (con historial y notificación).

### Evitar bucles

Las reglas de las plantillas solo se disparan si el “otro lado” aún no está en el valor objetivo. Iniciar una tarea no vuelve a empujar la columna si la tarjeta ya está en el lugar correcto.

## Consejos

- Empieza por una [plantilla](/es/guide/tasks/templates) y ajusta solo lo específico del equipo
- Prefiere pocas reglas claras a muchas que se solapan
- Prueba con una tarea: cambia el estado y comprueba que la columna acompaña (y al revés)
- Los miembros con notificaciones activas reciben alertas de los cambios de la automatización

## Limitaciones conocidas

- Las acciones masivas (p. ej. archivar varias completadas de una vez) pueden comportarse distinto a las acciones tarjeta a tarjeta
- El conjunto de acciones en pantalla cubre el flujo diario del tablero; algunas opciones avanzadas pueden no aparecer en el selector

## Próximos pasos

- [Plantillas de tablero](/es/guide/tasks/templates)
- [Plantillas de tarea](/es/guide/tasks/task-templates)
- [Visión general de Tareas](/es/guide/tasks/)
- [Changelog v2026.8.11](/es/changelog/2026/08/2026.8.11)
