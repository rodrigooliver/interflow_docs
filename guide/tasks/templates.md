# Templates de projetos de tarefas

Ao criar um projeto em **Tarefas**, escolha um **template de quadro** com colunas prontas — e, quando fizer sentido, com regras de automação já configuradas.

> Relacionado: [Visão geral](/guide/tasks/) · [Templates de tarefa](/guide/tasks/task-templates) · [Automações](/guide/tasks/project-automations) · [Changelog v2026.7.19](/changelog/2026/07/2026.7.19)

::: tip Templates de tarefa
Para moldes do **conteúdo** da tarefa (título, prazo, checklist), use [Templates de tarefa](/guide/tasks/task-templates) — não os templates de quadro desta página.
:::

## Para que serve

- Começar um quadro alinhado ao jeito de trabalhar da equipe
- Evitar montar colunas (e regras) do zero a cada projeto novo
- Manter status ou prioridade coerentes com a coluna, quando o template trouxer automações

## Como usar

1. Em **Tarefas**, clique em **Adicionar Projeto** (ou **Criar primeiro projeto**)
2. Informe nome e descrição → **Continuar**
3. Em **Configurar etapas**, escolha o **template de quadro**
4. Ajuste nomes e cores das colunas, se precisar → **Criar**

A **primeira coluna** do template vira a **etapa padrão** do projeto (editável depois em **Editar Projeto**).

## Templates disponíveis

| Template | Colunas | Automações iniciais |
|----------|---------|---------------------|
| **Livre** | Backlog (você define quantas colunas, de 1 a 10) | Nenhuma — você monta o fluxo do zero |
| **Por status** | Iniciar · Em Desenvolvimento · Concluídas | Sincroniza status ↔ coluna (nos dois sentidos) |
| **Por prioridade** | Baixa · Média · Alta | Sincroniza prioridade ↔ coluna (nos dois sentidos) |
| **Sprint simples** | Backlog · Em andamento · Em revisão · Feito | Sincroniza “Concluída” ↔ coluna Feito |

### Livre

Ideal quando o time tem um fluxo próprio. Só a coluna **Backlog** vem pronta; você adiciona as demais no passo de criação ou depois no quadro (**Adicionar Etapa**).

### Por status

Melhor quando a equipe pensa em **iniciar → em desenvolvimento → concluídas**. Ao **Iniciar** ou **Concluir** no cartão, a coluna pode acompanhar — e ao arrastar para uma coluna, o status pode atualizar. Detalhes das regras: [Automações](/guide/tasks/project-automations).

### Por prioridade

Organize o quadro pelo grau de urgência. Mover o cartão entre **Baixa**, **Média** e **Alta** pode ajustar a prioridade da tarefa (e o contrário).

### Sprint simples

Fluxo curto de entrega, com colunas de backlog, andamento, revisão e feito. A automação inicial liga o status **Concluída** à coluna **Feito**.

## Etapa padrão

Depois de criar o projeto, em **Editar Projeto** você define o **estágio padrão ao criar tarefa**. Esse valor é pré-selecionado no formulário de nova tarefa (e quando você cria pela coluna, a própria coluna já vem escolhida).

## Depois da criação

- Renomeie ou recolora etapas no quadro
- Adicione ou remova colunas (conforme seu papel no projeto)
- Revise ou desative as automações que vieram com o template em **Automações**
- Trocar de “mentalidade” de template depois da criação é manual: ajuste colunas e regras conforme o time

## Dicas

- Se a dúvida for “como a gente trabalha o status?”, comece por **Por status**
- Se o quadro for só organização visual sem sync, use **Livre**
- Prefira ajustar o template depois de criar a alterar tudo no dia a dia sem padrão

## Próximos passos

- [Templates de tarefa](/guide/tasks/task-templates)
- [Automações de projetos](/guide/tasks/project-automations)
- [Visão geral de Tarefas](/guide/tasks/)
