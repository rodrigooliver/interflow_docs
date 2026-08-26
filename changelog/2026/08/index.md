# Agosto 2026

Atualizações do mês de agosto de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.8.15](/changelog/2026/08/2026.8.15) | 26/08 | **Reabrir após o encerramento** — mesma conversa se o cliente responder na janela |
| [2026.8.14](/changelog/2026/08/2026.8.14) | 26/08 | **Filtros e colunas por campos do cliente** — recorte da fila e colunas no relatório |
| [2026.8.13](/changelog/2026/08/2026.8.13) | 26/08 | **Notificações por grupo** — silenciar push e som de um grupo do WhatsApp, só para você |
| [2026.8.12](/changelog/2026/08/2026.8.12) | 25/08 | **Mover ou remover clientes** — tirar do funil ou mover o lote para outra etapa |
| [2026.8.11](/changelog/2026/08/2026.8.11) | 25/08 | **Templates de tarefa** — molde reutilizável, automações/macros e colunas na lista |
| [2026.8.10](/changelog/2026/08/2026.8.10) | 25/08 | **Proteção de novos contatos no WAHA** — canal conectado, só o primeiro contato para |
| [2026.8.9](/changelog/2026/08/2026.8.9) | 18/08 | **Assinatura no Agente IA** — mesmo formato do nó texto, sem o modelo ler o texto |
| [2026.8.8](/changelog/2026/08/2026.8.8) | 13/08 | **Agente IA por canal** — contexto de origem e condições em texto, extras e ferramentas |
| [2026.8.7](/changelog/2026/08/2026.8.7) | 13/08 | **Editor expandido** — mensagens longas em tela cheia e Enter no celular quebra linha |
| [2026.8.6](/changelog/2026/08/2026.8.6) | 13/08 | **Canal por equipe** — quem pode iniciar conversa restrito às equipes marcadas |
| [2026.8.5](/changelog/2026/08/2026.8.5) | 13/08 | **Status Online / Ausente** — pausa no atendimento com mensagem automática opcional |
| [2026.8.4](/changelog/2026/08/2026.8.4) | 12/08 | **Macros de cliente** — botões de automação e tipo lead/cliente |
| [2026.8.3](/changelog/2026/08/2026.8.3) | 12/08 | **Jornada e banco de horas** — horário real, 1h extra semanal e fechamento no banco |
| [2026.8.2](/changelog/2026/08/2026.8.2) | 11/08 | **Equipes no convite** — selecionar equipes na mesma etapa do convite de usuário |
| [2026.8.1](/changelog/2026/08/2026.8.1) | 07/08 | **Connections / Meta Lead Ads** — atribuição por anúncio, leads e customers por ad, forms sem campanha e pixels na conta |

---

## Resumo do Mês

### Novas Funcionalidades (25)
- **Reabrir atendimento após o encerramento** (v2026.8.15) — janela em minutos para voltar no mesmo ticket em vez de abrir outro
- **Filtros por campos personalizados do cliente** (v2026.8.14) — lista, múltipla escolha, data e data/hora na fila, no relatório e nos filtros rápidos
- **Colunas de campos personalizados no relatório** (v2026.8.14) — todos os campos do cliente como checks na exportação de atendimentos
- **Notificações por grupo do WhatsApp** (v2026.8.13) — cada usuário silencia push e som de um grupo, sem perder a lista
- **Esvaziar ou mover clientes do estágio** (v2026.8.12) — menu da coluna remove do funil ou move o lote para outra etapa
- **Templates de tarefa** (v2026.8.11) — molde por projeto preenche título, prazo relativo, responsáveis e checklist
- **Templates em automações e macros** (v2026.8.11) — criar tarefa a partir do molde; condição por template
- **Colunas opcionais na lista** (v2026.8.11) — cliente, etapa, etiquetas e checklist; botão atualizar
- **Proteção contra bloqueio de novos contatos no WAHA** (v2026.8.10) — selo âmbar, atendimento quente segue, campanha pausa
- **Assinatura no envio do Agente IA** (v2026.8.9) — header ou footer em metadata, sem o modelo copiar o texto
- **Canal de origem e condições no Agente IA** (v2026.8.8) — identificador do canal no contexto, if/else no prompt, addons e ferramentas prontas condicionais
- **Editor expandido para mensagens longas** (v2026.8.7) — campo maior com formatação e IA; tela cheia no celular
- **Restrição de canal por equipe** (v2026.8.6) — iniciar conversa só com as equipes marcadas no canal
- **Status Online / Ausente** (v2026.8.5) — pausa no atendimento, sai do rodízio e mensagem automática opcional
- **Macros de cliente** (v2026.8.4) — botões no cadastro: ações, visibilidade e perguntar no clique
- **Tipo lead ou cliente** (v2026.8.4) — filtro na lista e condições/ações das macros
- **Jornada real e carga 44h** (v2026.8.3) — horários de entrada/almoço/saída e 1h extra semanal no fechamento
- **Banco de horas no fechamento** (v2026.8.3) — política configurável (compensar, banco ou pagar HE)
- **Configurações RH e 4 marcações** (v2026.8.3) — tela da org, tabela diária com entrada/almoço/saída e atrasos
- **Equipes no convite de usuário** (v2026.8.2) — seleção e sugestão de equipes na mesma etapa do convite
- **Hub Connections como caminho principal** (v2026.8.1) — Meta Lead Ads centralizado no UTM
- **Atribuição de leads pelo anúncio** (v2026.8.1) — lead e customer ligados ao ad, não à campanha
- **Leads e customers por anúncio** (v2026.8.1) — páginas paginadas a partir da lista de ads
- **Instant Forms sem mapear campanha** (v2026.8.1) — só campos e ações; anúncio vem no lead
- **Pixels na conta de anúncios** (v2026.8.1) — sync e token CAPI no nível da Ad Account

### Correções (5)
- **Conversão do WhatsApp no funil sem anúncio cadastrado** (v2026.8.14) — evento Meta segue com canal Oficial e identificador do clique
- **Enter no celular enviava a mensagem** (v2026.8.7) — Enter quebra linha; envio pelo botão
- **Espaço vazio no modal de melhorar texto** (v2026.8.7) — altura acompanha o conteúdo no computador
- **Cliente não encontrado ao mudar estágio** (v2026.8.4) — atualização do funil volta a funcionar
- **Hora extra zerada na jornada de 9h** (v2026.8.3) — a jornada 08h–12h / 13h30–18h30 passa a gerar 1h extra por semana
