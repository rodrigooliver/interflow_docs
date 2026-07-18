# Gerenciamento de Clientes

Gerencie todos os seus clientes de forma centralizada no CRM da Interflow.

## Visão Geral

O CRM da Interflow permite gerenciar todos os seus contatos em um único lugar, com histórico completo de interações, campos personalizados e segmentação por tags.

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Lista de clientes</p>
</div>

## Acessando Clientes

1. No menu principal, clique em **Clientes**
2. Você verá a lista de todos os clientes cadastrados
3. Use filtros para encontrar clientes específicos

## Cadastro de Cliente

### Campos Padrão

| Campo | Descrição | Obrigatório |
|-------|-----------|-------------|
| **Nome** | Nome completo do cliente | Sim |
| **Email** | Email de contato | Não |
| **Telefone** | Número principal | Não |
| **WhatsApp** | Número do WhatsApp | Não |

### Criando um Cliente Manualmente

1. Clique em **"Novo cliente"**
2. Preencha os campos
3. Adicione tags (opcional)
4. Clique em **"Salvar"**

### Criação Automática

Clientes são criados automaticamente quando:
- Iniciam uma conversa em qualquer canal
- São importados via planilha
- São criados via API

### Bloqueio de Clientes Duplicados

O sistema detecta e bloqueia automaticamente a criação de clientes duplicados.

**Como funciona:**

1. Ao tentar criar um cliente com dados existentes
2. Sistema verifica registros existentes
3. Se encontrar duplicado, mostra alerta
4. Opção de ver o cliente existente
5. Ou mesclar dados no existente

**Critérios de detecção:**

| Campo | Detecção |
|-------|----------|
| Telefone | ✅ Exato (ignora formatação) |
| Email | ✅ Exato (ignora maiúsculas) |
| WhatsApp | ✅ Exato (normalizado) |

**Opções quando encontra duplicado:**

- 🚫 Nova criação é bloqueada
- 🔗 Link para registro existente é exibido
- 🔄 Opção de mesclar dados
- ✏️ Opção de atualizar existente

::: tip 💡 Configuração
A mesclagem automática pode ser desativada em **Configurações → Clientes → "Permitir duplicados"**.
:::

## Perfil do Cliente

Ao clicar em um cliente, você acessa seu perfil completo:

### Informações

- Dados de contato
- Campos personalizados
- Tags
- Data de cadastro
- Última interação

### Endereços

Na edição do cliente, a seção **Endereços** permite gerenciar um ou mais endereços de entrega ou cobrança.

**O que você pode fazer:**
- Listar endereços cadastrados (com indicação do padrão)
- Criar, editar e excluir endereços
- Informar rua, número, complemento, cidade, estado, CEP e país
- Salvar coordenadas GPS (latitude/longitude) e abrir no Google Maps

**Como cadastrar:**
1. Abra o cliente e vá até a seção **Endereços**
2. Clique em **Adicionar**
3. Preencha os campos e, se quiser, as coordenadas
4. Salve

::: tip 💡 Agente de IA
Os endereços também podem ser gravados automaticamente pela ferramenta **Alterar Endereço do Cliente** — veja [Ferramentas da IA](/guide/ai-agents/tools/change-customer-address).
:::

### Histórico

- Todas as conversas
- Agendamentos
- Compras/transações
- Notas internas

### Ações

- Iniciar nova conversa
- Agendar tarefa
- Adicionar nota
- Editar cadastro

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Perfil do cliente</p>
</div>

## Pesquisa e Filtros

### Busca Rápida

Digite no campo de busca para encontrar clientes por:
- Nome
- Email
- Telefone
- Tags

### Filtros Avançados

| Filtro | Descrição |
|--------|-----------|
| **Tags** | Filtrar por tags específicas |
| **Canal** | Por canal de origem |
| **Data** | Por período de cadastro |
| **Campos** | Por valores de campos personalizados |
| **Status** | Ativos, inativos, etc. |

### Salvando Filtros

1. Configure os filtros desejados
2. Clique em **"Salvar filtro"**
3. Dê um nome ao filtro
4. Acesse rapidamente pelo seletor

### Visibilidade Restrita para Agentes

Agentes veem apenas clientes das equipes às quais estão atribuídos.

**Áreas afetadas:**
- 📋 Lista de clientes
- 🔍 Busca de clientes
- 📊 Relatórios (dados filtrados)
- 📤 Exportações (respeita visibilidade)

::: warning ⚠️ Segurança
Administradores continuam vendo todos os clientes. Essa configuração protege dados sensíveis entre equipes.
:::

## Importação de Clientes

### Via Planilha (CSV/Excel)

1. Vá em **Clientes** → **Importar**
2. Baixe o modelo de planilha
3. Preencha com seus dados
4. Faça upload do arquivo
5. Mapeie os campos
6. Confirme a importação

**Colunas do modelo:**

```csv
nome,email,telefone,whatsapp,tag1,tag2,campo_personalizado
João Silva,joao@email.com,11999999999,11999999999,cliente,vip,Empresa XYZ
```

### Via API

Veja a [documentação da API](/api/clientes/criar) para importação programática.

## Exportação de Clientes

1. Aplique os filtros desejados
2. Clique em **"Exportar"**
3. Selecione o formato (CSV, Excel, JSON)
4. Baixe o arquivo

::: warning ⚠️ Dados Sensíveis
Se a opção "Ocultar Dados de Contato dos Agentes" estiver ativa, agentes não verão email, telefone e WhatsApp nas exportações.
:::

## Relatórios Avançados de Clientes

Gere relatórios com agrupamentos e subdivisões personalizadas:

1. Em **Clientes** → clique em **"Relatórios Avançados"** 📊
2. Clique em **"Nova Configuração"**
3. Siga o assistente de 5 etapas:
   - **Etapa 1**: Upload do JSON (exportar da lista de clientes)
   - **Etapa 2**: Configure agrupamentos (ex: por Origem, Status)
   - **Etapa 3**: Configure coluna de total
   - **Etapa 4**: Configure subdivisões (ex: motivos de não compra)
   - **Etapa 5**: Revise e salve

**Recursos:**
- Normalização inteligente (unifica variações)
- Preview em tempo real
- Exportação a CSV
- Modelos salvos reutilizáveis

Veja mais em [Relatórios](/guide/reports/).

## Exclusão em Massa de Clientes

Administradores e proprietários podem excluir vários clientes simultaneamente, com a opção de apagar também todos os chats vinculados.

### Como usar

1. Acesse **Clientes** e selecione os clientes desejados usando as caixas de seleção
2. Clique em **"Excluir selecionados"**
3. No modal de confirmação, marque **"Também apagar todos os chats vinculados"** (visível somente para admin e owner)
4. Confirme a exclusão

::: warning ⚠️ Irreversível
Mensagens, arquivos e sessões de fluxo de todos os chats dos clientes selecionados serão excluídos permanentemente. Pedidos POS são mantidos.
:::

### Itens por Página

Escolha quantos clientes exibir por página na listagem:

- Na parte inferior da lista, selecione **10 por página** (padrão) ou **50 por página**
- A lista recarrega automaticamente ao mudar o valor

---


## Funil de Vendas

No **CRM → Funil de Vendas**, acompanhe clientes por estágio em um quadro kanban.

### Buscar cliente por nome

Use o campo de busca no topo do funil para localizar um cliente em qualquer etapa:

1. Digite o nome no campo **Buscar cliente por nome...**
2. Veja os resultados com a **etapa** (badge) e a **posição** (`#N de T`)
3. Clique no resultado para abrir o **modal de edição** do cliente
4. Se o card já estiver carregado na coluna, ele também é destacado no quadro

::: tip 💡
A busca cobre todo o funil atual (não só os cards já carregados) e respeita **Somente meus** e **Ocultar finalizados**.
:::

> Changelog: [v2026.7.7](/changelog/2026/07/2026.7.7)

### Ocultar finalizados

Use a opção **Ocultar finalizados** no topo do funil para esconder clientes cuja **última conversa** está Finalizada (ou marcada como resolvida).

1. Abra o funil desejado
2. Marque **Ocultar finalizados**
3. As colunas mostram apenas clientes pendentes, em atendimento ou sem conversa
4. Desmarque para voltar a ver todos

::: tip 💡
A opção não apaga dados — apenas filtra a visualização. Combina com **Somente meus**.
:::

> Changelog: [v2026.7.6](/changelog/2026/07/2026.7.6)

## Controle de Acesso ao CRM

Controle granular sobre quem pode ver e acessar cada cliente no CRM.

### Visibilidade por Equipe (Agentes)

Agentes veem apenas clientes das equipes às quais estão atribuídos:

- 📋 Lista de clientes
- 🔍 Busca de clientes
- 📊 Relatórios (dados filtrados)
- 📤 Exportações (respeita visibilidade)

::: info ℹ️ Administradores
Administradores continuam vendo todos os clientes. Essa configuração protege dados sensíveis entre equipes.
:::

### Consulta por Permissão

A segurança multinível garante que:
- Agentes só consultam clientes com os quais têm permissão de acesso
- Relatórios são filtrados automaticamente conforme o perfil do usuário
- Exportações respeitam as mesmas regras de visibilidade da interface

### Dados Sensíveis (LGPD)

Proteja informações de contato dos clientes para agentes:

1. Acesse **Configurações → Clientes**
2. Ative **"Ocultar dados de contato dos agentes"**
3. Agentes não verão telefone, email e WhatsApp nas listas e exportações

---

## Mesclagem de Clientes

Quando identificar duplicatas:

1. Selecione os clientes duplicados
2. Clique em **"Mesclar"**
3. Escolha qual registro manter como principal
4. Confirme a mesclagem

::: tip DICA
A mesclagem mantém todo o histórico de ambos os registros.
:::

## Campos Personalizados

### Cascata de Alteração em Campos Select

Ao renomear uma opção de campo personalizado do tipo select, todos os registros são atualizados automaticamente.

**Como funciona:**

1. Acesse um cliente → **Campos Personalizados**
2. Clique ✏️ ao lado do campo
3. Clique ✏️ ao lado da opção que deseja renomear
4. Digite o novo valor
5. Clique em **"Atualizar"**

**O que é atualizado:**
- ✅ Definição do campo
- ✅ Todos os clientes que usam essa opção
- ✅ Exibe quantos registros foram afetados

**Proteções:**
- 🔒 Detecta edições concorrentes
- 🚫 Bloqueia duplicados
- ⚠️ Avisa sobre conflitos

## Notas e Tarefas

### Adicionando Notas

1. No perfil do cliente, vá em **Notas**
2. Clique em **"Nova nota"**
3. Digite o conteúdo
4. Salve

As notas são visíveis apenas para sua equipe.

### Criando Tarefas

1. No perfil do cliente, clique em **"Nova tarefa"**
2. Defina:
   - Título
   - Descrição
   - Data de vencimento
   - Responsável
   - Prioridade
3. Salve

## Integração com Atendimento

Quando um cliente inicia uma conversa:

- O perfil é exibido automaticamente na tela de chat
- Você pode acessar histórico e notas
- Campos podem ser atualizados durante o atendimento

## Próximos Passos

- [Relatórios](/guide/reports/) - Relatórios avançados de clientes
- [Configurações](/guide/settings/) - Permissões e visibilidade
- [Chat](/guide/chat/interface) - Atendimento integrado

