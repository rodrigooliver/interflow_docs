# Mensajes de ausencia

La pantalla **Mensajes de ausencia** está en Configuración, debajo de Equipos.

## Ausencia individual

Texto predeterminado usado cuando el agente se marca ausente y no guardó un mensaje propio. El modal del agente abre con ese texto. Si guarda otro, vale solo para él.

Cuando el agente de la conversación está offline con el aviso activo, ese mensaje tiene prioridad sobre las reglas de la empresa.

## Reglas generales

Cada regla tiene su propio texto y se edita en un modal.

- **Canales:** búsqueda y selección múltiple de los canales ya creados. Ninguno seleccionado vale para todos.
- **Estado:** en espera, en atención, o ambos si no se marca ninguno.
- **Flujo:** con o sin flujo. "Con flujo" incluye sesión activa, flujo a punto de iniciar (contacto nuevo) o flujo marcado para disparar en la respuesta.
- **Horario:** zona horaria de la regla e intervalos por día. El mismo día no se repite. Sin ningún día, la regla vale siempre. Un intervalo que cruza la medianoche es válido. El fin vacío vale hasta las 23:59.

El orden de la lista es la prioridad. Se envía la primera regla que coincida. Las conversaciones sin agente también pueden recibir la regla.

El mismo chat no recibe otra ausencia automática (individual o de la empresa) durante 30 minutos.

> Changelog: [v2026.10.8](/es/changelog/2026/10/2026.10.8)
