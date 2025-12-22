# Canales de Atención

Configura y gestiona tus canales de comunicación en Interflow.

## Visión General

Interflow soporta múltiples canales de comunicación, permitiendo que centralices toda la atención al cliente en una única plataforma.

## Canales Disponibles

### 📱 WhatsApp

| Integración | Descripción | Indicado para |
|------------|-----------|---------------|
| [WhatsApp Business API](/es/guide/channels/whatsapp-business) | Integración oficial de Meta | Empresas con alto volumen |
| [WhatsApp WAHA](/es/guide/channels/whatsapp-waha) | Vía sesión QR Code | Pequeñas empresas |

### 📷 Instagram

| Integración | Descripción |
|------------|-----------|
| [Instagram Direct](/es/guide/channels/instagram) | Mensajes directos de Instagram |

### 💬 Facebook

| Integración | Descripción |
|------------|-----------|
| [Facebook Messenger](/es/guide/channels/facebook) | Mensajes de la página de Facebook |

### 📧 Email

| Integración | Descripción |
|------------|-----------|
| [Email IMAP/SMTP](/es/guide/channels/email) | Integración con servidor de email |

---

## Comparativo de Canales

| Recurso | WhatsApp API | WhatsApp WAHA | Instagram | Facebook | Email |
|---------|--------------|---------------|-----------|----------|-------|
| Mensajes de texto | ✅ | ✅ | ✅ | ✅ | ✅ |
| Imágenes | ✅ | ✅ | ✅ | ✅ | ✅ |
| Videos | ✅ | ✅ | ✅ | ✅ | ✅ |
| Audios | ✅ | ✅ | ❌ | ✅ | ❌ |
| Documentos | ✅ | ✅ | ❌ | ✅ | ✅ |
| Ubicación | ✅ | ✅ | ❌ | ❌ | ❌ |
| Templates | ✅ | ❌ | ❌ | ❌ | ❌ |
| Grupos | ❌ | ✅ | ❌ | ❌ | ❌ |

---

## Agregando un Canal

### Paso a Paso General

1. En el menú lateral izquierdo, haz clic en **Canales**
2. Haz clic en **"Agregar canal"**
3. Selecciona el tipo de canal deseado
4. Sigue las instrucciones específicas de cada tipo
5. Prueba la conexión

![Agregar canal](/images/guide/channels/add_channel_es.png)

---

## Estado de los Canales

Cada canal tiene indicadores de estado:

| Estado | Significado |
|--------|-------------|
| 🟢 **Conectado** | Canal funcionando normalmente |
| 🟡 **Reconectando** | Intentando restablecer conexión |
| 🔴 **Desconectado** | Canal offline, necesita acción |

---

## Próximos Pasos

Elige el canal que deseas configurar:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/es/guide/channels/whatsapp-business" style="text-decoration: none;">
  <div style="background: #25D366; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📱</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp Business</p>
  </div>
</a>

<a href="/es/guide/channels/whatsapp-waha" style="text-decoration: none;">
  <div style="background: #128C7E; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📲</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">WhatsApp WAHA</p>
  </div>
</a>

<a href="/es/guide/channels/instagram" style="text-decoration: none;">
  <div style="background: linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #F77737 100%); border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📷</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Instagram</p>
  </div>
</a>

<a href="/es/guide/channels/facebook" style="text-decoration: none;">
  <div style="background: #1877F2; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">💬</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Facebook</p>
  </div>
</a>

<a href="/es/guide/channels/email" style="text-decoration: none;">
  <div style="background: #EA4335; border-radius: 12px; padding: 20px; text-align: center;">
    <span style="color: white; font-size: 32px;">📧</span>
    <p style="color: white; margin-top: 8px; font-weight: bold;">Email</p>
  </div>
</a>

</div>
