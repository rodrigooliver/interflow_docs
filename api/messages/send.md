# Enviar Mensagem

Endpoint para enviar mensagens através da API.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Endpoint

```http
POST /v1/messages/send
```

## Autenticação

Requer API Key com permissão `messages:write`.

```http
Authorization: Bearer sua_api_key
```

## Request

### Headers

| Header | Valor | Obrigatório |
|--------|-------|-------------|
| `Authorization` | `Bearer {api_key}` | Sim |
| `Content-Type` | `application/json` | Sim |

### Body Parameters

| Campo | Tipo | Descrição | Obrigatório |
|-------|------|-----------|-------------|
| `channel_id` | string | UUID do canal | Sim |
| `to` | string | Número/ID do destinatário | Sim |
| `type` | string | Tipo da mensagem | Sim |
| `content` | object | Conteúdo da mensagem | Sim |

### Tipos de Mensagem

| Tipo | Descrição |
|------|-----------|
| `text` | Mensagem de texto |
| `image` | Imagem |
| `video` | Vídeo |
| `audio` | Áudio |
| `document` | Documento |
| `location` | Localização |
| `template` | Template aprovado (WhatsApp Business API) |

## Exemplos

### Mensagem de Texto

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer if_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "Olá! Esta é uma mensagem de teste."
    }
  }'
```

**Response:**

```json
{
  "success": true,
  "data": {
    "id": "msg_abc123xyz",
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "text",
    "status": "sent",
    "content": {
      "text": "Olá! Esta é uma mensagem de teste."
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

### Mensagem com Imagem

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer if_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "image",
    "content": {
      "url": "https://exemplo.com/imagem.jpg",
      "caption": "Confira nossa nova coleção!"
    }
  }'
```

### Mensagem com Documento

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer if_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "document",
    "content": {
      "url": "https://exemplo.com/contrato.pdf",
      "filename": "contrato.pdf",
      "caption": "Segue o contrato em anexo."
    }
  }'
```

### Mensagem com Localização

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer if_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "location",
    "content": {
      "latitude": -23.5505,
      "longitude": -46.6333,
      "name": "Escritório Central",
      "address": "Av. Paulista, 1000 - São Paulo"
    }
  }'
```

### Template de Mensagem (WhatsApp Business API)

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer if_live_abc123" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "template",
    "content": {
      "name": "order_confirmation",
      "language": "pt_BR",
      "components": [
        {
          "type": "body",
          "parameters": [
            { "type": "text", "text": "João" },
            { "type": "text", "text": "12345" }
          ]
        }
      ]
    }
  }'
```

## Response

### Sucesso (201)

```json
{
  "success": true,
  "data": {
    "id": "msg_abc123xyz",
    "channel_id": "550e8400-e29b-41d4-a716-446655440000",
    "to": "5511999999999",
    "type": "text",
    "status": "sent",
    "content": {
      "text": "Mensagem enviada"
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

### Status da Mensagem

| Status | Descrição |
|--------|-----------|
| `pending` | Aguardando envio |
| `sent` | Enviada ao provedor |
| `delivered` | Entregue ao destinatário |
| `read` | Lida pelo destinatário |
| `failed` | Falha no envio |

## Erros

### 400 Bad Request

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Campo 'to' é obrigatório",
    "details": [
      {
        "field": "to",
        "message": "Campo obrigatório"
      }
    ]
  }
}
```

### 404 Not Found

```json
{
  "success": false,
  "error": {
    "code": "CHANNEL_NOT_FOUND",
    "message": "Canal não encontrado"
  }
}
```

### 422 Unprocessable Entity

```json
{
  "success": false,
  "error": {
    "code": "CHANNEL_DISCONNECTED",
    "message": "O canal está desconectado"
  }
}
```

## Webhooks

Quando o status da mensagem muda, um webhook é disparado:

```json
{
  "event": "message.status_updated",
  "data": {
    "message_id": "msg_abc123xyz",
    "status": "delivered",
    "timestamp": "2024-01-15T10:30:05Z"
  }
}
```

## Rate Limiting

| Plano | Limite |
|-------|--------|
| Starter | 60 mensagens/min |
| Professional | 300 mensagens/min |
| Enterprise | 1000 mensagens/min |

## Próximos Passos

- [Mensagens em Massa](/api/mensagens/massa)
- [Templates](/api/mensagens/templates)
- [Webhooks](/api/webhooks/configuracao)

