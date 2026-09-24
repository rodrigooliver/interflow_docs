# Nó: Grupo

Agrupa visualmente nós relacionados para melhor organização do fluxo.

## Visão Geral

O nó **Grupo** é um elemento visual que permite agrupar múltiplos nós. Serve apenas para organização - não afeta a execução do fluxo.

## Características

- **Apenas visual**: Não altera a lógica do fluxo
- **Organizacional**: Ajuda a entender fluxos complexos
- **Redimensionável**: Ajuste o tamanho conforme necessário
- **Sem conexões**: Não possui handles de entrada/saída

## Como Usar

1. Arraste o nó **Grupo** para o canvas
2. Redimensione para cobrir os nós desejados
3. Adicione um nome/label descritivo

## Exemplos de Uso

### Seção de Qualificação

```
┌─────────────────────────────────────┐
│ QUALIFICAÇÃO │
│ ┌───────┐ ┌───────┐ ┌───────┐ │
│ │Texto │→ │Input │→ │Condição│ │
│ └───────┘ └───────┘ └───────┘ │
└─────────────────────────────────────┘
```

### Fluxo de Vendas

```
┌─────────────────────────────────────┐
│ FLUXO DE VENDAS │
│ │
│ [Apresentação] → [Oferta] │
│ ↓ │
│ [Objeções] → [Fechamento] │
│ │
└─────────────────────────────────────┘
```

### Integrações

```
┌─────────────────────────────────────┐
│ INTEGRAÇÕES │
│ │
│ [API CRM] → [API Pagamento] │
│ ↓ │
│ [Webhook Notificação] │
│ │
└─────────────────────────────────────┘
```

## Boas Práticas

::: tip Nomes Descritivos
Use nomes claros que descrevam a função do grupo.
:::

::: tip Cores
Se disponível, use cores diferentes para cada tipo de grupo.
:::

::: tip Não Exagere
Muitos grupos podem poluir a visualização. Use com moderação.
:::

::: tip Documentação
Grupos ajudam a documentar visualmente a estrutura do fluxo.
:::

## Quando Usar

**Use grupos para:**
- Separar seções lógicas do fluxo
- Identificar áreas de responsabilidade
- Documentar visualmente
- Facilitar navegação em fluxos grandes

**Evite grupos para:**
- Fluxos simples (poucos nós)
- Agrupar nós não relacionados
- Substituir boa organização de nós

## Próximos Passos

- [Construtor de Fluxos](/guide/flows/builder)
- [Tipos de Nós](/guide/flows/nodes/)

