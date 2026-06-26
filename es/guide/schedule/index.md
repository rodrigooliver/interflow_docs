# Agenda y Citas

Gestiona citas, agendas y recordatorios automáticos en Interflow.

## Visión General

El módulo de Agenda de Interflow permite gestionar citas, consultas y reuniones integradas al servicio de atención. Con recursos como citas recurrentes, recordatorios automáticos e integración con IA, tu equipo puede ofrecer una experiencia completa a los clientes.

## Accediendo a la Agenda

1. En el menú principal, haz clic en **Agenda** (📅)
2. Elige la visualización deseada (día, semana, mes)
3. Navega entre las fechas usando las flechas o el calendario

## Interfaz de la Agenda

### Visualizaciones Disponibles

| Visualización | Descripción |
|---------------|-------------|
| **Día** | Muestra todas las citas de un único día |
| **Semana** | Muestra 6-7 días con vista expandida |
| **Mes** | Calendario mensual con resumen de citas |

### Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `←` `→` | Navegar entre días |
| `T` | Ir para hoy |
| `N` | Nueva cita |
| `Esc` | Cerrar modal |

## Creando Citas

### Cita Manual

1. Haz clic en el horario deseado, o haz clic en **"Nuevo"**
2. Llena los campos:
   - **Cliente**: Busca o crea uno nuevo
   - **Servicio**: Selecciona el tipo de servicio
   - **Profesional**: Quién atenderá
   - **Fecha y Hora**: Cuándo será la cita
   - **Duración**: Tiempo estimado
   - **Observaciones**: Notas internas
3. Haz clic en **"Guardar"**

### Cita vía Flujo

Configura flujos automatizados para permitir que los clientes agenden directamente por WhatsApp u otros canales. La IA puede:

- Verificar horarios disponibles
- Confirmar fecha y hora
- Enviar confirmación automática

::: tip 💡 Consejo
Usa el nodo de **Agente IA** con la herramienta de agendamiento para ofrecer una experiencia conversacional completa.
:::

## Citas Recurrentes

Crea citas que se repiten automáticamente.

### Cómo Crear

1. Al crear una cita, activa **"Recurrente"**
2. Configura la recurrencia:
   - **Frecuencia**: Diaria, Semanal, Quincenal, Mensual
   - **Días de la semana**: Para recurrencia semanal
   - **Fin**: Después de X ocurrencias o fecha específica
3. Haz clic en **"Crear"**
4. Todas las ocurrencias son creadas automáticamente

### Gestionando Recurrencias

| Acción | Comportamiento |
|--------|----------------|
| **Editar único** | Cambia solo la ocurrencia seleccionada |
| **Editar todos** | Cambia todas las ocurrencias futuras |
| **Eliminar único** | Remueve solo una ocurrencia |
| **Eliminar todos** | Remueve toda la serie |

## Recordatorios Automáticos

Configura mensajes automáticos para recordar a los clientes sus citas.

### Configuración

1. Accede a **Configuraciones** → **Agenda**
2. Localiza la sección **"Recordatorios Automáticos"**
3. Activa los recordatorios deseados:
   - ✅ **48 horas antes**
   - ✅ **24 horas antes**
   - ✅ **2 horas antes** (opcional)
4. Personaliza el modelo de mensaje
5. Guarda las configuraciones

### Comportamiento

- ✅ Enviado solo para citas **confirmadas**
- ❌ No envía si está **cancelada**
- 🔄 Respeta horario comercial configurado
- 📊 Eventos logados para informes

## Integración con IA

### Agendamiento Conversacional

La IA puede gestionar citas de forma natural:

1. **Verificar disponibilidad**: "¿Qué horarios tienen disponibles para mañana?"
2. **Crear cita**: "Quiero marcar para el jueves a las 14h"
3. **Reagendar**: "Necesito cambiar mi cita para la próxima semana"
4. **Cancelar**: "Necesito cancelar mi horario"

### IA Respeta Descansos

La IA automáticamente:
- ❌ **No ofrece** horarios en períodos de descanso
- ❌ **No permite** crear citas en días bloqueados
- ✅ **Explica al cliente** el motivo de la indisponibilidad
- ✅ **Sugiere automáticamente** fechas alternativas

## Importar Eventos

### Importar de Google Calendar

1. Exporta de Google Calendar (archivo `.ics`)
2. En **Agenda** → **Nuevo** → **Importar Eventos**
3. Selecciona el archivo
4. Configura filtro de fecha (opcional)
5. Selecciona agenda y profesional
6. Haz clic en **"Procesar Archivo"**
7. Mapea servicios y estado para cada evento
8. Haz clic en **"Importar Eventos"**

## Estado de las Citas

| Estado | Color | Descripción |
|--------|-------|-------------|
| **Pendiente** | 🟡 Amarillo | Aguardando confirmación |
| **Confirmada** | 🟢 Verde | Cliente confirmó |
| **En progreso** | 🔵 Azul | Servicio iniciado |
| **Completada** | ⚪ Gris | Servicio finalizado |
| **Cancelada** | 🔴 Rojo | Cancelada |
| **No asistió** | ⚫ Negro | Cliente faltó |

## App Mobile

### Recursos en Android

- ✅ Vista semanal de 6-7 días
- ✅ Semana iniciando en domingo
- ✅ Crear y editar eventos
- ✅ Protección contra gestos accidentales
- ✅ Notificaciones de recordatorios

## Automatizaciones por estado

Además de recordatorios y plantillas de notificación (comunicación con el cliente), cada agenda puede tener **flujos silenciosos** — automatizaciones internas que se ejecutan en segundo plano cuando cambia el estado.

| Recurso | Comunicación con el cliente | Dónde configurar |
|---------|----------------------------|------------------|
| Plantillas de notificación | Sí | Pestaña **Notificaciones** |
| Flujos silenciosos | No | Pestaña **Flujos silenciosos** |

> Guía completa: [Flujos silenciosos por estado](/es/guide/schedule/silent-flows)

## Próximos Pasos

- [Flujos silenciosos por estado](/es/guide/schedule/silent-flows) — automatizaciones internas en cada cambio de estado
- [Agentes IA](/es/guide/ai-agents/) — Configura IA para agendamientos
- [Constructor de Flujos](/es/guide/flows/builder) — Automatiza el proceso de agendamiento
- [Informes](/es/guide/reports/) — Métricas de citas




