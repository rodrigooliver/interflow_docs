# Relatórios

Analise métricas e desempenho do seu atendimento na Interflow.

## Visão Geral

O módulo de Relatórios da Interflow oferece análises detalhadas sobre atendimento, clientes, equipe e agendamentos. Use dados para tomar decisões informadas e melhorar continuamente sua operação.

## Acessando Relatórios

1. No menu principal, clique em **Relatórios** (📊)
2. Selecione o tipo de relatório desejado
3. Configure os filtros de período e critérios
4. Visualize ou exporte os dados

## Relatórios de Atendimento

Análise de desempenho do atendimento ao cliente.

### Métricas Disponíveis

| Métrica | Descrição |
|---------|-----------|
| **Tempo médio de resposta** | Quanto tempo para primeira resposta |
| **Tempo médio de resolução** | Quanto tempo para resolver o atendimento |
| **Taxa de resolução** | % de atendimentos finalizados com sucesso |
| **Volume de atendimentos** | Quantidade por período |
| **Satisfação do cliente** | Nota média das avaliações |

### Filtros

- **Período**: Data inicial e final
- **Equipe**: Filtrar por equipe específica
- **Agente**: Filtrar por atendente
- **Canal**: WhatsApp, Instagram, Email, etc.
- **Status**: Resolvido, pendente, em andamento

### Visualizações

- 📊 **Gráficos de linha**: Evolução ao longo do tempo
- 📈 **Gráficos de barra**: Comparativo entre períodos/equipes
- 🥧 **Gráficos de pizza**: Distribuição por categoria
- 📋 **Tabelas**: Dados detalhados exportáveis

## Relatórios Avançados de Clientes

Gerador de relatórios com agrupamentos e subdivisões personalizadas.

### Como Criar

1. Em **Clientes** → clique em **"Relatórios Avançados"** 📊
2. Clique em **"Nova Configuração"**
3. Siga o assistente de 5 etapas:

**Etapa 1: Upload dos Dados**
- Faça upload de um JSON (exportar da lista de clientes)
- O sistema lê a estrutura dos dados

**Etapa 2: Configurar Agrupamentos**
- Selecione campos para agrupar (ex: Origem, Status)
- Defina a hierarquia de agrupamento

**Etapa 3: Configurar Coluna de Total**
- Escolha como calcular o total
- Opções: contagem, soma, média

**Etapa 4: Configurar Subdivisões**
- Adicione subdivisões (ex: motivos de não compra)
- Configure critérios de classificação

**Etapa 5: Revisar e Salvar**
- Veja o preview do relatório
- Dê um nome à configuração
- Salve para reutilização

### Recursos

| Recurso | Descrição |
|---------|-----------|
| **Normalização inteligente** | Unifica variações de texto (ex: "SP", "São Paulo", "S.Paulo") |
| **Preview em tempo real** | Veja o resultado enquanto configura |
| **Exportação CSV** | Baixe para Excel/Sheets |
| **Modelos salvos** | Reutilize configurações |

### Exemplo de Relatório

```
┌─────────────────────────────────────────────────────────┐
│ Clientes por Origem e Status                            │
├──────────────┬───────┬───────────┬──────────┬───────────┤
│ Origem       │ Total │ Convertido│ Perdido  │ Em negoc. │
├──────────────┼───────┼───────────┼──────────┼───────────┤
│ Google Ads   │ 150   │ 45 (30%)  │ 80 (53%) │ 25 (17%)  │
│ Facebook     │ 120   │ 36 (30%)  │ 60 (50%) │ 24 (20%)  │
│ Indicação    │ 80    │ 48 (60%)  │ 20 (25%) │ 12 (15%)  │
│ Orgânico     │ 50    │ 20 (40%)  │ 20 (40%) │ 10 (20%)  │
├──────────────┼───────┼───────────┼──────────┼───────────┤
│ TOTAL        │ 400   │ 149 (37%) │ 180 (45%)│ 71 (18%)  │
└──────────────┴───────┴───────────┴──────────┴───────────┘
```

## Relatórios de Equipe

Analise o desempenho individual e coletivo da equipe.

### Métricas por Agente

| Métrica | Descrição |
|---------|-----------|
| **Atendimentos realizados** | Quantidade de atendimentos |
| **Tempo médio de resposta** | Velocidade de resposta |
| **Taxa de resolução** | % de sucesso |
| **Satisfação** | Nota média recebida |
| **Tempo online** | Horas logado |

### Ranking de Equipe

Visualize os melhores desempenhos:

- 🥇 **Top atendentes** por volume
- ⚡ **Mais rápidos** em resposta
- ⭐ **Melhor avaliados** pelos clientes

## Relatórios de Agendamentos

Métricas do módulo de agenda.

### Métricas Disponíveis

| Métrica | Descrição |
|---------|-----------|
| **Total de agendamentos** | Quantidade no período |
| **Taxa de comparecimento** | % que compareceu |
| **Taxa de cancelamento** | % cancelado |
| **Taxa de no-show** | % que faltou |
| **Tempo médio de atendimento** | Duração média |

### Análises

- **Por serviço**: Quais serviços são mais populares
- **Por profissional**: Performance de cada profissional
- **Por horário**: Quais horários têm mais demanda
- **Por dia da semana**: Dias mais movimentados

## Relatórios de Canais

Análise por canal de comunicação.

### Métricas por Canal

| Canal | Métricas Disponíveis |
|-------|---------------------|
| **WhatsApp** | Volume, resposta, resolução |
| **Instagram** | Engajamento, conversões |
| **Facebook** | Alcance, conversões |
| **Email** | Abertura, resposta |

### Comparativo

Compare performance entre canais para identificar onde investir mais.

## Exportação de Dados

### Formatos Disponíveis

| Formato | Uso Recomendado |
|---------|-----------------|
| **CSV** | Excel, Google Sheets |
| **Excel (.xlsx)** | Análises avançadas |
| **PDF** | Apresentações, impressão |
| **JSON** | Integrações, APIs |

### Como Exportar

1. Configure os filtros desejados
2. Clique em **"Exportar"**
3. Selecione o formato
4. Aguarde o download

::: tip 💡 Dica
Para relatórios grandes, o sistema gera o arquivo em background e envia por email quando pronto.
:::

## Agendamento de Relatórios

Receba relatórios automaticamente por email.

### Configuração

1. Acesse **Relatórios** → **Agendamentos**
2. Clique em **"Novo Agendamento"**
3. Configure:
   - **Relatório**: Qual relatório enviar
   - **Frequência**: Diário, semanal, mensal
   - **Destinatários**: Emails que receberão
   - **Formato**: PDF, Excel, etc.
4. Salve

### Frequências Disponíveis

| Frequência | Quando Envia |
|------------|--------------|
| **Diário** | Todo dia às 8h |
| **Semanal** | Segunda-feira às 8h |
| **Mensal** | Dia 1 de cada mês às 8h |

## Dashboards Personalizados

### Criando um Dashboard

1. Acesse **Relatórios** → **Dashboards**
2. Clique em **"Novo Dashboard"**
3. Arraste os widgets desejados
4. Configure cada widget
5. Salve o dashboard

### Widgets Disponíveis

- 📈 **Gráfico de linha**
- 📊 **Gráfico de barras**
- 🥧 **Gráfico de pizza**
- 🔢 **Contador/KPI**
- 📋 **Tabela resumida**
- 🗓️ **Calendário de eventos**

## Permissões

### Quem pode acessar relatórios

| Perfil | Acesso |
|--------|--------|
| Owner | ✅ Todos os relatórios |
| Admin | ✅ Todos os relatórios |
| Manager | ✅ Relatórios da sua equipe |
| Agent | ⚠️ Métricas pessoais apenas |

::: warning ⚠️ Atenção
Agentes com restrição de visibilidade veem apenas dados filtrados das suas equipes.
:::

## Próximos Passos

- [Agenda](/guide/schedule/) - Métricas de agendamentos
- [CRM e Clientes](/guide/crm/customers) - Relatórios de clientes
- [Configurações](/guide/settings/) - Permissões de relatórios




