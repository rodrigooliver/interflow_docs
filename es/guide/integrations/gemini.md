# Integración con Gemini

Gemini entra en la conversación (agente, prueba de prompt y copiloto) y en las voces del sistema. La misma clave sirve para los dos.

Con la clave de la organización, Google cobra esa cuenta. Sin clave, los modelos Gemini del catálogo Interflow usan el saldo de créditos de IA, en la tarifa Standard.

## Clave

1. Cree una clave en [Google AI Studio](https://aistudio.google.com/apikey)
2. En Interflow, abra **Configuración** → **Integraciones** → **Gemini**
3. Valide la clave y guarde

## Conversación

En el agente, elija la integración Gemini y un modelo de la lista. Con créditos Interflow, los mismos modelos aparecen en el catálogo, sin integración.

En **Parámetros**, lo que vale para Gemini es el **nivel de razonamiento** (bajo, medio o alto) y el **máximo de tokens**. Ese límite incluye los tokens del razonamiento. La temperatura, la verbosidad y el resumen configurable de OpenAI no aplican. En la prueba del prompt, el resumen de lo que el modelo pensó aparece mientras se genera la respuesta. Al cliente solo llega la respuesta.

En el copiloto, los mismos niveles bajo, medio y alto valen para Gemini. La respuesta llega en streaming y el resumen del razonamiento aparece en el panel. En Gemini 3 el nivel es el de la API (`low`, `medium`, `high`). El 3.8 no acepta el nivel mínimo. En 2.5 el nivel se vuelve un presupuesto de tokens. El 2.5 Flash-Lite en bajo no razona.

Precios de referencia, USD por 1 millón de tokens (entrada / salida), tarifa Standard hasta el 31/12/2026: Flash 3.8/3.7/3.6 a 0,75 / 3,75; 3.5 Flash a 1,50 / 9,00; 3.5 Flash-Lite a 0,30 / 2,50; 3.1 Flash-Lite a 0,25 / 1,50; Gemini 3 Flash a 0,50 / 3,00; 3.1 Pro a 2,00 / 12,00; 2.5 Pro a 1,25 / 10,00; 2.5 Flash a 0,30 / 2,50; 2.5 Flash-Lite a 0,10 / 0,40.

Desde el 01/01/2027 Google duplica el precio de Flash 3.6, 3.7 y 3.8. Los prompts Pro por encima de 200 mil tokens usan la franja alta.

## Voz

En **Voces** → **Catálogo** → **Gemini**, elija el modelo (o **General**, que usa 2.5 Flash TTS) y pulse **Probar texto**. El campo ya viene con una frase. El audio sigue la voz y el modelo elegidos y sale en MP3.

**Usar esta voz** guarda el preset. En **Mis voces** y en el formulario, **Probar texto** repite la prueba con las opciones de esa voz. El mismo cuadro existe en ElevenLabs.

La voz puede usar la clave de la integración o el saldo Interflow. El cargo sigue los tokens de texto y de audio que informa la API.

> Changelog: [v2026.10.11](/es/changelog/2026/10/2026.10.11)
