# API Reference

Bem-vindo à documentação da API da Interflow para integrações com API Key.

Veja o [inventário de endpoints](/api/status) disponíveis.

## Base URL

```
https://v1.api.interflow.chat
```

## Autenticação

Inclua sua API Key em todas as requisições:

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "x-api-key: ak_sua_api_key_aqui" \
  -H "Content-Type: application/json" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal"
  }'
```

Também é aceito `Authorization: Bearer ak_...`.

Veja [Autenticação](/api/authentication).

### Obtendo sua API Key e IDs

1. **Configurações** → **API Keys** — gere a chave e copie o **Organization ID**
2. Menu lateral **Canais** — copie o **ID do canal** no card; em canal WhatsApp Oficial → **Templates** para o ID do template
3. Menu **Equipes**, **Fluxos** e **Clientes** — copie `teamId`, `flowId` / `responseFlowId` e `customerId` (nos cards ou no menu de ações)
4. Guarde a API Key em local seguro (ela é exibida só na criação)

Detalhes em [Autenticação → Onde encontrar os IDs](/api/authentication#onde-encontrar-os-ids).

::: danger IMPORTANTE
Nunca exponha a API Key em código frontend ou repositórios públicos.
:::

## Formato de resposta

Respostas em JSON. O formato exato varia por endpoint; erros comuns incluem `error` (string) e opcionalmente `code` / `requestId`.

Exemplo de erro de rota não pública:

```json
{
  "error": "This route is not available for API Key authentication",
  "code": "API_KEY_ROUTE_DENIED",
  "requestId": "..."
}
```

## Rate limiting

| Plano | Limite |
|-------|--------|
| Starter | 60 req/min |
| Professional | 300 req/min |
| Enterprise | 1000 req/min |

Headers: `X-RateLimit-Limit`, `X-RateLimit-Remaining`, `X-RateLimit-Reset`.

## Endpoints documentados

### Principal: criar atendimento e enviar em uma chamada

Na maioria das integrações, comece por **[Criar chat](/api/chats/create)**. Ele cria (ou reutiliza) o atendimento e já aceita `initialMessage` e/ou `whatsappTemplate` na mesma requisição — sem precisar chamar depois as rotas de mensagem ou template.

Use [enviar mensagem](/api/messages/send) e [enviar template](/api/chats/send-template) quando o chat **já existir** e você quiser continuar a conversa.

### Chats

| Método | Endpoint | Doc |
|--------|----------|-----|
| `POST` | `/api/{organizationId}/chat/create` | [Criar chat](/api/chats/create) (recomendado) |
| `POST` | `/api/{organizationId}/chat/{chatId}/send-template` | [Enviar template](/api/chats/send-template) |

### Mensagens

| Método | Endpoint | Doc |
|--------|----------|-----|
| `POST` | `/api/{organizationId}/chat/{chatId}/message` | [Enviar mensagem](/api/messages/send) |
| `POST` | `/api/{organizationId}/chat/{chatId}/message-sequence` | [Sequência](/api/messages/sequence) |
| — | Atalhos e sequências | [Atalhos](/api/messages/shortcuts) |

### Clientes

| Método | Endpoint | Doc |
|--------|----------|-----|
| `POST` | `/api/{organizationId}/customers` | [Criar](/api/customers/create) |
| `PUT` | `/api/{organizationId}/customers/{customerId}` | [Atualizar](/api/customers/update) |
| `POST` / `DELETE` | `.../tags` | [Tags do cliente](/api/customers/tags) |
| `POST` / `PUT` / `DELETE` | `.../notes` | [Notas](/api/customers/notes) |
| `PUT` | `.../stage` | [Estágio](/api/customers/stage) |
| `POST` | `.../field-values` | [Campos personalizados](/api/customers/field-values) |

### Tags

| Método | Endpoint | Doc |
|--------|----------|-----|
| `GET` / `POST` / `PUT` / `DELETE` | `/api/{organizationId}/tags` | [Tags](/api/tags/) |

Inventário completo: [Inventário da API](/api/status).

## Seções

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/api/chats/create" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">💬</span>
    <h4 style="margin: 8px 0 4px 0;">Criar Chat</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Principal: atendimento + mensagem/template em uma chamada</p>
  </div>
</a>

<a href="/api/messages/send" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">✉️</span>
    <h4 style="margin: 8px 0 4px 0;">Mensagens</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Enviar texto, mídia e sequências</p>
  </div>
</a>

<a href="/api/customers/create" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">👤</span>
    <h4 style="margin: 8px 0 4px 0;">Clientes</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">CRM via API Key</p>
  </div>
</a>

</div>
