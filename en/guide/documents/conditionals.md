# 🔀 Conditionals in Templates

Use conditional logic to display content intelligently and dynamically in your documents.

## 📖 Introduction

Conditionals allow you to:
- Display text only when a variable has a value
- Show different content based on conditions
- Automatically hide empty sections
- Compare numeric values

## 🎯 Conditional Helpers

### `if` - Basic Conditional

Displays content if the variable exists and is true:

<div v-pre>

```handlebars
{{#if custom.notes}}
  <p><strong>Notes:</strong> {{custom.notes}}</p>
{{/if}}
```

</div>

**With alternative (`else`):**
<div v-pre>

```handlebars
{{#if custom.discount}}
  <p>Discount applied: {{custom.discount}}%</p>
{{else}}
  <p>No discount</p>
{{/if}}
```

</div>

### `ifExists` - Check Existence

Checks if the variable exists (not `null` or `undefined`):

<div v-pre>

```handlebars
{{#ifExists customer.phone}}
  <p>Phone: {{customer.phone}}</p>
{{/ifExists}}
```

</div>

### `ifNotEmpty` - Check if Not Empty

Useful for displaying suffixes or prefixes only when there's a value:

<div v-pre>

```handlebars
{{#ifNotEmpty custom.discount}}
  {{custom.discount}}%
{{/ifNotEmpty}}
```

</div>

**Practical example:**
<div v-pre>

```handlebars
<p>Discount: {{#ifNotEmpty custom.discount}}{{custom.discount}}%{{/ifNotEmpty}}</p>
```

</div>
- ✅ If `custom.discount = 10` → "Discount: 10%"
- ✅ If `custom.discount` is empty → "Discount: "

### `ifEquals` - Equality Comparison

Compares if two values are equal:

<div v-pre>

```handlebars
{{#ifEquals custom.type "premium"}}
  <div class="badge-premium">Premium Customer</div>
{{/ifEquals}}
```

</div>

**With alternative:**
<div v-pre>

```handlebars
{{#ifEquals custom.status "active"}}
  <span style="color: green;">✓ Active</span>
{{else}}
  <span style="color: red;">✗ Inactive</span>
{{/ifEquals}}
```

</div>

### `ifNotEquals` - Difference Comparison

Checks if two values are different:

<div v-pre>

```handlebars
{{#ifNotEquals custom.type "basic"}}
  <p>Exclusive benefits included!</p>
{{/ifNotEquals}}
```

</div>

### `ifGreaterThan` - Greater Than

Compares if a value is greater than another:

<div v-pre>

```handlebars
{{#ifGreaterThan custom.value 1000}}
  <p style="color: red;">⚠️ Value above standard limit</p>
{{/ifGreaterThan}}
```

</div>

**With alternative:**
<div v-pre>

```handlebars
{{#ifGreaterThan custom.age 18}}
  <p>Adult</p>
{{else}}
  <p>Minor - Guardian required</p>
{{/ifGreaterThan}}
```

</div>

### `ifLessThan` - Less Than

Compares if a value is less than another:

<div v-pre>

```handlebars
{{#ifLessThan custom.installments 12}}
  <p>Cash payment or installments up to {{custom.installments}}x</p>
{{/ifLessThan}}
```

</div>

## 💡 Practical Examples

### 1. Display Discount Only if Present

<div v-pre>

```html
<h2>Values</h2>
<p>Total Value: $ {{custom.total_value}}</p>

{{#ifNotEmpty custom.discount}}
<p>Discount: {{custom.discount}}%</p>
<p>Value with Discount: $ {{custom.final_value}}</p>
{{/ifNotEmpty}}
```

</div>

### 2. Show Complete or Partial Address

<div v-pre>

```html
<h3>Address</h3>
<p>{{customer.address.street}}, {{customer.address.number}}</p>

{{#ifExists customer.address.complement}}
<p>{{customer.address.complement}}</p>
{{/ifExists}}

<p>{{customer.address.city}}/{{customer.address.state}} - ZIP: {{customer.address.zip_code}}</p>
```

</div>

### 3. Customer Classification by Value

<div v-pre>

```html
{{#ifGreaterThan custom.contract_value 50000}}
  <div style="background: gold; padding: 10px;">
    <h3>🌟 VIP CUSTOMER</h3>
    <p>Priority service and exclusive benefits</p>
  </div>
{{else}}
  {{#ifGreaterThan custom.contract_value 10000}}
    <div style="background: silver; padding: 10px;">
      <h3>⭐ PREMIUM CUSTOMER</h3>
      <p>Benefits and special discounts</p>
    </div>
  {{else}}
    <div style="background: lightblue; padding: 10px;">
      <h3>✓ STANDARD CUSTOMER</h3>
      <p>Quality service guaranteed</p>
    </div>
  {{/ifGreaterThan}}
{{/ifGreaterThan}}
```

</div>

### 4. Payment Status

<div v-pre>

```html
<h2>Payment Status</h2>

{{#ifEquals custom.payment_status "paid"}}
  <p style="color: green; font-weight: bold;">✓ PAID</p>
  <p>Payment Date: {{dateShortEN custom.payment_date}}</p>
{{else}}
  {{#ifEquals custom.payment_status "pending"}}
    <p style="color: orange; font-weight: bold;">⏳ PENDING</p>
    <p>Due Date: {{dateShortEN custom.due_date}}</p>
  {{else}}
    <p style="color: red; font-weight: bold;">✗ OVERDUE</p>
    <p>Was due on: {{dateShortEN custom.due_date}}</p>
  {{/ifEquals}}
{{/ifEquals}}
```

</div>

### 5. Optional Customer Data

<div v-pre>

```html
<h2>Contact Information</h2>

<p><strong>Name:</strong> {{customer.name}}</p>
<p><strong>Email:</strong> {{customer.email}}</p>

{{#ifExists customer.phone}}
<p><strong>Phone:</strong> {{customer.phone}}</p>
{{/ifExists}}

{{#ifExists customer.mobile}}
<p><strong>Mobile:</strong> {{customer.mobile}}</p>
{{/ifExists}}

{{#ifExists customer.whatsapp}}
<p><strong>WhatsApp:</strong> {{customer.whatsapp}}</p>
{{/ifExists}}
```

</div>

### 6. Conditional Clauses in Contract

<div v-pre>

```html
<h2>SPECIAL CLAUSES</h2>

{{#ifGreaterThan custom.term_months 12}}
<p><strong>Clause 1:</strong> Due to the extended term of {{custom.term_months}} months, 
special automatic renewal conditions apply.</p>
{{/ifGreaterThan}}

{{#ifNotEmpty custom.warranty}}
<p><strong>Clause 2:</strong> The CONTRACTOR offers a {{custom.warranty}} warranty 
against manufacturing and workmanship defects.</p>
{{/ifNotEmpty}}

{{#ifEquals custom.payment_type "installment"}}
<p><strong>Clause 3:</strong> Payment will be made in {{custom.num_installments}} 
monthly installments of $ {{custom.installment_value}}.</p>
{{/ifEquals}}
```

</div>

### 7. Conditional Notes Section

<div v-pre>

```html
{{#if custom.notes}}
<div style="border: 1px solid #ccc; padding: 15px; margin-top: 20px;">
  <h3>📝 Notes</h3>
  <p>{{custom.notes}}</p>
</div>
{{/if}}
```

</div>

## 🎨 Conditionals with Style

### Apply CSS Classes Conditionally

<div v-pre>

```html
<div style="{{#ifEquals custom.priority 'high'}}background: #ffcccc;{{else}}background: #ccffcc;{{/ifEquals}} padding: 10px;">
  <p>Priority: {{uppercase custom.priority}}</p>
</div>
```

</div>

### Conditional Icons and Emojis

<div v-pre>

```html
<p>
  Status: 
  {{#ifEquals custom.status "completed"}}✅{{/ifEquals}}
  {{#ifEquals custom.status "in_progress"}}🔄{{/ifEquals}}
  {{#ifEquals custom.status "pending"}}⏳{{/ifEquals}}
  {{uppercase custom.status}}
</p>
```

</div>

## 🚨 Advanced Use Cases

### Age Validation for Contract

<div v-pre>

```html
{{#ifLessThan customer.age 18}}
<div style="background: #fff3cd; border: 2px solid #856404; padding: 15px; margin: 20px 0;">
  <h3>⚠️ WARNING</h3>
  <p>Minor customer. Legal guardian signature required.</p>
  <p><strong>Guardian:</strong> {{custom.guardian_name}}</p>
  <p><strong>Guardian SSN:</strong> {{custom.guardian_ssn}}</p>
</div>
{{/ifLessThan}}
```

</div>

### Value Range with Multiple Conditions

<div v-pre>

```html
<h2>Investment Category</h2>

{{#ifGreaterThan custom.investment 100000}}
  <p style="font-size: 20px; color: gold;">💎 DIAMOND INVESTOR</p>
  <ul>
    <li>24/7 personalized advisory</li>
    <li>Preferential returns</li>
    <li>Exclusive events</li>
  </ul>
{{else}}
  {{#ifGreaterThan custom.investment 50000}}
    <p style="font-size: 18px; color: silver;">🌟 PLATINUM INVESTOR</p>
    <ul>
      <li>Dedicated advisory</li>
      <li>Monthly reports</li>
    </ul>
  {{else}}
    <p style="font-size: 16px; color: bronze;">⭐ GOLD INVESTOR</p>
    <ul>
      <li>Priority support</li>
      <li>Quarterly reports</li>
    </ul>
  {{/ifGreaterThan}}
{{/ifGreaterThan}}
```

</div>

## ✅ Best Practices

### ✅ Do
- Use conditionals to **hide empty sections**
- Combine with formatting helpers: <code v-pre>{{#if custom.name}}{{uppercase custom.name}}{{/if}}</code>
- Provide **alternatives with `else`** when appropriate
- Use `ifNotEmpty` for **suffixes/prefixes** (%, $, etc)

### ❌ Avoid
- Very complex and nested conditionals (makes maintenance difficult)
- Repeating code in each condition (use CSS classes when possible)
- Forgetting to close tags <code v-pre>{{/if}}</code>, <code v-pre>{{/ifEquals}}</code>, etc

## 🎯 Helper Summary

| Helper | Use | Example |
|--------|-----|---------|
| `if` | Checks if exists and is true | <code v-pre>{{#if var}}...{{/if}}</code> |
| `ifExists` | Checks if not null/undefined | <code v-pre>{{#ifExists var}}...{{/ifExists}}</code> |
| `ifNotEmpty` | Checks if not empty (0, "", null) | <code v-pre>{{#ifNotEmpty var}}...{{/ifNotEmpty}}</code> |
| `ifEquals` | Equality comparison | <code v-pre>{{#ifEquals var "value"}}...{{/ifEquals}}</code> |
| `ifNotEquals` | Difference comparison | <code v-pre>{{#ifNotEquals var "value"}}...{{/ifNotEquals}}</code> |
| `ifGreaterThan` | Greater than | <code v-pre>{{#ifGreaterThan var 100}}...{{/ifGreaterThan}}</code> |
| `ifLessThan` | Less than | <code v-pre>{{#ifLessThan var 100}}...{{/ifLessThan}}</code> |

::: tip 💡 Remember
All conditional helpers can use <code v-pre>{{else}}</code> to specify alternative content when the condition is false.
:::

## 🎬 Conclusion

With conditionals, your documents become truly dynamic and intelligent, automatically adapting to available data and specific business rules for each situation!
