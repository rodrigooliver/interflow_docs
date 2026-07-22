# Notas do Cliente

Gerencia notas internas vinculadas a um cliente.

## Criar nota

```http
POST /api/{organizationId}/customers/{customerId}/notes
```

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `title` | string | Sim | Título |
| `content` | string | Não | Conteúdo |
| `id` | string (UUID) | Não | ID pré-definido |

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/customers/{customerId}/notes" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "title": "Preferência de contato",
    "content": "Prefere WhatsApp após 18h"
  }'
```

**Sucesso:** `201` com `{ success: true, data: note }`.

## Atualizar nota

```http
PUT /api/{organizationId}/customers/{customerId}/notes/{noteId}
```

Body: `title` (obrigatório), `content` (opcional).

## Excluir nota

```http
DELETE /api/{organizationId}/customers/{customerId}/notes/{noteId}
```

## Erros

| HTTP | Situação |
|------|----------|
| `400` | Título ausente |
| `404` | Nota não encontrada |
