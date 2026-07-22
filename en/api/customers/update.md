# Atualizar Cliente

Atualiza dados de um cliente existente.

## Endpoint

```http
PUT /api/{organizationId}/customers/{customerId}
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

## Body

Envie os campos a atualizar (parcial). Campos comuns:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `name` | string | Nome |
| `email` | string | E-mail principal |
| `contacts` | array | Lista de contatos (substitui/sincroniza conforme handler) |
| `document` | string | Documento |
| `selectedTags` | string[] | Tags |
| `customFields` | array | Campos personalizados |
| `allowDuplicateContacts` | boolean | Permitir duplicidade |

## Exemplo

```bash
curl -X PUT "https://v1.api.interflow.chat/api/{organizationId}/customers/{customerId}" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "name": "Maria Silva Santos",
    "contacts": [
      { "type": "whatsapp", "value": "5511999999999" },
      { "type": "email", "value": "maria@example.com" }
    ]
  }'
```

## Resposta

### Sucesso (200)

```json
{
  "success": true,
  "data": { },
  "message": "Cliente atualizado com sucesso"
}
```

### Erros

| HTTP | Situação |
|------|----------|
| `400` | Validação |
| `404` | Cliente não encontrado |
| `409` | Conflito de duplicidade |

## Relacionados

- [Criar cliente](/api/customers/create)
- [Estágio CRM](/api/customers/stage)
- [Campos personalizados](/api/customers/field-values)
