# Configuraciones

Gestiona todas las configuraciones de tu cuenta Interflow.

## Visión General

El módulo de Configuraciones centraliza todas las opciones de personalización de la plataforma, desde preferencias personales hasta configuraciones globales de la organización.

## Accediendo a Configuraciones

1. En el menú principal, haz clic en **Configuraciones** (⚙️)
2. Navega por las pestañas disponibles
3. Los cambios se guardan automáticamente o al hacer clic en "Guardar"

## Configuraciones Generales

### Información de la Organización

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Nombre de la empresa/organización |
| **Logo** | Logotipo mostrado en la plataforma |
| **Zona horaria** | Timezone para fechas y horarios |
| **Idioma predeterminado** | Idioma de la interfaz |

### IA y Automatización

Controles para funcionalidades de inteligencia artificial:

| Opción | Descripción |
|--------|-------------|
| **Desactivar Resumen por IA en Resolución** | No genera resumen automático al finalizar |
| **Desactivar Resumen por IA en Transferencia** | No genera resumen automático al transferir |

::: tip 💡 Ahorro
Desactivar resúmenes automáticos ahorra tokens de API. El campo de resumen permanece disponible para llenado manual.
:::

## Configuraciones de Atención

### Pausar Flujo al Atender

Cuando un agente hace clic en "Atender" un chat con flujo activo:

**Opciones:**
- **Activado** ✅ = Siempre pausa automáticamente (sin preguntar)
- **Desactivado** ❌ = Pregunta qué hacer cuando hay flujo activo

**Modal de opciones (cuando desactivado):**

| Opción | Qué sucede |
|--------|------------|
| 🟡 **Pausar Flujo y Atender** | Pausa el flujo, agente asume |
| 🔵 **Continuar Flujo y Atender** | Mantiene flujo activo |
| ⚪ **Cancelar** | No atiende |

::: warning ⚠️ Atención
"Continuar Flujo" = ¡El cliente recibe mensajes del agente Y del flujo!
:::

### Botón de WhatsApp Rápido

Botón para abrir el WhatsApp del cliente directamente del chat, con acciones automáticas.

**Cómo configurar:**

1. En **Configuraciones** → **Atención**, localiza **"Botón de WhatsApp Rápido"**
2. Activa el toggle
3. Configura en el modal:
   - **Mensaje predeterminado** (usa `{{customerName}}` para nombre del cliente)
   - **Campo personalizado** a actualizar (opcional)
   - **Etapa del embudo** para mover (opcional)
   - **Tag** a agregar (opcional)
4. Haz clic en **"Guardar"**

### Sugerencia de Campos al Finalizar

Cuando el agente finaliza la atención, el sistema sugiere campos no rellenados.

**Configuración:**

1. Accede a **Configuraciones** → **Atención**
2. Localiza **"Sugerencia de Campos al Finalizar"**
3. Selecciona qué campos deben ser sugeridos
4. Define cuáles son obligatorios
5. Guarda

## Permisos y Seguridad

### Perfiles de Usuario

| Perfil | Descripción |
|--------|-------------|
| `owner` | Propietario de la cuenta, acceso total |
| `admin` | Administrador, casi todos los accesos |
| `manager` | Gerente, acceso a informes y supervisión |
| `agent` | Agente estándar |
| `agent_limited` | Agente con restricciones |
| `financial` | Acceso al módulo financiero |
| `sales` | Vendedor |
| `medical_doctor` | Médico (para clínicas) |
| `medical_assistant` | Asistente médico |

### Ocultar Datos Sensibles de Agentes

Configuración global para ocultar información de contacto de los clientes para agentes.

**Cómo configurar:**

1. Accede a **Configuraciones** → **General**
2. Localiza **"Ocultar Datos de Contacto de los Agentes"**
3. Activa el toggle
4. Configuración se aplica inmediatamente

**Quién ve los datos:**

| Perfil | Acceso |
|--------|--------|
| Superadmin | ✅ Acceso completo |
| Propietario | ✅ Acceso completo |
| Admin | ✅ Acceso completo |
| **Agente** | ❌ Datos ocultos |

**Qué queda oculto para agentes:**

- ❌ Email, Teléfono, WhatsApp
- ❌ Contactos en exportación (CSV, Excel, JSON)
- ❌ Contactos en resultados de búsqueda
- ❌ Contactos al iniciar chat
- ❌ IDs externos del chat y mensajes
- ❌ Sección de contactos al editar cliente

**Qué agentes PUEDEN hacer:**

- ✅ Ver y editar nombre del cliente
- ✅ Ver y gestionar tags
- ✅ Ver y editar campos personalizados
- ✅ Atender chats normalmente
- ✅ Enviar y recibir mensajes

### Visibilidad Restringida de Clientes

Agentes ven solo clientes de equipos a los que están asignados.

**Áreas afectadas:**
- 📋 Lista de clientes
- 🔍 Búsqueda de clientes
- 📊 Informes (datos filtrados)
- 📤 Exportaciones (respeta visibilidad)

### Menú Financiero Restringido

El menú financiero está oculto para perfiles no administrativos.

**Quién tiene acceso al módulo Financiero:**

| Perfil | Acceso |
|--------|--------|
| `owner` | ✅ Acceso total |
| `admin` | ✅ Acceso total |
| `manager` | ✅ Solo lectura |
| `financial` | ✅ Acceso total |

## Configuraciones de Equipos

### Asignación de Agentes por Administrador

Admins y owners pueden gestionar la asignación de agentes en conversaciones sin entrar en cada una.

**Qué puedes hacer:**
- ✅ Transferir conversación a otro **equipo**
- ✅ Asignar un **agente específico**
- ✅ Remover agente y dejar conversación **pendiente** en cola
- ✅ Gestionar atenciones directamente de la lista

**Dónde acceder:**

1. **Lista de Conversaciones** - Menú de tres puntos (⋮)
2. **Historial del Cliente** - Menú de acciones
3. **Dentro de la Conversación** - Menú en esquina superior derecha

## Configuraciones de Preferencias

### Pestaña Predeterminada Configurable

Elige qué pestaña abre primero al entrar en el sistema.

1. Accede a **Configuraciones** → **Preferencias**
2. Localiza **"Pestaña Predeterminada"**
3. Selecciona la opción preferida:
   - 💬 Chats
   - 👥 Clientes
   - 📅 Citas
   - 📊 Dashboard
4. Guarda

::: tip 💡 Consejo
Esta es una configuración por usuario. Cada miembro del equipo puede configurar la suya.
:::

## Próximos Pasos

- [Agentes IA](/es/guide/ai-agents/) - Configura IA
- [Canales](/es/guide/channels/) - Configura canales de atención
- [Informes](/es/guide/reports/) - Ver métricas


