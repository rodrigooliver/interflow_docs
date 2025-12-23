# Agentes IA

Configure agentes de inteligência artificial para automatizar atendimentos na Interflow.

## Visão Geral

Os Agentes IA da Interflow são assistentes virtuais inteligentes que podem atender clientes de forma autônoma, responder perguntas, agendar compromissos, transferir para equipes e muito mais.

::: info 🔄 Fluxo Automático
Ao criar um Agente IA, o sistema **gera automaticamente um fluxo** vinculado a ele. O agente sempre opera dentro deste fluxo, permitindo combinar a inteligência da IA com outros nós de automação.
:::

## Modelos Disponíveis

Atualmente utilizamos os modelos da **OpenAI**. Os modelos são divididos em duas categorias:

### Com Raciocínio

Modelos que possuem capacidade de raciocínio avançado, ideais para tarefas complexas.

| Modelo | Descrição | Custo |
|--------|-----------|-------|
| GPT-5.2 | Modelo mais recente e inteligente | 💲💲💲 |
| GPT-5.1 | Modelo avançado com raciocínio | 💲💲💲 |
| GPT-5 | Modelo com raciocínio | 💲💲💲 |
| GPT-5 Mini | Versão econômica com raciocínio | 💲 |
| GPT-5 Nano | Super econômico com raciocínio | 💲 |
| GPT-5 Chat | Especializado em conversação | 💲💲💲 |

### Sem Raciocínio

Modelos mais simples e rápidos, ideais para tarefas diretas.

| Modelo | Descrição | Custo |
|--------|-----------|-------|
| GPT-4.1 | Modelo inteligente e versátil | 💲💲💲 |
| GPT-4.1 Mini | Baixo custo com bom desempenho | 💲 |
| GPT-4.1 Nano | Mais econômico, ideal para tarefas leves | 💲 |

::: tip 💡 Dica
Para a maioria dos casos de atendimento, o **GPT-5 Nano** ou **GPT-5 Mini** oferecem excelente custo-benefício. Veja mais detalhes em [Integração OpenAI](/guide/integrations/openai).
:::

::: info 🚀 Em Breve
Novos modelos serão adicionados em breve, incluindo **Claude** (Anthropic), **Gemini** (Google) e outros.
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

O editor de Agentes IA possui **5 abas principais**:

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

Configure as ações que o agente pode executar. Existem dois tipos:

#### Ações Prontas (Sistema)
Ações pré-configuradas da Interflow:

| Ação | Descrição |
|------|-----------|
| **Alterar Nome do Cliente** | Atualiza o nome do cliente no cadastro |
| **Atualizar Dados do Cliente** | Modifica campos personalizados do cliente |
| **Transferir para Equipe** | Encaminha o chat para uma equipe humana |
| **Agendar** | Cria um novo agendamento na agenda |
| **Confirmar Agendamento** | Confirma um agendamento existente |
| **Alterar Funil** | Move o cliente entre etapas do funil |
| **Quando Não Souber Responder** | Define comportamento para perguntas desconhecidas |
| **Alterar Data de Retorno** | Reprograma follow-up automático |

#### Ações Personalizadas
Crie ferramentas customizadas para integrações específicas. Cada ferramenta pode ter:
- **Nome e Descrição**: Identificação da ferramenta
- **Parâmetros**: Variáveis que a IA deve coletar
- **Ações**: O que fazer quando a ferramenta for acionada

::: tip 📖 Saiba Mais
Veja a documentação completa em [Ferramentas da IA](/guide/ai-agents/tools).
:::

### 5. Avançado

Configurações detalhadas do agente:

#### Informações Básicas
- **Título**: Nome identificador do agente
- **Prompt Padrão**: Disponibilizar para todas as organizações (apenas superadmins)

#### Configurações de IA
- **Integração**: Escolha entre Interflow (tokens do plano) ou OpenAI customizada
- **Modelo**: Selecione o modelo de IA a ser utilizado
- **Temperatura** (modelos sem raciocínio): Controla a criatividade das respostas (0.0 a 2.0)
- **Nível de Raciocínio** (modelos com raciocínio): Baixo, Médio ou Alto
- **Máximo de Tokens** (modelos sem raciocínio): Limite de tokens na resposta
- **Verbosidade** (modelos GPT-5): Controla o tamanho das respostas
- **Fuso Horário**: Define o timezone para datas e horários

#### Configurações de Fluxo
- **Visualizar Fluxo**: Acesse o fluxo vinculado ao agente
- **Resetar Fluxo**: Recria o fluxo com a configuração padrão
- **Gatilhos**: Configure quando o agente deve ser acionado

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

- [Ferramentas da IA](/guide/ai-agents/tools) - Configure ações do agente
- [Melhorador de Texto](/guide/chat/text-enhancer) - Comandos de IA para atendentes
- [Fluxos de Atendimento](/guide/flows/builder) - Integre IA nos fluxos
- [Agenda](/guide/schedule/) - Configure agendamentos via IA
- [Configurações](/guide/settings/) - Controles de IA
