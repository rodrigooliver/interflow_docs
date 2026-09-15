# Módulo Financiero

Control de ingresos, gastos, cajas, categorías y métodos de pago.

::: tip Acceso
Menú → **Financiero**. El módulo `financial` debe estar habilitado.
:::

## Visión general

| Área | Función |
|------|--------|
| **Dashboard** | Saldos, resumen y atajos |
| **Por cobrar / Por pagar** | Obligaciones abiertas, vencidos y por vencer |
| **Movimientos** | Extracto de lo ya pagado o cobrado |
| **Cajas** | Cuentas de caja y operadores |
| **Categorías** | Categorías de ingreso/gasto |
| **Centros de coste** | Áreas responsables de los gastos |
| **Métodos de pago** | Crédito, tasas, cuotas |
| **Informes** | Flujo de caja, categorías, centros de coste, por cobrar/pagar y por caja |

::: info
**Facturación** (contratos/Asaas) es un módulo aparte — ver [Facturación](/es/guide/billing/).
:::

## Por cobrar y por pagar

**Por cobrar** lista ingresos abiertos. **Por pagar** lista gastos abiertos. Las dos pantallas separan **vencidos** (vencimiento en el pasado) de **por vencer**, con totales distintos.

1. Abra **Financiero → Por cobrar** o **Por pagar**
2. Use **Nuevo ingreso** o **Nuevo gasto**
3. Complete descripción, valor, categoría y vencimiento
4. Opcional: centro de coste (en gastos), método, caja, cliente, notas, datos de pago (PIX, código de barras o cuenta) y recurrencia
5. Guarde

Filtros rápidos en la parte superior: **hoy**, **hasta hoy**, **hasta mañana**, **hasta 7 días**, **hasta fin de mes** y **solo este mes**. Los totales de vencidos y por vencer siguen el filtro.

Una obligación atrasada entra en **Vencidos** por la fecha, aunque el estado siga pendiente.

### Estados

Pendiente · Pagado/Recibido · Vencido · Cancelado

## Movimientos

En **Financiero → Movimientos** ves el extracto: lo que ya se pagó o cobró. Filtros rápidos: **mes actual** y **mes pasado**. El valor mostrado es el del movimiento; si difiere del original de la obligación, el original también aparece.

## Registrar pago

Para saldar una obligación, use **Registrar pago** o **Registrar cobro** — no basta marcar como pagado.

1. Abra la obligación en **Por cobrar** o **Por pagar**
2. Elija **Registrar pago** o **Registrar cobro**
3. Confirme el **valor original** y, si hace falta, cambie el **valor del movimiento**
4. Ajuste fecha, caja (entre las que opera) y datos de pago
5. Guarde

El sistema guarda quién registró y cuándo. PIX, código de barras o datos bancarios se pueden copiar, editar o quitar después de guardar.

## Recurrencia

Al crear con frecuencia distinta de única, elija **cuántas ocurrencias generar** al inicio (hasta 12). El sistema mantiene vencimientos futuros en la cola, haya registrado o no alguna.

Al editar un ítem de la serie, elija:

- **Solo esta** — cambia solo esta obligación abierta
- **Todas las próximas** — replica descripción, categoría y caja en las aún no registradas
- **Aplicar valor** y **Aplicar datos de pago** — solo si también quiere que esos campos cambien en las próximas
- **Incluir vencimiento** — solo si quiere desplazar las fechas siguientes en el mismo intervalo

Los movimientos ya registrados no entran en ese cambio.

> Changelog: [v2026.9.10](/es/changelog/2026/09/2026.9.10)

## Cajas

Cree cajas, agregue **operadores** y defina permisos por caja. Cada usuario solo ve las cajas donde es operador (salvo permisos especiales).

## Centros de coste

Use **Finanzas → Centros de coste** para controlar dónde se consumen los recursos de la empresa.

1. Ingrese un código único, nombre y descripción opcional
2. Seleccione el centro al crear o editar un **gasto**
3. Filtre por centro de coste en **Por cobrar**, **Por pagar** o **Movimientos**
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
