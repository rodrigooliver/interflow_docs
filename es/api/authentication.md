# Autenticação

Aprenda como autenticar suas requisições na API da Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Visão Geral

A API da Interflow usa autenticação baseada em **API Keys**. Todas as requisições devem incluir uma chave válida no header de autorização.

## Obtendo sua API Key

### Via Painel

1. Acesse a Interflow
2. Vá em **Configurações** → **API Keys**
3. Clique em **"Gerar nova chave"**
4. Defina um nome descritivo
5. Copie a chave gerada

![Gestión de API Keys](/images/api/api_keys_es.png)

::: danger IMPORTANTE
A API Key é exibida apenas uma vez no momento da criação. Guarde-a em um local seguro!
:::

## Usando a API Key

### Header de Autorização

Inclua sua API Key no header `Authorization` usando o esquema Bearer:

```http
Authorization: Bearer sua_api_key_aqui
```

### Exemplo com cURL

```bash
curl -X GET "https://api.interflow.chat/v1/customers" \
  -H "Authorization: Bearer if_live_abc123xyz789" \
  -H "Content-Type: application/json"
```

### Exemplo com JavaScript

```javascript
const response = await fetch('https://api.interflow.chat/v1/customers', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer if_live_abc123xyz789',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
```

### Exemplo com Python

```python
import requests

headers = {
    'Authorization': 'Bearer if_live_abc123xyz789',
    'Content-Type': 'application/json'
}

response = requests.get(
    'https://api.interflow.chat/v1/customers',
    headers=headers
)

data = response.json()
```

### Exemplo com PHP

```php
<?php
$ch = curl_init();

curl_setopt_array($ch, [
    CURLOPT_URL => 'https://api.interflow.chat/v1/customers',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer if_live_abc123xyz789',
        'Content-Type: application/json'
    ]
]);

$response = curl_exec($ch);
$data = json_decode($response, true);

curl_close($ch);
```

## Formato da API Key

As API Keys seguem o formato:

```
if_[ambiente]_[id_aleatorio]
```

| Prefixo | Ambiente |
|---------|----------|
| `if_live_` | Produção |
| `if_test_` | Sandbox |

## Permissões

Cada API Key pode ter permissões específicas:

| Permissão | Descrição |
|-----------|-----------|
| `customers:read` | Ler clientes |
| `customers:write` | Criar/editar clientes |
| `messages:read` | Ler mensagens |
| `messages:write` | Enviar mensagens |
| `chats:read` | Ler conversas |
| `chats:write` | Gerenciar conversas |
| `*` | Acesso total |

### Definindo Permissões

Ao criar uma API Key, selecione apenas as permissões necessárias:

1. Clique em **"Permissões avançadas"**
2. Marque as permissões desejadas
3. Salve a chave

## Erros de Autenticação

### 401 Unauthorized

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "API Key inválida ou ausente"
  }
}
```

**Causas:**
- API Key não informada
- API Key inválida
- API Key revogada

### 403 Forbidden

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Sem permissão para este recurso"
  }
}
```

**Causas:**
- API Key não tem a permissão necessária
- Recurso pertence a outra organização

## Gerenciando API Keys

### Listando Chaves

Veja todas as suas API Keys em **Configurações** → **API Keys**.

### Revogando Chaves

Para revogar uma chave:
1. Encontre a chave na lista
2. Clique em **"Revogar"**
3. Confirme a ação

::: warning ATENÇÃO
Após revogar, todas as requisições com essa chave serão rejeitadas imediatamente.
:::

### Rotação de Chaves

Recomendamos rotacionar suas API Keys periodicamente:

1. Crie uma nova API Key
2. Atualize suas integrações
3. Revogue a chave antiga

## Boas Práticas de Segurança

### ✅ Faça

- Guarde a API Key em variáveis de ambiente
- Use chaves diferentes para cada ambiente
- Limite as permissões ao necessário
- Rotacione as chaves periodicamente
- Revogue chaves não utilizadas

### ❌ Evite

- Commitar API Keys em repositórios
- Expor chaves em código frontend
- Compartilhar chaves entre equipes
- Usar a mesma chave em múltiplas aplicações
- Deixar chaves sem rotação por muito tempo

## Variáveis de Ambiente

Exemplo de configuração:

```bash
# .env
INTERFLOW_API_KEY=if_live_abc123xyz789
INTERFLOW_API_URL=https://api.interflow.chat/v1
```

```javascript
// config.js
const apiKey = process.env.INTERFLOW_API_KEY;
const apiUrl = process.env.INTERFLOW_API_URL;
```

## Próximos Passos

- [Limites e Rate Limiting](/api/limites)
- [Erros da API](/api/erros)
- [Enviar Mensagens](/api/mensagens/enviar)

