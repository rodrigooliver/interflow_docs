# Automações de projetos de tarefas

Configure regras para que o quadro Kanban do projeto reaja sozinho a mudanças nas tarefas — e comece mais rápido com **templates** na criação do projeto.

> Relacionado: [Changelog v2026.7.19](/changelog/2026/07/2026.7.19) · [Minhas Tarefas](/guide/tasks)

## O que é

Cada **projeto de tarefas** pode ter uma lista ordenada de **automações**. Quando uma tarefa é **criada** ou **atualizada**, o Interflow avalia as regras ativas e, se as condições forem atendidas, aplica as ações configuradas (mover de coluna, mudar status, arquivar, etc.).

As ações de status e arquivamento feitas pela automação registram **histórico** e enviam **notificações** aos membros do projeto com notificações ativas — como nas ações manuais.

## Onde acessar

| Ação | Caminho |
|------|---------|
| Criar projeto com template | **Tarefas** → novo projeto → escolher template |
| Gerenciar automações | Projeto aberto → menu do projeto → **Automações** |
| Definir etapa padrão | Editar projeto → **etapa padrão** |

## Templates na criação

| Template | Colunas | Automações |
|----------|---------|------------|
| **Livre** | Backlog | Nenhuma |
| **Por status** | Iniciar · Em Desenvolvimento · Concluídas | Status ↔ coluna (nos dois sentidos) |
| **Por prioridade** | Baixa · Média · Alta | Prioridade ↔ coluna (nos dois sentidos) |
| **Sprint simples** | Backlog · Em andamento · Em revisão · Feito | Concluído ↔ coluna Feito |

Na criação, a **primeira coluna** do template vira a **etapa padrão** do projeto (editável depois).

## Anatomia de uma regra

1. **Evento** — `Tarefa criada` ou `Tarefa atualizada`
2. **Condições** — o que precisa ser verdade (e/ou), com opção de comparar valor **antes** e **depois** na atualização
3. **Ações** — o que o sistema deve fazer
4. **Ordem** — regras são avaliadas de cima para baixo
5. **Ativa / inativa** — desligue sem apagar

### Campos comuns nas condições

- Status, etapa (coluna), prioridade
- Arquivada / não arquivada
- Vencimento (incluindo “atrasada”)

### Ações comuns

- Definir status ou etapa
- Definir prioridade
- Arquivar / desarquivar
- Limpar data de vencimento
- Criar tarefa (follow-up)
- Iniciar fluxo silencioso

## Exemplos práticos

### Status move a coluna

Quando o status passa a **Em andamento** e a tarefa ainda não está na coluna correspondente, a automação move o card para **Em Desenvolvimento**.

### Arrastar a coluna atualiza o status

Quando a etapa muda para **Concluídas** e o status ainda não é **Concluído**, a automação marca a tarefa como concluída (com histórico e notificação).

### Evitar loops

As regras dos templates só disparam se o “outro lado” ainda não estiver no valor alvo. Assim, iniciar uma tarefa não fica empurrando a coluna de novo se o card já estiver no lugar certo.

## Etapa padrão

Ao criar uma tarefa no projeto, a coluna selecionada por padrão é a **etapa padrão**. Use isso para que novas tarefas caiam no backlog ou na coluna de entrada correta.

## Dicas

- Comece por um template e ajuste só o que for específico do time
- Prefira poucas regras claras a muitas regras que se sobrepõem
- Teste com uma tarefa: mude o status e confira se a coluna acompanha (e o contrário)
- Membros com notificações ativas recebem alertas das mudanças feitas pela automação

## Limitações conhecidas

- Ações em massa (ex.: arquivar várias concluídas de uma vez) podem se comportar de forma diferente das ações card a card
- Nem todos os tipos de ação avançados aparecem na interface; o conjunto principal cobre o fluxo Kanban do dia a dia

## Próximos passos

- [Minhas Tarefas](/guide/tasks)
- [Changelog v2026.7.19](/changelog/2026/07/2026.7.19)
