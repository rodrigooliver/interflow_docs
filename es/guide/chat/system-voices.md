# Voces del sistema

Genere audio a partir del texto en la atención, con las voces registradas de la organización.

> Changelog: [v2026.10.11](/es/changelog/2026/10/2026.10.11) · [v2026.10.9](/es/changelog/2026/10/2026.10.9) · [v2026.8.24](/es/changelog/2026/08/2026.8.24)

## Para qué sirve

- Enviar audio con la voz de la marca, sin grabar en el micrófono
- Estandarizar tono, velocidad y proveedor entre atendentes
- Guardar el guion en el mismo mensaje, como transcripción
- Usar la misma voz en las [respuestas en audio del Agente IA](/es/guide/ai-agents/#respuesta-en-audio)

## Dónde acceder

| Área | Ruta |
|------|------|
| **Registrar voces** | Menú lateral → **Voces** |
| **Usar en el chat** | Campo de mensaje → **Grabar desde texto** |
| **Usar en el Agente IA** | Agente IA → pestaña **Envío** → **Responder con audio** |

El botón del chat solo aparece si hay al menos una voz **activa** y el canal acepta audio.

## Catálogo Interflow

En **Voces** hay dos pestañas:

| Pestaña | Qué hace |
|---------|----------|
| **Catálogo** | ElevenLabs (búsqueda, idioma, género, edad y categoría) y Gemini (30 voces listas y elección del modelo). La muestra gratis de ElevenLabs no descuenta créditos. **Probar texto** genera un MP3 con las opciones elegidas y consume créditos |
| **Mis voces** | Presets de la organización. La búsqueda y **Nueva voz** están en esta pestaña |

**Usar esta voz** guarda el preset en **Mis voces**, disponible en el chat y en el Agente IA. El modelo inicial es Flash v2.5. En el formulario, cada modelo muestra el precio por 1K caracteres.

Generar audio con una voz del catálogo descuenta los **créditos de IA**:

| Modelos | Precio |
|---------|--------|
| Flash v2.5, v4 Turbo y v3 Conversacional | US$ 0,13 por 1K caracteres |
| v4, v3 y Multilingual v2 | US$ 0,26 por 1K caracteres |

Sin saldo, el audio no se genera. Las voces ligadas a una integración propia siguen en esa clave, sin débito. MiniMax todavía no está en el catálogo.

## Gemini

En la pestaña **Gemini**, elija el modelo arriba. **General** usa Gemini 2.5 Flash TTS. **Probar texto** abre un campo ya relleno. El audio sigue la voz de la tarjeta y el modelo elegido.

En **Mis voces** y en el formulario, **Probar texto** usa el modelo, la voz y las demás opciones guardadas o en edición. La misma prueba existe para ElevenLabs, OpenAI y Minimax.

El archivo sale en MP3. La API de Gemini entrega PCM o WAV; Interflow lo convierte antes de guardar.

## Requisito previo

Registre una integración de TTS en **Configuración**:

| Proveedor | Uso |
|-----------|-----|
| OpenAI | Voces y modelos de speech de OpenAI |
| ElevenLabs | Voces de la cuenta ElevenLabs |
| Minimax | Voces e idioma de la cuenta Minimax |
| Gemini | Voces listas, modelo TTS y estilo en texto. La misma clave de la [integración Gemini](/es/guide/integrations/gemini) |

Son los mismos proveedores de los nodos de audio del flujo.

## Registrar una voz

Admin y owner crean, editan y eliminan. Los demás miembros solo usan las voces activas.

1. Abra **Voces** → **Nueva voz**
2. Ponga un nombre (ej.: Atendente femenina)
3. Elija la integración — el proveedor viene de ella
4. Ajuste voz, modelo, velocidad y los demás campos del proveedor
5. Déjela **Activa** y guarde

Una voz inactiva desaparece del botón del chat, pero sigue en la lista para reactivarla después.

Para copiar una voz, use **Duplicar** en la tarjeta o en el formulario de edición. Abre una voz nueva con los mismos datos y el nombre `(copia)` — ajuste y guarde.

## Usar en la atención

1. Escriba el texto en el campo del mensaje
2. Haga clic en **Grabar desde texto**
   - **Una** voz activa: genera al instante
   - **Dos o más**: elija la voz en el menú
3. El audio entra como vista previa; el guion se recoge
4. **Editar** abre el texto de nuevo; **Regenerar** genera otro archivo con la misma voz
5. Envíe

Quitar la vista previa elimina el archivo generado. Regenerar también sustituye el archivo anterior.

## Qué recibe el cliente

En Interflow el mensaje es **uno**: audio + texto como transcripción.

En WhatsApp (y canales de voz sin leyenda en el audio), el cliente **solo oye** el audio. El guion no se envía como un mensaje de texto aparte.

## Limitaciones

- Sin voz activa, el botón no aparece
- Sin texto en el campo, no genera
- Los canales que no envían audio no muestran el botón
- Solo admin y owner cambian el catálogo de voces
