# Automações de projetos de tarefas

Configure regras para que o quadro do projeto reaja sozinho a mudanças nas tarefas.

> Relacionado: [Visão geral](/guide/tasks/) · [Templates](/guide/tasks/templates) · [Changelog v2026.7.19](/changelog/2026/07/2026.7.19)

## O que é

Cada **projeto de tarefas** pode ter uma lista ordenada de **automações**. Quando uma tarefa é **criada** ou **atualizada**, o Interflow avalia as regras ativas e, se as condições forem atendidas, aplica as ações (mover de coluna, mudar status, arquivar, criar follow-up, etc.).

As ações de status e arquivamento feitas pela automação registram **histórico** e enviam **notificações** aos membros do projeto com notificações ativas — como nas ações manuais de iniciar, concluir ou cancelar.

::: tip Templates
Alguns [templates](/guide/tasks/templates) já criam regras prontas (por status, prioridade ou sprint). Você pode editá-las ou criar novas a qualquer momento.
:::

## Onde acessar

| Ação | Caminho |
|------|---------|
| Gerenciar automações | Projeto aberto → menu do projeto → **Automações** |
| Definir etapa padrão | Menu do projeto → **Editar Projeto** → estágio padrão |

## Anatomia de uma regra

No modal **Automações do projeto**:

1. **Evento** — **Tarefa cadastrada** ou **Tarefa atualizada**
2. **Condições** — o que precisa ser verdade (**E** / **OU**), com opção de comparar valor **antes** e **depois** na atualização
3. **Ações** — o que o sistema deve fazer
4. **Ordem** — regras são avaliadas de cima para baixo
5. **Ativa / inativa** — desligue sem apagar

### Campos nas condições

- Status, estágio (coluna), prioridade
- Arquivada / não arquivada
- Vencimento (incluindo “está atrasada”)

### Ações disponíveis

- Definir status · Mover estágio · Definir prioridade
- Arquivar · Desarquivar · Limpar vencimento
- **Criar tarefa** (follow-up) — título com variáveis como o título da tarefa atual, cliente (mesmo / nenhum), vencimento em X dias
- **Iniciar fluxo silencioso** — fluxos do tipo automação de tarefas

## Exemplos práticos

### Status move a coluna

Quando o status passa a **Em andamento** e a tarefa ainda não está na coluna correspondente, a automação move o cartão para **Em Desenvolvimento**.

### Arrastar a coluna atualiza o status

Quando a etapa muda para **Concluídas** e o status ainda não é **Concluída**, a automação marca a tarefa como concluída (com histórico e notificação).

### Evitar loops

As regras dos templates só disparam se o “outro lado” ainda não estiver no valor alvo. Assim, iniciar uma tarefa não fica empurrando a coluna de novo se o cartão já estiver no lugar certo.

## Dicas

- Comece por um [template](/guide/tasks/templates) e ajuste só o que for específico do time
- Prefira poucas regras claras a muitas regras que se sobrepõem
- Teste com uma tarefa: mude o status e confira se a coluna acompanha (e o contrário)
- Membros com notificações ativas recebem alertas das mudanças feitas pela automação

## Limitações conhecidas

- Ações em massa (ex.: arquivar várias concluídas de uma vez) podem se comportar de forma diferente das ações cartão a cartão
- O conjunto de ações na tela cobre o fluxo do dia a dia do quadro; algumas opções avançadas podem não aparecer no seletor

## Próximos passos

- [Templates de projetos](/guide/tasks/templates)
- [Visão geral de Tarefas](/guide/tasks/)
- [Changelog v2026.7.19](/changelog/2026/07/2026.7.19)
