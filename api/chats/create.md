# Criar Chat

Cria um novo atendimento (ou reutiliza um chat ativo existente) para um contato e canal.

::: tip ENDPOINT PRINCIPAL
Este é um dos endpoints **mais importantes** da API. Além de criar (ou reutilizar) o chat, na **mesma requisição** você já pode:

- enviar uma mensagem inicial (`initialMessage`)
- enviar um template WhatsApp (`whatsappTemplate`)
- iniciar um fluxo (`flowId`) ou agendar fluxo na resposta (`responseFlowId`)

Existem rotas separadas para [enviar mensagem](/api/messages/send) e [enviar template](/api/chats/send-template) em um chat já existente — use-as quando o chat já foi criado. Para o caso mais comum (abrir atendimento e falar com o contato), prefira **Criar Chat** e faça tudo em uma única chamada.
:::

## Endpoint

```http
POST /api/{organizationId}/chat/create
```

**Base URL:** `https://v1.api.interflow.chat`

## Autenticação

API Key no header (um dos formatos):

```http
x-api-key: ak_sua_api_key
```

ou

```http
Authorization: Bearer ak_sua_api_key
```

## Parâmetros

### URL

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `organizationId` | string (UUID) | Sim | ID da organização — em **Configurações** → **API Keys** |

### Body

| Campo | Tipo | Obrigatório | Descrição |
|-------|------|-------------|-----------|
| `contactType` | string | Sim | `whatsapp`, `phone`, `email`, `instagram`, `facebook` ou `telegram` |
| `contactValue` | string | Sim | Valor do contato (número, e-mail, username, etc.) |
| `channelId` | string (UUID) | Sim | ID do canal ativo — menu lateral **Canais** (copiar no card) |
| `customerId` | string (UUID) | Não | Cliente existente — **Clientes** → ações (⋮) → **Copiar ID**; se omitido, busca/cria automaticamente |
| `customerName` | string | Não | Nome ao criar um cliente novo |
| `teamId` | string (UUID) | Não | Equipe do atendimento — menu **Equipes** (copiar no card) |
| `initialMessage` | string \| object | Não | Mensagem inicial (texto ou mídia) |
| `whatsappTemplate` | object | Não | Template Meta (somente canal WhatsApp Oficial) — **Canais** → Templates → **Copiar ID** |
| `flowId` | string (UUID) | Não | Inicia o fluxo **imediatamente** — menu **Fluxos** (copiar no card) |
| `flowVariables` | array | Não | Variáveis do fluxo: `[{ "name": "...", "value": "..." }]` |
| `contextMessage` | string | Não | Contexto usado com `flowId` ou `responseFlowId` |
| `responseFlowId` | string (UUID) | Não | Fluxo ao responder o cliente — mesmo ID em **Fluxos** (copiar no card) |
| `keepPending` | boolean | Não | Se `true`, mantém o chat em `pending` mesmo com `initialMessage` / `whatsappTemplate` (não atende nem auto-atribui) |

### `initialMessage`

String (texto) ou objeto:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `type` | string | `text`, `image`, `video`, `audio` ou `document` |
| `content` | string | Texto (obrigatório se `type` = `text`) ou legenda |
| `url` | string | URL HTTPS da mídia (obrigatório para tipos de mídia) |
| `name` | string | Nome do arquivo (opcional) |
| `mimetype` | string | MIME type (opcional) |
| `forward` | object | Metadados de encaminhamento (opcional) |

### `whatsappTemplate`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` ou `templateId` | string (UUID) | ID Interflow do template — **Canais** → canal → **Templates do WhatsApp** → **Copiar ID** |
| `variables` | object \| array | Variáveis do template (opcional) |

::: tip ESTÁGIO DO CLIENTE
Ao criar um **cliente novo**, o sistema usa o estágio padrão configurado no canal (`settings.defaultStageId`), se válido.
:::

## Comportamento

- Se já existir chat ativo (`pending`, `in_progress` ou `await_closing`) para o mesmo contato/canal, ele é reutilizado (`existing: true`).
- Sem `keepPending`, enviar `initialMessage` ou `whatsappTemplate` tende a atender o chat (`in_progress`) ou adicionar colaborador.
- Com `keepPending: true`, a mensagem/template é enviada e o chat permanece `pending` (também ignora auto-assign na criação).
- `flowId` e `responseFlowId` são independentes: o primeiro inicia na hora; o segundo aguarda a resposta do cliente.

## Exemplos

### Criação básica

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal",
    "customerName": "Nome do cliente"
  }'
```

### Template WhatsApp + manter pending + fluxo ao responder

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal",
    "customerName": "Nome do cliente",
    "keepPending": true,
    "responseFlowId": "uuid-do-fluxo",
    "whatsappTemplate": {
      "id": "uuid-do-template"
    }
  }'
```

### Mensagem inicial (texto)

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal",
    "initialMessage": "Olá! Como posso ajudar?"
  }'
```

### Fluxo imediato

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal",
    "flowId": "flow-uuid",
    "contextMessage": "Bem-vindo!",
    "flowVariables": [
      { "name": "origem", "value": "api" }
    ]
  }'
```

## Resposta

### Sucesso (200)

```json
{
  "success": true,
  "chatId": "chat-uuid",
  "formattedContact": "5511999999999",
  "existing": false,
  "flowInitiated": false,
  "keepPending": true,
  "responseFlowScheduled": true,
  "responseFlowId": "uuid-do-fluxo",
  "responseFlowName": "Nome do fluxo",
  "templateSent": true,
  "templateMessageId": "message-uuid"
}
```

| Campo | Descrição |
|-------|-----------|
| `chatId` | ID do chat criado ou reutilizado |
| `formattedContact` | Contato formatado pelo sistema |
| `existing` | `true` se reutilizou chat ativo |
| `flowInitiated` | `true` se `flowId` foi solicitado |
| `keepPending` | Eco do `keepPending` enviado |
| `responseFlowScheduled` | `true` se `responseFlowId` foi configurado |
| `templateSent` / `initialMessageSent` | Resultado do envio (quando aplicável) |
| `templateError` / `initialMessageError` | Erro de envio sem falhar a criação do chat |

### Erros comuns

| HTTP | Situação |
|------|----------|
| `400` | Parâmetros inválidos / template em canal não oficial |
| `404` | Canal inativo ou `responseFlowId` inexistente |
| `401` | API Key inválida |

```json
{
  "success": false,
  "error": "Parâmetros obrigatórios: contactType, contactValue, channelId"
}
```

## Próximos passos

- [Enviar mensagem](/api/messages/send)
- [Sequência / atalhos](/api/messages/sequence)
- [Template WhatsApp](/api/chats/send-template)
- [Autenticação](/api/authentication)
- [Inventário da API](/api/status)

