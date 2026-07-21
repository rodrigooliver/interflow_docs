# API Reference

Bem-vindo à documentação da API da Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua. Novos endpoints são documentados regularmente.
:::

## Visão Geral

A API da Interflow permite que você integre e automatize funcionalidades da plataforma em suas aplicações.

### Base URL

```
https://node.interflow.chat
```

## Autenticação

A API utiliza **API Keys** para autenticação. Inclua sua chave no header de todas as requisições:

```bash
curl -X POST "https://node.interflow.chat/api/{organizationId}/chat/create" \
  -H "x-api-key: ak_sua_api_key_aqui" \
  -H "Content-Type: application/json" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal"
  }'
```

### Obtendo sua API Key

1. Acesse **Configurações** → **API Keys**
2. Clique em **"Gerar nova chave"**
3. Dê um nome descritivo
4. Copie e guarde em local seguro

::: danger IMPORTANTE
Sua API Key é secreta. Nunca exponha em código frontend ou repositórios públicos.
:::

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Gerenciamento de API Keys</p>
</div>

## Formato de Resposta

Todas as respostas são em JSON:

### Sucesso

```json
{
  "success": true,
  "data": {
    // dados da resposta
  },
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 100
  }
}
```

### Erro

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "O campo 'email' é obrigatório",
    "details": [
      {
        "field": "email",
        "message": "Campo obrigatório"
      }
    ]
  }
}
```

## Rate Limiting

A API possui limites de requisições por minuto:

| Plano | Limite |
|-------|--------|
| Starter | 60 req/min |
| Professional | 300 req/min |
| Enterprise | 1000 req/min |

Headers de resposta indicam seu limite:

```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 298
X-RateLimit-Reset: 1640995200
```

## Endpoints Principais

### Chats

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/api/{organizationId}/chat/create` | [Criar chat](/api/chats/create) |

<!-- Temporariamente oculto — reativar quando a doc de mensagens estiver pronta
### Mensagens

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/messages/send` | Enviar mensagem |
| `POST` | `/messages/bulk` | Enviar em massa |
| `GET` | `/messages/:id` | Buscar mensagem |

## Exemplo: Enviar Mensagem

### Request

```bash
curl -X POST "https://api.interflow.chat/v1/messages/send" \
  -H "Authorization: Bearer sua_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "channel_id": "uuid-do-canal",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "Olá! Esta é uma mensagem via API."
    }
  }'
```
-->

## Seções da API

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/api/chats/create" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">💬</span>
    <h4 style="margin: 8px 0 4px 0;">Criar Chat</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Iniciar atendimento via API</p>
  </div>
</a>

</div>

