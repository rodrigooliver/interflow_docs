# Agentes IA

Configure agentes de inteligencia artificial para automatizar la atención al cliente en Interflow.

## Visión General

Los Agentes IA de Interflow son asistentes virtuales inteligentes que pueden atender clientes de forma autónoma, responder preguntas, agendar citas, transferir a equipos y mucho más.

::: info 🔄 Flujo Automático
Al crear un Agente IA, el sistema **genera automáticamente un flujo** vinculado a él. El agente siempre opera dentro de este flujo, permitiendo combinar la inteligencia de IA con otros nodos de automatización.
:::

## Modelos Disponibles

En el Agente de IA usted elige la **integración** y el **modelo**:

| Integración | Quién paga | Modelos |
|-------------|------------|---------|
| **Interflow** | Créditos del plan | OpenAI (lista abajo) |
| **OpenAI** (clave propia) | Su cuenta OpenAI | La misma familia OpenAI |
| **DeepSeek** (clave propia) | Su cuenta DeepSeek | DeepSeek V4 Flash y V4 Pro |

### OpenAI — Con Razonamiento

Modelos con razonamiento avanzado (nivel de esfuerzo y verbosidad configurables).

| Modelo | Descripción | Costo |
|--------|-------------|-------|
| GPT-5.5 | Razonamiento premium | 💲💲💲💲 |
| GPT-5.4 | Razonamiento más reciente | 💲💲💲 |
| GPT-5.4 Mini | Razonamiento económico | 💲 |
| GPT-5.4 Nano | Razonamiento súper económico | 💲 |
| GPT-5.2 | Razonamiento avanzado | 💲💲💲 |
| GPT-5.1 | Razonamiento avanzado | 💲💲💲 |
| GPT-5 | Razonamiento | 💲💲💲 |
| GPT-5 Mini | Razonamiento económico | 💲 |
| GPT-5 Nano | Razonamiento súper económico | 💲 |

### OpenAI — Conversación (Chat)

Especializados en conversación; los modelos `gpt-5.X-chat-latest` también soportan razonamiento (excepto el legado GPT-5 Chat Latest).

| Modelo | Descripción | Costo |
|--------|-------------|-------|
| GPT-5.3 Chat Latest | Conversación | 💲💲💲 |
| GPT-5.2 Chat Latest | Conversación | 💲💲💲 |
| GPT-5.1 Chat Latest | Conversación | 💲💲💲 |
| GPT-5 Chat Latest | Conversación (legado) | 💲💲💲 |

### OpenAI — Sin Razonamiento

Modelos más simples y rápidos, con temperatura y máximo de tokens.

| Modelo | Descripción | Costo |
|--------|-------------|-------|
| GPT-4.1 | Inteligente y versátil | 💲💲💲 |
| GPT-4.1 Mini | Bajo costo con buen rendimiento | 💲 |
| GPT-4.1 Nano | Más económico, tareas ligeras | 💲 |

### DeepSeek (clave propia)

Disponibles al registrar la integración DeepSeek. No consumen créditos Interflow.

| Modelo | Descripción | Costo (referencia) |
|--------|-------------|--------------------|
| DeepSeek V4 Flash | Rápido y económico | 💲 |
| DeepSeek V4 Pro | Más capaz, tareas complejas | 💲💲 |

Ambos soportan **Thinking Mode** (razonamiento en cadena) con esfuerzo Alto o Máximo. Con Thinking Mode activo, la temperatura es ignorada por la API de DeepSeek.

::: tip 💡 Consejo
Para la mayoría de la atención con créditos Interflow, **GPT-5 Nano** o **GPT-5 Mini** (o **GPT-5.4 Nano** / **Mini**) ofrecen buena relación costo-beneficio. Con clave propia, vea también [OpenAI](/es/guide/integrations/openai) y [DeepSeek](/es/guide/integrations/deepseek).
:::

::: info 🚀 Próximamente
Otros proveedores podrán agregarse en el futuro (p. ej. Claude, Gemini).
:::

## Accediendo a Agentes IA

1. En el menú principal, haga clic en **Agentes IA** (🤖)
2. Verá la lista de todos los agentes configurados
3. Use la **búsqueda** para encontrar agentes por nombre
4. Haga clic en **A → Z** para ordenar alfabéticamente

## Creando un Agente IA

Al crear un nuevo agente, tendrá dos opciones:

### Opción 1: Generar con IA
Use nuestra herramienta de generación asistida por IA para crear el contexto automáticamente.

### Opción 2: Crear Manualmente
Cree el agente desde cero, configurando cada detalle manualmente.

## Pestañas del Editor

El editor de Agentes IA tiene **6 pestañas principales**:

### 1. Contexto
Pestaña principal donde define las instrucciones del agente.

### 2. Probar
Permite conversar directamente con el Agente IA antes de ponerlo en producción.

### 3. Archivos
Agregue medios que el agente puede enviar durante la conversación.

### 4. Herramientas

Configure las acciones que el agente puede ejecutar durante la conversación. Hay dos tipos:

- **Acciones listas** — ficha del cliente, contacto, dirección, consultar API, investigar sitios, transferir, agenda, embudo, follow-up y más
- **Acciones personalizadas** — herramientas que usted crea (parámetros + qué ejecutar al activarlas)

::: tip 📖 Ver más
Lista completa, descripción de cada acción y paso a paso: [Herramientas de IA](/es/guide/ai-agents/tools/).
:::

### 5. Base de Conocimiento

Registre documentos internos de su empresa para que la IA los consulte durante las atenciones, ofreciendo respuestas precisas sin depender de razonamiento genérico.

**Cómo funciona:**

Cada documento registrado se convierte automáticamente en una **herramienta** disponible para la IA. La búsqueda es adaptativa:

- **Documentos cortos** (hasta 3 bloques) → contenido completo devuelto directamente
- **Documentos largos** (más de 3 bloques) → búsqueda semántica RAG devuelve solo los fragmentos más relevantes

La búsqueda usa tecnología **híbrida** combinando embeddings vectoriales con búsqueda por palabras clave, con soporte para Portugués, Inglés y Español.

**Cómo agregar un documento:**

1. En la pestaña **Base de Conocimiento**, haga clic en **"Agregar documento"**
2. Complete:
   - **Título** – Nombre del documento (ej: `Horario de Atención`)
   - **Descripción** – Resumen del contenido; cuanto más específico, mejor la IA sabe cuándo llamarlo
   - **Idioma** – Idioma principal del contenido
   - **Contenido** – Texto completo, con soporte Markdown
3. Haga clic en **"Guardar"**

::: tip 💡 Consejo
La **descripción** es el campo más importante. Use palabras que el cliente usaría al preguntar.
:::

::: info 📂 Organización por tema
Prefiera **un documento por tema** en lugar de uno grande con todo. Documentos enfocados generan respuestas más precisas.
:::

### 6. Avanzado

Configuraciones detalladas del agente.

## Integración de Fallback

Configure un agente IA secundario que asume automáticamente cuando el agente principal no puede responder.

### Para qué sirve

- Garantizar atención 24/7 incluso cuando el agente principal está limitado
- Redirigir automáticamente a un agente especializado en ciertos temas
- Evitar que los clientes queden sin respuesta

### Cómo configurar

1. En la pestaña **Avanzado** del agente, localice la sección **"Integración de Fallback"**
2. Seleccione el **Agente IA** de fallback
3. Configure las **alertas** deseadas
4. Defina los **casos de uso** para activación automática
5. Guarde

## Créditos de IA

El uso de los Agentes IA se mide en **créditos basados en USD**, proporcionando transparencia en el control de costos.

### Tipos de Créditos

| Tipo | Descripción |
|------|-------------|
| **Créditos del Plan** | Depositados en la renovación mensual. Se reinician al renovar. |
| **Créditos Comprados** | Adquiridos por separado. No expiran. |
| **Créditos Bono** | Promocionales o de referido. No expiran. |

### Tabla de Costos por Modelo (créditos Interflow / OpenAI)

| Modelo | Input (1M tokens) | Output (1M tokens) |
|--------|-------------------|--------------------|
| **GPT-5.5** | $5.00 | $30.00 |
| **GPT-5.4** | $2.50 | $15.00 |
| **GPT-5.4 Mini** | $0.75 | $4.50 |
| **GPT-5.4 Nano** | $0.20 | $1.25 |
| **GPT-5.2** / **GPT-5.3 Chat Latest** | $1.75 | $14.00 |
| **GPT-5.1** / **GPT-5** / **GPT-5 Chat Latest** | $1.25 | $10.00 |
| **GPT-5 Mini** | $0.25 | $2.00 |
| **GPT-5 Nano** | $0.05 | $0.40 |
| **GPT-4.1** | $2.00 | $8.00 |
| **GPT-4.1 Mini** | $0.40 | $1.60 |
| **GPT-4.1 Nano** | $0.10 | $0.40 |

Precios DeepSeek (cobro en su cuenta DeepSeek): vea [Integración DeepSeek](/es/guide/integrations/deepseek).

### Extracto de Créditos

Acceda al historial en **Configuración → Uso → Créditos de IA**.

---

## Follow-up Inteligente

La IA puede ajustar automáticamente el follow-up según el contexto de la conversación.

## Transferencia con Resumen Automático

Al transferir a equipo humano, la IA puede generar automáticamente un resumen:

1. Edite la acción **"Transferir a Equipo"**
2. Marque: ✅ **"Generar resumen al transferir"**
3. Guarde

## Buenas Prácticas

### ✅ Haga

- Sea específico en el prompt sobre el comportamiento esperado
- Proporcione ejemplos de respuestas ideales
- Limite el alcance de actuación
- Pruebe exhaustivamente antes de publicar
- Use la pestaña "Preguntas" para identificar vacíos en el contexto

### ❌ Evite

- Prompts vagos o genéricos
- Permitir que la IA invente información
- Dar autonomía excesiva sin supervisión

## Próximos Pasos

- [Herramientas de IA](/es/guide/ai-agents/tools/) - Configure acciones del agente
- [Flujos de Atención](/es/guide/flows/builder) - Integre IA en los flujos
- [Agenda](/es/guide/schedule/) - Configure citas vía IA
- [Configuración](/es/guide/settings/) - Controles de IA
