# Inicio Rápido

Esta guía te ayudará a configurar Interflow en pocos minutos.

::: tip TIEMPO ESTIMADO
⏱️ **5-10 minutos** para configuración básica
:::

## Paso 1: Crear tu Cuenta

Accede a [app.interflow.chat/signup](https://app.interflow.chat/signup) para iniciar el registro.

![Pantalla de registro](/images/guide/dashboard/signup_es.png)

Completa los siguientes datos:
- **Nombre completo**
- **Nombre de la organización** (nombre que aparecerá en la plataforma)
- **Email** (se usará para iniciar sesión)
- **WhatsApp** (número válido para verificación)
- **Contraseña** (mínimo 8 caracteres)

Después de confirmar tu email, tendrás acceso al panel.

## Paso 2: Conectar un Canal

Ahora vamos a conectar tu primer canal de atención.

### Opciones disponibles:

::: details WhatsApp Business API (Recomendado)
**Requisitos:**
- Cuenta Meta Business verificada
- Número de teléfono dedicado

**Ventajas:**
- Oficial y estable
- Mensajes masivos (templates)
- Catálogo de productos
- Pagos

[Ver guía completa →](/es/guide/channels/whatsapp-business)
:::

::: details WhatsApp (WAHA)
**Requisitos:**
- Número de WhatsApp común
- Sesión mantenida activa

**Ventajas:**
- Configuración rápida
- Sin costos de API
- Funciona con número personal

[Ver guía completa →](/es/guide/channels/whatsapp-waha)
:::

::: details Instagram
**Requisitos:**
- Cuenta Business o Creator
- Página de Facebook vinculada

[Ver guía completa →](/es/guide/channels/instagram)
:::

::: details Facebook Messenger
**Requisitos:**
- Página de Facebook

[Ver guía completa →](/es/guide/channels/facebook)
:::

::: details Email
**Requisitos:**
- Servidor IMAP/SMTP
- Credenciales de acceso

[Ver guía completa →](/es/guide/channels/email)
:::

## Paso 3: Configurar Agente IA (Opcional)

Configura un agente de inteligencia artificial para automatizar y asistir en la atención.

1. Ve a **Agente IA** en el menú lateral
2. Elige una de las opciones de configuración:

### Opciones de creación:

| Método | Descripción |
|--------|-------------|
| **Prompt Manual** | Escribe directamente las instrucciones y comportamiento del agente |
| **Asistente Guiado** | Responde preguntas y deja que la IA cree el prompt automáticamente |

![Configuración del Agente IA](/images/guide/agentIA/agent_ia_es.png)

::: info TOKENS INCLUIDOS
Según tu plan, tienes acceso a **tokens a partir de 2 millones por mes**. Si este límite no es suficiente para tu operación, puedes conectar tu propia cuenta de OpenAI.

[Aprende cómo integrar tu cuenta OpenAI →](/es/guide/integrations/openai)
:::

## Paso 4: Invitar a tu Equipo

Agrega miembros de tu equipo para comenzar a atender.

1. Ve a **Usuarios** en el menú lateral izquierdo
2. Haz clic en **"Invitar Equipo"**
3. Ingresa el email y selecciona el perfil de acceso

### Perfiles disponibles:

| Perfil | Permisos |
|--------|----------|
| **Administrador** | Acceso total a la organización |
| **Gerente** | Gestiona equipos y visualiza reportes |
| **Agente** | Atiende conversaciones y accede al CRM |
| **Personalizado** | Permisos configurables |

![Invitación de equipo](/images/guide/users/users_es.png)

## Paso 5: Personalizar Atención

### Atajos (Respuestas Rápidas)

Configura mensajes listos para agilizar la atención:

1. Ve a **Atajos** en el menú lateral izquierdo
2. Haz clic en **"Nuevo atajo"**
3. Define el **Atajo** (ej: `hola`) y el **Contenido** del mensaje

::: tip VARIABLES DISPONIBLES
Usa variables para personalizar tus mensajes automáticamente:

**Sistema:**
- <code v-pre>{{greeting}}</code> - Saludo basado en la hora (Buenos días, Buenas tardes, Buenas noches)

**Cliente:**
- <code v-pre>{{customer.name}}</code> - Nombre completo del cliente
- <code v-pre>{{customer.firstName}}</code> - Primer nombre del cliente
:::

**Ejemplo:**
```txt
Atajo: hola
Contenido: {{greeting}}, {{customer.firstName}}! 👋 
¿Cómo puedo ayudarte hoy?
```

::: info ADJUNTOS
También puedes agregar archivos multimedia a los atajos: **imágenes**, **videos**, **audios** y **PDFs**.
:::

## Paso 6: Crear tu Primer Flujo

Automatiza la atención con un flujo simple:

1. Ve a **Flujos** → **"Nuevo flujo"**
2. Arrastra un nodo de **"Enviar texto"** al canvas
3. Configura el mensaje de bienvenida
4. Usa la opción **"Transformar en lista"** dentro del nodo para crear un menú de opciones
5. Conecta los caminos a las acciones deseadas
6. **Guarda y activa** el flujo

![Constructor de Flujos](/images/guide/flows/flow_es.png)

## Verificación Final

Antes de comenzar a atender, verifica:

- [x] Cuenta creada y email confirmado
- [x] Al menos un canal conectado
- [x] Agente IA configurado (opcional)
- [x] Equipo invitado (si aplica)
- [x] Respuestas rápidas configuradas
- [x] Flujo de bienvenida creado

## Próximos Pasos

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">

<a href="/es/guide/channels/" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">📱</span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Canales de Atención</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Conecta WhatsApp, Instagram y más</p>
  </div>
</a>

<a href="/es/guide/chat/interface" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">💬</span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Interfaz de Chat</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Aprende a usar la interfaz de atención</p>
  </div>
</a>

<a href="/es/guide/flows/builder" style="text-decoration: none;">
  <div style="background: var(--vp-c-bg-soft); border-radius: 12px; padding: 20px;">
    <span style="font-size: 24px;">🤖</span>
    <h4 style="margin: 8px 0 4px 0; color: var(--vp-c-text-1);">Constructor de Flujos</h4>
    <p style="color: var(--vp-c-text-2); font-size: 14px; margin: 0;">Domina la automatización de atención</p>
  </div>
</a>

</div>

## ¿Necesitas Ayuda?

Si tienes dudas durante la configuración:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponible en la plataforma
- 📖 **FAQ**: [Preguntas frecuentes](/es/faq)
