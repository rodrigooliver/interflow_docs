# Abril 2026

Atualizações do mês de abril de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.4.5](/changelog/2026/04/2026.4.5) | 17/04 | **Anexar arquivos em notas de clientes** — imagens, PDFs, vídeos e documentos vinculados a cada nota, com galeria de arquivos e exclusão automática |
| [2026.4.4](/changelog/2026/04/2026.4.4) | 17/04 | **Nó "Chamar outro fluxo"** no construtor de chatbots — fluxos modulares com mapeamento de variáveis e escolha do nó de entrada |
| [2026.4.3](/changelog/2026/04/2026.4.3) | 16/04 | **Fluxo automático em disparos em massa** (aguardar resposta do cliente); **fluxo ao recusar ligação WAHA** (imediato ou aguardar resposta, mensagem de rejeição opcional) |
| [2026.4.2](/changelog/2026/04/2026.4.2) | 03/04 | **Correção** falso "canal desconectado" na fila de disparo em massa; **atalhos na fila** (ícones distintos chat vs lista do cliente, Cmd/Ctrl em nova aba, tempo real) |
| [2026.4.1](/changelog/2026/04/2026.4.1) | 01/04 | **Ferramentas do Agente IA para dados do cliente** (e-mail, documento, país, tipo de pessoa); modal de ações por seções; contexto do sistema com e-mail, documento e país |

---

## Resumo do Mês

### 🐛 Correções (1)
- **Disparo em massa — canal desconectado** — confirmação do status de conexão do canal no envio e consulta da fila alinhada ao cadastro

### ✨ Novas Funcionalidades (6)
- **Ferramentas do Agente IA para dados cadastrais** (v2026.4.1) — ações de sistema para alterar e-mail, documento (CPF/CNPJ com parâmetros e armazenamento sem pontuação), país e tipo de pessoa; modal **Adicionar ação** organizado em seções (Cliente, Atendimento, Agendamento, Fluxo, Agente); inclusão de e-mail, documento e país no JSON de contexto do cliente para o modelo
- **Atalhos na fila da campanha de disparo em massa** (v2026.4.2) — ícones distintos, nova aba com Cmd/Ctrl, atualização em tempo real da fila
- **Fluxo automático em disparos em massa** (v2026.4.3) — ao criar campanha de texto ou mídia, configura fluxo que aguarda a resposta do cliente para ser ativado automaticamente
- **Fluxo ao recusar ligação WAHA** (v2026.4.3) — dois modos (imediato ou aguardar resposta), mensagem de rejeição passa a ser opcional, suporte a instrução de contexto para agente IA no modo imediato
- **Nó "Chamar outro fluxo"** (v2026.4.4) — novo nó no construtor de chatbots para invocar outro fluxo existente, com mapeamento de variáveis entre fluxos (`{{variavel}}`), escolha do nó de entrada e transição automática de sessão
- **Anexar arquivos em notas de clientes** (v2026.4.5) — upload de qualquer tipo de arquivo (imagens, PDFs, vídeos, documentos) diretamente nas notas do cadastro; galeria por nota com visualização, inserção no texto e exclusão individual; remoção automática dos arquivos ao excluir a nota

---

::: info 📝 Total
**5 releases** neste mês!
:::
