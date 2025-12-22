# WhatsApp Business API

Integre o WhatsApp Business API oficial da Meta para atendimento profissional.

## Visão Geral

O WhatsApp Business API é a solução oficial da Meta para empresas que precisam de atendimento em escala. É recomendado para operações com alto volume de mensagens.

## Requisitos

Antes de começar, você precisa:

- [x] **Conta Meta Business verificada**
- [x] **Número de telefone dedicado** (não pode estar em uso no WhatsApp comum)
- [x] **Documento da empresa** (CNPJ ou equivalente)

## Vantagens

| Recurso | Descrição |
|---------|-----------|
| **Oficial** | Integração aprovada pela Meta |
| **Estável** | Alta disponibilidade |
| **Templates** | Mensagens ativas para clientes que não iniciaram conversa |
| **Pagamentos** | Integração com pagamentos via WhatsApp |
| **Multiagente** | Múltiplos atendentes simultâneos |

## Configuração

### Passo 1: Criar Conta no Meta Business Suite

1. Acesse [business.facebook.com](https://business.facebook.com)
2. Crie uma conta Meta Business
3. Complete a verificação do negócio

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Meta Business Suite</p>
</div>

### Passo 2: Configurar WhatsApp Business

1. No Meta Business Suite, vá em **Contas** → **Contas do WhatsApp**
2. Adicione uma nova conta do WhatsApp Business
3. Registre seu número de telefone
4. Complete a verificação

### Passo 3: Conectar na Interflow

1. No menu lateral esquerdo, clique em **Canais**
2. Clique em **"Adicionar canal"**
3. Selecione o tipo **WhatsApp Oficial**
4. Siga o fluxo de autenticação
5. Selecione o número que deseja conectar

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Vídeo: Configurando WhatsApp Business API (em breve)</p>
</div>

## Templates de Mensagem

Para iniciar conversas com clientes que não te mandaram mensagem nas últimas 24h, você precisa usar templates aprovados.

### Acessando Templates

Os templates ficam disponíveis dentro da edição do canal. Para acessá-los:

1. No menu lateral esquerdo, clique em **Canais**
2. Clique no canal WhatsApp que deseja editar
3. No header da página, clique em **Templates**

### Criando um Template

1. Na aba **Templates** do canal
2. Clique em **"Novo template"**
3. Preencha os campos:
   - Nome do template
   - Categoria (Marketing, Utilitário, Autenticação)
   - Idioma
   - Conteúdo da mensagem
4. Submeta para aprovação

### Exemplo de Template

```
Olá {{1}},

Seu pedido #{{2}} foi confirmado e será enviado em breve.

Acompanhe em: {{3}}

Obrigado por comprar conosco!
```

**Variáveis:**
- `{{1}}` = Nome do cliente
- `{{2}}` = Número do pedido
- `{{3}}` = Link de rastreamento

### Status de Aprovação

| Status | Significado |
|--------|-------------|
| 🟡 **Pendente** | Em análise pela Meta |
| 🟢 **Aprovado** | Pronto para uso |
| 🔴 **Rejeitado** | Precisa de ajustes |

::: tip DICA
Templates são aprovados mais rapidamente quando seguem as políticas da Meta. Evite linguagem promocional excessiva.
:::

## Janela de 24 Horas

O WhatsApp Business API possui uma regra de janela de atendimento:

- **Dentro de 24h**: Você pode enviar qualquer mensagem
- **Fora de 24h**: Apenas templates aprovados

```
Cliente envia mensagem → Janela de 24h aberta → Conversação livre
                                          ↓
                              24h passam sem resposta
                                          ↓
                              Janela fecha → Apenas templates
```

## Custos

O WhatsApp Business API possui custos por conversa. Verifique a tabela de preços atualizada em [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing).

## Solução de Problemas

### Número não conecta

1. Verifique se o número não está em outro WhatsApp
2. Confirme que a verificação do negócio está completa
3. Aguarde até 24h após a solicitação

### Templates rejeitados

Motivos comuns:
- Conteúdo promocional em excesso
- Falta de clareza no propósito
- Uso de linguagem proibida

### Mensagens não entregam

- Verifique se o número do destinatário está correto
- Confirme que o cliente tem WhatsApp ativo
- Cheque se você está respeitando a janela de 24h

## Próximos Passos

- [Automação com Fluxos](/guide/flows/builder)
- [Métricas de Atendimento](/guide/reports/support)

