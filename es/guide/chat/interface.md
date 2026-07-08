# Interfaz de Chat

Conoce la interfaz de atención de Interflow y aprende a usar todos los recursos.

## Visión General

La interfaz de chat de Interflow fue diseñada para maximizar la productividad de tu equipo de atención, centralizando todas las conversaciones en una única pantalla.

## Layout de la Interfaz

La pantalla de chat se divide en tres áreas principales:

| Área | Ubicación | Función |
|------|-----------|---------|
| **Lista de Conversaciones** | Izquierda | Todas las conversaciones activas |
| **Área de Mensajes** | Centro | Historial y envío de mensajes |
| **Panel del Cliente** | Derecha | Información y acciones del cliente |

## Lista de Conversaciones

### Filtros Disponibles

- **Todas** - Todas las conversaciones
- **Mías** - Asignadas a ti
- **Sin asignar** - Esperando agente
- **En espera** - Esperando respuesta del cliente
- **Finalizadas** - Conversaciones cerradas

### Filtros Personalizados

Crea filtros personalizados para organizar tus conversaciones:

1. Haz clic en ⚙️ en la barra de filtros
2. Haz clic en **"Nuevo Filtro"** o duplica uno existente
3. Configura los criterios:
   - **Equipos**: Selecciona uno o múltiples equipos
   - **Tags**: Filtrar por tags específicos
   - **Canal**: WhatsApp, Instagram, etc.
   - **Estado**: En progreso, pendiente, etc.
4. Personaliza nombre, ícono y **color** (¡paleta expandida disponible!)
5. Guarda

::: tip 💡 Consejo
¡Puedes filtrar por **múltiples equipos** simultáneamente! Útil para supervisores que gestionan varios equipos.
:::

### Búsqueda de Conversaciones

Busca conversaciones por **número de teléfono** del cliente:

- ✅ `5511999999999` (completo con código de país)
- ✅ `11999999999` (con código de área)
- ✅ `999999999` (solo número)
- ✅ `+55 11 99999-9999` (formateado)

### Navegación por Páginas

Navega directamente a una página específica:

1. En la parte inferior de la lista, haz clic en el campo de número de página
2. Escribe el número de página deseado
3. Presiona Enter

### Estado de las Conversaciones

| Ícono | Estado |
|-------|--------|
| 🟢 | Activa - esperando atención |
| 🟡 | En espera - esperando cliente |
| 🔵 | En atención |
| ⚪ | Finalizada |

### Indicador de Múltiples Atenciones

Cuando un cliente tiene múltiples conversaciones activas:

- 🔴 Badge aparece al lado del nombre del cliente
- Muestra el número de chats en paralelo
- Haz clic para ver lista de conversaciones activas
- Navegación rápida entre chats

### Ordenación

- Por fecha del último mensaje
- Por tiempo de espera
- Por prioridad

## Área de Mensajes

### Componentes

- **Header** - Nombre del cliente, canal, estado, botón WhatsApp Rápido
- **Mensajes Fijados** - Mensajes importantes en la parte superior
- **Historial** - Todos los mensajes intercambiados
- **Campo de texto** - Para escribir mensajes
- **Adjuntos** - Enviar archivos
- **Emojis** - Selector de emojis
- **Respuestas rápidas** - Atajos de mensajes
- **Comandos IA** - Atajos de IA (Ctrl+J)

### Mensajes Fijados

Destaca información importante fijando mensajes en la parte superior del chat:

**Cómo fijar:**
1. Pasa el mouse sobre el mensaje
2. Haz clic en los tres puntos (⋮)
3. Selecciona **"Fijar mensaje"**

**Recursos:**
- 📌 Mensajes aparecen en la parte superior del chat
- 🔢 Contador de mensajes fijados
- 🟡 Fondo amarillo para notas privadas fijadas
- ➜ Botón "Ir al mensaje" (navega al original)
- 🔄 Actualizaciones en tiempo real

**Cómo desfijar:**
- Haz clic en **X** en la lista de fijados, o
- Menú del mensaje → **"Desfijar mensaje"**

### Indicadores de Mensaje

| Indicador | Significado |
|-----------|-------------|
| ✓ | Enviado |
| ✓✓ | Entregado |
| ✓✓ (azul) | Leído |
| ⏳ | Enviando |
| ❌ | Error de envío |

## Panel del Cliente

### Información Exhibida

- Nombre y foto
- Canales de contacto
- Tags
- Campos personalizados
- Historial de conversaciones
- Notas internas
- **Indicador de campos** - Muestra qué campos están llenos

### Indicador de Campos de Registro

Visual que muestra el estado de llenado de los campos:

- ✅ Ícono verde = Campo lleno
- ⚠️ Ícono amarillo = Campo faltante
- 🔴 Ícono rojo = Obligatorio y faltante

### Acciones Disponibles

- **Editar cliente** - Actualizar datos
- **Agregar tag** - Aplicar tags
- **Nueva nota** - Agregar anotación
- **Ver historial** - Conversaciones anteriores
- **Crear tarea** - Agendar follow-up

## Acciones de Atención

### Acciones en Masa

Ejecuta acciones en varios chats a la vez directamente desde la lista de atenciones:

1. Aplica los filtros deseados (estado, etiqueta, canal, agente, equipo, no leídos, etc.)
2. Haz clic en el ícono de **selección en masa** (☑) en la parte superior de la lista
3. Selecciona chats individualmente **o** usa **"Seleccionar todos los filtrados"**
4. En la barra inferior, elige:
   - **Marcar como leído** — borra mensajes no leídos en chats elegibles
   - **Marcar como resuelto** — cierra solo chats con estado **pendiente**; los chats en progreso se ignoran
5. Confirma la acción cuando se solicite (más de 10 chats)

### Crear Tarea desde Mensajes

Selecciona mensajes específicos de una conversación para crear una tarea directamente:

1. En el área de mensajes, selecciona uno o más mensajes
2. En la barra inferior, haz clic en **"Crear Tarea"**
3. Completa los detalles (título, responsable, plazo)
4. Los mensajes seleccionados quedan vinculados a la tarea como contexto

### Asumir Conversación

Para atender una conversación no asignada:
1. Haz clic en la conversación
2. Haz clic en **"Asumir"**
3. La conversación será asignada a ti

**Si hay un flujo activo**, puedes elegir:
- 🟡 **Pausar Flujo y Atender** - Pausa el flujo, tú asumes
- 🔵 **Continuar Flujo y Atender** - Mantiene flujo activo (¡mensajes duplicados!)
- ⚪ **Cancelar** - No atiende

### Asignación por Administrador

Admins pueden gestionar asignaciones sin entrar en cada conversación:

1. En la lista de conversaciones, haz clic en menú (⋮)
2. Selecciona **"Transferir Agente/Equipo"**
3. Elige:
   - **Sin agente**: Conversación queda pendiente en cola
   - **Agente específico**: Asignado directamente

### Transferir Conversación

Para pasar una conversación a otro agente:
1. Haz clic en el ícono de transferencia
2. Selecciona el destino (agente o equipo)
3. Agrega una nota (opcional)
4. Confirma

### Archivar Conversación

Puedes archivar conversaciones que están **"En progreso"**:

- Archiva conversaciones activas para organizar tu lista
- Cuando el cliente envíe nuevo mensaje, la conversación se **desarchiva automáticamente**
- Ningún mensaje importante se pierde

### Finalizar Atención

Al concluir una atención:
1. Haz clic en **"Finalizar"**
2. Selecciona el motivo de cierre
3. **Sugerencia de campos**: Sistema sugiere campos no rellenados
4. Rellena los campos sugeridos (opcional u obligatorio)
5. Agrega observaciones (opcional)
6. Confirma

## Notas Internas

Agrega anotaciones visibles solo para el equipo:

1. En el panel del cliente, haz clic en **"Nota"**
2. Escribe la anotación
3. Guarda

Las notas aparecen en el historial con destaque visual.

### Eliminando Notas Privadas

Puedes eliminar notas enviadas por error:

1. Pasa el mouse sobre la nota
2. Haz clic en menú (⋮)
3. Selecciona **"Eliminar mensaje"**
4. Confirma

**Reglas:**
- ✅ Solo el autor puede eliminar
- ✅ Admins pueden eliminar cualquier nota
- ❌ Mensajes del cliente no pueden ser eliminados
- 🕐 Log preservado para auditoría

## Atajos de Mensaje

Escribe `/` seguido del nombre del atajo para insertar una respuesta rápida. Los atajos con **varios mensajes** muestran un badge en el listado y abren un **modal de revisión** en el chat, donde puedes editar textos, ajustar intervalos y enviar toda la secuencia de una vez.

> Guía completa: [Secuencias en Atajos de Mensaje](/es/guide/chat/message-shortcuts)

Configura los atajos en **Organización** → **Atajos de Mensaje**.

## Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Enter` | Enviar mensaje |
| `Shift+Enter` | Nueva línea |
| `Esc` | Cerrar conversación |
| `/` | Abrir respuestas rápidas |
| `Ctrl+K` | Buscar conversación |
| `Ctrl+J` | Abrir comandos de IA |

## Mejorador de Texto (Ctrl+J)

Mejora tus mensajes con IA directamente del campo de texto:

1. Presiona `Ctrl+J` o escribe `/`
2. Selecciona la acción deseada (mejorar, formalizar, traducir, etc.)
3. La IA procesa e inserta el resultado

**Acciones disponibles:**
- **Mejorar** - Mejora claridad y gramática
- **Formalizar** - Hace el texto más profesional
- **Simplificar** - Simplifica textos complejos
- **Traducir** - Traduce a otro idioma

::: tip 💡 Comandos Personalizados
¡Crea tus propios comandos de IA! Ve la documentación completa en [Mejorador de Texto](/es/guide/chat/text-enhancer).
:::

## Botón de WhatsApp Rápido

Abre el WhatsApp del cliente directamente del chat con acciones automáticas:

1. En el header del chat, haz clic en el botón verde de WhatsApp
2. Nueva pestaña abre con mensaje preconfigurado
3. Acciones automáticas son ejecutadas (campo, embudo, tag)

::: warning ⚠️ Importante
El botón solo aparece en chats de canales WhatsApp (WAHA, W-API, WhatsApp Oficial).
:::

Configura en **Configuraciones > Atención > Botón de WhatsApp Rápido**.

## Chat Interno (Comunicación entre Agentes)

Comunícate directamente con otros miembros del equipo sin crear grupos, directamente en el encabezado de la página de Chats.

### Chat Directo (DM)

1. En la página **Chats**, haz clic en el botón **+** en el encabezado
2. Selecciona **"Chat Directo Interno"**
3. Elige el agente con quien deseas conversar
4. La conversación se abre en el **widget flotante**

::: info ℹ️ Comportamiento
Si ya existe una conversación con el usuario seleccionado, el sistema abre la existente en lugar de crear una nueva. Los chats internos aparecen automáticamente en el widget flotante para ambos participantes.
:::

### Widget Flotante

Los chats internos se fijan en el widget flotante:

- **Persistencia** — el estado del widget se guarda y sincroniza entre dispositivos
- **Auto-pin** — al ser agregado a un chat interno, aparece automáticamente en el widget
- **Orden fijo** — los chats siempre aparecen en el mismo orden

### Grupos Internos

Al crear un Grupo Interno, configura los permisos:

- **Permitir que miembros eliminen el grupo** — cuando está activo, cualquier miembro puede eliminar; de lo contrario, solo los administradores del grupo

### Notificaciones de Chat Interno

- Título con nombre del remitente: `Nombre · Chat Interno` (DM) o `Nombre · Nombre del Grupo` (grupo)
- Conteo de no leídos individual por usuario
- El remitente no recibe notificación de su propio mensaje

---

## Próximos Pasos

- [Mejorador de Texto](/es/guide/chat/text-enhancer) - Comandos de IA personalizados
- [Agentes IA](/es/guide/ai-agents/) - IA autónoma para atención
- [Agenda](/es/guide/schedule/) - Citas integradas
- [Configuraciones](/es/guide/settings/) - Personalizar interfaz