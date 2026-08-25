# Tareas

Organiza el trabajo del equipo en **proyectos** con tablero visual (columnas y tarjetas), lista y calendario — y sigue lo que te corresponde en **Mis Tareas**.

> Relacionado: [Plantillas de tablero](/es/guide/tasks/templates) · [Plantillas de tarea](/es/guide/tasks/task-templates) · [Automatizaciones](/es/guide/tasks/project-automations) · [Changelog v2026.8.11](/es/changelog/2026/08/2026.8.11)

## Visión general

En Interflow, las tareas viven dentro de **proyectos**. Cada proyecto tiene:

- **Etapas** (columnas del tablero) — por ejemplo Iniciar, En desarrollo y Completadas
- **Miembros** con roles (lector, editor o administrador) y opción de notificaciones
- **Etiquetas**, historial y, si quieres, **automatizaciones** que mantienen estado y columna alineados

Usa el menú **Tareas** para abrir el último proyecto, crear nuevos o ir a la vista unificada de tus asignaciones.

::: tip Acceso
Menú principal → **Tareas**. En el móvil, el acceso directo de tareas abre **Mis Tareas**.
:::

## Empezar: crear un proyecto

1. En **Tareas**, haz clic en **Agregar proyecto** (o **Crear primer proyecto**, si aún no hay ninguno)
2. Indica **nombre** y, si quieres, **descripción** — entras automáticamente como **administrador**
3. En el siguiente paso, elige una **plantilla de tablero** y ajusta nombres/colores de las etapas
4. Confirma con **Crear** — el tablero del proyecto se abre listo para usar

La **primera columna** de la plantilla se convierte en la **etapa predeterminada** al crear tareas en ese proyecto (puedes cambiarla después en **Editar proyecto**).

### Plantillas listas

| Plantilla | Columnas | Idea |
|-----------|----------|------|
| **Libre** | Backlog (tú defines cuántas columnas) | Armar el flujo desde cero, sin reglas |
| **Por estado** | Iniciar · En desarrollo · Completadas | Tablero alineado al estado de la tarea |
| **Por prioridad** | Baja · Media · Alta | Organizar por urgencia |
| **Sprint simple** | Backlog · En progreso · En revisión · Hecho | Flujo corto de entrega |

Las plantillas **Por estado**, **Por prioridad** y **Sprint simple** ya traen automatizaciones iniciales. Detalles: [Plantillas](/es/guide/tasks/templates) · [Automatizaciones](/es/guide/tasks/project-automations).

## Tablero, lista y calendario

Con un proyecto abierto, cambia entre:

| Vista | Para qué sirve |
|-------|----------------|
| **Tablero** | Columnas = etapas; tarjetas = tareas; arrastrar y soltar entre columnas |
| **Lista** | Tabla con edición rápida de estado, prioridad y vencimiento; selector **Columnas** (cliente, etapa, etiquetas, checklist) |
| **Calendario** | Tareas por día de vencimiento |

### En el tablero

- **Arrastra** la tarjeta a otra columna para cambiar la etapa
- En cada columna: **Agregar tarea** (ya con esa etapa seleccionada)
- Botón **+** a la derecha: **Agregar etapa** (nombre y color)
- En la tarjeta con estado **Pendiente**: botón **Iniciar** → En progreso
- En la tarjeta **En progreso**: botón **Completar** → marca como completada
- También en la tarjeta: checklist, vencimiento (resaltado si está atrasada), responsables, etiquetas y archivar

::: tip Arrastrar y estado
Con la plantilla **Por estado**, arrastrar a **Completadas** puede marcar la tarea como completada automáticamente — e iniciar/completar con el botón puede mover la tarjeta a la columna correcta. Eso viene de las automatizaciones del proyecto.
:::

### Filtros del proyecto

En la barra del proyecto puedes:

- Buscar por título o descripción
- Filtrar **Asignadas a mí**, **Vencidas** o **Mostrar archivadas**
- Filtrar por **Prioridad** y **Estado**
- Abrir **Más filtros** para combinaciones avanzadas
- **Archivar completadas** en lote (con confirmación)

## Crear y editar una tarea

1. Haz clic en **Agregar tarea** (o en el **+** de la columna). Si el proyecto tiene plantillas, usa la flecha para elegir un [molde](/es/guide/tasks/task-templates)
2. Completa título, descripción, etapa, prioridad, vencimiento, responsables, etiquetas y, si corresponde, el **cliente**
3. Guarda — se usa la etapa predeterminada del proyecto si no eliges otra

Al editar, las pestañas incluyen **Detalles**, **Subtareas**, **Comentarios**, **Adjuntos** e **Historial**. Si la tarea vino de una atención, hay acceso a **Ver atención**.

### Campos principales

| Campo | Opciones / uso |
|-------|----------------|
| **Estado** | Pendiente · En progreso · Completada · Cancelada |
| **Prioridad** | Baja · Media · Alta |
| **Etapa** | Columna del tablero del proyecto |
| **Responsables** | Miembros del proyecto |
| **Vencimiento** | Fecha y hora; se resalta cuando está atrasada |
| **Cliente** | Vincula la tarea al registro del cliente |
| **Etiquetas** | Organización extra; pueden traer checklist predeterminado |
| **Checklist** | Ítems con progreso en la tarjeta |

## Miembros y permisos del proyecto

En **Gestionar miembros** (menú del proyecto):

| Rol | Puede |
|-----|-------|
| **Lector** | Ver el proyecto y las tareas, sin editar |
| **Editor** | Crear y editar tareas y etapas |
| **Administrador** | Todo lo anterior + miembros, automatizaciones y eliminar el proyecto |

Cada miembro puede tener **notificaciones activadas o desactivadas**. Con notificaciones activas, recibe avisos de creación, actualización y cambios relevantes (incluidos los de la automatización, como iniciar o completar).

## Menú del proyecto

En el icono de configuración del proyecto:

- **Editar proyecto** — nombre, descripción y **etapa predeterminada al crear tarea**
- **Gestionar miembros**
- **Automatizaciones** — reglas del tablero ([guía](/es/guide/tasks/project-automations)); plantillas al crear el proyecto: [Plantillas de tablero](/es/guide/tasks/templates)
- **Gestionar etiquetas**
- **Plantillas** — moldes reutilizables de tarea ([guía](/es/guide/tasks/task-templates))
- **Ver historial del proyecto**
- **Eliminar proyecto**

## Mis Tareas

**Todas mis tareas** reúne lo asignado a ti en todos los proyectos, sin cambiar de proyecto.

::: tip Acceso
En el proyecto: barra superior → **Todas mis tareas**. Usa **Ver por proyecto** para volver al tablero.
:::

### Vistas

- **Lista** — título, proyecto de origen, estado, prioridad, vencimiento y responsable
- **Calendario** — por vencimiento

### Agrupamientos (lista)

| Agrupamiento | Descripción |
|--------------|-------------|
| **Etapa** | Flujo de columnas (predeterminado) |
| **Proyecto** | Por proyecto de origen |
| **Fecha de vencimiento** | Vencidas, Ayer, Hoy, Mañana, Esta semana, Próxima semana, Futuras, Sin fecha |
| **Responsable** | Por miembro |
| **Estado** | Pendiente, En progreso, Completado, Cancelado |
| **Prioridad** | Alta, Media, Baja |

La elección de agrupamiento se guarda por organización.

### Ordenación

Predeterminado (prioridad + vencimiento), vencimiento más cercano o lejano, prioridad, título, fecha de creación o estado.

### Edición rápida en la lista

Haz clic en el **estado**, la **prioridad** o el **vencimiento** de la fila para cambiar sin abrir la tarea. En vencimiento hay atajos: **Hoy**, **Mañana**, **En 1 semana**, fecha libre o quitar.

Los cambios de estado (iniciar, completar, cancelar) generan historial y notifican a los miembros del proyecto, como en el tablero.

### Filtros en Mis Tareas

Búsqueda por título, **Vencidas**, **Archivadas**, prioridad y estado.

## Tareas desde la atención

Puedes crear una tarea **sin salir de la conversación del cliente**, con o sin ayuda de la IA. El **cliente** de la atención ya viene sugerido en la tarea.

### Desde toda la conversación

1. En la atención, en el campo de mensaje, haz clic en el icono de lista (**Crear tarea relacionada con este chat**)
2. Se abre el formulario de nueva tarea ya vinculado a esa atención
3. Haz clic en **Generar con IA** para que la IA arme título, descripción, prioridad y subtareas a partir de los mensajes de la conversación
4. (Opcional) En **Contexto adicional para IA**, escribe un comando o enfoque — por ejemplo “priorizar urgencia” o “enfocarse en el presupuesto”
5. Revisa los campos, completa responsables y plazo, y guarda

### Desde mensajes seleccionados

1. En el menú de la atención, elige **Seleccionar mensajes** (o inicia la selección desde el menú de un mensaje)
2. Marca los mensajes deseados — o usa **Seleccionar todas**
3. En la barra de selección, haz clic en **Crear tarea**
4. Se abre **Contexto adicional para IA** (opcional); confirma para que la IA genere el contenido **solo con los mensajes elegidos**
5. Revisa, completa el resto de campos y guarda

Los mensajes usados quedan ligados a la tarea como contexto. En la tarea, usa **Ver atención** para volver al chat.

::: tip Cuándo usar cada opción
- **Conversación / Generar con IA** — resumen general de la atención
- **Mensajes seleccionados** — solo el tramo relevante (pedido, reclamo, acuerdo)
- **Seleccionar todas** — equivalente a considerar el conjunto de mensajes cargados en la conversación
:::

También puedes ver tareas en la ficha del **cliente** y crear tareas con flujos de automatización.

## Rendimiento

Con el acceso **Rendimiento** / **Performance** en Tareas, el equipo sigue indicadores de productividad por persona y período (según el permiso de la organización).

## Historial y notificaciones

- **Historial de la tarea** — pestaña al editar (creación, cambios de estado, etapa, responsables, etc.)
- **Historial del proyecto** — en el menú del proyecto
- **Notificaciones** — por miembro; avisos en tiempo real cuando cambia algo relevante

## Consejos de uso

- Usa la plantilla **Por estado** cuando el equipo piense en “iniciar → en desarrollo → completadas”
- Define bien la **etapa predeterminada** para que las nuevas tareas caigan en la columna correcta
- Prefiere pocas automatizaciones claras a muchas reglas que se solapan
- Activa notificaciones solo para quien necesita seguir el proyecto día a día
- En Mis Tareas, agrupa por **vencimiento** al empezar el día y por **proyecto** al priorizar un equipo

## Próximos pasos

- [Plantillas de tablero](/es/guide/tasks/templates)
- [Plantillas de tarea](/es/guide/tasks/task-templates)
- [Automatizaciones de proyectos](/es/guide/tasks/project-automations)
- [Interfaz de chat](/es/guide/chat/interface) — crear tarea desde la atención
- [Dashboard](/es/guide/dashboard) — widget de tareas
- [Clientes](/es/guide/crm/customers) — tareas en la ficha del cliente
