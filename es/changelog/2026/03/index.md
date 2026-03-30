# Marzo 2026

Actualizaciones del mes de marzo de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.3.8](/es/changelog/2026/03/2026.3.8) | 30/03 | **Marcar leído en WhatsApp al resolver (WAHA)** y **pausar flujo al resolver** – Opción en Configuración; lectura en WhatsApp al cerrar; pausa automática de flujo como `pause-flow` |
| [2026.3.7](/es/changelog/2026/03/2026.3.7) | 25/03 | **Reenviar mensajes y mensaje inicial tipado** – Reenvío desde el chat a nueva atención; API acepta texto o medio por URL; atención automática al crear con mensaje inicial; toast para abrir la nueva conversación |
| [2026.3.6](/es/changelog/2026/03/2026.3.6) | 24/03 | **Base de Conocimiento para Agente IA** – Registra documentos internos que la IA consulta automáticamente durante las atenciones, reduciendo tokens y mejorando la precisión |
| [2026.3.5](/es/changelog/2026/03/2026.3.5) | 24/03 | **Bloquear Medios en Grupos** – Configura para no almacenar fotos, videos, audios y documentos en grupos WhatsApp y ahorrar espacio |
| [2026.3.4](/es/changelog/2026/03/2026.3.4) | 23/03 | **Reportes de Volumen** – Seguimiento de mensajes por agente y por equipo, con gráfico, filtros de período e impresión |
| [2026.3.3](/es/changelog/2026/03/2026.3.3) | 20/03 | **Selección de Equipo** – Elige el equipo al iniciar conversación individual, en campañas o vía API |
| [2026.3.2](/es/changelog/2026/03/2026.3.2) | 16/03 | **Grupos WhatsApp (WAHA)** – Añadir participante como cliente, eliminar mensajes, foto del grupo, lista de participantes |
| [2026.3.1](/es/changelog/2026/03/2026.3.1) | 12/03 | **Módulo de Facturación (Billing)** – Contratos, splits, beneficiarios, plantillas, pasarela Asaas y registro manual |

---

## Resumen del Mes

### ✨ Nuevas Funcionalidades (8)
- **Marcar leído en WhatsApp al resolver y pausar flujo al resolver** – Configuración opcional en Atención para enviar lectura en WhatsApp (WAHA) al finalizar o marcar como resuelto; pausa automática de sesión de flujo equivalente a `POST /pause-flow`
- **Reenviar mensajes y mensaje inicial tipado** – Reenvía mensajes del chat a un nuevo contacto/canal; `POST /chat/create` acepta `initialMessage` como cadena u objeto (texto, imagen, vídeo, audio, documento con URL HTTPS); al crear con mensaje inicial, el sistema puede atender automáticamente o añadirte como colaborador; en el reenvío, toast con **Ir a la conversación** en lugar de redirigir al instante
- **Base de Conocimiento para Agente IA** – Espacio dedicado para registrar documentos internos (políticas, horarios, FAQs, etc.) que la IA consulta automáticamente durante las atenciones via RAG híbrido (embeddings vectoriales + búsqueda por palabras clave). Cada documento se convierte en una herramienta automática sin configuración adicional
- **Bloquear Medios en Grupos** – Opción para no almacenar fotos, videos, audios y documentos en grupos de WhatsApp, ahorrando espacio del plan y reduciendo el riesgo de costos extras
- **Reportes de Volumen de Mensajes** – Nuevo módulo con vista por agente y por equipo: gráfico de barras/líneas, filtros de período flexibles (día/semana/mes/año/específico), tarjetas de resumen clicables e impresión con encabezado automático. Acceso restringido a dueños, admins y gerentes
- **Selección de Equipo al Iniciar Conversación** – Elige el equipo responsable en el momento de crear la atención, ya sea individualmente, en campañas o vía API. El sistema sigue un orden automático de fallback cuando no se selecciona ningún equipo
- **Grupos WhatsApp (WAHA)** – Experiencia completa en grupos externos: añadir como cliente (menú del mensaje y lista de participantes), eliminar mensajes (incluidos de otros), foto del grupo y modal de participantes
- **Módulo de Facturación (Billing)** – Sistema financiero completo con contratos, división de ingresos automática, plantillas, beneficiarios, reporte de traspasos e integración con Asaas

---

::: info 📝 Total
**8 releases** con **8 funcionalidades** este mes!
:::
