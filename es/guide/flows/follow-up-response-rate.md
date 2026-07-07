# Tasa de Respuesta de Follow-up

Haz seguimiento de la efectividad de los follow-ups automáticos enviados por tus flujos.

## ¿Qué es?

Cuando un cliente no responde a tiempo, Interflow puede disparar un **follow-up** automático de dos formas:

- **Timeout del nodo "Esperar Respuesta"**: el nodo Input tiene un tiempo configurado; si el cliente no responde dentro de ese tiempo, el flujo continúa por la salida de **timeout**, lo que normalmente dispara un mensaje de follow-up
- **Reagendamiento del Agente de IA**: una acción del Agente de IA (`changeReturnDate`) reagenda el flujo para reanudarlo en una fecha/hora futura, generalmente para intentar un nuevo contacto

A partir de la v2026.7.3, todo follow-up disparado por estos dos mecanismos se registra automáticamente, y Interflow contabiliza si el cliente respondió (y cuánto tiempo tardó) dentro de una **ventana de respuesta** configurable.

## ¿Para qué sirve?

- Saber si tus follow-ups realmente **funcionan** (generan respuesta) o son ignorados
- Comparar la tasa de respuesta **entre flujos** y **entre nodos** de un mismo flujo
- Seguir la evolución de la tasa de respuesta **a lo largo del tiempo** (por día/semana/mes)
- Tener un **indicador resumido** en el funnel de ventas, sin necesidad de abrir reportes detallados

## ¿Qué cuenta como "respuesta"?

Cualquier mensaje enviado por el cliente **después de que se disparó el follow-up**, siempre que sea dentro de la **ventana de respuesta** configurada (48 horas por defecto). Si el cliente no responde dentro de la ventana, el follow-up se marca como **expirado** (sin respuesta).

| Estado | Significado |
|--------|-------------|
| **Enviado** | Follow-up disparado, esperando que el cliente responda dentro de la ventana |
| **Respondido** | El cliente envió un mensaje dentro de la ventana de respuesta |
| **Expirado** | La ventana de respuesta terminó sin que el cliente respondiera |

## Configurando la ventana de respuesta

La ventana de respuesta se puede definir en dos niveles:

### 1. Predeterminado global (organización)

1. Ve a **Configuración → Organización**
2. Ubica el campo **Ventana de respuesta de follow-up**
3. Define el tiempo en horas (por defecto: **48 horas**)

Este valor se usa para **todos los flujos** que no tengan una ventana específica configurada.

### 2. Sobrescribir por flujo

1. Abre el flujo deseado en el **Constructor de Flujos**
2. Haz clic en el ícono de **engranaje** (⚙️) para abrir la configuración del flujo
3. Completa el campo **Ventana de respuesta de follow-up** con el valor deseado (en horas)
4. Déjalo en blanco para usar el predeterminado global de la organización

::: tip 💡 ¿Cuándo sobrescribir?
Los flujos con follow-ups más urgentes (ej.: confirmación de cita el mismo día) pueden usar una ventana más corta (ej.: 6h), mientras que los flujos de reengagement comercial pueden usar ventanas más largas (ej.: 72h).
:::

## Visualizando los reportes

### Reporte detallado por flujo

1. Abre el flujo en el **Constructor de Flujos**
2. Haz clic en **"Análisis de Follow-up"** en la parte superior del editor
3. El panel muestra:
   - La **tasa de respuesta general** del flujo (respondidos ÷ enviados)
   - **Distribución** por estado (enviado, respondido, expirado)
   - **Tasa de respuesta por nodo de origen** — para identificar qué puntos del flujo generan follow-ups más efectivos
   - **Evolución en el tiempo** — gráfico con la tasa de respuesta por período

### Indicador en el Funnel de Ventas

En **CRM → Funnel de Ventas**, una tarjeta resumen muestra la tasa de respuesta de follow-up consolidada de toda la organización, junto con el total de follow-ups enviados y respondidos en el período.

## Limitaciones y observaciones

- El follow-up debe ser disparado por los mecanismos soportados (timeout del nodo Input o reagendamiento del Agente de IA) para ser contabilizado — los mensajes enviados manualmente por el agente no se incluyen en esta métrica
- Cambiar la ventana de respuesta **no afecta** a los follow-ups ya disparados anteriormente, solo a los nuevos
- Los follow-ups disparados durante la **prueba de flujo** (Constructor de Flujos) también se contabilizan normalmente, permitiendo validar el comportamiento antes de publicar

## Próximos Pasos

- [Constructor de Flujos](/es/guide/flows/builder)
- [Nodo: Esperar Respuesta](/es/guide/flows/nodes/input)
- [Agente IA](/es/guide/flows/nodes/agenteia)
- [Funnel de Ventas (CRM)](/es/guide/crm/customers)
