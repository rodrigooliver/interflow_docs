# Nó: Mensagem do Sistema

Adiciona uma mensagem visível apenas internamente, não enviada ao cliente.

## Visão Geral

O nó **Mensagem do Sistema** cria uma mensagem que aparece apenas na interface interna da Interflow. O cliente **não recebe** esta mensagem - ela serve para:

- Documentar o fluxo
- Registrar informações para atendentes
- Criar logs de execução
- Adicionar contexto ao atendimento

## Configurações

### Texto da Mensagem

Campo para escrever a mensagem do sistema. Suporta:

- Texto livre
- Variáveis (<code v-pre>{{nome_variavel}}</code>)
- Múltiplas linhas

## Uso de Variáveis

Personalize as mensagens com variáveis:

```
Cliente qualificado
Nome: {{customer_name}}
Interesse: {{interesse}}
Lead Score: {{lead_score}}
```

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua para o próximo nó |

## Exemplos de Uso

### Log de Etapa

Registre quando o cliente passa por uma etapa importante:

```
Cliente passou pela qualificação inicial
Horário: {{current_time}}
Respostas:
- Interesse: {{interesse}}
- Orçamento: {{orcamento}}
```

### Informações para Atendente

Quando transferir para atendente humano:

```
Transferindo para atendimento humano

Resumo do atendimento:
- Cliente: {{customer_name}}
- Assunto: {{assunto}}
- Tentativas de autoatendimento: {{tentativas}}
- Última resposta: {{last_message}}
```

### Registro de Decisões

Documente decisões tomadas pelo fluxo:

```
Decisão: Cliente direcionado para {{equipe}}
Motivo: {{motivo_direcionamento}}
```

### Debug durante Desenvolvimento

Durante o desenvolvimento, adicione mensagens de debug:

```
DEBUG
variavel_teste: {{variavel_teste}}
condicao_avaliada: {{resultado_condicao}}
```

## Visualização

As mensagens do sistema aparecem:

- Na timeline do atendimento (para atendentes)
- Nos logs do fluxo
- **NÃO** são enviadas ao cliente
- **NÃO** aparecem no chat do cliente

## Diferença: Mensagem do Sistema vs Nota Privada

| Característica | Mensagem do Sistema | Nota Privada |
|----------------|---------------------|--------------|
| Visível para atendentes | Sim | Sim |
| Enviada ao cliente | Não | Não |
| Aparece como nota | Não | Sim |
| Pode ser fixada | Não | Sim |
| Uso principal | Logs e documentação | Anotações importantes |

## Boas Práticas

::: tip Seja Descritivo
Adicione contexto suficiente para que outros atendentes entendam o que aconteceu.
:::

::: tip Use Emojis
Emojis ajudam a identificar rapidamente o tipo de mensagem ( sucesso, erro, info).
:::

::: tip Inclua Variáveis
Registre valores de variáveis importantes para facilitar o diagnóstico.
:::

::: tip Não Abuse
Use com moderação para não poluir a timeline do atendimento.
:::

## Próximos Passos

- [Nó: Nota Privada](/guide/flows/nodes/private-note)
- [Nó: Enviar Texto](/guide/flows/nodes/text)

