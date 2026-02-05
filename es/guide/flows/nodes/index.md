# Tipos de Nodos del Constructor de Flujos

Esta sección detalla todos los tipos de nodos disponibles en el Constructor de Flujos de Interflow, sus funcionalidades y cómo configurarlos.

## Nodo Inicial

- [Start (Inicio)](/es/guide/flows/nodes/start) - Punto de entrada del flujo

## Nodos de Envío

Nodos para enviar mensajes y contenido al cliente:

- [Mensaje de Texto](/es/guide/flows/nodes/text) - Envía texto, listas y enlaces
- [Enviar Audio](/es/guide/flows/nodes/audio) - Envía archivos de audio
- [Enviar Imagen](/es/guide/flows/nodes/image) - Envía imágenes con leyenda
- [Enviar Video](/es/guide/flows/nodes/video) - Envía videos
- [Enviar Documento](/es/guide/flows/nodes/document) - Envía PDFs y documentos
- [Enviar Email](/es/guide/flows/nodes/email) - Envía emails vía SMTP

## Nodos de Recepción

Nodos para capturar respuestas del cliente:

- [Esperar Respuesta (Input)](/es/guide/flows/nodes/input) - Captura texto u opciones

## Nodos de Control de Flujo

Nodos para controlar la lógica y direccionamiento:

- [Delay](/es/guide/flows/nodes/delay) - Pausa la ejecución
- [Condición](/es/guide/flows/nodes/condition) - Crea ramificaciones condicionales
- [Aleatorio (Random)](/es/guide/flows/nodes/random) - Distribuye aleatoriamente
- [Saltar A (Jump To)](/es/guide/flows/nodes/jump-to) - Redirige a otro nodo

## Nodos de Datos

Nodos para manipular variables y datos:

- [Definir Variable](/es/guide/flows/nodes/variable) - Define o calcula valores
- [Actualizar Cliente](/es/guide/flows/nodes/update-customer) - Actualiza datos del cliente
- [Solicitud HTTP](/es/guide/flows/nodes/request) - Llama APIs externas

## Nodos de Acciones

Nodos para ejecutar acciones automatizadas:

- [Crear Tarea](/es/guide/flows/nodes/create-task) - Crea tareas automáticamente

## Nodos de IA

Nodos para integración con inteligencia artificial:

- [Agente IA](/es/guide/flows/nodes/agenteia) - Ejecuta agente preconfigurado
- [OpenAI](/es/guide/flows/nodes/openai) - Integración directa con GPT
- [ElevenLabs TTS](/es/guide/flows/nodes/elevenlabs) - Síntesis de voz ElevenLabs
- [Minimax TTS](/es/guide/flows/nodes/minimax) - Síntesis de voz Minimax

## Nodos de Sistema

Nodos para acciones internas y organización:

- [Mensaje de Sistema](/es/guide/flows/nodes/system-message) - Mensaje interno
- [Nota Privada](/es/guide/flows/nodes/private-note) - Agrega nota a la atención
- [Cerrar Atención](/es/guide/flows/nodes/close-attendance) - Cierra la atención
- [Grupo](/es/guide/flows/nodes/group) - Agrupa nodos visualmente

## Nodos de Ventas

Nodos específicos para el módulo de ventas:

- [POS (Punto de Venta)](/es/guide/flows/nodes/pos) - Integración con sistema de ventas

## Visión General de los Nodos

| Nodo | Categoría | Descripción |
|------|-----------|-------------|
| Start | Inicial | Punto de entrada del flujo |
| Texto | Envío | Envía mensaje de texto |
| Audio | Envío | Envía archivo de audio |
| Imagen | Envío | Envía imagen |
| Video | Envío | Envía video |
| Documento | Envío | Envía documento |
| Email | Envío | Envía email |
| Input | Recepción | Espera respuesta |
| Delay | Control | Pausa ejecución |
| Condición | Control | Ramificación lógica |
| Random | Control | Distribución aleatoria |
| Jump To | Control | Redirección |
| Variable | Datos | Define valores |
| Actualizar Cliente | Datos | Actualiza registro |
| Solicitud HTTP | Datos | Llama APIs |
| Crear Tarea | Acciones | Crea tareas |
| Agente IA | IA | Ejecuta agente |
| OpenAI | IA | Integración GPT |
| ElevenLabs | IA | Síntesis de voz |
| Minimax | IA | Síntesis de voz |
| Mensaje Sistema | Sistema | Mensaje interno |
| Nota Privada | Sistema | Nota en la atención |
| Cerrar | Sistema | Cierra atención |
| Grupo | Sistema | Organización visual |
| POS | Ventas | Sistema de ventas |

## Próximos Pasos

- [Constructor de Flujos](/es/guide/flows/builder)
- [Disparadores de Flujo](/es/guide/flows/triggers)
- [Variables](/es/guide/flows/variables)
