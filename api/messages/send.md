# Enviar Mensagem

Envia uma mensagem (texto e/ou anexos) em um **chat já existente**.

::: tip PRECISA CRIAR O ATENDIMENTO?
Se ainda não há chat, use [Criar chat](/api/chats/create) com `initialMessage` e faça criação + envio em **uma só requisição**. Este endpoint é para continuar a conversa depois.
:::

## Endpoint

```http
POST /api/{organizationId}/chat/{chatId}/message
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

ou `Authorization: Bearer ak_sua_api_key`

## Parâmetros

### URL

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `organizationId` | string (UUID) | Sim | ID da organização |
| `chatId` | string (UUID) | Sim | ID do chat |

### Body

Aceita `application/json` ou `multipart/form-data` (útil para upload de arquivos).

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `content` | string | Condicional | Texto da mensagem (obrigatório se não houver anexos) |
| `replyToMessageId` | string (UUID) | Não | Mensagem respondida |
| `signMessage` | boolean \| string | Não | Em multipart, use `"true"` / `"false"` |
| `scheduledFor` | string (ISO) | Não | Agendar envio |
| `attachment_ids` | string[] \| string | Não | IDs de arquivos já existentes na org |
| `url_attachments` | array \| string | Não | Anexos por URL (legado; preferir `attachment_ids`) |
| `contacts` | array \| string | Não | Contatos compartilhados (JSON se multipart) |
| `metadata` | object \| string | Não | Metadados extras (JSON se multipart) |
| `auxiliaryChannelId` | string (UUID) | Não | Canal auxiliar para envio |
| arquivos | file | Não | Em multipart: campos de arquivo para upload |

## Exemplos

### Texto (JSON)

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/{chatId}/message" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "content": "Olá! Segue a confirmação do seu pedido."
  }'
```

### Com attachment_ids

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/{chatId}/message" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "content": "Segue o documento",
    "attachment_ids": ["file-uuid-1"]
  }'
```

## Resposta

### Sucesso (201)

```json
{
  "success": true,
  "messages": [
    {
      "id": "message-uuid",
      "content": "Olá! Segue a confirmação do seu pedido.",
      "chat_id": "chat-uuid"
    }
  ]
}
```

### Erros comuns

| HTTP | Situação |
|------|----------|
| `400` | Sem conteúdo nem anexos / payload inválido |
| `401` | API Key inválida |
| `403` | Rota negada / IP negado / assinatura inativa |
| `404` | Chat não encontrado |

## Relacionados

- [Sequência de mensagens](/api/messages/sequence) (atalhos via API)
- [Criar chat](/api/chats/create)
- [Template WhatsApp](/api/chats/send-template)
