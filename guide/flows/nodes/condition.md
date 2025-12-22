# Nó: Condição

Cria ramificações no fluxo baseadas em lógica condicional.

## Visão Geral

O nó **Condição** permite criar ramificações no fluxo baseadas em condições lógicas. É essencial para criar fluxos inteligentes que respondem a diferentes cenários.

## Configurações

### Estrutura de Condição

Cada condição possui:

- **Tipo**: Variável, Dados do Cliente ou Data/Hora
- **Campo**: O que será avaliado
- **Operador**: Como comparar
- **Valor**: Com o que comparar

### Tipos de Condição

#### Variável

Avalia o valor de uma variável do fluxo:

```
variavel_resposta igual a "sim"
```

#### Dados do Cliente

Avalia dados do cliente ou atendimento:

| Campo | Descrição |
|-------|-----------|
| `canal` | Tipo do canal (WhatsApp, Instagram, etc.) |
| `tipo_mensagem` | Tipo da última mensagem |
| `funil` | Funil atual do cliente |
| `equipe` | Equipe atribuída |
| `atendente` | Atendente responsável |
| `tags` | Tags do cliente |

#### Data/Hora

Avalia condições de tempo:

```
hora_atual maior que "09:00" E menor que "18:00"
```

### Operadores Disponíveis

| Operador | Descrição | Exemplo |
|----------|-----------|---------|
| **Igual a** | Valor exato | `status igual a "ativo"` |
| **Diferente de** | Não é igual | `status diferente de "inativo"` |
| **Contém** | Texto contém | `mensagem contém "ajuda"` |
| **Não contém** | Texto não contém | `email não contém "spam"` |
| **Maior que** | Valor numérico maior | `idade maior que 18` |
| **Menor que** | Valor numérico menor | `quantidade menor que 10` |
| **Está definido** | Variável tem valor | `email está definido` |
| **Está vazio** | Variável sem valor | `telefone está vazio` |
| **Começa com** | Texto inicia com | `nome começa com "Dr."` |
| **Termina com** | Texto finaliza com | `email termina com "@gmail.com"` |
| **Corresponde a Regex** | Expressão regular | `cpf corresponde a "^\d{11}$"` |
| **Não corresponde a Regex** | Não casa com regex | - |
| **Está na lista** | Valor em lista | `status está na lista` |
| **Não está na lista** | Valor fora da lista | - |

### Operadores Lógicos

Combine múltiplas condições:

| Operador | Descrição |
|----------|-----------|
| **E (AND)** | Todas as condições devem ser verdadeiras |
| **OU (OR)** | Pelo menos uma condição deve ser verdadeira |

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Condição 1, 2, ... | Direita | Azul | Saídas para cada condição verdadeira |
| Senão (Else) | Direita | Vermelho | Nenhuma condição foi verdadeira |

## Exemplos de Uso

### Horário Comercial

```
Condição 1:
  - hora_atual maior que "08:00"
  - E hora_atual menor que "18:00"
  → [Atendimento Ativo]

Senão:
  → [Mensagem Fora do Horário]
```

### Validar Email

```
Condição 1:
  - email contém "@"
  - E email contém "."
  → [Email Válido]

Senão:
  → [Solicitar Email Novamente]
```

### Direcionamento por Canal

```
Condição 1: canal igual a "whatsapp_official"
  → [Fluxo WhatsApp Oficial]

Condição 2: canal igual a "instagram"
  → [Fluxo Instagram]

Condição 3: canal igual a "email"
  → [Fluxo Email]

Senão:
  → [Fluxo Padrão]
```

### Cliente VIP

```
Condição 1:
  - tags contém "vip"
  → [Atendimento Prioritário]

Senão:
  → [Atendimento Normal]
```

### Múltiplas Condições Combinadas

```
Condição 1:
  - status igual a "ativo"
  - E saldo maior que 0
  - E dias_vencimento menor que 30
  → [Cliente em Dia]

Condição 2:
  - status igual a "ativo"
  - E saldo maior que 0
  - E dias_vencimento maior que 30
  → [Cliente com Pendência]

Senão:
  → [Cliente Inativo]
```

## Boas Práticas

::: tip Ordem das Condições
Coloque as condições mais específicas primeiro e as mais genéricas por último.
:::

::: tip Sempre use "Senão"
Configure sempre a saída "Senão" para tratar casos não previstos.
:::

::: tip Teste as Condições
Use o modo de teste do fluxo para validar todas as ramificações.
:::

::: tip Evite Complexidade
Muitas condições aninhadas dificultam a manutenção. Considere dividir em sub-fluxos.
:::

## Próximos Passos

- [Nó: Definir Variável](/guide/flows/nodes/variable)
- [Nó: Aguardar Resposta](/guide/flows/nodes/input)

