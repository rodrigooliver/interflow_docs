# Introdução

Bem-vindo à documentação oficial da **Interflow** – sua plataforma completa de atendimento multicanal e CRM.


## O que é a Interflow?

A Interflow é uma plataforma SaaS que centraliza todos os seus canais de comunicação com clientes em um único lugar. Com ela, você pode:

- **Atender clientes** de WhatsApp, Instagram, Facebook e Email
- **Automatizar conversas** com fluxos visuais inteligentes
- **Gerenciar relacionamentos** com CRM completo
- **Agendar serviços** com sistema de calendário integrado
- **Controlar finanças** da sua operação
- **Analisar métricas** com dashboards em tempo real

![Interface principal da Interflow](/images/guide/dashboard/dashboard_pt.png)

## Para quem é a Interflow?

A plataforma foi desenvolvida para empresas que:

- Recebem alto volume de mensagens
- Possuem equipe de atendimento
- Precisam centralizar múltiplos canais
- Buscam automatizar processos repetitivos
- Querem melhorar a experiência do cliente

### Segmentos que mais utilizam

| Segmento | Casos de uso |
|----------|-------------|
| **E-commerce** | Atendimento pós-venda, rastreamento, suporte |
| **Clínicas e Consultórios** | Agendamentos, confirmações, lembretes |
| **Imobiliárias** | Captação de leads, follow-up, qualificação |
| **Escolas e Cursos** | Matrículas, comunicação com alunos |
| **Varejo** | Vendas por WhatsApp, catálogo, pedidos |
| **Serviços** | Orçamentos, agendamentos, acompanhamento |

## Principais Recursos

### 💬 Atendimento Multicanal

Centralize WhatsApp, Instagram, Facebook e Email em uma única caixa de entrada. Sua equipe atende de forma organizada sem alternar entre aplicativos.

**Recursos inclusos:**
- Caixa de entrada unificada
- Histórico completo de conversas
- Indicadores de leitura e status
- Anexos e mídia
- Notas internas entre atendentes

### 🤖 Automação com Fluxos

Construa automações visuais sem precisar programar. Nosso editor drag-and-drop permite criar fluxos complexos de forma intuitiva.

**Tipos de nós disponíveis:**
- Mensagens de texto e mídia
- Perguntas e coleta de dados
- Condições e lógica
- Delays e temporizadores
- Transferência para atendente
- Integração com APIs externas
- Ações de CRM

![Construtor de Fluxos](/images/guide/flows/flow_pt.png)

### 👥 CRM Integrado

Gerencie seus clientes com recursos avançados de CRM diretamente integrados ao atendimento.

**Recursos do CRM:**
- Cadastro completo de clientes
- Campos personalizados
- Tags para segmentação
- Funis de venda (Kanban)
- Histórico de interações
- Tarefas e follow-ups

### 📅 Sistema de Agendamentos

Ofereça agendamento online para seus clientes com calendário integrado e lembretes automáticos.

**Funcionalidades:**
- Calendário de disponibilidade
- Múltiplos prestadores de serviço
- Lembretes por WhatsApp/Email
- Integração com Google Calendar
- Pagamento antecipado (opcional)

### 💰 Módulo Financeiro

Controle as finanças da sua operação com visibilidade completa de receitas e despesas.

**Inclui:**
- Dashboard financeiro
- Controle de transações
- Categorização automática
- Relatórios e gráficos
- Gestão de caixas

### 🛒 PDV (Ponto de Venda)

Para operações que precisam de vendas diretas, nosso PDV integrado oferece:

- Cadastro de produtos
- Carrinho de compras
- Múltiplas formas de pagamento
- Emissão de recibos
- Controle de estoque

## Arquitetura da Plataforma

```
┌─────────────────────────────────────────────────────────────┐
│                        INTERFLOW                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐        │
│  │WhatsApp │  │Instagram│  │Facebook │  │  Email  │        │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────┬────┘        │
│       │            │            │            │              │
│       └────────────┴─────┬──────┴────────────┘              │
│                          │                                   │
│                   ┌──────▼──────┐                           │
│                   │   Backend   │                           │
│                   │   Node.js   │                           │
│                   └──────┬──────┘                           │
│                          │                                   │
│    ┌─────────────────────┼─────────────────────┐            │
│    │                     │                     │            │
│ ┌──▼──┐  ┌──────┐  ┌────▼────┐  ┌─────────┐  │            │
│ │ CRM │  │Fluxos│  │  Chat   │  │Relatórios│  │            │
│ └─────┘  └──────┘  └─────────┘  └─────────┘  │            │
│                                               │            │
│                   ┌──────────┐                │            │
│                   │ Supabase │                │            │
│                   │PostgreSQL│                │            │
│                   └──────────┘                │            │
└─────────────────────────────────────────────────────────────┘
```

## Requisitos do Sistema

### Para usuários

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet estável
- Conta na plataforma Interflow

## Próximos Passos

Agora que você conhece a Interflow, siga para o próximo passo:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/guide/quick-start" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">🚀</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Início Rápido</p>
  </div>
</a>

<a href="/guide/channels/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Conectar Canais</p>
  </div>
</a>

<a href="/api/" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📚</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">API Reference</p>
  </div>
</a>

</div>

