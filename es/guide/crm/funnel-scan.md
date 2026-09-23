# Barrido del embudo

El barrido lee la conversación y decide si el cliente sigue en la etapa actual o pasa a una etapa permitida.

::: tip Acceso
**CRM** → **Embudos** → **Barrido**.
:::

> Changelog: [v2026.9.13](/es/changelog/2026/09/2026.9.13)

## Qué usa la lectura

Cada decisión recibe:

- **Contexto del negocio** — qué vende la empresa y qué cuenta como interés
- **Reglas** — por ejemplo, el interés solo vale en este negocio; otro tema va a una etapa con nombre
- La fecha de hoy y la fecha de cada mensaje
- La etapa actual
- Los mensajes recientes, en el modo que elijas

Los destinos posibles son **mantener** o una de las **etapas de destino**. El cambio automático solo ocurre si la etapa sugerida es otra, la probabilidad supera el mínimo y la lectura puede cambiar a ese cliente.

La frase de interés y el motivo del cambio usan el modelo de la organización. La elección de la etapa es una decisión aparte, solo entre las opciones configuradas.

## Quién entra en la rutina

La rutina diaria solo incluye clientes que:

- Están en una **etapa de origen** marcada. Sin ninguna, nadie entra
- Pasan el tipo de cliente y el mínimo de interacciones, si activaste esos filtros
- Tuvieron un mensaje nuevo desde la última lectura **o** superaron el plazo **Revisar de nuevo después de**

El plazo por defecto es **7 días**. El reloj vuelve a empezar después de cada lectura y también después de un cambio manual de etapa. Deja el campo vacío para incluir solo a quien tuvo un mensaje nuevo.

Un cambio manual reciente no se deshace en el momento. En la rutina, después del plazo, esa persona se vuelve a leer y puede cambiar de etapa.

## Contexto de los mensajes

Junto a la cantidad de mensajes:

| Opción | Qué entra |
|--------|-----------|
| Solo el cliente | Solo mensajes del cliente. La cantidad cuenta esos mensajes. Es el valor por defecto |
| Cliente y la última respuesta del agente | Los mensajes del cliente más la respuesta más reciente del agente |
| Cliente y agente | La conversación de los dos, hasta el límite |

## Cola

A la hora configurada, la rutina arma la cola con el filtro guardado y después lee **un cliente a la vez**. El filtro no se vuelve a aplicar en medio de la cola.

Si varias organizaciones coinciden en la misma hora, entran en secuencia. La que espera aparece como **Esperando**. Cuando una termina, se pausa o falla, empieza la siguiente. Un disparo manual entra en la misma secuencia.

En la cola puedes:

- **Pausar** y **Continuar** sin esperar al día siguiente
- **Repetir fallos** — solo vuelve quien falló; movidos y mantenidos se quedan así hasta una rutina futura
- Filtrar **Para transferir** — quien tiene chat, etapa sugerida y todavía no se movió
- **Transferir** después de confirmar
- Abrir el **chat** y el **cliente** en un modal
- **Recargar**. El filtro y la página quedan en la dirección

Crear la cola de una etapa usa esa etapa, aunque no esté en el origen de la rutina. **Iniciar** en una fila lee solo a esa persona.

## Limitaciones

- Sin etapa de origen y de destino, la rutina diaria no se activa
- La lectura automática no elige una etapa fuera de la lista de destino
- Quien ya se movió o se mantuvo en esa cola solo vuelve en una rutina futura, con mensaje nuevo o con el plazo vencido
