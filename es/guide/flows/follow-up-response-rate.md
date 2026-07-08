# Punto de Control

Mide el volumen de paso y la tasa de respuesta en puntos específicos de tu flujo.

## ¿Qué es?

El **Punto de Control** (checkpoint) es un nodo no bloqueante que colocas explícitamente en el flujo para registrar eventos de analytics. A diferencia del modelo anterior (que intentaba inferir follow-ups automáticamente a partir del timeout de la sesión), el Punto de Control te da control total sobre **dónde** y **qué** medir.

El nodo está en la categoría **📊 Estadísticas** del panel lateral del Constructor de Flujos. Cuando la conversación pasa por él, el flujo **continúa inmediatamente** al siguiente nodo — el registro ocurre en segundo plano, sin bloquear la atención.

## ¿Para qué sirve?

- Saber **cuántas conversaciones pasan** por un punto específico del flujo (volumen)
- Medir si el cliente **responde** dentro de una ventana configurable después de pasar por ese punto
- Capturar un **snapshot de las variables** del flujo en el momento del paso
- Comparar el desempeño **entre diferentes puntos** del mismo flujo
- Tener un **indicador resumido** en el funnel de ventas, sin abrir reportes detallados

## Configurando el nodo

1. En el **Constructor de Flujos**, abre la categoría **📊 Estadísticas**
2. Arrastra el nodo **Punto de Control** al canvas
3. Conecta la entrada (izquierda) y la salida (derecha) en el flujo
4. Haz clic en el cuerpo del nodo para abrir la configuración:

| Opción | Descripción | Predeterminado al crear |
|--------|-------------|-------------------------|
| **Contabilizar paso (volumen)** | Registra cada paso como evento de volumen (`passed`) | Activado |
| **Rastrear respuesta del cliente** | Inicia la cuenta de la ventana de respuesta; mensajes del cliente dentro del plazo marcan como respondido | Activado |
| **Ventana de respuesta** | Tiempo en minutos (valor fijo) o variable numérica del flujo | 2880 min (48h) |
| **Guardar variables del flujo** | Guarda snapshot de las variables en el momento del paso | Desactivado |

::: tip 💡 ¿Dónde colocarlo?
Coloca el Punto de Control **después** del nodo que envía el mensaje de follow-up (o reengagement) y **antes** de la siguiente rama del flujo. Así mides exactamente el impacto de ese mensaje.
:::

### Ventana de respuesta

La ventana define cuánto tiempo el sistema espera la respuesta del cliente después de pasar por el punto de control. Puede configurarse en tres niveles (en cascada):

1. **En el propio nodo** — valor fijo en minutos o variable numérica del flujo (recomendado)
2. **En el flujo** — campo legado `followup_response_window_hours` (aún aceptado por el backend, pero eliminado de la interfaz)
3. **En la organización** — en **Configuración → Organización**, campo **Ventana de respuesta de follow-up** (predeterminado: 48h)

Si no hay ningún valor configurado, el sistema usa **48 horas (2880 minutos)**.

## ¿Qué cuenta como "respuesta"?

Cualquier mensaje enviado por el cliente **después de pasar por el Punto de Control**, siempre que esté dentro de la **ventana de respuesta** configurada. Si el cliente no responde dentro de la ventana, el evento se marca como **expirado** (sin respuesta).

| Estado | Significado |
|--------|-------------|
| **Paso** (`passed`) | Volumen registrado sin rastrear respuesta (solo "Contabilizar paso" activado) |
| **Esperando** (`waiting`) | Punto de control con rastreo de respuesta activo; esperando mensaje del cliente |
| **Respondido** (`responded`) | Cliente envió un mensaje dentro de la ventana de respuesta |
| **Expirado** (`expired`) | La ventana de respuesta terminó sin que el cliente respondiera |

## Visualizando los reportes

### Reporte del flujo completo

1. Abre el flujo en el **Constructor de Flujos**
2. Haz clic en **Analytics de follow-up** en la barra superior
3. El panel muestra:
   - **Pasos registrados** y **follow-ups enviados** (puntos con rastreo de respuesta)
   - **Tasa de respuesta** y **tiempo medio de respuesta**
   - **Evolución en el período** — gráfico con la tasa a lo largo del tiempo
   - **Por nodo** — tabla con nombre del nodo, enviados, respondidos, expirados y tasa

### Reporte de un punto específico

1. En el propio nodo **Punto de Control**, haz clic en **Ver reporte de este punto**
2. El panel se abre ya filtrado para ese nodo (la tabla "Por nodo" queda oculta)

### Filtros disponibles

- **Fecha inicial / final** — restringe el período analizado
- **Canal de atención** — filtra por canal específico
- **Agente responsable** — filtra por agente asignado al chat
- **Actualizar** — botón para recargar los datos manualmente

### Indicador en el Funnel de Ventas

En **CRM → Funnel de Ventas**, una tarjeta resumida muestra la tasa de respuesta consolidada de toda la organización, con el total de eventos en el período.

## Cambio respecto al modelo anterior

En la v2026.7.3, el rastreo automático acoplado al **timeout de "Esperar Respuesta"** y al **reagendamiento del Agente de IA** fue **eliminado**. Ese mecanismo generaba registros incorrectos al confundir el timeout de espera con otros procesos internos del flujo.

A partir de esta versión, **solo los Puntos de Control** colocados explícitamente en el flujo generan métricas. Si ya usabas follow-ups automáticos y quieres seguir midiendo la efectividad, agrega un Punto de Control después de cada mensaje de reengagement.

## Limitaciones y observaciones

- El nodo debe estar **publicado** en el flujo para registrar eventos en producción
- Cambiar la ventana de respuesta **no afecta** eventos ya registrados, solo los nuevos
- Los eventos registrados durante la **prueba de flujo** también entran en las métricas
- El registro es **best-effort**: fallos en la base de datos nunca bloquean el flujo

## Próximos Pasos

- [Constructor de Flujos](/es/guide/flows/builder)
- [Nodo: Esperar Respuesta](/es/guide/flows/nodes/input)
- [Funnel de Ventas (CRM)](/es/guide/crm/customers)
- [Changelog v2026.7.3](/es/changelog/2026/07/2026.7.3)
