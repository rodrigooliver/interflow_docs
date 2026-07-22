# Tags do Cliente

Adiciona ou remove tags de um cliente.

## Adicionar tag

```http
POST /api/{organizationId}/customers/{customerId}/tags
```

### Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `tagId` | string (UUID) | Sim | ID da tag |
| `chatId` | string (UUID) | Não | Chat relacionado (auditoria/contexto) |

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/customers/{customerId}/tags" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{ "tagId": "tag-uuid" }'
```

## Remover tag

```http
DELETE /api/{organizationId}/customers/{customerId}/tags/{tagId}
```

Body opcional: `{ "chatId": "..." }`.

```bash
curl -X DELETE "https://v1.api.interflow.chat/api/{organizationId}/customers/{customerId}/tags/{tagId}" \
  -H "x-api-key: ak_sua_api_key"
```

## Resposta

```json
{
  "success": true,
  "data": { }
}
```

## Relacionados

- [CRUD de tags](/api/tags/)
