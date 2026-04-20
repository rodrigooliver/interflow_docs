# Abril 2026

Actualizaciones del mes de abril de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.4.6](/es/changelog/2026/04/2026.4.6) | 20/04 | **Campo multiselect** (lista de selección múltiple) en campos personalizados; **desplegable con búsqueda** en todos los selects de campos personalizados; multiselect en el nodo de flujo y en la herramienta del Agente IA |
| [2026.4.5](/es/changelog/2026/04/2026.4.5) | 17/04 | **Adjuntar archivos en notas de clientes** — imágenes, PDFs, videos y documentos vinculados a cada nota, con galería de archivos y eliminación automática |
| [2026.4.4](/es/changelog/2026/04/2026.4.4) | 17/04 | **Nodo "Llamar otro flujo"** en el constructor de chatbots — flujos modulares con mapeo de variables y selección de nodo de entrada |
| [2026.4.3](/es/changelog/2026/04/2026.4.3) | 16/04 | **Flujo automático en envíos masivos** (esperar respuesta del cliente); **flujo al rechazar llamada WAHA** (inmediato o esperar respuesta, mensaje de rechazo ahora opcional) |
| [2026.4.2](/es/changelog/2026/04/2026.4.2) | 03/04 | **Corrección** falso "canal desconectado" en cola masiva; **accesos en la cola** (iconos distintos, Cmd/Ctrl en nueva pestaña, tiempo real) |
| [2026.4.1](/es/changelog/2026/04/2026.4.1) | 01/04 | **Herramientas del Agente IA para datos del cliente** (email, documento, país, tipo de persona); modal de acciones por secciones; contexto con email, documento y país |

---

## Resumen del Mes

### 🐛 Correcciones (1)
- **Envío masivo — canal desconectado** — comprobación del estado de conexión al enviar y consulta de la cola alineada a la configuración

### ✨ Nuevas Funcionalidades (10)
- **Herramientas del Agente IA para datos del cliente** (v2026.4.1) — acciones de sistema para email, documento (ID fiscal con parámetros y almacenamiento solo dígitos), país y tipo de persona; modal **Añadir acción** agrupado por sección (Cliente, Atención, Agendamiento, Flujo, Agente); JSON de contexto del cliente con email, documento y país
- **Accesos en la cola de campaña masiva** (v2026.4.2) — iconos distintos, Cmd/Ctrl en nueva pestaña, actualización en tiempo real de la cola
- **Flujo automático en campañas de envío masivo** (v2026.4.3) — al crear una campaña de texto o multimedia, configura un flujo que espera la respuesta del cliente para activarse automáticamente
- **Flujo al rechazar llamada WAHA** (v2026.4.3) — dos modos (inmediato o esperar respuesta), mensaje de rechazo ahora opcional, instrucción de contexto para agente IA en modo inmediato
- **Nodo "Llamar otro flujo"** (v2026.4.4) — nuevo nodo en el constructor de chatbots para invocar un flujo existente, con mapeo de variables entre flujos (`{{variable}}`), selección del nodo de entrada y transición automática de sesión
- **Campo personalizado multiselect** (v2026.4.6) — nuevo tipo de campo para seleccionar múltiples opciones; almacenamiento normalizado en tabla dedicada para alto rendimiento; filtros de clientes con soporte multiselect
- **Desplegable con búsqueda en campos personalizados** (v2026.4.6) — selects de opción única y múltiple reemplazados por componente con búsqueda y etiquetas visuales en la pantalla de clientes y editor de flujos
- **Soporte multiselect en el nodo "Actualizar Cliente"** (v2026.4.6) — el editor visual de flujos reconoce campos multiselect y muestra un desplegable de selección múltiple con búsqueda
- **Soporte multiselect en la herramienta del Agente IA** (v2026.4.6) — el modelo de IA puede leer y actualizar campos multiselect; las opciones válidas se pasan como enum en el esquema de la herramienta
- **Adjuntar archivos en notas de clientes** (v2026.4.5) — carga de cualquier tipo de archivo (imágenes, PDFs, videos, documentos) directamente en las notas del cliente; galería por nota con vista previa, inserción en el texto y eliminación individual; los archivos se eliminan automáticamente al borrar la nota

---

::: info 📝 Total
**6 lanzamientos** en este mes!
:::
