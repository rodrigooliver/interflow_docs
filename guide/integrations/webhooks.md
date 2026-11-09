# Webhooks de saída

A Interflow envia um POST HTTPS quando um evento da organização acontece. Você cadastra a URL, a chave e os eventos em **Configurações → Webhooks**.

## Cadastrar

1. Abra **Configurações → Webhooks**
2. Informe nome e URL `https://`. Marque **Assinar com HMAC** e informe a chave (ou deixe em branco para gerar). Sem essa opção, o POST sai sem `X-Interflow-Signature`
3. Marque os eventos
4. Salve e use **Testar** para receber um evento `ping`

## Eventos

| Evento | Quando |
|--------|--------|
| `customer.stage_changed` | O cliente muda de estágio no funil, inclusive por fluxo ou agente |
| `customer.created` | Um cliente é criado pela interface ou por um chat |
| `chat.resolved` | Um atendimento é encerrado |
| `chat.transferred` | Um chat é transferido de equipe |
| `task.created` | Uma tarefa é criada |
| `appointment.status_changed` | O status de um agendamento muda |
| `ping` | Teste manual do endpoint |

## Corpo

Todo POST usa o mesmo envelope: `id`, `event`, `created_at`, `organization_id` e `data`. O objeto `customer` aparece quando o evento está ligado a um cliente. Os campos de UTM ficam `null` quando não há atribuição.

### `customer.stage_changed`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "customer.stage_changed",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "stage": {
      "previous_id": "aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa",
      "previous_name": "Novo",
      "id": "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      "name": "Qualificado",
      "funnel_id": "cccccccc-cccc-cccc-cccc-cccccccccccc",
      "funnel_name": "Comercial"
    },
    "source": "manual",
    "chat_id": "dddddddd-dddd-dddd-dddd-dddddddddddd",
    "customer": {
      "id": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "name": "Ana Souza",
      "email": "ana@exemplo.com",
      "phone": "5511999999999",
      "stage_id": "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      "utm_campaign_id": "ffffffff-ffff-ffff-ffff-ffffffffffff",
      "utm_campaign_ad_id": "12121212-1212-1212-1212-121212121212",
      "ad_source_id": "120210000000000001",
      "utm_metadata": {
        "sourceID": "120210000000000001",
        "sourceType": "ad",
        "sourceURL": "https://fb.me/3AbCdEf",
        "adTitle": "Black Friday — 30% off",
        "adBody": "Fale no WhatsApp e garanta o desconto",
        "mediaType": "image",
        "ctwaClid": "ARAkLkA8rmlFeiCktEJQ-QTwRiyYHAFDLMNd1zC4n8example",
        "showAdAttribution": true,
        "thumbnailURL": "https://scontent.xx.fbcdn.net/v/example.jpg"
      }
    }
  }
}
```

`source` pode ser `manual`, `flow`, `agent` ou outro valor interno. Ao sair do funil, `stage.id` e `stage.name` vêm `null`.

O `customer` acima é um clique em anúncio do WhatsApp (Click to WhatsApp). `utm_campaign_id` e `utm_campaign_ad_id` são os ids internos da Interflow. `ad_source_id` repete o id do anúncio na origem, o mesmo valor de `utm_metadata.sourceID`. Sem anúncio, esses três campos e `utm_metadata` vêm `null`. Outros eventos reutilizam esse mesmo objeto `customer`.

### `customer.created`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "customer.created",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "source": "api",
    "customer": {
      "id": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "name": "Ana Souza",
      "email": "ana@exemplo.com",
      "phone": "5511999999999",
      "stage_id": null,
      "utm_campaign_id": null,
      "utm_campaign_ad_id": null,
      "ad_source_id": null,
      "utm_metadata": null
    }
  }
}
```

`source` é `api` quando o cliente é criado na interface e `chat` quando nasce de uma conversa.

### `chat.resolved`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "chat.resolved",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "chat": {
      "id": "dddddddd-dddd-dddd-dddd-dddddddddddd",
      "status": "closed",
      "title": "Dúvida sobre o plano",
      "closure_type_id": "99999999-9999-9999-9999-999999999999",
      "closure_type": "Resolvido"
    },
    "customer": {
      "id": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "name": "Ana Souza",
      "email": "ana@exemplo.com",
      "phone": "5511999999999",
      "stage_id": "bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb",
      "utm_campaign_id": null,
      "utm_campaign_ad_id": null,
      "ad_source_id": null,
      "utm_metadata": null
    }
  }
}
```

`chat.status` pode ser `closed` ou `await_closing` quando o encerramento dispara um fluxo.

### `chat.transferred`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "chat.transferred",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "chat": { "id": "dddddddd-dddd-dddd-dddd-dddddddddddd" },
    "team": {
      "id": "77777777-7777-7777-7777-777777777777",
      "name": "Suporte",
      "previous_id": "66666666-6666-6666-6666-666666666666"
    },
    "source": "manual",
    "customer": {
      "id": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "name": "Ana Souza",
      "email": "ana@exemplo.com",
      "phone": "5511999999999",
      "stage_id": null,
      "utm_campaign_id": null,
      "utm_campaign_ad_id": null,
      "ad_source_id": null,
      "utm_metadata": null
    }
  }
}
```

### `task.created`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "task.created",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "task": {
      "id": "55555555-5555-5555-5555-555555555555",
      "title": "Retornar ligação",
      "status": "pending",
      "priority": "medium",
      "project_id": null,
      "chat_id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
    },
    "customer": {
      "id": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "name": "Ana Souza",
      "email": "ana@exemplo.com",
      "phone": "5511999999999",
      "stage_id": null,
      "utm_campaign_id": null,
      "utm_campaign_ad_id": null,
      "ad_source_id": null,
      "utm_metadata": null
    }
  }
}
```

`customer` vem `null` quando a tarefa não tem cliente.

### `appointment.status_changed`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "appointment.status_changed",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "appointment": {
      "id": "44444444-4444-4444-4444-444444444444",
      "status": "confirmed",
      "previous_status": "scheduled",
      "schedule_id": "33333333-3333-3333-3333-333333333333",
      "chat_id": "dddddddd-dddd-dddd-dddd-dddddddddddd"
    },
    "customer": {
      "id": "eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee",
      "name": "Ana Souza",
      "email": "ana@exemplo.com",
      "phone": "5511999999999",
      "stage_id": null,
      "utm_campaign_id": null,
      "utm_campaign_ad_id": null,
      "ad_source_id": null,
      "utm_metadata": null
    }
  }
}
```

`status` pode ser `scheduled`, `confirmed`, `started`, `completed`, `canceled` ou `no_show`.

### `ping`

```json
{
  "id": "8f1c0b2e-1d4a-4c3b-9a10-6e5d4c3b2a19",
  "event": "ping",
  "created_at": "2026-11-09T16:00:00.000Z",
  "organization_id": "11111111-1111-1111-1111-111111111111",
  "data": {
    "endpoint_id": "22222222-2222-2222-2222-222222222222"
  }
}
```

## Assinatura

Headers:

- `X-Interflow-Signature`: `t=<unix>,v1=<hex>`
- `X-Interflow-Event`
- `X-Interflow-Delivery`
- `X-Interflow-Timestamp`

`v1` é HMAC-SHA256, em hexadecimal, da string `timestamp + "." + corpo bruto`, usando a chave do endpoint.

```js
import crypto from 'crypto';

function isValid(secret, rawBody, header, toleranceSeconds = 300) {
  const parts = Object.fromEntries(header.split(',').map((part) => part.split('=')));
  const timestamp = Number(parts.t);
  if (!timestamp || Math.abs(Date.now() / 1000 - timestamp) > toleranceSeconds) return false;
  const expected = crypto.createHmac('sha256', secret).update(`${timestamp}.${rawBody}`).digest('hex');
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(parts.v1 || ''));
}
```

Use o corpo exatamente como chegou, antes de interpretar o JSON.

## Resposta, retentativas e logs

Lançamento: [v2026.11.1](/changelog/2026/11/2026.11.1).

Responda `2xx` em até 10 segundos. A Interflow tenta até 5 vezes: na hora, e depois de 1 minuto, 10 minutos, 1 hora e 6 horas. HTTP `4xx` (exceto `408` e `429`) encerra na primeira falha. Cada tentativa, com sucesso ou erro, fica registrada por 90 dias. Em **Entregas** você vê o status, o HTTP, a resposta e pode **Reenviar**, o que cria uma entrega nova com o mesmo payload.
