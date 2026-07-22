# Sequência de Mensagens

Envia até **10 passos** em sequência no mesmo chat (equivalente de atalho via API).

## Endpoint

```http
POST /api/{organizationId}/chat/{chatId}/message-sequence
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

## Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `steps` | array | Sim | 1–10 passos |
| `replyToMessageId` | string (UUID) | Não | Reply apenas no primeiro passo |
| `auxiliaryChannelId` | string (UUID) | Não | Canal auxiliar |

### Item de `steps`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `content` | string | Texto (obrigatório se não houver anexos) |
| `attachment_ids` | string[] | IDs de arquivos da org |
| `url_attachments` | array | Anexos por URL (legado) |
| `delay_after_ms` | number | Delay após o passo (processamento assíncrono) |
| `sign_message` / `signMessage` | boolean | Assinar mensagem (padrão efetivo depende das regras da org) |
| `tempId` | string | ID temporário ecoado na resposta |

Cada passo precisa de `content` ou anexos.

## Exemplo

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/{chatId}/message-sequence" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "steps": [
      { "content": "Olá! Bem-vindo." },
      {
        "content": "Segue nosso catálogo",
        "attachment_ids": ["file-uuid"],
        "delay_after_ms": 1000
      },
      { "content": "Qualquer dúvida, estamos à disposição." }
    ]
  }'
```

## Resposta

### Sucesso (201)

```json
{
  "success": true,
  "sequenceId": "sequence-uuid",
  "messages": [
    { "id": "msg-1", "tempId": null, "sequenceIndex": 0 },
    { "id": "msg-2", "tempId": null, "sequenceIndex": 1 }
  ]
}
```

### Erros

| HTTP | Situação |
|------|----------|
| `400` | `steps` inválido, vazio, > 10, ou passo sem conteúdo/anexo |
| `401` / `403` | Auth / rota indisponível / IP negado |

## Relacionados

- [Atalhos vs API](/api/messages/shortcuts)
- [Enviar mensagem](/api/messages/send)
