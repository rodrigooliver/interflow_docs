# Macros de cliente

Botones de automatización en el perfil del cliente: un clic ejecuta varias acciones (cambiar tipo, completar campos, asignar responsables, crear tarea o iniciar flujo).

> Changelog: [v2026.8.4](/es/changelog/2026/08/2026.8.4)

## ¿Qué es?

Una **macro** es un botón configurable en **editar cliente**. Defines:

- **Apariencia** — nombre interno, texto y color del botón
- **Cuándo mostrar** — condiciones (tipo, embudo, etapa, etiqueta o campo)
- **Preguntar al hacer clic** — wizard con campos a completar antes de ejecutar
- **Acciones** — qué ocurre después

## Dónde acceder

| Área | Ruta |
|------|------|
| **Configurar** | Menú → **Macros de Cliente** |
| **Usar** | Editar cliente → pestaña **General** (arriba) y menú de acciones (⋮) del encabezado |

## Crear una macro

1. Abre **Macros de Cliente** y haz clic en **Nueva macro**
2. Define nombre interno, texto del botón y color
3. En **Cuándo mostrar**, déjalo vacío para todos o añade condiciones (todas / cualquiera)
4. En **Preguntar al hacer clic**, añade campos que el operador debe informar (solo si está vacío, o siempre)
5. En **Acciones**, elige qué ejecutar
6. Guarda y activa la macro

### Acciones disponibles

| Acción | Qué hace |
|--------|----------|
| Cambiar tipo de cliente | Lead o cliente (cerrado) |
| Completar campo (valor fijo) | Campo estándar o personalizado |
| Definir vendedor / soporte / indicación | Usuario actual, miembro elegido o limpiar |
| Crear tarea | Proyecto, título, plazo, responsables |
| Iniciar flujo silencioso | Flujo de la organización (con o sin chat) |

### Preguntar al hacer clic

El wizard usa las mismas etiquetas y placeholders del formulario. Si el campo ya tiene valor, viene rellenado.

## Usar en el cliente

1. Abre el cliente
2. En la pestaña **General**, los botones visibles aparecen arriba; el mismo conjunto está en el menú **⋮**
3. Haz clic en la macro
4. Si hay preguntas, completa y ejecuta

Solo entran macros **activas** cuyas condiciones coinciden con el cliente actual.

## Tipo de cliente

El perfil tiene **Lead (venta)** o **Cliente (cerrado)**. Úsalo en el filtro de la lista y en condiciones/acciones de las macros.

## Próximos pasos

- [Gestión de Clientes](/es/guide/crm/customers)
- [Embudos de venta](/es/guide/crm/funnels)
