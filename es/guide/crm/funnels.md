# Embudo de Ventas (CRM Kanban)

Siga clientes en pipelines visuales con etapas personalizadas y automatizaciones.

::: tip Acceso
Menú → **CRM** → **Embudos**.
:::

## Crear un embudo

1. Abra **CRM → Embudos**
2. **Nuevo embudo** → nombre + modo (`sales`, `pipeline`, `support`, `hidden`)
3. Etapas por defecto: Nuevo / En progreso / Concluido

## Etapas

- Renombrar, reordenar, agregar
- Vincular flujo **`crm_stage_change`**
- Mover clientes entre etapas/embudos
- Exigir campos y tareas antes de que el lead entre en la etapa

## Requisitos de entrada

Al editar la etapa, la pestaña **Requisitos** define lo que el cliente necesita para entrar.

- Campos fijos: nombre, correo, documento, dirección, valor de la venta y fuente del anuncio
- Campos personalizados de la organización
- Tareas de una plantilla: creada, iniciada o en una columna del tablero de tareas

Al arrastrar la tarjeta, nombre, correo, documento, valor y fuente del anuncio se comprueban antes de enviar. Dirección, campos personalizados y tareas se comprueban al guardar. Si falta un campo, la pantalla pide completarlo. Si falta una tarea, indica la plantilla. Quitar del embudo y reordenar en la misma columna no usan esta regla. En el movimiento masivo, quien no cumpla permanece en la etapa de origen.

> Changelog: [v2026.10.21](/es/changelog/2026/10/2026.10.21)

::: warning
No se puede eliminar un embudo/etapa con clientes. Muévalos antes.
:::

## Kanban

Arrastre tarjetas · Busque en el embudo · **Solo míos** · **Ocultar finalizados**

### Vaciar o mover clientes de la etapa

Owners, admins y gerentes pueden limpiar la columna sin arrastrar tarjeta por tarjeta.

1. Abra el embudo y haga clic en los **tres puntos** de la etapa
2. Elija **Mover o quitar clientes**
3. **Quitar del embudo** — los clientes quedan sin etapa
4. **Mover a otra etapa** — elija el embudo y la etapa de destino (cualquier embudo de la organización)
5. Confirme — aplica a **todos** los clientes de esa etapa y no se puede deshacer

La acción **no** dispara los flujos de cambio de etapa. Arrastre la tarjeta cuando quiera que la automatización se ejecute.

> Changelog: [v2026.8.12](/es/changelog/2026/08/2026.8.12)

::: danger Evite bucles
Los flujos de cambio de etapa no deben usar nodos interactivos ni actualizar el embudo de forma que reentren en la misma etapa.
:::

## Relacionados

- [Barrido del embudo](/es/guide/crm/funnel-scan)
- [Clientes](/es/guide/crm/customers)
- [UTM](/es/guide/utm/)
