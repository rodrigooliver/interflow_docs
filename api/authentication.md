# Autenticação

A API da Interflow usa **API Keys** para integrações.

Rotas não documentadas (fora do [inventário](/api/status)) retornam `403` com código `API_KEY_ROUTE_DENIED`.

## Obtendo sua API Key

1. Acesse a Interflow
2. Vá em **Configurações** → **API Keys**
3. Clique em **"Gerar nova chave"**
4. Defina um nome descritivo
5. Copie a chave gerada (exibida **apenas uma vez**)

Na mesma tela (**Configurações** → **API Keys**) você também encontra o **Organization ID**, com botão para copiar. Use esse valor no path `{organizationId}` das rotas.

::: danger IMPORTANTE
A API Key é secreta. Nunca exponha em código de cliente ou repositórios públicos.
:::

## Onde encontrar os IDs

| ID | Onde obter no app |
|----|-------------------|
| `organizationId` | Menu **Configurações** → **API Keys** (campo Organization ID) |
| `channelId` | Menu lateral **Canais** — cada card exibe o ID do canal com botão para copiar |
| `whatsappTemplate.id` / `templateId` | **Canais** → canal WhatsApp Oficial → **Templates do WhatsApp** — botão **Copiar ID** no template |
| `teamId` | Menu lateral **Equipes** — cada card exibe o ID da equipe com botão para copiar |
| `flowId` / `responseFlowId` | Menu lateral **Fluxos** — cada card exibe o ID do fluxo com botão para copiar |
| `customerId` | Menu lateral **Clientes** → menu de ações (⋮) → **Copiar ID** |

## Usando a API Key

### Headers aceitos

```http
x-api-key: ak_sua_api_key
```

ou

```http
Authorization: Bearer ak_sua_api_key
```

### Exemplo cURL

```bash
curl -X POST "https://v1.api.interflow.chat/api/{organizationId}/chat/create" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ak_sua_api_key" \
  -d '{
    "contactType": "whatsapp",
    "contactValue": "5511999999999",
    "channelId": "uuid-do-canal"
  }'
```

### Exemplo JavaScript

```javascript
const response = await fetch(
  `https://v1.api.interflow.chat/api/${organizationId}/chat/create`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.INTERFLOW_API_KEY
    },
    body: JSON.stringify({
      contactType: 'whatsapp',
      contactValue: '5511999999999',
      channelId: 'uuid-do-canal'
    })
  }
);
```

### Exemplo Python

```python
import os
import requests

headers = {
    'Content-Type': 'application/json',
    'x-api-key': os.environ['INTERFLOW_API_KEY'],
}

response = requests.post(
    f'https://v1.api.interflow.chat/api/{organization_id}/chat/create',
    headers=headers,
    json={
        'contactType': 'whatsapp',
        'contactValue': '5511999999999',
        'channelId': 'uuid-do-canal',
    },
)
```

## Formato da chave

As chaves geradas pela plataforma usam o prefixo `ak_`. Na listagem você vê um **prefixo** curto para identificar a key sem expor o secret completo.

## Organização no path

Toda rota pública inclui `{organizationId}`:

```
/api/{organizationId}/...
```

Copie o Organization ID em **Configurações** → **API Keys**. A API Key deve pertencer a essa organização (exceto contas superadmin).

## Allowlist de IP (opcional)

Ao criar/editar a key, você pode restringir IPs ou CIDRs.

- Lista vazia — qualquer IP (padrão)
- Lista preenchida — apenas IPs/CIDRs informados

IP não permitido → `403` com código `API_KEY_IP_DENIED`.

## Rate limiting

Limite por minuto conforme o plano da organização (Starter / Professional / Enterprise). Headers:

```
X-RateLimit-Limit: 300
X-RateLimit-Remaining: 298
X-RateLimit-Reset: 1640995200
```

Em `429`, a organização pode receber alerta por e-mail (máx. 1/hora por chave).

## Erros de autenticação

### 401 Unauthorized

API Key ausente, inválida ou revogada.

### 403 Forbidden

| Código | Situação |
|--------|----------|
| `API_KEY_IP_DENIED` | IP fora da allowlist |
| `API_KEY_ROUTE_DENIED` | Rota não está na API pública |
| `SUBSCRIPTION_INACTIVE` | Assinatura inativa |

## Boas práticas

- Guarde a key em variáveis de ambiente **no backend**
- Use uma key por integração
- Use allowlist de IP quando o servidor tiver IP fixo
- Rotacione e revogue keys não utilizadas
- Mantenha o e-mail da organização atualizado para alertas

```bash
INTERFLOW_API_KEY=ak_sua_chave_aqui
INTERFLOW_API_URL=https://v1.api.interflow.chat
```

## Próximos passos

- [Visão geral / Rate limiting](/api/)
- [Inventário da API](/api/status)
- [Erros](/api/errors)
- [Criar chat](/api/chats/create)
