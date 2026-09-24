# Nó: Aguardar Resposta

Captura a resposta do cliente com suporte a texto livre ou múltipla escolha.

## Visão Geral

O nó **Aguardar Resposta** (também chamado de Input) pausa o fluxo e espera uma resposta do cliente. É essencial para criar interações e coletar informações.

## Configurações

### Tipo de Entrada

| Tipo | Descrição |
|------|-----------|
| **Texto Livre** | Aceita qualquer resposta do cliente |
| **Múltipla Escolha** | Define opções específicas que o cliente pode escolher |

### Salvar Resposta

Selecione uma variável para armazenar a resposta do cliente:

```
Variável: resposta_cliente
```

A resposta ficará disponível como <code v-pre>{{resposta_cliente}}</code> nos nós seguintes.

### Timeout

Configure o tempo máximo de espera pela resposta:

| Configuração | Descrição |
|--------------|-----------|
| **Valor Fixo** | Tempo em segundos (ex: 300 = 5 minutos) |
| **Variável** | Use uma variável numérica para definir dinamicamente |

Se o timeout expirar, o fluxo segue pela saída de timeout.

### Opções (Múltipla Escolha)

Quando o tipo é "Múltipla Escolha", configure as opções disponíveis:

```
Opção 1: Suporte
Opção 2: Vendas
Opção 3: Financeiro
```

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Texto/Opção | Direita | Azul | Resposta recebida (texto ou opção selecionada) |
| Sem Correspondência | Direita | Amarelo | Opção não reconhecida (múltipla escolha) |
| Timeout | Direita | Vermelho | Tempo de espera expirou |

## Exemplos de Uso

### Capturar Nome

```
[Nó Texto] → "Qual é o seu nome?"
[Nó Input] → Tipo: Texto Livre
              Variável: nome_cliente
[Nó Texto] → "Prazer em conhecê-lo, {{nome_cliente}}!"
```

### Menu de Opções

```
[Nó Texto] → "Escolha uma opção:
              1. Suporte
              2. Vendas
              3. Outro"

[Nó Input] → Tipo: Múltipla Escolha
              Opção 1: Suporte → [Fluxo Suporte]
              Opção 2: Vendas → [Fluxo Vendas]
              Opção 3: Outro → [Fluxo Geral]
              Sem Correspondência → [Mensagem de Erro]
```

### Com Timeout

```
[Nó Input] → Timeout: 300 segundos (5 minutos)
              Saída Timeout → "Parece que você está ocupado.
                               Me chame quando precisar! "
```

## Validação de Respostas

Para validar respostas (email, telefone, etc.), combine com o nó **Condição**:

```
[Nó Input] → Captura email
[Nó Condição] → email contém "@" ?
  Sim → Continua
  Não → "Por favor, informe um email válido"
           → [Volta para Input]
```

## Fluxos com Múltiplos Inputs

Você pode encadear vários inputs para coletar múltiplas informações:

```
[Input 1] → Nome → {{nome}}
[Input 2] → Email → {{email}}
[Input 3] → Telefone → {{telefone}}
[Texto] → "Dados cadastrados:
           Nome: {{nome}}
           Email: {{email}}
           Telefone: {{telefone}}"
```

## Boas Práticas

::: tip Mensagem Clara
Sempre preceda o input com uma mensagem clara sobre o que espera do cliente.
:::

::: tip Timeout Adequado
Configure um timeout razoável. 5-10 minutos é comum para atendimentos.
:::

::: tip Tratamento de Erros
Sempre configure a saída "Sem Correspondência" em múltipla escolha.
:::

::: tip Variáveis Descritivas
Use nomes de variáveis descritivos: `email_cliente` em vez de `var1`.
:::

## Disponibilidade

::: warning Atenção
O nó **Aguardar Resposta** está disponível apenas em fluxos do tipo:
- **Geral** (general)
- **Encerramento de Atendimento** (attendance_closure)

Fluxos de outros tipos não podem usar este nó.
:::

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Definir Variável](/guide/flows/nodes/variable)

