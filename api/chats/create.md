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
| `utm` | object | Não | Atribuição UTM / Facebook Lead Ads (Make). Gravado em `customers.utm_metadata` |
| `customFields` | object \| array | Não | Custom fields do customer por **slug**: `{ "investimento": "Até 15 mil" }` ou `[{ "slug": "investimento", "value": "Até 15 mil" }]` |
| `tags` | string[] \| string | Não | Nomes das tags do customer (cadastro ou existente). Não cria tag nova |
| `email` | string | Não | E-mail extra (se diferente do `contactValue`). Preenche `customers.email` se vazio; senão vira contato secundário |
| `phone` | string | Não | Telefone extra (se diferente do WhatsApp/`contactValue`). Gravado como contato `phone` |

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

### `utm` (Make / Facebook Lead Ads)

Pode ser o **bundle inteiro** do módulo *Facebook Lead Ads — New Lead* no Make, ou um objeto já mapeado. Não crie uma coluna nova: o Interflow grava em `customers.utm_metadata` (JSONB) e tenta vincular o anúncio no hub (`utm_campaign_ad_id`) pelo `ad_id`.

| Campo aceito | Aliases (Make / Meta) | Destino |
|--------------|------------------------|---------|
| `lead_id` | `Lead ID`, `id` | `utm_metadata.meta_leadgen_id` |
| `form_id` | `Form ID` | `utm_metadata.form_id` |
| `ad_id` | `Ad ID`, `sourceID` | `utm_metadata.sourceID` + lookup do anúncio |
| `ad_name` | `Ad name` | `utm_metadata.ad_name` / `adTitle` |
| `adset_id` | `Ad set ID`, `Ad group ID` | `utm_metadata.adset_id` |
| `adset_name` | `Adset name` | `utm_metadata.adset_name` |
| `campaign_id` | `Campaign ID` | `utm_metadata.campaign_id_meta` (ID da Meta, não UUID interno) |
| `campaign_name` | `Campaign name` | `utm_metadata.campaign_name` |
| `page_id` | `Page ID` | `utm_metadata.page_id` |
| `is_organic` | `Is organic` | `utm_metadata.is_organic` |
| `platform` | `Platform` | `utm_metadata.platform` |
| `created_time` | `Date created` | `utm_metadata.created_time` |
| `field_data` | `Field data` (array Meta ou objeto Make) | `utm_metadata.field_data` (perguntas do formulário) |
| `utm_source` / `utm_medium` / `utm_campaign` / `utm_term` / `utm_content` | — | espelhados em `utm_metadata` |
| `utm_campaign_id` / `utm_campaign_ad_id` | UUIDs internos (opcional) | FKs do customer, se o anúncio ainda não estiver syncado |

Perguntas do Instant Form em `utm.field_data` ficam só no JSON de UTM. Custom fields do CRM vão no objeto separado `customFields` (chave = slug).

Cliente **já existente**: atribuição de campanha/anúncio só preenche se estiver vazia (first-touch). `field_data` é mesclado. `customFields` só preenche slug ainda vazio (`already_filled` se já tiver valor). Cadastro novo grava todos os slugs enviados. Slug inexistente ou valor inválido é ignorado (`customFieldsSkipped`).

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

### Make — Facebook Lead Ads (bundle no `utm`)

No Make, mapeie o módulo *New Lead* inteiro em `utm`. Use `Full name` / `WhatsApp number` (ou telefone) nos campos de contato:

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal",
    "customerName": "Nome do lead",
    "utm": {
      "lead_id": "1234567890",
      "form_id": "987654321",
      "ad_id": "111222333",
      "ad_name": "Ad Planejados SP",
      "adset_id": "444555666",
      "adset_name": "Conjunto SP",
      "campaign_id": "777888999",
      "campaign_name": "Campanha Móveis",
      "page_id": "1122334455",
      "is_organic": false,
      "platform": "fb",
      "created_time": "2026-08-17T16:20:00+0000"
    },
    "customFields": {
      "investimento": "Até 15 mil",
      "loja": "Loja X",
      "bairro-cidade": "Pinheiros"
    },
    "tags": ["Lead Facebook", "Móveis"],
    "email": "lead@email.com",
    "phone": "551133334444"
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
| `customerId` | Cliente criado ou reutilizado |
| `utmApplied` | `true` se `utm` foi gravado em `customers.utm_metadata` |
| `customFieldsApplied` | Slugs gravados no customer |
| `customFieldsSkipped` | Slugs ignorados (`not_found` / `invalid`) |
| `tagsApplied` | Tags associadas (`alreadyExists: true` se já tinha) |
| `tagsSkipped` | Nomes ignorados (`not_found`) |
| `contactsApplied` | E-mail/telefone extras gravados |
| `contactsSkipped` | Ignorados (`same_as_contact` / `already_filled`) |

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

