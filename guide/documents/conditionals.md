# 🔀 Condicionais em Modelos

Use lógica condicional para exibir conteúdo de forma inteligente e dinâmica nos seus documentos.

## 📖 Introdução

Condicionais permitem que você:
- Exiba texto apenas quando uma variável tem valor
- Mostre conteúdo diferente baseado em condições
- Oculte seções vazias automaticamente
- Compare valores numéricos

## 🎯 Helpers Condicionais

### `if` - Condicional Básica

Exibe conteúdo se a variável existir e for verdadeira:

<div v-pre>

```handlebars
{{#if custom.observacoes}}
  <p><strong>Observações:</strong> {{custom.observacoes}}</p>
{{/if}}
```

</div>

**Com alternativa (`else`):**
<div v-pre>

```handlebars
{{#if custom.desconto}}
  <p>Desconto aplicado: {{custom.desconto}}%</p>
{{else}}
  <p>Sem desconto</p>
{{/if}}
```

</div>

### `ifExists` - Verificar Existência

Verifica se a variável existe (não é `null` ou `undefined`):

<div v-pre>

```handlebars
{{#ifExists customer.phone}}
  <p>Telefone: {{customer.phone}}</p>
{{/ifExists}}
```

</div>

### `ifNotEmpty` - Verificar se Não Está Vazio

Útil para exibir sufixos ou prefixos apenas quando há valor:

<div v-pre>

```handlebars
{{#ifNotEmpty custom.desconto}}
  {{custom.desconto}}%
{{/ifNotEmpty}}
```

</div>

**Exemplo prático:**
<div v-pre>

```handlebars
<p>Desconto: {{#ifNotEmpty custom.desconto}}{{custom.desconto}}%{{/ifNotEmpty}}</p>
```

</div>
- ✅ Se `custom.desconto = 10` → "Desconto: 10%"
- ✅ Se `custom.desconto` está vazio → "Desconto: "

### `ifEquals` - Comparação de Igualdade

Compara se dois valores são iguais:

<div v-pre>

```handlebars
{{#ifEquals custom.tipo "premium"}}
  <div class="badge-premium">Cliente Premium</div>
{{/ifEquals}}
```

</div>

**Com alternativa:**
<div v-pre>

```handlebars
{{#ifEquals custom.status "ativo"}}
  <span style="color: green;">✓ Ativo</span>
{{else}}
  <span style="color: red;">✗ Inativo</span>
{{/ifEquals}}
```

</div>

### `ifNotEquals` - Comparação de Diferença

Verifica se dois valores são diferentes:

<div v-pre>

```handlebars
{{#ifNotEquals custom.tipo "basico"}}
  <p>Benefícios exclusivos incluídos!</p>
{{/ifNotEquals}}
```

</div>

### `ifGreaterThan` - Maior Que

Compara se um valor é maior que outro:

<div v-pre>

```handlebars
{{#ifGreaterThan custom.valor 1000}}
  <p style="color: red;">⚠️ Valor acima do limite padrão</p>
{{/ifGreaterThan}}
```

</div>

**Com alternativa:**
<div v-pre>

```handlebars
{{#ifGreaterThan custom.idade 18}}
  <p>Maior de idade</p>
{{else}}
  <p>Menor de idade - Responsável necessário</p>
{{/ifGreaterThan}}
```

</div>

### `ifLessThan` - Menor Que

Compara se um valor é menor que outro:

<div v-pre>

```handlebars
{{#ifLessThan custom.parcelas 12}}
  <p>Pagamento à vista ou parcelado em até {{custom.parcelas}}x</p>
{{/ifLessThan}}
```

</div>

## 💡 Exemplos Práticos

### 1. Exibir Desconto Apenas se Houver

<div v-pre>

```html
<h2>Valores</h2>
<p>Valor Total: R$ {{custom.valor_total}}</p>

{{#ifNotEmpty custom.desconto}}
<p>Desconto: {{custom.desconto}}%</p>
<p>Valor com Desconto: R$ {{custom.valor_final}}</p>
{{/ifNotEmpty}}
```

</div>

### 2. Mostrar Endereço Completo ou Parcial

<div v-pre>

```html
<h3>Endereço</h3>
<p>{{customer.address.street}}, {{customer.address.number}}</p>

{{#ifExists customer.address.complement}}
<p>{{customer.address.complement}}</p>
{{/ifExists}}

<p>{{customer.address.city}}/{{customer.address.state}} - CEP: {{customer.address.zip_code}}</p>
```

</div>

### 3. Classificação de Cliente por Valor

<div v-pre>

```html
{{#ifGreaterThan custom.valor_contrato 50000}}
  <div style="background: gold; padding: 10px;">
    <h3>🌟 CLIENTE VIP</h3>
    <p>Atendimento prioritário e benefícios exclusivos</p>
  </div>
{{else}}
  {{#ifGreaterThan custom.valor_contrato 10000}}
    <div style="background: silver; padding: 10px;">
      <h3>⭐ CLIENTE PREMIUM</h3>
      <p>Benefícios e descontos especiais</p>
    </div>
  {{else}}
    <div style="background: lightblue; padding: 10px;">
      <h3>✓ CLIENTE PADRÃO</h3>
      <p>Atendimento de qualidade garantido</p>
    </div>
  {{/ifGreaterThan}}
{{/ifGreaterThan}}
```

</div>

### 4. Status do Pagamento

<div v-pre>

```html
<h2>Status do Pagamento</h2>

{{#ifEquals custom.status_pagamento "pago"}}
  <p style="color: green; font-weight: bold;">✓ PAGO</p>
  <p>Data do Pagamento: {{dateShortPT custom.data_pagamento}}</p>
{{else}}
  {{#ifEquals custom.status_pagamento "pendente"}}
    <p style="color: orange; font-weight: bold;">⏳ PENDENTE</p>
    <p>Vencimento: {{dateShortPT custom.data_vencimento}}</p>
  {{else}}
    <p style="color: red; font-weight: bold;">✗ ATRASADO</p>
    <p>Venceu em: {{dateShortPT custom.data_vencimento}}</p>
  {{/ifEquals}}
{{/ifEquals}}
```

</div>

### 5. Dados Opcionais do Cliente

<div v-pre>

```html
<h2>Informações de Contato</h2>

<p><strong>Nome:</strong> {{customer.name}}</p>
<p><strong>Email:</strong> {{customer.email}}</p>

{{#ifExists customer.phone}}
<p><strong>Telefone:</strong> {{customer.phone}}</p>
{{/ifExists}}

{{#ifExists customer.mobile}}
<p><strong>Celular:</strong> {{customer.mobile}}</p>
{{/ifExists}}

{{#ifExists customer.whatsapp}}
<p><strong>WhatsApp:</strong> {{customer.whatsapp}}</p>
{{/ifExists}}
```

</div>

### 6. Cláusulas Condicionais em Contrato

<div v-pre>

```html
<h2>CLÁUSULAS ESPECIAIS</h2>

{{#ifGreaterThan custom.prazo_meses 12}}
<p><strong>Cláusula 1:</strong> Devido ao prazo estendido de {{custom.prazo_meses}} meses, 
aplicam-se condições especiais de renovação automática.</p>
{{/ifGreaterThan}}

{{#ifNotEmpty custom.garantia}}
<p><strong>Cláusula 2:</strong> O CONTRATADO oferece garantia de {{custom.garantia}} 
contra defeitos de fabricação e mão de obra.</p>
{{/ifNotEmpty}}

{{#ifEquals custom.tipo_pagamento "parcelado"}}
<p><strong>Cláusula 3:</strong> O pagamento será realizado em {{custom.num_parcelas}} 
parcelas mensais de R$ {{custom.valor_parcela}}.</p>
{{/ifEquals}}
```

</div>

### 7. Seção de Observações Condicional

<div v-pre>

```html
{{#if custom.observacoes}}
<div style="border: 1px solid #ccc; padding: 15px; margin-top: 20px;">
  <h3>📝 Observações</h3>
  <p>{{custom.observacoes}}</p>
</div>
{{/if}}
```

</div>

## 🎨 Condicionais com Estilo

### Aplicar Classes CSS Condicionalmente

<div v-pre>

```html
<div style="{{#ifEquals custom.prioridade 'alta'}}background: #ffcccc;{{else}}background: #ccffcc;{{/ifEquals}} padding: 10px;">
  <p>Prioridade: {{uppercase custom.prioridade}}</p>
</div>
```

</div>

### Ícones e Emojis Condicionais

<div v-pre>

```html
<p>
  Status: 
  {{#ifEquals custom.status "concluido"}}✅{{/ifEquals}}
  {{#ifEquals custom.status "em_andamento"}}🔄{{/ifEquals}}
  {{#ifEquals custom.status "pendente"}}⏳{{/ifEquals}}
  {{uppercase custom.status}}
</p>
```

</div>

## 🚨 Casos de Uso Avançados

### Validação de Idade para Contrato

<div v-pre>

```html
{{#ifLessThan customer.idade 18}}
<div style="background: #fff3cd; border: 2px solid #856404; padding: 15px; margin: 20px 0;">
  <h3>⚠️ ATENÇÃO</h3>
  <p>Cliente menor de idade. Necessária assinatura de responsável legal.</p>
  <p><strong>Responsável:</strong> {{custom.responsavel_nome}}</p>
  <p><strong>CPF Responsável:</strong> {{custom.responsavel_cpf}}</p>
</div>
{{/ifLessThan}}
```

</div>

### Faixa de Valores com Múltiplas Condições

<div v-pre>

```html
<h2>Categoria de Investimento</h2>

{{#ifGreaterThan custom.investimento 100000}}
  <p style="font-size: 20px; color: gold;">💎 INVESTIDOR DIAMANTE</p>
  <ul>
    <li>Assessoria personalizada 24/7</li>
    <li>Rentabilidade preferencial</li>
    <li>Eventos exclusivos</li>
  </ul>
{{else}}
  {{#ifGreaterThan custom.investimento 50000}}
    <p style="font-size: 18px; color: silver;">🌟 INVESTIDOR PLATINUM</p>
    <ul>
      <li>Assessoria dedicada</li>
      <li>Relatórios mensais</li>
    </ul>
  {{else}}
    <p style="font-size: 16px; color: bronze;">⭐ INVESTIDOR GOLD</p>
    <ul>
      <li>Suporte prioritário</li>
      <li>Relatórios trimestrais</li>
    </ul>
  {{/ifGreaterThan}}
{{/ifGreaterThan}}
```

</div>

## ✅ Boas Práticas

### ✅ Faça
- Use condicionais para **ocultar seções vazias**
- Combine com helpers de formatação: <code v-pre>{{#if custom.nome}}{{uppercase custom.nome}}{{/if}}</code>
- Forneça **alternativas com `else`** quando apropriado
- Use `ifNotEmpty` para **sufixos/prefixos** (%, R$, etc)

### ❌ Evite
- Condicionais muito complexas e aninhadas (dificulta manutenção)
- Repetir código em cada condição (use CSS classes quando possível)
- Esquecer de fechar tags <code v-pre>{{/if}}</code>, <code v-pre>{{/ifEquals}}</code>, etc

## 🎯 Resumo dos Helpers

| Helper | Uso | Exemplo |
|--------|-----|---------|
| `if` | Verifica se existe e é verdadeiro | <code v-pre>{{#if var}}...{{/if}}</code> |
| `ifExists` | Verifica se não é null/undefined | <code v-pre>{{#ifExists var}}...{{/ifExists}}</code> |
| `ifNotEmpty` | Verifica se não está vazio (0, "", null) | <code v-pre>{{#ifNotEmpty var}}...{{/ifNotEmpty}}</code> |
| `ifEquals` | Compara igualdade | <code v-pre>{{#ifEquals var "valor"}}...{{/ifEquals}}</code> |
| `ifNotEquals` | Compara diferença | <code v-pre>{{#ifNotEquals var "valor"}}...{{/ifNotEquals}}</code> |
| `ifGreaterThan` | Maior que | <code v-pre>{{#ifGreaterThan var 100}}...{{/ifGreaterThan}}</code> |
| `ifLessThan` | Menor que | <code v-pre>{{#ifLessThan var 100}}...{{/ifLessThan}}</code> |

::: tip 💡 Lembre-se
Todos os helpers condicionais podem usar <code v-pre>{{else}}</code> para especificar conteúdo alternativo quando a condição for falsa.
:::

## 🎬 Conclusão

Com condicionais, seus documentos se tornam verdadeiramente dinâmicos e inteligentes, adaptando-se automaticamente aos dados disponíveis e às regras de negócio específicas de cada situação!
