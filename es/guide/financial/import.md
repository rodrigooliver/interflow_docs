# Importar extracto

Traiga un CSV u OFX del banco a la caja y decida, línea a línea, qué guardar.

::: tip Acceso
**Financiero → Lanzamientos → Importar**. La caja de la pantalla, si hay alguna, ya viene seleccionada.
:::

## Para qué sirve

El extracto del banco llega con fechas e importes que pueden existir ya como cuenta por pagar, cuenta por cobrar o lanzamiento. La importación no guarda todo de una vez: cada línea pasa a **crear nuevo**, **liquidar pendiente** u **omitir**.

## Cómo importar

1. Abra **Financiero → Lanzamientos** y pulse **Importar**
2. Elija la **caja** y el archivo (CSV u OFX)
3. Marque **Invertir signos** solo cuando los cargos vengan positivos, como en un extracto de tarjeta
4. Continúe

### CSV

El paso **Columnas** pide el mapeo, porque cada banco usa nombres distintos. La primera línea del archivo aparece como vista previa.

Obligatorio:

- **Fecha** y el formato (`dd/MM/yyyy`, `dd-MM-yyyy`, `yyyy-MM-dd` o `MM/dd/yyyy`)
- **Descripción**
- **Importe**, o **débito** y **crédito** juntos

Opcional: **número** del documento (NSU, cheque o referencia).

### OFX

El OFX ya trae fecha, descripción e importe. La pantalla salta las columnas y abre directo el **mapeo**.

## Revisar cada línea

| Acción | Cuándo usarla |
|--------|----------------|
| **Crear nuevo** | No hay obligación ni lanzamiento correspondiente |
| **Liquidar pendiente** | La línea salda una cuenta abierta. Hay que elegir cuál |
| **Omitir** | La línea no debe guardarse |

Las líneas nuevas exigen **categoría**. Se pueden definir valores por defecto de la caja (categoría de ingreso, categoría de gasto, centro de coste en los gastos y método de pago) y **aplicarlos a las nuevas**. El cliente sigue siendo opcional en cada línea.

El sistema sugiere la acción:

- Misma fecha y mismo importe ya registrados en la caja: viene como omitir. Use **importar de todos modos** si es otro movimiento
- Ya importada de este extracto: permanece omitida
- Pendiente compatible: viene como liquidar, con la cuenta sugerida. Se puede buscar otra

El resumen del pie cuenta cuántas líneas serán nuevas, cuántas se liquidarán y cuántas se omitirán.

## Confirmar

**Confirmar importación** guarda solo lo que no está omitido. El mensaje final informa cuántos se crearon, cuántos se liquidaron y cuántos se omitieron.

Lo que nace como lanzamiento entra en el extracto de la caja, con la fecha y el importe de la línea. Lo que liquida una pendiente salda esa obligación.

## Límites

- La importación vale para una caja por vez
- Sin categoría, la línea nueva no se guarda
- Sin la pendiente elegida, la liquidación no se guarda
- Un período ya conciliado en la caja no acepta un lanzamiento nuevo en esa fecha — ver [Conciliación](/es/guide/financial/reconciliation)

## Volver

- [Financiero — visión general](/es/guide/financial/)
