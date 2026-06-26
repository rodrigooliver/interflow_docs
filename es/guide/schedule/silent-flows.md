# Flujos silenciosos por estado

Automatice procesos **internos** en cada cambio de estado de la cita — sin enviar mensajes al cliente.

## Diferencia respecto a las notificaciones

| Recurso | Comunicación con el cliente | Dónde configurar |
|---------|----------------------------|------------------|
| **Plantillas de notificación** | Sí (WhatsApp, e-mail o flujo visible) | Pestaña **Notificaciones** |
| **Flujos silenciosos** | No — ejecución en segundo plano | Pestaña **Flujos silenciosos** |

Use notificaciones cuando el cliente debe ser avisado. Use flujos silenciosos para integraciones, registros internos, tareas o alertas del equipo.

## Acceder a la configuración

1. En el menú, haga clic en **Agenda**
2. Abra la agenda deseada y haga clic en **Gestionar**
3. Seleccione la pestaña **Flujos silenciosos**

En la misma barra de pestañas están **Profesionales y servicios**, **Disponibilidad**, **Feriados**, **Notificaciones** y **Flujos silenciosos**.

## Crear el flujo

1. En la pestaña **Flujos silenciosos**, haga clic en **Crear flujo de cita**
2. Indique nombre y descripción — el tipo **Cambio de estado de cita** ya viene seleccionado
3. Tras crear, será dirigido al editor para montar la automatización
4. Vuelva a la pestaña **Flujos silenciosos** y asocie el flujo al estado deseado

También puede crear flujos manualmente en **Flujos** → tipo **Cambio de estado de cita**.

## Asociar flujos a los estados

Para cada estado operacional, elija opcionalmente un flujo en el selector:

| Estado | Cuándo se dispara |
|--------|-------------------|
| **Agendado** | Creación o transición a agendado |
| **Confirmado** | Confirmación de la cita |
| **Atención iniciada** | Inicio de la atención |
| **Completado** | Conclusión |
| **Cancelado** | Cancelación |
| **No se presentó** | Marcado como no-show |

Con un flujo seleccionado, use el botón **Editar** (✏️) junto al selector para abrir el editor.

Haga clic en **Guardar** para persistir las asociaciones de la agenda.

## Variables en el flujo

Al dispararse, el flujo recibe variables de contexto:

```
appointment_id              → ID de la cita
appointment_status          → Nuevo estado
appointment_previous_status → Estado anterior (vacío en la creación)
schedule_id                 → ID de la agenda
```

## Restricciones del tipo de flujo

Los flujos **Cambio de estado de cita** no permiten nodos que esperan respuesta del cliente (`input` / `interactive`), porque la ejecución es silenciosa y en segundo plano.

## Operaciones masivas

**Citas recurrentes** e **importación de calendario (.ics)** muestran un aviso en el formulario: las operaciones masivas **no disparan** notificaciones, flujos silenciosos ni otras automatizaciones por estado, para evitar un volumen excesivo de envíos.

## Cuándo se disparan las automatizaciones

Cada cambio de estado hecho por la interfaz (confirmar, iniciar, concluir, cancelar, check-in en la cola, etc.) pasa por el servidor y puede disparar:

- Plantillas de notificación configuradas
- Flujo silencioso del estado de destino (si existe)

::: tip 💡 Consejo
Configure un flujo silencioso en **Completado** para crear una tarea de seguimiento interno, y una plantilla de notificación en **Completado** para agradecer al cliente — cada uno con su propósito.
:::

## Próximos pasos

- [Agenda — visión general](/es/guide/schedule/) — recursos generales del módulo
- [Flujos de atención](/es/guide/flows/builder) — editor de flujos
- [Changelog v2026.6.10](/es/changelog/2026/06/2026.6.10) — detalles de esta release
