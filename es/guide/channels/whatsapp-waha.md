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

### Paso 2: Escanear QR Code o usar número de teléfono

En la pantalla del canal puedes conectar de dos formas:

- **Código QR** — escanea con WhatsApp en el celular
- **Número de teléfono** — solicita un código de emparejamiento e introdúcelo en WhatsApp

Para el código QR:

1. Abre WhatsApp en el celular
2. Ve a **Configuraciones** → **Dispositivos conectados**
3. Haz clic en **"Conectar un dispositivo"**
4. Escanea el QR Code

### Paso 2.1: Verificación con clave de acceso (cuando WhatsApp lo pida)

Algunas cuentas de WhatsApp exigen una **clave de acceso** (passkey) al vincular un nuevo dispositivo. En ese caso, después del código QR o del código de emparejamiento, Interflow muestra el paso de verificación en la propia pantalla del canal.

#### Extensión del navegador

La verificación usa una extensión del navegador (necesaria porque la confirmación debe ocurrir en el origen de WhatsApp Web). Instálala **antes** de conectar si aparece el aviso:

- [Chrome / Edge / Brave](https://chromewebstore.google.com/detail/ghpdcgnjffaaekflfpcgkgpbafmjldcp)
- [Firefox](https://addons.mozilla.org/firefox/addon/whatsapp-browser-extension/)

#### Cómo concluir

1. Cuando la pantalla pida verificación de seguridad, haga clic en **Confirmar conexión**
2. Se abre una pestaña de WhatsApp Web con la tarjeta de confirmación — haga clic y use el autenticador del dispositivo (Touch ID, Windows Hello, llave de seguridad, etc.)
3. En algunos casos WhatsApp muestra un código de **4 dígitos** en el teléfono: compruebe que coincida con la pantalla y haga clic en **El código coincide**
4. Espere a que el estado cambie a **Conectado**

::: tip Consejo
No todas las cuentas piden clave de acceso. Si el canal se conecta solo con el código QR o el de emparejamiento, no hace falta ningún paso extra.
:::

### Paso 3: Confirmar Conexión

Después de escanear (y completar la clave de acceso, si se solicita), el estado cambiará a **Conectado**. Ya puedes recibir y enviar mensajes por Interflow.

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

### Funciones Avanzadas de Grupos

#### Agregar Participante como Cliente

1. Abre el chat del grupo
2. Localiza un mensaje de un participante (lado izquierdo)
3. Haz clic en el **menú (⋯)** del mensaje
4. Selecciona **"Agregar como cliente"**
5. Completa el registro e inicia conversación privada

#### Eliminar Mensajes de Otros

Los administradores del grupo pueden eliminar mensajes inapropiados de otros participantes:

1. Haz clic en el menú (⋯) del mensaje
2. Selecciona **"Eliminar mensaje"**

#### Foto del Grupo

La foto del grupo se muestra automáticamente en el encabezado del chat.

#### Lista de Participantes

1. En el encabezado del chat del grupo, haz clic en **"Participantes"**
2. Visualiza todos los miembros
3. Usa **"Agregar como cliente"** para quienes tengan número disponible

::: info ℹ️ Privacidad (Meta)
Algunos participantes aparecen solo con identificador (@lid por políticas de Meta). En esos casos, usa el menú del mensaje cuando el participante envíe algo en el grupo.
:::

### Bloquear Medios en Grupos

Impide la recepción de medios (imágenes, videos, etc.) en grupos:

1. Ve a **Configuración** → **Canales** → tu canal WAHA
2. Activa **"Bloquear medios en grupos"**

### Permisos

| Configuración | Descripción |
|---------------|-------------|
| **Habilitar grupos** | Admin puede activar/desactivar por canal |
| **Bloquear medios** | Impide recibir archivos en grupos |

### Limitaciones

- Solo mensajes recibidos después de la conexión
- No es posible crear grupos por la plataforma
- Admin necesita agregar el número al grupo

---

## Canal Auxiliar para WhatsApp Official

Si usas WhatsApp Official (API Meta), configura un canal WAHA auxiliar para superar sus limitaciones naturales.

### Para qué sirve

| Limitación del Official | Solución vía Canal Auxiliar |
|-------------------------|-----------------------------|
| No registra mensajes enviados desde el celular | Captura echoes (`fromMe=true`) y registra en el historial |
| La ventana de 24h expira y bloquea mensajes libres | Botón "Enviar vía Canal Auxiliar" aparece en el pie del chat |
| No soporta grupos | El canal auxiliar puede recibir/responder grupos |
| No expone foto de perfil de contactos | WAHA obtiene la foto automáticamente |

### Cómo configurar

1. Ve a la configuración del canal **WhatsApp Official**
2. Desplázate hasta la sección **Canal Auxiliar WAHA**
3. Haz clic en **"Agregar canal auxiliar WAHA"**
4. Escanea el código QR con el WhatsApp del celular — **debe ser el mismo número del canal oficial, en Modo Coexistencia**
5. Ajusta las configuraciones:
   - **Escuchar mensajes del cliente** — desactivado por defecto (evita duplicación con el oficial)
   - **Escuchar mis mensajes** — activado por defecto para capturar echoes
   - **Habilitar grupos** y **Bloquear medios en grupos**

### Envío fuera de la ventana de 24h

1. Cuando la ventana expira, el pie de la conversación muestra **"Usar Plantilla"** y **"Enviar vía Canal Auxiliar"**
2. Haz clic en **"Enviar vía Canal Auxiliar"**
3. El input completo de mensajes aparece (texto, archivos, audio, emoji)
4. El mensaje se envía por WAHA y se registra normalmente en el historial

::: tip 💡 Nota
El canal auxiliar **no aparece en el listado general** de canales — solo es visible dentro de la configuración del canal official.
:::

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

### La pantalla pide clave de acceso, pero el botón queda deshabilitado

- Instale la extensión del navegador indicada en el aviso
- Recargue la página del canal después de instalar
- Use Chrome, Edge, Brave o Firefox (la detección de la extensión depende del navegador)

### Falló la confirmación de la clave de acceso

- Complete el paso en la pestaña de WhatsApp Web (se requiere interacción del usuario)
- No cierre la pestaña antes de autenticar
- Si WhatsApp muestra un código de 4 dígitos, confirme que coincide con Interflow

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
