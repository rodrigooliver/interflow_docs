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
{{inWordsPT custom.quantidade}}
```

</div>

**Ejemplo:** `250` → "duzentos e cinquenta"

#### Inglés
<div v-pre>

```handlebars
{{inWordsEN custom.quantity}}
```

</div>

**Ejemplo:** `250` → "two hundred and fifty"

#### Español
<div v-pre>

```handlebars
{{inWordsES custom.cantidad}}
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
{{inWordsBRL custom.valor}}
```

</div>

**Ejemplo:** `1350.50` → "mil trezentos e cinquenta reais e cinquenta centavos"

#### Dólar Estadounidense (USD)
<div v-pre>

```handlebars
{{inWordsUSD custom.value}}
```

</div>

**Ejemplo:** `1350.50` → "one thousand three hundred fifty dollars and fifty cents"

#### Euro (EUR)
<div v-pre>

```handlebars
{{inWordsEUR custom.value}}
```

</div>

**Ejemplo:** `1350.50` → "one thousand three hundred fifty euros and fifty cents"

#### Peso Argentino (ARS)
<div v-pre>

```handlebars
{{inWordsPesos custom.valor}}
```

</div>

**Ejemplo:** `1350.50` → "mil trescientos cincuenta pesos con cincuenta centavos"

#### Guaraní Paraguayo (PYG)
<div v-pre>

```handlebars
{{inWordsGuaranies custom.monto}}
```

</div>

**Ejemplo:** `1350` → "mil trescientos cincuenta guaraníes"

::: warning ⚠️ Atención
Los helpers monetarios incluyen el número Y el nombre de la moneda. No agregue "reais", "dólares", etc. manualmente, ya que quedará duplicado.
:::

### 📅 Fechas en Letras

#### Portugués (PT-BR)

**Formato completo:**
<div v-pre>

```handlebars
{{datePT date.current_date}}
```

</div>

**Resultado:** "24 de fevereiro de 2026"

**Formato corto:**
<div v-pre>

```handlebars
{{dateShortPT date.current_date}}
```

</div>

**Resultado:** "24/02/2026"

#### Inglés (EN-US)

**Formato completo:**
<div v-pre>

```handlebars
{{dateEN date.current_date}}
```

</div>

**Resultado:** "February 24, 2026"

**Formato corto:**
<div v-pre>

```handlebars
{{dateShortEN date.current_date}}
```

</div>

**Resultado:** "02/24/2026"

#### Español (ES)

**Formato completo:**
<div v-pre>

```handlebars
{{dateES date.current_date}}
```

</div>

**Resultado:** "24 de febrero de 2026"

**Formato corto:**
<div v-pre>

```handlebars
{{dateShortES date.current_date}}
```

</div>

**Resultado:** "24/02/2026"

#### Usando con campos personalizados

<div v-pre>

```handlebars
Fecha de Vencimiento: {{dateES custom.fecha_vencimiento}}
```

</div>

::: tip 💡 Fecha de Hoy
Use `"today"` para mostrar la fecha actual:
<div v-pre>

```handlebars
{{dateES "today"}}
```

</div>
:::

## 🔗 Combinar Helpers

Puede combinar múltiples helpers usando paréntesis:

### Texto en Mayúsculas + En Letras
<div v-pre>

```handlebars
{{uppercase (inWordsPesos custom.valor)}}
```

</div>

**Resultado:** "MIL TRESCIENTOS CINCUENTA PESOS CON CINCUENTA CENTAVOS"

### Fecha en Mayúsculas
<div v-pre>

```handlebars
{{uppercase (dateES date.current_date)}}
```

</div>

**Resultado:** "24 DE FEBRERO DE 2026"

### Title Case + Moneda
<div v-pre>

```handlebars
{{titleCase (inWordsUSD custom.value)}}
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
<p>El valor total de este contrato es de <strong>$ {{custom.valor}}</strong> ({{inWordsPesos custom.valor}}).</p>

<p>Firmado el {{dateES "today"}}.</p>
```

</div>

### Ficha de Registro Multilingüe
<div v-pre>

```html
<h2>Información del Cliente</h2>
<p><strong>Nombre:</strong> {{titleCase customer.name}}</p>
<p><strong>Email:</strong> {{lowercase customer.email}}</p>
<p><strong>Fecha de Registro:</strong> {{dateES date.current_date}}</p>
```

</div>

### Informe Financiero
<div v-pre>

```html
<h2>Informe Financiero</h2>

<table>
  <tr>
    <td>Valor Principal:</td>
    <td>{{inWordsPesos custom.valor_principal}}</td>
  </tr>
  <tr>
    <td>Fecha de Emisión:</td>
    <td>{{dateShortES "today"}}</td>
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
