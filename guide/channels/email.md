# Email (IMAP/SMTP)

Conecte sua caixa de email para atender clientes por email na Interflow.

::: warning EM ATUALIZAÇÃO
Esta documentação está em fase de atualização contínua.
:::

## Visão Geral

Integre qualquer conta de email via IMAP/SMTP para receber e enviar emails diretamente pela plataforma Interflow.

## Requisitos

- [x] Conta de email com acesso IMAP/SMTP
- [x] Credenciais de acesso (usuário e senha ou app password)
- [x] Servidor liberado para conexões externas

## Funcionalidades

| Recurso | Suporte |
|---------|---------|
| Recebimento de emails | ✅ |
| Envio de emails | ✅ |
| Anexos | ✅ |
| HTML formatado | ✅ |
| Threading (conversas) | ✅ |
| Múltiplas contas | ✅ |

## Provedores Suportados

### Configurações Automáticas

| Provedor | IMAP | SMTP |
|----------|------|------|
| Gmail | imap.gmail.com:993 | smtp.gmail.com:587 |
| Outlook | outlook.office365.com:993 | smtp.office365.com:587 |
| Yahoo | imap.mail.yahoo.com:993 | smtp.mail.yahoo.com:587 |
| Zoho | imap.zoho.com:993 | smtp.zoho.com:587 |

### Configuração Manual

Para outros provedores, você precisará informar:

| Campo | Descrição |
|-------|-----------|
| Servidor IMAP | Endereço do servidor de recebimento |
| Porta IMAP | Geralmente 993 (SSL) ou 143 (TLS) |
| Servidor SMTP | Endereço do servidor de envio |
| Porta SMTP | Geralmente 587 (TLS) ou 465 (SSL) |
| Usuário | Seu email ou usuário |
| Senha | Senha ou app password |

## Configuração

### Gmail

#### Passo 1: Habilitar IMAP

1. Abra o Gmail
2. Vá em **Configurações** → **Ver todas as configurações**
3. Na aba **Encaminhamento e POP/IMAP**
4. Habilite **Ativar IMAP**

#### Passo 2: Gerar App Password

Se você usa 2FA (recomendado):

1. Acesse [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Selecione "Email" e "Outro"
3. Gere a senha do aplicativo
4. Copie a senha gerada

#### Passo 3: Conectar na Interflow

1. Vá em **Configurações** → **Canais**
2. Clique em **"Adicionar canal"** → **Email**
3. Selecione **Gmail**
4. Informe email e app password
5. Teste a conexão

### Outlook/Microsoft 365

#### Passo 1: Configurações

1. Use seu email e senha do Microsoft 365
2. Se usar 2FA, gere um app password

#### Passo 2: Conectar

1. Na Interflow, adicione canal de Email
2. Selecione **Outlook/Microsoft 365**
3. Informe credenciais
4. Autorize a conexão

### Servidor Próprio

1. Obtenha as configurações IMAP/SMTP com seu provedor
2. Na Interflow, selecione **Configuração manual**
3. Preencha todos os campos
4. Teste a conexão

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configuração de email</p>
</div>

## Sincronização

### Frequência

- Emails são sincronizados a cada **1-5 minutos**
- Novos emails aparecem automaticamente no chat

### Histórico

- Por padrão, sincroniza emails dos últimos **7 dias**
- Pode ser configurado para mais ou menos

## Assinatura de Email

Configure uma assinatura padrão:

1. Vá nas configurações do canal
2. Edite a **Assinatura**
3. Use HTML ou texto simples

**Exemplo:**
```html
<p>Atenciosamente,</p>
<p><strong>Equipe Empresa XYZ</strong></p>
<p>suporte@empresa.com | (11) 9999-9999</p>
```

## Threading

Emails do mesmo assunto são agrupados automaticamente em uma conversa, facilitando o acompanhamento.

## Limites

| Recurso | Limite |
|---------|--------|
| Tamanho de anexo | 25 MB |
| Anexos por email | 10 |
| Emails por hora | Depende do provedor |

## Solução de Problemas

### Erro de autenticação

1. Verifique usuário e senha
2. Use app password se tiver 2FA
3. Confirme que IMAP está habilitado

### Emails não chegam

1. Verifique se IMAP está configurado
2. Confirme que o canal está conectado
3. Verifique filtros de spam

### Não consigo enviar

1. Verifique configurações SMTP
2. Confirme que a porta está correta
3. Teste com outro destinatário

## Próximos Passos

- [Interface de Chat](/guia/chat/interface)
- [Templates de Email](/guia/chat/templates)
- [Configurar Outros Canais](/guia/canais/)

