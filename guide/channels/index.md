# Canais de Atendimento

Configure e gerencie seus canais de comunicação na Interflow.

## Visão Geral

A Interflow suporta múltiplos canais de comunicação, permitindo que você centralize todo o atendimento em uma única plataforma.

## Canais Disponíveis

### 📱 WhatsApp

| Integração | Descrição | Indicado para |
|------------|-----------|---------------|
| [WhatsApp Business API](/guide/channels/whatsapp-business) | Integração oficial da Meta | Empresas com alto volume |
| [WhatsApp WAHA](/guide/channels/whatsapp-waha) | Via sessão QR Code | Pequenas empresas |

### 📷 Instagram

| Integração | Descrição |
|------------|-----------|
| [Instagram Direct](/guide/channels/instagram) | Mensagens diretas do Instagram |

### 💬 Facebook

| Integração | Descrição |
|------------|-----------|
| [Facebook Messenger](/guide/channels/facebook) | Mensagens da página do Facebook |

### 📧 Email

| Integração | Descrição |
|------------|-----------|
| [Email IMAP/SMTP](/guide/channels/email) | Integração com servidor de email |

---

## Comparativo de Canais

| Recurso | WhatsApp API | WhatsApp WAHA | Instagram | Facebook | Email |
|---------|--------------|---------------|-----------|----------|-------|
| Mensagens de texto | ✅ | ✅ | ✅ | ✅ | ✅ |
| Imagens | ✅ | ✅ | ✅ | ✅ | ✅ |
| Vídeos | ✅ | ✅ | ✅ | ✅ | ✅ |
| Áudios | ✅ | ✅ | ❌ | ✅ | ❌ |
| Documentos | ✅ | ✅ | ❌ | ✅ | ✅ |
| Localização | ✅ | ✅ | ❌ | ❌ | ❌ |
| Templates | ✅ | ❌ | ❌ | ❌ | ❌ |
| Grupos | ❌ | ✅ | ❌ | ❌ | ❌ |

---

## Adicionando um Canal

### Passo a Passo Geral

1. No menu lateral esquerdo, clique em **Canais**
2. Clique em **"Adicionar canal"**
3. Selecione o tipo de canal desejado
4. Siga as instruções específicas de cada tipo
5. Teste a conexão

![Adicionar canal](/images/guide/channels/add_channel_pt.png)

---

## Status dos Canais

Cada canal possui indicadores de status:

| Status | Significado |
|--------|-------------|
| 🟢 **Conectado** | Canal funcionando normalmente |
| 🟡 **Reconectando** | Tentando restabelecer conexão |
| 🔴 **Desconectado** | Canal offline, precisa de ação |

---

## Próximos Passos

Escolha o canal que deseja configurar:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/guide/channels/whatsapp-business" style="text-decoration: none;">
  <div style="background: #25D366; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp Business</p>
  </div>
</a>

<a href="/guide/channels/whatsapp-waha" style="text-decoration: none;">
  <div style="background: #128C7E; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📲</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp WAHA</p>
  </div>
</a>

<a href="/guide/channels/instagram" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📷</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Instagram</p>
  </div>
</a>

<a href="/guide/channels/facebook" style="text-decoration: none;">
  <div style="background: #1877F2; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">💬</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Facebook</p>
  </div>
</a>

<a href="/guide/channels/email" style="text-decoration: none;">
  <div style="background: #EA4335; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📧</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Email</p>
  </div>
</a>

</div>

