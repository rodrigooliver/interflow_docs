# Julho 2026

Atualizações do mês de julho de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.7.3](/changelog/2026/07/2026.7.3) | 07/07 | **Taxa de Resposta de Follow-up** — contabiliza automaticamente respostas a follow-ups (timeout de "Aguardar Resposta" e reagendamento do Agente de IA), com relatório por fluxo e indicador no funil de vendas |
| [2026.7.2](/changelog/2026/07/2026.7.2) | 03/07 | **Suporte à DeepSeek** — novo provedor de IA (modelos V4 Flash/Pro) disponível com chave própria, no Agente de IA, Testar Prompt e Melhorar Texto, com Thinking Mode configurável |
| [2026.7.1](/changelog/2026/07/2026.7.1) | 01/07 | **Chat de Teste de Fluxos** — painel lateral no FlowBuilder para simular conversas em tempo real, com indicador de nó ativo, override de debounce e modo split com visão do agente |

---

## Resumo do Mês

### ✨ Novas Funcionalidades (5)
- **Taxa de Resposta de Follow-up** (v2026.7.3) — contabiliza respostas a follow-ups de timeout e reagendamento do Agente de IA, com relatório por fluxo, janela de resposta configurável (global e por fluxo) e indicador no funil de vendas
- **Suporte à DeepSeek** (v2026.7.2) — novo provedor de IA (DeepSeek V4 Flash/Pro) disponível com chave própria do cliente, com Thinking Mode configurável (Alto/Máximo)
- **Chat de Teste de Fluxos** (v2026.7.1) — ambiente completo no FlowBuilder para testar fluxos com cliente real, painel lateral, split view, indicador de nó em tempo real e override de debounce
- **Badge de Canal de Teste** (v2026.7.1) — identificação visual em âmbar no header do chat quando o atendimento é de um canal tipo `test`
- **Indicador flutuante de nó ativo** (v2026.7.1) — badge abaixo do botão de fluxo no header do agente exibe nome do nó, estado de debounce e tooltip com horário

### 🔄 Melhorias (4)
- **Teste com rascunho não publicado** (v2026.7.3) — teste pelo Construtor de Fluxos usa nodes/edges em rascunho; via Agente de IA, mantém a versão publicada
- **Reinício de teste mais completo** (v2026.7.3) — remove a sessão de fluxo anterior do chat ao reiniciar o teste
- **Notificações desativadas no teste** (v2026.7.3) — mensagens de teste não notificam mais o time
- **Indicador visual de progresso** (v2026.7.3) — edge animada até o nó ativo durante o teste

### 🐛 Correções (4)
- **Desempenho da verificação de timeouts** (v2026.7.3) — processamento em lote com concorrência, eliminando atrasos de até 20-30 minutos
- **Nó destacado incorretamente** (v2026.7.3) — corrigido dado residual que mantinha mais de um nó com borda verde no Construtor de Fluxos
- **Erro ao deletar chat de teste** (v2026.7.1) — exclusão passa a encerrar a sessão do fluxo antes de remover a conversa
- **Override de debounce não aplicado** (v2026.7.1) — tempo de debounce configurado no teste agora é respeitado na execução do fluxo

---

::: info 📝 Total
**3 releases** neste mês!
:::
