# Configurações

Gerencie todas as configurações da sua conta Interflow.

## Visão Geral

O módulo de Configurações centraliza todas as opções de personalização da plataforma, desde preferências pessoais até configurações globais da organização.

## Acessando Configurações

1. No menu principal, clique em **Configurações** (⚙️)
2. Navegue pelas abas disponíveis
3. As alterações são salvas automaticamente ou ao clicar em "Salvar"

## Configurações Gerais

### Informações da Organização

| Campo | Descrição |
|-------|-----------|
| **Nome** | Nome da empresa/organização |
| **Logo** | Logotipo exibido na plataforma |
| **Fuso horário** | Timezone para datas e horários |
| **Idioma padrão** | Idioma da interface |

### IA e Automação

Controles para funcionalidades de inteligência artificial:

| Opção | Descrição |
|-------|-----------|
| **Desativar Resumo por IA em Resolução** | Não gera resumo automático ao finalizar atendimento |
| **Desativar Resumo por IA em Transferência** | Não gera resumo automático ao transferir |

::: tip 💡 Economia
Desativar resumos automáticos economiza tokens de API. O campo de resumo permanece disponível para preenchimento manual.
:::

## Configurações de Atendimento

### Pausar Fluxo ao Atender

Quando um atendente clica em "Atender" um chat com fluxo ativo:

**Opções:**
- **Ativado** ✅ = Sempre pausa automaticamente (sem perguntar)
- **Desativado** ❌ = Pergunta o que fazer quando há fluxo ativo

**Modal de opções (quando desativado):**

| Opção | O que acontece |
|-------|----------------|
| 🟡 **Pausar Fluxo e Atender** | Pausa o fluxo, atendente assume |
| 🔵 **Continuar Fluxo e Atender** | Mantém fluxo ativo |
| ⚪ **Cancelar** | Não atende |

::: warning ⚠️ Atenção
"Continuar Fluxo" = Cliente recebe mensagens do atendente E do fluxo!
:::

### Permitir mensagem sem atender

Em chats **pendentes**, o rodapé mostra só **Atender**. Com esta opção ligada, aparece também **Enviar mensagem avulsa**: o atendente libera o campo, envia e o ticket **continua na fila**.

**Como configurar:**

1. Em **Configurações** → **Atendimento**, localize **Permitir mensagem sem atender**
2. Ative o toggle
3. Salve

**O que acontece:**

- Chat pendente → dois botões: **Atender** e **Enviar mensagem avulsa**
- O campo de mensagem **não** abre sozinho; só depois do clique no segundo botão
- Fechar a conversa ou abrir outra volta os dois botões
- Enviar a mensagem **não** assume o atendimento
- Chat reservado para outro agente → banner de reserva, sem os botões
- Janela de 24h fechada → aviso já conhecido, sem o compositor

::: tip Padrão
A opção começa desligada. Só admin ou owner altera nas configurações da organização.
:::

> Changelog: [v2026.8.22](/changelog/2026/08/2026.8.22)

### Reabrir atendimento após o encerramento

Se o cliente responder logo depois que o atendente concluiu o chat, o sistema pode **reabrir o mesmo ticket** em vez de criar um atendimento novo.

**Como configurar:**

1. Em **Configurações** → **Atendimento**, localize **Reabrir atendimento se o cliente responder após o encerramento**
2. Ative o toggle
3. Informe a janela em minutos (1 a 1440; o padrão ao ligar é 15)
4. Salve

**O que acontece:**

- Mensagem do cliente **dentro da janela** → o ticket encerrado volta (mesmo número)
- Se havia agente, a conversa volta para ele; senão, volta para a fila da equipe
- Mensagem **fora da janela**, ou opção desligada → atendimento novo, como hoje

::: tip Quem entra
Só conversas individuais e mensagem do cliente. Grupos e mensagens enviadas pelo aparelho do agente não reabrem o ticket.
:::

> Changelog: [v2026.8.15](/changelog/2026/08/2026.8.15)

### Botão de WhatsApp Rápido

Botão para abrir WhatsApp do cliente diretamente do chat, com ações automáticas.

**Como configurar:**

1. Em **Configurações** → **Atendimento**, localize **"Botão de WhatsApp Rápido"**
2. Ative o toggle para habilitar
3. Configure no modal:
   - **Mensagem padrão** (use `{{customerName}}` para nome do cliente)
   - **Campo personalizado** a atualizar (opcional)
   - **Etapa do funil** para mover (opcional)
   - **Tag** a adicionar (opcional)
4. Clique em **"Salvar"**

**Como usar:**

1. Abra um chat de cliente WhatsApp
2. No header, clique no botão verde do WhatsApp
3. Nova aba abre com mensagem pronta
4. Ações configuradas são executadas automaticamente

::: warning ⚠️ Importante
O botão só aparece em chats de canais WhatsApp (WAHA, W-API, WhatsApp Oficial).
:::

### Sugestão de Campos ao Finalizar

Quando o atendente finaliza o atendimento, o sistema sugere campos não preenchidos.

**Configuração:**

1. Acesse **Configurações** → **Atendimento**
2. Localize **"Sugestão de Campos ao Finalizar"**
3. Selecione quais campos devem ser sugeridos
4. Defina quais são obrigatórios
5. Salve

**Campos sugeridos:**
- 📝 Campos de texto (nome, observações)
- 📋 Campos select (status, origem)
- 🏷️ Tags
- 📊 Funil (etapa atual)

### Etapa do Funil ao Sair

Define para qual etapa do funil o cliente vai ao encerrar o atendimento.

1. Acesse **Configurações** → **Funis**
2. Localize a opção **"Etapa padrão ao sair"**
3. Selecione a etapa desejada para cada funil
4. Salve

## Permissões e Segurança

### Perfis de Usuário

| Perfil | Descrição |
|--------|-----------|
| `owner` | Proprietário da conta, acesso total |
| `admin` | Administrador, quase todos os acessos |
| `manager` | Gerente, acesso a relatórios e supervisão |
| `agent` | Atendente padrão |
| `agent_limited` | Atendente com restrições |
| `financial` | Acesso ao módulo financeiro |
| `sales` | Vendedor |
| `medical_doctor` | Médico (para clínicas) |
| `medical_assistant` | Assistente médico |

### Ocultar Dados Sensíveis de Agentes

Configuração global para ocultar informações de contato dos clientes para agentes.

**Como configurar:**

1. Acesse **Configurações** → **Geral**
2. Localize **"Ocultar Dados de Contato dos Agentes"**
3. Ative o toggle
4. Configuração é aplicada imediatamente

**Quem vê os dados:**

| Perfil | Acesso |
|--------|--------|
| Superadmin | ✅ Acesso completo |
| Owner | ✅ Acesso completo |
| Admin | ✅ Acesso completo |
| **Agent** | ❌ Dados ocultos |

**O que fica oculto para agentes:**

- ❌ Email, Telefone, WhatsApp
- ❌ Contatos em exportação (CSV, Excel, JSON)
- ❌ Contatos em resultados de busca
- ❌ Contatos ao iniciar chat
- ❌ IDs externos do chat e mensagens
- ❌ Seção de contatos ao editar cliente

**O que agentes PODEM fazer:**

- ✅ Ver e editar nome do cliente
- ✅ Ver e gerenciar tags
- ✅ Ver e editar campos personalizados
- ✅ Atender chats normalmente
- ✅ Enviar e receber mensagens

### Visibilidade de Clientes Restrita

Agentes veem apenas clientes das equipes às quais estão atribuídos.

**Áreas afetadas:**
- 📋 Lista de clientes
- 🔍 Busca de clientes
- 📊 Relatórios (dados filtrados)
- 📤 Exportações (respeita visibilidade)

### Configuração Rápida Restrita

O assistente de Configuração Rápida é visível apenas para perfis administrativos.

| Perfil | Acesso |
|--------|--------|
| Owner | ✅ Sim |
| Admin | ✅ Sim |
| Agent | ❌ Não |

### Menu Financeiro Restrito

O menu financeiro é oculto para perfis não administrativos.

**Quem tem acesso ao módulo Financeiro:**

| Perfil | Acesso |
|--------|--------|
| `owner` | ✅ Acesso total |
| `admin` | ✅ Acesso total |
| `manager` | ✅ Somente leitura |
| `financial` | ✅ Acesso total |

**Quem NÃO tem mais acesso:**

- `agent`, `agent_limited`, `sales`, `medical_doctor`, `medical_assistant`

### Filtros Bloqueados para Usuários Limitados

Usuários com perfil limitado têm acesso restrito aos filtros do sistema.

- Filtros ficam ocultos ou desativados para perfis limitados
- Apenas usuários com permissões adequadas podem utilizar filtros
- Maior controle de permissões e segurança

## Configurações de Equipes

Gerencie equipes, membros e a **distribuição automática por rodízio** em **Configurações → Equipes**.

Consulte o guia completo: [Equipes — Rodízio automático](/guide/teams/#distribuicao-automatica-por-rodizio)

### Atribuição de Agentes por Administrador

Administradores e owners podem gerenciar a atribuição de agentes em conversas sem precisar entrar em cada conversa.

**O que você pode fazer:**
- ✅ Transferir conversa para outra **equipe**
- ✅ Atribuir um **agente específico**
- ✅ Remover agente e deixar conversa **pendente** na fila
- ✅ Gerenciar atendimentos diretamente da lista

**Onde acessar:**

1. **Lista de Conversas** - Menu de três pontos (⋮)
2. **Histórico do Cliente** - Menu de ações
3. **Dentro da Conversa** - Menu no canto superior direito

**Opções ao transferir:**

| Opção | O que acontece |
|-------|----------------|
| Sem agente | Conversa fica pendente na fila da equipe |
| Agente específico | Conversa transferida e marcada como "Em andamento" |

## Configurações de Preferências

### Aba Padrão Configurável

Escolha qual aba abre primeiro ao entrar no sistema.

1. Acesse **Configurações** → **Preferências**
2. Localize **"Aba Padrão"**
3. Selecione a opção preferida:
   - 💬 Chats
   - 👥 Clientes
   - 📅 Agendamentos
   - 📊 Dashboard
4. Salve

::: tip 💡 Dica
Esta é uma configuração por usuário. Cada membro da equipe pode configurar a sua.
:::

## Próximos Passos

- [Equipes](/guide/teams/) - Rodízio automático e gestão de membros
- [Agentes IA](/guide/ai-agents/) - Configurar IA
- [Canais](/guide/channels/) - Configurar canais de atendimento




