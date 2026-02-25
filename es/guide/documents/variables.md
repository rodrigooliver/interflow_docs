# 🔧 Variables y Helpers

Aprenda a usar variables dinámicas y helpers Handlebars para crear documentos potentes y flexibles.

## 📦 Variables Disponibles

### 👤 Datos del Cliente

<div v-pre>

```handlebars
{{customer.name}}          // Nombre completo
{{customer.email}}         // Email
{{customer.phone}}         // Teléfono
{{customer.document}}      // DNI/CUIT
{{customer.birth_date}}    // Fecha de nacimiento
```

</div>

#### 📍 Dirección
<div v-pre>

```handlebars
{{customer.address.street}}      // Calle/Avenida
{{customer.address.number}}      // Número
{{customer.address.complement}}  // Complemento
{{customer.address.neighborhood}}// Barrio
{{customer.address.city}}        // Ciudad
{{customer.address.state}}       // Estado/Provincia
{{customer.address.zip_code}}    // Código Postal
{{customer.address.country}}     // País
```

</div>

### 📅 Datos del Sistema

<div v-pre>

```handlebars
{{date.current_date}}      // Fecha actual (2026-02-24)
{{date.current_time}}      // Hora actual (14:30:00)
{{organization.name}}      // Nombre de la organización
{{user.name}}              // Nombre del usuario que generó
```

</div>

### 🎯 Variables Personalizadas

Cree variables específicas para su plantilla:

<div v-pre>

```handlebars
{{custom.nombre_variable}}   // Valor personalizado
```

</div>

**Ejemplo:**
<div v-pre>

```handlebars
Valor del Contrato: $ {{custom.valor}}
Plazo de Entrega: {{custom.plazo}} días
Descuento: {{custom.descuento}}%
```

</div>

## 🛠️ Helpers Handlebars

Los helpers son funciones que transforman datos. Use la sintaxis: <code v-pre>{{helper valor}}</code>

### 🔤 Transformación de Texto

#### Mayúsculas
<div v-pre>

```handlebars
{{uppercase customer.name}}
```

</div>

**Resultado:** JUAN SILVA

#### Minúsculas
<div v-pre>

```handlebars
{{lowercase customer.name}}
```

</div>

**Resultado:** juan silva

#### Capitalizar (primera letra)
<div v-pre>

```handlebars
{{capitalize customer.name}}
```

</div>

**Resultado:** Juan silva

#### Title Case (todas las palabras)
<div v-pre>

```handlebars
{{titleCase customer.name}}
```

</div>

**Resultado:** Juan Silva

### 🔢 Números en Letras (Generales)

#### Portugués
<div v-pre>

```handlebars
{{formatInWordsPT custom.quantidade}}
```

</div>

**Ejemplo:** `250` → "duzentos e cinquenta"

#### Inglés
<div v-pre>

```handlebars
{{formatInWordsEN custom.quantity}}
```

</div>

**Ejemplo:** `250` → "two hundred and fifty"

#### Español
<div v-pre>

```handlebars
{{formatInWordsES custom.cantidad}}
```

</div>

**Ejemplo:** `250` → "doscientos cincuenta"

### 💰 Monedas (Número + Nombre de la Moneda)

::: tip 💡 Consejo
Los helpers de moneda convierten el número y agregan el nombre de la moneda en letras.
:::

#### Real Brasileño (BRL)
<div v-pre>

```handlebars
{{formatInWordsBRL custom.valor}}
```

</div>

**Ejemplo:** `1350.50` → "mil trezentos e cinquenta reais e cinquenta centavos"

#### Dólar Estadounidense (USD)
<div v-pre>

```handlebars
{{formatInWordsUSD custom.value}}
```

</div>

**Ejemplo:** `1350.50` → "one thousand three hundred fifty dollars and fifty cents"

#### Euro (EUR)
<div v-pre>

```handlebars
{{formatInWordsEUR custom.value}}
```

</div>

**Ejemplo:** `1350.50` → "one thousand three hundred fifty euros and fifty cents"

#### Peso Argentino (ARS)
<div v-pre>

```handlebars
{{formatInWordsARS custom.valor}}
```

</div>

**Ejemplo:** `1350.50` → "mil trescientos cincuenta pesos argentinos"

#### Guaraní Paraguayo (PYG)
<div v-pre>

```handlebars
{{formatInWordsPYG custom.monto}}
```

</div>

**Ejemplo:** `1350` → "mil trescientos cincuenta guaraníes"

::: warning ⚠️ Atención
Los helpers monetarios incluyen el número Y el nombre de la moneda. No agregue "reais", "dólares", etc. manualmente, ya que quedará duplicado.
:::

### 💵 Formato de Moneda (Símbolo)

Formatea el valor numérico con símbolo de moneda. Use el helper del país:

<div v-pre>

```handlebars
{{formatCurrencyBRL custom.valor}}     // R$ 1.350,50
{{formatCurrencyUSD custom.valor}}     // $1,350.50
{{formatCurrencyEUR custom.valor}}     // 1.350,50 €
{{formatCurrencyARS custom.valor}}     // $ 1.350,50
```

</div>

`formatCurrency` (sin sufijo) retorna solo el número formateado (1.350,50), sin símbolo.

### 📅 Fechas

#### Formato completo (PT, EN, ES)
<div v-pre>

```handlebars
{{formatDatePT date.current_date}}     // 24 de fevereiro de 2026
{{formatDateEN date.current_date}}     // February 24, 2026
{{formatDateES date.current_date}}     // 24 de febrero de 2026
```

</div>

#### Formato corto
<div v-pre>

```handlebars
{{formatDateShortPT date.current_date}}  // 24/02/2026
{{formatDateShortEN date.current_date}}  // 02/24/2026
{{formatDateShortES date.current_date}}  // 24/02/2026
```

</div>

#### Día, mes y año (separados, acepta GMT)
<div v-pre>

```handlebars
{{formatDay date.current_date}}        // 24
{{formatMonthPT date.current_date}}    // fevereiro
{{formatMonthEN date.current_date}}    // February
{{formatMonthES date.current_date}}    // febrero
{{formatYear date.current_date}}       // 2026
```

</div>

#### Fecha y hora (acepta GMT, use `"now"` para ahora)
<div v-pre>

```handlebars
{{formatDateTimePT date.current_date}}           // 24/02/2026 às 14:30
{{formatDateTimePT "now" -3}}                    // Fecha/hora actual en GMT-3
{{formatDateTimeEN custom.fecha_hora}}           // Feb 24, 2026 at 14:30
{{formatDateTimeES custom.fecha_hora -4}}        // Con offset GMT-4
```

</div>

#### Solo hora (acepta GMT)
<div v-pre>

```handlebars
{{formatTime custom.horario}}          // 14:30
{{formatTimeWithSeconds custom.horario}}  // 14:30:00
{{formatTime "now" -3}}                // Hora actual en GMT-3
```

</div>

#### Usando con campos personalizados

<div v-pre>

```handlebars
Fecha de Vencimiento: {{formatDateES custom.fecha_vencimiento}}
```

</div>

::: tip 💡 Fecha y hora actuales
Use `"today"` para la fecha actual y `"now"` para fecha/hora actual:
<div v-pre>

```handlebars
{{formatDateES "today"}}
{{formatDateTimeES "now" -3}}
```

</div>
:::

## 🔗 Combinar Helpers

Puede combinar múltiples helpers usando paréntesis:

### Texto en Mayúsculas + En Letras
<div v-pre>

```handlebars
{{uppercase (formatInWordsARS custom.valor)}}
```

</div>

**Resultado:** "MIL TRESCIENTOS CINCUENTA PESOS ARGENTINOS"

### Fecha en Mayúsculas
<div v-pre>

```handlebars
{{uppercase (formatDateES date.current_date)}}
```

</div>

**Resultado:** "24 DE FEBRERO DE 2026"

### Title Case + Moneda
<div v-pre>

```handlebars
{{titleCase (formatInWordsUSD custom.value)}}
```

</div>

**Resultado:** "One Thousand Three Hundred Fifty Dollars And Fifty Cents"

## 💡 Ejemplos Prácticos

### Contrato de Prestación de Servicios
<div v-pre>

```html
<h1>CONTRATO DE PRESTACIÓN DE SERVICIOS</h1>

<p><strong>CONTRATANTE:</strong> {{uppercase customer.name}}</p>
<p><strong>DNI:</strong> {{customer.document}}</p>
<p><strong>Dirección:</strong> {{customer.address.street}}, {{customer.address.number}} - {{customer.address.city}}/{{customer.address.state}}</p>

<h2>VALOR DEL CONTRATO</h2>
<p>El valor total de este contrato es de <strong>{{formatCurrencyARS custom.valor}}</strong> ({{formatInWordsARS custom.valor}}).</p>

<p>Firmado el {{formatDateES "today"}}.</p>
```

</div>

### Ficha de Registro Multilingüe
<div v-pre>

```html
<h2>Información del Cliente</h2>
<p><strong>Nombre:</strong> {{titleCase customer.name}}</p>
<p><strong>Email:</strong> {{lowercase customer.email}}</p>
<p><strong>Fecha de Registro:</strong> {{formatDateES date.current_date}}</p>
```

</div>

### Informe Financiero
<div v-pre>

```html
<h2>Informe Financiero</h2>

<table>
  <tr>
    <td>Valor Principal:</td>
    <td>{{formatInWordsARS custom.valor_principal}}</td>
  </tr>
  <tr>
    <td>Fecha de Emisión:</td>
    <td>{{formatDateShortES "today"}}</td>
  </tr>
</table>
```

</div>

## 🎯 Consejos Avanzados

### 1. Formato Consistente
Use siempre el mismo helper para tipos de datos similares:
<div v-pre>

```handlebars
{{titleCase customer.name}}     // ✅ Consistente
{{uppercase customer.name}}     // ❌ Diferente del estándar
```

</div>

### 2. Contexto Visual
Agregue contexto alrededor de las variables:
<div v-pre>

```handlebars
DNI: {{customer.document}}                    // ✅ Con contexto
{{customer.document}}                          // ❌ Sin contexto
```

</div>

### 3. Valores Predeterminados
Para variables opcionales, considere usar condicionales (vea [Condicionales](./conditionals)):
<div v-pre>

```handlebars
{{#if custom.observaciones}}
  <p><strong>Observaciones:</strong> {{custom.observaciones}}</p>
{{/if}}
```

</div>

## 🎬 Próximo Paso

Aprenda a usar [Condicionales](./conditionals) para crear documentos aún más inteligentes y dinámicos!
