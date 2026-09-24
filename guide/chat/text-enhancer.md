# Melhorador de Texto

Aprimore suas mensagens com inteligência artificial diretamente no campo de texto.

## Visão Geral

O Melhorador de Texto é uma ferramenta de IA integrada ao chat que ajuda os atendentes a escrever mensagens melhores, mais claras e profissionais. Acesse rapidamente com `Ctrl+J` para transformar suas mensagens.

## Como Acessar

### Atalho de Teclado

1. No campo de texto do chat, pressione `Ctrl+J`
2. O painel do melhorador será aberto
3. Selecione a ação desejada
4. A IA processa e insere o resultado

### Via Menu

1. No campo de texto, clique no ícone de IA ()
2. Selecione a opção de melhoria
3. Aguarde o processamento

## Ações Disponíveis

### Melhorias de Texto

| Ação | Descrição | Exemplo |
|------|-----------|---------|
| **Melhorar** | Melhora clareza e gramática | "vc pode me ajudar?" → "Você poderia me ajudar?" |
| **Formalizar** | Torna o texto mais formal | "oi, blz?" → "Olá, como vai?" |
| **Simplificar** | Simplifica texto complexo | Termos técnicos → Linguagem simples |
| **Expandir** | Expande a mensagem com mais detalhes | Adiciona contexto e explicações |
| **Resumir** | Resume textos longos | Cria versão concisa |

### Transformações

| Ação | Descrição |
|------|-----------|
| **Corrigir ortografia** | Corrige erros de digitação e gramática |
| **Traduzir** | Traduz para outro idioma |
| **Tom amigável** | Ajusta para tom mais acolhedor |
| **Tom profissional** | Ajusta para tom mais corporativo |

### Ações Contextuais

| Ação | Descrição |
|------|-----------|
| **Responder cliente** | Gera resposta baseada na última mensagem |
| **Explicar produto** | Gera explicação sobre produto mencionado |
| **Agradecer** | Cria mensagem de agradecimento |
| **Despedir** | Cria mensagem de encerramento |

## Comandos Personalizados

Crie seus próprios comandos de IA para ações frequentes.

### Criando um Comando

1. Acesse **Configurações** → **Melhorador de Texto**
2. Clique em **"Novo Comando"**
3. Configure:
   - **Nome**: Identificação do comando (ex: "Resposta padrão")
   - **Gatilho**: Atalho que ativa (ex: `/preco`, `/suporte`)
   - **Prompt**: Instrução para a IA
   - **Posição**: Onde inserir resultado (antes/depois do cursor)
4. Clique em **"Salvar"**

### Exemplos de Comandos

```
Nome: Resposta de preço
Gatilho: /preco
Prompt: Gere uma resposta educada explicando que enviarei
        a tabela de preços em seguida.
```

```
Nome: Encerramento positivo
Gatilho: /tchau
Prompt: Crie uma mensagem de despedida amigável
        agradecendo o contato.
```

```
Nome: Pedir dados
Gatilho: /dados
Prompt: Solicite educadamente nome completo, email
        e telefone do cliente.
```

### Usando Comandos

1. No campo de texto, digite `/` seguido do gatilho
2. Ou pressione `Ctrl+J` e selecione da lista
3. Comando é executado e texto inserido

### Variáveis nos Comandos

Use variáveis para personalizar:

| Variável | Descrição |
|----------|-----------|
| `{{customer_name}}` | Nome do cliente |
| `{{last_message}}` | Última mensagem do cliente |
| `{{channel}}` | Canal atual |
| `{{agent_name}}` | Seu nome |

**Exemplo:**
```
Prompt: Agradeça {{customer_name}} pelo contato e
        informe que estou à disposição.
```

## Configurações

### Ativar/Desativar

1. Acesse **Configurações** → **Melhorador de Texto**
2. Toggle para ativar ou desativar
3. Quando desativado, `Ctrl+J` não funciona

### Modelo de IA

Escolha qual modelo usar para as melhorias:

| Modelo | Velocidade | Qualidade |
|--------|------------|-----------|
| GPT-3.5 | Rápido | Boa |
| GPT-4 | Mais lento | Excelente |

### Idioma Padrão

Configure o idioma padrão para as melhorias e traduções.

## Dicas de Uso

### Boas Práticas

- Use **Formalizar** para mensagens iniciais
- Use **Simplificar** para explicações técnicas
- Crie comandos para respostas frequentes
- Revise sempre antes de enviar

### Atalhos Rápidos

| Atalho | Ação |
|--------|------|
| `Ctrl+J` | Abrir melhorador |
| `/` | Listar comandos |
| `Esc` | Fechar painel |
| `Enter` | Executar selecionado |

## Exemplos Práticos

### Antes e Depois

**Mensagem original:**
```
oi vc pode me mandar o boleto pq n recebi ainda
```

**Após "Formalizar":**
```
Olá! Você poderia me enviar o boleto, por favor?
Ainda não o recebi.
```

---

**Mensagem original:**
```
O sistema utiliza protocolo HTTPS com criptografia AES-256
e autenticação via OAuth 2.0 com tokens JWT.
```

**Após "Simplificar":**
```
O sistema usa uma conexão segura e protegida.
Seus dados ficam criptografados e seguros.
```

## Limites

- **Tokens**: Cada melhoria consome tokens de IA
- **Tamanho**: Máximo de 2000 caracteres por vez
- **Frequência**: Aguarde processamento antes de nova solicitação

## Próximos Passos

- [Interface de Chat](/guide/chat/interface) - Voltar para interface
- [Agentes IA](/guide/ai-agents/) - IA autônoma para atendimento
- [Configurações](/guide/settings/) - Mais configurações

