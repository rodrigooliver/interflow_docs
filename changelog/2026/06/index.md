# Junho 2026

Atualizações do mês de junho de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.6.4](/changelog/2026/06/2026.6.4) | 23/06 | **Chats Internos aprimorados** — preview da última mensagem, badge de não lidos unificado, fonte única de dados com Realtime, atalho para atendimentos, correções mobile e tipo de mensagem |
| [2026.6.3](/changelog/2026/06/2026.6.3) | 09/06 | **Página "Minhas Tarefas"** — todas as suas tarefas em um só lugar, independente de projeto; agrupamento e ordenação na view lista; edição rápida de status, prioridade e vencimento direto na lista |
| [2026.6.2](/changelog/2026/06/2026.6.2) | 09/06 | **Exclusão automática de clientes por limite de uso** — configurável em Limites, com botão "Executar agora" e progresso em tempo real; clientes com pedidos POS agora podem ser excluídos |
| [2026.6.1](/changelog/2026/06/2026.6.1) | 08/06 | **Botões de template WhatsApp Official agora salvos no histórico** — botões de quick reply, URL e telefone exibidos corretamente no chat após envio manual ou em massa |

---

## Resumo do Mês

### ✨ Novas Funcionalidades (9)
- **Preview da última mensagem nos Chats Internos** (v2026.6.4) — listagem exibe conteúdo, mídia ou remetente da última mensagem
- **Badge de não lidos unificado** (v2026.6.4) — contador sincronizado em tempo real na navbar mobile, header de atendimentos e menu compacto
- **Atalho para Atendimentos** (v2026.6.4) — botão na listagem de Chats Internos para ir a `/app/chats`
- **Página "Minhas Tarefas"** (v2026.6.3) — todas as tarefas atribuídas a você em todos os projetos, com views de lista e calendário, nome do projeto em cada tarefa, filtros e botão de atualizar
- **Agrupamento na view lista** (v2026.6.3) — por etapa, projeto, data de vencimento (Vencidas, Ontem, Hoje, Amanhã, Esta semana, Próxima semana, Futuras, Sem data), responsável, status ou prioridade
- **Ordenação na view lista** (v2026.6.3) — padrão, vencimento, prioridade, título, data de criação ou status, aplicada dentro de cada grupo
- **Edição rápida na lista** (v2026.6.3) — troca de status, prioridade e vencimento direto na linha da tarefa, com notificações e histórico preservados
- **Exclusão automática de clientes por limite de uso** (v2026.6.2) — exclusão configurável em Configurações > Limites (gatilho %, meta %, ordem por último contato ou cadastro, conversas vinculadas, hora de execução), processada pela fila de exclusão existente
- **Botão "Executar agora" nas limpezas automáticas** (v2026.6.2) — dispara a limpeza de Clientes ou Armazenamento imediatamente, com estado "Em andamento..." que bloqueia disparos duplicados

### 🔄 Alterações (4)
- **Fonte única de dados para Chats Internos** (v2026.6.4) — lista global com Realtime, sem fetch/subscription duplicados na página
- **Teclado no campo de mensagem** (v2026.6.4) — Enter envia; Cmd/Ctrl+Enter quebra linha
- **Melhorias visuais na lista de tarefas** (v2026.6.3) — cabeçalho "Vencimento" sem quebra de linha, status e datas sem quebra, data vencida apenas em vermelho, controles de agrupamento/ordenação em barra própria
- **Clientes com pedidos (POS) agora podem ser excluídos** (v2026.6.2) — pedidos preservados no histórico de vendas, apenas desvinculados do cliente

### 🐛 Correções (4)
- **Mensagens internas salvas como email** (v2026.6.4) — tipos corretos (`text`, `image`, etc.) para chats sem canal vinculado
- **Input oculto no mobile em chat interno** (v2026.6.4) — barra de navegação inferior oculta ao abrir conversa
- **Quebra de linha com Cmd/Ctrl+Enter** (v2026.6.4) — inserção correta em textarea controlado
- **Botões de template WhatsApp Official não exibidos no chat** (v2026.6.1) — botões dos templates (quick reply, URL, telefone) passam a ser salvos no `metadata` da mensagem e renderizados no histórico do chat; corrige envio manual e disparo em massa

---

::: info 📝 Total
**4 releases** neste mês!
:::
