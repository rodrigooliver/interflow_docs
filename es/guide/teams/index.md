# Equipos

Organiza agentes en grupos, define líderes y configura la distribución automática de conversaciones.

## Visión General

Los equipos agrupan usuarios de la organización para:

- Filtrar conversaciones por grupo en la lista
- Transferir conversaciones entre grupos especializados (ventas, soporte, finanzas)
- Disparar flujos automáticos al recibir una transferencia
- **Distribuir conversaciones automáticamente por rodizio** entre los miembros disponibles

## Acceder a Equipos

1. En el menú principal, ve a **Configuraciones**
2. Haz clic en la pestaña **Equipos**
3. Crea, edita o gestiona miembros de cada equipo

::: tip 💡 Permiso
La gestión de equipos requiere perfil **Owner** o **Admin**.
:::

## Crear y editar equipo

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Identificador del equipo |
| **Descripción** | Documentación interna opcional |
| **Equipo predeterminado** | Destino predeterminado para nuevas conversaciones |
| **Flujo automático** | Flujo tipo *Transferencia de equipo* al transferir un chat a este equipo |

## Miembros del equipo

Cada miembro puede ser **Líder** o **Miembro**. Los líderes pueden ser notificados cuando el rodizio no encuentra agente disponible (configurable).

**Acciones por miembro (menú ⋮):**

| Acción | Efecto |
|--------|--------|
| **Pausa manual** | Miembro ignorado temporalmente en el rodizio |
| **Guardia** | Priorizado incluso fuera del horario (cuando el fallback usa guardia) |
| **Horarios de disponibilidad** | Horario semanal y excepciones por zona horaria |
| **Incluir / Excluir del rodizio** | Quita o recoloca al miembro en la cola automática |
| **Mover arriba / abajo** | Cambia la posición en la fila del rodizio |
| **Definir como próximo** | La próxima conversación distribuida va a este miembro (si está disponible) |

---

## Distribución automática por rodizio {#distribucion-automatica-por-rodizio}

La distribución automática envía conversaciones **pendientes** y **sin agente** al siguiente miembro elegible del equipo, siguiendo el orden configurado.

### ¿Cuándo se activa el rodizio?

Configura uno o más **disparadores**:

| Disparador | Descripción |
|------------|-------------|
| **Nueva conversación** | Chat individual creado y entrando en la cola del equipo |
| **Transferencia de equipo** | Chat transferido a este equipo |
| **Salida del agente** | El agente cierra/sale y el chat vuelve a pending |
| **Nodo de flujo (rodizio)** | Flujo de automatización activa la distribución |

::: info ℹ️ Elegibilidad
El rodizio solo actúa en chats **pendientes**, **sin agente asignado**, de clientes **no spam** que **no sean grupos externos**.
:::

### Modos de asignación

| Modo | Estado del chat | Comportamiento |
|------|-----------------|----------------|
| **Auto-atender** | `in_progress` | Inicia la atención automáticamente para el agente elegido |
| **Reservar agente** | `pending` | Mantiene pendiente, pero ya indica quién debe atender |

#### Modo Auto-atender

- El agente recibe notificación push
- Mensaje de sistema: *"Asignado automáticamente por rodizio a {nombre}"*
- Ideal cuando el equipo debe asumir inmediatamente

#### Modo Reservar agente

- El chat sigue **pendiente** en la cola
- `assigned_to` apunta al agente reservado
- Mensaje de sistema: *"Reservado por rodizio para {nombre}"*
- El agente reservado hace clic en **Atender** cuando esté listo
- Ideal cuando el agente necesita prepararse antes de iniciar

### Reserva bloqueada (modo Reservar agente)

Configura minutos para restringir quién puede atender:

| Campo | Cuándo se aplica |
|-------|------------------|
| **Reserva en horario laboral (min)** | Agente dentro del horario configurado |
| **Reserva fuera de horario (min)** | Fuera del horario, pausa manual o asignación por fallback |

**Con bloqueo activo:**

- Solo el agente reservado puede hacer clic en **Atender**
- Otros miembros ven: *"Reservado para {nombre} hasta {hora}"*
- Tras expirar el plazo, cualquier miembro del equipo puede atender

**Con campos vacíos:**

- La reserva indica al agente, pero **no bloquea** a otros miembros

::: tip 💡 Consejo
Usa un plazo menor en horario laboral (ej.: 5 min) y mayor fuera de horario (ej.: 15 min) cuando el fallback asigne fuera del horario.
:::

### Fallback — cuando nadie está disponible

Si ningún miembro es elegible en horario laboral, el sistema prueba **estrategias en el orden configurado**:

| Estrategia | Descripción |
|------------|-------------|
| **Retry automático** | Reprograma intento tras X minutos |
| **Ignorar horario** | Rodizio fuera del horario (respeta pausa manual) |
| **Guardia** | Solo miembros marcados en guardia |
| **Último agente del cliente** | Quien ya atendió a este cliente |
| **Menor carga** | Agente con menos atenciones en curso |
| **Líder del equipo** | Asigna a un líder disponible |
| **Equipo de overflow** | Transfiere a otro equipo |
| **Cola del equipo** | Mantiene sin agente; puede notificar líderes |

También configura:

- **Intervalo de retry** (minutos)
- **Máximo de intentos** (o ilimitado)
- **Equipo de overflow**
- **Notificar líder si cae en cola**

### Estado del rodizio

En cada tarjeta de equipo con rodizio activo, el panel **Estado del rodizio** muestra:

- **Próximo** — quién recibirá la próxima distribución
- **Último** — quién recibió la última
- **Orden en la cola** — lista completa con badges de disponibilidad

Los gestores pueden usar **⋮ → Definir como próximo** para ajustar manualmente la cola.

### Horarios de disponibilidad

Por miembro, configura:

- **Zona horaria**
- **Horario semanal** (intervalos por día)
- **Excepciones** (festivos, ausencias puntuales)

Fuera del horario, el miembro es **ignorado en rodizio strict** (pero puede alcanzarse vía fallback).

**Prioridades:**

1. Pausa manual → siempre ignorado
2. Guardia → priorizado en fallback `on_call`
3. Horario semanal → define horario laboral
4. Excepciones → bloquean fechas/horas específicas

### Rodizio en flujos de automatización

Usa el nodo **Rodizio** en el constructor de flujos para activar la distribución:

- Puede usar el **equipo actual del chat** o seleccionar otro equipo
- Útil tras triaje automatizado o pasos de bot

---

## Experiencia en lista y chat

### Badge en la lista de conversaciones

Chats pendientes con reserva activa muestran marcador:

| Quién ve | Badge |
|----------|-------|
| Agente reservado | **Reservado para ti** (índigo) |
| Otros miembros | **Reservado · {nombre}** (ámbar) |

Pasa el cursor para ver hora límite y modo (laboral/fuera de horario).

### Dentro del chat (modo pending)

- Agente reservado: botón **Atender** disponible
- Otros miembros: banner ámbar con aviso y botón oculto
- Mensajes de sistema registran reserva o auto-asignación

---

## Buenas prácticas

1. **Ordena la cola** según tu operación (experiencia, rotación, etc.)
2. **Activa horarios** para evitar notificaciones fuera del horario laboral
3. **Usa pausa manual** para almuerzo y reuniones — no hace falta excluir del rodizio
4. **Prueba el fallback** con un equipo pequeño antes de producción
5. **Modo pending + reserva** funciona bien cuando los agentes deben terminar el chat actual primero

---

## Próximos Pasos

- [Configuraciones](/es/guide/settings/) — preferencias generales de atención
- [Interfaz de Chat](/es/guide/chat/interface) — lista, filtros y acciones
- [Constructor de Flujos](/es/guide/flows/builder) — automatizaciones con nodo de rodizio
