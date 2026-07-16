# Herramientas de IA

Configure las acciones que su Agente IA puede ejecutar durante las conversaciones.

## Visión General

Las herramientas permiten que la IA ejecute acciones más allá de simplemente responder mensajes. Con ellas, el agente puede actualizar registros, transferir atenciones, crear citas y mucho más.

## Tipos de Herramientas

Hay dos tipos de herramientas disponibles:

### 1. Acciones Listas (Sistema)
Acciones preconfiguradas de Interflow, listas para usar.

### 2. Acciones Personalizadas
Herramientas personalizadas que usted crea para integraciones específicas.

## Acciones Listas

Las acciones listas son herramientas del sistema que ya vienen configuradas. Solo agregue y personalice según su necesidad.

### Cambiar Nombre del Cliente

Permite que la IA actualice el nombre del cliente en el registro durante la conversación.

**Cuándo usar:**
- Cliente informa nombre diferente al registrado
- Primera interacción donde se recopila el nombre
- Corrección de nombres escritos incorrectamente

**Ejemplo de uso:**
```text
👤 Cliente: Mi nombre es Juan García, no Juan Santos
🤖 IA: ¡Listo, Juan! Ya actualicé tu registro. ¿Cómo puedo ayudarte?
```

::: info ⚠️ Única
Esta acción solo puede ser agregada una vez por agente.
:::

---

### Actualizar Datos del Cliente

Actualiza campos personalizados del registro del cliente.

**Configuración:**
1. Seleccione los campos que la IA puede actualizar
2. Defina si son obligatorios u opcionales
3. Guarde

**Campos disponibles:**
- Campos personalizados creados en Configuraciones
- Campos estándar del sistema

**Ejemplo de uso:**
```text
👤 Cliente: Mi email es juan@email.com
🤖 IA: ¡Perfecto! Ya guardé tu email. Ahora puedo enviar confirmaciones por ahí.
```

---

### Cambiar Contacto del Cliente

Permite que la IA **guarde o actualice teléfono, WhatsApp o e-mail** del cliente cuando informe el contacto en la conversación.

**Cuándo usar:**
- El cliente informa un teléfono o WhatsApp adicional
- Actualización del e-mail informado en el chat
- Recolección de contacto en flujos de registro o confirmación

**Configuración:**
1. Agregue la acción **Cambiar Contacto del Cliente**
2. Seleccione los tipos permitidos: teléfono, WhatsApp y/o e-mail
3. Guarde el prompt

::: tip 💡 E-mail
Cuando el tipo sea e-mail, el valor también actualiza el campo principal de e-mail del cliente.
:::

**Ejemplo de uso:**
```text
👤 Cliente: Mi WhatsApp es (11) 98888-7777
🤖 IA: ¡Perfecto! Ya guardé ese WhatsApp en tu registro.
```

::: info ⚠️ Única
Esta acción puede agregarse solo una vez por agente.
:::

---

### Cambiar Dirección del Cliente

Permite que la IA **guarde o actualice la dirección** del cliente en el registro cuando informe los datos en la conversación (calle, número, ciudad, estado, código postal, etc.) o envíe una **ubicación GPS**.

**Cuándo usar:**
- El cliente informa una dirección de entrega o facturación
- El cliente envía el pin de ubicación en WhatsApp
- Actualización de la dirección predeterminada ya registrada
- Recolección de dirección en flujos de pedido o visita

**Qué puede guardar la IA:**
- Calle y número (o línea completa de la dirección)
- Complemento, ciudad, estado y código postal
- País y etiqueta opcional de la dirección
- Latitud y longitud (GPS)
- Instrucciones de entrega/acceso (ej.: interfono, portón)
- Dirección marcada como predeterminada (actualiza la existente o crea una nueva)

**Ubicación GPS:**
- Acepta coordenadas separadas (`latitude` / `longitude`) o el formato del mensaje de ubicación (ej.: `-3.03, -59.98`)
- Si solo llega el GPS, el sistema intenta completar calle, ciudad y demás campos mediante geocodificación inversa (Google Maps con clave configurada, o Nominatim)

**Ejemplo de uso:**
```text
👤 Cliente: Mi dirección es Calle de las Flores, 120, apto 3, São Paulo - SP, CP 01310-100
🤖 IA: ¡Listo! Ya guardé esa dirección en tu registro. ¿Necesitas algo más?
```

```text
👤 Cliente: [envía ubicación en el mapa]
🤖 IA: Recibí tu ubicación y ya actualicé la dirección en el registro.
```

::: tip 💡 Contexto automático
Las direcciones ya registradas también entran en el **Customer info** del primer mensaje de contexto del agente, para que la IA no tenga que preguntar de nuevo.
:::

::: info ⚠️ Única
Esta acción puede agregarse solo una vez por agente.
:::

---

### Consultar API

Permite que la IA **consulte y ejecute operaciones en una API externa** durante la atención (base URL, autenticación cifrada y lista de rutas permitidas). Cada ruta se convierte en una tool cuyo **nombre es el id en slug** (ej.: `get_order`).

**Cuándo usar:**
- Consultar estado de pedido, cobro, stock o cliente en sistemas externos
- Crear/actualizar registros vía API REST
- Exponer solo endpoints seguros (allowlist), sin búsqueda abierta en la web

**Configuración:**
1. Agregue la acción **Consultar API**
2. Indique la **Base URL** y el tipo de autenticación (Bearer, header o query)
3. Guarde la clave (queda **cifrada**, mismo patrón que Integrations)
4. Agregue rutas: `id` (slug), descripción, method, path y parámetros — o use **Generar con IA**
5. Opcional: **pruebe cada ruta** en el servidor antes de publicar

#### Generar rutas con IA

Al agregar una acción nueva (aún sin rutas), el asistente **se abre automáticamente**. Puede:

- Describir en lenguaje natural lo que el agente debe hacer
- Indicar la **URL de la documentación** (opcional)
- Pegar **fragmentos de la documentación** o ejemplos de llamadas (`curl`)

La IA arma **solo las rutas necesarias**, además del nombre, descripción y slug de la acción. Revise, ajuste y pruebe antes de poner en producción.

```text
Ejemplo de descripción + curl:

Quiero integrar la API de Mercado Pago en la atención.
El agente necesita buscar un cliente por documento y listar cobros.

curl -X GET "https://api.mercadopago.com/v1/customers/search?email=user@email.com" \
  -H "Authorization: Bearer $MP_ACCESS_TOKEN"
```

::: tip 💡 Asistente con web search
**Generar con IA** usa búsqueda en la web **solo en la configuración**. En la atención, el agente solo llama las rutas que usted permitió.
:::

#### Probar rutas

En cada ruta, use **Probar ruta**, complete parámetros de ejemplo y ejecute. La prueba corre en el **servidor** (la clave no va al navegador). El estado de la última prueba aparece como OK, Error o Sin probar.

::: warning ⚠️ POST / PUT
Las pruebas de creación o actualización pueden **generar datos reales** en el sistema externo. No es necesario probar todas las rutas.
:::

::: info ⚠️ Claves
La clave nunca entra en el schema de la tool ni en la respuesta al modelo. En la UI aparece enmascarada (`••••`).
:::

**Ejemplo:**
```text
👤 Cliente: ¿Cuál es el estado del pedido 12345?
🤖 IA: [llama get_order] Tu pedido 12345 está en tránsito.
```

> Changelog: [v2026.7.10](/es/changelog/2026/07/2026.7.10)

---

### Transferir a Equipo

Reenvía la atención a un equipo humano.

**Opciones de configuración:**

| Opción | Descripción |
|--------|-------------|
| **Equipos permitidos** | Seleccione qué equipos la IA puede transferir |
| **Pausar agente** | Pausa la IA después de la transferencia |
| **Saltar flujo relacionado** | No ejecuta flujos vinculados al equipo |
| **Generar resumen** | Crea resumen automático de la conversación |

**Resumen Automático:**

Cuando está activado, el resumen incluye:
- Motivo del contacto
- Principales dudas del cliente
- Pasos ya realizados por la IA
- Datos recopilados durante la conversación

**Ejemplo de uso:**
```text
👤 Cliente: Necesito hablar con un humano sobre un problema técnico
🤖 IA: ¡Entendido! Te voy a transferir a nuestro equipo de soporte técnico. 
       Un momento, por favor...

[Sistema: Chat transferido a "Soporte Técnico" con resumen]
```

---

### Agendar

Crea nuevas citas directamente a través de la conversación.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Agenda** | Seleccione qué agenda utilizar |
| **Servicios** | Todos o específicos |
| **Profesionales** | Todos o específicos |
| **Operaciones** | Tipos de operación permitidos |

**Flujo de agendamiento:**
1. Cliente solicita cita
2. IA verifica horarios disponibles
3. Cliente elige fecha/horario
4. IA confirma y registra la cita

**Ejemplo de uso:**
```text
👤 Cliente: Quiero agendar una consulta
🤖 IA: ¡Claro! Tenemos disponibilidad de lunes a viernes.
       ¿Qué día y horario prefieres?

👤 Cliente: Jueves a las 2pm
🤖 IA: ✅ ¡Cita confirmada!
       📅 Jueves, 26 de diciembre de 2025 a las 14:00
       ¡Te enviaré un recordatorio 24h antes!
```

---

### Confirmar Cita

Confirma citas existentes del cliente.

**Configuración:**
- **Agenda**: Seleccione qué agenda consultar

**Comportamiento:**
- La IA identifica citas pendientes del cliente
- Presenta los detalles para confirmación
- Marca como confirmada después de la aceptación

**Ejemplo de uso:**
```text
🤖 IA: ¡Hola! Vi que tienes una cita mañana a las 10am.
       ¿Puedo confirmar tu asistencia?

👤 Cliente: Sí, confirmo
🤖 IA: ¡Perfecto! Tu cita está confirmada. ¡Hasta mañana! ✅
```

---

### Cambiar Embudo

Mueve al cliente entre etapas del embudo de ventas/atención.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Etapas de origen** | De qué etapas el cliente puede salir |
| **Etapas de destino** | A qué etapas puede ser movido |

**Cuándo usar:**
- Cliente demuestra interés (mover a "Calificado")
- Cliente cierra negocio (mover a "Vendido")
- Cliente pide no ser contactado (mover a "No interesado")

**Ejemplo de uso:**
```text
👤 Cliente: Quiero cerrar el plan Pro
🤖 IA: ¡Excelente elección! Voy a registrar tu decisión y un consultor 
       se pondrá en contacto para finalizar.

[Sistema: Cliente movido a etapa "Cierre"]
```

---

### Cuando No Sepa Responder

Define el comportamiento de la IA cuando no encuentra la respuesta en el contexto.

**Opciones:**

| Opción | Descripción |
|--------|-------------|
| **Pausar agente** | Pausa la IA y espera intervención humana |
| **Guardar pregunta** | Registra la pregunta para análisis posterior |

**Por qué usar:**
- Identificar brechas en el entrenamiento del agente
- Evitar respuestas inventadas
- Recopilar preguntas frecuentes para mejorar el contexto

**Visualizando preguntas guardadas:**
1. En la pestaña Contexto, haga clic en **"Preguntas"**
2. Vea todas las preguntas no respondidas
3. Use para mejorar el contexto del agente

::: info ⚠️ Única
Esta acción solo puede ser agregada una vez por agente.
:::

---

### Cambiar Fecha de Retorno

Reprograma el seguimiento automático del cliente.

**Configuración:**
1. Seleccione el **Flujo** de retorno
2. Seleccione el **Nodo** inicial del retorno
3. Guarde

**Cuándo usar:**
- Cliente menciona fecha futura ("Llámame la próxima semana")
- Cliente no puede conversar ahora ("Estoy ocupado")
- Reprogramación de seguimiento

**Ejemplo de uso:**
```text
👤 Cliente: Ahora no puedo, llámame el jueves
🤖 IA: ¡Sin problema! Me comunico contigo el jueves. 
       ¡Que tengas un excelente día! 👋

[Sistema: Seguimiento reprogramado para el jueves]
```

---

## Acciones Personalizadas

Cree herramientas personalizadas para necesidades específicas de su negocio.

### Estructura de una Herramienta

Cada herramienta personalizada tiene:

| Campo | Descripción |
|-------|-------------|
| **Descripción** | Qué hace la herramienta (usado por la IA para decidir cuándo usarla) |
| **Nombre** | Identificador técnico (generado automáticamente) |
| **Parámetros** | Datos que la IA debe recopilar |
| **Acciones** | Qué ejecutar cuando la herramienta es activada |

### Creando una Herramienta

1. En la pestaña **Herramientas**, haga clic en **"Acción Personalizada"**
2. Complete la descripción (ej: "Consulta el estado de un pedido")
3. El nombre será generado automáticamente (ej: `consulta_el_estado_de_un_pedido`)
4. Agregue los parámetros necesarios

### Configurando Parámetros

Cada parámetro tiene:

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Identificador del parámetro |
| **Tipo** | string, number, boolean, etc. |
| **Descripción** | Explica qué representa el parámetro |
| **Obligatorio** | Si la IA siempre debe recopilar ese dato |
| **Valores permitidos** | Lista de opciones válidas (opcional) |

**Ejemplo de parámetros:**
```json
{
  "numero_pedido": {
    "type": "string",
    "description": "Número del pedido del cliente",
    "required": true
  },
  "tipo_consulta": {
    "type": "string",
    "enum": ["estado", "rastreo", "factura"],
    "description": "Tipo de información deseada"
  }
}
```

### Configurando Acciones

En la pestaña **Acciones** de la herramienta, defina qué sucede cuando es ejecutada:

- **Ir a nodo del flujo**: Dirige a un nodo específico
- **Solicitud HTTP**: Llama a una API externa
- **Actualizar variable**: Modifica una variable del flujo

### Visualizando JSON

Haga clic en el botón **JSON** para ver la herramienta en formato OpenAI:

```json
{
  "name": "consulta_estado_pedido",
  "description": "Consulta el estado de un pedido del cliente",
  "strict": true,
  "parameters": {
    "type": "object",
    "properties": {
      "numero_pedido": {
        "type": "string",
        "description": "Número del pedido"
      }
    },
    "required": ["numero_pedido"],
    "additionalProperties": false
  }
}
```

## Buenas Prácticas

### ✅ Haga

- Use descripciones claras y específicas
- Defina parámetros con tipos correctos
- Pruebe cada herramienta antes de publicar
- Limite los valores permitidos cuando sea posible
- Configure acciones de respaldo

### ❌ Evite

- Descripciones vagas que confunden a la IA
- Muchas herramientas similares
- Parámetros innecesarios
- Herramientas sin acciones definidas

## Ejemplos Prácticos

### Consulta de Saldo

```json
{
  "name": "consulta_saldo",
  "description": "Consulta el saldo disponible en la cuenta del cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "tipo_saldo": {
        "type": "string",
        "enum": ["disponible", "bloqueado", "total"],
        "description": "Tipo de saldo a consultar"
      }
    },
    "required": []
  }
}
```

### Segunda Vía de Factura

```json
{
  "name": "segunda_via_factura",
  "description": "Genera segunda vía de factura para pago",
  "parameters": {
    "type": "object",
    "properties": {
      "mes_referencia": {
        "type": "string",
        "description": "Mes de referencia de la factura (ej: 01/2025)"
      },
      "enviar_por": {
        "type": "string",
        "enum": ["whatsapp", "email"],
        "description": "Cómo enviar la factura"
      }
    },
    "required": ["mes_referencia"]
  }
}
```

### Actualización de Dirección

```json
{
  "name": "actualizar_direccion",
  "description": "Actualiza la dirección de entrega del cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "codigo_postal": {
        "type": "string",
        "description": "Código postal de la nueva dirección"
      },
      "numero": {
        "type": "string",
        "description": "Número de la residencia"
      },
      "complemento": {
        "type": "string",
        "description": "Complemento (apto, bloque, etc.)"
      }
    },
    "required": ["codigo_postal", "numero"]
  }
}
```

## Próximos Pasos

- [Agentes IA](/es/guide/ai-agents/) - Volver a visión general
- [Flujos](/es/guide/flows/builder) - Configure el flujo del agente
- [Solicitud HTTP](/es/guide/flows/nodes/request) - Integre con APIs externas
- [Variables](/es/guide/flows/nodes/variable) - Manipule datos recopilados

