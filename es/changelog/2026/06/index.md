# Junio 2026

Actualizaciones del mes de junio de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.6.4](/es/changelog/2026/06/2026.6.4) | 23/06 | **Chats Internos mejorados** — vista previa del último mensaje, badge de no leídos unificado, fuente única de datos con Realtime, acceso a atenciones, correcciones mobile y tipo de mensaje |
| [2026.6.3](/es/changelog/2026/06/2026.6.3) | 09/06 | **Página "Mis Tareas"** — todas tus tareas en un solo lugar, independientemente del proyecto; agrupación y ordenación en la vista de lista; edición rápida de estado, prioridad y vencimiento directamente en la lista |
| [2026.6.2](/es/changelog/2026/06/2026.6.2) | 09/06 | **Eliminación automática de clientes por límite de uso** — configurable en Límites, con botón "Ejecutar ahora" y progreso en tiempo real; los clientes con pedidos POS ahora pueden ser eliminados |
| [2026.6.1](/es/changelog/2026/06/2026.6.1) | 08/06 | **Botones de plantilla WhatsApp Official ahora guardados en el historial** — botones de respuesta rápida, URL y teléfono mostrados correctamente en el chat tras envío manual o masivo |

---

## Resumen del Mes

### ✨ Nuevas Funcionalidades (9)
- **Vista previa del último mensaje en Chats Internos** (v2026.6.4) — el listado muestra contenido, medios o remitente del último mensaje
- **Badge de no leídos unificado** (v2026.6.4) — contador sincronizado en tiempo real en navbar mobile, encabezado de atenciones y menú compacto
- **Acceso directo a Atenciones** (v2026.6.4) — botón en el listado de Chats Internos para ir a `/app/chats`
- **Página "Mis Tareas"** (v2026.6.3) — todas las tareas asignadas a ti en todos los proyectos, con vistas de lista y calendario, nombre del proyecto en cada tarea, filtros y botón de actualizar
- **Agrupación en la vista de lista** (v2026.6.3) — por etapa, proyecto, fecha de vencimiento (Vencidas, Ayer, Hoy, Mañana, Esta semana, Próxima semana, Futuras, Sin fecha), responsable, estado o prioridad
- **Ordenación en la vista de lista** (v2026.6.3) — predeterminado, vencimiento, prioridad, título, fecha de creación o estado, aplicada dentro de cada grupo
- **Edición rápida en la lista** (v2026.6.3) — cambio de estado, prioridad y vencimiento directamente en la fila de la tarea, con notificaciones e historial preservados
- **Eliminación automática de clientes por límite de uso** (v2026.6.2) — eliminación configurable en Configuración > Límites (disparador %, meta %, orden por último contacto o registro, conversaciones vinculadas, hora de ejecución), procesada por la cola de eliminación existente
- **Botón "Ejecutar ahora" en las limpiezas automáticas** (v2026.6.2) — dispara la limpieza de Clientes o Almacenamiento inmediatamente, con estado "En curso..." que bloquea disparos duplicados

### 🔄 Cambios (4)
- **Fuente única de datos para Chats Internos** (v2026.6.4) — lista global con Realtime, sin fetch/suscripción duplicados en la página
- **Teclado en el campo de mensaje** (v2026.6.4) — Enter envía; Cmd/Ctrl+Enter inserta salto de línea
- **Mejoras visuales en la lista de tareas** (v2026.6.3) — encabezado "Vencimiento" sin salto de línea, estado y fechas sin saltos, fecha vencida solo en rojo, controles de agrupación/ordenación en barra propia
- **Los clientes con pedidos (POS) ahora pueden ser eliminados** (v2026.6.2) — pedidos preservados en el historial de ventas, solo desvinculados del cliente

### 🐛 Correcciones (4)
- **Mensajes internos guardados como email** (v2026.6.4) — tipos correctos (`text`, `image`, etc.) para chats sin canal vinculado
- **Input oculto en mobile en chat interno** (v2026.6.4) — barra de navegación inferior oculta al abrir conversación
- **Salto de línea con Cmd/Ctrl+Enter** (v2026.6.4) — inserción correcta en textarea controlado
- **Botones de plantilla WhatsApp Official no se mostraban en el chat** (v2026.6.1) — los botones de las plantillas (respuesta rápida, URL, teléfono) ahora se guardan en el `metadata` del mensaje y se renderizan en el historial del chat; corrige el envío manual y el disparo masivo

---

::: info 📝 Total
**4 lanzamientos** en este mes!
:::
