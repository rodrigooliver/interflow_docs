# Tags

CRUD de tags da organização (API pública).

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

::: tip
O perfil dono da API Key precisa ser membro da organização (os handlers validam membership).
:::

## Listar

```http
GET /api/{organizationId}/tags
```

```bash
curl "https://v1.api.interflow.chat/api/{organizationId}/tags" \
  -H "x-api-key: ak_sua_api_key"
```

```json
{
  "success": true,
  "data": [
    { "id": "tag-uuid", "name": "VIP", "color": "#FF0000" }
  ]
}
```

## Criar

```http
POST /api/{organizationId}/tags
```

| Campo | Tipo | Obrigatório |
|-------|------|-------------|
| `name` | string | Sim |
| `color` | string | Sim |

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/tags" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{ "name": "VIP", "color": "#FF0000" }'
```

## Atualizar

```http
PUT /api/{organizationId}/tags/{tagId}
```

Body: `name` e/ou `color` conforme o handler.

## Excluir

```http
DELETE /api/{organizationId}/tags/{tagId}
```

## Relacionados

- [Tags no cliente](/api/customers/tags)
