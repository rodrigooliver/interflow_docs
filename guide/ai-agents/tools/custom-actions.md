# Ações Personalizadas

Crie ferramentas customizadas para necessidades específicas do seu negócio.

### Estrutura de uma Ferramenta

Cada ferramenta personalizada possui:

| Campo | Descrição |
|-------|-----------|
| **Descrição** | O que a ferramenta faz (usado pela IA para decidir quando usar) |
| **Nome** | Identificador técnico (gerado automaticamente) |
| **Parâmetros** | Dados que a IA deve coletar |
| **Ações** | O que executar quando a ferramenta for acionada |

### Criando uma Ferramenta

1. Na aba **Ferramentas**, clique em **"Ação Personalizada"**
2. Preencha a descrição (ex: "Consulta o status de um pedido")
3. O nome será gerado automaticamente (ex: `consulta_o_status_de_um_pedido`)
4. Adicione os parâmetros necessários

### Configurando Parâmetros

Cada parâmetro possui:

| Campo | Descrição |
|-------|-----------|
| **Nome** | Identificador do parâmetro |
| **Tipo** | string, number, boolean, etc. |
| **Descrição** | Explica o que o parâmetro representa |
| **Obrigatório** | Se a IA deve sempre coletar esse dado |
| **Valores permitidos** | Lista de opções válidas (opcional) |

**Exemplo de parâmetros:**
```json
{
  "numero_pedido": {
    "type": "string",
    "description": "Número do pedido do cliente",
    "required": true
  },
  "tipo_consulta": {
    "type": "string",
    "enum": ["status", "rastreamento", "nota_fiscal"],
    "description": "Tipo de informação desejada"
  }
}
```

### Configurando Ações

Na aba **Ações** da ferramenta, defina o que acontece quando ela é executada:

- **Ir para nó do fluxo**: Direciona para um nó específico
- **Requisição HTTP**: Chama uma API externa
- **Atualizar variável**: Modifica uma variável do fluxo

### Visualizando JSON

Clique no botão **JSON** para ver a ferramenta em formato OpenAI:

```json
{
  "name": "consulta_status_pedido",
  "description": "Consulta o status de um pedido do cliente",
  "strict": true,
  "parameters": {
    "type": "object",
    "properties": {
      "numero_pedido": {
        "type": "string",
        "description": "Número do pedido"
      }
    },
    "required": ["numero_pedido"],
    "additionalProperties": false
  }
}
```

## Boas Práticas

### ✅ Faça

- Use descrições claras e específicas
- Defina parâmetros com tipos corretos
- Teste cada ferramenta antes de publicar
- Limite os valores permitidos quando possível
- Configure ações de fallback

### ❌ Evite

- Descrições vagas que confundem a IA
- Muitas ferramentas similares
- Parâmetros desnecessários
- Ferramentas sem ações definidas

## Exemplos Práticos

### Consulta de Saldo

```json
{
  "name": "consulta_saldo",
  "description": "Consulta o saldo disponível na conta do cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "tipo_saldo": {
        "type": "string",
        "enum": ["disponivel", "bloqueado", "total"],
        "description": "Tipo de saldo a consultar"
      }
    },
    "required": []
  }
}
```

### Segunda Via de Boleto

```json
{
  "name": "segunda_via_boleto",
  "description": "Gera segunda via de boleto para pagamento",
  "parameters": {
    "type": "object",
    "properties": {
      "mes_referencia": {
        "type": "string",
        "description": "Mês de referência do boleto (ex: 01/2025)"
      },
      "enviar_por": {
        "type": "string",
        "enum": ["whatsapp", "email"],
        "description": "Como enviar o boleto"
      }
    },
    "required": ["mes_referencia"]
  }
}
```

### Atualização Cadastral

```json
{
  "name": "atualiza_endereco",
  "description": "Atualiza o endereço de entrega do cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "cep": {
        "type": "string",
        "description": "CEP do novo endereço"
      },
      "numero": {
        "type": "string",
        "description": "Número da residência"
      },
      "complemento": {
        "type": "string",
        "description": "Complemento (apto, bloco, etc.)"
      }
    },
    "required": ["cep", "numero"]
  }
}
```
