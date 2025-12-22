# Construtor de Fluxos

Crie automações visuais poderosas com o construtor de fluxos drag-and-drop.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

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
| **Barra Superior** | Ações de salvar, ativar, testar |

## Criando seu Primeiro Fluxo

### Passo 1: Adicionar Nó Inicial

Todo fluxo começa com um **nó de início**. Este nó define quando o fluxo será ativado.

**Gatilhos disponíveis:**
- Nova conversa
- Mensagem específica
- Palavra-chave
- Horário agendado
- Webhook externo

### Passo 2: Adicionar Mensagem de Boas-Vindas

1. Arraste um nó de **Mensagem** para o canvas
2. Conecte-o ao nó inicial
3. Configure o texto da mensagem

**Exemplo:**
```
Olá, {{customer_name}}! 👋

Bem-vindo ao atendimento da Empresa XYZ.

Como posso ajudá-lo hoje?
```

### Passo 3: Adicionar Menu de Opções

1. Arraste um nó de **Menu** para o canvas
2. Conecte-o à mensagem anterior
3. Configure as opções:

```
1️⃣ Suporte Técnico
2️⃣ Financeiro
3️⃣ Vendas
4️⃣ Falar com Atendente
```

### Passo 4: Conectar Respostas

Para cada opção do menu, conecte a um caminho diferente:

```
       ┌─ Opção 1 → Fluxo de Suporte
Menu ──┼─ Opção 2 → Fluxo Financeiro
       ├─ Opção 3 → Fluxo de Vendas
       └─ Opção 4 → Transferir para Atendente
```

### Passo 5: Salvar e Ativar

1. Clique em **"Salvar"** para guardar as alterações
2. Clique em **"Ativar"** para colocar o fluxo em produção
3. Teste enviando uma mensagem

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Vídeo: Criando seu primeiro fluxo (em breve)</p>
</div>

## Tipos de Nós

### 💬 Mensagem

Envia uma mensagem para o cliente.

**Tipos de conteúdo:**
- Texto simples
- Texto com variáveis
- Imagem
- Vídeo
- Áudio
- Documento
- Localização

### 📋 Menu

Apresenta opções para o cliente escolher.

**Configurações:**
- Opções (texto dos botões)
- Timeout (tempo para responder)
- Mensagem de timeout

### ❓ Pergunta

Coleta informações do cliente.

**Tipos de validação:**
- Texto livre
- Número
- Email
- Telefone
- Data
- Sim/Não

### 🔀 Condição

Cria ramificações baseadas em lógica.

**Operadores:**
- Igual a
- Contém
- Maior que
- Menor que
- Está vazio
- Regex

### ⏱️ Delay

Aguarda um tempo antes de continuar.

**Configurações:**
- Segundos
- Minutos
- Horas
- Até horário específico

### 👤 Transferir

Encaminha para atendimento humano.

**Opções:**
- Equipe específica
- Atendente específico
- Distribuição automática

### 🏷️ Tag

Adiciona ou remove tags do cliente.

### 📝 Atualizar Cliente

Atualiza campos do cadastro do cliente.

### 🔗 Webhook

Faz chamadas para APIs externas.

**Configurações:**
- URL
- Método (GET, POST, PUT)
- Headers
- Body
- Variável de resposta

### 🤖 IA

Usa inteligência artificial para responder.

**Configurações:**
- Modelo (GPT, Claude, etc.)
- Prompt do sistema
- Contexto
- Temperatura

## Variáveis

Use variáveis para personalizar mensagens:

| Variável | Descrição |
|----------|-----------|
| `{{customer_name}}` | Nome do cliente |
| `{{customer_email}}` | Email do cliente |
| `{{customer_phone}}` | Telefone do cliente |
| `{{current_time}}` | Hora atual |
| `{{current_date}}` | Data atual |
| `{{channel_name}}` | Nome do canal |
| `{{last_message}}` | Última mensagem do cliente |

### Variáveis Personalizadas

Você pode criar variáveis a partir de respostas:

```
Pergunta: Qual seu nome?
Variável: {{user_input_name}}
```

## Boas Práticas

### ✅ Faça

- Mantenha fluxos simples e objetivos
- Use mensagens curtas e claras
- Ofereça opção de falar com humano
- Teste antes de ativar
- Use variáveis para personalização

### ❌ Evite

- Fluxos muito longos e complexos
- Muitas opções no menu (máx. 5-6)
- Loops infinitos
- Mensagens muito longas
- Falta de saída do fluxo

## Testando o Fluxo

Antes de ativar em produção:

1. Clique em **"Testar"**
2. Use o simulador para percorrer o fluxo
3. Verifique todos os caminhos
4. Corrija problemas encontrados

## Templates de Fluxo

A Interflow oferece templates prontos:

- **Boas-vindas básico** - Saudação e menu inicial
- **Atendimento comercial** - Captação de leads
- **Suporte técnico** - FAQ e escalonamento
- **Agendamento** - Marcação de horários
- **Pesquisa de satisfação** - NPS e feedback

## Próximos Passos

- [Tipos de Nós em Detalhes](/guia/fluxos/tipos-nos)
- [Variáveis e Personalização](/guia/fluxos/variaveis)
- [Condições e Lógica](/guia/fluxos/condicoes)
- [Integrações Externas](/guia/fluxos/integracoes)

