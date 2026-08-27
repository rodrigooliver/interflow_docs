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
| `channelId` | string (UUID) | Sim | ID do canal ativo — menu lateral **Canais** (copiar no card) |
| `customerId` | string (UUID) | Não | Cliente existente — **Clientes** → ações (⋮) → **Copiar ID**; se omitido, busca/cria automaticamente |
| `customer` | object | Sim* | Dados do cliente. O identificador do chat vem daqui, conforme o canal |
| `teamId` | string (UUID) | Não | Equipe do atendimento — menu **Equipes** (copiar no card) |
| `initialMessage` | string \| object | Não | Mensagem inicial (texto ou mídia) |
| `whatsappTemplate` | object | Não | Template Meta (somente canal WhatsApp Oficial) — **Canais** → Templates → **Copiar ID** |
| `flowId` | string (UUID) | Não | Inicia o fluxo **imediatamente** — menu **Fluxos** (copiar no card) |
| `flowVariables` | array | Não | Variáveis do fluxo: `[{ "name": "...", "value": "..." }]` |
| `contextMessage` | string | Não | Contexto usado com `flowId` ou `responseFlowId` |
| `responseFlowId` | string (UUID) | Não | Fluxo ao responder o cliente — mesmo ID em **Fluxos** (copiar no card) |
| `keepPending` | boolean | Não | Se `true`, mantém o chat em `pending` mesmo com `initialMessage` / `whatsappTemplate` (não atende nem auto-atribui) |
| `utm` | object | Não | Atribuição UTM / Facebook Lead Ads (Make). Gravado em `customers.utm_metadata` |

\*Obrigatório: `channelId` e o campo de `customer` do canal (`whatsapp`/`phone`, `email`, `instagram` ou `facebook`).

### `customer`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `name` | string | Nome do cliente. Se o cadastro já existir e o nome estiver vazio, preenche |
| `whatsapp` | string | Número WhatsApp. **Obrigatório** em canal WhatsApp se não vier `phone` |
| `phone` | string | Telefone. No WhatsApp, usado se não vier `whatsapp`. Senão vira contato extra |
| `email` | string | E-mail. **Obrigatório** em canal e-mail. Nos outros, contato extra |
| `instagram` | string | Instagram ID. **Obrigatório** em canal Instagram |
| `facebook` | string | Facebook ID. **Obrigatório** em canal Facebook |
| `document` | string | CPF/CNPJ (ou outro documento). Só preenche se o campo estiver vazio |
| `salePrice` / `sale_price` | number \| string | Valor de compra/venda (`customers.sale_price`). Só preenche se estiver vazio |
| `tags` | string[] \| string | Nomes das tags (cadastro ou existente). Não cria tag nova |
| `customFields` | object \| array | Campos personalizados por **slug**: `{ "investimento": "Até 15 mil" }` ou `[{ "slug": "investimento", "value": "Até 15 mil" }]` |
| `forceUpdate` | object | Quais campos sobrescrever mesmo se já tiverem valor. Veja a tabela abaixo |

### `customer.forceUpdate`

Sem `forceUpdate`, cliente existente só preenche o que estiver **vazio**. Marque `true` nos campos que devem ser sobrescritos:

| Chave | Efeito |
|-------|--------|
| `name` | Sobrescreve o nome |
| `email` | Sobrescreve o e-mail principal |
| `phone` | Atualiza o contato telefone existente |
| `whatsapp` | Atualiza o contato WhatsApp existente |
| `instagram` | Atualiza o Instagram ID |
| `facebook` | Atualiza o Facebook ID |
| `document` | Sobrescreve o documento |
| `sale_price` | Sobrescreve o valor de compra |
| `customFields` | `true` força todos os slugs enviados; ou lista (`["investimento"]`) / slug (`"investimento"`) |

### Identificador pelo canal

O Interflow lê o destinatário em `customer`, conforme o tipo do canal:

| Tipo do canal | Campo em `customer` |
|---------------|---------------------|
| `whatsapp_official`, `whatsapp_wapi`, `whatsapp_zapi`, `whatsapp_waha`, `whatsapp_evo` | `whatsapp` (senão `phone`) |
| `email` | `email` |
| `instagram` | `instagram` |
| `facebook` | `facebook` |

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

Pode ser o **bundle inteiro** do módulo *Facebook Lead Ads — New Lead* no Make, ou um objeto já mapeado. O Interflow grava em `customers.utm_metadata` (JSONB), preenche `customers.ad_source_id` com o ID externo (`ad_id` / `sourceID`) e tenta vincular o anúncio no hub (`utm_campaign_ad_id`) pelo mesmo ID.

| Campo aceito | Aliases (Make / Meta) | Destino |
|--------------|------------------------|---------|
| `lead_id` | `Lead ID`, `id` | `utm_metadata.meta_leadgen_id` |
| `form_id` | `Form ID` | `utm_metadata.form_id` |
| `ad_id` | `Ad ID`, `sourceID`, `source_id`, `ad_source_id` | `customers.ad_source_id` + `utm_metadata.sourceID` + lookup do anúncio |
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

Perguntas do Instant Form em `utm.field_data` ficam só no JSON de UTM. Custom fields do CRM vão em `customer.customFields` (chave = slug).

Cliente **já existente**: nome, e-mail, documento, UTM/anúncio e `customer.customFields` só preenchem o que estiver **vazio** — valor já gravado não é sobrescrito (`already_filled`), salvo se `customer.forceUpdate` marcar o campo. Contatos extras (telefone, WhatsApp, Instagram, Facebook) são adicionados se ainda não existirem; com `forceUpdate` o contato daquele tipo é atualizado. Cadastro novo grava todos os slugs enviados. Slug inexistente ou valor inválido é ignorado (`customFieldsSkipped`).

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
    "channelId": "uuid-do-canal",
    "customer": { "whatsapp": "5511999999999" },
    "customerName": "Nome do cliente"
  }'
```

### Template WhatsApp + manter pending + fluxo ao responder

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "channelId": "uuid-do-canal",
    "customer": { "whatsapp": "5511999999999" },
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
    "channelId": "uuid-do-canal",
    "customer": { "whatsapp": "5511999999999" },
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
    "channelId": "uuid-do-canal",
    "customer": {
      "name": "Nome do lead",
      "email": "lead@email.com",
      "phone": "551133334444",
      "whatsapp": "5511999999999",
      "document": "12345678901",
      "tags": ["Lead Facebook", "Móveis"],
      "customFields": {
        "investimento": "Até 15 mil",
        "loja": "Loja X",
        "bairro-cidade": "Pinheiros"
      },
      "forceUpdate": {
        "name": true,
        "document": true,
        "customFields": ["investimento"]
      }
    },
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
    }
  }'
```

### Fluxo imediato

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "channelId": "uuid-do-canal",
    "customer": { "whatsapp": "5511999999999" },
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
  "error": "Parâmetros obrigatórios: channelId e customer.whatsapp / customer.email / customer.instagram / customer.facebook (conforme o canal)"
}
```

## Próximos passos

- [Enviar mensagem](/api/messages/send)
- [Sequência / atalhos](/api/messages/sequence)
- [Template WhatsApp](/api/chats/send-template)
- [Autenticação](/api/authentication)
- [Inventário da API](/api/status)

