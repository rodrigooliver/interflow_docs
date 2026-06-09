# Junho 2026

Atualizações do mês de junho de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.6.2](/changelog/2026/06/2026.6.2) | 09/06 | **Exclusão automática de clientes por limite de uso** — configurável em Limites, com botão "Executar agora" e progresso em tempo real; clientes com pedidos POS agora podem ser excluídos |
| [2026.6.1](/changelog/2026/06/2026.6.1) | 08/06 | **Botões de template WhatsApp Official agora salvos no histórico** — botões de quick reply, URL e telefone exibidos corretamente no chat após envio manual ou em massa |

---

## Resumo do Mês

### ✨ Novas Funcionalidades (2)
- **Exclusão automática de clientes por limite de uso** (v2026.6.2) — exclusão configurável em Configurações > Limites (gatilho %, meta %, ordem por último contato ou cadastro, conversas vinculadas, hora de execução), processada pela fila de exclusão existente
- **Botão "Executar agora" nas limpezas automáticas** (v2026.6.2) — dispara a limpeza de Clientes ou Armazenamento imediatamente, com estado "Em andamento..." que bloqueia disparos duplicados

### 🔄 Alterações (1)
- **Clientes com pedidos (POS) agora podem ser excluídos** (v2026.6.2) — pedidos preservados no histórico de vendas, apenas desvinculados do cliente

### 🐛 Correções (1)
- **Botões de template WhatsApp Official não exibidos no chat** (v2026.6.1) — botões dos templates (quick reply, URL, telefone) passam a ser salvos no `metadata` da mensagem e renderizados no histórico do chat; corrige envio manual e disparo em massa

---

::: info 📝 Total
**2 releases** neste mês!
:::
