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
{{inWordsPT custom.quantidade}}
```

</div>

**Example:** `250` → "duzentos e cinquenta"

#### English
<div v-pre>

```handlebars
{{inWordsEN custom.quantity}}
```

</div>

**Example:** `250` → "two hundred and fifty"

#### Spanish
<div v-pre>

```handlebars
{{inWordsES custom.cantidad}}
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
{{inWordsBRL custom.valor}}
```

</div>

**Example:** `1350.50` → "one thousand three hundred fifty reais and fifty centavos"

#### US Dollar (USD)
<div v-pre>

```handlebars
{{inWordsUSD custom.value}}
```

</div>

**Example:** `1350.50` → "one thousand three hundred fifty dollars and fifty cents"

#### Euro (EUR)
<div v-pre>

```handlebars
{{inWordsEUR custom.value}}
```

</div>

**Example:** `1350.50` → "one thousand three hundred fifty euros and fifty cents"

#### Argentine Peso (ARS)
<div v-pre>

```handlebars
{{inWordsPesos custom.valor}}
```

</div>

**Example:** `1350.50` → "mil trescientos cincuenta pesos con cincuenta centavos"

#### Paraguayan Guarani (PYG)
<div v-pre>

```handlebars
{{inWordsGuaranies custom.monto}}
```

</div>

**Example:** `1350` → "mil trescientos cincuenta guaraníes"

::: warning ⚠️ Warning
Monetary helpers include both the number AND the currency name. Don't add "reais", "dollars", etc. manually, as it will be duplicated.
:::

### 📅 Dates in Words

#### Portuguese (PT-BR)

**Full format:**
<div v-pre>

```handlebars
{{datePT date.current_date}}
```

</div>

**Result:** "24 de fevereiro de 2026"

**Short format:**
<div v-pre>

```handlebars
{{dateShortPT date.current_date}}
```

</div>

**Result:** "24/02/2026"

#### English (EN-US)

**Full format:**
<div v-pre>

```handlebars
{{dateEN date.current_date}}
```

</div>

**Result:** "February 24, 2026"

**Short format:**
<div v-pre>

```handlebars
{{dateShortEN date.current_date}}
```

</div>

**Result:** "02/24/2026"

#### Spanish (ES)

**Full format:**
<div v-pre>

```handlebars
{{dateES date.current_date}}
```

</div>

**Result:** "24 de febrero de 2026"

**Short format:**
<div v-pre>

```handlebars
{{dateShortES date.current_date}}
```

</div>

**Result:** "24/02/2026"

#### Using with custom fields

<div v-pre>

```handlebars
Due Date: {{dateEN custom.due_date}}
```

</div>

::: tip 💡 Today's Date
Use `"today"` to display the current date:
<div v-pre>

```handlebars
{{dateEN "today"}}
```

</div>
:::

## 🔗 Combining Helpers

You can combine multiple helpers using parentheses:

### Uppercase + In Words
<div v-pre>

```handlebars
{{uppercase (inWordsUSD custom.value)}}
```

</div>

**Result:** "ONE THOUSAND THREE HUNDRED FIFTY DOLLARS AND FIFTY CENTS"

### Date in Uppercase
<div v-pre>

```handlebars
{{uppercase (dateEN date.current_date)}}
```

</div>

**Result:** "FEBRUARY 24, 2026"

### Title Case + Currency
<div v-pre>

```handlebars
{{titleCase (inWordsUSD custom.value)}}
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
<p>The total value of this contract is <strong>$ {{custom.value}}</strong> ({{inWordsUSD custom.value}}).</p>

<p>Signed on {{dateEN "today"}}.</p>
```

</div>

### Multilingual Registration Form
<div v-pre>

```html
<h2>Customer Information</h2>
<p><strong>Name:</strong> {{titleCase customer.name}}</p>
<p><strong>Email:</strong> {{lowercase customer.email}}</p>
<p><strong>Registration Date:</strong> {{dateEN date.current_date}}</p>
```

</div>

### Financial Report
<div v-pre>

```html
<h2>Financial Report</h2>

<table>
  <tr>
    <td>Principal Amount:</td>
    <td>{{inWordsUSD custom.principal_amount}}</td>
  </tr>
  <tr>
    <td>Issue Date:</td>
    <td>{{dateShortEN "today"}}</td>
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
