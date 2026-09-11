# Módulo Financiero

Control de ingresos, gastos, cajas, categorías y métodos de pago.

::: tip Acceso
Menú → **Financiero**. El módulo `financial` debe estar habilitado.
:::

## Visión general

| Área | Función |
|------|--------|
| **Dashboard** | Saldos, resumen y atajos |
| **Transacciones** | Listar, filtrar, crear, marcar pagado/recibido |
| **Cajas** | Cuentas de caja y operadores |
| **Categorías** | Categorías de ingreso/gasto |
| **Centros de coste** | Áreas responsables de los gastos |
| **Métodos de pago** | Crédito, tasas, cuotas |
| **Informes** | Flujo de caja, categorías, centros de coste, por cobrar/pagar y por caja |

::: info
**Facturación** (contratos/Asaas) es un módulo aparte — ver [Facturación](/es/guide/billing/).
:::

## Crear una transacción

1. Abra **Financiero → Transacciones**
2. Elija **Ingreso** o **Gasto**
3. Complete: descripción, valor, categoría, vencimiento
4. Opcional: centro de coste (en gastos), método, caja, cliente, notas, frecuencia/cuotas
5. Guarde

### Estados

Pendiente · Pagado/Recibido · Vencido · Cancelado

## Cajas

Cree cajas, agregue **operadores** y defina permisos por caja. Cada usuario solo ve las cajas donde es operador (salvo permisos especiales).

## Centros de coste

Use **Finanzas → Centros de coste** para controlar dónde se consumen los recursos de la empresa.

1. Ingrese un código único, nombre y descripción opcional
2. Seleccione el centro al crear o editar un **gasto**
3. Filtre los movimientos por centro de coste en **Transacciones**
4. Desactive los centros que ya no se utilizan; los movimientos anteriores permanecen vinculados

El centro de coste es opcional y exclusivo para gastos. Las categorías describen **el tipo de gasto**; los centros de coste identifican **el área responsable**.

## Informes

En **Financiero → Informes** solo ves las cajas en las que eres **admin** o tienes el permiso **Puede ver informes**:

1. Elige el período y, si quieres, una caja (o todas las que puedes acceder)
2. **Flujo de caja** — ingresos/gastos realizados y previstos en el tiempo
3. **Por categoría** — DRE gerencial (realizado y en abierto)
4. **Por centro de coste** — gastos realizados, pendientes y totales por área
5. **Por cobrar / pagar** — aging (al día, 1–30, 31–60, 61–90, 90+)
6. **Por caja** — comparativo de saldo y movimiento

Quien tiene permiso para exportar informes puede descargar la pestaña actual en CSV.

## Relacionados

- [Facturación](/es/guide/billing/)
- [PDV](/es/guide/pos/)
- [Informes](/es/guide/reports/)
