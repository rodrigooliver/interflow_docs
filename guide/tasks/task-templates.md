# Templates de tarefa

Moldes reutilizáveis **por projeto**. Ao criar uma tarefa a partir de um template, o formulário já vem preenchido — você só revisa e salva.

> Relacionado: [Visão geral](/guide/tasks/) · [Automações](/guide/tasks/project-automations) · [Changelog v2026.8.11](/changelog/2026/08/2026.8.11)

::: tip Não confundir
Os [templates de quadro](/guide/tasks/templates) definem **colunas** ao criar o projeto. Os **templates de tarefa** definem o **conteúdo** de uma tarefa que se repete.
:::

## Para que serve

- Padronizar onboarding, follow-up, pós-venda ou qualquer rotina que sempre pede os mesmos campos
- Evitar digitar título, checklist e responsáveis de novo
- Calcular o vencimento em **dias a partir da criação** (não uma data fixa no calendário)

## Onde acessar

| Ação | Caminho |
|------|---------|
| Gerenciar templates | Projeto aberto → menu do projeto → **Templates** |
| Criar tarefa a partir de um template | Botão **Adicionar Tarefa** → seta → escolha o molde |
| Tarefa sem molde | **Adicionar Tarefa** (ou **Tarefa em branco** no menu) |

A seta ao lado de **Adicionar Tarefa** só aparece quando o projeto já tem pelo menos um template.

## Criar ou editar um template

1. Abra o projeto em **Tarefas**
2. Menu do projeto → **Templates**
3. Clique em **Novo template** (ou no lápis para editar)
4. Preencha o molde e salve

Para excluir, use a lixeira na lista e confirme.

### O que o molde guarda

| Campo | Comportamento |
|-------|----------------|
| **Título** | Obrigatório; vira o título da nova tarefa |
| **Descrição** | Texto inicial |
| **Vencimento em dias** | 0 = hoje; 1, 2, 7 ou outro número. Sem valor = sem vencimento |
| **Hora** | Opcional. Se houver dias e não houver hora, usa o horário do momento da criação |
| **Etapa** | Coluna do quadro, ou a etapa padrão do projeto |
| **Prioridade** e **Status** | Valores iniciais da tarefa |
| **Responsáveis** | Membros do projeto |
| **Etiquetas** | Etiquetas da organização |
| **Checklist** | Itens começam desmarcados na tarefa nova |

Atalhos de prazo: **Hoje**, **1 dia**, **2 dias**, **7 dias** ou **Sem vencimento**.

## Usar na criação de tarefa

1. No projeto, clique na seta ao lado de **Adicionar Tarefa**
2. Escolha o template — o formulário abre já preenchido
3. Ajuste o que for específico daquela ocorrência (cliente, data, texto)
4. Salve

O prazo absoluto é calculado **na hora de criar**. Um template com “3 dias” criado na segunda vence na quinta; se você criar na sexta, vence na segunda seguinte.

## Automações e macros

O mesmo template serve em outros pontos do produto:

| Onde | Como |
|------|------|
| [Automações do projeto](/guide/tasks/project-automations) | Na ação **Criar tarefa**, selecione o template. O título ainda aceita variáveis (`título`, `descrição`, nome do cliente, status, prioridade). Dá para usar o template também como **condição**. |
| [Macros de cliente](/guide/crm/customer-macros) | Na ação **Criar tarefa**, escolha o projeto e o template daquele projeto. |

::: tip Variáveis na automação
Mesmo com template, você pode montar o título com tokens (por exemplo o nome do cliente). Clique nos chips de variáveis para copiar.
:::

## Limitações conhecidas

- Templates pertencem a **um projeto**. Não há molde compartilhado entre projetos
- O vencimento é **relativo** (dias a partir da criação), não uma data fixa
- A seta de escolha só aparece depois que existir pelo menos um template no projeto

## Próximos passos

- [Visão geral de Tarefas](/guide/tasks/)
- [Templates de quadro](/guide/tasks/templates)
- [Automações de projetos](/guide/tasks/project-automations)
- [Macros de cliente](/guide/crm/customer-macros)
- [Changelog v2026.8.11](/changelog/2026/08/2026.8.11)
