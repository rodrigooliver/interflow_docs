# Início Rápido

Este guia vai te ajudar a configurar a Interflow em poucos minutos.

## Passo 1: Criar sua Conta

Acesse [app.interflow.chat/signup](https://app.interflow.chat/signup) para iniciar o cadastro.

![Tela de cadastro](/images/guide/dashboard/signup_pt.png)

Preencha os seguintes dados:
- **Nome completo**
- **Nome da organização** (nome que aparecerá na plataforma)
- **Email** (será usado para login)
- **WhatsApp** (número válido para verificação)
- **Senha** (mínimo 8 caracteres)

Após confirmar seu email, você terá acesso ao painel.

## Passo 2: Conectar um Canal

Agora vamos conectar seu primeiro canal de atendimento.

### Opções disponíveis:

::: details WhatsApp Business API (Recomendado)
**Requisitos:**
- Conta Meta Business verificada
- Número de telefone dedicado

**Vantagens:**
- Oficial e estável
- Mensagens em massa (templates)
- Catálogo de produtos
- Pagamentos

[Ver guia completo →](/guide/channels/whatsapp-business)
:::

::: details WhatsApp (WAHA)
**Requisitos:**
- Número de WhatsApp comum
- Sessão mantida ativa

**Vantagens:**
- Configuração rápida
- Sem custos de API
- Funciona com número pessoal

[Ver guia completo →](/guide/channels/whatsapp-waha)
:::

::: details Instagram
**Requisitos:**
- Conta Business ou Creator
- Página do Facebook vinculada

[Ver guia completo →](/guide/channels/instagram)
:::

::: details Facebook Messenger
**Requisitos:**
- Página do Facebook

[Ver guia completo →](/guide/channels/facebook)
:::

::: details Email
**Requisitos:**
- Servidor IMAP/SMTP
- Credenciais de acesso

[Ver guia completo →](/guide/channels/email)
:::

## Passo 3: Configurar Agente IA (Opcional)

Configure um agente de inteligência artificial para automatizar e auxiliar no atendimento.

1. Vá em **Agente IA** no menu lateral
2. Escolha uma das opções de configuração:

### Opções de criação:

| Método | Descrição |
|--------|-----------|
| **Prompt Manual** | Escreva diretamente as instruções e comportamento do agente |
| **Assistente Guiado** | Responda perguntas e deixe a IA criar o prompt automaticamente |

![Configuração do Agente IA](/images/guide/agentIA/agent_ia_pt.png)

::: info TOKENS INCLUSOS
De acordo com seu plano, você tem acesso a **tokens a partir de 2 milhões por mês**. Se esse limite não for suficiente para sua operação, você pode conectar sua própria conta OpenAI.

[Saiba como integrar sua conta OpenAI →](/guide/integrations/openai)
:::

## Passo 4: Convidar sua Equipe

Adicione membros da sua equipe para começar a atender.

1. Vá em **Usuários** no menu lateral esquerdo
2. Clique em **"Convidar Equipe"**
3. Informe o email e selecione o perfil de acesso

### Perfis disponíveis:

| Perfil | Permissões |
|--------|------------|
| **Administrador** | Acesso total à organização |
| **Gerente** | Gerencia equipes e visualiza relatórios |
| **Atendente** | Atende conversas e acessa CRM |
| **Personalizado** | Permissões configuráveis |

![Convite de equipe](/images/guide/users/users_pt.png)

## Passo 5: Personalizar Atendimento

### Atalhos (Respostas Rápidas)

Configure mensagens prontas para agilizar o atendimento:

1. Vá em **Atalhos** no menu lateral esquerdo
2. Clique em **"Novo atalho"**
3. Defina o **Atalho** (ex: `ola`) e o **Conteúdo** da mensagem

::: tip VARIÁVEIS DISPONÍVEIS
Use variáveis para personalizar suas mensagens automaticamente:

**Sistema:**
- <code v-pre>{{greeting}}</code> - Saudação baseada no horário (Bom dia, Boa tarde, Boa noite)

**Cliente:**
- <code v-pre>{{customer.name}}</code> - Nome completo do cliente
- <code v-pre>{{customer.firstName}}</code> - Primeiro nome do cliente
:::

**Exemplo:**
```txt
Atalho: ola
Conteúdo: {{greeting}}, {{customer.firstName}}!
Como posso ajudá-lo hoje?
```

::: info ANEXOS
Você também pode adicionar arquivos de mídia aos atalhos: **imagens**, **vídeos**, **áudios** e **PDFs**.
:::

## Passo 6: Criar seu Primeiro Fluxo

Automatize o atendimento com um fluxo simples:

1. Vá em **Fluxos** → **"Novo fluxo"**
2. Arraste um nó de **"Enviar texto"** para o canvas
3. Configure a mensagem de boas-vindas
4. Use a opção **"Transformar em lista"** dentro do nó para criar um menu de opções
5. Conecte os caminhos às ações desejadas
6. **Salve e ative** o fluxo

![Construtor de Fluxos](/images/guide/flows/flow_pt.png)

## Verificação Final

Antes de começar a atender, verifique:

- [x] Conta criada e email confirmado
- [x] Pelo menos um canal conectado
- [x] Agente IA configurado (opcional)
- [x] Equipe convidada (se aplicável)
- [x] Respostas rápidas configuradas
- [x] Fluxo de boas-vindas criado

## Próximos Passos

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/guide/channels/" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;"></span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Canais de Atendimento</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Conecte WhatsApp, Instagram e mais</p>
  </div>
</a>

<a href="/guide/chat/interface" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;"></span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Interface de Chat</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Aprenda a usar a interface de atendimento</p>
  </div>
</a>

<a href="/guide/flows/builder" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;"></span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Construtor de Fluxos</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Domine a automação de atendimento</p>
  </div>
</a>

</div>

## Precisa de Ajuda?

Se tiver dúvidas durante a configuração:

- **Email**: suporte@interflow.chat
- **Chat**: Disponível na plataforma
- **FAQ**: [Perguntas frequentes](/faq)

