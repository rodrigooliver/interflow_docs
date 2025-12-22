# API Reference

Bem-vindo à documentação da API da Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua. Novos endpoints são documentados regularmente.
:::

## Visão Geral

A API da Interflow permite que você integre e automatize funcionalidades da plataforma em suas aplicações.

### Base URL

```
https://api.interflow.chat/v1
```

### Ambientes

| Ambiente | URL |
|----------|-----|
| Produção | `https://api.interflow.chat/v1` |
| Sandbox | `https://sandbox.api.interflow.chat/v1` |

## Autenticação

A API utiliza **API Keys** para autenticação. Inclua sua chave no header de todas as requisições:

```bash
curl -X GET "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer sua_api_key_aqui" \
  -H "Content-Type: application/json"
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

### Mensagens

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `POST` | `/messages/send` | Enviar mensagem |
| `POST` | `/messages/bulk` | Enviar em massa |
| `GET` | `/messages/:id` | Buscar mensagem |

### Clientes

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/customers` | Listar clientes |
| `POST` | `/customers` | Criar cliente |
| `GET` | `/customers/:id` | Buscar cliente |
| `PUT` | `/customers/:id` | Atualizar cliente |
| `DELETE` | `/customers/:id` | Excluir cliente |

### Chats

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/chats` | Listar chats |
| `POST` | `/chats` | Criar chat |
| `GET` | `/chats/:id` | Buscar chat |
| `GET` | `/chats/:id/messages` | Mensagens do chat |

### Webhooks

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/webhooks` | Listar webhooks |
| `POST` | `/webhooks` | Criar webhook |
| `DELETE` | `/webhooks/:id` | Excluir webhook |

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

### Response

```json
{
  "success": true,
  "data": {
    "id": "msg_abc123",
    "status": "sent",
    "channel_id": "uuid-do-canal",
    "to": "5511999999999",
    "type": "text",
    "content": {
      "text": "Olá! Esta é uma mensagem via API."
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## Exemplo: Criar Cliente

### Request

```bash
curl -X POST "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer sua_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "5511999999999",
    "tags": ["vip", "newsletter"],
    "custom_fields": {
      "empresa": "Empresa XYZ",
      "cargo": "Gerente"
    }
  }'
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "cust_xyz789",
    "name": "João Silva",
    "email": "joao@email.com",
    "phone": "5511999999999",
    "tags": ["vip", "newsletter"],
    "custom_fields": {
      "empresa": "Empresa XYZ",
      "cargo": "Gerente"
    },
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

## SDKs e Bibliotecas

::: info EM DESENVOLVIMENTO
SDKs oficiais estão em desenvolvimento:

- **Node.js/JavaScript** - Em breve
- **Python** - Em breve
- **PHP** - Em breve
:::

## Seções da API

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/api/mensagens/enviar" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">💬</span>
    <h4 style="margin: 8px 0 4px 0;">Mensagens</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Envio e gerenciamento</p>
  </div>
</a>

<a href="/api/clientes/listar" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">👥</span>
    <h4 style="margin: 8px 0 4px 0;">Clientes</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">CRUD de clientes</p>
  </div>
</a>

<a href="/api/webhooks/configuracao" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">🔗</span>
    <h4 style="margin: 8px 0 4px 0;">Webhooks</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Eventos em tempo real</p>
  </div>
</a>

</div>

