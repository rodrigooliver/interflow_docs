# RRHH / Fichaje

Control de jornada con fichaje, locales (geofence), banco de horas, calendario, ausencias y nómina gerencial.

> Changelog: [v2026.8.3](/es/changelog/2026/08/2026.8.3) · [v2026.7.11](/es/changelog/2026/07/2026.7.11)

## Visión general

El módulo **RRHH / Fichaje** permite:

- Fichar (entrada, pausa, retorno y salida) con foto y GPS
- Definir locales permitidos (geofence) o liberar home office por persona
- Configurar **jornada por horario** (entrada, almuerzo y salida) y **carga contractual** (44h por defecto)
- Registrar **festivos / sin expediente** y **certificados / libranzas** individuales
- Seguir banco de horas, **informe mensual** y vista previa de nómina **con los 4 marcajes del día**
- Definir el destino de las horas extra (banco, compensación o pago) en **Ajustes RRHH**
- Notificar a gestores por push cuando alguien ficha
- Separar la vista del colaborador (**Mi perfil RRHH**) de la vista admin

::: warning Importante
El módulo **no** viene activado por defecto. Un superadmin debe activar **RRHH / Fichaje** en **Admin → Organizaciones → Módulos**.
:::

::: tip Fichar sin calendario
No es necesario registrar festivos en el calendario para fichar. El calendario y las ausencias solo afectan el **cálculo de la nómina** (horas esperadas del día).
:::

## Cómo liberar el módulo

1. Acceda a **Admin → Organizaciones**
2. Edite la organización y abra la pestaña **Módulos**
3. Active **RRHH / Fichaje** y guarde
4. Recargue la app — el ítem **RRHH / Fichaje** aparece en el menú

## Fichar

1. En el menú, abra **RRHH / Fichaje → Fichar**
2. Permita la **ubicación** (si la organización exige GPS)
3. Si la foto es obligatoria:
   - Con webcam: la vista previa aparece en espejo (como selfie)
   - Sin webcam: use **Enviar foto**
4. Haga clic en **Registrar entrada** (o pausa / retorno / salida, según el estado)

### Tipos de marcaje

| Tipo | Significado |
|------|-------------|
| Entrada | Inicio de la jornada |
| Pausa | Inicio del intervalo |
| Retorno | Fin del intervalo |
| Salida | Fin de la jornada |

## Locales / Geofence

1. Abra **RRHH / Fichaje → Locales**
2. Registre nombre, coordenadas y radio (metros)
3. En **Colaboradores**, elija el modo de geofence de cada persona:

| Modo | Comportamiento |
|------|----------------|
| Heredar org | Usa la regla por defecto de la organización |
| Obligatorio | Debe estar en un local permitido |
| Home office | Geofence desactivado para esa persona |
| Locales personalizados | Usa solo los locales vinculados a la persona |

## Colaboradores y jornada (admin)

En **RRHH / Fichaje → Colaboradores** el admin registra cargo, **jornada**, geofence, vacaciones y remuneración (cuando está permitido). La jornada también se puede editar en el detalle de la persona, pestaña **Jornada**.

### Horario de presencia y carga contractual

Son dos conceptos distintos:

| Concepto | Qué es | Ejemplo de oficina |
|----------|--------|--------------------|
| Horario de presencia | Cuándo la persona debe estar en el expediente | Lun–vie, 08:00–12:00 y 13:30–18:30 (9h/día) |
| Carga contractual | Horas “normales” de la semana (CLT 44h) | 8h48 por día laborable — la 1h de más de la semana es extra |

En el editor:

1. Marque los días en que la persona trabaja
2. Indique **mañana** y **tarde** (inicio y fin), o use **Jornada de oficina**
3. Opcional: **Copiar a días laborables**
4. Carga contractual semanal: déjelo vacío para heredar 44h de la organización, o indique un valor propio
5. Guarde

La nómina compara lo **trabajado** con la carga contractual (no con las 9h de presencia). Quien cumple el horario de oficina genera **12 min extra por día = 1h por semana**. Los días desmarcados no generan falta.

El retraso es la entrada después del primer horario registrado, descontada la tolerancia de la organización.

Al abrir la ficha de una persona:

- **Fichajes** — marcajes con filtro; use **Detalles** para ver foto y evidencias
- **Jornada** — horarios reales y carga contractual
- **Banco de horas** — saldo del período, créditos, débitos y movimientos
- **Nómina** — vista previa con totales (retrasos, HE, faltas, delta del banco) y **4 marcajes por día**
- **Ausencias** — certificados y libranzas individuales (con adjunto)
- **Notificaciones** — quién recibe push cuando esa persona ficha

## Calendario RRHH (festivos / sin expediente)

En **RRHH / Fichaje → Calendario** (admin):

1. Registre la fecha y un título
2. Elija el tipo: **Festivo** o **Sin expediente**
3. Opcional: marque **recurrente todos los años** (mismo día/mes)

Esos días **ponen a cero** las horas esperadas en la nómina para todos (no generan falta). Si alguien ficha ese día, el tiempo puede contar como HE.

## Ausencias (certificado y libranza)

En el detalle del colaborador → pestaña **Ausencias**:

1. Pulse **Registrar**
2. Tipo: **Certificado médico** o **Libranza individual**
3. Indique inicio y fin, observación (ej.: dónde se presentó el certificado) y adjunte PDF/imagen si hay
4. Guarde

En **Libranza individual**, marque **Descontar la carga del día en el banco de horas** si la libranza debe salir del saldo (banco habilitado).

Las ausencias también **ponen a cero el esperado** en los días cubiertos, solo para esa persona.

## Mi perfil RRHH (colaborador)

En **RRHH / Fichaje → Mi perfil RRHH** el colaborador ve:

- Sus fichajes (sin foto y sin IP)
- Banco de horas
- Vista previa de nómina con totales y **horas por día** (horas, sin importes salariales sensibles)

La ruta y la pantalla están **separadas** de la vista admin, por privacidad.

## Fichajes (admin)

En **RRHH / Fichaje → Fichajes**:

- Filtre por colaborador, tipo y período
- La columna **Foto** solo indica si hay adjunto (`Sí` / `—`) — la imagen **no** se carga en el listado
- Pulse **Detalles** para abrir el modal (foto bajo demanda, IP, GPS, dispositivo)
- El GPS en la fila o en el modal abre el mapa
- Orden cronológico (más antiguo → más reciente)

## Banco de horas y nómina

- **Banco de horas** — saldo actual, filtro de mes, saldo inicial/final, créditos, débitos y CSV; el admin puede registrar ajustes
- **Nómina** — vista previa gerencial del período:
  - Totales por colaborador (normales, HE, retrasos, faltas, delta del banco, estimaciones)
  - Sección **Horas por día** (entrada, salida a almuerzo, retorno, salida, trabajado, esperado, retraso, HE, falta)
  - Exportación **CSV período** o **CSV diario**
  - **Cerrar período** guarda el resumen **y** mueve el banco según la política

### Destino de las horas extra

En **RRHH / Fichaje → Ajustes RRHH**:

| Modo | Comportamiento en el cierre |
|------|-----------------------------|
| Compensar y banco (por defecto) | HE compensa retraso/falta del período; el resto acredita el banco |
| Solo banco | HE acredita; faltas debitan |
| Pagar HE | HE queda en la nómina; el banco no se mueve |

También se puede definir tolerancia de retraso, carga semanal por defecto (2640 min = 44h), huso, tope y plazo del banco.

::: tip Nota
La nómina en Interflow es **gerencial** y no sustituye la nómina oficial / eSocial.
:::

### Estado del día en la nómina

| Estado | Significado |
|--------|-------------|
| Trabajo | Día con jornada esperada |
| Folga | Sin jornada en la escala de la persona |
| Festivo / Sin expediente | Calendario de la organización |
| Certificado / Libranza individual | Ausencia registrada en el colaborador |

## Notificaciones push

1. Abra el detalle admin del colaborador
2. Pestaña **Notificaciones**
3. Marque los usuarios que deben recibir el push OneSignal
4. Guarde

Cuando la persona ficha, los destinatarios reciben una notificación con enlace a su perfil RRHH.

## Permisos y privacidad

| Quién | Qué ve |
|-------|--------|
| Colaborador | Fichar, Mi perfil RRHH, propio banco/nómina (sin foto/IP) |
| Admin / Owner | Colaboradores, jornada, fichajes con detalles/foto, locales, calendario, nómina, banco, ausencias, notificaciones, ajustes RRHH |

En el servidor, las respuestas de fichajes para no-admin **no incluyen** foto, IP ni user-agent.
