# UTM — Connections / Meta Lead Ads

Gestione conexiones Meta, páginas, cuentas publicitarias, Instant Forms, píxeles y atribución de leads/customers por anuncio.

::: tip Acceso
Menú → **UTM**. Requiere el módulo `utm`.
:::

## Visión general

El flujo activo es el hub **Connections** (Meta Lead Ads y futuros proveedores).

| Área | Función |
|------|---------|
| **Connections** | Conectar Meta y listar hubs |
| **Páginas** | Páginas de Facebook de la conexión |
| **Cuentas publicitarias** | Ad Accounts vinculadas a la página |
| **Campañas / conjuntos / anuncios** | Sync de Meta (lectura operativa) |
| **Instant Forms** | Sync y mapeo de campos + acciones |
| **Píxeles** | Sync y token CAPI en la cuenta |
| **Leads / customers por anuncio** | Listas paginadas desde cada ad |

::: info UTM clásico
Las pantallas antiguas de campañas manuales, forms de sitio, WhatsApp trackeado y analytics clásico quedaron discontinuadas en la app. El camino soportado es el hub Connections.
:::

## Conectar Meta

1. Abra **UTM**
2. Cree o abra una **conexión** Meta
3. Autorice los permisos solicitados (páginas, ads, leads)
4. Seleccione las **páginas** y **cuentas publicitarias** del hub

## Navegar hasta un anuncio

1. Connections → **Página**
2. Abra una **cuenta publicitaria**
3. Sincronice **campañas** cuando haga falta
4. Abra la campaña → **conjunto (ad set)** → lista de **anuncios**

En la lista de anuncios:

- **Detalles** — creativo, IDs Meta y estado
- **Ver leads** — leads atribuidos a ese anuncio
- **Ver customers** — customers con el mismo anuncio

## Atribución por anuncio

Los leads Meta se atribuyen al **anuncio** (ID local + ID Meta), no a la campaña.

- Instant Forms **no** eligen campaña/ad en la configuración
- El anuncio llega con el propio lead de Meta
- Los customers pueden heredar la atribución del anuncio

## Instant Forms

1. En la **página**, abra la pestaña **Forms**
2. Sincronice los Instant Forms de Meta
3. Abra el form para mapear:
   - campos del formulario → campos de Interflow
   - acciones (tags, etapa del embudo, etc.)
4. Guarde el mapeo

No es necesario (ni posible) vincular el form a una campaña: la atribución viene del anuncio del lead.

## Píxeles (CAPI)

1. Abra la **cuenta publicitaria**
2. Sincronice los **píxeles** de Meta
3. Informe el **token CAPI** del píxel para eventos de conversión

Los píxeles viven a nivel de cuenta (no de campaña ni de conjunto).

## Integración con CRM

Combine la atribución por anuncio con [embudos](/es/guide/crm/funnels) y [clientes](/es/guide/crm/customers): tags y etapas pueden aplicarse con las acciones del Instant Form al llegar el lead.

## Relacionados

- [Embudos CRM](/es/guide/crm/funnels)
- [Clientes](/es/guide/crm/customers)
- [Changelog v2026.8.1](/es/changelog/2026/08/2026.8.1)
