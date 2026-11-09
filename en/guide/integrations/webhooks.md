# Outbound webhooks

Interflow sends an HTTPS POST when an organization event happens. Register the URL, secret, and events in **Settings → Webhooks**.

## Setup

1. Open **Settings → Webhooks**
2. Enter a name and an `https://` URL. Turn on **Sign with HMAC** and set a secret (leave it blank to generate one). With signing off, the POST has no `X-Interflow-Signature`
3. Select the events
4. Save and use **Test** to receive a `ping` event

## Events

| Event | When |
|--------|------|
| `customer.stage_changed` | The customer moves to another funnel stage, including flows and agents |
| `customer.created` | A customer is created from the app or from a chat |
| `chat.resolved` | A conversation is closed |
| `chat.transferred` | A chat is transferred to another team |
| `task.created` | A task is created |
| `appointment.status_changed` | An appointment status changes |
| `ping` | Manual endpoint test |

## Body

Every POST uses the same envelope: `id`, `event`, `created_at`, `organization_id`, and `data`. `customer` is present when the event is tied to one. UTM fields are `null` when there is no attribution. The full Portuguese guide has the same shapes; the examples below are the `data` object of each event.

### `customer.stage_changed`

```json
{
  "stage": {
    "previous_id": "uuid",
    "previous_name": "New",
    "id": "uuid",
    "name": "Qualified",
    "funnel_id": "uuid",
    "funnel_name": "Sales"
  },
  "source": "manual",
  "chat_id": "uuid",
  "customer": {
    "id": "uuid",
    "name": "Ana Souza",
    "email": "ana@example.com",
    "phone": "5511999999999",
    "stage_id": "uuid",
    "utm_campaign_id": "uuid",
    "utm_campaign_ad_id": "uuid",
    "ad_source_id": "120210000000000001",
    "utm_metadata": {
      "sourceID": "120210000000000001",
      "sourceType": "ad",
      "sourceURL": "https://fb.me/3AbCdEf",
      "adTitle": "Black Friday — 30% off",
      "adBody": "Message us on WhatsApp",
      "mediaType": "image",
      "ctwaClid": "ARAkLkA8rmlFeiCktEJQ-QTwRiyYHAFDLMNd1zC4n8example",
      "showAdAttribution": true
    }
  }
}
```

Leaving the funnel sets `stage.id` and `stage.name` to `null`. The `customer` above is a WhatsApp click-to-ad. `utm_campaign_id` and `utm_campaign_ad_id` are Interflow ids. `ad_source_id` matches `utm_metadata.sourceID`. Without an ad, those fields and `utm_metadata` are `null`. Other events reuse the same `customer` object.

### `customer.created`

```json
{
  "source": "api",
  "customer": { "id": "uuid", "name": "Ana Souza", "email": "ana@example.com", "phone": "5511999999999", "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

`source` is `api` from the app and `chat` when the customer is created from a conversation.

### `chat.resolved`

```json
{
  "chat": { "id": "uuid", "status": "closed", "title": "Plan question", "closure_type_id": "uuid", "closure_type": "Resolved" },
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": "5511999999999", "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

`chat.status` is `closed` or `await_closing` when closing starts a flow.

### `chat.transferred`

```json
{
  "chat": { "id": "uuid" },
  "team": { "id": "uuid", "name": "Support", "previous_id": "uuid" },
  "source": "manual",
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

### `task.created`

```json
{
  "task": { "id": "uuid", "title": "Call back", "status": "pending", "priority": "medium", "project_id": null, "chat_id": "uuid" },
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

`customer` is `null` when the task has no customer.

### `appointment.status_changed`

```json
{
  "appointment": { "id": "uuid", "status": "confirmed", "previous_status": "scheduled", "schedule_id": "uuid", "chat_id": "uuid" },
  "customer": { "id": "uuid", "name": "Ana Souza", "email": null, "phone": null, "stage_id": null, "utm_campaign_id": null, "utm_campaign_ad_id": null, "ad_source_id": null, "utm_metadata": null }
}
```

`status` is one of `scheduled`, `confirmed`, `started`, `completed`, `canceled`, `no_show`.

### `ping`

```json
{ "endpoint_id": "uuid" }
```

## Signature

Headers: `X-Interflow-Signature` (`t=<unix>,v1=<hex>`), `X-Interflow-Event`, `X-Interflow-Delivery`, `X-Interflow-Timestamp`.

`v1` is the hex HMAC-SHA256 of `timestamp + "." + raw body`, using the endpoint secret. Verify the raw body before parsing JSON, and reject timestamps older than a few minutes.

## Retries and logs

Return `2xx` within 10 seconds. Interflow tries up to 5 times: immediately, then after 1 minute, 10 minutes, 1 hour, and 6 hours. HTTP `4xx` (except `408` and `429`) stops after the first failure. Every attempt, success or error, is kept for 90 days. The deliveries list shows status, HTTP status, the response, and **Resend**, which creates a new delivery with the same payload.
