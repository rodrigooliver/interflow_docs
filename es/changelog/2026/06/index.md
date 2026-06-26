# Junio 2026

Actualizaciones del mes de junio de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.6.10](/es/changelog/2026/06/2026.6.10) | 26/06 | **Flujos silenciosos por estado de cita** — automatizaciones internas por etapa, pestaña dedicada en gestión de agenda, cambios de estado centralizados por la API |
| [2026.6.9](/es/changelog/2026/06/2026.6.9) | 25/06 | **Rodizio automático en equipos** — distribución por orden, reserva bloqueada en pending, estado del rodizio, badge en lista y mensajes de sistema |
| [2026.6.8](/es/changelog/2026/06/2026.6.8) | 24/06 | **Notificaciones por evento de cita** — envío automático al registrar, confirmar, cancelar, iniciar y concluir; resumen de estado y preset "Operacional hoy" en el listado |
| [2026.6.7](/es/changelog/2026/06/2026.6.7) | 24/06 | **Pausar IA en respuestas externas** — configuración por canal (WAHA, Official, Instagram, Facebook) para controlar la pausa automática de la IA al responder fuera de Interflow |
| [2026.6.6](/es/changelog/2026/06/2026.6.6) | 24/06 | **Filtro "Incluir colaborando"** — amplía la lista de conversaciones con colaboraciones activas sin restringir otros filtros; disponible en panel de filtros y filtros rápidos |
| [2026.6.5](/es/changelog/2026/06/2026.6.5) | 23/06 | **Timeline de Leads** — jornada unificada del cliente, registro automático de contacto externo vía WhatsApp personal, feedback obligatorio bloqueante y vista para gestores |
| [2026.6.4](/es/changelog/2026/06/2026.6.4) | 23/06 | **Chats Internos mejorados** — vista previa del último mensaje, badge de no leídos unificado, fuente única de datos con Realtime, acceso a atenciones, correcciones mobile y tipo de mensaje |
| [2026.6.3](/es/changelog/2026/06/2026.6.3) | 09/06 | **Página "Mis Tareas"** — todas tus tareas en un solo lugar, independientemente del proyecto; agrupación y ordenación en la vista de lista; edición rápida de estado, prioridad y vencimiento directamente en la lista |
| [2026.6.2](/es/changelog/2026/06/2026.6.2) | 09/06 | **Eliminación automática de clientes por límite de uso** — configurable en Límites, con botón "Ejecutar ahora" y progreso en tiempo real; los clientes con pedidos POS ahora pueden ser eliminados |
| [2026.6.1](/es/changelog/2026/06/2026.6.1) | 08/06 | **Botones de plantilla WhatsApp Official ahora guardados en el historial** — botones de respuesta rápida, URL y teléfono mostrados correctamente en el chat tras envío manual o masivo |

---

## Resumen del Mes

### ✨ Nuevas Funcionalidades (24)
- **Flujos silenciosos por estado de cita** (v2026.6.10) — automatizaciones internas en segundo plano al confirmar, iniciar, concluir, cancelar o marcar no-show; pestaña dedicada en gestión de agenda
- **Distribución automática por rodizio** (v2026.6.9) — configuración por equipo con disparadores, fallback, horarios, pausa y guardia por miembro
- **Reserva bloqueada en modo pending** (v2026.6.9) — plazos en horario laboral/fuera de horario; solo el agente reservado puede atender hasta expirar
- **Estado del rodizio en el equipo** (v2026.6.9) — panel con próximo, último y orden de cola; acción "Definir como próximo"
- **Marcador de reserva en la lista de chats** (v2026.6.9) — badge "Reservado para ti" o "Reservado · {nombre}" en conversaciones pending
- **Mensajes de sistema del rodizio** (v2026.6.9) — tipos `auto_assigned` y `user_start_auto` en el historial del chat
- **Notificaciones por evento de cita** (v2026.6.8) — plantillas para registro, confirmación, cancelación, inicio, conclusión, reagendamiento, no-show y seguimiento post-atención vía WhatsApp, email o flujo
- **Resumen de estado en el listado de citas** (v2026.6.8) — chips clicables (Por iniciar, En curso, Concluidos, Cancelados/ausentes) con contadores
- **Preset "Operacional hoy"** (v2026.6.8) — filtro rápido del día con agrupación por fase operacional
- **Pausar IA en respuestas externas** (v2026.6.7) — interruptor por canal para controlar la pausa automática del flujo/IA cuando el agente responde por la app nativa (WAHA, WhatsApp Official, Instagram, Facebook); activado por defecto
- **Filtro "Incluir colaborando"** (v2026.6.6) — amplía la lista de conversaciones con atenciones en colaboración, combinable con estado, equipo, etiquetas y filtros rápidos personalizados
- **Timeline de Leads (Jornada del Cliente)** (v2026.6.5) — pestaña Timeline en el panel del cliente con CRM, atenciones, notas, tareas, citas y contactos externos
- **Registro automático de contacto externo** (v2026.6.5) — botón WhatsApp Rápido registra contacto fuera de Interflow antes de abrir la app
- **Feedback obligatorio después del contacto externo** (v2026.6.5) — modal bloqueante exige documentación de la conversación antes de retomar el chat
- **Configuración de feedback externo** (v2026.6.5) — interruptor "Exigir feedback después del contacto" en configuración del botón WhatsApp
- **Vista previa del último mensaje en Chats Internos** (v2026.6.4) — el listado muestra contenido, medios o remitente del último mensaje
- **Badge de no leídos unificado** (v2026.6.4) — contador sincronizado en tiempo real en navbar mobile, encabezado de atenciones y menú compacto
- **Acceso directo a Atenciones** (v2026.6.4) — botón en el listado de Chats Internos para ir a `/app/chats`
- **Página "Mis Tareas"** (v2026.6.3) — todas las tareas asignadas a ti en todos los proyectos, con vistas de lista y calendario, nombre del proyecto en cada tarea, filtros y botón de actualizar
- **Agrupación en la vista de lista** (v2026.6.3) — por etapa, proyecto, fecha de vencimiento (Vencidas, Ayer, Hoy, Mañana, Esta semana, Próxima semana, Futuras, Sin fecha), responsable, estado o prioridad
- **Ordenación en la vista de lista** (v2026.6.3) — predeterminado, vencimiento, prioridad, título, fecha de creación o estado, aplicada dentro de cada grupo
- **Edición rápida en la lista** (v2026.6.3) — cambio de estado, prioridad y vencimiento directamente en la fila de la tarea, con notificaciones e historial preservados
- **Eliminación automática de clientes por límite de uso** (v2026.6.2) — eliminación configurable en Configuración > Límites (disparador %, meta %, orden por último contacto o registro, conversaciones vinculadas, hora de ejecución), procesada por la cola de eliminación existente
- **Botón "Ejecutar ahora" en las limpiezas automáticas** (v2026.6.2) — dispara la limpieza de Clientes o Almacenamiento inmediatamente, con estado "En curso..." que bloquea disparos duplicados

### 🔄 Cambios (9)
- **Cambios de estado centralizados por la API** (v2026.6.10) — listado, cola por llegada, slots y cancelaciones médicas disparan notificaciones y flujos silenciosos de forma consistente
- **Ruta de check-in dedicada** (v2026.6.10) — endpoint `PATCH .../checkin` en la cola por orden de llegada
- **Nodo de flujo Rodizio** (v2026.6.9) — activa distribución automática del equipo actual o seleccionado
- **Formulario de plantillas de notificación** (v2026.6.8) — todos los disparadores de notificación reactivados en la interfaz (antes solo "Antes de la cita" estaba disponible)
- **Eventos enriquecidos en la timeline** (v2026.6.5) — cambios de etapa CRM, cierre y asignación de chats registrados automáticamente
- **Fuente única de datos para Chats Internos** (v2026.6.4) — lista global con Realtime, sin fetch/suscripción duplicados en la página
- **Teclado en el campo de mensaje** (v2026.6.4) — Enter envía; Cmd/Ctrl+Enter inserta salto de línea
- **Mejoras visuales en la lista de tareas** (v2026.6.3) — encabezado "Vencimiento" sin salto de línea, estado y fechas sin saltos, fecha vencida solo en rojo, controles de agrupación/ordenación en barra propia
- **Los clientes con pedidos (POS) ahora pueden ser eliminados** (v2026.6.2) — pedidos preservados en el historial de ventas, solo desvinculados del cliente

### 🐛 Correcciones (7)
- **Recordatorios before_appointment con estado confirmado** (v2026.6.8) — recordatorios enviados también para citas confirmadas
- **Cancelación de recordatorios pendientes** (v2026.6.8) — recordatorios futuros cancelados automáticamente al cancelar la cita
- **Consulta de conversaciones con filtro aditivo** (v2026.6.6) — corregido error al cargar lista con "Incluir colaborando" activo
- **Mensajes internos guardados como email** (v2026.6.4) — tipos correctos (`text`, `image`, etc.) para chats sin canal vinculado
- **Input oculto en mobile en chat interno** (v2026.6.4) — barra de navegación inferior oculta al abrir conversación
- **Salto de línea con Cmd/Ctrl+Enter** (v2026.6.4) — inserción correcta en textarea controlado
- **Botones de plantilla WhatsApp Official no se mostraban en el chat** (v2026.6.1) — los botones de las plantillas (respuesta rápida, URL, teléfono) ahora se guardan en el `metadata` del mensaje y se renderizan en el historial del chat; corrige el envío manual y el disparo masivo

---

::: info 📝 Total
**10 lanzamientos** en este mes!
:::
