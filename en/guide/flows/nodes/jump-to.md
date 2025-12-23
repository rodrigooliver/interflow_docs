# Nó: Ir Para (Jump To)

Salta para outro nó do fluxo, criando loops ou reutilizando seções.

## Visão Geral

O nó **Ir Para** (Jump To) permite pular para qualquer outro nó do fluxo. Útil para criar loops, reutilizar seções ou organizar fluxos complexos.

## Configurações

### Nó de Destino

Selecione o nó para onde o fluxo deve pular:

1. Clique no nó para abrir o seletor
2. Busque pelo nome ou tipo do nó
3. Selecione o nó de destino

O seletor mostra:
- Ícone do tipo de nó
- Nome/label do nó
- Tipo do nó

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |

::: info Nota
O nó "Ir Para" não possui handle de saída, pois a execução continua no nó de destino.
:::

## Exemplos de Uso

### Loop de Validação

Volte para pedir informação novamente se inválida:

```
[Texto] → "Informe seu email:"
[Input] → Captura email
[Condição] → Email válido?
  ✅ Sim → Continua
  ❌ Não → [Texto] "Email inválido. Tente novamente."
           [Ir Para] → Volta ao Input
```

### Menu Principal

Retorne ao menu após cada ação:

```
[Menu Principal]
  ├─ Opção 1 → [Ação 1] → [Ir Para: Menu Principal]
  ├─ Opção 2 → [Ação 2] → [Ir Para: Menu Principal]
  └─ Opção 3 → [Encerrar]
```

### Reutilizar Seções

Vá para uma seção comum de diferentes pontos:

```
[Fluxo A] → ... → [Ir Para: Seção Confirmação]
[Fluxo B] → ... → [Ir Para: Seção Confirmação]
[Fluxo C] → ... → [Ir Para: Seção Confirmação]

[Seção Confirmação] → Mensagem de confirmação...
```

### Retry com Limite

```
[Definir Variável] → tentativas = 0
[Loop]
  [Texto] → "Tente adivinhar o número"
  [Input] → Captura resposta
  [Definir Variável] → tentativas = tentativas + 1
  [Condição] → resposta == 7?
    ✅ Sim → "Acertou! 🎉"
    ❌ Não → [Condição] → tentativas < 3?
               ✅ Sim → [Ir Para: Loop]
               ❌ Não → "Suas tentativas acabaram!"
```

## Boas Práticas

::: tip Evite Loops Infinitos
Sempre tenha uma condição de saída para evitar que o cliente fique preso em um loop.
:::

::: tip Limite de Tentativas
Para validações, limite o número de tentativas (ex: 3 vezes).
:::

::: tip Nomes Descritivos
Use nomes descritivos nos nós de destino para facilitar a seleção.
:::

::: tip Organização Visual
Posicione os nós de forma que o fluxo visual faça sentido, mesmo com jumps.
:::

::: warning Cuidado
Jumps excessivos podem tornar o fluxo difícil de entender e manter.
:::

## Alternativas

Em alguns casos, considere alternativas ao "Ir Para":

| Cenário | Alternativa |
|---------|-------------|
| Loops simples | Use o handle de timeout do Input |
| Reutilização complexa | Crie um fluxo separado |
| Múltiplos destinos | Use nó de Condição |

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Aguardar Resposta](/guide/flows/nodes/input)

