---
title: Copiloto
description: Asistente dentro del sistema para el usuario conectado. Consulta la pantalla, la documentación y los datos que ya puedes ver, y solo modifica en modo agente.
---

# Copiloto

El copiloto es tu asistente dentro de Interflow. Responde dudas de uso, lee lo que hay en la pantalla y, en modo agente, ejecuta acciones con el mismo permiso de tu cuenta.

No habla con el cliente en lugar del [Agente IA](/es/guide/ai-agents/). El Agente IA atiende en el canal. El copiloto ayuda a quien opera el sistema.

::: tip Acceso
Botón **Copiloto**, en el borde de la pantalla, en cualquier página de la app.
:::

> Changelog: [v2026.9.14](/es/changelog/2026/09/2026.9.14)

## Cómo abrirlo

1. Haz clic en **Copiloto**
2. Elige el modo en el selector, junto al campo de mensaje
3. Escribe el pedido en lenguaje común

Si ya estás en una atención, queda adjunta a la conversación. Puedes quitar ese adjunto. Fuera de un chat, pide por el nombre del cliente para encontrar la conversación.

## Modos

| Modo | Qué hace |
|------|----------|
| **Pregunta** | Solo consulta. No guarda, no envía y no mueve etapa |
| **Agente** | Puede cambiar datos, pero la acción queda propuesta hasta que confirmes en el panel |
| **Agente directo** | Cambia en el momento, sin pedir confirmación |

En modo pregunta, si pides guardar o enviar, explica lo que haría y pide cambiar de modo. No dice que ya lo ejecutó.

## Qué consulta

- La página abierta: lista, ficha, campos y botones visibles
- La documentación del producto, con el enlace de la página
- Atenciones por el nombre del cliente, y los mensajes de la atención adjunta
- Tareas de los proyectos en los que participas, agenda, embudos, etiquetas y campos del cliente

La consulta respeta tu acceso. Lo que no puedes ver en el sistema, tampoco lo muestra.

Cuando la respuesta ya está en la pantalla, señala el control en lugar de cambiar de página. Si el camino está en el menú, indica el ítem o abre la pantalla.

## Qué puede cambiar

Solo en **Agente** y **Agente directo**, y solo si tu cuenta tiene ese permiso:

- Crear, actualizar o eliminar una tarea. Si hay más de un proyecto o etapa, pregunta cuál
- Consultar, crear, actualizar o eliminar una cita
- Actualizar datos del cliente, incluido el valor de venta y los campos personalizados
- Añadir o quitar una etiqueta. Lista las etiquetas antes de guardar
- Mover al cliente de etapa en el embudo, después de comparar lo que dijiste con embudos y etapas
- Enviar o programar un mensaje en la atención adjunta
- Crear una [solicitud](/es/guide/deployments): comprueba si el producto ya lo hace, presupuesta las cuatro urgencias y guarda el pedido con la urgencia que elijas
- Hacer clic y rellenar campos de la pantalla actual. La contraseña no se rellena

El nombre, el correo o el WhatsApp de la organización solo cambian para un superadmin.

Si varios clientes tienen un nombre parecido, pregunta cuál antes de abrir.

## Modelo y saldo

En el menú junto al modo puedes elegir:

- El **modelo** (modelos de Interflow, o DeepSeek si la organización tiene esa integración)
- El esfuerzo de razonamiento: **Bajo**, **Medio** o **Alto**
- Quién paga la llamada: **Saldo Interflow** o una integración tuya

Con saldo Interflow, la conversación se detiene cuando se acaban los créditos de IA. El uso aparece en **Configuración** → créditos de IA, como **Copiloto**.

## Límites

- No inventa tarea, cita, proyecto, etapa, etiqueta ni responsable
- No rellena contraseñas
- No actúa fuera del permiso de tu cuenta
- Una ficha muy detallada (cliente, tablero de la tarea, agenda) puede abrirse en la pantalla en lugar de editarse campo a campo
- Cada lista grande se lee por partes. No vuelca el historial entero de una vez
