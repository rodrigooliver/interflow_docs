# Setembro 2026

Atualizações do mês de setembro de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.9.13](/changelog/2026/09/2026.9.13) | 23/09 | **Varredura de funil** — lê a conversa, sugere o estágio e percorre a fila uma organização por vez |
| [2026.9.12](/changelog/2026/09/2026.9.12) | 18/09 | **Locais e duplicar agenda** — salas com horário próprio e cópia da configuração sem agendamentos |
| [2026.9.11](/changelog/2026/09/2026.9.11) | 15/09 | **Transferência entre caixas e aviso de vencimento** — move saldo sem entrar no DRE e avisa no celular o que vence hoje |
| [2026.9.10](/changelog/2026/09/2026.9.10) | 15/09 | **A receber, a pagar e lançamentos** — obrigações em aberto, extrato e lançar pagamento ou recebimento |
| [2026.9.9](/changelog/2026/09/2026.9.9) | 15/09 | **Rodízio entre equipes** — o canal sorteia o time; transferir ou sair pode mandar para a fila |
| [2026.9.8](/changelog/2026/09/2026.9.8) | 14/09 | **Excluir tags no disparo** — não enviar para quem tem tags como parar mensagens ou sair |
| [2026.9.7](/changelog/2026/09/2026.9.7) | 10/09 | **Centros de custo** — despesas por área, filtro nos lançamentos e relatório com CSV |
| [2026.9.6](/changelog/2026/09/2026.9.6) | 10/09 | **Relatórios financeiros** — fluxo de caixa, categorias e aging nos caixas com acesso |
| [2026.9.5](/changelog/2026/09/2026.9.5) | 10/09 | **Áudio no Agente IA** — responder com voz do sistema, sem nós de TTS |
| [2026.9.4](/changelog/2026/09/2026.9.4) | 10/09 | **Lista e dia em colunas** — por profissional ou agenda, com cards compactos |
| [2026.9.3](/changelog/2026/09/2026.9.3) | 10/09 | **Janela de 24h e templates nos fluxos** — condição por canal oficial e envio de modelo aprovado |
| [2026.9.2](/changelog/2026/09/2026.9.2) | 10/09 | **Menu por módulo e busca** — workspaces no sidebar e ⌘K / Ctrl+K |
| [2026.9.1](/changelog/2026/09/2026.9.1) | 09/09 | **Canal WAHA desconectado** — push para owner e admins com o nome e o número |

---

## Resumo do Mês

### Novas Funcionalidades (21)
- **Varredura automática de funil** (v2026.9.13) — lê a conversa no horário marcado e só move para os estágios de destino se a probabilidade passar do mínimo
- **Fila da varredura** (v2026.9.13) — uma organização por vez, com pausa, continuar, repetir falhas e transferir o estágio sugerido
- **Locais e salas na agenda** (v2026.9.12) — salas com horário, sobreposição, filtro, colunas e Agente IA
- **Duplicar agenda** (v2026.9.12) — clona serviços, profissionais, locais, horários, feriados e notificações, sem histórico
- **Transferência entre caixas** (v2026.9.11) — move saldo de um caixa para outro sem contar como receita ou despesa
- **Aviso no celular das contas que vencem hoje** (v2026.9.11) — push matinal para os operadores do caixa
- **A receber, a pagar e lançamentos** (v2026.9.10) — obrigações em aberto separadas do extrato, com vencidos, a vencer e filtros rápidos
- **Lançar pagamento ou recebimento** (v2026.9.10) — valor pago, dados de pagamento, caixa e quem lançou
- **Recorrência com buffer automático** (v2026.9.10) — ocorrências iniciais e ajuste em todas as próximas ainda não lançadas
- **Rodízio automático entre equipes** (v2026.9.9) — fila de times no canal, no webhook e ao transferir ou sair
- **Excluir tags no disparo em massa** (v2026.9.8) — suprimir destinatários com tags de descadastramento, mesmo que estejam na inclusão
- **Centros de custo** (v2026.9.7) — cadastro, associação opcional às despesas, filtro e relatório dedicado com CSV
- **Relatórios financeiros** (v2026.9.6) — fluxo de caixa, categorias, a receber/pagar e comparativo por caixa, só nos caixas com acesso
- **Áudio no Agente IA** (v2026.9.5) — resposta em voz do sistema, com regras de áudio, link e probabilidade
- **Lista e dia em colunas** (v2026.9.4) — divisão por profissional ou agenda, com cards compactos e painel no hover
- **Iniciar agendamento ainda não confirmado** (v2026.9.4) — pular a confirmação e ir direto para em andamento
- **Janela de 24h nos fluxos** (v2026.9.3) — ramificação conforme a última mensagem do cliente no WhatsApp Oficial
- **Nó Template do WhatsApp** (v2026.9.3) — templates e variáveis mapeados por canal oficial
- **Menu por módulo** (v2026.9.2) — Atendimento, Financeiro, PDV, Cobranças, RH e Prontuário no seletor da barra
- **Busca no menu** (v2026.9.2) — ⌘K / Ctrl+K para páginas e opções de configuração
- **Aviso quando o WhatsApp WAHA fica desconectado** (v2026.9.1) — push para owner e admins se a sessão ativa cair; ignora reinício curto, QR e desconexão manual

### Correções (4)
- **Vencidos pela data** (v2026.9.10) — obrigação atrasada aparece em vencidos mesmo com status pendente
- **Totais e loading nos filtros** (v2026.9.10) — atalho de data carrega e os totais acompanham o período
- **Áudio e texto na mesma resposta** (v2026.9.5) — o cliente recebe só o áudio, com a transcrição no próprio áudio
- **Colunas da divisão lembradas ao atualizar** (v2026.9.4) — a escolha de profissionais ou agendas permanece no navegador
