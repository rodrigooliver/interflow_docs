# WhatsApp WAHA

Conecta tu WhatsApp vía QR Code para atención simplificada.

## Visión General

La integración vía WAHA permite usar tu número de WhatsApp común en la plataforma Interflow. Es una solución práctica para pequeñas y medianas empresas.

## Requisitos

- [x] Número de WhatsApp activo
- [x] Celular con WhatsApp instalado (para escaneo inicial)

## Ventajas

| Recurso | Descripción |
|---------|-------------|
| **Simple** | Conecta vía QR Code en minutos |
| **Sin costos Meta** | No hay cobro por conversación |
| **Grupos** | Soporte a grupos de WhatsApp |
| **Media completa** | Imágenes, videos, audios, documentos |
| **Sincronización** | Recupera mensajes históricos |

## Limitaciones

::: warning ATENCIÓN
Esta integración no es oficial de Meta y puede estar sujeta a bloqueos. Usa con moderación y sigue buenas prácticas.
:::

- No soporta templates aprobados
- Riesgo de bloqueo si usado para spam
- Necesita mantener sesión activa

## Configuración

### Paso 1: Agregar Canal

1. En Interflow, ve a **Configuraciones** → **Canales**
2. Haz clic en **"Agregar canal"**
3. Selecciona **WhatsApp (WAHA)**

### Paso 2: Escanear QR Code

Un QR Code será exhibido. Escanea con tu WhatsApp:

1. Abre WhatsApp en el celular
2. Ve a **Configuraciones** → **Dispositivos conectados**
3. Haz clic en **"Conectar un dispositivo"**
4. Escanea el QR Code

### Paso 3: Confirmar Conexión

Después de escanear, el estado cambiará a **Conectado**. Ya puedes recibir y enviar mensajes por Interflow.

## Manteniendo la Sesión Activa

Para evitar desconexiones:

- ✅ Mantén el celular conectado a internet
- ✅ No desconectes manualmente el dispositivo
- ✅ Evita usar el mismo número en otros servicios
- ❌ No hagas logout del WhatsApp en el celular

## Sincronización de Mensajes

Recupera mensajes históricos del WhatsApp que no entraron automáticamente.

### Cómo usar

1. Abre un chat WAHA
2. Haz clic en el menú (⋮) → **"Sincronizar Mensajes"**
3. Configura el período:
   - **Fecha Inicial** y **Fecha Final**
   - Límite máximo: 3 días por sincronización
4. Haz clic en **"Sincronizar"**

### Qué sucede

- ✅ Busca mensajes del período seleccionado
- ✅ Sincroniza con timestamp original
- ⏭️ Ignora mensajes ya existentes
- ✅ Actualiza estado correcto (enviado, entregado, leído)

::: tip 💡 Cuándo usar
Útil cuando reconectaste el canal y quieres recuperar conversaciones que ocurrieron mientras estaba desconectado.
:::

## Grupos de WhatsApp

Recibe y responde mensajes de grupos de WhatsApp.

### Cómo funciona

- 💬 Grupos aparecen en la lista de conversaciones
- 👤 Identifica quién envió en el grupo
- ↩️ Responde directamente al grupo
- 📊 Historial completo preservado

### Permisos

| Configuración | Descripción |
|---------------|-------------|
| **Habilitar grupos** | Admin puede activar/desactivar por canal |
| **Restringir agentes** | Agentes pueden ser bloqueados de grupos |

### Limitaciones

- Solo mensajes recibidos después de la conexión
- No es posible crear grupos por la plataforma
- Admin necesita agregar el número al grupo

## Buenas Prácticas

Para evitar bloqueos del WhatsApp:

### ✅ Haz

- Envía mensajes solo a quienes autorizaron
- Responde rápidamente a los clientes
- Usa lenguaje profesional
- Ten un horario de atención

### ❌ Evita

- Enviar mensajes en masa no solicitados
- Usar lenguaje promocional agresivo
- Enviar muchos mensajes en secuencia
- Iniciar conversaciones con desconocidos

## Reconexión

Si el canal se desconecta:

1. Verifica el estado en **Canales**
2. Haz clic en el canal desconectado
3. Escanea el nuevo QR Code
4. Espera la reconexión

::: tip CONSEJO
Si hay desconexiones frecuentes, verifica la conexión de internet del celular y considera migrar para WhatsApp Business API.
:::

## Solución de Problemas

### QR Code no aparece

- Limpia el cache del navegador
- Intenta en una ventana incógnita
- Verifica si hay bloqueos de firewall

### Desconexión frecuente

- Verifica internet del celular
- Actualiza WhatsApp a la versión más reciente
- Evita múltiples sesiones conectadas

### Mensajes no llegan

- Confirma que el número está correcto
- Verifica que el canal está conectado
- Revisa si hay webhooks configurados

## Próximos Pasos

- [Interfaz de Chat](/es/guide/chat/interface) - Usa el Botón WhatsApp Rápido
- [Automatización con Flujos](/es/guide/flows/builder) - Automatiza atenciones
- [Agentes IA](/es/guide/ai-agents/) - IA para responder grupos
- [WhatsApp Business](/es/guide/channels/whatsapp-business) - Migrar para API oficial
