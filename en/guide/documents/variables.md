# 🔧 Variables & Helpers

Learn to use dynamic variables and Handlebars helpers to create powerful and flexible documents.

## 📦 Available Variables

### 👤 Customer Data

<div v-pre>

```handlebars
{{customer.name}}          // Full name
{{customer.email}}         // Email
{{customer.phone}}         // Phone
{{customer.document}}      // CPF/SSN
{{customer.birth_date}}    // Date of birth
```

</div>

#### 📍 Address
<div v-pre>

```handlebars
{{customer.address.street}}      // Street/Avenue
{{customer.address.number}}      // Number
{{customer.address.complement}}  // Complement
{{customer.address.neighborhood}}// Neighborhood
{{customer.address.city}}        // City
{{customer.address.state}}       // State
{{customer.address.zip_code}}    // ZIP Code
{{customer.address.country}}     // Country
```

</div>

### 📅 System Data

<div v-pre>

```handlebars
{{date.current_date}}      // Current date (2026-02-24)
{{date.current_time}}      // Current time (14:30:00)
{{organization.name}}      // Organization name
{{user.name}}              // Name of user who generated
```

</div>

### 🎯 Custom Variables

Create specific variables for your template:

<div v-pre>

```handlebars
{{custom.variable_name}}   // Custom value
```

</div>

**Example:**
<div v-pre>

```handlebars
Contract Amount: $ {{custom.amount}}
Delivery Term: {{custom.term}} days
Discount: {{custom.discount}}%
```

</div>

## 🛠️ Handlebars Helpers

Helpers are functions that transform data. Use the syntax: <code v-pre>{{helper value}}</code>

### 🔤 Text Transformation

#### Uppercase
<div v-pre>

```handlebars
{{uppercase customer.name}}
```

</div>

**Result:** JOHN SMITH

#### Lowercase
<div v-pre>

```handlebars
{{lowercase customer.name}}
```

</div>

**Result:** john smith

#### Capitalize (first letter)
<div v-pre>

```handlebars
{{capitalize customer.name}}
```

</div>

**Result:** John smith

#### Title Case (all words)
<div v-pre>

```handlebars
{{titleCase customer.name}}
```

</div>

**Result:** John Smith

### 🔢 Numbers in Words (General)

#### Portuguese
<div v-pre>

```handlebars
{{formatInWordsPT custom.quantidade}}
```

</div>

**Example:** `250` → "duzentos e cinquenta"

#### English
<div v-pre>

```handlebars
{{formatInWordsEN custom.quantity}}
```

</div>

**Example:** `250` → "two hundred and fifty"

#### Spanish
<div v-pre>

```handlebars
{{formatInWordsES custom.cantidad}}
```

</div>

**Example:** `250` → "doscientos cincuenta"

### 💰 Currencies (Number + Currency Name)

::: tip 💡 Tip
Currency helpers convert the number and add the currency name in words.
:::

#### Brazilian Real (BRL)
<div v-pre>

```handlebars
{{formatInWordsBRL custom.valor}}
```

</div>

**Example:** `1350.50` → "one thousand three hundred fifty reais and fifty centavos"

#### US Dollar (USD)
<div v-pre>

```handlebars
{{formatInWordsUSD custom.value}}
```

</div>

**Example:** `1350.50` → "one thousand three hundred fifty dollars and fifty cents"

#### Euro (EUR)
<div v-pre>

```handlebars
{{formatInWordsEUR custom.value}}
```

</div>

**Example:** `1350.50` → "one thousand three hundred fifty euros and fifty cents"

#### Argentine Peso (ARS)
<div v-pre>

```handlebars
{{formatInWordsARS custom.valor}}
```

</div>

**Example:** `1350.50` → "mil trescientos cincuenta pesos argentinos"

#### Paraguayan Guarani (PYG)
<div v-pre>

```handlebars
{{formatInWordsPYG custom.monto}}
```

</div>

**Example:** `1350` → "mil trescientos cincuenta guaraníes"

::: warning ⚠️ Warning
Monetary helpers include both the number AND the currency name. Don't add "reais", "dollars", etc. manually, as it will be duplicated.
:::

### 💵 Currency Format (Symbol)

Formats numeric value with currency symbol. Use the country helper:

<div v-pre>

```handlebars
{{formatCurrencyBRL custom.valor}}     // R$ 1,350.50
{{formatCurrencyUSD custom.valor}}     // $1,350.50
{{formatCurrencyEUR custom.valor}}     // 1,350.50 €
{{formatCurrencyARS custom.valor}}     // $ 1,350.50
```

</div>

`formatCurrency` (no suffix) returns only the formatted number (1,350.50), without symbol.

### 📅 Dates

#### Full format (PT, EN, ES)
<div v-pre>

```handlebars
{{formatDatePT date.current_date}}     // 24 de fevereiro de 2026
{{formatDateEN date.current_date}}     // February 24, 2026
{{formatDateES date.current_date}}     // 24 de febrero de 2026
```

</div>

#### Short format
<div v-pre>

```handlebars
{{formatDateShortPT date.current_date}}  // 24/02/2026
{{formatDateShortEN date.current_date}}  // 02/24/2026
{{formatDateShortES date.current_date}}  // 24/02/2026
```

</div>

#### Day, month and year (separate, accepts GMT)
<div v-pre>

```handlebars
{{formatDay date.current_date}}        // 24
{{formatMonthPT date.current_date}}    // fevereiro
{{formatMonthEN date.current_date}}    // February
{{formatMonthES date.current_date}}    // febrero
{{formatYear date.current_date}}       // 2026
```

</div>

#### Date and time (accepts GMT, use `"now"` for current)
<div v-pre>

```handlebars
{{formatDateTimePT date.current_date}}           // 24/02/2026 às 14:30
{{formatDateTimePT "now" -3}}                    // Current date/time in GMT-3
{{formatDateTimeEN custom.date_time}}            // Feb 24, 2026 at 14:30
{{formatDateTimeES custom.date_time -4}}         // With GMT-4 offset
```

</div>

#### Time only (accepts GMT)
<div v-pre>

```handlebars
{{formatTime custom.time}}             // 14:30
{{formatTimeWithSeconds custom.time}}  // 14:30:00
{{formatTime "now" -3}}                // Current time in GMT-3
```

</div>

#### Using with custom fields

<div v-pre>

```handlebars
Due Date: {{formatDateEN custom.due_date}}
```

</div>

::: tip 💡 Current date and time
Use `"today"` for current date and `"now"` for current date/time:
<div v-pre>

```handlebars
{{formatDateEN "today"}}
{{formatDateTimeEN "now" -3}}
```

</div>
:::

## 🔗 Combining Helpers

You can combine multiple helpers using parentheses:

### Uppercase + In Words
<div v-pre>

```handlebars
{{uppercase (formatInWordsUSD custom.value)}}
```

</div>

**Result:** "ONE THOUSAND THREE HUNDRED FIFTY DOLLARS AND FIFTY CENTS"

### Date in Uppercase
<div v-pre>

```handlebars
{{uppercase (formatDateEN date.current_date)}}
```

</div>

**Result:** "FEBRUARY 24, 2026"

### Title Case + Currency
<div v-pre>

```handlebars
{{titleCase (formatInWordsUSD custom.value)}}
```

</div>

**Result:** "One Thousand Three Hundred Fifty Dollars And Fifty Cents"

## 💡 Practical Examples

### Service Agreement
<div v-pre>

```html
<h1>SERVICE AGREEMENT</h1>

<p><strong>CLIENT:</strong> {{uppercase customer.name}}</p>
<p><strong>SSN:</strong> {{customer.document}}</p>
<p><strong>Address:</strong> {{customer.address.street}}, {{customer.address.number}} - {{customer.address.city}}/{{customer.address.state}}</p>

<h2>CONTRACT VALUE</h2>
<p>The total value of this contract is <strong>{{formatCurrencyUSD custom.value}}</strong> ({{formatInWordsUSD custom.value}}).</p>

<p>Signed on {{formatDateEN "today"}}.</p>
```

</div>

### Multilingual Registration Form
<div v-pre>

```html
<h2>Customer Information</h2>
<p><strong>Name:</strong> {{titleCase customer.name}}</p>
<p><strong>Email:</strong> {{lowercase customer.email}}</p>
<p><strong>Registration Date:</strong> {{formatDateEN date.current_date}}</p>
```

</div>

### Financial Report
<div v-pre>

```html
<h2>Financial Report</h2>

<table>
  <tr>
    <td>Principal Amount:</td>
    <td>{{formatInWordsUSD custom.principal_amount}}</td>
  </tr>
  <tr>
    <td>Issue Date:</td>
    <td>{{formatDateShortEN "today"}}</td>
  </tr>
</table>
```

</div>

## 🎯 Advanced Tips

### 1. Consistent Formatting
Always use the same helper for similar data types:
<div v-pre>

```handlebars
{{titleCase customer.name}}     // ✅ Consistent
{{uppercase customer.name}}     // ❌ Different from standard
```

</div>

### 2. Visual Context
Add context around variables:
<div v-pre>

```handlebars
SSN: {{customer.document}}                    // ✅ With context
{{customer.document}}                          // ❌ Without context
```

</div>

### 3. Default Values
For optional variables, consider using conditionals (see [Conditionals](./conditionals)):
<div v-pre>

```handlebars
{{#if custom.notes}}
  <p><strong>Notes:</strong> {{custom.notes}}</p>
{{/if}}
```

</div>

## 🎬 Next Step

Learn to use [Conditionals](./conditionals) to create even smarter and more dynamic documents!
