# Tipos de Encerramento

Padronize o motivo ao fechar um atendimento e, opcionalmente, dispare um fluxo (ex.: pesquisa CSAT).

::: tip Acesso
Menu → **Tipos de encerramento**.
:::

## Como funcionam

Ao finalizar um chat, o atendente escolhe um **tipo de encerramento**. Isso:

- Padroniza métricas e motivos de fechamento
- Pode iniciar um fluxo do tipo **`attendance_closure`** (ex.: enviar pesquisa de satisfação)

## Cadastrar um tipo

1. Abra **Tipos de encerramento**
2. Clique em **Novo**
3. Informe o nome (ex.: “Resolvido”, “Sem resposta”, “Spam”)
4. (Opcional) Vincule um fluxo `attendance_closure`
5. Salve

## Ordem

A lista segue a ordem definida pelo administrador. Essa mesma sequência aparece ao fechar o atendimento, no chat e no nó de encerramento do fluxo.

1. Na lista de tipos, segure a alça à esquerda do nome
2. Arraste até a posição desejada e solte
3. A ordem é gravada na hora. Um tipo novo entra no fim
4. Limpe a pesquisa antes de reordenar: com o filtro ativo, o arraste fica pausado

::: tip Fluxo de encerramento
Crie o fluxo antes em **Fluxos**, com tipo adequado a encerramento de atendimento, e depois selecione-o no tipo.
:::

## Relacionados

- [Interface de chat](/guide/chat/interface)
- [Construtor de fluxos](/guide/flows/builder)
- [Reabrir após o encerramento](/guide/settings/#reabrir-atendimento-apos-o-encerramento)
