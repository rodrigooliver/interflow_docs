# Estado En línea / Ausente

El agente puede indicar si está **En línea** o **Ausente** en la barra lateral, junto al avatar. La ausencia afecta la rotación de chats nuevos y, si se configura, envía un mensaje automático a los clientes de los chats asignados a él.

Changelog: [v2026.8.5](/es/changelog/2026/08/2026.8.5)

---

## Qué ocurre en la ausencia

| Comportamiento | Detalle |
|----------------|---------|
| Rotación | El agente deja de recibir chats nuevos en sus equipos |
| Reservas pendientes | Los chats reservados para él en `pending` se liberan y redistribuyen |
| Mensaje automático | Opcional — solo en chats **asignados** a él, cuando el cliente escribe |
| Intervalo | Como máximo 1 aviso cada **30 minutos** por conversación |

Los chats que ya están con el agente (`in_progress`) **no se transfieren** automáticamente. La atención continúa con él al volver.

---

## Cómo marcarse ausente

1. En la barra lateral, junto al avatar, haz clic en el indicador **En línea** / **Ausente**
2. En el modal:
   - (Opcional) marca **Enviar mensaje automático a los clientes de mis chats**
   - Edita el texto o usa el mensaje predeterminado
3. Confirma **Ausentarse**
4. Para volver, abre el estado y elige **Volver en línea**
5. Usa **Actualizar** en el modal para sincronizar el estado con el servidor

---

## Mensaje automático

- Solo se envía si la opción está marcada en esa ausencia
- Solo en chats **asignados** al agente ausente
- Identificado internamente como mensaje automático de ausencia
- Si el cliente envía varios mensajes seguidos, el aviso no se repite antes de 30 minutos en ese chat — aunque el agente vuelva en línea y se ausente de nuevo en ese intervalo

---

## Limitaciones

- No envía broadcast a todos los chats abiertos al activar la pausa
- No cubre clientes en la cola sin asignación al agente
- En canales con ventana de conversación (p. ej. WhatsApp oficial), el envío depende de las reglas del canal
