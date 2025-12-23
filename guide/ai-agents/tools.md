# Ferramentas da IA

Configure as ações que seu Agente IA pode executar durante as conversas.

## Visão Geral

As ferramentas permitem que a IA execute ações além de simplesmente responder mensagens. Com elas, o agente pode atualizar cadastros, transferir atendimentos, criar agendamentos e muito mais.

## Tipos de Ferramentas

Existem dois tipos de ferramentas disponíveis:

### 1. Ações Prontas (Sistema)
Ações pré-configuradas da Interflow, prontas para uso.

### 2. Ações Personalizadas
Ferramentas customizadas que você cria para integrações específicas.

## Ações Prontas

As ações prontas são ferramentas do sistema que já vêm configuradas. Basta adicionar e personalizar conforme sua necessidade.

### Alterar Nome do Cliente

Permite que a IA atualize o nome do cliente no cadastro durante a conversa.

**Quando usar:**
- Cliente informa nome diferente do cadastrado
- Primeira interação onde o nome é coletado
- Correção de nomes digitados errado

**Exemplo de uso:**
```text
👤 Cliente: Meu nome é João Silva, não João Santos
🤖 IA: Pronto, João! Já atualizei seu cadastro. Como posso ajudá-lo?
```

::: info ⚠️ Única
Esta ação pode ser adicionada apenas uma vez por agente.
:::

---

### Atualizar Dados do Cliente

Atualiza campos personalizados do cadastro do cliente.

**Configuração:**
1. Selecione os campos que a IA pode atualizar
2. Defina se são obrigatórios ou opcionais
3. Salve

**Campos disponíveis:**
- Campos personalizados criados em Configurações
- Campos padrão do sistema

**Exemplo de uso:**
```text
👤 Cliente: Meu email é joao@email.com
🤖 IA: Perfeito! Já salvei seu email. Posso enviar confirmações por lá agora.
```

---

### Transferir para Equipe

Encaminha o atendimento para uma equipe humana.

**Opções de configuração:**

| Opção | Descrição |
|-------|-----------|
| **Equipes permitidas** | Selecione quais equipes a IA pode transferir |
| **Pausar agente** | Pausa a IA após a transferência |
| **Pular fluxo relacionado** | Não executa fluxos vinculados à equipe |
| **Gerar resumo** | Cria resumo automático da conversa |

**Resumo Automático:**

Quando ativado, o resumo inclui:
- Motivo do contato
- Principais dúvidas do cliente
- Passos já realizados pela IA
- Dados coletados durante a conversa

**Exemplo de uso:**
```text
👤 Cliente: Preciso falar com um humano sobre um problema técnico
🤖 IA: Entendi! Vou transferir você para nossa equipe de suporte técnico. 
       Um momento, por favor...

[Sistema: Chat transferido para "Suporte Técnico" com resumo]
```

---

### Agendar

Cria novos agendamentos diretamente pela conversa.

**Configuração:**

| Campo | Descrição |
|-------|-----------|
| **Agenda** | Selecione qual agenda utilizar |
| **Serviços** | Todos ou específicos |
| **Profissionais** | Todos ou específicos |
| **Operações** | Tipos de operação permitidos |

**Fluxo de agendamento:**
1. Cliente solicita agendamento
2. IA verifica horários disponíveis
3. Cliente escolhe data/horário
4. IA confirma e registra o agendamento

**Exemplo de uso:**
```text
👤 Cliente: Quero agendar uma consulta
🤖 IA: Claro! Temos horários disponíveis de segunda a sexta.
       Qual dia e horário você prefere?

👤 Cliente: Quinta às 14h
🤖 IA: ✅ Agendamento confirmado!
       📅 Quinta-feira, 26/12/2025 às 14:00
       Enviarei um lembrete 24h antes!
```

---

### Confirmar Agendamento

Confirma agendamentos existentes do cliente.

**Configuração:**
- **Agenda**: Selecione qual agenda consultar

**Comportamento:**
- A IA identifica agendamentos pendentes do cliente
- Apresenta os detalhes para confirmação
- Marca como confirmado após aceite

**Exemplo de uso:**
```text
🤖 IA: Olá! Vi que você tem um agendamento para amanhã às 10h.
       Posso confirmar sua presença?

👤 Cliente: Sim, confirmo
🤖 IA: Perfeito! Seu agendamento está confirmado. Até amanhã! ✅
```

---

### Alterar Funil

Move o cliente entre etapas do funil de vendas/atendimento.

**Configuração:**

| Campo | Descrição |
|-------|-----------|
| **Etapas de origem** | De quais etapas o cliente pode sair |
| **Etapas de destino** | Para quais etapas pode ser movido |

**Quando usar:**
- Cliente demonstra interesse (mover para "Qualificado")
- Cliente fecha negócio (mover para "Vendido")
- Cliente pede para não ser contatado (mover para "Não interessado")

**Exemplo de uso:**
```text
👤 Cliente: Quero fechar o plano Pro
🤖 IA: Excelente escolha! Vou registrar sua decisão e um consultor 
       entrará em contato para finalizar.

[Sistema: Cliente movido para etapa "Fechamento"]
```

---

### Quando Não Souber Responder

Define o comportamento da IA quando não encontra a resposta no contexto.

**Opções:**

| Opção | Descrição |
|-------|-----------|
| **Pausar agente** | Pausa a IA e aguarda intervenção humana |
| **Salvar pergunta** | Registra a pergunta para análise posterior |

**Por que usar:**
- Identificar gaps no treinamento do agente
- Evitar respostas inventadas
- Coletar perguntas frequentes para melhorar o contexto

**Visualizando perguntas salvas:**
1. Na aba Contexto, clique em **"Questões"**
2. Veja todas as perguntas não respondidas
3. Use para melhorar o contexto do agente

::: info ⚠️ Única
Esta ação pode ser adicionada apenas uma vez por agente.
:::

---

### Alterar Data de Retorno

Reprograma o follow-up automático do cliente.

**Configuração:**
1. Selecione o **Fluxo** de retorno
2. Selecione o **Nó** inicial do retorno
3. Salve

**Quando usar:**
- Cliente menciona data futura ("Me liga semana que vem")
- Cliente não pode conversar agora ("Estou ocupado")
- Reagendamento de follow-up

**Exemplo de uso:**
```text
👤 Cliente: Agora não posso, me liga quinta-feira
🤖 IA: Sem problemas! Entro em contato na quinta-feira. 
       Tenha um ótimo dia! 👋

[Sistema: Follow-up reagendado para quinta-feira]
```

---

## Ações Personalizadas

Crie ferramentas customizadas para necessidades específicas do seu negócio.

### Estrutura de uma Ferramenta

Cada ferramenta personalizada possui:

| Campo | Descrição |
|-------|-----------|
| **Descrição** | O que a ferramenta faz (usado pela IA para decidir quando usar) |
| **Nome** | Identificador técnico (gerado automaticamente) |
| **Parâmetros** | Dados que a IA deve coletar |
| **Ações** | O que executar quando a ferramenta for acionada |

### Criando uma Ferramenta

1. Na aba **Ferramentas**, clique em **"Ação Personalizada"**
2. Preencha a descrição (ex: "Consulta o status de um pedido")
3. O nome será gerado automaticamente (ex: `consulta_o_status_de_um_pedido`)
4. Adicione os parâmetros necessários

### Configurando Parâmetros

Cada parâmetro possui:

| Campo | Descrição |
|-------|-----------|
| **Nome** | Identificador do parâmetro |
| **Tipo** | string, number, boolean, etc. |
| **Descrição** | Explica o que o parâmetro representa |
| **Obrigatório** | Se a IA deve sempre coletar esse dado |
| **Valores permitidos** | Lista de opções válidas (opcional) |

**Exemplo de parâmetros:**
```json
{
  "numero_pedido": {
    "type": "string",
    "description": "Número do pedido do cliente",
    "required": true
  },
  "tipo_consulta": {
    "type": "string",
    "enum": ["status", "rastreamento", "nota_fiscal"],
    "description": "Tipo de informação desejada"
  }
}
```

### Configurando Ações

Na aba **Ações** da ferramenta, defina o que acontece quando ela é executada:

- **Ir para nó do fluxo**: Direciona para um nó específico
- **Requisição HTTP**: Chama uma API externa
- **Atualizar variável**: Modifica uma variável do fluxo

### Visualizando JSON

Clique no botão **JSON** para ver a ferramenta em formato OpenAI:

```json
{
  "name": "consulta_status_pedido",
  "description": "Consulta o status de um pedido do cliente",
  "strict": true,
  "parameters": {
    "type": "object",
    "properties": {
      "numero_pedido": {
        "type": "string",
        "description": "Número do pedido"
      }
    },
    "required": ["numero_pedido"],
    "additionalProperties": false
  }
}
```

## Boas Práticas

### ✅ Faça

- Use descrições claras e específicas
- Defina parâmetros com tipos corretos
- Teste cada ferramenta antes de publicar
- Limite os valores permitidos quando possível
- Configure ações de fallback

### ❌ Evite

- Descrições vagas que confundem a IA
- Muitas ferramentas similares
- Parâmetros desnecessários
- Ferramentas sem ações definidas

## Exemplos Práticos

### Consulta de Saldo

```json
{
  "name": "consulta_saldo",
  "description": "Consulta o saldo disponível na conta do cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "tipo_saldo": {
        "type": "string",
        "enum": ["disponivel", "bloqueado", "total"],
        "description": "Tipo de saldo a consultar"
      }
    },
    "required": []
  }
}
```

### Segunda Via de Boleto

```json
{
  "name": "segunda_via_boleto",
  "description": "Gera segunda via de boleto para pagamento",
  "parameters": {
    "type": "object",
    "properties": {
      "mes_referencia": {
        "type": "string",
        "description": "Mês de referência do boleto (ex: 01/2025)"
      },
      "enviar_por": {
        "type": "string",
        "enum": ["whatsapp", "email"],
        "description": "Como enviar o boleto"
      }
    },
    "required": ["mes_referencia"]
  }
}
```

### Atualização Cadastral

```json
{
  "name": "atualiza_endereco",
  "description": "Atualiza o endereço de entrega do cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "cep": {
        "type": "string",
        "description": "CEP do novo endereço"
      },
      "numero": {
        "type": "string",
        "description": "Número da residência"
      },
      "complemento": {
        "type": "string",
        "description": "Complemento (apto, bloco, etc.)"
      }
    },
    "required": ["cep", "numero"]
  }
}
```

## Próximos Passos

- [Agentes IA](/guide/ai-agents/) - Voltar para visão geral
- [Fluxos](/guide/flows/builder) - Configure o fluxo do agente
- [Requisição HTTP](/guide/flows/nodes/request) - Integre com APIs externas
- [Variáveis](/guide/flows/nodes/variable) - Manipule dados coletados

