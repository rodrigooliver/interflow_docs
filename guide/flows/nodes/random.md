# Nó: Distribuição Aleatória

Distribui o fluxo aleatoriamente entre múltiplas saídas.

## Visão Geral

O nó **Aleatório** (Random) distribui o fluxo de forma aleatória entre as saídas configuradas. Útil para testes A/B, distribuição de leads ou variação de conteúdo.

## Configurações

### Número de Saídas

Configure quantas saídas o nó terá (mínimo 2):

- Use os botões **+** e **-** para ajustar
- Cada saída tem a mesma probabilidade de ser escolhida

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída 1, 2, 3... | Direita | Saídas aleatórias (distribuição igual) |

## Probabilidade

A distribuição é uniforme:

| Saídas | Probabilidade por Saída |
|--------|-------------------------|
| 2 | 50% cada |
| 3 | 33.3% cada |
| 4 | 25% cada |
| 5 | 20% cada |

## Exemplos de Uso

### Teste A/B de Mensagens

```
[Random: 2 saídas]
  ├─ Saída 1 (50%): "Olá! Como posso ajudar?"
  └─ Saída 2 (50%): "Oi! Em que posso ser útil hoje?"
```

### Distribuição de Leads

```
[Random: 3 saídas]
  ├─ Saída 1: Atribuir ao Vendedor A
  ├─ Saída 2: Atribuir ao Vendedor B
  └─ Saída 3: Atribuir ao Vendedor C
```

### Variação de Ofertas

```
[Random: 4 saídas]
  ├─ Saída 1: Oferta 10% de desconto
  ├─ Saída 2: Oferta Frete Grátis
  ├─ Saída 3: Oferta Brinde
  └─ Saída 4: Sem oferta (controle)
```

### Gamificação

```
[Random: 5 saídas]
  ├─ Saída 1: "Você ganhou 5% de desconto!"
  ├─ Saída 2: "Você ganhou 10% de desconto!"
  ├─ Saída 3: "Você ganhou 15% de desconto!"
  ├─ Saída 4: "Você ganhou frete grátis!"
  └─ Saída 5: "Que pena, não foi dessa vez..."
```

## Casos de Uso

### Testes A/B

Compare diferentes abordagens de comunicação:

1. Configure 2 saídas
2. Conecte cada saída a uma versão diferente
3. Acompanhe as métricas de cada versão
4. Identifique qual performa melhor

### Distribuição de Atendimentos

Distribua atendimentos igualmente entre atendentes ou equipes.

### Sorteios e Promoções

Crie mecânicas de sorteio com diferentes probabilidades de prêmios.

## Boas Práticas

::: tip Acompanhe Resultados
Para testes A/B, marque cada caminho com uma tag ou variável para facilitar a análise.
:::

::: tip Mínimo Estatístico
Para testes A/B confiáveis, garanta um volume mínimo de 100+ interações por caminho.
:::

::: tip Documentação
Documente o propósito de cada saída para facilitar a manutenção.
:::

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Atualizar Cliente](/guide/flows/nodes/update-customer)

