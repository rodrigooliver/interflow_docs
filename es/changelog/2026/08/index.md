# Agosto 2026

Actualizaciones del mes de agosto de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.8.9](/es/changelog/2026/08/2026.8.9) | 18/08 | **Firma en el Agente IA** — mismo formato del nodo de texto, sin que el modelo lea el texto |
| [2026.8.8](/es/changelog/2026/08/2026.8.8) | 13/08 | **Agente IA por canal** — contexto de origen y condiciones en texto, extras y herramientas |
| [2026.8.7](/es/changelog/2026/08/2026.8.7) | 13/08 | **Editor expandido** — mensajes largos a pantalla completa y Enter en el celular inserta línea |
| [2026.8.6](/es/changelog/2026/08/2026.8.6) | 13/08 | **Canal por equipo** — quién puede iniciar conversación limitado a los equipos marcados |
| [2026.8.5](/es/changelog/2026/08/2026.8.5) | 13/08 | **Estado En línea / Ausente** — pausa en la atención con mensaje automático opcional |
| [2026.8.4](/es/changelog/2026/08/2026.8.4) | 12/08 | **Macros de cliente** — botones de automatización y tipo lead/cliente |
| [2026.8.3](/es/changelog/2026/08/2026.8.3) | 12/08 | **Jornada y banco de horas** — horario real, 1h extra semanal y cierre en el banco |
| [2026.8.2](/es/changelog/2026/08/2026.8.2) | 11/08 | **Equipos en la invitación** — seleccionar equipos en el mismo paso de invitar usuario |
| [2026.8.1](/es/changelog/2026/08/2026.8.1) | 07/08 | **Connections / Meta Lead Ads** — atribución por anuncio, leads y customers por ad, forms sin campaña y píxeles en la cuenta |

---

## Resumen del mes

### Nuevas Funcionalidades (16)
- **Firma en el envío del Agente IA** (v2026.8.9) — header o footer en metadata, sin que el modelo copie el texto
- **Canal de origen y condiciones en el Agente IA** (v2026.8.8) — identificador del canal en el contexto, si/si no en el prompt, extras y herramientas listas condicionales
- **Editor expandido para mensajes largos** (v2026.8.7) — campo más grande con formato e IA; pantalla completa en el celular
- **Restricción de canal por equipo** (v2026.8.6) — iniciar conversación solo con los equipos marcados en el canal
- **Estado En línea / Ausente** (v2026.8.5) — pausa en la atención, sale de la rotación y mensaje automático opcional
- **Macros de cliente** (v2026.8.4) — botones en el perfil: acciones, visibilidad y preguntar al hacer clic
- **Tipo lead o cliente** (v2026.8.4) — filtro en la lista y condiciones/acciones de las macros
- **Jornada real y carga 44h** (v2026.8.3) — horarios de entrada/almuerzo/salida y 1h extra semanal en el cierre
- **Banco de horas en el cierre** (v2026.8.3) — política configurable (compensar, banco o pagar HE)
- **Ajustes RRHH y 4 marcajes** (v2026.8.3) — pantalla de la org, tabla diaria con almuerzo y retrasos
- **Equipos al invitar un usuario** (v2026.8.2) — selección y sugerencia de equipos en el mismo paso de la invitación
- **Hub Connections como camino principal** (v2026.8.1) — Meta Lead Ads centralizado en UTM
- **Atribución de leads por anuncio** (v2026.8.1) — lead y customer ligados al ad, no a la campaña
- **Leads y customers por anuncio** (v2026.8.1) — páginas paginadas desde la lista de ads
- **Instant Forms sin mapear campaña** (v2026.8.1) — solo campos y acciones; el anuncio viene en el lead
- **Píxeles en la cuenta publicitaria** (v2026.8.1) — sync y token CAPI a nivel de Ad Account

### Correcciones (4)
- **Enter en el celular enviaba el mensaje** (v2026.8.7) — Enter inserta una nueva línea; envío con el botón
- **Espacio vacío en el modal de mejorar texto** (v2026.8.7) — la altura sigue el contenido en el computador
- **Cliente no encontrado al cambiar de etapa** (v2026.8.4) — la actualización del embudo vuelve a funcionar
- **Hora extra en cero en la jornada de 9h** (v2026.8.3) — 08:00–12:00 / 13:30–18:30 pasa a generar 1h extra por semana
