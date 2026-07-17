# RRHH / Fichaje

Control de jornada con fichaje, locales (geofence), banco de horas y nómina gerencial.

> Changelog: [v2026.7.11](/es/changelog/2026/07/2026.7.11)

## Visión general

El módulo **RRHH / Fichaje** permite:

- Fichar (entrada, pausa, retorno y salida) con foto y GPS
- Definir locales permitidos (geofence) o liberar home office por persona
- Seguir banco de horas y vista previa de nómina
- Notificar a gestores por push cuando alguien ficha
- Separar la vista del colaborador (**Mi perfil RRHH**) de la vista admin

::: warning Importante
El módulo **no** viene activado por defecto. Un superadmin debe activar **RRHH / Fichaje** en **Admin → Organizaciones → Módulos**.
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

## Colaboradores (admin)

En **RRHH / Fichaje → Colaboradores** el admin registra cargo, jornada, geofence, vacaciones y remuneración (cuando está permitido).

Al abrir la ficha de una persona:

- **Fichajes** — marcajes con filtro, **foto** y mapa
- **Banco de horas** — saldo y movimientos
- **Nómina** — vista previa del período (con importes estimados para admin)
- **Notificaciones** — quién recibe push cuando esa persona ficha

## Mi perfil RRHH (colaborador)

En **RRHH / Fichaje → Mi perfil RRHH** el colaborador ve:

- Sus fichajes (sin foto y sin IP)
- Banco de horas
- Vista previa de nómina (horas, sin importes salariales sensibles)

La ruta y la pantalla están **separadas** de la vista admin, por privacidad.

## Fichajes (admin)

En **RRHH / Fichaje → Fichajes**:

- Filtre por colaborador, tipo y período
- Vea foto, GPS (clic abre el mapa) e IP
- Orden cronológico (más antiguo → más reciente)

## Banco de horas y nómina

- **Banco de horas** — saldo e historial; el admin puede registrar ajustes
- **Nómina** — vista previa gerencial del período, cierre y exportación CSV

::: tip Nota
La nómina en Interflow es **gerencial** y no sustituye la nómina oficial / eSocial.
:::

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
| Admin / Owner | Colaboradores, fichajes con foto/IP, locales, nómina, notificaciones |

En el servidor, las respuestas de fichajes para no-admin **no incluyen** foto, IP ni user-agent.
