# Recordatorios push (app y web)

Envíe alertas automáticas al **equipo** antes de cada cita — en la app móvil y el navegador.

## Diferencia con otros recordatorios

| Recurso | Destinatario | Canal | Dónde configurar |
|---------|--------------|-------|-------------------|
| **Recordatorios push** | Profesional + usuarios notificados | App y web (push) | Formulario de la agenda |
| **Plantillas de notificación** | Cliente | WhatsApp, e-mail o flujo | Pestaña **Notificaciones** (gestión de agenda) |
| **Recordatorio "Antes de la cita"** | Cliente | WhatsApp o e-mail | Pestaña **Notificaciones** |

Use recordatorios push cuando el **equipo** necesita un aviso interno. Use plantillas de notificación cuando el **cliente** debe recibir el mensaje.

## Acceder a la configuración

1. En el menú, haga clic en **Agenda**
2. Cree una agenda nueva o edite una existente (**Editar**)
3. Desplácese hasta **Recordatorios push (app y web)**

La configuración está en el mismo formulario de la agenda, junto con **Usuarios notificados** — el campo que define quién además del profesional recibe las alertas.

## Configurar recordatorios

### Activar o desactivar

Marque **Enviar recordatorios push antes de la cita** para habilitar alertas en esta agenda. Desmarque para desactivar sin eliminar los horarios guardados.

**Predeterminado en agendas nuevas:** activado con recordatorio de **1 hora** antes.

### Horarios predefinidos

Seleccione uno o más chips:

| Chip | Antelación |
|------|------------|
| 15 min | 15 minutos antes |
| 30 min | 30 minutos antes |
| 1 h | 1 hora antes |
| 2 h | 2 horas antes |

Haga clic de nuevo en un chip seleccionado para quitarlo.

### Horario personalizado

1. Haga clic en **+ Agregar horario personalizado**
2. Ingrese el valor y elija **minutos** u **horas**
3. Haga clic en **Agregar**
4. Para quitar, haga clic en el chip personalizado (con **×**)

**Límites:**

- Máximo de **5 horarios** en total (presets + personalizados)
- Tiempo máximo de **1 semana** (10.080 minutos) antes de la cita
- No se permiten horarios duplicados

### Usuarios notificados

Encima de la sección push, configure **Usuarios notificados** para incluir gestores, asistentes u otros miembros del equipo. El **profesional** de la cita siempre recibe los recordatorios.

## Qué recibe el destinatario

Cada alerta incluye:

- Nombre del cliente
- Servicio o tipo de cita
- Fecha y hora
- Tiempo restante (ej.: "en 60 min")

El texto se muestra en el **idioma del perfil** de cada destinatario (portugués, inglés o español).

Además de los recordatorios previos a la cita, el equipo también recibe un push al **crear** la cita (cuando aplique).

## Cuándo se actualizan los recordatorios

El sistema recalcula automáticamente los horarios de envío cuando:

- Se **crea** o **modifica** una cita (fecha, hora, profesional)
- Se **guarda** la configuración de recordatorios de la agenda
- Se **cancela** o elimina una cita

Los recordatorios pendientes de citas canceladas se **cancelan** — no se enviarán.

## Requisitos

Para recibir push:

- El usuario debe haber iniciado sesión en la app o la web al menos una vez (el dispositivo queda registrado para recibir push)
- Las notificaciones del navegador o de la app deben estar permitidas en el dispositivo

::: tip 💡 Consejo
Combine un recordatorio push de **1 h** para que el equipo se prepare y una plantilla WhatsApp de **24 h** para que el cliente confirme — cada canal con su propósito.
:::

## Próximos pasos

- [Agenda — visión general](/es/guide/schedule/) — recursos generales del módulo
- [Flujos silenciosos por estado](/es/guide/schedule/silent-flows) — automatizaciones internas por cambio de estado
- [Changelog v2026.6.11](/es/changelog/2026/06/2026.6.11) — detalles de esta release
