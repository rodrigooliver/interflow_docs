# Atualizar Estágio do Cliente

Move o cliente no funil CRM (ou remove do funil).

## Endpoint

```http
PUT /api/{organizationId}/customers/{customerId}/stage
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

```http
x-api-key: ak_sua_api_key
```

## Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `stageId` | string (UUID) \| `null` | Sim | Novo estágio; `null` remove do funil |
| `stageOrder` | number \| null | Não | Ordem no estágio |
| `notes` | string | Não | Observação da mudança |
| `chatId` | string (UUID) | Não | Chat de contexto |

## Exemplo

```bash
curl -X PUT "https://v1.api.interflow.chat/api/{organizationId}/customers/{customerId}/stage" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "stageId": "stage-uuid",
    "notes": "Qualificado via API"
  }'
```

## Resposta

### Sucesso (200)

```json
{
  "success": true,
  "message": "...",
  "data": { }
}
```

### Erros

| HTTP | Situação |
|------|----------|
| `400` | `stageId` ausente no body / estágio inválido |
