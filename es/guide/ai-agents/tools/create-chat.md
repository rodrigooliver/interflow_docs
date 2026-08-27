# Crear o continuar chat

Abre una nueva atención (o reutiliza el chat activo) con los datos que la IA recolectó en la conversación.

> Changelog: [v2026.8.20](/es/changelog/2026/08/2026.8.20)

## Para qué sirve

- El cliente indica un número para que lo llamen — la IA abre WhatsApp (o continúa el chat activo) con el contexto de la indicación
- Llega un correo con nombre, teléfono y otros datos — la IA inicia la atención en WhatsApp a partir de esos datos
- Calificar en Instagram y seguir en WhatsApp, ya con etiquetas, embudo y campos completados

**Dónde configurar:** Agentes IA → pestaña **Herramientas** → **Acciones listas** → **Crear o continuar chat**.

## Lo que ya viene listo

| Campo | Descripción |
|-------|-------------|
| **Canal** | Obligatorio. Define el identificador que la IA debe recolectar (WhatsApp, correo, Instagram o Facebook) |
| **Equipo** | Opcional. Equipo de la nueva atención |
| **Iniciar de inmediato** | Solo WhatsApp no oficial (WAHA y equivalentes). El flujo empieza al crear el chat |
| **Cuando el cliente responda** | Cualquier canal. El flujo empieza en la primera respuesta del cliente (en Oficial, después de la plantilla) |
| **Mensaje de contexto** | Independiente del canal, del embudo y de qué flujo eligió. Texto fijo o escrito por la IA; el mismo texto vale para ambos flujos |
| **Etapa del embudo** | Opcional. Mueve al cliente a la etapa elegida después de crear el chat |
| **Mantener pendiente** | Activado por defecto. El chat nuevo no se asigna automáticamente |
| **Mensaje inicial** | Canales de WhatsApp no oficiales (WAHA, EVO, W-API, Z-API). Texto fijo o escrito por la IA |
| **Plantilla** | WhatsApp Oficial. Usted elige una plantilla aprobada del canal (y las variables, si hay) |

Si ya existe un chat activo (`pendiente`, `en atención` o `esperando cierre`) del mismo contacto y canal, el sistema **reutiliza** esa atención.

## Lo que la IA puede pedir

Para cada dato (nombre, WhatsApp, correo, teléfono, documento, Instagram, Facebook):

| Modo | Efecto |
|------|--------|
| **No pedir** | No entra en la herramienta |
| **Opcional** | La IA puede omitirlo; la herramienta igual se ejecuta |
| **Obligatorio** | La IA debe completarlo antes de llamar |

El identificador del canal seleccionado es **siempre obligatorio** (si no, el chat no abre).

El **mensaje de contexto** describe la nueva atención. No depende del canal ni del embudo: usted predefine el texto o deja que la IA lo escriba. Con flujo, contextualiza el inmediato y/o el flujo al responder; sin flujo, queda en el chat como nota.

## Etiquetas y campos personalizados

| Opción | Efecto |
|--------|--------|
| **Etiquetas fijas** | Siempre aplicadas; la IA no elige |
| **La IA elige** | La IA selecciona entre las etiquetas que usted libera (o todas de la organización) |
| **Campo con valor fijo** | Se graba automáticamente; no entra en el schema de la IA |
| **Campo definido por la IA** | La IA lo completa. En lista / selección múltiple, solo valen las opciones registradas |

## Ejemplos

**Indicación de un número**

```text
👤 Cliente: Pueden llamar a Juan al 11 98888-7777, él decide
🤖 IA: Listo — abrí la atención de Juan en WhatsApp
       con el contexto de la indicación.

[Sistema: chat en WhatsApp, contexto: "Indicado por el cliente actual
 para hablar del plan Pro"]
```

**Correo con datos del cliente**

```text
📧 Asunto: Presupuesto — María Silva, 11 99999-9999
🤖 IA: Registré a María e inicié la atención en WhatsApp
       con los datos del correo.

[Sistema: chat en WhatsApp, embudo "Calificado",
 contexto: "Lead del correo pidió presupuesto"]
```

## Limitaciones

- El mensaje inicial y el flujo inmediato solo están en WhatsApp no oficial; en Oficial use plantilla y, si quiere, flujo al responder
- No fuerza un ticket nuevo si ya existe un chat activo en el mismo canal y contacto
- El modelo confirma el registro al cliente; el flujo inmediato empieza en segundo plano
