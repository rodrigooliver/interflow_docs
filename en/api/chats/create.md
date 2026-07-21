# Create Chat

Creates a new conversation (or reuses an active chat) for a contact and channel.

## Endpoint

```http
POST /api/{organizationId}/chat/create
```

**Base URL:** `https://node.interflow.chat`

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
| `contactType` | string | Yes | `whatsapp`, `phone`, `email`, `instagram`, `facebook`, or `telegram` |
| `contactValue` | string | Yes | Contact value (phone, email, username, etc.) |
| `channelId` | string (UUID) | Yes | Active channel ID |
| `customerId` | string (UUID) | No | Existing customer; if omitted, find/create automatically |
| `customerName` | string | No | Name when creating a new customer |
| `teamId` | string (UUID) | No | Team for the conversation |
| `initialMessage` | string \| object | No | Initial message (text or media) |
| `whatsappTemplate` | object | No | Meta template (WhatsApp Official channel only) |
| `flowId` | string (UUID) | No | Starts the flow **immediately** after create/find |
| `flowVariables` | array | No | Flow variables: `[{ "name": "...", "value": "..." }]` |
| `contextMessage` | string | No | Context used with `flowId` or `responseFlowId` |
| `responseFlowId` | string (UUID) | No | Flow that starts **when the customer replies** (`auto_trigger_on_response`) |
| `keepPending` | boolean | No | If `true`, keeps the chat `pending` even with `initialMessage` / `whatsappTemplate` (skips attend and auto-assign) |

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
| `id` or `templateId` | string (UUID) | Template ID in `whatsapp_templates` |
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
curl -X POST "https://node.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_your_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "39e2a574-367c-42dd-912b-50d0c385ca9d",
    "customerName": "Customer name"
  }'
```

### WhatsApp template + keep pending + flow on reply

```bash
curl -X POST "https://node.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_your_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "39e2a574-367c-42dd-912b-50d0c385ca9d",
    "customerName": "Customer name",
    "keepPending": true,
    "responseFlowId": "ba9fc9d9-f571-40f8-b868-f9cff5fa040f",
    "whatsappTemplate": {
      "id": "0c77fa03-5429-4831-a495-183f8b5cb368"
    }
  }'
```

### Immediate flow

```bash
curl -X POST "https://node.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_your_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "39e2a574-367c-42dd-912b-50d0c385ca9d",
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
  "responseFlowId": "ba9fc9d9-f571-40f8-b868-f9cff5fa040f",
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
