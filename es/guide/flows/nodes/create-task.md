# Nodo: Crear Tarea

Crea una tarea automáticamente durante la ejecución del flujo.

## Visión General

El nodo **Crear Tarea** permite automatizar la creación de tareas en el módulo de Tareas, vinculándolas automáticamente al cliente y a la conversación actual. Ideal para estandarizar procesos y garantizar que ninguna acción importante sea olvidada.

## Configuraciones

### Campos Disponibles

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| **Proyecto** | Sí | Proyecto donde se creará la tarea |
| **Etapa** | Sí | Etapa inicial de la tarea en Kanban |
| **Título** | Sí | Título de la tarea (soporta variables) |
| **Descripción** | No | Descripción detallada (soporta variables) |
| **Prioridad** | No | Baja, Media o Alta |
| **Estado** | No | Pendiente, En Progreso, Completada o Cancelada |
| **Vencimiento** | No | Plazo en horas después de la creación |
| **Responsable** | No | Miembro del proyecto responsable |
| **Checklist** | No | Lista de elementos de verificación |

### Proyecto

Seleccione el proyecto donde se creará la tarea. Solo se listan los proyectos de la organización.

### Etapa

Después de seleccionar el proyecto, elija la etapa inicial del Kanban donde aparecerá la tarea.

### Título

Defina el título de la tarea. Soporta variables para personalización dinámica:

```
Soporte - {{customer.name}}
```

### Descripción

Agregue detalles sobre la tarea. Soporta variables:

```
Cliente: {{customer.name}}
Teléfono: {{customer.phone}}
Problema reportado: {{input.problema}}
```

### Prioridad

| Valor | Descripción |
|-------|-------------|
| **Baja** | Tareas de rutina |
| **Media** | Tareas normales (predeterminado) |
| **Alta** | Tareas urgentes |

### Estado

| Valor | Descripción |
|-------|-------------|
| **Pendiente** | Esperando inicio (predeterminado) |
| **En Progreso** | En curso |
| **Completada** | Finalizada |
| **Cancelada** | Cancelada |

### Vencimiento

Defina el plazo en **horas** después de la creación de la tarea:

| Ejemplo | Descripción |
|---------|-------------|
| 24 | 1 día |
| 48 | 2 días |
| 72 | 3 días |
| 168 | 1 semana |

### Responsable

Seleccione un miembro del proyecto para ser el responsable de la tarea. El responsable será notificado cuando se cree la tarea.

### Checklist

Agregue elementos de verificación que deben completarse. Cada elemento soporta variables:

```
- Analizar problema reportado
- Contactar cliente {{customer.name}}
- Verificar historial de atenciones
- Resolver pendiente
- Retornar al cliente
```

## Uso de Variables

Los campos de texto (título, descripción y checklist) soportan variables del flujo:

### Variables del Cliente

```
{{customer.name}}       - Nombre del cliente
{{customer.phone}}      - Teléfono
{{customer.email}}      - Email
{{customer.cpf}}        - CPF (si está registrado)
```

### Variables de Input

```
{{input.nombre_variable}} - Valor capturado por un nodo Input
```

### Variables Personalizadas

```
{{variable_definida}}   - Variable definida en el flujo
```

## Conexiones

| Handle | Posición | Descripción |
|--------|----------|-------------|
| Entrada | Izquierda | Recibe conexión del nodo anterior |
| Salida | Derecha | Continúa después de crear la tarea |

## Datos Automáticos

El nodo vincula automáticamente a la tarea:

- **Cliente** - Cliente de la atención actual
- **Conversación** - Chat/conversación donde se ejecuta el flujo
- **Organización** - Organización del flujo

## Ejemplos de Uso

### Soporte Técnico

Crear tarea cuando el cliente reporta un problema:

```
[Input] → Describa el problema
[Crear Tarea] → Proyecto: Soporte Técnico
                Etapa: Triaje
                Título: Soporte - {{customer.name}}
                Descripción: {{input.problema}}
                Prioridad: Alta
                Vencimiento: 24 horas
                Checklist:
                  - Analizar problema
                  - Resolver
                  - Retornar al cliente
```

### Programación de Seguimiento

Crear tarea de follow-up:

```
[Texto] → ¡Nos pondremos en contacto pronto!
[Crear Tarea] → Proyecto: Comercial
                Etapa: Follow-up
                Título: Retornar - {{customer.name}}
                Descripción: Cliente demostró interés en {{input.producto}}
                Prioridad: Media
                Vencimiento: 48 horas
                Responsable: Juan García
```

### Calificación de Lead

Crear tarea al calificar lead:

```
[Condición] → Si interés = "alto"
[Crear Tarea] → Proyecto: Ventas
                Etapa: Leads Calientes
                Título: Lead Calificado - {{customer.name}}
                Prioridad: Alta
                Vencimiento: 24 horas
                Checklist:
                  - Enviar propuesta
                  - Agendar reunión
                  - Negociar valores
```

### Solicitud de Servicio

```
[Input] → ¿Qué servicio desea solicitar?
[Input] → ¿Cuál es la urgencia? (baja/media/alta)
[Crear Tarea] → Proyecto: Servicios
                Etapa: Nuevas Solicitudes
                Título: {{input.servicio}} - {{customer.name}}
                Prioridad: {{input.urgencia}}
                Vencimiento: 72 horas
```

## Buenas Prácticas

::: tip Títulos Descriptivos
Use títulos que identifiquen rápidamente el contenido de la tarea, incluyendo el nombre del cliente.
:::

::: tip Checklists Estandarizados
Cree checklists que garanticen que todas las etapas del proceso sean seguidas.
:::

::: tip Plazos Realistas
Defina plazos que permitan la ejecución adecuada de la tarea sin crear urgencia innecesaria.
:::

::: tip Responsables Definidos
Siempre que sea posible, defina un responsable para evitar que las tareas queden sin dueño.
:::

::: tip Variables Contextuales
Use variables para crear tareas personalizadas con información recopilada durante la atención.
:::

## Restricciones

::: warning Atención
- El proyecto y etapa son obligatorios
- El título es obligatorio y debe tener al menos 3 caracteres
- La tarea solo se crea si el flujo ejecuta con éxito hasta este nodo
:::

## Próximos Pasos

- [Nodo: Actualizar Cliente](/es/guide/flows/nodes/update-customer)
- [Nodo: Nota Privada](/es/guide/flows/nodes/private-note)
- [Nodo: Cerrar Atención](/es/guide/flows/nodes/close-attendance)
