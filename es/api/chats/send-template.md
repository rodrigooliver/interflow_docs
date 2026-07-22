# Enviar Template WhatsApp

Envia um template aprovado da Meta em um chat existente (canal WhatsApp Oficial).

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
| `templateId` | string (UUID) | Sí | ID Interflow de la plantilla — **Canales** → canal → **Plantillas de WhatsApp** → **Copiar ID** |
| `variables` | object \| array | Não | Variáveis do template |
| `tempId` | string | Não | ID temporário do cliente |

## Exemplo

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/{chatId}/send-template" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "templateId": "uuid-de-la-plantilla",
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

::: tip CRIAR CHAT COM TEMPLATE
Também é possível enviar template na criação do atendimento via [`whatsappTemplate` em Criar Chat](/api/chats/create).
:::

## Relacionados

- [Criar chat](/api/chats/create)
- [Enviar mensagem](/api/messages/send)
