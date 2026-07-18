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

::: warning
No se puede eliminar un embudo/etapa con clientes. Muévalos antes.
:::

## Kanban

Arrastre tarjetas · Busque en el embudo · **Solo míos** · **Ocultar finalizados**

::: danger Evite bucles
Los flujos de cambio de etapa no deben usar nodos interactivos ni actualizar el embudo de forma que reentren en la misma etapa.
:::

## Relacionados

- [Clientes](/es/guide/crm/customers)
- [UTM](/es/guide/utm/)
