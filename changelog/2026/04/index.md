# Abril 2026

Atualizações do mês de abril de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.4.9](/changelog/2026/04/2026.4.9) | 22/04 | **Correção** seleção múltipla de mensagens no chat — clique no checkbox alinhado ao clique no corpo da mensagem (criar tarefa) |
| [2026.4.8](/changelog/2026/04/2026.4.8) | 20/04 | **Divisão de receita em parcelas já pagas** — 3 modos de aplicação retroativa; carregar splits de modelo; formulário em modal dedicado |
| [2026.4.7](/changelog/2026/04/2026.4.7) | 20/04 | **Notificações de agendamento para profissionais** — templates com destinatário (cliente / profissional / ambos); criação automática e sincronização de contato WhatsApp/e-mail do profissional a cada envio |
| [2026.4.6](/changelog/2026/04/2026.4.6) | 20/04 | **Campo multiselect** (lista de múltipla escolha) em campos customizados; **select com busca** em todos os selects de campos customizados; multiselect no nó de fluxo e na ferramenta do Agente IA |
| [2026.4.5](/changelog/2026/04/2026.4.5) | 17/04 | **Anexar arquivos em notas de clientes** — imagens, PDFs, vídeos e documentos vinculados a cada nota, com galeria de arquivos e exclusão automática |
| [2026.4.4](/changelog/2026/04/2026.4.4) | 17/04 | **Nó "Chamar outro fluxo"** no construtor de chatbots — fluxos modulares com mapeamento de variáveis e escolha do nó de entrada |
| [2026.4.3](/changelog/2026/04/2026.4.3) | 16/04 | **Fluxo automático em disparos em massa** (aguardar resposta do cliente); **fluxo ao recusar ligação WAHA** (imediato ou aguardar resposta, mensagem de rejeição opcional) |
| [2026.4.2](/changelog/2026/04/2026.4.2) | 03/04 | **Correção** falso "canal desconectado" na fila de disparo em massa; **atalhos na fila** (ícones distintos chat vs lista do cliente, Cmd/Ctrl em nova aba, tempo real) |
| [2026.4.1](/changelog/2026/04/2026.4.1) | 01/04 | **Ferramentas do Agente IA para dados do cliente** (e-mail, documento, país, tipo de pessoa); modal de ações por seções; contexto do sistema com e-mail, documento e país |

---

## Resumo do Mês

### 🐛 Correções (3)
- **Disparo em massa — canal desconectado** — confirmação do status de conexão do canal no envio e consulta da fila alinhada ao cadastro
- **Campo `installment_id` ao lançar despesa** (v2026.4.8) — corrigido erro de tipo TypeScript ao criar despesa em um contrato
- **Seleção múltipla de mensagens no chat** (v2026.4.9) — clique no checkbox não reverte mais a seleção nem encerra o modo inesperadamente; mesmo comportamento do clique no corpo da mensagem

### ✨ Novas Funcionalidades (13)
- **Ferramentas do Agente IA para dados cadastrais** (v2026.4.1) — ações de sistema para alterar e-mail, documento (CPF/CNPJ com parâmetros e armazenamento sem pontuação), país e tipo de pessoa; modal **Adicionar ação** organizado em seções (Cliente, Atendimento, Agendamento, Fluxo, Agente); inclusão de e-mail, documento e país no JSON de contexto do cliente para o modelo
- **Atalhos na fila da campanha de disparo em massa** (v2026.4.2) — ícones distintos, nova aba com Cmd/Ctrl, atualização em tempo real da fila
- **Fluxo automático em disparos em massa** (v2026.4.3) — ao criar campanha de texto ou mídia, configura fluxo que aguarda a resposta do cliente para ser ativado automaticamente
- **Fluxo ao recusar ligação WAHA** (v2026.4.3) — dois modos (imediato ou aguardar resposta), mensagem de rejeição passa a ser opcional, suporte a instrução de contexto para agente IA no modo imediato
- **Nó "Chamar outro fluxo"** (v2026.4.4) — novo nó no construtor de chatbots para invocar outro fluxo existente, com mapeamento de variáveis entre fluxos (`{{variavel}}`), escolha do nó de entrada e transição automática de sessão
- **Campo multiselect em campos customizados** (v2026.4.6) — novo tipo de campo que permite selecionar múltiplas opções; armazenamento normalizado em tabela dedicada para alta performance; filtros de clientes com suporte ao tipo multiselect via RPC 
- **Select com busca integrada em campos customizados** (v2026.4.6) — dropdowns de seleção única e múltipla substituídos por componente pesquisável com tags visuais nas telas de clientes e editor de fluxo
- **Suporte a multiselect no nó "Atualizar Cliente"** (v2026.4.6) — editor visual do fluxo reconhece campos multiselect e exibe dropdown com busca e seleção múltipla
- **Suporte a multiselect na ferramenta do Agente IA** (v2026.4.6) — modelo de IA consegue ler e atualizar campos multiselect; opções válidas são passadas como enum no schema da ferramenta
- **Anexar arquivos em notas de clientes** (v2026.4.5) — upload de qualquer tipo de arquivo (imagens, PDFs, vídeos, documentos) diretamente nas notas do cadastro; galeria por nota com visualização, inserção no texto e exclusão individual; remoção automática dos arquivos ao excluir a nota

- **Notificações de agendamento para profissionais** (v2026.4.7) — templates com campo destinatário (cliente / profissional / ambos); customer de notificação vinculado ao membro criado automaticamente; WhatsApp e e-mail sincronizados a cada execução do cron caso o profissional troque de contato
- **Divisão de receita em parcelas já pagas** (v2026.4.8) — configurar ou corrigir splits mesmo após pagamentos baixados; 3 modos de aplicação retroativa (todos os pagos, pagos sem split, somente em aberto); carregar splits de modelo; modal de edição dedicado


---

::: info 📝 Total
**9 releases** neste mês!
:::
