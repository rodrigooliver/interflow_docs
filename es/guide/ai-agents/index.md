# Agentes IA

Configura agentes de inteligencia artificial para automatizar atenciones en Interflow.

## Visión General

Los Agentes IA de Interflow son asistentes virtuales inteligentes que pueden atender clientes de forma autónoma, responder preguntas, agendar citas, transferir a equipos y mucho más.

::: info 🔄 Flujo Automático
Al crear un Agente IA, el sistema **genera automáticamente un flujo** vinculado a él. El agente siempre opera dentro de este flujo, permitiendo combinar la inteligencia de la IA con otros nodos de automatización.
:::

### Modelos Disponibles

Actualmente utilizamos los modelos de **OpenAI**. Aquí están los principales:

#### Con Razonamiento
| Modelo | Descripción |
|--------|-------------|
| GPT-5.2 | Modelo principal para coding y agentes |
| GPT-5 mini | Versión rápida y económica |
| GPT-5 nano | Más económico de la familia |

#### Sin Razonamiento
| Modelo | Descripción |
|--------|-------------|
| GPT-4.1 | Modelo inteligente y versátil |
| GPT-4.1 mini | Bajo costo con buen rendimiento |
| GPT-4.1 nano | Más económico, ideal para tareas ligeras |

::: tip 💡 Consejo
Para la mayoría de los casos de atención, **GPT-5 nano** o **GPT-5 mini** ofrecen excelente relación costo-beneficio. Vea más detalles en [Integración OpenAI](/es/guide/integrations/openai).
:::

::: info 🚀 Próximamente
Nuevos modelos serán agregados pronto, incluyendo **Claude** (Anthropic), **Gemini** (Google) y otros.
:::

## Accediendo a Agentes IA

1. En el menú principal, haz clic en **Agentes IA** (🤖)
2. Verás la lista de todos los agentes configurados
3. Usa la **búsqueda** para encontrar agentes por nombre
4. Haz clic en el botón **A → Z** para ordenar alfabéticamente

## Creando un Agente IA

### Paso 1: Información Básica

1. Haz clic en **"Nuevo Agente"**
2. Llena:
   - **Nombre**: Identificación del agente (ej: "Asistente de Ventas")
   - **Descripción**: Explicación del propósito
   - **Modelo**: Selecciona el modelo de IA (GPT-4, GPT-3.5, Claude, etc.)

### Paso 2: Configurar Prompt

El prompt define la "personalidad" y comportamiento del agente:

```
Eres Interflow, asistente virtual de atención de Empresa XYZ.

**Personalidad:**
- Amigable y servicial
- Profesional pero no robótico
- Usa emojis con moderación

**Reglas:**
- Siempre saluda al cliente por nombre
- No inventes información sobre productos
- Si no sabes algo, transfiere a un humano

**Información de la empresa:**
- Horario: Lunes a viernes, 9h a 18h
- Productos: [lista de productos]
- Políticas: [políticas de cambio, garantía, etc.]
```

### Paso 3: Configurar Herramientas

Las herramientas son acciones que la IA puede ejecutar. Ve la sección [Herramientas de IA](#herramientas-de-ia) para detalles.

### Paso 4: Guardar y Probar

1. Haz clic en **"Guardar"**
2. Accede a la pestaña **"Pruebas"** para validar el comportamiento
3. Conversa con el agente y ve cómo responde
4. Ajusta el prompt según sea necesario

## Pestaña de Pruebas

La pestaña de pruebas permite conversar directamente con el Agente IA antes de ponerlo en producción.

### Cómo Usar

1. Después de guardar el agente, haz clic en la pestaña **"Pruebas"**
2. Escribe mensajes como si fueras un cliente
3. Observa las respuestas del agente
4. Verifica si el comportamiento es adecuado

### Qué Probar

- ✅ Tono de voz y personalidad
- ✅ Respuestas a preguntas frecuentes
- ✅ Uso correcto de las herramientas
- ✅ Límites de lo que la IA puede/no puede hacer
- ✅ Escenarios de transferencia a humano

## Herramientas de IA

Las herramientas permiten que la IA ejecute acciones más allá de responder mensajes.

### Herramientas Disponibles

| Herramienta | Descripción |
|-------------|-------------|
| **Transferir a equipo** | Encamina el chat a un equipo humano |
| **Listar horarios** | Muestra horarios disponibles en la agenda |
| **Crear cita** | Agenda una cita |
| **Reagendar** | Cambia fecha/hora de cita |
| **Cancelar cita** | Cancela una cita existente |
| **Actualizar cliente** | Modifica campos del registro |
| **Cambiar fecha de retorno** | Reprograma follow-up automático |
| **Cerrar atención** | Finaliza la conversación |

### Transferencia con Resumen Automático

Al transferir una conversación a equipo humano, la IA puede generar automáticamente un resumen:

1. Edita la acción **"Transferir a equipo"**
2. Marca: ✅ **"Generar resumen de atención al transferir"**
3. Guarda

**El resumen incluye:**
- Motivo del contacto
- Principales dudas del cliente
- Pasos ya realizados
- Datos importantes recolectados

## Follow-up Inteligente

La IA puede ajustar automáticamente el follow-up basado en el contexto de la conversación.

### Cómo Funciona

Cuando el cliente menciona una fecha futura o indica que no es el momento:

- **"Hablamos el jueves"** → IA reprograma follow-up para el jueves
- **"Vuelvo el día 25"** → IA agenda retorno para el 25
- **"Ya cerré negocio"** → IA pausa el follow-up

### Configuración

1. Accede a **Prompts** en el menú lateral
2. Selecciona el prompt vinculado a tu flujo
3. Haz clic en **Editar → Herramientas**
4. Agrega la acción **"Cambiar Fecha de Retorno"**
5. Configura el flujo y nodo de destino
6. Guarda

## Firma en Mensajes

Agrega una firma automática a los mensajes generados por IA.

### Cómo Configurar

La firma se configura en el **flujo vinculado al agente**, específicamente en el **Nodo de Enviar Texto**.

1. Accede al flujo vinculado al Agente IA
2. Localiza el nodo de **Enviar Texto** que envía las respuestas de la IA
3. En el campo de mensaje, agrega la firma deseada después de la variable de respuesta

**Ejemplo:**
```
{{ai_response}}

---
🤖 Mensaje enviado por IA
```

::: tip 📖 Saber Más
Ve la documentación completa del nodo en [Mensaje de Texto](/es/guide/flows/nodes/text).
:::

## Límites y Controles

### Desactivar Resumen Automático

Para ahorrar tokens de IA:

1. Accede a **Configuraciones** → **General**
2. Localiza la sección **"IA y Automatización"**
3. Activa las opciones deseadas:
   - ✅ **Desactivar Resumen por IA en Resolución**
   - ✅ **Desactivar Resumen por IA en Transferencia**
4. Guarda

## Integración con Agenda

La IA puede gestionar citas de forma conversacional:

### Ejemplo de Conversación

```
👤 Cliente: Quiero marcar una consulta
🤖 IA: ¡Claro! ¿Para qué día prefieres? Tenemos disponibilidad de lunes a viernes.

👤 Cliente: Jueves a las 14h
🤖 IA: ¡Perfecto! Tenemos disponibilidad el jueves a las 14h con Dr. Juan.
       ¿Confirmo la cita?

👤 Cliente: Sí, por favor
🤖 IA: ✅ ¡Cita confirmada!
       📅 Fecha: Jueves, 26/12/2025
       ⏰ Horario: 14:00
       👨‍⚕️ Profesional: Dr. Juan
       
       Te enviaré un recordatorio 24h antes. ¡Hasta entonces! 😊
```

## Buenas Prácticas

### ✅ Haz

- Sé específico en el prompt sobre el comportamiento esperado
- Proporciona ejemplos de respuestas ideales
- Limita el alcance (qué la IA puede y no puede hacer)
- Prueba exhaustivamente antes de producción
- Monitorea conversaciones y ajusta el prompt

### ❌ Evita

- Prompts vagos o genéricos
- Permitir que la IA invente información
- Autonomía excesiva sin supervisión
- Olvidar configurar transferencia a humano
- Ignorar feedback de clientes sobre la IA

## Próximos Pasos

- [Mejorador de Texto](/es/guide/chat/text-enhancer) - Comandos de IA para agentes
- [Constructor de Flujos](/es/guide/flows/builder) - Integra IA en flujos
- [Agenda](/es/guide/schedule/) - Configura citas vía IA
- [Configuraciones](/es/guide/settings/) - Controles de IA

