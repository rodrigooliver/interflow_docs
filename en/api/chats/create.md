# Create Chat

Creates a new conversation (or reuses an active chat) for a contact and channel.

## Endpoint

```http
POST /api/{organizationId}/chat/create
```

**Base URL:** `https://v1.api.interflow.chat`

## Authentication

API Key in the header (either format):

```http
x-api-key: ak_your_api_key
```

or

```http
Authorization: Bearer ak_your_api_key
```

## Parameters

### URL

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `organizationId` | string (UUID) | Yes | Organization ID |

### Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `channelId` | string (UUID) | Yes | Active channel ID — sidebar **Channels** (copy from the card) |
| `customerId` | string (UUID) | No | Existing customer — **Customers** → actions (⋮) → **Copy ID**; if omitted, find/create automatically |
| `customer` | object | Yes* | Customer data. The chat identifier comes from here, based on the channel |
| `teamId` | string (UUID) | No | Team for the conversation — sidebar **Teams** (copy from the card) |
| `initialMessage` | string \| object | No | Initial message (text or media) |
| `whatsappTemplate` | object | No | Meta template (WhatsApp Official only) — **Channels** → Templates → **Copy ID** |
| `flowId` | string (UUID) | No | Starts the flow **immediately** — sidebar **Flows** (copy from the card) |
| `flowVariables` | array | No | Flow variables: `[{ "name": "...", "value": "..." }]` |
| `contextMessage` | string | No | Context used with `flowId` or `responseFlowId` |
| `responseFlowId` | string (UUID) | No | Flow on customer reply — same ID under **Flows** (copy from the card) |
| `keepPending` | boolean | No | If `true`, keeps the chat `pending` even with `initialMessage` / `whatsappTemplate` (skips attend and auto-assign) |

\*Required: `channelId` and the `customer` field for the channel (`whatsapp`/`phone`, `email`, `instagram`, or `facebook`).

### `customer`

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Customer name |
| `whatsapp` | string | WhatsApp number. **Required** on WhatsApp if `phone` is omitted |
| `phone` | string | Phone. On WhatsApp, used if `whatsapp` is omitted. Otherwise stored as an extra contact |
| `email` | string | Email. **Required** on an email channel. Extra contact on others |
| `instagram` | string | Instagram ID. **Required** on Instagram |
| `facebook` | string | Facebook ID. **Required** on Facebook |
| `document` | string | Tax ID (CPF/CNPJ or other). Only set if the customer has no document yet |
| `tags` | string[] \| string | Tag names (existing only). Does not create a new tag |
| `customFields` | object \| array | Custom fields by **slug**: `{ "budget": "Up to 15k" }` or `[{ "slug": "budget", "value": "Up to 15k" }]` |
| `forceUpdate` | object | Which fields to overwrite even if already set. See the table below |

### `customer.forceUpdate`

Without `forceUpdate`, an existing customer only fills **empty** fields. Set `true` on the fields that should be overwritten:

| Key | Effect |
|-----|--------|
| `name` | Overwrites the name |
| `email` | Overwrites the primary email |
| `phone` | Updates the existing phone contact |
| `whatsapp` | Updates the existing WhatsApp contact |
| `instagram` | Updates the Instagram ID |
| `facebook` | Updates the Facebook ID |
| `document` | Overwrites the document |
| `customFields` | `true` forces every sent slug; or a list (`["budget"]`) / slug (`"budget"`) |

### Identifier from the channel

Interflow reads the recipient from `customer`, based on the channel type:

| Channel type | Field in `customer` |
|--------------|---------------------|
| `whatsapp_official`, `whatsapp_wapi`, `whatsapp_zapi`, `whatsapp_waha`, `whatsapp_evo` | `whatsapp` (else `phone`) |
| `email` | `email` |
| `instagram` | `instagram` |
| `facebook` | `facebook` |

Existing customer: name, email, document, and `customer.customFields` only fill empty values (`already_filled`), unless `customer.forceUpdate` marks the field. Extra contacts (phone, WhatsApp, Instagram, Facebook) are added if missing; with `forceUpdate` that contact type is overwritten.

### `initialMessage`

String (text) or object:

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | `text`, `image`, `video`, `audio`, or `document` |
| `content` | string | Text (required if `type` = `text`) or caption |
| `url` | string | HTTPS media URL (required for media types) |
| `name` | string | File name (optional) |
| `mimetype` | string | MIME type (optional) |
| `forward` | object | Forward metadata (optional) |

### `whatsappTemplate`

| Field | Type | Description |
|-------|------|-------------|
| `id` or `templateId` | string (UUID) | Interflow template ID — **Channels** → channel → **WhatsApp Templates** → **Copy ID** |
| `variables` | object \| array | Template variables (optional) |

::: tip CUSTOMER STAGE
When creating a **new customer**, the system uses the channel default stage (`settings.defaultStageId`), if valid.
:::

## Behavior

- If an active chat already exists (`pending`, `in_progress`, or `await_closing`) for the same contact/channel, it is reused (`existing: true`).
- Without `keepPending`, sending `initialMessage` or `whatsappTemplate` usually attends the chat (`in_progress`) or adds you as collaborator.
- With `keepPending: true`, the message/template is sent and the chat stays `pending` (also skips auto-assign on create).
- `flowId` and `responseFlowId` are independent: the first starts immediately; the second waits for the customer reply.

## Examples

### Basic create

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_your_api_key" \
  -d '{
    "channelId": "channel-uuid",
    "customer": { "whatsapp": "5511999999999" },
    "customerName": "Customer name"
  }'
```

### WhatsApp template + keep pending + flow on reply

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_your_api_key" \
  -d '{
    "channelId": "channel-uuid",
    "customer": { "whatsapp": "5511999999999" },
    "customerName": "Customer name",
    "keepPending": true,
    "responseFlowId": "flow-uuid",
    "whatsappTemplate": {
      "id": "template-uuid"
    }
  }'
```

### Immediate flow

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_your_api_key" \
  -d '{
    "channelId": "channel-uuid",
    "customer": { "whatsapp": "5511999999999" },
    "flowId": "flow-uuid",
    "contextMessage": "Welcome!",
    "flowVariables": [
      { "name": "source", "value": "api" }
    ]
  }'
```

## Response

### Success (200)

```json
{
  "success": true,
  "chatId": "chat-uuid",
  "formattedContact": "5511999999999",
  "existing": false,
  "flowInitiated": false,
  "keepPending": true,
  "responseFlowScheduled": true,
  "responseFlowId": "flow-uuid",
  "responseFlowName": "Flow name",
  "templateSent": true,
  "templateMessageId": "message-uuid"
}
```

### Common errors

| HTTP | Situation |
|------|-----------|
| `400` | Invalid parameters / template on non-official channel |
| `404` | Inactive channel or unknown `responseFlowId` |
| `401` | Invalid API Key |

## Next steps

- [Authentication](/en/api/authentication)
