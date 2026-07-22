# Inventário da API

Lista dos endpoints disponíveis com **API Key**.

Rotas não listadas aqui retornam `403` com código `API_KEY_ROUTE_DENIED`.

**Base URL:** `https://v1.api.interflow.chat`

## Endpoints disponíveis

### Chat

| Método | Path | Doc |
|--------|------|-----|
| `POST` | `/api/{organizationId}/chat/create` | [Criar chat](/api/chats/create) |
| `POST` | `/api/{organizationId}/chat/{chatId}/message` | [Enviar mensagem](/api/messages/send) |
| `POST` | `/api/{organizationId}/chat/{chatId}/message-sequence` | [Sequência](/api/messages/sequence) |
| `POST` | `/api/{organizationId}/chat/{chatId}/send-template` | [Template WhatsApp](/api/chats/send-template) |

### Customers

| Método | Path | Doc |
|--------|------|-----|
| `POST` | `/api/{organizationId}/customers` | [Criar cliente](/api/customers/create) |
| `PUT` | `/api/{organizationId}/customers/{customerId}` | [Atualizar cliente](/api/customers/update) |
| `POST` | `/api/{organizationId}/customers/{customerId}/tags` | [Tags do cliente](/api/customers/tags) |
| `DELETE` | `/api/{organizationId}/customers/{customerId}/tags/{tagId}` | [Tags do cliente](/api/customers/tags) |
| `POST` | `/api/{organizationId}/customers/{customerId}/notes` | [Notas](/api/customers/notes) |
| `PUT` | `/api/{organizationId}/customers/{customerId}/notes/{noteId}` | [Notas](/api/customers/notes) |
| `DELETE` | `/api/{organizationId}/customers/{customerId}/notes/{noteId}` | [Notas](/api/customers/notes) |
| `PUT` | `/api/{organizationId}/customers/{customerId}/stage` | [Estágio CRM](/api/customers/stage) |
| `POST` | `/api/{organizationId}/customers/{customerId}/field-values` | [Campos personalizados](/api/customers/field-values) |

### Tags

| Método | Path | Doc |
|--------|------|-----|
| `GET` | `/api/{organizationId}/tags` | [Tags](/api/tags/) |
| `POST` | `/api/{organizationId}/tags` | [Tags](/api/tags/) |
| `PUT` | `/api/{organizationId}/tags/{tagId}` | [Tags](/api/tags/) |
| `DELETE` | `/api/{organizationId}/tags/{tagId}` | [Tags](/api/tags/) |

## Atalhos de mensagem

Não há endpoint para criar/editar atalhos. Para enviar várias mensagens em ordem, use [sequência de mensagens](/api/messages/sequence). Veja também [Atalhos e sequências](/api/messages/shortcuts).

## Em breve

Endpoints previstos para versões futuras:

- `POST .../chat/{chatId}/resolve`
- `POST .../chat/{chatId}/reopen`
- `POST .../chat/{chatId}/transfer-to-team`
- `POST .../chat/{chatId}/transfer-to-agent`
- `POST .../chat/{chatId}/attend`
- `POST .../chat/{chatId}/start-flow`
