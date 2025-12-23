# Agentes IA

Configure agentes de inteligência artificial para automatizar atendimentos na Interflow.

## Visão Geral

Os Agentes IA da Interflow são assistentes virtuais inteligentes que podem atender clientes de forma autônoma, responder perguntas, agendar compromissos, transferir para equipes e muito mais.

::: info 🔄 Fluxo Automático
Ao criar um Agente IA, o sistema **gera automaticamente um fluxo** vinculado a ele. O agente sempre opera dentro deste fluxo, permitindo combinar a inteligência da IA com outros nós de automação.
:::

### Modelos Disponíveis

Atualmente utilizamos os modelos da **OpenAI**. Abaixo os principais:

#### Com Raciocínio
| Modelo | Descrição |
|--------|-----------|
| GPT-5.2 | Modelo principal para coding e agentes |
| GPT-5 mini | Versão rápida e econômica |
| GPT-5 nano | Mais econômico da família |

#### Sem Raciocínio
| Modelo | Descrição |
|--------|-----------|
| GPT-4.1 | Modelo inteligente e versátil |
| GPT-4.1 mini | Baixo custo com bom desempenho |
| GPT-4.1 nano | Mais econômico, ideal para tarefas leves |

::: tip 💡 Dica
Para a maioria dos casos de atendimento, o **GPT-5 nano** ou **GPT-5 mini** oferecem excelente custo-benefício. Veja mais detalhes em [Integração OpenAI](/guide/integrations/openai).
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

### Passo 1: Informações Básicas

1. Clique em **"Novo Agente"**
2. Preencha:
   - **Nome**: Identificação do agente (ex: "Assistente de Vendas")
   - **Descrição**: Explicação do propósito
   - **Modelo**: Selecione o modelo de IA (GPT-4, GPT-3.5, Claude, etc.)

### Passo 2: Configurar Prompt

O prompt define a "personalidade" e comportamento do agente:

```
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

### Passo 3: Configurar Ferramentas

As ferramentas são ações que a IA pode executar. Veja a seção [Ferramentas da IA](#ferramentas-da-ia) para detalhes.

### Passo 4: Salvar e Testar

1. Clique em **"Salvar"**
2. Acesse a aba **"Testes"** para validar o comportamento
3. Converse com o agente e veja como ele responde
4. Ajuste o prompt conforme necessário

## Aba de Testes

A aba de testes permite conversar diretamente com o Agente IA antes de colocá-lo em produção.

### Como Usar

1. Após salvar o agente, clique na aba **"Testes"**
2. Digite mensagens como se fosse um cliente
3. Observe as respostas do agente
4. Verifique se o comportamento está adequado

### O que Testar

- ✅ Tom de voz e personalidade
- ✅ Respostas a perguntas frequentes
- ✅ Uso correto das ferramentas
- ✅ Limites do que a IA pode/não pode fazer
- ✅ Cenários de transferência para humano

## Ferramentas da IA

As ferramentas permitem que a IA execute ações além de responder mensagens.

### Ferramentas Disponíveis

| Ferramenta | Descrição |
|------------|-----------|
| **Transferir para equipe** | Encaminha o chat para uma equipe humana |
| **Listar horários** | Mostra horários disponíveis na agenda |
| **Criar agendamento** | Agenda um compromisso |
| **Reagendar** | Altera data/hora de agendamento |
| **Cancelar agendamento** | Cancela um agendamento existente |
| **Atualizar cliente** | Modifica campos do cadastro |
| **Alterar data de retorno** | Reprograma follow-up automático |
| **Encerrar atendimento** | Finaliza a conversa |

### Configurando Ferramentas

1. No agente, acesse a aba **"Ferramentas"**
2. Clique no **+** para adicionar uma ferramenta
3. Configure os parâmetros específicos
4. Salve

### Transferência com Resumo Automático

Ao transferir uma conversa para equipe humana, a IA pode gerar automaticamente um resumo:

1. Edite a ação **"Transferir para equipe"**
2. Marque: ✅ **"Gerar resumo da atendimento ao transferir"**
3. Salve

**O resumo inclui:**
- Motivo do contato
- Principais dúvidas do cliente
- Passos já realizados
- Dados importantes coletados

## Follow-up Inteligente

A IA pode ajustar automaticamente o follow-up com base no contexto da conversa.

### Como Funciona

Quando o cliente menciona uma data futura ou indica que não é o momento:

- **"Vamos conversar na quinta"** → IA reprograma follow-up para quinta-feira
- **"Volto no dia 25"** → IA agenda retorno para dia 25
- **"Já fechei negócio"** → IA pausa o follow-up

### Configurando

1. Acesse **Prompts** no menu lateral
2. Selecione o prompt vinculado ao fluxo
3. Clique em **Editar → Ferramentas**
4. Adicione a ação **"Alterar Data de Retorno"**
5. Configure o fluxo e nó de destino
6. Salve

### Benefícios

- ✅ Atendimento mais inteligente e humanizado
- ✅ Melhora a experiência do cliente
- ✅ Reduz contatos desnecessários
- ✅ Libera agenda dos atendentes

## Assinatura em Mensagens

Adicione uma assinatura automática às mensagens geradas pela IA.

### Como Configurar

A assinatura é configurada no **fluxo vinculado ao agente**, especificamente no **Nó de Enviar Texto**.

1. Acesse o fluxo vinculado ao Agente IA
2. Localize o nó de **Enviar Texto** que envia as respostas da IA
3. No campo de mensagem, adicione a assinatura desejada após a variável da resposta

**Exemplo:**
```
{{ai_response}}

---
🤖 Mensagem enviada pela IA
```

::: tip 📖 Saiba Mais
Veja a documentação completa do nó em [Mensagem de Texto](/guide/flows/nodes/text).
:::

## Limites e Controles

### Desativar Resumo Automático

Se quiser economizar tokens de IA:

1. Acesse **Configurações** → **Geral**
2. Localize a seção **"IA e Automação"**
3. Ative as opções desejadas:
   - ✅ **Desativar Resumo por IA em Resolução**
   - ✅ **Desativar Resumo por IA em Transferência**
4. Salve

::: tip 💡 Benefício
Economize tokens de API mantendo o campo de resumo disponível para preenchimento manual.
:::

## Integração com Agendamentos

A IA pode gerenciar agendamentos de forma conversacional:

### Exemplo de Conversa

```
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

## Boas Práticas

### ✅ Faça

- Seja específico no prompt sobre o comportamento esperado
- Forneça exemplos de respostas ideais
- Limite o escopo de atuação (o que a IA pode e não pode fazer)
- Teste exaustivamente antes de colocar em produção
- Monitore as conversas e ajuste o prompt

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

## Próximos Passos

- [Melhorador de Texto](/guide/chat/text-enhancer) - Comandos de IA para atendentes
- [Fluxos de Atendimento](/guide/flows/builder) - Integre IA nos fluxos
- [Agenda](/guide/schedule/) - Configure agendamentos via IA
- [Configurações](/guide/settings/) - Controles de IA

