# Ejecutar en un mensaje

Dispare un Agente IA a partir de **un mensaje** del chat, sin iniciar un flujo.

> Changelog: [v2026.8.23](/es/changelog/2026/08/2026.8.23)

## Para qué sirve

- Clasificar o extraer datos de un audio, correo o texto puntual
- Actualizar ficha, etiquetas o embudo con las herramientas del agente
- Responder en el chat solo si el agente está configurado para enviar mensajes

**Dónde acceder:** menú del mensaje (icono de tres puntos) → **Ejecutar agente IA**.

## Qué cambia respecto al flujo

| En el flujo | En esta acción |
|-------------|----------------|
| El agente lee los últimos N mensajes del chat | Lee **solo el mensaje elegido** |
| Crea o continúa una sesión de flujo | **No** crea sesión y **no** altera un flujo ya activo |
| Avanza al siguiente nodo | Termina cuando el agente concluye |

Fecha, canal, datos del cliente, skills, base de conocimiento y herramientas listas siguen iguales a las del prompt.

## Cómo usarla

1. Abra la conversación
2. En el menú del mensaje del **cliente** o del **agente**, haga clic en **Ejecutar agente IA**
3. Busque el agente (lista en orden alfabético)
4. Seleccione y confirme

La acción **no** aparece en nota privada, evento de sistema ni chat programado.

## Envío de mensajes

El prompt decide si algo llega al cliente:

- **Enviar mensajes por el agente** activo — la respuesta entra en el chat
- Desactivado — el agente solo actúa en el cliente y en la atención (CRM, etiquetas, transferencia, crear chat, etc.)

## Permiso

Sigue la misma regla de **iniciar flujo**: admin y owner siempre pueden. Si la organización impide flujo durante la atención, los demás usuarios tampoco ejecutan el agente en ese caso.

## Limitaciones

- No navega nodos del flujo (`ir a nodo`). La acción **Iniciar flujo**, si existe en el prompt, aún puede iniciar un flujo de verdad
- Transferir a equipo o “no supo responder” **no** pausa un flujo que ya esté activo en el chat
