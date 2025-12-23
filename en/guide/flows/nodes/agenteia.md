# Nó: Agente IA

Executa um Agente IA previamente configurado na plataforma.

## Visão Geral

O nó **Agente IA** permite usar os Agentes IA configurados na Interflow diretamente no fluxo. Diferente do nó OpenAI, o Agente IA:

- Usa prompts pré-configurados
- Mantém contexto da conversa
- Pode ter ferramentas e integrações
- É mais fácil de gerenciar

## Pré-requisitos

1. Ter pelo menos um Agente IA configurado em **Agentes IA**
2. Integração OpenAI configurada (se usar modelos OpenAI)

## Configurações

### Prompt/Agente

Selecione o Agente IA que será executado:

Os agentes disponíveis são os configurados em **Agentes IA** na plataforma.

### Sobrescrever Configurações

Opcionalmente, você pode sobrescrever as configurações do agente:

#### Integração

Selecione uma integração diferente da configurada no agente:

- **Padrão do Agente IA**: Usa a integração configurada no agente
- **Integração específica**: Selecione uma integração da lista

#### Modelo

Selecione um modelo diferente do configurado:

- **Padrão do Agente IA**: Usa o modelo configurado no agente
- **Modelo específico**: Selecione da lista de modelos disponíveis

### Salvar Resposta

Selecione uma variável para armazenar a resposta do agente.

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Resposta gerada com sucesso |
| Erro | Inferior | Vermelho | Falha na execução |

## Exemplos de Uso

### Atendente Virtual

```
[Texto] → "Olá! Sou a assistente virtual."
[Agente IA] → Agente: "Atendente Comercial"
              Variável: resposta
[Texto] → {{resposta}}
```

### Qualificação de Leads

```
[Agente IA] → Agente: "Qualificador de Leads"
              Variável: qualificacao
[Condição] → qualificacao contém "QUALIFICADO"
  ✅ → [Atualizar Cliente] Funil: Leads Qualificados
  ❌ → [Texto] "Obrigado pelo interesse!"
```

### Suporte Técnico

```
[Input] → Captura problema
[Agente IA] → Agente: "Suporte Nível 1"
              Variável: solucao
[Texto] → {{solucao}}
[Condição] → solucao contém "ESCALAR"
  ✅ → [Transferir para atendente]
  ❌ → [Texto] "Problema resolvido?"
```

### FAQ Inteligente

```
[Agente IA] → Agente: "FAQ Bot"
              Variável: resposta_faq
[Texto] → {{resposta_faq}}
[Texto] → "Isso respondeu sua dúvida?"
[Input] → sim/não
```

## Configurando Agentes IA

Para criar um novo Agente IA:

1. Acesse **Agentes IA** no menu
2. Clique em **Novo Agente**
3. Configure:
   - Nome e descrição
   - Prompt do sistema
   - Modelo padrão
   - Temperatura e parâmetros
   - Ferramentas (se aplicável)

## Diferença: Agente IA vs OpenAI

| Característica | Agente IA | OpenAI |
|----------------|-----------|--------|
| Configuração | Centralizada | Por nó |
| Reutilização | Alta | Baixa |
| Manutenção | Fácil | Trabalhosa |
| Contexto | Automático | Manual |
| Ferramentas | Suportado | Não |

## Boas Práticas

::: tip Agentes Especializados
Crie agentes específicos para cada função: vendas, suporte, qualificação, etc.
:::

::: tip Centralize Prompts
Use agentes para centralizar prompts. Alterar o agente atualiza todos os fluxos.
:::

::: tip Teste Antes
Teste o agente na interface de Agentes IA antes de usar no fluxo.
:::

::: tip Tratamento de Erros
Configure sempre a saída de erro para casos de falha.
:::

::: warning Contexto
O agente recebe o contexto da conversa. Certifique-se de que as mensagens anteriores são relevantes.
:::

## Próximos Passos

- [Nó: OpenAI](/guide/flows/nodes/openai)
- [Nó: Requisição HTTP](/guide/flows/nodes/request)

