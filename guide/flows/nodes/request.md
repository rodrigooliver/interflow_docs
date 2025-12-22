# Nó: Requisição HTTP

Faz chamadas para APIs externas e processa as respostas.

## Visão Geral

O nó **Requisição HTTP** permite integrar seu fluxo com qualquer API externa. Use para:

- Consultar sistemas externos
- Enviar dados para webhooks
- Integrar com CRMs e ERPs
- Processar pagamentos
- Buscar informações em tempo real

## Configurações

### Método HTTP

| Método | Uso |
|--------|-----|
| **GET** | Buscar dados |
| **POST** | Enviar/criar dados |
| **PUT** | Atualizar dados |
| **PATCH** | Atualização parcial |
| **DELETE** | Remover dados |
| **HEAD** | Verificar recurso |
| **OPTIONS** | Verificar opções |

### URL

URL da API. Suporta variáveis:

```
https://api.exemplo.com/clientes/{{customer_id}}
```

### Parâmetros de Query

Parâmetros adicionados à URL:

| Chave | Valor |
|-------|-------|
| `cpf` | <code v-pre>{{cpf}}</code> |
| `ativo` | `true` |

Resultado: `?cpf=12345678900&ativo=true`

### Headers

Cabeçalhos da requisição:

| Chave | Valor |
|-------|-------|
| `Authorization` | <code v-pre>Bearer {{api_token}}</code> |
| `Content-Type` | `application/json` |

### Corpo (Body)

Para métodos POST, PUT, PATCH:

**Tipos disponíveis:**
- **JSON**: Dados em formato JSON
- **Form Data**: Dados de formulário
- **Raw Text**: Texto puro
- **Nenhum**: Sem corpo

**Exemplo JSON:**
```json
{
  "nome": "{{customer_name}}",
  "email": "{{customer_email}}",
  "mensagem": "{{last_message}}"
}
```

## Mapeamento de Resposta

### Salvar Resposta Completa

Salve toda a resposta em uma variável do tipo `object`:

```
Variável: resposta_api
```

### Mapeamento de Campos

Extraia campos específicos da resposta:

| Variável | Caminho JSON |
|----------|--------------|
| `nome_cliente` | `data.cliente.nome` |
| `saldo` | `data.conta.saldo` |
| `status` | `status` |

**Para arrays:**
```
data.pedidos[0].numero  → Primeiro item
data.pedidos[1].valor   → Segundo item
```

## Testar Requisição

Use o botão **Testar** para:

1. Executar a requisição
2. Ver a resposta
3. Mapear campos para variáveis
4. Validar antes de publicar

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Requisição bem-sucedida (2xx) |
| Erro | Inferior | Vermelho | Falha na requisição |

## Exemplos de Uso

### Consultar CPF

```
Método: GET
URL: https://api.receita.ws/cpf/{{cpf}}
Headers:
  - Authorization: Bearer {{token}}

Mapeamento:
  - nome → nome
  - situacao → situacao_cadastral
```

### Criar Lead no CRM

```
Método: POST
URL: https://crm.exemplo.com/api/leads
Headers:
  - Content-Type: application/json
  - X-API-Key: {{api_key}}
Body (JSON):
{
  "name": "{{customer_name}}",
  "email": "{{customer_email}}",
  "phone": "{{customer_phone}}",
  "source": "chatbot"
}
```

### Consultar Status de Pedido

```
Método: GET
URL: https://api.loja.com/pedidos/{{numero_pedido}}
Headers:
  - Authorization: Bearer {{token}}

Mapeamento:
  - status → status_pedido
  - previsao → data_entrega
  - rastreio → codigo_rastreio
```

### Webhook de Notificação

```
Método: POST
URL: https://hooks.slack.com/services/xxx
Body (JSON):
{
  "text": "Novo lead: {{customer_name}} - {{customer_email}}"
}
```

### Consultar CEP

```
Método: GET
URL: https://viacep.com.br/ws/{{cep}}/json/

Mapeamento:
  - logradouro → rua
  - bairro → bairro
  - localidade → cidade
  - uf → estado
```

## Tratamento de Erros

A saída de erro é acionada quando:

- Timeout (padrão: 15 segundos)
- Erro de rede
- Status HTTP 4xx ou 5xx
- JSON inválido

Configure sempre um caminho alternativo:

```
[Requisição]
  ├─ Sucesso → [Continua fluxo]
  └─ Erro → [Texto: "Desculpe, houve um erro. Tente novamente."]
```

## Boas Práticas

::: tip Variáveis Sensíveis
Use variáveis para tokens e chaves de API. Nunca coloque credenciais diretamente.
:::

::: tip Teste Antes
Sempre teste a requisição antes de publicar o fluxo.
:::

::: tip Timeout
APIs lentas podem causar timeout. Informe o cliente se a consulta demorar.
:::

::: tip Logs
Use o nó Mensagem do Sistema para registrar respostas de APIs para debug.
:::

::: warning Segurança
Cuidado com dados sensíveis nas requisições. Use HTTPS sempre.
:::

::: warning Rate Limits
Respeite os limites de requisições das APIs para evitar bloqueios.
:::

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Definir Variável](/guide/flows/nodes/variable)

