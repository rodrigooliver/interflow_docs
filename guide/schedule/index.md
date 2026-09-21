# Agenda e Agendamentos

Gerencie agendamentos, compromissos e lembretes automáticos na Interflow.

## Visão Geral

O módulo de Agenda da Interflow permite gerenciar compromissos, consultas e reuniões de forma integrada ao atendimento. Com recursos como agendamentos recorrentes, lembretes automáticos e integração com IA, sua equipe pode oferecer uma experiência completa aos clientes.

## Acessando a Agenda

1. No menu principal, clique em **Agenda** (📅)
2. Escolha a visualização desejada (dia, semana, mês)
3. Navegue entre as datas usando as setas ou o calendário

## Gerenciar agendas

### Duplicar agenda

Use uma agenda já configurada como modelo. A cópia recebe serviços, profissionais, locais, horários, feriados e notificações. Os agendamentos **não** são copiados.

1. Abra **Agenda** → **Agendas**
2. No card, clique em **Duplicar agenda** — ou, dentro da agenda, use o botão ao lado de editar e excluir
3. Confirme ou altere o nome (o padrão é `{nome} (cópia)`)
4. A cópia abre na tela de gerenciamento

Os fluxos da organização continuam os mesmos: a nova agenda só reaproveita os vínculos de status e dos templates. Séries recorrentes, lembretes já disparados e ações de agente ligadas só à agenda original ficam de fora.

> Changelog: [v2026.9.12](/changelog/2026/09/2026.9.12)

### Locais e salas

Ative **Usar locais** na agenda para cadastrar salas, boxes ou unidades. O local vira o centro de controle: horários, sobreposição e o compromisso passam a depender da sala. O card da lista mostra quantos locais aquela agenda tem.

> Guia completo: [Locais e salas](/guide/schedule/locations)

## Interface da Agenda

### Visualizações Disponíveis

| Visualização | Descrição |
|--------------|-----------|
| **Lista** | Compromissos em cards, agrupados por dia |
| **Dia** | Exibe todos os compromissos de um único dia |
| **Semana** | Exibe 6-7 dias com visão expandida |
| **Mês** | Calendário mensal com resumo dos compromissos |

### Divisão em colunas

Nas visualizações **Lista** e **Dia**, é possível separar a tela em colunas por **profissional**, por **agenda** ou por **local**.

1. Abra o menu de visualização no cabeçalho
2. Escolha **Por profissional**, **Por agenda** ou **Por local**
3. Marque quem (ou quais agendas/locais) deve aparecer e confirme

A escolha fica salva no navegador. Na lista, os horários alinham-se na mesma linha entre as colunas. Com mais de uma coluna, os cards ficam compactos; no computador, passe o mouse para ver detalhes e ações (confirmar, iniciar, cancelar).

Com status **Agendado**, também é possível **Iniciar** o compromisso sem confirmar antes.

> Changelog: [v2026.9.4](/changelog/2026/09/2026.9.4)

### Atalhos de Teclado

| Atalho | Ação |
|--------|------|
| `←` `→` | Navegar entre dias |
| `T` | Ir para hoje |
| `N` | Novo agendamento |
| `Esc` | Fechar modal |

## Criando Agendamentos

### Agendamento Manual

1. Clique no horário desejado na agenda, ou clique em **"Novo"**
2. Preencha os campos:
   - **Cliente**: Busque ou crie um novo
   - **Serviço**: Selecione o tipo de serviço
   - **Profissional**: Quem irá atender
   - **Local**: Sala ou unidade (obrigatório se a agenda usa locais)
   - **Data e Hora**: Quando será o compromisso
   - **Duração**: Tempo estimado
   - **Observações**: Notas internas
3. Clique em **"Salvar"**

### Agendamento via Fluxo

Configure fluxos automatizados para permitir que clientes agendem diretamente pelo WhatsApp ou outros canais. A IA pode:

- Verificar horários disponíveis
- Confirmar data e hora
- Enviar confirmação automática

::: tip 💡 Dica
Use o nó de **Agente IA** com a ferramenta de agendamento para oferecer uma experiência conversacional completa.
:::

## Agendamentos Recorrentes

Crie compromissos que se repetem automaticamente.

### Como Criar

1. Ao criar um agendamento, ative a opção **"Recorrente"**
2. Configure a recorrência:
   - **Frequência**: Diária, Semanal, Quincenal, Mensual
   - **Dias da semana**: Para recorrência semanal
   - **Término**: Após X ocorrências ou data específica
3. Clique em **"Criar"**
4. Todas as ocorrências são criadas automaticamente

### Gerenciando Recorrências

| Ação | Comportamento |
|------|---------------|
| **Editar único** | Altera apenas a ocorrência selecionada |
| **Editar todos** | Altera todas as ocorrências futuras |
| **Excluir único** | Remove apenas uma ocorrência |
| **Excluir todos** | Remove toda a série |

## Mover agendamento entre agendas

Na edição de um agendamento (único ou recorrente), o campo **Agenda** permite transferir o compromisso para outra agenda sem excluir e recriar.

1. Abra o agendamento e escolha a nova **Agenda**
2. Selecione novamente **Serviço** e **Profissional** da agenda de destino
3. Salve
4. Se for recorrente, escolha o escopo: somente este, deste em diante ou todos

Histórico, chat e demais vínculos do agendamento permanecem intactos.

### Exemplo de Uso

```
📅 Fisioterapia - João Silva
   Recorrência: Semanal (Segunda e Quarta)
   Término: Após 12 sessões
   
   → Sistema cria automaticamente 12 agendamentos
```

## Lembretes Automáticos

Configure mensagens automáticas para lembrar clientes de seus compromissos.

### Configuração

1. Acesse **Configurações** → **Agenda**
2. Localize a seção **"Lembretes Automáticos"**
3. Ative os lembretes desejados:
   - ✅ **48 horas antes**
   - ✅ **24 horas antes**
   - ✅ **2 horas antes** (opcional)
4. Personalize o modelo de mensagem
5. Salve as configurações

### Template de Lembrete

Variáveis disponíveis nos templates de notificação da agenda:

| Variável | Conteúdo |
|----------|----------|
| `{{name}}` | Nome do cliente |
| `{{document}}` / `{{cpf}}` | CPF/CNPJ |
| `{{email}}` | E-mail |
| `{{phone}}` | Telefone |
| `{{whatsapp}}` | WhatsApp |
| `{{address}}` | Endereço completo |
| `{{city}}` | Cidade |
| `{{state}}` | Estado |
| `{{postal_code}}` | CEP |
| `{{provider}}` | Profissional |
| `{{service}}` | Serviço |
| `{{schedule}}` | Agenda |
| `{{date}}` | Data |
| `{{hour}}` / `{{start_time}}` | Horário de início |
| `{{end_time}}` | Horário de término |
| `{{organization}}` | Organização |

```
Olá, {{name}}!

Lembrando do seu agendamento:

Data: {{date}}
Horário: {{hour}}
Serviço: {{service}}
Profissional: {{provider}}

Documento: {{document}}
Contato: {{phone}}
Endereço: {{address}}

Para confirmar, responda "SIM".
Para reagendar, responda "REAGENDAR".
```

### Comportamento

- ✅ Enviado apenas para agendamentos **confirmados**
- ❌ Não envia se o agendamento foi **cancelado**
- 🔄 Respeita horário comercial configurado
- 📊 Eventos são logados para relatórios

## Configuração de Horários

### Horário de Funcionamento

1. Acesse **Configurações** → **Agenda** → **Horários**
2. Configure para cada dia da semana:
   - Horário de início
   - Horário de término
   - Intervalos (almoço, pausas)
3. Defina feriados e folgas

### Folgas e Indisponibilidades

| Tipo | Descrição |
|------|-----------|
| **Dia completo** | Bloqueia todo o dia (feriados, folgas programadas) |
| **Horário específico** | Bloqueia apenas um período (almoço, reuniões) |
| **Por profissional** | Aplica folga apenas a um profissional |
| **Todos** | Aplica para toda a equipe |

::: warning ⚠️ Importante
A IA respeita automaticamente as folgas configuradas. Ao tentar agendar em um período bloqueado, ela informa a indisponibilidade e sugere alternativas.
:::

## Integração com IA

### Agendamento Conversacional

A IA pode gerenciar agendamentos de forma natural:

1. **Verificar disponibilidade**: "Quais horários tem disponíveis para amanhã?"
2. **Criar agendamento**: "Quero marcar para quinta às 14h"
3. **Reagendar**: "Preciso mudar minha consulta para semana que vem"
4. **Cancelar**: "Preciso cancelar meu horário"

### Configurando a IA para Agendamentos

1. Acesse **Agentes IA** → Edite o agente
2. Vá em **Ferramentas**
3. Ative as ações de agendamento:
   - ✅ Listar horários disponíveis
   - ✅ Criar agendamento
   - ✅ Reagendar
   - ✅ Cancelar

### IA Mostra Apenas Horários Futuros

A IA automaticamente filtra horários passados ao listar disponibilidades, mostrando apenas compromissos que ainda vão acontecer.

## Importação de Eventos

### Importar do Google Calendar

1. Exporte do Google Calendar (arquivo `.ics`)
2. Em **Agenda** → **Novo** → **Importar Eventos**
3. Selecione o arquivo
4. Configure filtro de data (opcional):
   - Data inicial
   - Data final
5. Selecione agenda e profissional
6. Clique em **"Processar Arquivo"**
7. Mapeie serviços e status para cada evento
8. Clique em **"Importar Eventos"**

### Filtros de Importação

- ✅ Período personalizado (data inicial e final)
- ✅ Eventos cancelados são ignorados automaticamente
- ✅ Duplicatas são detectadas e ignoradas

## Status dos Agendamentos

| Status | Cor | Descrição |
|--------|-----|-----------|
| **Pendente** | 🟡 Amarelo | Aguardando confirmação |
| **Confirmado** | 🟢 Verde | Cliente confirmou presença |
| **Em andamento** | 🔵 Azul | Atendimento iniciado |
| **Concluído** | ⚪ Cinza | Atendimento finalizado |
| **Cancelado** | 🔴 Vermelho | Cancelado pelo cliente ou equipe |
| **Não compareceu** | ⚫ Preto | Cliente faltou |

## Recursos Avançados

### Arrastar e Soltar

Mova agendamentos entre horários arrastando diretamente no calendário:

1. Clique e segure o agendamento
2. Arraste para o novo horário
3. Solte para confirmar
4. Sistema atualiza automaticamente

### Zoom Inteligente

A visualização ajusta automaticamente o zoom conforme o período selecionado para melhor legibilidade.

### Cores por Status

Os agendamentos são coloridos automaticamente conforme seu status, facilitando a identificação visual rápida.

## App Mobile

### Recursos no Android

- ✅ Visualização de 6-7 dias na semana
- ✅ Semana iniciando no domingo
- ✅ Criação e edição de eventos
- ✅ Proteção contra gestos acidentais
- ✅ Notificações de lembretes

## Automações por status

Além dos lembretes e templates de notificação (comunicação com o cliente), cada agenda pode ter **fluxos silenciosos** — automações internas que rodam em background quando o status muda.

| Recurso | Comunicação com o cliente | Onde configurar |
|---------|---------------------------|-----------------|
| Templates de notificação | Sim | Aba **Notificações** |
| Fluxos silenciosos | Não | Aba **Fluxos silenciosos** |

> Guia completo: [Fluxos silenciosos por status](/guide/schedule/silent-flows)

## Lembretes push para a equipe

Alertas automáticos no **app** e **web** para o profissional e usuários selecionados **antes** de cada compromisso — separados dos lembretes WhatsApp/e-mail enviados ao cliente.

| Recurso | Destinatário | Canal | Onde configurar |
|---------|--------------|-------|-----------------|
| Lembretes push | Profissional + usuários notificados | App e web | Formulário da agenda |
| Templates / lembretes ao cliente | Cliente | WhatsApp, e-mail | Aba **Notificações** |

> Guia completo: [Lembretes push](/guide/schedule/push-reminders)

## Próximos Passos

- [Locais e salas](/guide/schedule/locations) — salas e unidades com horário e ocupação próprios
- [Lembretes push](/guide/schedule/push-reminders) — alertas internos antes do compromisso
- [Fluxos silenciosos por status](/guide/schedule/silent-flows) — automações internas em cada mudança de status
- [Agentes IA](/guide/ai-agents/) — Configure IA para agendamentos
- [Fluxos de Atendimento](/guide/flows/builder) — Automatize o processo de agendamento
- [Relatórios](/guide/reports/) — Métricas de agendamentos




