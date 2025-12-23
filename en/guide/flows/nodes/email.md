# Nó: Enviar Email

Envia emails via SMTP diretamente do fluxo.

## Visão Geral

O nó **Enviar Email** permite enviar emails programáticos através de configuração SMTP. Útil para notificações, confirmações e integrações com sistemas externos.

## Configurações

### Configurações SMTP

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Host SMTP** | Servidor SMTP | `smtp.gmail.com` |
| **Porta** | Porta do servidor | `587` (TLS) ou `465` (SSL) |
| **Segurança** | Tipo de criptografia | TLS ou SSL |
| **Usuário** | Email de autenticação | `seu@email.com` |
| **Senha** | Senha ou App Password | `••••••••` |

### Configurações do Email

| Campo | Descrição | Suporta Variáveis |
|-------|-----------|-------------------|
| **De (Email)** | Email do remetente | Não |
| **De (Nome)** | Nome do remetente | Não |
| **Para** | Email do destinatário | ✅ Sim |
| **Assunto** | Assunto do email | ✅ Sim |
| **Tipo de Corpo** | Texto simples ou HTML | - |
| **Corpo** | Conteúdo do email | ✅ Sim |

## Uso de Variáveis

Personalize seus emails com variáveis:

**Destinatário:**
```
{{customer_email}}
```

**Assunto:**
```
Confirmação do Pedido #{{order_number}}
```

**Corpo (HTML):**
```html
<h1>Olá, {{customer_name}}!</h1>
<p>Seu pedido <strong>{{order_number}}</strong> foi confirmado.</p>
<p>Valor total: R$ {{order_value}}</p>
```

## Conexões

| Handle | Posição | Cor | Descrição |
|--------|---------|-----|-----------|
| Entrada | Esquerda | Cinza | Recebe conexão do nó anterior |
| Sucesso | Direita | Verde | Email enviado com sucesso |
| Erro | Inferior | Vermelho | Falha no envio |

## Testar Email

Use o botão **"Testar"** no modal de configuração para enviar um email de teste antes de publicar o fluxo.

## Exemplos de Uso

### Confirmação de Pedido

```html
<h2>Pedido Confirmado! ✅</h2>

<p>Olá, {{customer_name}}!</p>

<p>Seu pedido <strong>#{{order_number}}</strong> foi confirmado 
e está sendo processado.</p>

<table>
  <tr>
    <td>Produto:</td>
    <td>{{product_name}}</td>
  </tr>
  <tr>
    <td>Valor:</td>
    <td>R$ {{order_value}}</td>
  </tr>
</table>

<p>Obrigado pela preferência!</p>
```

### Notificação Interna

Envie notificações para sua equipe quando eventos importantes acontecerem:

```
Assunto: Novo lead capturado - {{customer_name}}

Corpo:
Um novo lead foi capturado via chatbot:

Nome: {{customer_name}}
Email: {{customer_email}}
Telefone: {{customer_phone}}
Interesse: {{interest}}
```

## Configuração Gmail

Para usar o Gmail como servidor SMTP:

1. Ative a verificação em duas etapas na sua conta Google
2. Gere uma "Senha de App" em [myaccount.google.com](https://myaccount.google.com/apppasswords)
3. Use as configurações:
   - Host: `smtp.gmail.com`
   - Porta: `587`
   - Segurança: TLS
   - Usuário: seu email completo
   - Senha: a senha de app gerada

## Boas Práticas

::: tip Segurança
Use senhas de app ou tokens em vez de senhas pessoais.
:::

::: tip HTML
Para emails com formatação, use HTML responsivo para melhor visualização em dispositivos móveis.
:::

::: tip Testes
Sempre teste o envio antes de publicar o fluxo em produção.
:::

::: warning Limites
Respeite os limites de envio do seu provedor SMTP para evitar bloqueios.
:::

## Próximos Passos

- [Nó: Requisição HTTP](/guide/flows/nodes/request)
- [Nó: Condição](/guide/flows/nodes/condition)

