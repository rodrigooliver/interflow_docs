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
| `channelId` | string (UUID) | Sí | ID del canal activo — menú lateral **Canales** (copiar en la tarjeta) |
| `customerId` | string (UUID) | No | Cliente existente — **Clientes** → acciones (⋮) → **Copiar ID**; si se omite, busca/crea automáticamente |
| `customer` | object | Sí* | Datos del cliente. El identificador del chat sale de aquí, según el canal |
| `teamId` | string (UUID) | No | Equipo de la atención — menú **Equipos** (copiar en la tarjeta) |
| `initialMessage` | string \| object | No | Mensaje inicial (texto o medio) |
| `whatsappTemplate` | object | No | Plantilla Meta (solo WhatsApp Oficial) — **Canales** → Plantillas → **Copiar ID** |
| `flowId` | string (UUID) | No | Inicia el flujo **de inmediato** — menú **Flujos** (copiar en la tarjeta) |
| `flowVariables` | array | No | Variables del flujo: `[{ "name": "...", "value": "..." }]` |
| `contextMessage` | string | No | Contexto usado con `flowId` o `responseFlowId` |
| `responseFlowId` | string (UUID) | No | Flujo al responder el cliente — mismo ID en **Flujos** (copiar en la tarjeta) |
| `keepPending` | boolean | No | Si es `true`, mantiene el chat en `pending` aunque haya `initialMessage` / `whatsappTemplate` (no atiende ni autoasigna) |

\*Obligatorio: `channelId` y el campo de `customer` del canal (`whatsapp`/`phone`, `email`, `instagram` o `facebook`).

### `customer`

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | string | Nombre del cliente |
| `whatsapp` | string | Número de WhatsApp. **Obligatorio** en WhatsApp si no viene `phone` |
| `phone` | string | Teléfono. En WhatsApp, se usa si no viene `whatsapp`. Si no, queda como contacto extra |
| `email` | string | Email. **Obligatorio** en canal email. En los demás, contacto extra |
| `instagram` | string | Instagram ID. **Obligatorio** en canal Instagram |
| `facebook` | string | Facebook ID. **Obligatorio** en canal Facebook |
| `document` | string | CPF/CNPJ (u otro documento). Solo se rellena si el cliente aún no tiene documento |
| `salePrice` / `sale_price` | number \| string | Valor de compra/venta (`customers.sale_price`). Solo se rellena si está vacío |
| `tags` | string[] \| string | Nombres de tags (existentes). No crea una tag nueva |
| `customFields` | object \| array | Campos personalizados por **slug**: `{ "inversion": "Hasta 15 mil" }` o `[{ "slug": "inversion", "value": "Hasta 15 mil" }]` |
| `forceUpdate` | object | Qué campos sobrescribir aunque ya tengan valor. Ver la tabla abajo |

### `customer.forceUpdate`

Sin `forceUpdate`, un cliente existente solo rellena lo que esté **vacío**. Marca `true` en los campos que deben sobrescribirse:

| Clave | Efecto |
|-------|--------|
| `name` | Sobrescribe el nombre |
| `email` | Sobrescribe el email principal |
| `phone` | Actualiza el contacto de teléfono existente |
| `whatsapp` | Actualiza el contacto de WhatsApp existente |
| `instagram` | Actualiza el Instagram ID |
| `facebook` | Actualiza el Facebook ID |
| `document` | Sobrescribe el documento |
| `sale_price` | Sobrescribe el valor de compra |
| `customFields` | `true` fuerza todos los slugs enviados; o lista (`["inversion"]`) / slug (`"inversion"`) |

### Identificador por el canal

Interflow lee el destinatario en `customer`, según el tipo de canal:

| Tipo del canal | Campo en `customer` |
|----------------|---------------------|
| `whatsapp_official`, `whatsapp_wapi`, `whatsapp_zapi`, `whatsapp_waha`, `whatsapp_evo` | `whatsapp` (si no, `phone`) |
| `email` | `email` |
| `instagram` | `instagram` |
| `facebook` | `facebook` |

Cliente existente: nombre, email, documento y `customer.customFields` solo rellenan lo vacío (`already_filled`), salvo que `customer.forceUpdate` marque el campo. Contactos extra (teléfono, WhatsApp, Instagram, Facebook) se añaden si aún no existen; con `forceUpdate` se actualiza ese tipo de contacto.

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
    "channelId": "uuid-del-canal",
    "customer": { "whatsapp": "5511999999999" },
    "customerName": "Nombre del cliente"
  }'
```

### Plantilla WhatsApp + mantener pending + flujo al responder

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_tu_api_key" \
  -d '{
    "channelId": "uuid-del-canal",
    "customer": { "whatsapp": "5511999999999" },
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
    "channelId": "uuid-del-canal",
    "customer": { "whatsapp": "5511999999999" },
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
