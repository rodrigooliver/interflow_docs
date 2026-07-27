# Transcripción de audios

Convierta automáticamente audios de las conversaciones en texto, con controles por canal.

## Qué es

Cuando un audio llega o se envía en la atención, Interflow puede generar una **transcripción en texto** con IA (OpenAI Whisper). El texto:

- Aparece junto al mensaje de audio en la conversación
- Entra en el contexto del **Agente de IA** y del asistente
- Facilita la lectura rápida y las búsquedas en el historial

## Requisitos

- Canal con la opción de transcripción deseada **activada**
- Integración **OpenAI** activa **o** saldo de **créditos de IA** de la organización

Sin clave OpenAI ni créditos, el audio se guarda con normalidad, pero **sin** texto de transcripción.

## Configuraciones por canal

En **Canales** → editar el canal:

| Configuración | Predeterminado | Alcance |
|---------------|----------------|---------|
| **Transcribir audios del cliente** | Activado | Audios enviados por el cliente |
| **Transcribir audios del agente** | Desactivado | Audios enviados por el agente en Interflow o en la app del canal |
| **Transcribir audios en grupos** | Desactivado | Solo **WhatsApp WAHA**, cuando los grupos están habilitados |

### Canales antiguos

Si la configuración aún no se ha guardado:

- Cliente: permanece **activado** (comportamiento anterior)
- Agente y grupos: permanecen **desactivados** hasta la activación manual

### Audio enviado desde el celular del agente

Para que el audio enviado fuera de Interflow (por WhatsApp del celular) se almacene y transcriba:

1. Active la subida de medios enviados por WhatsApp / medios externos en el canal
2. Active **Transcribir audios del agente**

Sin la subida del medio, no hay archivo para transcribir.

### Grupos (WhatsApp WAHA)

Por defecto, los audios de grupo **no** se transcriben (los grupos suelen no usar IA). Para habilitar:

1. Active **Habilitar grupos** en el canal WAHA
2. Active **Transcribir audios en grupos**
3. Mantenga las opciones de cliente y/o agente según corresponda

## Uso diario

1. Configure el canal según la tabla anterior
2. Al recibir o enviar un audio elegible, espere la transcripción
3. Lea el bloque **Transcripción** debajo del reproductor de audio
4. Use el texto en el historial y en el contexto de la IA

## Créditos y costo

Cuando la organización usa la clave Interflow (créditos de IA), la transcripción consume créditos del tipo **Transcripción de Audio**, según la duración. Con clave OpenAI propia, el uso sigue la cuenta OpenAI del cliente.

## Limitaciones

- El fallo de la transcripción **no** impide el envío o la recepción del audio
- Audios muy largos o de mala calidad pueden generar texto incompleto
- En grupos WAHA, la transcripción solo ocurre con **Transcribir audios en grupos** activo

## Relacionado

- [WhatsApp WAHA](/es/guide/channels/whatsapp-waha) — grupos y medios
- [Changelog v2026.7.15](/es/changelog/2026/07/2026.7.15)
