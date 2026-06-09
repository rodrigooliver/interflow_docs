# Nó: Chamar outro Fluxo

Encerre o fluxo atual e inicie outro fluxo automaticamente, mantendo o contexto da conversa.

## Visão Geral

O nó **Chamar outro Fluxo** permite modularizar seus fluxos de chatbot, dividindo fluxos grandes em partes menores e reutilizáveis. Ao chegar neste nó, a sessão do fluxo atual é encerrada e outro fluxo é iniciado automaticamente — sem que o cliente perceba a transição.

**Casos de uso:**

- Reutilizar um fluxo de saudação, triagem ou encerramento em múltiplos contextos
- Dividir um fluxo complexo em módulos independentes
- Passar dados coletados de um fluxo para outro

## Como adicionar ao fluxo

1. No construtor de fluxos, arraste o nó **Chamar outro Fluxo** para o canvas (categoria **Ações**)
2. Clique no nó para abrir o modal de configuração
3. Configure em 3 passos

## Configuração

### Passo 1 — Fluxo

Selecione o fluxo que deseja acionar. Use o campo de busca para filtrar por nome.

### Passo 2 — Nó inicial

Escolha em qual nó o fluxo de destino deve começar. Se não selecionar, o fluxo iniciará pelo nó padrão (`start`).

::: tip 💡 Flexibilidade
Você pode iniciar o fluxo de destino em qualquer nó, não necessariamente no início. Isso permite criar pontos de entrada diferentes para o mesmo fluxo conforme o contexto.
:::

### Passo 3 — Variáveis (opcional)

Mapeie as variáveis que deseja passar para o fluxo de destino:

| Coluna | Descrição |
|--------|-----------|
| **Esquerda** | Variável do fluxo de destino que vai receber o valor |
| **Direita** | Valor a ser enviado: texto fixo ou variável do fluxo atual |

**Exemplos de mapeamento:**

```
nome_cliente  ←  {{customer_name}}      (passa variável do fluxo atual)
origem        ←  whatsapp               (valor fixo)
descricao     ←  Pedido #{{pedido_id}}  (interpola múltiplas variáveis)
```

## Comportamento

Ao chegar neste nó durante uma conversa:

1. A sessão do fluxo atual é **encerrada automaticamente**
2. O fluxo de destino é **iniciado** com as variáveis mapeadas já disponíveis
3. A conversa continua sem interrupção para o cliente

::: warning ⚠️ Atenção
Este nó não tem saída — ele é sempre um nó terminal. Após ele, o fluxo de destino assume completamente.
:::

## Exemplo Prático

```
Fluxo Principal (Atendimento Geral)
├── Saudação → Triagem
├── Cliente quer suporte técnico?
│   └── Nó "Chamar outro Fluxo"
│       └── Fluxo: "Suporte Técnico"
│           └── Nó inicial: "Coletar dados do problema"
│           └── Variáveis: motivo = "{{motivo_contato}}"
└── Cliente quer vendas?
    └── Nó "Chamar outro Fluxo"
        └── Fluxo: "Qualificação de Vendas"
```

## Boas Práticas

- ✅ Crie fluxos modulares para saudação, triagem e encerramento
- ✅ Use mapeamento de variáveis para manter o contexto entre fluxos
- ✅ Escolha o nó de entrada correto para evitar repetir etapas
- ❌ Evite criar loops (fluxo A chama B, que chama A novamente)

## Próximos Passos

- [Construtor de Fluxos](/guide/flows/builder) - Visão geral do construtor
- [Tipos de Nós](/guide/flows/nodes/) - Todos os nós disponíveis
- [Variáveis](/guide/flows/nodes/variable) - Trabalhando com variáveis
