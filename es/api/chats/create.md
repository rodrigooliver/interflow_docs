# Crear Chat

Crea una nueva atención (o reutiliza un chat activo) para un contacto y canal.

## Endpoint

```http
POST /api/{organizationId}/chat/create
```

**URL base:** `https://v1.api.interflow.chat`

## Autenticación

API Key en el header (uno de los formatos):

```http
x-api-key: ak_tu_api_key
```

o

```http
Authorization: Bearer ak_tu_api_key
```

## Parámetros

### URL

| Parámetro | Tipo | Obligatorio | Descripción |
|-----------|------|-------------|-------------|
| `organizationId` | string (UUID) | Sí | ID de la organización |

### Body

| Campo | Tipo | Obligatorio | Descripción |
|-------|------|-------------|-------------|
| `contactType` | string | Sí | `whatsapp`, `phone`, `email`, `instagram`, `facebook` o `telegram` |
| `contactValue` | string | Sí | Valor del contacto (número, email, username, etc.) |
| `channelId` | string (UUID) | Sí | ID del canal activo — menú lateral **Canales** (copiar en la tarjeta) |
| `customerId` | string (UUID) | No | Cliente existente — **Clientes** → acciones (⋮) → **Copiar ID**; si se omite, busca/crea automáticamente |
| `customerName` | string | No | Nombre al crear un cliente nuevo |
| `teamId` | string (UUID) | No | Equipo de la atención — menú **Equipos** (copiar en la tarjeta) |
| `initialMessage` | string \| object | No | Mensaje inicial (texto o medio) |
| `whatsappTemplate` | object | No | Plantilla Meta (solo WhatsApp Oficial) — **Canales** → Plantillas → **Copiar ID** |
| `flowId` | string (UUID) | No | Inicia el flujo **de inmediato** — menú **Flujos** (copiar en la tarjeta) |
| `flowVariables` | array | No | Variables del flujo: `[{ "name": "...", "value": "..." }]` |
| `contextMessage` | string | No | Contexto usado con `flowId` o `responseFlowId` |
| `responseFlowId` | string (UUID) | No | Flujo al responder el cliente — mismo ID en **Flujos** (copiar en la tarjeta) |
| `keepPending` | boolean | No | Si es `true`, mantiene el chat en `pending` aunque haya `initialMessage` / `whatsappTemplate` (no atiende ni autoasigna) |

### `initialMessage`

Cadena (texto) u objeto:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `type` | string | `text`, `image`, `video`, `audio` o `document` |
| `content` | string | Texto (obligatorio si `type` = `text`) o leyenda |
| `url` | string | URL HTTPS del medio (obligatorio para tipos de medio) |
| `name` | string | Nombre del archivo (opcional) |
| `mimetype` | string | MIME type (opcional) |
| `forward` | object | Metadatos de reenvío (opcional) |

### `whatsappTemplate`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `id` o `templateId` | string (UUID) | ID Interflow de la plantilla — **Canales** → canal → **Plantillas de WhatsApp** → **Copiar ID** |
| `variables` | object \| array | Variables de la plantilla (opcional) |

::: tip ETAPA DEL CLIENTE
Al crear un **cliente nuevo**, el sistema usa la etapa predeterminada del canal (`settings.defaultStageId`), si es válida.
:::

## Comportamiento

- Si ya existe un chat activo (`pending`, `in_progress` o `await_closing`) para el mismo contacto/canal, se reutiliza (`existing: true`).
- Sin `keepPending`, enviar `initialMessage` o `whatsappTemplate` suele atender el chat (`in_progress`) o añadirte como colaborador.
- Con `keepPending: true`, se envía el mensaje/plantilla y el chat permanece `pending` (también omite autoasignación al crear).
- `flowId` y `responseFlowId` son independientes: el primero inicia al momento; el segundo espera la respuesta del cliente.

## Ejemplos

### Creación básica

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_tu_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-del-canal",
    "customerName": "Nombre del cliente"
  }'
```

### Plantilla WhatsApp + mantener pending + flujo al responder

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_tu_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-del-canal",
    "customerName": "Nombre del cliente",
    "keepPending": true,
    "responseFlowId": "uuid-del-flujo",
    "whatsappTemplate": {
      "id": "uuid-de-la-plantilla"
    }
  }'
```

### Flujo inmediato

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_tu_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-del-canal",
    "flowId": "flow-uuid",
    "contextMessage": "¡Bienvenido!",
    "flowVariables": [
      { "name": "origen", "value": "api" }
    ]
  }'
```

## Respuesta

### Éxito (200)

```json
{
  "success": true,
  "chatId": "chat-uuid",
  "formattedContact": "5511999999999",
  "existing": false,
  "flowInitiated": false,
  "keepPending": true,
  "responseFlowScheduled": true,
  "responseFlowId": "uuid-del-flujo",
  "responseFlowName": "Nombre del flujo",
  "templateSent": true,
  "templateMessageId": "message-uuid"
}
```

### Errores comunes

| HTTP | Situación |
|------|-----------|
| `400` | Parámetros inválidos / plantilla en canal no oficial |
| `404` | Canal inactivo o `responseFlowId` inexistente |
| `401` | API Key inválida |

## Próximos pasos

- [Autenticación](/es/api/authentication)
