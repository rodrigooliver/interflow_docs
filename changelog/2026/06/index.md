# Junho 2026

Atualizações do mês de junho de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.6.14](/changelog/2026/06/2026.6.14) | 30/06 | **Lista de Clientes Inadimplentes — Cobranças** — nova aba dedicada com agrupamento por cliente, cards de resumo, busca, ordenação, parcelas expansíveis e registro de pagamento direto na tela |
| [2026.6.13](/changelog/2026/06/2026.6.13) | 30/06 | **Gerenciar Tags do Cliente pelo Agente IA** — nova ação pronta que permite ao agente adicionar ou remover tags; controle por modo (Nenhuma, Todas ou Selecionadas); enum restrito na tool da OpenAI |
| [2026.6.12](/changelog/2026/06/2026.6.12) | 30/06 | **Permissões granulares por usuário** — controle individual de acesso por módulo; hierarquia exclusiva: customizado > grupo > role; Owner sempre com acesso total; navegação direta ao único submenu disponível |
| [2026.6.11](/changelog/2026/06/2026.6.11) | 26/06 | **Lembretes push antes do compromisso** — alertas push para equipe no app e web, configuráveis por agenda (15 min a 2 h + horários personalizados) |
| [2026.6.10](/changelog/2026/06/2026.6.10) | 26/06 | **Fluxos silenciosos por status de agendamento** — automações internas por etapa, aba dedicada na gestão da agenda, mudanças de status centralizadas na API |
| [2026.6.9](/changelog/2026/06/2026.6.9) | 25/06 | **Rodízio automático em equipes** — distribuição por ordem, reserva bloqueada no pending, situação do rodízio, badge na lista e mensagens de sistema |
| [2026.6.8](/changelog/2026/06/2026.6.8) | 24/06 | **Notificações por evento de agendamento** — envio automático ao cadastrar, confirmar, cancelar, iniciar e concluir; resumo de status e preset "Operacional hoje" na listagem |
| [2026.6.7](/changelog/2026/06/2026.6.7) | 24/06 | **Pausar IA em respostas externas** — configuração por canal (WAHA, Oficial, Instagram, Facebook) para controlar pausa automática da IA ao responder fora do Interflow |
| [2026.6.6](/changelog/2026/06/2026.6.6) | 24/06 | **Filtro "Incluir colaborando"** — expande a lista de conversas com colaborações ativas sem restringir outros filtros; disponível no painel de filtros e em filtros rápidos |
| [2026.6.5](/changelog/2026/06/2026.6.5) | 23/06 | **Timeline de Leads** — jornada unificada do cliente, registro automático de contato externo via WhatsApp pessoal, feedback obrigatório bloqueante e visão para gestores |
| [2026.6.4](/changelog/2026/06/2026.6.4) | 23/06 | **Chats Internos aprimorados** — preview da última mensagem, badge de não lidos unificado, fonte única de dados com Realtime, atalho para atendimentos, correções mobile e tipo de mensagem |
| [2026.6.3](/changelog/2026/06/2026.6.3) | 09/06 | **Página "Minhas Tarefas"** — todas as suas tarefas em um só lugar, independente de projeto; agrupamento e ordenação na view lista; edição rápida de status, prioridade e vencimento direto na lista |
| [2026.6.2](/changelog/2026/06/2026.6.2) | 09/06 | **Exclusão automática de clientes por limite de uso** — configurável em Limites, com botão "Executar agora" e progresso em tempo real; clientes com pedidos POS agora podem ser excluídos |
| [2026.6.1](/changelog/2026/06/2026.6.1) | 08/06 | **Botões de template WhatsApp Official agora salvos no histórico** — botões de quick reply, URL e telefone exibidos corretamente no chat após envio manual ou em massa |

---

## Resumo do Mês

### Novas Funcionalidades (30)
- **Lista de Clientes Inadimplentes — Cobranças** (v2026.6.14) — nova aba dedicada no módulo Cobranças com agrupamento por cliente, cards de total de clientes e valor em atraso, busca, ordenação por colunas, parcelas expansíveis por linha e registro de pagamento direto na tela; WhatsApp buscado de `customer_contacts`
- **Gerenciar Tags do Cliente pelo Agente IA** (v2026.6.13) — nova ação pronta do Agente IA para adicionar ou remover tags do cliente; controle granular por modo (Nenhuma, Todas, Selecionadas) com enum restrito na tool da OpenAI
- **Permissões granulares por usuário** (v2026.6.12) — controle individual de acesso por módulo; hierarquia exclusiva: customizado > grupo > role; Owner sempre com acesso total
- **Controle de visibilidade de clientes e CRM por permissão** (v2026.6.12) — flag `canAccessAll` define se o usuário vê "meus clientes/funis" ou todos; sidebar e filtros adaptam-se automaticamente
- **Navegação direta ao submenu único** (v2026.6.12) — quando só um submenu está disponível por permissão, o clique navega direto sem expandir o menu
- **Lembretes push antes do compromisso** (v2026.6.11) — alertas push para profissional e usuários notificados no app e web; horários predefinidos (15, 30, 60, 120 min) e personalizados; mensagens no idioma do perfil
- **Fluxos silenciosos por status de agendamento** (v2026.6.10) — automações internas em background ao confirmar, iniciar, concluir, cancelar ou marcar no-show; aba dedicada na gestão da agenda
- **Distribuição automática por rodízio** (v2026.6.9) — configuração por equipe com gatilhos, fallback, horários, pausa e plantão por membro
- **Reserva bloqueada no modo pending** (v2026.6.9) — prazos em expediente/folga; só o agente reservado pode atender até expirar
- **Situação do rodízio na equipe** (v2026.6.9) — painel com próximo, último e ordem da fila; ação "Definir como próximo"
- **Marcador de reserva na lista de chats** (v2026.6.9) — badge "Reservado para você" ou "Reservado · {nome}" em conversas pending
- **Mensagens de sistema do rodízio** (v2026.6.9) — tipos `auto_assigned` e `user_start_auto` no histórico do chat
- **Notificações por evento de agendamento** (v2026.6.8) — templates para cadastro, confirmação, cancelamento, início, conclusão, reagendamento, no-show e follow-up pós-atendimento via WhatsApp, e-mail ou fluxo
- **Resumo de status na listagem de agendamentos** (v2026.6.8) — chips clicáveis (A iniciar, Em andamento, Concluídos, Cancelados/ausentes) com contadores
- **Preset "Operacional hoje"** (v2026.6.8) — filtro rápido do dia com agrupamento por fase operacional
- **Pausar IA em respostas externas** (v2026.6.7) — toggle por canal para controlar pausa automática do fluxo/IA quando o atendente responde pelo app nativo (WAHA, WhatsApp Oficial, Instagram, Facebook); padrão ligado
- **Filtro "Incluir colaborando"** (v2026.6.6) — expande a lista de conversas com atendimentos em colaboração, combinável com status, equipe, tags e filtros rápidos personalizados
- **Timeline de Leads (Jornada do Cliente)** (v2026.6.5) — aba Timeline no painel do cliente com CRM, atendimentos, notas, tarefas, agendamentos e contatos externos
- **Registro automático de contato externo** (v2026.6.5) — botão WhatsApp Rápido registra contato fora do Interflow antes de abrir o app
- **Feedback obrigatório após contato externo** (v2026.6.5) — modal bloqueante exige documentação da conversa antes de retomar o chat
- **Configuração de feedback externo** (v2026.6.5) — toggle "Exigir feedback após contato" nas configurações do botão WhatsApp
- **Preview da última mensagem nos Chats Internos** (v2026.6.4) — listagem exibe conteúdo, mídia ou remetente da última mensagem
- **Badge de não lidos unificado** (v2026.6.4) — contador sincronizado em tempo real na navbar mobile, header de atendimentos e menu compacto
- **Atalho para Atendimentos** (v2026.6.4) — botão na listagem de Chats Internos para ir a `/app/chats`
- **Página "Minhas Tarefas"** (v2026.6.3) — todas as tarefas atribuídas a você em todos os projetos, com views de lista e calendário, nome do projeto em cada tarefa, filtros e botão de atualizar
- **Agrupamento na view lista** (v2026.6.3) — por etapa, projeto, data de vencimento (Vencidas, Ontem, Hoje, Amanhã, Esta semana, Próxima semana, Futuras, Sem data), responsável, status ou prioridade
- **Ordenação na view lista** (v2026.6.3) — padrão, vencimento, prioridade, título, data de criação ou status, aplicada dentro de cada grupo
- **Edição rápida na lista** (v2026.6.3) — troca de status, prioridade e vencimento direto na linha da tarefa, com notificações e histórico preservados
- **Exclusão automática de clientes por limite de uso** (v2026.6.2) — exclusão configurável em Configurações > Limites (gatilho %, meta %, ordem por último contato ou cadastro, conversas vinculadas, hora de execução), processada pela fila de exclusão existente
- **Botão "Executar agora" nas limpezas automáticas** (v2026.6.2) — dispara a limpeza de Clientes ou Armazenamento imediatamente, com estado "Em andamento..." que bloqueia disparos duplicados

### Alterações (13)
- **Checks de role substituídos por permissões efetivas** (v2026.6.12) — `isOwnerOrAdmin`, `req.isAdmin` e `req.isOwner` calculados a partir das permissões efetivas no frontend e backend
- **Proteção de rotas de backend por módulo** (v2026.6.12) — middleware verifica permissão efetiva em settings, integrações, billing, equipes, UTM e grupos de permissão
- **Middleware de autenticação com flags de acesso** (v2026.6.12) — `req.isOwner` e `req.isAdmin` populados diretamente, sem queries extras ao banco
- **Push de cadastro de agendamento unificado** (v2026.6.11) — notificação na criação integrada ao serviço de lembretes com mensagens traduzidas (PT, EN, ES)
- **Mudanças de status centralizadas na API** (v2026.6.10) — lista, fila por chegada, slots e cancelamentos médicos disparam notificações e fluxos silenciosos de forma consistente
- **Rota de check-in dedicada** (v2026.6.10) — endpoint `PATCH .../checkin` na fila por ordem de chegada
- **Nó de fluxo Rodízio** (v2026.6.9) — aciona distribuição automática da equipe atual ou selecionada
- **Formulário de templates de notificação** (v2026.6.8) — todos os gatilhos de notificação reativados na interface (antes só "Antes do agendamento" estava disponível)
- **Eventos enriquecidos na timeline** (v2026.6.5) — mudanças de estágio CRM, encerramento e atribuição de chats registrados automaticamente
- **Fonte única de dados para Chats Internos** (v2026.6.4) — lista global com Realtime, sem fetch/subscription duplicados na página
- **Teclado no campo de mensagem** (v2026.6.4) — Enter envia; Cmd/Ctrl+Enter quebra linha
- **Melhorias visuais na lista de tarefas** (v2026.6.3) — cabeçalho "Vencimento" sem quebra de linha, status e datas sem quebra, data vencida apenas em vermelho, controles de agrupamento/ordenação em barra própria
- **Clientes com pedidos (POS) agora podem ser excluídos** (v2026.6.2) — pedidos preservados no histórico de vendas, apenas desvinculados do cliente

### Correções (8)
- **Permissões customizadas de clientes ignoravam `canAccessAll: false`** (v2026.6.12) — sem a flag marcada, o usuário agora vê apenas os clientes que atende, corretamente
- **Lembretes before_appointment com status confirmado** (v2026.6.8) — lembretes passam a ser enviados também para agendamentos confirmados
- **Cancelamento de lembretes pendentes** (v2026.6.8) — lembretes futuros cancelados automaticamente ao cancelar o agendamento
- **Consulta de conversas com filtro aditivo** (v2026.6.6) — corrigido erro ao carregar lista com "Incluir colaborando" ativo
- **Mensagens internas salvas como email** (v2026.6.4) — tipos corretos (`text`, `image`, etc.) para chats sem canal vinculado
- **Input oculto no mobile em chat interno** (v2026.6.4) — barra de navegação inferior oculta ao abrir conversa
- **Quebra de linha com Cmd/Ctrl+Enter** (v2026.6.4) — inserção correta em textarea controlado
- **Botões de template WhatsApp Official não exibidos no chat** (v2026.6.1) — botões dos templates (quick reply, URL, telefone) passam a ser salvos no `metadata` da mensagem e renderizados no histórico do chat; corrige envio manual e disparo em massa

---

::: info Total
**15 releases** neste mês!
:::
