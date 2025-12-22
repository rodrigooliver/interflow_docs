# Construtor de Fluxos

Crie automações visuais poderosas com o construtor de fluxos drag-and-drop.

## Visão Geral

O Construtor de Fluxos permite criar automações de atendimento de forma visual, sem necessidade de programação. Arraste, conecte e configure nós para definir o comportamento do seu chatbot.

<!-- Placeholder para screenshot -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 80px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 24px;">📸 Interface do Construtor de Fluxos (em breve)</span>
</div>

## Acessando o Construtor

1. No menu principal, clique em **Fluxos**
2. Clique em **"Novo fluxo"** ou edite um existente
3. O editor visual será aberto

## Interface do Editor

O editor possui as seguintes áreas:

| Área | Descrição |
|------|-----------|
| **Canvas** | Área central onde você monta o fluxo |
| **Painel de Nós** | Lateral com os tipos de nós disponíveis |
| **Propriedades** | Configurações do nó selecionado |
| **Barra Superior** | Ações de salvar, publicar, variáveis e configurações |

### Barra Superior

A barra superior contém:

- **← Voltar**: Retorna à lista de fluxos
- **Nome do Fluxo**: Clique para editar
- **Variáveis** (ícone `{ }`): Abre o modal para gerenciar variáveis do fluxo
- **Publicar**: Publica as alterações para produção
- **Resetar**: Descarta alterações não publicadas
- **Configurações** (⚙️): Abre as configurações do fluxo

## Tipos de Fluxo

A Interflow possui **4 tipos de fluxo**, cada um com comportamento e propósito específico:

### 1. 💬 Geral (General)

Fluxos de atendimento que podem ser iniciados manualmente ou por gatilhos automáticos.

**Características:**
- Pode ser iniciado manualmente pelo atendente no chat
- Pode ser iniciado automaticamente por **gatilhos** (triggers)
- Suporta todos os tipos de nós
- Aparece na lista de "Início Rápido" (configurável)

**Gatilhos disponíveis:**
- **Canal**: Dispara quando mensagem chega de um canal específico
- **Horário**: Dispara em horários específicos
- **Palavra-chave**: Dispara quando cliente envia determinadas palavras
- **Webhook**: Dispara por chamada de API externa

**Casos de uso:**
- Boas-vindas automáticas
- Menu de atendimento
- FAQ automatizado
- Qualificação de leads

### 2. 🔴 Fechamento de Atendimento (Attendance Closure)

Fluxos silenciosos executados automaticamente ao encerrar um atendimento.

**Características:**
- Vinculado a um **Tipo de Fechamento** específico
- Executado automaticamente quando o atendente clica em "Resolver" e seleciona o tipo de fechamento
- Fluxo silencioso (não aparece como nova conversa)
- **Não permite** o nó "Encerrar Atendimento" (para evitar loop)

**Como configurar:**
1. Crie um **Tipo de Fechamento** em Configurações > Tipos de Fechamento
2. Crie um fluxo do tipo "Fechamento de Atendimento"
3. No tipo de fechamento, vincule o fluxo criado

**Casos de uso:**
- Pesquisa de satisfação (NPS)
- Solicitação de avaliação
- Envio de resumo por email
- Atualização de dados no CRM

### 3. 📈 Mudança de Estágio CRM (CRM Stage Change)

Fluxos silenciosos executados quando um cliente muda de estágio no funil.

**Características:**
- Vinculado a um **Estágio** específico de um funil
- Executado automaticamente ao mover o cliente para o estágio
- Fluxo silencioso
- **Não permite** o nó "Aguardar Resposta" (Input)
- **Não permite** alterar o campo "Funil" no nó "Atualizar Cliente" (para evitar loop infinito)

**Como configurar:**
1. Acesse o funil desejado
2. No estágio, vincule o fluxo de mudança de estágio

**Casos de uso:**
- Envio de email automático ao mudar de etapa
- Notificação para equipe de vendas
- Atualização de campos personalizados
- Integração com sistemas externos

### 4. 🔄 Transferência de Equipe (Team Transfer)

Fluxos silenciosos executados quando um chat é transferido para uma equipe.

**Características:**
- Vinculado a uma **Equipe** específica
- Executado automaticamente ao transferir o chat para a equipe
- Fluxo silencioso
- **Não permite** o nó "Aguardar Resposta" (Input)
- **Não permite** alterar o campo "Equipe" no nó "Atualizar Cliente" (para evitar loop infinito)

**Como configurar:**
1. Acesse **Configurações > Equipes**
2. Edite a equipe desejada
3. Vincule o fluxo de transferência

**Casos de uso:**
- Mensagem automática de boas-vindas da equipe
- Atualização de tags ou campos
- Notificação no canal interno
- Integração com sistemas de ticket

### Comparativo dos Tipos

| Característica | Geral | Fechamento | Estágio CRM | Transferência |
|----------------|-------|------------|-------------|---------------|
| Início manual | ✅ | ❌ | ❌ | ❌ |
| Gatilhos | ✅ | ❌ | ❌ | ❌ |
| Silencioso | ❌ | ✅ | ✅ | ✅ |
| Nó Input | ✅ | ✅ | ❌ | ❌ |
| Nó Encerrar | ✅ | ❌ | ✅ | ✅ |

## Configurações do Fluxo

Acesse as configurações clicando no ícone de **engrenagem** (⚙️) no header do editor.

### Nome e Descrição

- **Nome**: Identificação do fluxo
- **Descrição**: Explicação do propósito do fluxo

### Tipo de Fluxo

Selecione um dos 4 tipos descritos acima. 

::: warning Atenção
Ao alterar o tipo de fluxo, o sistema valida se os nós existentes são compatíveis. Nós incompatíveis devem ser removidos antes de salvar.
:::

### Tempo de Debounce

Define quanto tempo (em milissegundos) o sistema aguarda antes de processar mensagens.

| Configuração | Descrição |
|--------------|-----------|
| **Padrão** | 20.000ms (20 segundos) |
| **Mínimo** | 0ms |
| **Recomendado** | 10.000ms a 30.000ms |

**Por que usar debounce?**

Quando o cliente envia várias mensagens curtas em sequência (ex: "Oi", "Tudo bem?", "Preciso de ajuda"), o debounce aguarda um período de inatividade antes de processar. Isso evita que cada mensagem gere uma resposta separada.

**Exemplo:**
```
Cliente: "Oi"           → Aguarda 20s
Cliente: "Tudo bem?"    → Renova o timer, aguarda mais 20s
Cliente: "Preciso..."   → Renova o timer, aguarda mais 20s
[20 segundos sem mensagem]
→ Processa todas as mensagens juntas
```

### Ocultar da Lista de Início Rápido

**Disponível apenas para fluxos do tipo "Geral".**

Quando ativado, o fluxo não aparece na lista de início rápido no header do chat. Útil para fluxos que devem ser iniciados apenas por gatilhos.

### Configurar Gatilhos

**Disponível apenas para fluxos do tipo "Geral".**

Clique em **"Configurar Gatilhos"** para definir quando o fluxo deve ser iniciado automaticamente.

**Tipos de gatilhos:**

| Tipo | Descrição |
|------|-----------|
| **Canal** | Dispara quando mensagem chega de canais específicos |
| **Horário** | Dispara em dias/horários específicos |
| **Palavra-chave** | Dispara quando cliente envia palavras específicas |
| **Primeiro Contato** | Dispara na primeira mensagem do cliente |

## Criando seu Primeiro Fluxo

### Passo 1: Adicionar Nó Inicial

Todo fluxo começa com um **nó Start**. Este nó é criado automaticamente e marca o início do fluxo.

### Passo 2: Adicionar Mensagem de Boas-Vindas

1. Arraste um nó de **Texto** para o canvas
2. Conecte-o ao nó Start
3. Configure a mensagem

**Exemplo:**
```
Olá, {{customer_name}}! 👋

Bem-vindo ao atendimento da Empresa XYZ.

Como posso ajudá-lo hoje?
```

### Passo 3: Adicionar Menu de Opções

1. Arraste um nó de **Input** para o canvas
2. Conecte-o à mensagem anterior
3. Configure as opções:

```
1️⃣ Suporte Técnico
2️⃣ Financeiro
3️⃣ Vendas
4️⃣ Falar com Atendente
```

### Passo 4: Conectar Respostas

Para cada opção do menu, conecte a um caminho diferente usando o nó de **Condição**:

```
          ┌─ Opção 1 → Fluxo de Suporte
Condição ─┼─ Opção 2 → Fluxo Financeiro
          ├─ Opção 3 → Fluxo de Vendas
          └─ Opção 4 → Transferir para Atendente
```

### Passo 5: Salvar e Publicar

1. Clique em **"Salvar"** para guardar como rascunho
2. Clique em **"Publicar"** para colocar em produção
3. Configure os gatilhos se necessário

## Tipos de Nós

O Construtor de Fluxos oferece diversos tipos de nós organizados por categoria. Confira a documentação detalhada de cada um:

👉 **[Ver todos os tipos de nós](/guide/flows/nodes/)**

### Resumo por Categoria

#### 📤 Nós de Envio

| Nó | Descrição |
|----|-----------|
| [Mensagem de Texto](/guide/flows/nodes/text) | Envia texto, listas e links |
| [Enviar Áudio](/guide/flows/nodes/audio) | Envia arquivos de áudio |
| [Enviar Imagem](/guide/flows/nodes/image) | Envia imagens com legenda |
| [Enviar Vídeo](/guide/flows/nodes/video) | Envia vídeos |
| [Enviar Documento](/guide/flows/nodes/document) | Envia PDFs e documentos |
| [Enviar Email](/guide/flows/nodes/email) | Envia emails via SMTP |

#### 📥 Nós de Recebimento

| Nó | Descrição |
|----|-----------|
| [Aguardar Resposta](/guide/flows/nodes/input) | Captura texto ou opções do cliente |

#### 🔀 Nós de Controle

| Nó | Descrição |
|----|-----------|
| [Delay](/guide/flows/nodes/delay) | Pausa a execução do fluxo |
| [Condição](/guide/flows/nodes/condition) | Cria ramificações condicionais |
| [Aleatório](/guide/flows/nodes/random) | Distribui aleatoriamente |
| [Pular Para](/guide/flows/nodes/jump-to) | Redireciona para outro nó |

#### 📊 Nós de Dados

| Nó | Descrição |
|----|-----------|
| [Definir Variável](/guide/flows/nodes/variable) | Define ou calcula valores |
| [Atualizar Cliente](/guide/flows/nodes/update-customer) | Atualiza dados do cliente |
| [Requisição HTTP](/guide/flows/nodes/request) | Chama APIs externas |

#### 🤖 Nós de IA

| Nó | Descrição |
|----|-----------|
| [Agente IA](/guide/flows/nodes/agenteia) | Executa agente pré-configurado |
| [OpenAI](/guide/flows/nodes/openai) | Integração direta com GPT |
| [ElevenLabs TTS](/guide/flows/nodes/elevenlabs) | Síntese de voz ElevenLabs |
| [Minimax TTS](/guide/flows/nodes/minimax) | Síntese de voz Minimax |

#### ⚙️ Nós de Sistema

| Nó | Descrição |
|----|-----------|
| [Mensagem de Sistema](/guide/flows/nodes/system-message) | Mensagem interna |
| [Nota Privada](/guide/flows/nodes/private-note) | Adiciona nota ao atendimento |
| [Encerrar Atendimento](/guide/flows/nodes/close-attendance) | Fecha o atendimento |
| [Grupo](/guide/flows/nodes/group) | Agrupa nós visualmente |

## Variáveis

Use variáveis para personalizar mensagens:

| Variável | Descrição |
|----------|-----------|
| <code v-pre>{{customer_name}}</code> | Nome do cliente |
| <code v-pre>{{customer_email}}</code> | Email do cliente |
| <code v-pre>{{customer_phone}}</code> | Telefone do cliente |
| <code v-pre>{{current_time}}</code> | Hora atual |
| <code v-pre>{{current_date}}</code> | Data atual |
| <code v-pre>{{channel_name}}</code> | Nome do canal |
| <code v-pre>{{last_message}}</code> | Última mensagem do cliente |

### Gerenciando Variáveis

Para criar ou editar variáveis:

1. Clique no ícone **Variáveis** (`{ }`) no header do editor
2. No modal, clique em **"Nova Variável"**
3. Defina nome, tipo e valor inicial
4. Salve a variável

As variáveis criadas ficam disponíveis nos nós [Definir Variável](/guide/flows/nodes/variable) e podem ser usadas em qualquer campo de texto.

## Boas Práticas

### ✅ Faça

- Mantenha fluxos simples e objetivos
- Use mensagens curtas e claras
- Ofereça opção de falar com humano
- Teste antes de publicar
- Use variáveis para personalização
- Organize fluxos complexos com [Grupos](/guide/flows/nodes/group)
- Configure debounce adequado para evitar respostas duplicadas

### ❌ Evite

- Fluxos muito longos e complexos
- Muitas opções no menu (máx. 5-6)
- Loops infinitos
- Mensagens muito longas
- Falta de saída do fluxo
- Alterar campos que podem causar loops (funil em fluxos de estágio, equipe em fluxos de transferência)

## Testando o Fluxo

Antes de publicar:

1. Revise todos os nós e conexões
2. Verifique se todas as variáveis estão configuradas
3. Teste os diferentes caminhos do fluxo
4. Publique e teste em um canal de desenvolvimento

## Templates de Fluxo

A Interflow oferece templates prontos:

- **Boas-vindas básico** - Saudação e menu inicial
- **Atendimento comercial** - Captação de leads
- **Suporte técnico** - FAQ e escalonamento
- **Agendamento** - Marcação de horários
- **Pesquisa de satisfação** - NPS e feedback

## Próximos Passos

- [Tipos de Nós em Detalhes](/guide/flows/nodes/)
- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Aguardar Resposta](/guide/flows/nodes/input)
- [Nó: Requisição HTTP](/guide/flows/nodes/request)
