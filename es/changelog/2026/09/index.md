# Septiembre 2026

Actualizaciones del mes de septiembre de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.9.13](/es/changelog/2026/09/2026.9.13) | 23/09 | **Barrido del embudo** — lee la conversación, sugiere la etapa y recorre la cola una organización a la vez |
| [2026.9.12](/es/changelog/2026/09/2026.9.12) | 18/09 | **Locales y duplicar agenda** — salas con horario propio y copia de la configuración sin citas |
| [2026.9.11](/es/changelog/2026/09/2026.9.11) | 15/09 | **Transferencia entre cajas y aviso de vencimiento** — mueve saldo sin entrar en el DRE y avisa en el móvil lo que vence hoy |
| [2026.9.10](/es/changelog/2026/09/2026.9.10) | 15/09 | **Por cobrar, por pagar y movimientos** — obligaciones abiertas, extracto y registro de pago o cobro |
| [2026.9.9](/es/changelog/2026/09/2026.9.9) | 15/09 | **Rotación entre equipos** — el canal sortea el equipo; transferir o salir puede enviar a la cola |
| [2026.9.8](/es/changelog/2026/09/2026.9.8) | 14/09 | **Excluir etiquetas en el disparo** — no enviar a quien tiene etiquetas como parar mensajes o salir |
| [2026.9.7](/es/changelog/2026/09/2026.9.7) | 10/09 | **Centros de coste** — gastos por área, filtro de movimientos e informe con CSV |
| [2026.9.6](/es/changelog/2026/09/2026.9.6) | 10/09 | **Informes financieros** — flujo de caja, categorías y aging en las cajas con acceso |
| [2026.9.5](/es/changelog/2026/09/2026.9.5) | 10/09 | **Audio en el Agente IA** — responder con voz del sistema, sin nodos de TTS |
| [2026.9.4](/es/changelog/2026/09/2026.9.4) | 10/09 | **Lista y día en columnas** — por profesional o agenda, con tarjetas compactas |
| [2026.9.3](/es/changelog/2026/09/2026.9.3) | 10/09 | **Ventana de 24h y plantillas en los flujos** — condición por canal oficial y envío de plantilla aprobada |
| [2026.9.2](/es/changelog/2026/09/2026.9.2) | 10/09 | **Menú por módulo y búsqueda** — workspaces en la barra y ⌘K / Ctrl+K |
| [2026.9.1](/es/changelog/2026/09/2026.9.1) | 09/09 | **Canal WAHA desconectado** — push para owner y admins con el nombre y el número |

---

## Resumen del Mes

### Nuevas Funcionalidades (21)
- **Barrido automático del embudo** (v2026.9.13) — lee la conversación a la hora marcada y solo mueve a las etapas de destino si la probabilidad supera el mínimo
- **Cola del barrido** (v2026.9.13) — una organización a la vez, con pausa, continuar, repetir fallos y transferir la etapa sugerida
- **Locales y salas en la agenda** (v2026.9.12) — salas con horario, solapamiento, filtro, columnas y Agente IA
- **Duplicar agenda** (v2026.9.12) — clona servicios, profesionales, locales, horarios, feriados y notificaciones, sin historial
- **Transferencia entre cajas** (v2026.9.11) — mueve saldo de una caja a otra sin contar como ingreso o gasto
- **Aviso en el móvil de las cuentas que vencen hoy** (v2026.9.11) — push matutino para los operadores de la caja
- **Por cobrar, por pagar y movimientos** (v2026.9.10) — obligaciones abiertas separadas del extracto, con vencidos, por vencer y filtros rápidos
- **Registrar pago o cobro** (v2026.9.10) — valor pagado, datos de pago, caja y quién registró
- **Recurrencia con buffer automático** (v2026.9.10) — ocurrencias iniciales y ajuste en todas las próximas aún no registradas
- **Rotación automática entre equipos** (v2026.9.9) — cola de equipos en el canal, en el webhook y al transferir o salir
- **Excluir etiquetas en el disparo masivo** (v2026.9.8) — omitir destinatarios con etiquetas de baja, aunque coincidan con la inclusión
- **Centros de coste** (v2026.9.7) — gestión, asociación opcional a gastos, filtro e informe dedicado con CSV
- **Informes financieros** (v2026.9.6) — flujo de caja, categorías, por cobrar/pagar y comparativo por caja, solo en las cajas con acceso
- **Audio en el Agente IA** (v2026.9.5) — respuesta con voz del sistema, con reglas de audio, enlace y probabilidad
- **Lista y día en columnas** (v2026.9.4) — división por profesional o agenda, con tarjetas compactas y panel al pasar el cursor
- **Iniciar una cita aún no confirmada** (v2026.9.4) — saltar la confirmación e ir directo a en curso
- **Ventana de 24h en los flujos** (v2026.9.3) — ramificación según el último mensaje del cliente en WhatsApp Oficial
- **Nodo Plantilla de WhatsApp** (v2026.9.3) — plantillas y variables asignadas por canal oficial
- **Menú por módulo** (v2026.9.2) — Atención, Finanzas, PDV, Cobros, RR. HH. y Prontuario en el selector de la barra
- **Búsqueda en el menú** (v2026.9.2) — ⌘K / Ctrl+K para páginas y opciones de configuración
- **Aviso cuando WhatsApp WAHA queda desconectado** (v2026.9.1) — push para owner y admins si la sesión activa se cae; ignora reinicio corto, QR y desconexión manual

### Correcciones (4)
- **Vencidos por fecha** (v2026.9.10) — la obligación atrasada aparece en vencidos aunque el estado siga pendiente
- **Totales y carga en los filtros** (v2026.9.10) — el atajo de fecha carga y los totales siguen el período
- **Audio y texto en la misma respuesta** (v2026.9.5) — el cliente recibe solo el audio, con la transcripción en el propio audio
- **Columnas de la división recordadas al actualizar** (v2026.9.4) — la elección de profesionales o agendas permanece en el navegador
