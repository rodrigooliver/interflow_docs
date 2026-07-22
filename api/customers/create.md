# Criar Cliente

Cria um cliente na organização.

## Endpoint

```http
POST /api/{organizationId}/customers
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

## Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `name` | string | Sim | Nome do cliente |
| `contacts` | array | Condicional | Contatos (`type` + `value`). Obrigatório ter ao menos um contato alcançável (contato ou e-mail) |
| `email` | string | Não | E-mail principal |
| `stageId` | string (UUID) | Não | Estágio do funil CRM |
| `document` | string | Não | Documento (CPF/CNPJ etc.) |
| `country` | string | Não | País |
| `person_type` | string | Não | Tipo de pessoa |
| `salePrice` | number | Não | Valor de venda no estágio |
| `selectedTags` | string[] | Não | IDs de tags |
| `customFields` | array | Não | Campos personalizados na criação |
| `allowDuplicateContacts` | boolean | Não | Se `true`, permite duplicar contatos/documento/e-mail |

### Item de `contacts`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `type` | string | Ex.: `whatsapp`, `phone`, `email`, `instagram`, `facebook`, `telegram` |
| `value` | string | Valor do contato |
| `label` | string | Rótulo opcional |

## Exemplo

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/customers" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "name": "Maria Silva",
    "email": "maria@example.com",
    "contacts": [
      { "type": "whatsapp", "value": "5511999999999" }
    ],
    "stageId": "stage-uuid"
  }'
```

## Resposta

### Sucesso

Cliente criado (`success: true` e dados do cliente).

### Erros

| HTTP | Situação |
|------|----------|
| `400` | Nome ausente / sem contato / estágio inválido |
| `409` | Duplicidade de contato, e-mail ou documento |
| `404` | Organização não encontrada |

## Relacionados

- [Atualizar cliente](/api/customers/update)
- [Criar chat](/api/chats/create) (pode criar cliente automaticamente)
