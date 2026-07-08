# Ponto de Controle

Meça volume de passagem e taxa de resposta em pontos específicos do seu fluxo.

## O que é?

O **Ponto de Controle** (checkpoint) é um nó não bloqueante que você coloca explicitamente no fluxo para registrar eventos de analytics. Diferente do modelo anterior (que tentava inferir follow-ups automaticamente via timeout da sessão), o Ponto de Controle dá controle total sobre **onde** e **o que** medir.

O nó fica na categoria **📊 Estatísticas** do painel lateral do Construtor de Fluxos. Quando a conversa passa por ele, o fluxo **continua imediatamente** para o próximo nó — o registro acontece em segundo plano, sem travar o atendimento.

## Para que serve?

- Saber **quantas conversas passam** por um ponto específico do fluxo (volume)
- Medir se o cliente **responde** dentro de uma janela configurável após passar por aquele ponto
- Capturar um **snapshot das variáveis** do fluxo no momento da passagem
- Comparar desempenho **entre diferentes pontos** do mesmo fluxo
- Ter um **indicador resumido** no funil de vendas, sem abrir relatórios detalhados

## Configurando o nó

1. No **Construtor de Fluxos**, abra a categoria **📊 Estatísticas**
2. Arraste o nó **Ponto de Controle** para o canvas
3. Conecte a entrada (esquerda) e a saída (direita) no fluxo
4. Clique no corpo do nó para abrir as configurações:

| Opção | Descrição | Padrão ao criar |
|-------|-----------|-----------------|
| **Contabilizar passagem (volume)** | Registra cada passagem como evento de volume (`passed`) | Ativado |
| **Rastrear resposta do cliente** | Inicia contagem da janela de resposta; mensagens do cliente dentro do prazo marcam como respondido | Ativado |
| **Janela de resposta** | Tempo em minutos (valor fixo) ou variável numérica do fluxo | 2880 min (48h) |
| **Salvar variáveis do fluxo** | Grava snapshot das variáveis no momento da passagem | Desativado |

::: tip 💡 Onde colocar?
Coloque o Ponto de Controle **depois** do nó que envia a mensagem de follow-up (ou reengajamento) e **antes** do próximo ramo do fluxo. Assim você mede exatamente o impacto daquela mensagem.
:::

### Janela de resposta

A janela define quanto tempo o sistema aguarda a resposta do cliente após passar pelo ponto de controle. Pode ser configurada em três níveis (em cascata):

1. **No próprio nó** — valor fixo em minutos ou variável numérica do fluxo (recomendado)
2. **No fluxo** — campo legado `followup_response_window_hours` (ainda aceito pelo backend, mas removido da interface)
3. **Na organização** — em **Configurações → Organização**, campo **Janela de resposta de follow-up** (padrão: 48h)

Se nenhum valor estiver configurado, o sistema usa **48 horas (2880 minutos)**.

## O que conta como "resposta"?

Qualquer mensagem enviada pelo cliente **após passar pelo Ponto de Controle**, desde que dentro da **janela de resposta** configurada. Se o cliente não responder dentro da janela, o evento é marcado como **expirado** (sem resposta).

| Status | Significado |
|--------|-------------|
| **Passagem** (`passed`) | Volume registrado sem rastrear resposta (apenas "Contabilizar passagem" ativado) |
| **Aguardando** (`waiting`) | Ponto de controle com rastreamento de resposta ativo; aguardando mensagem do cliente |
| **Respondido** (`responded`) | Cliente enviou uma mensagem dentro da janela de resposta |
| **Expirado** (`expired`) | A janela de resposta terminou sem que o cliente respondesse |

## Visualizando os relatórios

### Relatório do fluxo inteiro

1. Abra o fluxo no **Construtor de Fluxos**
2. Clique em **Analytics de follow-up** na barra superior
3. O painel exibe:
   - **Passagens registradas** e **follow-ups enviados** (pontos com rastreamento de resposta)
   - **Taxa de resposta** e **tempo médio de resposta**
   - **Evolução no período** — gráfico com a taxa ao longo do tempo
   - **Por nó** — tabela com nome do nó, enviados, respondidos, expirados e taxa

### Relatório de um ponto específico

1. No próprio nó **Ponto de Controle**, clique em **Ver relatório deste ponto**
2. O painel abre já filtrado para aquele nó (a tabela "Por nó" fica oculta)

### Filtros disponíveis

- **Data inicial / final** — restringe o período analisado
- **Canal de atendimento** — filtra por canal específico
- **Agente responsável** — filtra por agente atribuído ao chat
- **Atualizar** — botão para recarregar os dados manualmente

### Indicador no Funil de Vendas

No **CRM → Funil de Vendas**, um card resumido mostra a taxa de resposta consolidada de toda a organização, com o total de eventos no período.

## Mudança em relação ao modelo anterior

Na v2026.7.3, o rastreamento automático acoplado ao **timeout de "Aguardar Resposta"** e ao **reagendamento do Agente de IA** foi **removido**. Esse mecanismo gerava registros incorretos ao confundir timeout de espera com outros processos internos do fluxo.

A partir desta versão, **somente Pontos de Controle** colocados explicitamente no fluxo geram métricas. Se você já usava follow-ups automáticos e quer continuar medindo a efetividade, adicione um Ponto de Controle após cada mensagem de reengajamento.

## Limitações e observações

- O nó precisa estar **publicado** no fluxo para registrar eventos em produção
- Alterar a janela de resposta **não afeta** eventos já registrados, apenas os novos
- Eventos registrados durante o **teste de fluxo** também entram nas métricas
- O registro é **best-effort**: falhas no banco de dados nunca travam o fluxo

## Próximos Passos

- [Construtor de Fluxos](/guide/flows/builder)
- [Nó: Aguardar Resposta](/guide/flows/nodes/input)
- [Funil de Vendas (CRM)](/guide/crm/customers)
- [Changelog v2026.7.3](/changelog/2026/07/2026.7.3)
