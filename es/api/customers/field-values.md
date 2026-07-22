# Campos Personalizados do Cliente

Define ou atualiza o valor de um campo personalizado do cliente.

## Endpoint

```http
POST /api/{organizationId}/customers/{customerId}/field-values
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

## Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `slug` | string | Condicional | Slug do campo (obrigatório se não enviar `field_definition_id`) |
| `field_definition_id` | string (UUID) | Condicional | ID da definição do campo |
| `value` | any | Sim | Valor (validado conforme o tipo do campo) |

## Exemplo

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/customers/{customerId}/field-values" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "slug": "cidade",
    "value": "São Paulo"
  }'
```

## Resposta

### Sucesso

```json
{
  "success": true,
  "data": { }
}
```

### Erros

| HTTP | Situação |
|------|----------|
| `400` | `slug`/`field_definition_id` ou `value` ausente / valor inválido para o tipo |
| `404` | Cliente ou campo não encontrado |

::: tip
Nesta versão a API permite definir **valores** de campos no cliente. A gestão das definições dos campos não está disponível por API.
:::
