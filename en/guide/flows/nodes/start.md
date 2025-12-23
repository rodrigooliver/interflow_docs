# Nó: Start (Início)

O ponto de partida do fluxo.

## Visão Geral

O nó **Start** é o ponto de entrada obrigatório de todo fluxo. É criado automaticamente e não pode ser removido.

::: info Sobre Gatilhos
O nó Start **não possui configurações de gatilho**. Os gatilhos são configurados separadamente nas **configurações do fluxo**, acessíveis pelo ícone de engrenagem no header do editor.
:::

## Características

- **Obrigatório**: Todo fluxo precisa de um nó Start
- **Único**: Só pode existir um nó Start por fluxo
- **Não removível**: Não pode ser excluído
- **Sem entrada**: Não possui handle de entrada
- **Sem configuração**: Não possui propriedades editáveis

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Saída | Direita | Verde | Conecta ao primeiro nó do fluxo |

## Quando o Fluxo é Iniciado

O fluxo é iniciado dependendo do **tipo de fluxo**:

| Tipo de Fluxo | Quando Inicia |
|---------------|---------------|
| **Geral** | Gatilhos configurados ou início manual |
| **Fechamento de Atendimento** | Ao encerrar um atendimento com o tipo de fechamento vinculado |
| **Mudança de Estágio CRM** | Ao mover cliente para o estágio vinculado |
| **Transferência de Equipe** | Ao transferir chat para a equipe vinculada |

Veja mais detalhes em [Tipos de Fluxo](/guide/flows/builder#tipos-de-fluxo).

## Exemplos

### Fluxo Simples

```
[Start] → [Texto: "Olá! Como posso ajudar?"]
```

### Fluxo com Saudação Dinâmica

```
[Start] → [Condição: horário]
            ↓
   ┌────────┼────────┐
   6h      12h      18h
   ↓        ↓        ↓
[Bom dia] [Boa tarde] [Boa noite]
```

### Fluxo de Atendimento

```
[Start] → [Texto: Boas-vindas]
        → [Input: Menu principal]
        → [Condição: opção]
```

## Boas Práticas

::: tip Primeiro Nó
Conecte sempre a um nó de boas-vindas ou menu principal.
:::

::: tip Contexto
Use o início para definir variáveis de contexto necessárias.
:::

## Próximos Passos

- [Configurações do Fluxo](/guide/flows/builder#configurações-do-fluxo)
- [Tipos de Fluxo](/guide/flows/builder#tipos-de-fluxo)
- [Construtor de Fluxos](/guide/flows/builder)
