# Módulo de Facturación (Billing)

El módulo de Facturación es el sistema financiero integrado de Interflow. Permite gestionar contratos, cuotas, distribución de ingresos entre beneficiarios, integración con pasarelas de pago y emisión/registro de cobros, todo dentro de la misma plataforma.

::: tip 💡 Acceso
El módulo está disponible en **Menú lateral → Facturación** (ícono de billetera).
:::

---

## Visión General

El módulo se compone de cinco áreas principales:

| Área | Descripción |
|------|-------------|
| **Contratos** | Gestión de contratos con clientes, cuotas y estados |
| **Beneficiarios** | Registro de quién recibe los splits de ingresos |
| **Plantillas** | Modelos reutilizables para crear contratos rápidamente |
| **Reporte de Traspasos** | Visualización de splits generados y control de distribuciones |
| **Configuraciones** | Integración con pasarela de pago (Asaas) |

---

## Contratos

### ¿Qué es un contrato?

Un contrato representa un acuerdo de pago con un cliente. Define:

- **Cliente vinculado** – quién va a pagar
- **Monto total y número de cuotas**
- **Modo de cobro** – por cuota individual o link de pago único
- **Moneda**
- **Pasarela de pago** utilizada (ej. Asaas)
- **División de ingresos** – cómo se distribuirá el monto recibido entre los beneficiarios

### Estado del Contrato

| Estado | Descripción |
|--------|-------------|
| `Borrador` | Contrato creado pero no activado aún |
| `Activo` | Contrato en curso; se pueden generar cobros |
| `Completado` | Todas las cuotas han sido pagadas |
| `Cancelado` | Contrato cerrado manualmente |

### Crear un Contrato

1. Ve a **Facturación → Contratos**
2. Haz clic en **Nuevo contrato**
3. Elige entre **crear desde cero** o **usar una plantilla**
4. Selecciona el **cliente** (quién va a pagar)
5. Completa título, monto, cuotas, moneda y pasarela
6. Configura la **división de ingresos** (opcional pero recomendado)
7. Haz clic en **Guardar**

> Si el título está vacío al seleccionar plantilla y cliente, se completa automáticamente como **"Nombre de la Plantilla – Nombre del Cliente"**.

### Activar un Contrato

Los contratos recién creados quedan en estado **Borrador**. Para ponerlos en operación:

1. Abre el contrato
2. Haz clic en **Activar**
3. Confirma en la ventana de confirmación

### Cancelar un Contrato

Al cancelar un contrato **activo** con integración Asaas:

- Las cuotas pendientes/vencidas se cancelan en la base de datos
- Los cobros abiertos en Asaas se **eliminan secuencialmente** (del último al primero — requisito de Asaas para planes de cuotas)
- Se registra un evento de auditoría

### Cuotas

Cada contrato tiene cuotas generadas automáticamente. Cada cuota tiene:

- Número y fecha de vencimiento
- Monto
- Estado: `Pendiente`, `Vencida`, `Pagada`, `Cancelada`
- Enlace al cobro en la pasarela (cuando se genera)
- Indicador de origen del pago (**Asaas** o **Manual**)

#### Acciones por cuota

| Acción | Cuándo disponible |
|--------|-------------------|
| Generar cobro | Modo "por cuota", sin cobro existente |
| Generar link de pago | Modo "link de pago", sin cobro existente |
| Marcar como pagado | Cuotas pendientes o vencidas |

### Registro Manual de Pago

Cuando una cuota necesita ser liquidada fuera de la pasarela (ej. pago en efectivo, transferencia directa):

1. Haz clic en **Marcar como pagado** en la cuota
2. Ingresa el **monto recibido** (pre-completado con el monto de la cuota)
3. Ingresa la **fecha de pago** (por defecto: hoy)
4. Haz clic en **Confirmar pago**

El sistema entonces:
- Marca el cobro como recibido en Asaas vía `receiveInCash` (si existe un cobro abierto — sin movimiento financiero en la cuenta Asaas)
- Registra el pago con `gateway: manual` y guarda quién realizó el registro
- Procesa los splits de ingresos automáticamente
- Verifica si el contrato fue completado

> Si la cuota tiene un cobro en la pasarela, se muestra una advertencia amarilla antes de confirmar.

---

## Beneficiarios

Los beneficiarios son las personas o empresas que reciben partes de los ingresos de los contratos (splits).

### Tipos de Beneficiario

| Tipo | Descripción |
|------|-------------|
| `Porcentaje` | Recibe un porcentaje fijo del monto pagado |
| `Fijo` | Recibe un monto fijo por pago |
| `Tarifa` | Control interno de la tarifa de la pasarela (completada automáticamente) |
| `Restante` | Recibe lo que queda después de todos los demás splits |

### Registrar un Beneficiario

1. Ve a **Facturación → Beneficiarios**
2. Haz clic en **Nuevo beneficiario**
3. Completa nombre, tipo y datos opcionales (CPF/CNPJ, banco/PIX en "Observaciones")
4. Guarda

::: tip Observaciones
El campo **Observaciones** es ideal para guardar la clave PIX o datos bancarios del beneficiario. Esta información aparece al registrar un traspaso, facilitando la transferencia.
:::

---

## Plantillas de Contrato

Las plantillas permiten estandarizar configuraciones que se repiten entre contratos.

### ¿Qué se configura en una plantilla?

- Título base, monto, número de cuotas
- Moneda y pasarela de pago predeterminada
- Modo de cobro (por cuota o link de pago)
- División de ingresos pre-configurada

### Beneficiario Obligatorio en Plantilla

Al configurar un split en la plantilla, se puede marcar **"Beneficiario obligatorio"**. Esto significa:

- En la plantilla, el beneficiario no necesita completarse
- Al **generar un contrato** desde la plantilla, el sistema exige seleccionar ese beneficiario

Útil para splits cuyo beneficiario varía por contrato (ej. el honorario va al profesional responsable de cada caso).

---

## División de Ingresos (Splits)

La división de ingresos define cómo se distribuye el monto pagado por el cliente. Los splits se configuran por contrato (o plantilla) y se procesan automáticamente con cada pago.

### Tipos de Split

| Tipo | Comportamiento |
|------|----------------|
| `Porcentaje` | Calcula X% del monto pagado. Enviado a la pasarela Asaas automáticamente. |
| `Fijo` | Monto fijo por pago. Enviado a la pasarela. |
| `Tarifa` | Monto de la tarifa de la pasarela (informado por Asaas en el webhook). Marcado como distribuido automáticamente en la fecha de pago. **Nunca enviado a la pasarela.** |
| `Restante` | Calculado después de todos los demás splits. Se deduce la tarifa si está configurada. **Nunca enviado a la pasarela — siempre manual.** |

> Solo se permite **un split de tipo Tarifa** y **uno de tipo Restante** por contrato/plantilla.

### Auto-distribuir

El campo **Auto-distribuir** en un split hace que el traspaso generado se marque automáticamente como distribuido en el momento del pago. Ideal para traspasos internos donde no hay transferencia real (ej. el split va a la propia empresa).

### Registrar una Distribución

Los splits no automáticos deben registrarse manualmente:

1. En el **Reporte de Traspasos**, localiza el traspaso
2. Haz clic en **Registrar**
3. Ingresa la fecha de distribución y el monto pagado
4. Confirma

---

## Reporte de Traspasos

El reporte centraliza todos los splits generados por los pagos.

### Filtros disponibles

- **Período** – Filtro por fecha de vencimiento del traspaso
- **Contrato** – Filtra por contrato específico (selector modal)
- **Beneficiario** – Filtra por beneficiario (selector modal)
- **Tipo de distribución** – Auto o manual
- **Estado** – Distribuido o pendiente

### Columnas del reporte

| Columna | Descripción |
|---------|-------------|
| Beneficiario | Nombre del beneficiario |
| Tipo | Tipo de split (porcentaje, fijo, tarifa, restante) |
| Monto Debido | Monto calculado para este split |
| Vencimiento | Fecha de vencimiento del traspaso |
| Venc. Cuota | Fecha de vencimiento de la cuota del cliente |
| Fecha de Pago | Fecha en que el cliente realizó el pago |
| Distribución | Tipo (auto/manual) |
| Distribuido | Estado (sí/no) |

---

## Configuración de Pagos

### Integrar con Asaas

1. Ve a **Facturación → Configuraciones**
2. Selecciona **Asaas**
3. Ingresa tu **clave de API** (comienza con `$aact_...`)
4. Elige el entorno (**Sandbox** para pruebas, **Producción** para uso real)
5. Guarda

> Stripe y Mercado Pago estarán disponibles próximamente.

### Configurar el Webhook

Para recibir notificaciones de pago automáticamente:

1. En el panel de Asaas → **Mi Cuenta → Configuraciones → Integraciones → Webhook**
2. Agrega la URL: `https://node.interflow.chat/webhooks/asaas`
3. Selecciona los eventos: `PAYMENT_RECEIVED`, `PAYMENT_CONFIRMED`, `PAYMENT_RECEIVED_IN_CASH`
4. En el campo **Token de autenticación**, genera o define una clave secreta y copia el valor
5. Guarda en Asaas
6. Pega esa misma clave en el campo **Clave secreta del webhook** en **Facturación → Configuraciones** en Interflow

::: warning Seguridad
La clave secreta garantiza que solo se procesen eventos legítimos de Asaas. Sin ella, cualquier solicitud a la URL del webhook sería aceptada. **Guarda la clave en un lugar seguro — no podrá visualizarse nuevamente en Asaas.**
:::

### Modos de Cobro

| Modo | Descripción |
|------|-------------|
| **Por cuota** | Cada cuota genera un cobro individual en Asaas (boleto, PIX, etc.) |
| **Link de pago** | Se genera un único link de pago en cuotas para todo el contrato |

#### Modo: Por cuota

Recomendado cuando ya tienes los datos del cliente (CPF y email obligatorios para Asaas).

1. Con el contrato activo, cada cuota muestra el botón **"Generar cobro"**
2. El sistema crea el cobro en Asaas vinculado al cliente registrado
3. El link de la factura aparece en la tarjeta de la cuota
4. Cuando el cliente paga → Asaas envía `PAYMENT_RECEIVED` → splits procesados automáticamente

#### Modo: Link de pago

Recomendado cuando **el cliente completa sus propios datos** al momento del pago. No es necesario tener CPF o email registrados previamente.

1. Con el contrato activo, haz clic en **"Generar link de pago"**
2. El sistema crea un link en Asaas con el valor total y el número máximo de cuotas configurado
3. El link se muestra en el contrato — tú se lo envías al cliente
4. El cliente accede al link, completa sus datos y elige la forma de pago
5. Por cada cuota que el cliente genera → Asaas envía `PAYMENT_CREATED` → el sistema crea las cuotas en la base de datos automáticamente con los datos reales
6. Cuando el cliente paga → Asaas envía `PAYMENT_RECEIVED` → splits procesados normalmente

::: tip Diferencia principal
En el modo **por cuota**, controlas cada cobro individualmente y necesitas los datos del cliente de antemano. En el modo **link de pago**, el cliente gestiona su propio registro y elige el plan de cuotas — ideal para ventas en línea o cuando los datos aún no están disponibles.
:::

### Webhooks

Asaas envía eventos a Interflow cada vez que se procesa un pago. El sistema:

- Identifica automáticamente si el pago pertenece a un contrato
- Registra el pago con idempotencia (evita duplicados)
- Procesa los splits automáticamente
- **Ignora webhooks de cuotas ya pagadas** (ej. `RECEIVED_IN_CASH` que llega después de un registro manual)

---

## Flujo Completo

```
Crear Plantilla → Crear Contrato → Activar → Generar Cobro → Cliente Paga
                                                                    ↓
                                              Webhook Asaas / Registro Manual
                                                                    ↓
                                              Splits procesados automáticamente
                                                                    ↓
                                              Reporte de Traspasos actualizado
                                                                    ↓
                                              Registrar distribución (manual o auto)
```

---

## Preguntas Frecuentes

**¿Puedo tener múltiples splits en el mismo contrato?**
Sí. Puedes combinar porcentaje + fijo + tarifa + restante. La única restricción es un split de cada tipo para `tarifa` y `restante`.

**¿Qué pasa si el webhook de Asaas llega después del registro manual?**
El sistema verifica si la cuota ya está en estado `pagada` antes de procesar. Si ya está pagada, el webhook se ignora silenciosamente.

**¿El split de tipo "restante" se envía a Asaas?**
No. El restante se calcula internamente después del pago y la deducción de tarifas. Siempre queda pendiente de registro manual.

**¿Cómo funciona el orden de cancelación de cobros en Asaas?**
Para planes de cuotas, Asaas exige que los cobros se cancelen desde la **última cuota hasta la primera**. El sistema hace esto automáticamente al cancelar un contrato.
