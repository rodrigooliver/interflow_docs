---
title: Telegram Bot
description: Cómo conectar un bot de Telegram y atender mensajes directos y grupos en Interflow.
app: /app/settings/channels/new/telegram
---

# Telegram Bot

El canal **Telegram Bot** recibe y responde conversaciones de un bot creado en Telegram. El cliente habla con el bot. El equipo responde en la bandeja de Interflow.

## Qué no es este canal

No es una cuenta personal de Telegram y no usa el número de celular de alguien del equipo. Los canales de difusión de Telegram también quedan fuera.

## Antes de conectar

1. Ten una cuenta en Telegram
2. La API de Interflow tiene que estar publicada en **HTTPS**. Telegram no entrega mensajes en una dirección local sin HTTPS
3. El plan de la organización tiene que tener el tipo de canal **Telegram Bot** activado

## Crear el bot

1. En Telegram, busca **@BotFather** y abre el chat oficial. Si aparece la lista de comandos, envía `/start` y después `/newbot`
2. BotFather pregunta el nombre. Ese nombre **puede tener espacios**. Un nombre que funciona: `Interflow Bot`
3. Después pide el username. Ese campo **no acepta espacios** y **tiene que terminar en `bot`**
4. Usernames rechazados en ese paso: `Interflow` (no termina en `bot`) e `Interflow Bot` (espacio). Un username aceptado: `Interflow_Bot`. El bot queda en `t.me/Interflow_Bot`
5. Cuando la respuesta sea **Done**, BotFather muestra el token: un número, dos puntos y una clave. Copia solo esa línea
6. No reenvíes el mensaje del token. Quien tiene el token controla el bot. Si se filtró, envía `/revoke` a BotFather y usa el token nuevo

Opcional, todavía en BotFather (`/help` lista los comandos):

- `/setdescription` define la descripción del perfil
- `/setabouttext` define el texto corto "acerca de"
- `/setuserpic` define la foto
- `/setjoingroups` define si el bot puede entrar en grupos
- `/setprivacy` con **Disable** hace que el bot lea todos los mensajes de los grupos en los que está. Con la privacidad activada, el bot solo ve menciones, respuestas a sus mensajes y comandos

## Conectar en Interflow

1. Abre **Configuración → Canales**
2. Haz clic en **Nuevo canal** y elige **Telegram Bot**
3. Completa el nombre del canal, como el equipo lo va a reconocer en la lista
4. Pega el token y guarda
5. Si el token es válido y la dirección de la API es HTTPS, el canal queda conectado y el bot empieza a enviar los mensajes a Interflow

Para cambiar el token o cortar la recepción, abre el canal y usa la pestaña **Conexión**.

## Qué llega a la conversación

| Origen | Qué hace Interflow |
|--------|--------------------|
| Mensaje directo | Crea o reabre la atención de esa persona |
| Grupo | Crea la atención del grupo, si el bot está en él |
| Texto, imagen, vídeo, audio, archivo y sticker estático | Entran en la conversación |
| Mensaje editado | Actualiza el texto ya guardado |

El nombre del cliente sale del nombre y del apellido de Telegram. El username queda en el identificador de la conversación. El id numérico es el que se usa para responder.

## Cómo responde el equipo

En la conversación, envía texto, imagen, vídeo, audio o archivo. No hay ventana de 24 horas: la respuesta puede salir en cualquier momento, dentro de los límites de Telegram.

- Texto: hasta 4096 caracteres
- El pie de un archivo: hasta 1024 caracteres
- No hay icono de entregado o leído. El estado queda en enviado cuando Telegram acepta el mensaje

## Grupos

1. Abre el grupo en Telegram
2. Añade el bot como miembro
3. Si el equipo necesita ver todos los mensajes, y no solo las menciones, apaga la privacidad en BotFather (`/setprivacy` → **Disable**)

El título del grupo es el nombre de la atención. El username de quien escribe en el grupo no sustituye el id del grupo.

## Cambiar o quitar el bot

- **Sustituir el token:** en la pestaña Conexión, pega el token nuevo y guarda. El bot anterior deja de entregar mensajes en este canal
- **Desconectar:** usa **Desconectar**. El bot deja de enviar actualizaciones hasta una nueva conexión
- **Eliminar el canal:** solo es posible cuando no hay conversaciones vinculadas. Borra las atenciones antes, si necesitas quitar el canal

Volver al [changelog v2026.10.35](/es/changelog/2026/10/2026.10.35).
