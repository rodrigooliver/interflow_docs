# Módulo Financiero

Control de ingresos, gastos, cajas, categorías y métodos de pago.

::: tip Acceso
Menú → **Financiero**. El módulo `financial` debe estar habilitado.
:::

## Visión general

| Área | Dónde | Función |
|------|-------|---------|
| **Resumen** | Financiero | Por cobrar, por pagar y saldo de las cajas con acceso |
| **Por cobrar / Por pagar** | Menú del módulo | Obligaciones abiertas, vencidas y por vencer |
| **Lanzamientos** | Menú del módulo | Extracto de lo ya pagado o cobrado, incluidas las transferencias |
| **Cajas** | Menú del módulo | Cuentas y operadores, con permiso por persona |
| **Categorías** | Menú del módulo | Ingreso y gasto, con subcategorías |
| **Centros de coste** | Menú del módulo | Área responsable del gasto |
| **Métodos de pago** | Menú del módulo | Crédito, tasa, cuotas y clave de integración |
| **Informes financieros** | Menú del módulo | Flujo de caja, categorías, centros de coste, aging y por caja |
| **Importar extracto** | En Lanzamientos | CSV u OFX, línea a línea, antes de guardar |
| **Conciliación** | En Lanzamientos | Bloquea lo que ya se cotejó con el banco |

El pagador o receptor de una obligación es un **cliente** del CRM. No hay pantalla de clientes dentro del menú financiero.

::: info
**Facturación** (contratos y Asaas) es un módulo aparte — ver [Facturación](/es/guide/billing/).
:::

## Resumen

1. Abra **Financiero**
2. Vea **por cobrar** y **por pagar** hasta fin de mes, solo en las cajas con acceso, y el **saldo en caja**
3. La tarjeta muestra la cantidad y, cuando hay, cuántos están atrasados
4. Pulse **Por cobrar** o **Por pagar** para abrir la lista. Pulse una caja para abrir su extracto
5. Use **Nueva cuenta por cobrar** o **Nueva cuenta por pagar** para crear una obligación

Sin una caja vinculada, el uso queda bloqueado. Quien es admin o dueño de la organización puede crear la primera caja en esta pantalla. Los demás piden a un admin que los incluya como operador.

## Por cobrar y por pagar

**Por cobrar** lista ingresos abiertos. **Por pagar** lista gastos abiertos. Las dos pantallas separan **vencidos** (vencimiento en el pasado) de **por vencer**, con totales distintos y el **total** en el medio.

1. Abra **Financiero → Por cobrar** o **Por pagar**
2. Use **Nueva cuenta por cobrar** o **Nueva cuenta por pagar** (atajo `N`)
3. Complete descripción, valor, categoría y vencimiento
4. Opcional: centro de coste (solo en gastos), método de pago, caja, pagador o receptor, observaciones, datos de pago y adjuntos
5. Guarde

Se puede ver **todas las cajas** o una sola. La búsqueda es por descripción.

Filtros rápidos: **hoy**, **hasta hoy**, **hasta mañana**, **hasta 7 días**, **hasta fin de mes**, **solo este mes** y **mes que viene**. En **Filtros** también hay categoría, centro de coste e intervalo de vencimiento. Los totales siguen el filtro, y el clic en el atajo muestra carga.

Una obligación atrasada entra en **Vencidos** por la fecha, aunque el estado siga pendiente.

En el menú de la fila: ver, editar, duplicar, registrar pago o cobro y eliminar.

### Estados

| Estado | Significado |
|--------|-------------|
| Pendiente | Aún no registrada |
| Pagado / Recibido | Ya está en el extracto |
| Vencido | Pasó el vencimiento sin registro |
| Cancelado | Cerrada sin registro |

## Lanzamientos

En **Financiero → Lanzamientos** está el extracto de una caja: lo que ya se pagó o cobró. El selector de caja es obligatorio en esta pantalla.

El encabezado muestra **entradas**, **salidas**, **líquido** y el **saldo** de la caja. Filtros rápidos: **mes actual** y **mes pasado**. En **Filtros**: categoría, centro de coste e intervalo de pago. La búsqueda es por descripción.

El valor mostrado es el del lanzamiento. Si difiere del original de la obligación, el original también aparece. Quién registró y cuándo queda en el detalle.

Atajos: `R` nuevo ingreso ya registrado, `D` nuevo gasto ya registrado, `T` transferencia.

Para **mover saldo entre cajas**, use **Transferencia** — ver [Transferencia entre cajas](#transferencia-entre-cajas).

Otras acciones de esta pantalla:

- [Importar extracto](/es/guide/financial/import)
- [Registrar múltiples y bajar pendientes](/es/guide/financial/grouping)
- [Conciliar](/es/guide/financial/reconciliation)

## Registrar pago

Para saldar una obligación, use **Registrar pago** o **Registrar cobro**.

1. Abra la obligación en **Por cobrar** o **Por pagar**
2. Elija **Registrar pago** o **Registrar cobro**
3. Confirme el **valor original** y, si hace falta, cambie el **importe pagado** o el **importe recibido**
4. Ajuste la fecha, la caja (entre las que opera) y los datos de pago
5. Guarde

El sistema guarda quién registró y cuándo.

### Datos de pago

En el formulario, en **Datos de pago**, se puede incluir:

| Tipo | Uso |
|------|-----|
| Código PIX | Copia y pega; genera un código QR para escanear en el banco |
| Código de barras | Genera la imagen del código para escanear |
| Línea digitada | Boleto de 47 o 48 dígitos, o código de 44 dígitos |
| Datos bancarios | Banco, agencia, cuenta y beneficiario |
| Otro | Campo con nombre libre |

Después de guardar, esos datos se pueden copiar, editar o quitar.

### Adjuntos

En el mismo formulario, en **Adjuntos**, haga clic o arrastre archivos. El límite es **50 MB** por archivo. En una obligación nueva, el archivo sube al guardar.

### Duplicar

En el menú de la fila, **Duplicar** abre una obligación nueva con los datos de la original. No duplica transferencia, lanzamiento agrupado ni ítem cancelado.

### Cuotas del método de pago

Si la frecuencia es **única** y el método de pago **permite cuotas**, el formulario pide el número de cuotas, hasta el máximo del método.

## Recurrencia

Al crear con una frecuencia distinta de **única**, elija el modo:

| Modo | Qué ocurre |
|------|------------|
| **Indefinido** | Crea 12 cuotas. El sistema mantiene siempre 12 por delante |
| **Cantidad exacta** | Crea solo la cantidad indicada (de 1 a 60) y no genera más |

Frecuencias: diaria, semanal, mensual, trimestral, semestral y anual.

Al editar un ítem de la serie aún no registrado, elija:

- **Solo esta** — cambia solo esta obligación
- **Todas las próximas** — replica descripción, categoría y caja en las aún no registradas
- **Aplicar valor** y **Aplicar datos de pago** — solo si también quiere que esos campos cambien en las próximas
- **Incluir vencimiento** — solo si quiere desplazar las fechas siguientes en el mismo intervalo

Los movimientos ya registrados no entran en ese cambio.

Al eliminar un ítem de la serie, elija **solo esta**, **desde esta en adelante** o **todas las pendientes**.

## Transferencia entre cajas

Mueve saldo de una caja a otra **al momento**. No es una cuenta por pagar ni por cobrar: no entra en el resultado como ingreso o gasto. Solo cambia el saldo de las cajas y aparece en el extracto.

1. Abra **Financiero → Lanzamientos**
2. Pulse **Transferencia** (atajo `T`)
3. Elija origen, destino, valor, descripción y fecha
4. Guarde

El extracto muestra los dos lados con el sello **Transferencia** y la otra caja. Editar valor, descripción o fecha actualiza el par. Eliminar un lado quita los dos.

Hay que ser operador con permiso de **crear** en las dos cajas. No hay recurrencia ni pendiente: el movimiento ya nace registrado. La transferencia no entra en el aviso de vencimiento, no baja pendientes y queda fuera de los informes de resultado.

## Aviso de vencimiento

Cada día, a las **8:00** (hora de Brasilia), los operadores de la caja con permiso de ver (o admin de la caja) reciben un push de las obligaciones que **vencen hoy**. Un aviso por persona por caja, sin repetir el mismo día.

El toque abre **Por pagar** o **Por cobrar** ya en esa caja y en el filtro **hoy**. Las transferencias entre cajas no generan aviso. Hay que mantener las notificaciones de la app activas.

> Changelog: [v2026.9.11](/es/changelog/2026/09/2026.9.11)

## Cajas

1. Abra **Financiero → Cajas**
2. Cree una caja con nombre, descripción y si está activa
3. En **Gestionar Operadores**, agregue personas y defina lo que cada una puede hacer en esa caja

Permisos del operador:

| Permiso | Efecto |
|---------|--------|
| Es administrador | Acceso completo en esa caja, incluidos los informes |
| Puede visualizar | Ve los lanzamientos y entra en el aviso de vencimiento |
| Puede ver informes | Abre **Informes** de esta caja |
| Puede crear | Incluye obligaciones, lanzamientos y transferencias |
| Puede editar cualquier registro / solo los propios | Cambia lo que ya existe |
| Puede eliminar cualquier registro / solo los propios | Quita lo que ya existe |

No se puede quitar al único operador de la caja. Cada persona solo ve las cajas en las que es operador.

**Fecha de conciliación** en la caja bloquea incluir, editar y eliminar lanzamientos con pago hasta esa fecha. Se puede conciliar uno a uno sin completar esa fecha. El paso a paso está en [Conciliación](/es/guide/financial/reconciliation).

## Categorías

En **Financiero → Categorías**:

- Separe **ingreso** y **gasto**
- Use una categoría padre para crear subcategorías
- Defina un color
- No se puede eliminar una categoría que todavía tiene subcategorías

**Gerar com IA** pide una descripción del negocio, sugiere categorías de ingreso y gasto y solo guarda después de la revisión.

## Métodos de pago

En **Financiero → Métodos de pago**, registre:

- Nombre y descripción
- Clave opcional, usada en integraciones
- Si es un pago a crédito y si exige confirmación
- Si permite cuotas y el máximo
- Tasa porcentual (por ejemplo, tasa de tarjeta)
- Si está activo

El método elegido en la obligación o en el lanzamiento usa esas reglas.

## Centros de coste

Use **Financiero → Centros de coste** para controlar dónde se consumen los recursos de la empresa.

1. Ingrese un código único, nombre y descripción opcional
2. Seleccione el centro al crear o editar un **gasto**
3. Filtre por centro de coste en **Por cobrar**, **Por pagar** o **Lanzamientos**
4. Desactive los centros que ya no se utilizan; los movimientos anteriores permanecen vinculados

El centro de coste es opcional y exclusivo para gastos. Las categorías describen **el tipo de gasto**; los centros de coste identifican **el área responsable**.

## Informes

En **Financiero → Informes financieros** solo ves las cajas en las que eres **admin** o tienes **Puede ver informes**:

1. Elige el período y, si quieres, una caja (o todas las que puedes acceder)
2. **Flujo de caja** — ingresos y gastos realizados y en abierto en el tiempo (las transferencias entre cajas quedan fuera)
3. **Por categoría** — realizado y en abierto, con la categoría padre
4. **Por centro de coste** — gastos realizados, pendientes y totales por área
5. **Por cobrar / pagar** — aging en la fecha final del período (al día, 1–30, 31–60, 61–90, 90+)
6. **Por caja** — comparativo de saldo y movimiento

Quien tiene permiso para exportar informes descarga la pestaña actual en CSV. Un lanzamiento que solo agrupa varias cuentas no entra en el informe: entran las cuentas originales, con categoría y centro de coste. Vea [Registrar múltiples y bajar pendientes](/es/guide/financial/grouping).

## Permisos

- Módulo `financial` habilitado
- Permisos del grupo, cuando existan: ver todas las transacciones, aprobar y exportar informes
- Permisos por caja para cada operador

## Guías de este módulo

- [Importar extracto](/es/guide/financial/import)
- [Conciliación](/es/guide/financial/reconciliation)
- [Registrar múltiples y bajar pendientes](/es/guide/financial/grouping)

## Relacionados

- [Facturación](/es/guide/billing/)
- [PDV](/es/guide/pos/)
- [Informes](/es/guide/reports/)
