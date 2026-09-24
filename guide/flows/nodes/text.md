# Nó: Enviar Texto

Envia mensagens de texto para o cliente com suporte a variáveis, formatação e recursos avançados.

## Visão Geral

O nó **Enviar Texto** é o nó mais utilizado no Construtor de Fluxos. Permite enviar mensagens de texto simples ou formatadas, com suporte a:

- Variáveis dinâmicas
- Divisão de parágrafos
- Extração de links
- Listas interativas (WhatsApp)
- Mensagens fixadas
- Assinaturas

## Configurações

### Texto da Mensagem

Campo principal onde você escreve a mensagem que será enviada ao cliente.

**Exemplo:**
```
Olá, {{customer_name}}!

Obrigado por entrar em contato com a Interflow.
Como posso ajudá-lo hoje?
```

### Opções Avançadas

#### Dividir Parágrafos

Quando ativado, cada parágrafo (separado por linha em branco) é enviado como uma mensagem separada.

**Útil para:**
- Simular digitação humana
- Evitar mensagens muito longas
- Melhorar a legibilidade

#### Extrair Links

Quando ativado, links na mensagem são extraídos e enviados separadamente, permitindo pré-visualização.

#### Lista de Opções

Cria um menu interativo (disponível apenas no WhatsApp Business API).

**Configurações:**
- **Título**: Título da lista
- **Descrição**: Descrição da lista
- **Texto do Botão**: Texto exibido no botão
- **Seções**: Grupos de opções

::: warning Atenção
Listas interativas funcionam apenas no WhatsApp Business API oficial.
:::

#### Fixar Mensagem

Quando ativado, a mensagem é fixada no chat (visível para atendentes).

#### Assinatura

Adiciona uma assinatura automática na mensagem.

**Configurações:**
- **Texto da Assinatura**: Texto que será adicionado
- **Posição**: Início (cabeçalho) ou fim (rodapé) da mensagem

## Uso de Variáveis

Personalize suas mensagens usando variáveis no formato <code v-pre>{{nome_da_variavel}}</code>:

| Variável | Descrição |
|----------|-----------|
| <code v-pre>{{customer_name}}</code> | Nome do cliente |
| <code v-pre>{{customer_email}}</code> | Email do cliente |
| <code v-pre>{{customer_phone}}</code> | Telefone do cliente |
| <code v-pre>{{channel_name}}</code> | Nome do canal |
| <code v-pre>{{current_date}}</code> | Data atual |
| <code v-pre>{{current_time}}</code> | Hora atual |
| <code v-pre>{{last_message}}</code> | Última mensagem do cliente |

Além das variáveis do sistema, você pode usar qualquer variável personalizada criada no fluxo.

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Conecta ao próximo nó |

## Exemplos de Uso

### Boas-vindas Personalizada

```
Olá, {{customer_name}}!

Seja bem-vindo(a) ao atendimento da {{company_name}}.

Sou a assistente virtual e estou aqui para ajudar!
```

### Menu de Opções

```
Como posso ajudá-lo hoje?

1⃣ Suporte Técnico
2⃣ Informações sobre Produtos
3⃣ Status do Pedido
4⃣ Falar com um Atendente
```

### Confirmação com Dados

```
Pedido confirmado!

Número do pedido: {{order_number}}
Data: {{current_date}}
Valor: R$ {{order_value}}

Obrigado pela preferência!
```

## Boas Práticas

::: tip Mensagens Curtas
Prefira mensagens curtas e objetivas. Mensagens muito longas podem ser ignoradas.
:::

::: tip Emojis
Use emojis com moderação para tornar as mensagens mais amigáveis.
:::

::: tip Variáveis
Sempre valide se a variável existe antes de usá-la para evitar mensagens com <code v-pre>{{undefined}}</code>.
:::

## Próximos Passos

- [Nó: Aguardar Resposta](/guide/flows/nodes/input)
- [Nó: Condição](/guide/flows/nodes/condition)
- [Variáveis do Fluxo](/guide/flows/variables)

