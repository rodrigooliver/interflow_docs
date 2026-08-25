# Plantillas de tarea

Moldes reutilizables **por proyecto**. Al crear una tarea desde una plantilla, el formulario ya viene completado — revisas y guardas.

> Relacionado: [Visión general](/es/guide/tasks/) · [Automatizaciones](/es/guide/tasks/project-automations) · [Changelog v2026.8.11](/es/changelog/2026/08/2026.8.11)

::: tip No confundir
Las [plantillas de tablero](/es/guide/tasks/templates) definen **columnas** al crear el proyecto. Las **plantillas de tarea** definen el **contenido** de una tarea que se repite.
:::

## Para qué sirve

- Estandarizar onboarding, seguimiento, posventa o cualquier rutina que siempre pide los mismos campos
- Evitar escribir de nuevo título, checklist y responsables
- Calcular el vencimiento en **días desde la creación** (no una fecha fija en el calendario)

## Dónde acceder

| Acción | Camino |
|--------|--------|
| Gestionar plantillas | Proyecto abierto → menú del proyecto → **Plantillas** |
| Crear tarea desde una plantilla | Botón **Agregar tarea** → flecha → elige el molde |
| Tarea sin molde | **Agregar tarea** (o **Tarea en blanco** en el menú) |

La flecha junto a **Agregar tarea** solo aparece cuando el proyecto ya tiene al menos una plantilla.

## Crear o editar una plantilla

1. Abre el proyecto en **Tareas**
2. Menú del proyecto → **Plantillas**
3. Haz clic en **Nueva plantilla** (o en el lápiz para editar)
4. Completa el molde y guarda

Para eliminar, usa la papelera en la lista y confirma.

### Qué guarda el molde

| Campo | Comportamiento |
|-------|----------------|
| **Título** | Obligatorio; se convierte en el título de la nueva tarea |
| **Descripción** | Texto inicial |
| **Vencimiento en días** | 0 = hoy; 1, 2, 7 u otro número. Vacío = sin vencimiento |
| **Hora** | Opcional. Si hay días y no hay hora, usa la hora del momento de creación |
| **Etapa** | Columna del tablero, o la etapa predeterminada del proyecto |
| **Prioridad** y **Estado** | Valores iniciales de la tarea |
| **Responsables** | Miembros del proyecto |
| **Etiquetas** | Etiquetas de la organización |
| **Checklist** | Los ítems empiezan desmarcados en la tarea nueva |

Atajos de plazo: **Hoy**, **1 día**, **2 días**, **7 días** o **Sin vencimiento**.

## Usar al crear una tarea

1. En el proyecto, haz clic en la flecha junto a **Agregar tarea**
2. Elige la plantilla — el formulario se abre ya completado
3. Ajusta lo específico de esa ocurrencia (cliente, fecha, texto)
4. Guarda

El plazo absoluto se calcula **al crear la tarea**. Una plantilla con “3 días” creada el lunes vence el jueves; si la creas el viernes, vence el lunes siguiente.

## Automatizaciones y macros

La misma plantilla sirve en otros puntos del producto:

| Dónde | Cómo |
|-------|------|
| [Automatizaciones del proyecto](/es/guide/tasks/project-automations) | En la acción **Crear tarea**, selecciona la plantilla. El título sigue aceptando variables (título, descripción, nombre del cliente, estado, prioridad). También puedes usar la plantilla como **condición**. |
| [Macros de cliente](/es/guide/crm/customer-macros) | En la acción **Crear tarea**, elige el proyecto y la plantilla de ese proyecto. |

::: tip Variables en la automatización
Aunque uses plantilla, puedes armar el título con tokens (por ejemplo el nombre del cliente). Haz clic en los chips de variables para copiar.
:::

## Limitaciones conocidas

- Las plantillas pertenecen a **un proyecto**. No hay molde compartido entre proyectos
- El vencimiento es **relativo** (días desde la creación), no una fecha fija
- La flecha de elección solo aparece después de que exista al menos una plantilla en el proyecto

## Próximos pasos

- [Visión general de Tareas](/es/guide/tasks/)
- [Plantillas de tablero](/es/guide/tasks/templates)
- [Automatizaciones de proyectos](/es/guide/tasks/project-automations)
- [Macros de cliente](/es/guide/crm/customer-macros)
- [Changelog v2026.8.11](/es/changelog/2026/08/2026.8.11)
