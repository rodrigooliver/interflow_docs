# Nó: Encerrar Atendimento

Finaliza o atendimento atual, opcionalmente gerando um resumo.

## Visão Geral

O nó **Encerrar Atendimento** finaliza formalmente o atendimento em curso. Pode opcionalmente:

- Gerar um resumo automático usando IA
- Definir um tipo de encerramento
- Registrar informações de fechamento

## Configurações

### Gerar Resumo Automático

Quando ativado, a IA analisa a conversa e gera um resumo automático do atendimento.

**O resumo inclui:**
- Motivo do contato
- Ações realizadas
- Resultado/resolução
- Próximos passos (se houver)

::: info Nota
Esta funcionalidade requer integração com OpenAI configurada.
:::

### Tipo de Encerramento

Selecione o motivo do encerramento dentre os tipos cadastrados na organização.

Exemplos de tipos:
- Problema Resolvido
- Venda Realizada
- Cliente Desistiu
- Fora do Horário
- Spam
- Teste

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua após encerrar (para ações pós-encerramento) |

## Exemplos de Uso

### Encerramento Simples

```
[Texto] → "Obrigado pelo contato! Até breve! "
[Encerrar Atendimento]
  - Resumo: Desativado
  - Tipo: Atendimento Concluído
```

### Com Resumo Automático

```
[Texto] → "Atendimento finalizado. Obrigado!"
[Encerrar Atendimento]
  - Resumo: Ativado
  - Tipo: Problema Resolvido
```

### Por Inatividade

```
[Delay] → 30 minutos
[Texto] → "Parece que você está ocupado.
           Vou encerrar por aqui, mas pode
           me chamar quando precisar! "
[Encerrar Atendimento]
  - Tipo: Inatividade
```

### Após Venda

```
[Texto] → "Parabéns pela compra!
           Seu pedido já está sendo processado."
[Encerrar Atendimento]
  - Resumo: Ativado
  - Tipo: Venda Realizada
```

## Fluxo de Encerramento

O encerramento segue esta sequência:

1. **Execução do nó** - O nó é processado
2. **Resumo (se ativo)** - IA gera resumo da conversa
3. **Tipo de encerramento** - Registrado no atendimento
4. **Status atualizado** - Atendimento marcado como "Fechado"
5. **Próximos nós** - Se houver, continua a execução

## Tipos de Encerramento

Acesse **Configurações > Tipos de Encerramento** para:

- Criar novos tipos
- Editar tipos existentes
- Desativar tipos não utilizados

Ter tipos bem definidos ajuda na:
- Análise de relatórios
- Identificação de padrões
- Melhoria do atendimento

## Boas Práticas

::: tip Mensagem de Despedida
Sempre envie uma mensagem de despedida antes de encerrar para uma boa experiência.
:::

::: tip Tipos Relevantes
Configure tipos de encerramento que façam sentido para seu negócio.
:::

::: tip Resumo para Atendimentos Complexos
Ative o resumo automático para atendimentos longos ou complexos.
:::

::: tip Análise de Dados
Use os tipos de encerramento para gerar relatórios e identificar melhorias.
:::

## Próximos Passos

- [Nó: Atualizar Cliente](/guide/flows/nodes/update-customer)
- [Nó: Mensagem do Sistema](/guide/flows/nodes/system-message)

