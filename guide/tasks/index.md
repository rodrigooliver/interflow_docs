# Tarefas

Organize o trabalho da equipe em **projetos** com quadro visual (colunas e cartões), lista e calendário — e acompanhe o que é seu em **Minhas Tarefas**.

> Relacionado: [Templates](/guide/tasks/templates) · [Automações](/guide/tasks/project-automations) · [Changelog v2026.7.19](/changelog/2026/07/2026.7.19)

## Visão geral

No Interflow, as tarefas vivem dentro de **projetos**. Cada projeto tem:

- **Etapas** (colunas do quadro) — por exemplo Iniciar, Em Desenvolvimento e Concluídas
- **Membros** com papéis (leitor, editor ou administrador) e opção de receber notificações
- **Etiquetas**, histórico e, se quiser, **automações** que mantêm status e coluna alinhados

Você usa o menu **Tarefas** no sistema para abrir o último projeto, criar novos ou ir para a visão unificada das suas atribuições.

::: tip Acesso
Menu principal → **Tarefas**. No celular, o atalho de tarefas abre **Minhas Tarefas**.
:::

## Começando: criar um projeto

1. Em **Tarefas**, clique em **Adicionar Projeto** (ou **Criar primeiro projeto**, se ainda não houver nenhum)
2. Informe **nome** e, se quiser, **descrição** — você entra automaticamente como **administrador**
3. No passo seguinte, escolha um **template de quadro** e ajuste os nomes/cores das etapas
4. Confirme em **Criar** — o quadro do projeto abre pronto para uso

A **primeira coluna** do template vira a **etapa padrão** ao criar tarefas nesse projeto (você pode mudar depois em **Editar Projeto**).

### Templates prontos

| Template | Colunas | Ideia |
|----------|---------|--------|
| **Livre** | Backlog (você define quantas colunas) | Montar o fluxo do zero, sem regras |
| **Por status** | Iniciar · Em Desenvolvimento · Concluídas | Quadro alinhado ao status da tarefa |
| **Por prioridade** | Baixa · Média · Alta | Organizar pelo grau de urgência |
| **Sprint simples** | Backlog · Em andamento · Em revisão · Feito | Fluxo curto de entrega |

Os templates **Por status**, **Por prioridade** e **Sprint simples** já trazem automações iniciais. Detalhes: [Templates](/guide/tasks/templates) · [Automações](/guide/tasks/project-automations).

## Quadro, lista e calendário

Com um projeto aberto, alterne entre:

| Visualização | Para que serve |
|--------------|----------------|
| **Quadro** | Colunas = etapas; cartões = tarefas; arrastar e soltar entre colunas |
| **Lista** | Tabela com edição rápida de status, prioridade e vencimento |
| **Calendário** | Tarefas pelo dia de vencimento |

### No quadro

- **Arraste** o cartão para outra coluna para mudar a etapa
- Em cada coluna: **Adicionar Tarefa** (já com aquela etapa selecionada)
- Botão **+** à direita: **Adicionar Etapa** (nome e cor)
- No cartão com status **Pendente**: botão **Iniciar** → passa para Em andamento
- No cartão **Em andamento**: botão **Concluir** → marca como concluída
- Também no cartão: checklist, vencimento (destaque se atrasada), responsáveis, etiquetas e arquivar

::: tip Arrastar e status
No template **Por status**, arrastar para **Concluídas** pode marcar a tarefa como concluída automaticamente — e iniciar/concluir pelo botão pode mover o cartão para a coluna certa. Isso vem das automações do projeto.
:::

### Filtros do projeto

Na barra do projeto você pode:

- Buscar por título ou descrição
- Filtrar **Atribuídas a mim**, **Vencidas** ou **Mostrar arquivadas**
- Filtrar por **Prioridade** e **Status**
- Abrir **Mais filtros** para combinações avançadas
- **Arquivar concluídas** em lote (com confirmação)

## Criar e editar uma tarefa

1. Clique em **Adicionar Tarefa** (ou no **+** da coluna)
2. Preencha título, descrição, etapa, prioridade, vencimento, responsáveis, etiquetas e, se fizer sentido, o **cliente**
3. Salve — a etapa padrão do projeto é usada se você não escolher outra

Na edição, as abas incluem **Detalhes**, **Subtarefas**, **Comentários**, **Anexos** e **Histórico**. Se a tarefa veio de um atendimento, há atalho para **Ver Atendimento**.

### Campos principais

| Campo | Opções / uso |
|-------|----------------|
| **Status** | Pendente · Em andamento · Concluída · Cancelada |
| **Prioridade** | Baixa · Média · Alta |
| **Etapa** | Coluna do quadro do projeto |
| **Responsáveis** | Membros do projeto |
| **Vencimento** | Data e hora; aparece em destaque quando atrasada |
| **Cliente** | Liga a tarefa ao cadastro do cliente |
| **Etiquetas** | Organização extra; podem trazer checklist padrão |
| **Checklist** | Itens com progresso no cartão |

## Membros e permissões do projeto

Em **Gerenciar membros** (menu do projeto):

| Papel | Pode |
|-------|------|
| **Leitor** | Ver o projeto e as tarefas, sem editar |
| **Editor** | Criar e editar tarefas e etapas |
| **Administrador** | Tudo acima + membros, automações e exclusão do projeto |

Cada membro pode ter **notificações ativadas ou desativadas**. Com notificações ativas, a pessoa recebe avisos de criação, atualização e mudanças relevantes (incluindo as feitas por automação, como iniciar ou concluir).

## Menu do projeto

No ícone de configurações do projeto:

- **Editar Projeto** — nome, descrição e **estágio padrão ao criar tarefa**
- **Gerenciar membros**
- **Automações** — regras do quadro ([guia](/guide/tasks/project-automations)); templates na criação: [Templates](/guide/tasks/templates)
- **Gerenciar etiquetas**
- **Ver Histórico do Projeto**
- **Excluir Projeto**

## Minhas Tarefas

**Todas as minhas tarefas** reúne o que está atribuído a você em todos os projetos, sem precisar trocar de projeto.

::: tip Acesso
No projeto: barra superior → **Todas as minhas tarefas**. Use **Ver por projeto** para voltar ao quadro.
:::

### Visualizações

- **Lista** — título, projeto de origem, status, prioridade, vencimento e responsável
- **Calendário** — pelo vencimento

### Agrupamentos (lista)

| Agrupamento | Descrição |
|-------------|-----------|
| **Etapa** | Fluxo das colunas (padrão) |
| **Projeto** | Por projeto de origem |
| **Data de vencimento** | Vencidas, Ontem, Hoje, Amanhã, Esta semana, Próxima semana, Futuras, Sem data |
| **Responsável** | Por membro |
| **Status** | Pendente, Em andamento, Concluído, Cancelado |
| **Prioridade** | Alta, Média, Baixa |

A escolha de agrupamento é salva por organização.

### Ordenação

Padrão (prioridade + vencimento), vencimento mais próximo ou distante, prioridade, título, data de criação ou status.

### Edição rápida na lista

Clique no **status**, **prioridade** ou **vencimento** da linha para alterar sem abrir a tarefa. No vencimento há atalhos: **Hoje**, **Amanhã**, **Em 1 semana**, data livre ou remover.

Mudanças de status (iniciar, concluir, cancelar) geram histórico e notificam os membros do projeto, como nas ações do quadro.

### Filtros em Minhas Tarefas

Pesquisa por título, **Vencidas**, **Arquivadas**, prioridade e status.

## Tarefas a partir do atendimento

Dá para criar tarefa **sem sair da conversa do cliente**, com ou sem ajuda da IA. O **cliente** do atendimento já vem sugerido na tarefa.

### Pela conversa inteira

1. No atendimento, no campo de mensagem, clique no ícone de lista (**Criar tarefa relacionada a este chat**)
2. Abre o formulário de nova tarefa já ligado àquele atendimento
3. Clique em **Gerar com IA** para a IA montar título, descrição, prioridade e subtarefas com base nas mensagens da conversa
4. (Opcional) No passo **Contexto Adicional para IA**, escreva um comando ou foco — por exemplo “priorizar urgência” ou “focar no orçamento”
5. Revise os campos, complete responsáveis e prazo, e salve

### Por mensagens selecionadas

1. No menu do atendimento, escolha **Selecionar Mensagens** (ou inicie a seleção pelo menu de uma mensagem)
2. Marque as mensagens desejadas — ou use **Selecionar todas**
3. Na barra de seleção, clique em **Criar Tarefa**
4. Abre o **Contexto Adicional para IA** (opcional); confirme para a IA gerar o conteúdo **só com as mensagens escolhidas**
5. Revise, complete os demais campos e salve

As mensagens usadas ficam ligadas à tarefa como contexto. Na tarefa, use **Ver Atendimento** para voltar ao chat.

::: tip Quando usar cada opção
- **Conversa / Gerar com IA** — resumo geral do atendimento
- **Mensagens selecionadas** — só o trecho relevante (pedido, reclamação, acordo)
- **Selecionar todas** — equivalente a considerar o conjunto de mensagens carregadas na conversa
:::

Também é possível ver tarefas na ficha do **cliente** e criar tarefas por fluxos de automação.

## Performance

Pelo atalho **Performance** na área de tarefas, a equipe acompanha indicadores de produtividade por pessoa e período (conforme a permissão da organização).

## Histórico e notificações

- **Histórico da tarefa** — aba na edição (criação, mudanças de status, etapa, responsáveis, etc.)
- **Histórico do projeto** — no menu do projeto
- **Notificações** — por membro; avisos em tempo real quando algo relevante muda

## Dicas de uso

- Use o template **Por status** quando a equipe pensa em “iniciar → em desenvolvimento → concluídas”
- Defina bem a **etapa padrão** para novas tarefas caírem na coluna certa
- Prefira poucas automações claras a muitas regras que se sobrepõem
- Ative notificações só para quem precisa acompanhar o projeto no dia a dia
- Em Minhas Tarefas, agrupe por **vencimento** no começo do dia e por **projeto** quando for priorizar um time

## Próximos passos

- [Templates de projetos](/guide/tasks/templates)
- [Automações de projetos](/guide/tasks/project-automations)
- [Interface de chat](/guide/chat/interface) — criar tarefa a partir do atendimento
- [Dashboard](/guide/dashboard) — widget de tarefas
- [Clientes](/guide/crm/customers) — tarefas na ficha do cliente
