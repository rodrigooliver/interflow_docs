# Taxa de Resposta de Follow-up

Acompanhe a efetividade dos follow-ups automáticos enviados pelos seus fluxos.

## O que é?

Quando um cliente não responde dentro do tempo esperado, a Interflow pode disparar um **follow-up** automático de duas formas:

- **Timeout do nó "Aguardar Resposta"**: o nó Input tem um tempo configurado; se o cliente não responder dentro desse tempo, o fluxo segue pela saída de **timeout**, o que normalmente dispara uma mensagem de follow-up
- **Reagendamento pelo Agente de IA**: uma ação do Agente de IA (`changeReturnDate`) reagenda o fluxo para retomar em uma data/hora futura, geralmente para tentar um novo contato

A partir da v2026.7.3, todo follow-up disparado por esses dois mecanismos é registrado automaticamente, e a Interflow contabiliza se o cliente respondeu (e quanto tempo levou) dentro de uma **janela de resposta** configurável.

## Para que serve?

- Saber se seus follow-ups estão **funcionando** (gerando resposta) ou sendo ignorados
- Comparar a taxa de resposta **entre fluxos** e **entre nós** de um mesmo fluxo
- Acompanhar a evolução da taxa de resposta **ao longo do tempo** (por dia/semana/mês)
- Ter um **indicador resumido** no funil de vendas, sem precisar abrir relatórios detalhados

## O que conta como "resposta"?

Qualquer mensagem enviada pelo cliente **após o disparo do follow-up**, desde que dentro da **janela de resposta** configurada (48 horas por padrão). Se o cliente não responder dentro da janela, o follow-up é marcado como **expirado** (sem resposta).

| Status | Significado |
|--------|--------------|
| **Enviado** | Follow-up disparado, aguardando o cliente responder dentro da janela |
| **Respondido** | Cliente enviou uma mensagem dentro da janela de resposta |
| **Expirado** | A janela de resposta terminou sem que o cliente respondesse |

## Configurando a janela de resposta

A janela de resposta pode ser definida em dois níveis:

### 1. Padrão global (organização)

1. Acesse **Configurações → Organização**
2. Localize o campo **Janela de resposta de follow-up**
3. Defina o tempo em horas (padrão: **48 horas**)

Esse valor é usado para **todos os fluxos** que não têm uma janela específica configurada.

### 2. Sobrescrever por fluxo

1. Abra o fluxo desejado no **Construtor de Fluxos**
2. Clique no ícone de **engrenagem** (⚙️) para abrir as configurações do fluxo
3. Preencha o campo **Janela de resposta de follow-up** com o valor desejado (em horas)
4. Deixe em branco para usar o padrão global da organização

::: tip 💡 Quando sobrescrever?
Fluxos com follow-ups mais urgentes (ex.: confirmação de agendamento no mesmo dia) podem usar uma janela mais curta (ex.: 6h), enquanto fluxos de reengajamento comercial podem usar janelas mais longas (ex.: 72h).
:::

## Visualizando os relatórios

### Relatório detalhado por fluxo

1. Abra o fluxo no **Construtor de Fluxos**
2. Clique em **"Análise de Follow-up"** no topo do editor
3. O painel exibe:
   - **Taxa de resposta geral** do fluxo (respondidos ÷ enviados)
   - **Distribuição** por status (enviado, respondido, expirado)
   - **Taxa de resposta por nó de origem** — para identificar quais pontos do fluxo geram follow-ups mais efetivos
   - **Evolução no tempo** — gráfico com a taxa de resposta por período

### Indicador no Funil de Vendas

No **CRM → Funil de Vendas**, um card resumido mostra a taxa de resposta de follow-up consolidada de toda a organização, com o total de follow-ups enviados e respondidos no período.

## Limitações e observações

- O follow-up precisa ser disparado pelos mecanismos suportados (timeout do nó Input ou reagendamento do Agente de IA) para ser contabilizado — mensagens enviadas manualmente pelo atendente não entram nessa métrica
- Alterar a janela de resposta **não afeta** follow-ups já disparados anteriormente, apenas os novos
- Follow-ups disparados durante o **teste de fluxo** (Construtor de Fluxos) também são contabilizados normalmente, permitindo validar o comportamento antes de publicar

## Próximos Passos

- [Construtor de Fluxos](/guide/flows/builder)
- [Nó: Aguardar Resposta](/guide/flows/nodes/input)
- [Agente IA](/guide/flows/nodes/agenteia)
- [Funil de Vendas (CRM)](/guide/crm/customers)
