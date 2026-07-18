# Agentes IA

Configure agentes de inteligência artificial para automatizar atendimentos na Interflow.

## Visão Geral

Os Agentes IA da Interflow são assistentes virtuais inteligentes que podem atender clientes de forma autônoma, responder perguntas, agendar compromissos, transferir para equipes e muito mais.

::: info 🔄 Fluxo Automático
Ao criar um Agente IA, o sistema **gera automaticamente um fluxo** vinculado a ele. O agente sempre opera dentro deste fluxo, permitindo combinar a inteligência da IA com outros nós de automação.
:::

## Modelos Disponíveis

No Agente de IA você escolhe a **integração** e o **modelo**:

| Integração | Quem paga | Modelos |
|------------|-----------|---------|
| **Interflow** | Créditos do plano | OpenAI (lista abaixo) |
| **OpenAI** (chave própria) | Sua conta OpenAI | Mesma família OpenAI |
| **DeepSeek** (chave própria) | Sua conta DeepSeek | DeepSeek V4 Flash e V4 Pro |

### OpenAI — Com Raciocínio

Modelos com raciocínio avançado (nível de esforço e verbosidade configuráveis).

| Modelo | Descrição | Custo |
|--------|-----------|-------|
| GPT-5.5 | Raciocínio premium | 💲💲💲💲 |
| GPT-5.4 | Raciocínio mais recente | 💲💲💲 |
| GPT-5.4 Mini | Raciocínio econômico | 💲 |
| GPT-5.4 Nano | Raciocínio super econômico | 💲 |
| GPT-5.2 | Raciocínio avançado | 💲💲💲 |
| GPT-5.1 | Raciocínio avançado | 💲💲💲 |
| GPT-5 | Raciocínio | 💲💲💲 |
| GPT-5 Mini | Raciocínio econômico | 💲 |
| GPT-5 Nano | Raciocínio super econômico | 💲 |

### OpenAI — Conversação (Chat)

Especializados em conversação; os modelos `gpt-5.X-chat-latest` também suportam raciocínio (exceto o legado GPT-5 Chat Latest).

| Modelo | Descrição | Custo |
|--------|-----------|-------|
| GPT-5.3 Chat Latest | Conversação | 💲💲💲 |
| GPT-5.2 Chat Latest | Conversação | 💲💲💲 |
| GPT-5.1 Chat Latest | Conversação | 💲💲💲 |
| GPT-5 Chat Latest | Conversação (legado) | 💲💲💲 |

### OpenAI — Sem Raciocínio

Modelos mais simples e rápidos, com temperatura e máximo de tokens.

| Modelo | Descrição | Custo |
|--------|-----------|-------|
| GPT-4.1 | Inteligente e versátil | 💲💲💲 |
| GPT-4.1 Mini | Baixo custo com bom desempenho | 💲 |
| GPT-4.1 Nano | Mais econômico, tarefas leves | 💲 |

### DeepSeek (chave própria)

Disponíveis ao cadastrar a integração DeepSeek. Não consomem créditos Interflow.

| Modelo | Descrição | Custo (referência) |
|--------|-----------|--------------------|
| DeepSeek V4 Flash | Rápido e econômico | 💲 |
| DeepSeek V4 Pro | Mais capaz, tarefas complexas | 💲💲 |

Ambos suportam **Thinking Mode** (raciocínio em cadeia) com esforço Alto ou Máximo. Com Thinking Mode ativo, a temperatura é ignorada pela API da DeepSeek.

::: tip 💡 Dica
Para a maioria dos atendimentos com créditos Interflow, **GPT-5 Nano** ou **GPT-5 Mini** (ou **GPT-5.4 Nano** / **Mini**) oferecem bom custo-benefício. Com chave própria, veja também [OpenAI](/guide/integrations/openai) e [DeepSeek](/guide/integrations/deepseek).
:::

::: info 🚀 Em Breve
Outros provedores poderão ser adicionados no futuro (ex.: Claude, Gemini).
:::

## Acessando Agentes IA

1. No menu principal, clique em **Agentes IA** (🤖)
2. Você verá a lista de todos os agentes configurados
3. Use a **busca** para encontrar agentes por nome
4. Clique no botão **A → Z** para ordenar alfabeticamente

## Criando um Agente IA

Ao criar um novo agente, você terá duas opções:

### Opção 1: Gerar com IA
Use nossa ferramenta de geração assistida por IA para criar o contexto do agente automaticamente. Basta descrever o que você deseja e a IA criará o prompt completo.

### Opção 2: Criar Manualmente
Crie o agente do zero, configurando cada detalhe manualmente.

## Abas do Editor

O editor de Agentes IA possui **6 abas principais**:

### 1. Contexto
Esta é a aba principal onde você define o prompt/instruções do agente.

**Recursos disponíveis:**
- **Editor de Texto**: Escreva as instruções, personalidade e regras do agente
- **Gerar com IA**: Cria o contexto automaticamente baseado em uma descrição
- **Melhorar**: Melhora o texto existente usando IA
- **Questões**: Visualiza perguntas que o agente não soube responder (apenas em edição)
- **Contextos Extras**: Adicione informações complementares (ex: listas de produtos)
- **Uso de Tokens**: Acompanhe o consumo de tokens em tempo real (para Interflow)

**Exemplo de Prompt:**

```text
Você é a Interflow, assistente virtual de atendimento da Empresa XYZ.

**Personalidade:**
- Amigável e prestativa
- Profissional mas não robótica
- Usa emojis com moderação

**Regras:**
- Sempre cumprimente o cliente pelo nome
- Não invente informações sobre produtos
- Se não souber algo, transfira para um humano

**Informações da empresa:**
- Horário: Segunda a sexta, 9h às 18h
- Produtos: [lista de produtos]
- Políticas: [políticas de troca, garantia, etc.]
```

### 2. Testar

A aba de testes permite conversar diretamente com o Agente IA antes de colocá-lo em produção.

**Como Usar:**
1. Após adicionar o contexto, clique na aba **"Testar"**
2. Digite mensagens como se fosse um cliente
3. Observe as respostas do agente
4. Verifique se o comportamento está adequado

**O que Testar:**
- ✅ Tom de voz e personalidade
- ✅ Respostas a perguntas frequentes
- ✅ Limites do que a IA pode/não pode fazer
- ✅ Cenários de transferência para humano

### 3. Arquivos

Adicione mídia que o agente pode enviar durante a conversa.

**Tipos de arquivo suportados:**
- 🖼️ **Imagens**: JPG, PNG, GIF, WebP
- 🎵 **Áudios**: MP3, WAV, OGG
- 🎬 **Vídeos**: MP4, WebM
- 📄 **Documentos**: PDF, DOCX, XLSX

**Uso:**
O agente pode referenciar e enviar esses arquivos durante a conversa quando apropriado.

### 4. Ferramentas

Configure as ações que o agente pode executar durante a conversa. Há dois tipos:

- **Ações prontas** — cadastro do cliente, contato, endereço, consultar API, pesquisar em sites, transferir, agenda, funil, follow-up e outras
- **Ações personalizadas** — ferramentas que você cria (parâmetros + o que executar ao acionar)

::: tip 📖 Ver mais
Lista completa, descrição de cada ação e passo a passo: [Ferramentas da IA](/guide/ai-agents/tools/).
:::

### 5. Base de Conhecimento

Cadastre documentos internos da sua empresa para que a IA consulte durante os atendimentos, oferecendo respostas precisas sem depender de raciocínio genérico.

**Como funciona:**

Cada documento cadastrado vira automaticamente uma **ferramenta** disponível para a IA. A busca é adaptativa:

- **Documentos curtos** (até 3 blocos) → conteúdo completo retornado diretamente
- **Documentos longos** (mais de 3 blocos) → busca semântica RAG retorna apenas os trechos mais relevantes para a pergunta do cliente

A busca usa tecnologia **híbrida** combinando embeddings vetoriais com busca por palavras-chave, com suporte a Português, Inglês e Espanhol.

**Como adicionar um documento:**

1. Na aba **Base de Conhecimento**, clique em **"Adicionar documento"**
2. Preencha:
   - **Título** – Nome do documento (ex: `Horário de Atendimento`)
   - **Descrição** – Resumo do conteúdo; quanto mais específico, melhor a IA sabe quando chamar (ex: `Contém horários de funcionamento, feriados e telefone para agendamento`)
   - **Idioma** – Idioma principal do conteúdo
   - **Conteúdo** – Texto completo, com suporte a Markdown
3. Clique em **"Salvar"**

::: tip 💡 Dica
A **descrição** é o campo mais importante. Use palavras que o cliente usaria ao perguntar: em vez de "Informações gerais", escreva "Contém endereço, horários, planos aceitos e valores de consulta".
:::

::: info 📂 Organização por assunto
Prefira **um documento por assunto** (ex: Horários, Endereço, Política de Cancelamento) em vez de um único documento com tudo. Documentos focados geram respostas mais precisas.
:::

**Benefícios:**
- ✅ Respostas mais rápidas e precisas com dados internos da empresa
- ✅ Redução no consumo de tokens
- ✅ Configuração zero — documentos viram ferramentas automaticamente
- ✅ Editor Markdown para formatação de conteúdo

---

### 6. Avançado

Configurações detalhadas do agente:

#### Informações Básicas
- **Título**: Nome identificador do agente
- **Prompt Padrão**: Disponibilizar para todas as organizações (apenas superadmins)

#### Configurações de IA
- **Integração**: Interflow (créditos do plano), OpenAI (chave própria) ou DeepSeek (chave própria)
- **Modelo**: Selecione o modelo conforme a integração
- **Temperatura** (OpenAI sem raciocínio): Controla a criatividade das respostas (0.0 a 2.0)
- **Nível de Raciocínio** (OpenAI com raciocínio): Baixo, Médio ou Alto
- **Thinking Mode** (DeepSeek): Liga/desliga raciocínio em cadeia e esforço (Alto / Máximo)
- **Máximo de Tokens** (OpenAI sem raciocínio): Limite de tokens na resposta
- **Verbosidade** (modelos GPT-5): Controla o tamanho das respostas
- **Fuso Horário**: Define o timezone para datas e horários

#### Configurações de Fluxo
- **Visualizar Fluxo**: Acesse o fluxo vinculado ao agente
- **Resetar Fluxo**: Recria o fluxo com a configuração padrão
- **Gatilhos**: Configure quando o agente deve ser acionado

## Integração de Fallback

Configure um agente IA secundário que assume automaticamente quando o agente principal não consegue responder ou atinge um limite.

### Para que serve?

- Garantir atendimento 24/7 mesmo quando o agente primário está limitado
- Redirecionar automaticamente para um agente especializado em determinados tópicos
- Evitar que clientes fiquem sem resposta em casos de erro ou timeout

### Como configurar

1. Na aba **Avançado** do agente, localize a seção **"Integração de Fallback"**
2. Selecione o **Agente IA** de fallback
3. Configure os **alertas** desejados (notificação ao acionar o fallback)
4. Defina os **casos de uso** para acionamento automático
5. Salve

::: tip 💡 Caso de uso comum
Configure o agente principal para atendimento geral e um agente especializado (ex: suporte técnico) como fallback para perguntas técnicas específicas.
:::

---

## Créditos de IA

O uso dos Agentes IA é medido em **créditos baseados em USD**, proporcionando transparência no controle de custos.

### Tipos de Créditos

| Tipo | Descrição |
|------|-----------|
| **Créditos do Plano** | Depositados na renovação mensal. Zerados ao renovar. |
| **Créditos Comprados** | Adquiridos separadamente. Não expiram. |
| **Créditos Bônus** | Promocionais ou de indicação. Não expiram. |

### Tabela de Custos por Modelo (créditos Interflow / OpenAI)

| Modelo | Input (1M tokens) | Output (1M tokens) |
|--------|-------------------|--------------------|
| **GPT-5.5** | $5.00 | $30.00 |
| **GPT-5.4** | $2.50 | $15.00 |
| **GPT-5.4 Mini** | $0.75 | $4.50 |
| **GPT-5.4 Nano** | $0.20 | $1.25 |
| **GPT-5.2** / **GPT-5.3 Chat Latest** | $1.75 | $14.00 |
| **GPT-5.1** / **GPT-5** / **GPT-5 Chat Latest** | $1.25 | $10.00 |
| **GPT-5 Mini** | $0.25 | $2.00 |
| **GPT-5 Nano** | $0.05 | $0.40 |
| **GPT-4.1** | $2.00 | $8.00 |
| **GPT-4.1 Mini** | $0.40 | $1.60 |
| **GPT-4.1 Nano** | $0.10 | $0.40 |

Preços DeepSeek (cobrança na conta DeepSeek): veja [Integração DeepSeek](/guide/integrations/deepseek).

::: tip 💡 Economia
Tokens em cache custam até **10x menos**. Modelos Mini e Nano são significativamente mais baratos para casos de uso de alto volume.
:::

### Extrato de Créditos

Acesse o histórico detalhado em **Configurações → Uso → Créditos de IA**:
- Saldo disponível total
- Detalhamento por fonte (Plano, Comprado, Bônus)
- Histórico completo de transações
- Filtros por tipo de transação e uso

---

## Follow-up Inteligente

A IA pode ajustar automaticamente o follow-up com base no contexto da conversa.

### Como Funciona

Quando o cliente menciona uma data futura ou indica que não é o momento:

- **"Vamos conversar na quinta"** → IA reprograma follow-up para quinta-feira
- **"Volto no dia 25"** → IA agenda retorno para dia 25
- **"Já fechei negócio"** → IA pausa o follow-up

### Configurando

1. Acesse as **Ferramentas** do agente
2. Adicione a ação **"Alterar Data de Retorno"**
3. Selecione o **Fluxo** e o **Nó** de destino
4. Salve

## Transferência com Resumo Automático

Ao transferir uma conversa para equipe humana, a IA pode gerar automaticamente um resumo:

1. Edite a ação **"Transferir para Equipe"**
2. Marque: ✅ **"Gerar resumo do atendimento ao transferir"**
3. Salve

**O resumo inclui:**
- Motivo do contato
- Principais dúvidas do cliente
- Passos já realizados
- Dados importantes coletados

## Assinatura em Mensagens

Adicione uma assinatura automática às mensagens geradas pela IA.

### Como Configurar

A assinatura é configurada no **fluxo vinculado ao agente**, especificamente no **Nó de Enviar Texto**.

1. Acesse o fluxo vinculado ao Agente IA
2. Localize o nó de **Enviar Texto** que envia as respostas da IA
3. No campo de mensagem, adicione a assinatura desejada após a variável da resposta

**Exemplo:**
```text
{{ai_response}}

---
🤖 Mensagem enviada pela IA
```

::: tip 📖 Saiba Mais
Veja a documentação completa do nó em [Mensagem de Texto](/guide/flows/nodes/text).
:::

## Integração com Agendamentos

A IA pode gerenciar agendamentos de forma conversacional:

### Exemplo de Conversa

```text
👤 Cliente: Quero marcar uma consulta
🤖 IA: Claro! Para qual dia você prefere? Temos horários disponíveis de segunda a sexta.

👤 Cliente: Quinta às 14h
🤖 IA: Perfeito! Temos disponibilidade quinta-feira às 14h com Dr. João. 
       Confirmo o agendamento?

👤 Cliente: Sim, por favor
🤖 IA: ✅ Agendamento confirmado!
       📅 Data: Quinta-feira, 26/12/2025
       ⏰ Horário: 14:00
       👨‍⚕️ Profissional: Dr. João
       
       Enviarei um lembrete 24h antes. Até lá! 😊
```

### Respeitando Folgas

A IA automaticamente:
- ❌ **Não oferece** horários em períodos de folga
- ❌ **Não permite** criar agendamentos em dias bloqueados
- ✅ **Explica ao cliente** o motivo da indisponibilidade
- ✅ **Sugere automaticamente** datas alternativas

## Contextos Extras

Adicione informações complementares ao contexto do agente, como listas de produtos, FAQs, ou qualquer conteúdo que o agente possa precisar consultar.

### Tipos Disponíveis
- **Lista WhatsApp**: Formata o conteúdo para exibição em listas do WhatsApp

### Como Adicionar
1. Na aba **Contexto**, clique em **"+ Adicionar"** em Contextos Extras
2. Preencha título, descrição e conteúdo
3. Salve

## Boas Práticas

### ✅ Faça

- Seja específico no prompt sobre o comportamento esperado
- Forneça exemplos de respostas ideais
- Limite o escopo de atuação (o que a IA pode e não pode fazer)
- Teste exaustivamente antes de colocar em produção
- Monitore as conversas e ajuste o prompt
- Use a aba "Questões" para identificar gaps no contexto

### ❌ Evite

- Prompts vagos ou genéricos
- Permitir que a IA invente informações
- Dar autonomia excessiva sem supervisão
- Esquecer de configurar transferência para humano
- Ignorar feedback dos clientes sobre a IA

## Métricas e Relatórios

Acompanhe o desempenho dos seus Agentes IA:

- **Taxa de resolução**: % de conversas resolvidas sem humano
- **Tempo médio de resposta**: Velocidade da IA
- **Transferências**: Quantas vezes transferiu para humano
- **Satisfação**: Avaliação dos clientes
- **Uso de tokens**: Consumo de API

## Próximos Passos

- [Ferramentas da IA](/guide/ai-agents/tools/) - Configure ações do agente
- [Melhorador de Texto](/guide/chat/text-enhancer) - Comandos de IA para atendentes
- [Fluxos de Atendimento](/guide/flows/builder) - Integre IA nos fluxos
- [Agenda](/guide/schedule/) - Configure agendamentos via IA
- [Configurações](/guide/settings/) - Controles de IA
