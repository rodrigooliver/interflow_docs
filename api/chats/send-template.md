# Enviar Template WhatsApp

Envia um template aprovado da Meta em um **chat já existente** (canal WhatsApp Oficial).

::: tip PRECISA CRIAR O ATENDIMENTO?
Se ainda não há chat, use [Criar chat](/api/chats/create) com `whatsappTemplate` e faça criação + envio do template em **uma só requisição**. Este endpoint é para enviar template em um chat que já existe.
:::

## Endpoint

```http
POST /api/{organizationId}/chat/{chatId}/send-template
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

## Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `templateId` | string (UUID) | Sim | ID do template WhatsApp na organização |
| `variables` | object \| array | Não | Variáveis do template |
| `tempId` | string | Não | ID temporário do cliente |

## Exemplo

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/{chatId}/send-template" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "templateId": "0c77fa03-5429-4831-a495-183f8b5cb368",
    "variables": {
      "1": "Maria"
    }
  }'
```

## Resposta

### Sucesso (200)

```json
{
  "success": true,
  "messageId": "message-uuid"
}
```

### Erro

```json
{
  "error": "descrição do erro"
}
```

| HTTP | Situação |
|------|----------|
| `4xx` | Template inválido, canal incompatível, chat inexistente |
| `401` / `403` | Auth / rota indisponível / IP negado |

## Relacionados

- [Criar chat](/api/chats/create)
- [Enviar mensagem](/api/messages/send)
