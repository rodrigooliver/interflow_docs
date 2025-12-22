# Erros da API

Referência completa dos códigos de erro da API Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Formato de Erro

Todas as respostas de erro seguem o formato:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descrição legível do erro",
    "details": [
      {
        "field": "campo_com_erro",
        "message": "Detalhes específicos"
      }
    ]
  }
}
```

## Códigos HTTP

### 400 Bad Request

Requisição malformada ou com parâmetros inválidos.

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados de entrada inválidos",
    "details": [
      {
        "field": "email",
        "message": "Email inválido"
      }
    ]
  }
}
```

**Causas comuns:**
- JSON malformado
- Campos obrigatórios ausentes
- Tipos de dados incorretos
- Valores fora do range permitido

### 401 Unauthorized

Autenticação falhou ou não foi fornecida.

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "API Key inválida ou ausente"
  }
}
```

**Causas comuns:**
- Header `Authorization` ausente
- API Key inválida
- API Key revogada
- Formato incorreto do token

### 403 Forbidden

Autenticação válida, mas sem permissão.

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Sem permissão para este recurso"
  }
}
```

**Causas comuns:**
- API Key sem a permissão necessária
- Tentando acessar recurso de outra organização
- Recurso desabilitado no plano atual

### 404 Not Found

Recurso não encontrado.

```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Cliente não encontrado"
  }
}
```

**Causas comuns:**
- ID inexistente
- Recurso foi deletado
- URL incorreta

### 409 Conflict

Conflito com o estado atual do recurso.

```json
{
  "success": false,
  "error": {
    "code": "CONFLICT",
    "message": "Email já está em uso"
  }
}
```

**Causas comuns:**
- Tentativa de criar recurso duplicado
- Violação de constraint único

### 422 Unprocessable Entity

Requisição válida mas não pode ser processada.

```json
{
  "success": false,
  "error": {
    "code": "CHANNEL_DISCONNECTED",
    "message": "O canal está desconectado"
  }
}
```

**Causas comuns:**
- Canal de mensagem desconectado
- Limite de recursos atingido
- Dependência não satisfeita

### 429 Too Many Requests

Rate limit excedido.

```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Limite de requisições excedido. Tente novamente em 60 segundos."
  }
}
```

**Headers de resposta:**
```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1640995260
Retry-After: 60
```

### 500 Internal Server Error

Erro interno do servidor.

```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "Erro interno do servidor"
  }
}
```

### 503 Service Unavailable

Serviço temporariamente indisponível.

```json
{
  "success": false,
  "error": {
    "code": "SERVICE_UNAVAILABLE",
    "message": "Serviço temporariamente indisponível. Tente novamente mais tarde."
  }
}
```

## Códigos de Erro Específicos

### Autenticação

| Código | Descrição |
|--------|-----------|
| `UNAUTHORIZED` | API Key inválida ou ausente |
| `TOKEN_EXPIRED` | Token expirado |
| `INVALID_TOKEN` | Token malformado |
| `REVOKED_KEY` | API Key foi revogada |

### Validação

| Código | Descrição |
|--------|-----------|
| `VALIDATION_ERROR` | Erro de validação genérico |
| `REQUIRED_FIELD` | Campo obrigatório ausente |
| `INVALID_FORMAT` | Formato inválido |
| `OUT_OF_RANGE` | Valor fora do range |
| `INVALID_TYPE` | Tipo de dado incorreto |

### Recursos

| Código | Descrição |
|--------|-----------|
| `NOT_FOUND` | Recurso não encontrado |
| `CUSTOMER_NOT_FOUND` | Cliente não encontrado |
| `CHANNEL_NOT_FOUND` | Canal não encontrado |
| `CHAT_NOT_FOUND` | Chat não encontrado |
| `MESSAGE_NOT_FOUND` | Mensagem não encontrada |

### Mensagens

| Código | Descrição |
|--------|-----------|
| `CHANNEL_DISCONNECTED` | Canal desconectado |
| `TEMPLATE_NOT_APPROVED` | Template não aprovado |
| `INVALID_PHONE` | Número de telefone inválido |
| `MESSAGE_TOO_LONG` | Mensagem muito longa |
| `UNSUPPORTED_MEDIA` | Tipo de mídia não suportado |
| `FILE_TOO_LARGE` | Arquivo muito grande |

### Rate Limiting

| Código | Descrição |
|--------|-----------|
| `RATE_LIMIT_EXCEEDED` | Limite de requisições excedido |
| `QUOTA_EXCEEDED` | Cota do plano excedida |

### Permissões

| Código | Descrição |
|--------|-----------|
| `FORBIDDEN` | Sem permissão genérica |
| `INSUFFICIENT_PERMISSIONS` | Permissões insuficientes |
| `ORGANIZATION_MISMATCH` | Recurso pertence a outra organização |

## Tratamento de Erros

### JavaScript/TypeScript

```javascript
async function sendMessage(data) {
  try {
    const response = await fetch('https://api.interflow.chat/v1/messages/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (!result.success) {
      switch (result.error.code) {
        case 'VALIDATION_ERROR':
          console.error('Dados inválidos:', result.error.details);
          break;
        case 'CHANNEL_DISCONNECTED':
          console.error('Canal desconectado, reconecte o canal');
          break;
        case 'RATE_LIMIT_EXCEEDED':
          console.error('Aguarde antes de tentar novamente');
          break;
        default:
          console.error('Erro:', result.error.message);
      }
      return null;
    }

    return result.data;
  } catch (error) {
    console.error('Erro de rede:', error);
    return null;
  }
}
```

### Python

```python
import requests

def send_message(data):
    try:
        response = requests.post(
            'https://api.interflow.chat/v1/messages/send',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json'
            },
            json=data
        )
        
        result = response.json()
        
        if not result.get('success'):
            error = result.get('error', {})
            error_code = error.get('code')
            
            if error_code == 'VALIDATION_ERROR':
                print(f"Dados inválidos: {error.get('details')}")
            elif error_code == 'RATE_LIMIT_EXCEEDED':
                print("Limite excedido, aguarde...")
            else:
                print(f"Erro: {error.get('message')}")
            
            return None
            
        return result.get('data')
        
    except requests.exceptions.RequestException as e:
        print(f"Erro de rede: {e}")
        return None
```

## Boas Práticas

### Retry com Backoff

Para erros temporários (5xx, 429), implemente retry com backoff exponencial:

```javascript
async function requestWithRetry(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s
      await new Promise(r => setTimeout(r, delay));
    }
  }
}
```

### Logging

Registre erros para debugging:

```javascript
function logError(error, context) {
  console.error({
    timestamp: new Date().toISOString(),
    code: error.code,
    message: error.message,
    context: context
  });
}
```

## Próximos Passos

- [Rate Limiting](/api/limites)
- [Autenticação](/api/autenticacao)
- [Exemplos de Código](/api/)

