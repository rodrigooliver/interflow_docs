---
title: Canais de Atendimento
description: Como conectar canais. O botão Novo Canal abre a escolha de WhatsApp, Instagram, Facebook ou e-mail.
app: /app/settings/channels
---

# Canais de Atendimento

Configure e gerencie seus canais de comunicação na Interflow.

## Visão Geral

A Interflow suporta múltiplos canais de comunicação, permitindo que você centralize todo o atendimento em uma única plataforma. Para conectar um canal, abra Canais nas configurações da organização.

## Canais Disponíveis

### WhatsApp

| Integração | Descrição | Indicado para |
|------------|-----------|---------------|
| [WhatsApp Business API](/guide/channels/whatsapp-business) | Integração oficial da Meta | Empresas com alto volume |
| [WhatsApp WAHA](/guide/channels/whatsapp-waha) | Via sessão QR Code | Pequenas empresas |

### Instagram

| Integração | Descrição |
|------------|-----------|
| [Instagram Direct](/guide/channels/instagram) | Mensagens diretas do Instagram |

### Facebook

| Integração | Descrição |
|------------|-----------|
| [Facebook Messenger](/guide/channels/facebook) | Mensagens da página do Facebook |

### Email

| Integração | Descrição |
|------------|-----------|
| [Email IMAP/SMTP](/guide/channels/email) | Integração com servidor de email |

---

## Comparativo de Canais

| Recurso | WhatsApp API | WhatsApp WAHA | Instagram | Facebook | Email |
|---------|--------------|---------------|-----------|----------|-------|
| Mensagens de texto | | | | | |
| Imagens | | | | | |
| Vídeos | | | | | |
| Áudios | | | | | |
| Documentos | | | | | |
| Localização | | | | | |
| Templates | | | | | |
| Grupos | | | | | |

---

## Adicionando um Canal

### Passo a Passo Geral

1. No menu lateral esquerdo, clique em **Canais**
2. Clique no botão **Novo Canal**, no canto superior da lista. Ele abre a tela de escolha do tipo (`/app/settings/channels/new`). Só proprietário e administrador veem esse botão. Se o plano já atingiu o limite de canais, o botão fica desabilitado e a tela mostra o aviso para trocar de plano.
3. Escolha WhatsApp (Business API ou WAHA), Instagram, Facebook ou e-mail
4. Siga as instruções específicas de cada tipo
5. Teste a conexão

![Adicionar canal](/images/guide/channels/add_channel_pt.png)

---

## Status dos Canais

Cada canal possui indicadores de status:

| Status | Significado |
|--------|-------------|
| **Conectado** | Canal funcionando normalmente |
| **Reconectando** | Tentando restabelecer conexão |
| **Desconectado** | Canal offline, precisa de ação |

No **WhatsApp WAHA**, o canal pode continuar **conectado** (verde) e mostrar um selo âmbar se o WhatsApp restringiu *novos* contatos. Conversas existentes seguem. Detalhes: [Restrição de novos contatos](/guide/channels/whatsapp-waha#restricao-de-novos-contatos).

Se um canal WAHA **já conectado** ficar offline, owner e admins recebem um push com o nome e o número. Detalhes: [Reconexão](/guide/channels/whatsapp-waha#reconexao).

---

## Transcrição de áudios

Os canais podem converter áudios em texto automaticamente, com controles separados para cliente, agente e (no WAHA) grupos.

> Guia: [Transcrição de áudios](/guide/channels/audio-transcription)

---

## Rodízio entre equipes

No painel do canal, ative **Rodízio entre equipes** e monte uma lista ordenada (mínimo duas equipes).

- Contatos novos que entram pelo webhook recebem a próxima equipe da fila
- A **equipe padrão** do canal continua como fallback se a fila ficar inválida
- Depois do sorteio, vale a configuração da equipe destino: se ela tiver rodízio de pessoas, atribui/reserva um membro; senão, o chat fica pendente para qualquer um assumir
- Em **Transferir** e **Sair do atendimento**, há a opção de enviar ao rodízio do canal (em vez de escolher uma equipe)

A organização pode restringir se o atendente escolhe equipe ou só envia ao rodízio em **Configurações**.

> Changelog: [v2026.9.9](/changelog/2026/09/2026.9.9)

---

## Visibilidade ao iniciar conversa

Defina **quem pode usar cada canal** ao iniciar uma nova conversa com um cliente (todos, por perfil, por usuários ou por equipe). Canais auxiliares não entram nessa lista.

> Guia completo: [Restrição de canais ao iniciar conversa](/guide/channels/start-chat-visibility)

---

## Próximos Passos

Escolha o canal que deseja configurar:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/guide/channels/whatsapp-business" style="text-decoration: none;">
  <div style="background: #25D366; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;"></span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp Business</p>
  </div>
</a>

<a href="/guide/channels/whatsapp-waha" style="text-decoration: none;">
  <div style="background: #128C7E; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;"></span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp WAHA</p>
  </div>
</a>

<a href="/guide/channels/instagram" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;"></span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Instagram</p>
  </div>
</a>

<a href="/guide/channels/facebook" style="text-decoration: none;">
  <div style="background: #1877F2; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;"></span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Facebook</p>
  </div>
</a>

<a href="/guide/channels/email" style="text-decoration: none;">
  <div style="background: #EA4335; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;"></span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Email</p>
  </div>
</a>

</div>

