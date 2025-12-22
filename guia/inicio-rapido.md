# Início Rápido

Este guia vai te ajudar a configurar a Interflow em poucos minutos.

::: tip TEMPO ESTIMADO
⏱️ **5-10 minutos** para configuração básica
:::

## Passo 1: Criar sua Conta

Acesse [app.interflow.chat](https://app.interflow.chat) e clique em **"Criar conta"**.

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Tela de cadastro</p>
</div>

Preencha os seguintes dados:
- **Nome completo**
- **Email** (será usado para login)
- **Senha** (mínimo 8 caracteres)

Após confirmar seu email, você terá acesso ao painel.

## Passo 2: Configurar sua Organização

Na primeira vez que acessar, você será guiado para criar sua organização.

### Informações necessárias:

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| Nome da empresa | Nome que aparecerá na plataforma | "Minha Empresa LTDA" |
| Slug | Identificador único (URL) | "minha-empresa" |
| Fuso horário | Para agendamentos e relatórios | "America/Sao_Paulo" |

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configuração da organização</p>
</div>

## Passo 3: Conectar um Canal

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

[Ver guia completo →](/guia/canais/whatsapp-business)
:::

::: details WhatsApp (WAHA/Evolution)
**Requisitos:**
- Número de WhatsApp comum
- Sessão mantida ativa

**Vantagens:**
- Configuração rápida
- Sem custos de API
- Funciona com número pessoal

[Ver guia completo →](/guia/canais/whatsapp-api)
:::

::: details Instagram
**Requisitos:**
- Conta Business ou Creator
- Página do Facebook vinculada

[Ver guia completo →](/guia/canais/instagram)
:::

::: details Facebook Messenger
**Requisitos:**
- Página do Facebook

[Ver guia completo →](/guia/canais/facebook)
:::

::: details Email
**Requisitos:**
- Servidor IMAP/SMTP
- Credenciais de acesso

[Ver guia completo →](/guia/canais/email)
:::

## Passo 4: Convidar sua Equipe

Adicione membros da sua equipe para começar a atender.

1. Vá em **Configurações** → **Equipe**
2. Clique em **"Convidar membro"**
3. Informe o email e selecione o perfil de acesso

### Perfis disponíveis:

| Perfil | Permissões |
|--------|------------|
| **Administrador** | Acesso total à organização |
| **Gerente** | Gerencia equipes e visualiza relatórios |
| **Atendente** | Atende conversas e acessa CRM |
| **Personalizado** | Permissões configuráveis |

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Convite de equipe</p>
</div>

## Passo 5: Personalizar Atendimento

### Respostas Rápidas

Configure mensagens prontas para agilizar o atendimento:

1. Vá em **Configurações** → **Respostas Rápidas**
2. Clique em **"Nova resposta"**
3. Defina um atalho (ex: `/ola`) e a mensagem

**Exemplo:**
```
Atalho: /ola
Mensagem: Olá! 👋 Bem-vindo ao atendimento da {empresa}. 
Como posso ajudá-lo hoje?
```

### Templates de Mensagem (WhatsApp Business API)

Para mensagens ativas (iniciar conversa), você precisa de templates aprovados:

1. Vá em **Configurações** → **Templates**
2. Crie um template seguindo as diretrizes da Meta
3. Aguarde aprovação (geralmente 24-48h)

## Passo 6: Criar seu Primeiro Fluxo

Automatize o atendimento com um fluxo simples:

1. Vá em **Fluxos** → **"Novo fluxo"**
2. Arraste um nó de **"Mensagem"** para o canvas
3. Configure a mensagem de boas-vindas
4. Adicione opções com **"Menu"**
5. Conecte os caminhos às ações desejadas
6. **Salve e ative** o fluxo

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Vídeo: Criando seu primeiro fluxo (em breve)</p>
</div>

## Verificação Final

Antes de começar a atender, verifique:

- [x] Conta criada e email confirmado
- [x] Organização configurada
- [x] Pelo menos um canal conectado
- [x] Equipe convidada (se aplicável)
- [x] Respostas rápidas configuradas
- [x] Fluxo de boas-vindas criado

## Próximos Passos

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/guia/chat/interface" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">💬</span>
    <h4 style="margin: 8px 0 4px 0;">Interface de Chat</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Aprenda a usar a interface de atendimento</p>
  </div>
</a>

<a href="/guia/fluxos/construtor" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">🤖</span>
    <h4 style="margin: 8px 0 4px 0;">Construtor de Fluxos</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Domine a automação de atendimento</p>
  </div>
</a>

<a href="/guia/crm/clientes" style="text-decoration: none;">
  <div style="background: #f5f5f5; border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">👥</span>
    <h4 style="margin: 8px 0 4px 0;">CRM e Clientes</h4>
    <p style="color: #666; font-size: 14px; margin: 0;">Gerencie seus contatos</p>
  </div>
</a>

</div>

## Precisa de Ajuda?

Se tiver dúvidas durante a configuração:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponível na plataforma
- 📖 **FAQ**: [Perguntas frequentes](/faq)

