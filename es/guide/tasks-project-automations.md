# Automatizaciones de proyectos de tareas

Configura reglas para que el tablero Kanban del proyecto reaccione solo a los cambios de las tareas — y empieza más rápido con **plantillas** al crear el proyecto.

> Relacionado: [Changelog v2026.7.19](/es/changelog/2026/07/2026.7.19) · [Mis Tareas](/es/guide/tasks)

## Qué es

Cada **proyecto de tareas** puede tener una lista ordenada de **automatizaciones**. Cuando una tarea se **crea** o se **actualiza**, Interflow evalúa las reglas activas y, si se cumplen las condiciones, aplica las acciones configuradas (mover de columna, cambiar estado, archivar, etc.).

Las acciones de estado y archivado hechas por la automatización registran **historial** y envían **notificaciones** a los miembros del proyecto con notificaciones activas — igual que las acciones manuales.

## Dónde acceder

| Acción | Ruta |
|--------|------|
| Crear proyecto con plantilla | **Tareas** → nuevo proyecto → elegir plantilla |
| Gestionar automatizaciones | Proyecto abierto → menú del proyecto → **Automatizaciones** |
| Definir etapa predeterminada | Editar proyecto → **etapa predeterminada** |

## Plantillas al crear

| Plantilla | Columnas | Automatizaciones |
|-----------|----------|------------------|
| **Libre** | Backlog | Ninguna |
| **Por estado** | Iniciar · En desarrollo · Completadas | Estado ↔ columna (ambos sentidos) |
| **Por prioridad** | Baja · Media · Alta | Prioridad ↔ columna (ambos sentidos) |
| **Sprint simple** | Backlog · En progreso · En revisión · Hecho | Completado ↔ columna Hecho |

Al crear, la **primera columna** de la plantilla se convierte en la **etapa predeterminada** del proyecto (editable después).

## Anatomía de una regla

1. **Evento** — Tarea creada o Tarea actualizada
2. **Condiciones** — qué debe cumplirse (y/o), con opción de comparar valor **antes** y **después** en la actualización
3. **Acciones** — qué debe hacer el sistema
4. **Orden** — las reglas se evalúan de arriba abajo
5. **Activa / inactiva** — desactiva sin borrar

### Campos comunes en condiciones

- Estado, etapa (columna), prioridad
- Archivada / no archivada
- Vencimiento (incluyendo atrasada)

### Acciones comunes

- Definir estado o etapa
- Definir prioridad
- Archivar / desarchivar
- Limpiar fecha de vencimiento
- Crear tarea (seguimiento)
- Iniciar flujo silencioso

## Ejemplos prácticos

### El estado mueve la columna

Cuando el estado pasa a **En progreso** y la tarea aún no está en la columna correspondiente, la automatización mueve la tarjeta a **En desarrollo**.

### Arrastrar la columna actualiza el estado

Cuando la etapa pasa a **Completadas** y el estado aún no es **Completado**, la automatización marca la tarea como completada (con historial y notificación).

### Evitar bucles

Las reglas de las plantillas solo se disparan si el “otro lado” aún no está en el valor objetivo. Iniciar una tarea no vuelve a empujar la columna si la tarjeta ya está en el lugar correcto.

## Etapa predeterminada

Al crear una tarea en el proyecto, la columna preseleccionada es la **etapa predeterminada**. Úsala para que las nuevas tareas caigan en el backlog o en la columna de entrada correcta.

## Consejos

- Empieza por una plantilla y ajusta solo lo específico del equipo
- Prefiere pocas reglas claras a muchas que se solapan
- Prueba con una tarea: cambia el estado y comprueba que la columna acompaña (y al revés)
- Los miembros con notificaciones activas reciben alertas de los cambios de la automatización

## Limitaciones conocidas

- Las acciones masivas (p. ej. archivar varias completadas de una vez) pueden comportarse distinto a las acciones tarjeta a tarjeta
- No todos los tipos de acción avanzados aparecen en la interfaz; el conjunto principal cubre el flujo Kanban del día a día

## Próximos pasos

- [Mis Tareas](/es/guide/tasks)
- [Changelog v2026.7.19](/es/changelog/2026/07/2026.7.19)
