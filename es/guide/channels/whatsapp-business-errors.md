# Errores WhatsApp Business API — healthy ecosystem engagement y experiment

Códigos de error devueltos por Meta en WhatsApp Oficial (Cloud API). Interflow muestra el mensaje recibido de la API; la causa y la solución dependen de las reglas de Meta.

Esta página cubre fallos comunes de envío y entrega. Empieza por el código o por el mensaje en inglés que aparece en el estado del mensaje.

## Índice de errores

| Código | Mensaje (Meta) | Resumen |
|--------|----------------|---------|
| [130472](#130472--users-phone-number-is-part-of-an-experiment) | `Failed to send message because this user's phone number is part of an experiment` | Destinatario en experimento de marketing de Meta |
| [131049](#131049--this-message-was-not-delivered-to-maintain-healthy-ecosystem-engagement) | `This message was not delivered to maintain healthy ecosystem engagement.` | Límite per-user de plantillas de marketing |

Volver a [WhatsApp Business API](/es/guide/channels/whatsapp-business).

## 130472 — User's phone number is part of an experiment

**Mensaje:** `Failed to send message because this user's phone number is part of an experiment`

### ¿Qué causa este error?

Meta realiza experimentos periódicos para evaluar el impacto de los mensajes en la experiencia y el engagement de los usuarios de WhatsApp. No hay fecha de fin fija y **no es posible optar por salir** del experimento.

Como parte de este experimento, un **porcentaje muy pequeño** de usuarios de WhatsApp (en documentación anterior de Meta, alrededor del 1%) puede ser incluido en un grupo de prueba que **impide recibir plantillas de Marketing** enviadas por empresas — salvo que exista una ventana de conversación elegible.

En esos casos, el mensaje no se entrega y la API devuelve el código de error **130472**.

::: warning Importante
Este error **no significa** que tu cuenta de WhatsApp esté bloqueada o con baja calidad. Solo afecta a destinatarios que están en el grupo experimental de Meta.
:::

### ¿Cuándo se permite el envío?

Las plantillas de marketing se pueden enviar con normalidad si se cumple **una** de las condiciones siguientes:

- Existe una **ventana de atención al cliente (24 horas)** abierta entre la empresa y el cliente
- Existe una **conversación de marketing** ya abierta entre la empresa y el cliente
- Existe una **conversación de entrada gratuita (Free Entry Point)** abierta (por ejemplo, un anuncio Click to WhatsApp o flujo equivalente)

### ¿Qué ocurre cuando aparece este error?

| Efecto | Detalle |
|--------|---------|
| Entrega | El mensaje **no** se entrega |
| Conversación | No se crea ninguna conversación |
| Cobro | En general **no** se cobra si no hay entrega |
| Webhook | Estado `failed` con código `130472` |
| Reintento | Volver a enviar la misma plantilla **sin** ventana abierta produce el mismo error |

### ¿Cómo solucionarlo?

Esta restricción la aplica Meta. **No existe ninguna configuración en Interflow** que pueda eludir el bloqueo.

Si necesitas entregar el mensaje:

1. Contacta al cliente por **otro canal** (teléfono, correo, SMS, etc.)
2. Pídele que **envíe un mensaje** por WhatsApp a tu empresa
3. Con la ventana de 24 horas abierta, **reenvía** la plantilla (o continúa la conversación con normalidad)

::: tip CONSEJO
No reenvíes la misma plantilla en bucle: mientras el número esté en el experimento y no haya ventana elegible, el error 130472 se repetirá.
:::

### Referencias oficiales de Meta

- [Experimentos de WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/experiments)
- [Códigos de error de WhatsApp](https://developers.facebook.com/docs/whatsapp/cloud-api/support/error-codes)

---

## 131049 — This message was not delivered to maintain healthy ecosystem engagement

**Mensaje:** `This message was not delivered to maintain healthy ecosystem engagement.`

### ¿Qué causa este error?

Meta aplica **límites per-user de plantillas de Marketing**: cuántos mensajes de marketing puede recibir un usuario de WhatsApp de **cualquier empresa**, en un período, cuando es menos probable que interactúe.

El límite es **adaptativo** y considera factores como:

- Tasa reciente de lectura de mensajes de marketing
- Volumen de mensajes en la bandeja (personales y de empresas)
- Engagement general del usuario con marketing en WhatsApp

Cuando el destinatario está en el límite (o tras reintentos excesivos a quien ya lo alcanzó), el mensaje **no se entrega** y la API / webhook devuelve el código **131049**.

::: warning Importante
- Afecta principalmente plantillas de la categoría **Marketing**
- Puede ocurrir en el **primer** envío de tu empresa — el límite es del destinatario entre todas las empresas
- **No** indica que tu WABA esté baneada o con baja calidad
- En algunas regiones Meta puede restringir más el marketing (p. ej. reglas para usuarios en EE. UU. — confirma la documentación actual de Meta)
:::

### ¿Qué ocurre cuando aparece este error?

| Efecto | Detalle |
|--------|---------|
| Entrega | El mensaje **no** se entrega |
| Webhook | Estado `failed` con código `131049` |
| Reintento inmediato | Suele fallar otra vez; reintentos repetidos en 24h pueden alargar el bloqueo para ese usuario |
| Otros clientes | En general **sigues** pudiendo enviar marketing a otros números |
| Ventana de 24h | Si el cliente responde a un marketing, se abre ventana de atención; los marketings **dentro** de esa ventana **no cuentan** para el límite |

### ¿Cómo solucionarlo?

Esta decisión es de Meta. **No existe ninguna configuración en Interflow** que ignore el límite per-user.

Recomendaciones:

1. **Espera al menos 24 horas** antes de reenviar la misma plantilla de marketing a ese número (orientación oficial de Meta)
2. **No hagas retry en bucle** — puede empeorar la disponibilidad de entrega para ese usuario hasta 24 horas
3. Si el contenido es realmente utilitario o de autenticación, usa la categoría correcta (**Utility** / **Authentication**) — **no** recategorices promoción como utilitario solo para eludir el error
4. Pide al cliente que **inicie la conversación** (o responda) para abrir la ventana de 24h
5. Segmenta campañas hacia contactos con engagement y evita disparos fríos en exceso

::: tip CONSEJO
Un `200` en la llamada de envío **no** garantiza la entrega. Confirma siempre el estado en el webhook (`failed` + `131049`).
:::

### Cómo prevenirlo

- Espaciar disparos de marketing al mismo contacto
- Priorizar leads con engagement (lectura/respuesta)
- Mantener opt-in y calidad de plantillas
- Monitorear la tasa de fallos `131049` en campañas

### Referencias oficiales de Meta

- [Per-user marketing template message limits](https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/marketing-templates/per-user-limits)
- [Códigos de error de WhatsApp](https://developers.facebook.com/documentation/business-messaging/whatsapp/support/error-codes)

## Próximos Pasos

- [WhatsApp Business API](/es/guide/channels/whatsapp-business)
- [Plantillas WhatsApp](/es/guide/channels/whatsapp-templates)
- [Automatización con Flujos](/es/guide/flows/builder)
