# Nó: OpenAI

Integração direta com modelos GPT da OpenAI para geração de texto.

## Visão Geral

O nó **OpenAI** permite usar modelos de linguagem (LLMs) da OpenAI diretamente no fluxo. Ideal para:

- Respostas inteligentes
- Análise de texto
- Classificação de intenções
- Geração de conteúdo
- Tradução
- Resumos

## Pré-requisitos

1. Integração OpenAI configurada em **Configurações > Integrações**
2. Chave de API válida da OpenAI

## Configurações

### Prompt do Sistema

Define o comportamento e contexto do modelo:

```
Você é um assistente de atendimento ao cliente da empresa XYZ.
Seja cordial, objetivo e sempre ofereça soluções.
Responda em português brasileiro.
```

### Mensagem do Usuário

O que será enviado ao modelo (geralmente a última mensagem do cliente):

```
{{last_message}}
```

### Modelo

Selecione o modelo a ser usado:

| Modelo | Descrição | Uso Recomendado |
|--------|-----------|-----------------|
| **gpt-4o** | Mais inteligente e atualizado | Tarefas complexas |
| **gpt-4o-mini** | Equilíbrio custo/qualidade | Uso geral |
| **gpt-4-turbo** | Alta capacidade | Análises detalhadas |
| **gpt-3.5-turbo** | Mais econômico | Tarefas simples |

### Parâmetros Avançados

| Parâmetro | Descrição | Valor Padrão |
|-----------|-----------|--------------|
| **Temperatura** | Criatividade (0-2) | 0.7 |
| **Max Tokens** | Limite de resposta | 1000 |
| **Top P** | Diversidade | 1 |

### Salvar Resposta

Selecione uma variável para armazenar a resposta do modelo.

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Resposta gerada com sucesso |
| Erro | Inferior | Vermelho | Falha na geração |

## Exemplos de Uso

### Resposta Inteligente

```
Prompt do Sistema:
Você é um assistente amigável. Responda de forma 
concisa e útil. Máximo 2 parágrafos.

Mensagem: {{last_message}}
Variável: resposta_ia

[OpenAI] → [Texto: {{resposta_ia}}]
```

### Classificação de Intenção

```
Prompt do Sistema:
Classifique a intenção do cliente em uma das 
categorias: SUPORTE, VENDAS, FINANCEIRO, OUTRO.
Responda apenas com a categoria, sem explicação.

Mensagem: {{last_message}}
Variável: intencao

[OpenAI] → [Condição: {{intencao}}]
  - SUPORTE → Fluxo Suporte
  - VENDAS → Fluxo Vendas
  - FINANCEIRO → Fluxo Financeiro
  - OUTRO → Atendente
```

### Resumo de Conversa

```
Prompt do Sistema:
Faça um resumo conciso da conversa abaixo em 
no máximo 3 bullets points.

Mensagem: {{historico_conversa}}
Variável: resumo
```

### Análise de Sentimento

```
Prompt do Sistema:
Analise o sentimento da mensagem e responda:
POSITIVO, NEUTRO ou NEGATIVO

Mensagem: {{last_message}}
Variável: sentimento

[Condição: sentimento == "NEGATIVO"]
  → Priorizar atendimento
```

### Tradução

```
Prompt do Sistema:
Traduza o texto para inglês. 
Responda apenas com a tradução.

Mensagem: {{texto_original}}
Variável: texto_traduzido
```

## Boas Práticas

::: tip Prompts Claros
Seja específico no prompt do sistema. Quanto mais claro, melhores os resultados.
:::

::: tip Limite de Tokens
Configure max_tokens adequadamente para controlar custos e tempo de resposta.
:::

::: tip Temperatura
- 0.0-0.3: Respostas mais determinísticas
- 0.5-0.7: Equilíbrio (recomendado)
- 0.8-1.5: Mais criativo/variado
:::

::: tip Tratamento de Erros
Sempre configure a saída de erro para casos de falha na API.
:::

::: warning Custos
Monitore o uso da API. Modelos como GPT-4 são mais caros.
:::

## Diferença: OpenAI vs Agente IA

| Característica | Nó OpenAI | Nó Agente IA |
|----------------|-----------|--------------|
| Configuração | No próprio nó | Usa prompt pré-configurado |
| Contexto | Definido no nó | Gerenciado pelo agente |
| Histórico | Manual | Automático |
| Uso | Tarefas pontuais | Conversação contínua |

## Próximos Passos

- [Nó: Agente IA](/guide/flows/nodes/agenteia)
- [Nó: Condição](/guide/flows/nodes/condition)
- [Integração OpenAI](/guide/integrations/openai)

