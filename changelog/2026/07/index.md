# Julho 2026

Atualizações do mês de julho de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.7.8](/changelog/2026/07/2026.7.8) | 14/07 | **Chats internos** — áudio, marcar lida/não lida, status visualizada em DMs e correção de permissão de settings |
| [2026.7.7](/changelog/2026/07/2026.7.7) | 10/07 | **Busca no Funil** — pesquisar clientes por nome, ver etapa/posição e abrir o cadastro |
| [2026.7.6](/changelog/2026/07/2026.7.6) | 10/07 | **Ocultar finalizados no Funil** — checkbox para esconder clientes com última conversa finalizada/resolvida |
| [2026.7.5](/changelog/2026/07/2026.7.5) | 10/07 | **Restrição de canais ao iniciar conversa** — controle por perfil ou usuário, ocultação de canais auxiliares e validação no servidor |
| [2026.7.4](/changelog/2026/07/2026.7.4) | 08/07 | **Atalhos em Sequência** — múltiplas mensagens com intervalo configurável por atalho, editor no admin e modal de revisão no chat antes do envio |
| [2026.7.3](/changelog/2026/07/2026.7.3) | 07/07 | **Nó Ponto de Controle** — rastreamento explícito de volume e taxa de resposta no fluxo, com relatório filtrável (período, canal, agente) e indicador no funil de vendas |
| [2026.7.2](/changelog/2026/07/2026.7.2) | 03/07 | **Suporte à DeepSeek** — novo provedor de IA (modelos V4 Flash/Pro) disponível com chave própria, no Agente de IA, Testar Prompt e Melhorar Texto, com Thinking Mode configurável |
| [2026.7.1](/changelog/2026/07/2026.7.1) | 01/07 | **Chat de Teste de Fluxos** — painel lateral no FlowBuilder para simular conversas em tempo real, com indicador de nó ativo, override de debounce e modo split com visão do agente |

---

## Resumo do Mês

### ✨ Novas Funcionalidades (14)
- **Áudio nos chats internos** (v2026.7.8) — gravar e enviar áudio em DMs e grupos internos pelo microfone do campo de mensagem
- **Marcar como lida / não lida nos chats internos** (v2026.7.8) — menu na listagem e marcação automática ao abrir a conversa
- **Status visualizada em DMs internos** (v2026.7.8) — mensagens recebidas ficam como lidas para o remetente ao abrir o chat direto
- **Busca de clientes no Funil de Vendas** (v2026.7.7) — pesquisar por nome no topo do funil, ver etapa e posição, e abrir o modal de edição
- **Ocultar finalizados no Funil de Vendas** (v2026.7.6) — checkbox no funil para esconder clientes com última conversa Finalizada/Resolvida, mantendo o histórico intacto
- **Restrição de canais ao iniciar conversa** (v2026.7.5) — quem pode ver cada canal ao iniciar conversa (todos, por perfil ou usuários), sem canais auxiliares na lista e com bloqueio no servidor
- **Atalhos de Mensagem em Sequência** (v2026.7.4) — atalhos com até 10 mensagens, intervalo configurável por passo (0,5s–30s), badge na listagem e compatibilidade com atalhos antigos
- **Composer de Sequência no Chat** (v2026.7.4) — modal de revisão ao usar atalho sequencial: editar textos, remover anexos, ajustar intervalos e enviar com um clique ou Enter
- **Nó Ponto de Controle** (v2026.7.3) — nó não bloqueante na categoria Estatísticas para medir volume de passagem e/ou taxa de resposta, com janela configurável por nó (padrão 48h) e snapshot opcional de variáveis
- **Relatório de Analytics de Follow-up** (v2026.7.3) — painel renovado com filtros (período, canal, agente), atualização manual, design system e relatório escopado por ponto de controle
- **Suporte à DeepSeek** (v2026.7.2) — novo provedor de IA (DeepSeek V4 Flash/Pro) disponível com chave própria do cliente, com Thinking Mode configurável (Alto/Máximo)
- **Chat de Teste de Fluxos** (v2026.7.1) — ambiente completo no FlowBuilder para testar fluxos com cliente real, painel lateral, split view, indicador de nó em tempo real e override de debounce
- **Badge de Canal de Teste** (v2026.7.1) — identificação visual em âmbar no header do chat quando o atendimento é de um canal tipo `test`
- **Indicador flutuante de nó ativo** (v2026.7.1) — badge abaixo do botão de fluxo no header do agente exibe nome do nó, estado de debounce e tooltip com horário

### 🔄 Melhorias (7)
- **Menu de atalhos no chat** (v2026.7.4) — visual alinhado ao design system, com posicionamento estável via portal
- **Compatibilidade com atalhos existentes** (v2026.7.4) — normalização automática do formato antigo para o modelo de passos
- **Rastreamento automático removido** (v2026.7.3) — contabilizador acoplado ao timeout de "Aguardar Resposta" e reagendamento do Agente de IA removido; métricas passam a depender apenas de Pontos de Controle explícitos
- **Teste com rascunho não publicado** (v2026.7.3) — teste pelo Construtor de Fluxos usa nodes/edges em rascunho; via Agente de IA, mantém a versão publicada
- **Reinício de teste mais completo** (v2026.7.3) — remove a sessão de fluxo anterior do chat ao reiniciar o teste
- **Notificações desativadas no teste** (v2026.7.3) — mensagens de teste não notificam mais o time
- **Indicador visual de progresso** (v2026.7.3) — edge animada até o nó ativo durante o teste

### 🐛 Correções (6)
- **Marcar como não lida desfeita com o chat aberto** (v2026.7.8) — auto-marcar como lida só na abertura da conversa interna
- **Settings da organização para agentes** (v2026.7.8) — GET de configurações liberado sem módulo Settings; evita erros e requisições repetidas no chat
- **Desempenho da verificação de timeouts** (v2026.7.3) — processamento em lote com concorrência, eliminando atrasos de até 20-30 minutos
- **Nó destacado incorretamente** (v2026.7.3) — corrigido dado residual que mantinha mais de um nó com borda verde no Construtor de Fluxos
- **Erro ao deletar chat de teste** (v2026.7.1) — exclusão passa a encerrar a sessão do fluxo antes de remover a conversa
- **Override de debounce não aplicado** (v2026.7.1) — tempo de debounce configurado no teste agora é respeitado na execução do fluxo

### 🔒 Segurança (1)
- **Validação ao criar conversa** (v2026.7.5) — permissão de canal verificada no servidor ao iniciar conversa

---

::: info 📝 Total
**8 releases** neste mês!
:::
