# 🔀 Condicionales en Plantillas

Use lógica condicional para mostrar contenido de forma inteligente y dinámica en sus documentos.

## 📖 Introducción

Los condicionales le permiten:
- Mostrar texto solo cuando una variable tiene valor
- Mostrar contenido diferente basado en condiciones
- Ocultar secciones vacías automáticamente
- Comparar valores numéricos

## 🎯 Helpers Condicionales

### `if` - Condicional Básica

Muestra contenido si la variable existe y es verdadera:

<div v-pre>

```handlebars
{{#if custom.observaciones}}
  <p><strong>Observaciones:</strong> {{custom.observaciones}}</p>
{{/if}}
```

</div>

**Con alternativa (`else`):**
<div v-pre>

```handlebars
{{#if custom.descuento}}
  <p>Descuento aplicado: {{custom.descuento}}%</p>
{{else}}
  <p>Sin descuento</p>
{{/if}}
```

</div>

### `ifExists` - Verificar Existencia

Verifica si la variable existe (no es `null` o `undefined`):

<div v-pre>

```handlebars
{{#ifExists customer.phone}}
  <p>Teléfono: {{customer.phone}}</p>
{{/ifExists}}
```

</div>

### `ifNotEmpty` - Verificar si No Está Vacío

Útil para mostrar sufijos o prefijos solo cuando hay valor:

<div v-pre>

```handlebars
{{#ifNotEmpty custom.descuento}}
  {{custom.descuento}}%
{{/ifNotEmpty}}
```

</div>

**Ejemplo práctico:**
<div v-pre>

```handlebars
<p>Descuento: {{#ifNotEmpty custom.descuento}}{{custom.descuento}}%{{/ifNotEmpty}}</p>
```

</div>
- ✅ Si `custom.descuento = 10` → "Descuento: 10%"
- ✅ Si `custom.descuento` está vacío → "Descuento: "

### `ifEquals` - Comparación de Igualdad

Compara si dos valores son iguales:

<div v-pre>

```handlebars
{{#ifEquals custom.tipo "premium"}}
  <div class="badge-premium">Cliente Premium</div>
{{/ifEquals}}
```

</div>

**Con alternativa:**
<div v-pre>

```handlebars
{{#ifEquals custom.estado "activo"}}
  <span style="color: green;">✓ Activo</span>
{{else}}
  <span style="color: red;">✗ Inactivo</span>
{{/ifEquals}}
```

</div>

### `ifNotEquals` - Comparación de Diferencia

Verifica si dos valores son diferentes:

<div v-pre>

```handlebars
{{#ifNotEquals custom.tipo "basico"}}
  <p>¡Beneficios exclusivos incluidos!</p>
{{/ifNotEquals}}
```

</div>

### `ifGreaterThan` - Mayor Que

Compara si un valor es mayor que otro:

<div v-pre>

```handlebars
{{#ifGreaterThan custom.valor 1000}}
  <p style="color: red;">⚠️ Valor por encima del límite estándar</p>
{{/ifGreaterThan}}
```

</div>

**Con alternativa:**
<div v-pre>

```handlebars
{{#ifGreaterThan custom.edad 18}}
  <p>Mayor de edad</p>
{{else}}
  <p>Menor de edad - Responsable necesario</p>
{{/ifGreaterThan}}
```

</div>

### `ifLessThan` - Menor Que

Compara si un valor es menor que otro:

<div v-pre>

```handlebars
{{#ifLessThan custom.cuotas 12}}
  <p>Pago al contado o a plazos hasta {{custom.cuotas}}x</p>
{{/ifLessThan}}
```

</div>

## 💡 Ejemplos Prácticos

### 1. Mostrar Descuento Solo si Existe

<div v-pre>

```html
<h2>Valores</h2>
<p>Valor Total: $ {{custom.valor_total}}</p>

{{#ifNotEmpty custom.descuento}}
<p>Descuento: {{custom.descuento}}%</p>
<p>Valor con Descuento: $ {{custom.valor_final}}</p>
{{/ifNotEmpty}}
```

</div>

### 2. Mostrar Dirección Completa o Parcial

<div v-pre>

```html
<h3>Dirección</h3>
<p>{{customer.address.street}}, {{customer.address.number}}</p>

{{#ifExists customer.address.complement}}
<p>{{customer.address.complement}}</p>
{{/ifExists}}

<p>{{customer.address.city}}/{{customer.address.state}} - CP: {{customer.address.zip_code}}</p>
```

</div>

### 3. Clasificación de Cliente por Valor

<div v-pre>

```html
{{#ifGreaterThan custom.valor_contrato 50000}}
  <div style="background: gold; padding: 10px;">
    <h3>🌟 CLIENTE VIP</h3>
    <p>Atención prioritaria y beneficios exclusivos</p>
  </div>
{{else}}
  {{#ifGreaterThan custom.valor_contrato 10000}}
    <div style="background: silver; padding: 10px;">
      <h3>⭐ CLIENTE PREMIUM</h3>
      <p>Beneficios y descuentos especiales</p>
    </div>
  {{else}}
    <div style="background: lightblue; padding: 10px;">
      <h3>✓ CLIENTE ESTÁNDAR</h3>
      <p>Atención de calidad garantizada</p>
    </div>
  {{/ifGreaterThan}}
{{/ifGreaterThan}}
```

</div>

### 4. Estado del Pago

<div v-pre>

```html
<h2>Estado del Pago</h2>

{{#ifEquals custom.estado_pago "pagado"}}
  <p style="color: green; font-weight: bold;">✓ PAGADO</p>
  <p>Fecha de Pago: {{formatDateShortES custom.fecha_pago}}</p>
{{else}}
  {{#ifEquals custom.estado_pago "pendiente"}}
    <p style="color: orange; font-weight: bold;">⏳ PENDIENTE</p>
    <p>Vencimiento: {{formatDateShortES custom.fecha_vencimiento}}</p>
  {{else}}
    <p style="color: red; font-weight: bold;">✗ ATRASADO</p>
    <p>Venció el: {{formatDateShortES custom.fecha_vencimiento}}</p>
  {{/ifEquals}}
{{/ifEquals}}
```

</div>

### 5. Datos Opcionales del Cliente

<div v-pre>

```html
<h2>Información de Contacto</h2>

<p><strong>Nombre:</strong> {{customer.name}}</p>
<p><strong>Email:</strong> {{customer.email}}</p>

{{#ifExists customer.phone}}
<p><strong>Teléfono:</strong> {{customer.phone}}</p>
{{/ifExists}}

{{#ifExists customer.mobile}}
<p><strong>Celular:</strong> {{customer.mobile}}</p>
{{/ifExists}}

{{#ifExists customer.whatsapp}}
<p><strong>WhatsApp:</strong> {{customer.whatsapp}}</p>
{{/ifExists}}
```

</div>

### 6. Cláusulas Condicionales en Contrato

<div v-pre>

```html
<h2>CLÁUSULAS ESPECIALES</h2>

{{#ifGreaterThan custom.plazo_meses 12}}
<p><strong>Cláusula 1:</strong> Debido al plazo extendido de {{custom.plazo_meses}} meses, 
se aplican condiciones especiales de renovación automática.</p>
{{/ifGreaterThan}}

{{#ifNotEmpty custom.garantia}}
<p><strong>Cláusula 2:</strong> El CONTRATADO ofrece garantía de {{custom.garantia}} 
contra defectos de fabricación y mano de obra.</p>
{{/ifNotEmpty}}

{{#ifEquals custom.tipo_pago "cuotas"}}
<p><strong>Cláusula 3:</strong> El pago se realizará en {{custom.num_cuotas}} 
cuotas mensuales de $ {{custom.valor_cuota}}.</p>
{{/ifEquals}}
```

</div>

### 7. Sección de Observaciones Condicional

<div v-pre>

```html
{{#if custom.observaciones}}
<div style="border: 1px solid #ccc; padding: 15px; margin-top: 20px;">
  <h3>📝 Observaciones</h3>
  <p>{{custom.observaciones}}</p>
</div>
{{/if}}
```

</div>

## 🎨 Condicionales con Estilo

### Aplicar Clases CSS Condicionalmente

<div v-pre>

```html
<div style="{{#ifEquals custom.prioridad 'alta'}}background: #ffcccc;{{else}}background: #ccffcc;{{/ifEquals}} padding: 10px;">
  <p>Prioridad: {{uppercase custom.prioridad}}</p>
</div>
```

</div>

### Íconos y Emojis Condicionales

<div v-pre>

```html
<p>
  Estado: 
  {{#ifEquals custom.estado "completado"}}✅{{/ifEquals}}
  {{#ifEquals custom.estado "en_progreso"}}🔄{{/ifEquals}}
  {{#ifEquals custom.estado "pendiente"}}⏳{{/ifEquals}}
  {{uppercase custom.estado}}
</p>
```

</div>

## 🚨 Casos de Uso Avanzados

### Validación de Edad para Contrato

<div v-pre>

```html
{{#ifLessThan customer.edad 18}}
<div style="background: #fff3cd; border: 2px solid #856404; padding: 15px; margin: 20px 0;">
  <h3>⚠️ ATENCIÓN</h3>
  <p>Cliente menor de edad. Necesaria firma de responsable legal.</p>
  <p><strong>Responsable:</strong> {{custom.responsable_nombre}}</p>
  <p><strong>DNI Responsable:</strong> {{custom.responsable_dni}}</p>
</div>
{{/ifLessThan}}
```

</div>

### Rango de Valores con Múltiples Condiciones

<div v-pre>

```html
<h2>Categoría de Inversión</h2>

{{#ifGreaterThan custom.inversion 100000}}
  <p style="font-size: 20px; color: gold;">💎 INVERSOR DIAMANTE</p>
  <ul>
    <li>Asesoría personalizada 24/7</li>
    <li>Rentabilidad preferencial</li>
    <li>Eventos exclusivos</li>
  </ul>
{{else}}
  {{#ifGreaterThan custom.inversion 50000}}
    <p style="font-size: 18px; color: silver;">🌟 INVERSOR PLATINUM</p>
    <ul>
      <li>Asesoría dedicada</li>
      <li>Informes mensuales</li>
    </ul>
  {{else}}
    <p style="font-size: 16px; color: bronze;">⭐ INVERSOR GOLD</p>
    <ul>
      <li>Soporte prioritario</li>
      <li>Informes trimestrales</li>
    </ul>
  {{/ifGreaterThan}}
{{/ifGreaterThan}}
```

</div>

## ✅ Buenas Prácticas

### ✅ Haga
- Use condicionales para **ocultar secciones vacías**
- Combine con helpers de formato: <code v-pre>{{#if custom.nombre}}{{uppercase custom.nombre}}{{/if}}</code>
- Proporcione **alternativas con `else`** cuando sea apropiado
- Use `ifNotEmpty` para **sufijos/prefijos** (%, $, etc)

### ❌ Evite
- Condicionales muy complejas y anidadas (dificulta el mantenimiento)
- Repetir código en cada condición (use clases CSS cuando sea posible)
- Olvidar cerrar etiquetas <code v-pre>{{/if}}</code>, <code v-pre>{{/ifEquals}}</code>, etc

## 🎯 Resumen de Helpers

| Helper | Uso | Ejemplo |
|--------|-----|---------|
| `if` | Verifica si existe y es verdadero | <code v-pre>{{#if var}}...{{/if}}</code> |
| `ifExists` | Verifica si no es null/undefined | <code v-pre>{{#ifExists var}}...{{/ifExists}}</code> |
| `ifNotEmpty` | Verifica si no está vacío (0, "", null) | <code v-pre>{{#ifNotEmpty var}}...{{/ifNotEmpty}}</code> |
| `ifEquals` | Comparación de igualdad | <code v-pre>{{#ifEquals var "valor"}}...{{/ifEquals}}</code> |
| `ifNotEquals` | Comparación de diferencia | <code v-pre>{{#ifNotEquals var "valor"}}...{{/ifNotEquals}}</code> |
| `ifGreaterThan` | Mayor que | <code v-pre>{{#ifGreaterThan var 100}}...{{/ifGreaterThan}}</code> |
| `ifLessThan` | Menor que | <code v-pre>{{#ifLessThan var 100}}...{{/ifLessThan}}</code> |

::: tip 💡 Recuerde
Todos los helpers condicionales pueden usar <code v-pre>{{else}}</code> para especificar contenido alternativo cuando la condición es falsa.
:::

## 🎬 Conclusión

¡Con condicionales, sus documentos se vuelven verdaderamente dinámicos e inteligentes, adaptándose automáticamente a los datos disponibles y a las reglas de negocio específicas de cada situación!
