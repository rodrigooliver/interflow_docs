# Agentes IA

Configure agentes de inteligencia artificial para automatizar la atención al cliente en Interflow.

## Visión General

Los Agentes IA de Interflow son asistentes virtuales inteligentes que pueden atender clientes de forma autónoma, responder preguntas, programar citas, transferir a equipos y mucho más.

::: info 🔄 Flujo Automático
Al crear un Agente IA, el sistema **genera automáticamente un flujo** vinculado a él. El agente siempre opera dentro de este flujo, permitiendo combinar la inteligencia de la IA con otros nodos de automatización.
:::

## Modelos Disponibles

Actualmente utilizamos modelos de **OpenAI**. Los modelos se dividen en dos categorías:

### Con Razonamiento

Modelos con capacidades de razonamiento avanzado, ideales para tareas complejas.

| Modelo | Descripción | Costo |
|--------|-------------|-------|
| GPT-5.2 | Modelo más reciente e inteligente | 💲💲💲 |
| GPT-5.1 | Modelo avanzado con razonamiento | 💲💲💲 |
| GPT-5 | Modelo con razonamiento | 💲💲💲 |
| GPT-5 Mini | Versión económica con razonamiento | 💲 |
| GPT-5 Nano | Super económico con razonamiento | 💲 |
| GPT-5 Chat | Especializado en conversación | 💲💲💲 |

### Sin Razonamiento

Modelos más simples y rápidos, ideales para tareas directas.

| Modelo | Descripción | Costo |
|--------|-------------|-------|
| GPT-4.1 | Modelo inteligente y versátil | 💲💲💲 |
| GPT-4.1 Mini | Bajo costo con buen rendimiento | 💲 |
| GPT-4.1 Nano | Más económico, ideal para tareas ligeras | 💲 |

::: tip 💡 Consejo
Para la mayoría de los casos de atención al cliente, **GPT-5 Nano** o **GPT-5 Mini** ofrecen excelente relación costo-beneficio. Vea más detalles en [Integración OpenAI](/es/guide/integrations/openai).
:::

::: info 🚀 Próximamente
Se añadirán nuevos modelos pronto, incluyendo **Claude** (Anthropic), **Gemini** (Google) y otros.
:::

## Accediendo a Agentes IA

1. En el menú principal, haga clic en **Agentes IA** (🤖)
2. Verá la lista de todos los agentes configurados
3. Use la **búsqueda** para encontrar agentes por nombre
4. Haga clic en el botón **A → Z** para ordenar alfabéticamente

## Creando un Agente IA

Al crear un nuevo agente, tendrá dos opciones:

### Opción 1: Generar con IA
Use nuestra herramienta de generación asistida por IA para crear el contexto del agente automáticamente. Solo describa lo que desea y la IA creará el prompt completo.

### Opción 2: Crear Manualmente
Cree el agente desde cero, configurando cada detalle manualmente.

## Pestañas del Editor

El editor de Agentes IA tiene **5 pestañas principales**:

### 1. Contexto
Esta es la pestaña principal donde define el prompt/instrucciones del agente.

**Funciones disponibles:**
- **Editor de Texto**: Escriba instrucciones, personalidad y reglas del agente
- **Generar con IA**: Crea el contexto automáticamente basado en una descripción
- **Mejorar**: Mejora el texto existente usando IA
- **Preguntas**: Visualiza preguntas que el agente no supo responder (solo en edición)
- **Contextos Extra**: Agregue información complementaria (ej: listas de productos)
- **Uso de Tokens**: Acompañe el consumo de tokens en tiempo real (para Interflow)

**Ejemplo de Prompt:**

```text
Eres Interflow, asistente virtual de atención de la Empresa XYZ.

**Personalidad:**
- Amigable y servicial
- Profesional pero no robótico
- Usa emojis con moderación

**Reglas:**
- Siempre saluda al cliente por su nombre
- No inventes información sobre productos
- Si no sabes algo, transfiere a un humano

**Información de la empresa:**
- Horario: Lunes a viernes, 9am a 6pm
- Productos: [lista de productos]
- Políticas: [políticas de cambio, garantía, etc.]
```

### 2. Probar

La pestaña de pruebas permite conversar directamente con el Agente IA antes de ponerlo en producción.

**Cómo Usar:**
1. Después de agregar el contexto, haga clic en la pestaña **"Probar"**
2. Escriba mensajes como si fuera un cliente
3. Observe las respuestas del agente
4. Verifique si el comportamiento es adecuado

**Qué Probar:**
- ✅ Tono de voz y personalidad
- ✅ Respuestas a preguntas frecuentes
- ✅ Límites de lo que la IA puede/no puede hacer
- ✅ Escenarios de transferencia a humano

### 3. Archivos

Agregue medios que el agente puede enviar durante las conversaciones.

**Tipos de archivo soportados:**
- 🖼️ **Imágenes**: JPG, PNG, GIF, WebP
- 🎵 **Audios**: MP3, WAV, OGG
- 🎬 **Videos**: MP4, WebM
- 📄 **Documentos**: PDF, DOCX, XLSX

**Uso:**
El agente puede referenciar y enviar estos archivos durante la conversación cuando sea apropiado.

### 4. Herramientas

Configure las acciones que el agente puede ejecutar. Hay dos tipos:

#### Acciones Listas (Sistema)
Acciones preconfiguradas de Interflow:

| Acción | Descripción |
|--------|-------------|
| **Cambiar Nombre del Cliente** | Actualiza el nombre del cliente en el registro |
| **Actualizar Datos del Cliente** | Modifica campos personalizados del cliente |
| **Transferir a Equipo** | Reenvía el chat a un equipo humano |
| **Agendar** | Crea una nueva cita |
| **Confirmar Cita** | Confirma una cita existente |
| **Cambiar Embudo** | Mueve al cliente entre etapas del embudo |
| **Cuando No Sepa Responder** | Define comportamiento para preguntas desconocidas |
| **Cambiar Fecha de Retorno** | Reprograma seguimiento automático |

#### Acciones Personalizadas
Cree herramientas personalizadas para integraciones específicas. Cada herramienta puede tener:
- **Nombre y Descripción**: Identificación de la herramienta
- **Parámetros**: Variables que la IA debe recopilar
- **Acciones**: Qué hacer cuando la herramienta es activada

::: tip 📖 Más Información
Vea la documentación completa en [Herramientas de IA](/es/guide/ai-agents/tools).
:::

### 5. Avanzado

Configuraciones detalladas del agente:

#### Información Básica
- **Título**: Nombre identificador del agente
- **Prompt Predeterminado**: Disponibilizar para todas las organizaciones (solo superadmins)

#### Configuraciones de IA
- **Integración**: Elija entre Interflow (tokens del plan) u OpenAI personalizada
- **Modelo**: Seleccione el modelo de IA a utilizar
- **Temperatura** (modelos sin razonamiento): Controla la creatividad de las respuestas (0.0 a 2.0)
- **Nivel de Razonamiento** (modelos con razonamiento): Bajo, Medio o Alto
- **Máximo de Tokens** (modelos sin razonamiento): Límite de tokens en la respuesta
- **Verbosidad** (modelos GPT-5): Controla el tamaño de las respuestas
- **Zona Horaria**: Define el timezone para fechas y horarios

#### Configuraciones de Flujo
- **Ver Flujo**: Acceda al flujo vinculado al agente
- **Resetear Flujo**: Recrea el flujo con la configuración predeterminada
- **Disparadores**: Configure cuándo el agente debe ser activado

## Seguimiento Inteligente

La IA puede ajustar automáticamente el seguimiento basado en el contexto de la conversación.

### Cómo Funciona

Cuando el cliente menciona una fecha futura o indica que no es el momento:

- **"Hablemos el jueves"** → IA reprograma seguimiento para el jueves
- **"Vuelvo el día 25"** → IA agenda retorno para el día 25
- **"Ya cerré el negocio"** → IA pausa el seguimiento

### Configuración

1. Acceda a las **Herramientas** del agente
2. Agregue la acción **"Cambiar Fecha de Retorno"**
3. Seleccione el **Flujo** y el **Nodo** de destino
4. Guarde

## Transferencia con Resumen Automático

Al transferir una conversación a un equipo humano, la IA puede generar automáticamente un resumen:

1. Edite la acción **"Transferir a Equipo"**
2. Marque: ✅ **"Generar resumen al transferir"**
3. Guarde

**El resumen incluye:**
- Motivo del contacto
- Principales dudas del cliente
- Pasos ya realizados por la IA
- Datos importantes recopilados

## Firma en Mensajes

Agregue una firma automática a los mensajes generados por la IA.

### Cómo Configurar

La firma se configura en el **flujo vinculado al agente**, específicamente en el **Nodo de Enviar Texto**.

1. Acceda al flujo vinculado al Agente IA
2. Localice el nodo de **Enviar Texto** que envía las respuestas de la IA
3. En el campo de mensaje, agregue la firma deseada después de la variable de respuesta

**Ejemplo:**
```text
{{ai_response}}

---
🤖 Mensaje enviado por IA
```

::: tip 📖 Más Información
Vea la documentación completa del nodo en [Mensaje de Texto](/es/guide/flows/nodes/text).
:::

## Integración con Citas

La IA puede gestionar citas de forma conversacional:

### Ejemplo de Conversación

```text
👤 Cliente: Quiero agendar una consulta
🤖 IA: ¡Claro! ¿Qué día prefieres? Tenemos disponibilidad de lunes a viernes.

👤 Cliente: Jueves a las 2pm
🤖 IA: ¡Perfecto! Tenemos disponibilidad el jueves a las 2pm con el Dr. Juan. 
       ¿Confirmo la cita?

👤 Cliente: Sí, por favor
🤖 IA: ✅ ¡Cita confirmada!
       📅 Jueves, 26 de diciembre de 2025 a las 14:00
       👨‍⚕️ Profesional: Dr. Juan
       
       Te enviaré un recordatorio 24h antes. ¡Hasta entonces! 😊
```

### Respetando Días Libres

La IA automáticamente:
- ❌ **No ofrece** horarios en períodos de descanso
- ❌ **No permite** crear citas en días bloqueados
- ✅ **Explica al cliente** el motivo de la indisponibilidad
- ✅ **Sugiere automáticamente** fechas alternativas

## Contextos Extra

Agregue información complementaria al contexto del agente, como listas de productos, FAQs, o cualquier contenido que el agente pueda necesitar consultar.

### Tipos Disponibles
- **Lista WhatsApp**: Formatea el contenido para visualización en listas de WhatsApp

### Cómo Agregar
1. En la pestaña **Contexto**, haga clic en **"+ Agregar"** en Contextos Extra
2. Complete título, descripción y contenido
3. Guarde

## Buenas Prácticas

### ✅ Haga

- Sea específico en el prompt sobre el comportamiento esperado
- Proporcione ejemplos de respuestas ideales
- Limite el alcance de actuación (qué la IA puede y no puede hacer)
- Pruebe exhaustivamente antes de poner en producción
- Monitoree las conversaciones y ajuste el prompt
- Use la pestaña "Preguntas" para identificar brechas en el contexto

### ❌ Evite

- Prompts vagos o genéricos
- Permitir que la IA invente información
- Dar autonomía excesiva sin supervisión
- Olvidar configurar transferencia a humano
- Ignorar comentarios de los clientes sobre la IA

## Métricas e Informes

Acompañe el rendimiento de sus Agentes IA:

- **Tasa de resolución**: % de conversaciones resueltas sin humano
- **Tiempo promedio de respuesta**: Velocidad de la IA
- **Transferencias**: Cuántas veces transfirió a humano
- **Satisfacción**: Evaluación de los clientes
- **Uso de tokens**: Consumo de API

## Próximos Pasos

- [Herramientas de IA](/es/guide/ai-agents/tools) - Configure acciones del agente
- [Mejorador de Texto](/es/guide/chat/text-enhancer) - Comandos de IA para agentes
- [Flujos](/es/guide/flows/builder) - Integre IA en flujos
- [Agenda](/es/guide/schedule/) - Configure citas vía IA
- [Configuraciones](/es/guide/settings/) - Controles de IA
