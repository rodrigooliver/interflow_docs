# Webhooks de salida

Interflow envía un POST HTTPS cuando ocurre un evento de la organización. Registre la URL, la clave y los eventos en **Configuración → Webhooks**.

## Alta

1. Abra **Configuración → Webhooks**
2. Indique nombre y URL `https://`. Active **Firmar con HMAC** y la clave (o déjela vacía para generarla). Sin esa opción, el POST sale sin `X-Interflow-Signature`
3. Marque los eventos
4. Guarde y use **Probar** para recibir un evento `ping`

## Eventos

| Evento | Cuándo |
|--------|--------|
| `customer.stage_changed` | El cliente cambia de etapa del embudo, también por flujo o agente |
| `customer.created` | Se crea un cliente desde la app o desde un chat |
| `chat.resolved` | Se cierra una conversación |
| `chat.transferred` | Un chat se transfiere de equipo |
| `task.created` | Se crea una tarea |
| `appointment.status_changed` | Cambia el estado de una cita |
| `ping` | Prueba manual del endpoint |

## Cuerpo

Todos los POST usan `id`, `event`, `created_at`, `organization_id` y `data`. `customer` aparece cuando el evento está ligado a un cliente. Los UTM van en `null` si no hay atribución. Abajo está solo el objeto `data` de cada evento.

### `customer.stage_changed`

```json
{
  "stage": { "previous_id": "uuid", "previous_name": "Nuevo", "id": "uuid", "name": "Calificado", "funnel_id": "uuid", "funnel_name": "Comercial" },
  "source": "manual",
  "chat_id": "uuid",
  "customer": { "id": "uuid", "name": "Ana Souza", "email": "ana@ejemplo.com", "phone": "5511999999999", "stage_id": "uuid", "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

Al salir del embudo, `stage.id` y `stage.name` vienen `null`. Un clic en anuncio de WhatsApp llena `utm_metadata` con `sourceID`, `sourceType`, `sourceURL`, `adTitle`, `adBody`, `mediaType`, `ctwaClid` y `showAdAttribution`. `ad_source_id` repite `sourceID`. `utm_campaign_id` y `utm_campaign_ad_id` son ids internos. Sin anuncio, esos campos y `utm_metadata` vienen `null`.

### `customer.created`

```json
{
  "source": "api",
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": "5511999999999", "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

`source` es `api` desde la app y `chat` cuando el cliente nace de una conversación.

### `chat.resolved`

```json
{
  "chat": { "id": "uuid", "status": "closed", "title": "Duda del plan", "closure_type_id": "uuid", "closure_type": "Resuelto" },
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

### `chat.transferred`

```json
{
  "chat": { "id": "uuid" },
  "team": { "id": "uuid", "name": "Soporte", "previous_id": "uuid" },
  "source": "manual",
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

### `task.created`

```json
{
  "task": { "id": "uuid", "title": "Devolver la llamada", "status": "pending", "priority": "medium", "project_id": null, "chat_id": "uuid" },
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

`customer` es `null` si la tarea no tiene cliente.

### `appointment.status_changed`

```json
{
  "appointment": { "id": "uuid", "status": "confirmed", "previous_status": "scheduled", "schedule_id": "uuid", "chat_id": "uuid" },
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

### `ping`

```json
{ "endpoint_id": "uuid" }
```

## Firma

Headers: `X-Interflow-Signature` (`t=<unix>,v1=<hex>`), `X-Interflow-Event`, `X-Interflow-Delivery`, `X-Interflow-Timestamp`.

`v1` es el HMAC-SHA256 en hexadecimal de `timestamp + "." + cuerpo crudo`, con la clave del endpoint. Verifique el cuerpo tal como llegó, antes de interpretar el JSON.

## Reintentos y registros

Responda `2xx` en menos de 10 segundos. Hay hasta 5 intentos: al momento, y luego a 1 minuto, 10 minutos, 1 hora y 6 horas. Un `4xx` (excepto `408` y `429`) detiene los reintentos. Cada intento, con éxito o error, se guarda 90 días. En entregas puede ver el estado, el HTTP, la respuesta y **Reenviar**, que crea una entrega nueva con el mismo payload.
