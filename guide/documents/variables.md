# 🔧 Variáveis e Helpers

Aprenda a usar variáveis dinâmicas e helpers Handlebars para criar documentos poderosos e flexíveis.

## 📦 Variáveis Disponíveis

### 👤 Dados do Cliente

<div v-pre>

```handlebars
{{customer.name}}          // Nome completo
{{customer.email}}         // Email
{{customer.phone}}         // Telefone
{{customer.document}}      // CPF/CNPJ
{{customer.birth_date}}    // Data de nascimento
```

</div>

#### 📍 Endereço
<div v-pre>

```handlebars
{{customer.address.street}}      // Rua/Avenida
{{customer.address.number}}      // Número
{{customer.address.complement}}  // Complemento
{{customer.address.neighborhood}}// Bairro
{{customer.address.city}}        // Cidade
{{customer.address.state}}       // Estado (UF)
{{customer.address.zip_code}}    // CEP
{{customer.address.country}}     // País
```

</div>

### 📅 Dados do Sistema

<div v-pre>

```handlebars
{{date.current_date}}      // Data atual (2026-02-24)
{{date.current_time}}      // Hora atual (14:30:00)
{{organization.name}}      // Nome da organização
{{user.name}}              // Nome do usuário que gerou
```

</div>

### 🎯 Variáveis Customizadas

Crie variáveis específicas para seu modelo:

<div v-pre>

```handlebars
{{custom.nome_variavel}}   // Valor personalizado
```

</div>

**Exemplo:**
<div v-pre>

```handlebars
Valor do Contrato: R$ {{custom.valor}}
Prazo de Entrega: {{custom.prazo}} dias
Desconto: {{custom.desconto}}%
```

</div>

## 🛠️ Helpers Handlebars

Helpers são funções que transformam dados. Use a sintaxe: <code v-pre>{{helper valor}}</code>

### 🔤 Transformação de Texto

#### Maiúsculas
<div v-pre>

```handlebars
{{uppercase customer.name}}
```

</div>

**Resultado:** JOÃO SILVA

#### Minúsculas
<div v-pre>

```handlebars
{{lowercase customer.name}}
```

</div>

**Resultado:** joão silva

#### Capitalizar (primeira letra)
<div v-pre>

```handlebars
{{capitalize customer.name}}
```

</div>

**Resultado:** João silva

#### Title Case (todas as palavras)
<div v-pre>

```handlebars
{{titleCase customer.name}}
```

</div>

**Resultado:** João Silva

### 🔢 Números por Extenso (Gerais)

#### Português
<div v-pre>

```handlebars
{{inWordsPT custom.quantidade}}
```

</div>

**Exemplo:** `250` → "duzentos e cinquenta"

#### Inglês
<div v-pre>

```handlebars
{{inWordsEN custom.quantidade}}
```

</div>

**Exemplo:** `250` → "two hundred and fifty"

#### Espanhol
<div v-pre>

```handlebars
{{inWordsES custom.cantidad}}
```

</div>

**Exemplo:** `250` → "doscientos cincuenta"

### 💰 Moedas (Número + Nome da Moeda)

::: tip 💡 Dica
Helpers de moeda convertem o número e adicionam o nome da moeda por extenso.
:::

#### Real Brasileiro (BRL)
<div v-pre>

```handlebars
{{inWordsBRL custom.valor}}
```

</div>

**Exemplo:** `1350.50` → "mil trezentos e cinquenta reais e cinquenta centavos"

#### Dólar Americano (USD)
<div v-pre>

```handlebars
{{inWordsUSD custom.value}}
```

</div>

**Exemplo:** `1350.50` → "one thousand three hundred fifty dollars and fifty cents"

#### Euro (EUR)
<div v-pre>

```handlebars
{{inWordsEUR custom.value}}
```

</div>

**Exemplo:** `1350.50` → "one thousand three hundred fifty euros and fifty cents"

#### Peso Argentino (ARS)
<div v-pre>

```handlebars
{{inWordsPesos custom.valor}}
```

</div>

**Exemplo:** `1350.50` → "mil trescientos cincuenta pesos con cincuenta centavos"

#### Guarani Paraguaio (PYG)
<div v-pre>

```handlebars
{{inWordsGuaranies custom.monto}}
```

</div>

**Exemplo:** `1350` → "mil trescientos cincuenta guaraníes"

::: warning ⚠️ Atenção
Helpers monetários incluem o número E o nome da moeda. Não adicione "reais", "dólares", etc. manualmente, pois ficará duplicado.
:::

### 📅 Datas por Extenso

#### Português (PT-BR)

**Formato completo:**
<div v-pre>

```handlebars
{{datePT date.current_date}}
```

</div>

**Resultado:** "24 de fevereiro de 2026"

**Formato curto:**
<div v-pre>

```handlebars
{{dateShortPT date.current_date}}
```

</div>

**Resultado:** "24/02/2026"

#### Inglês (EN-US)

**Formato completo:**
<div v-pre>

```handlebars
{{dateEN date.current_date}}
```

</div>

**Resultado:** "February 24, 2026"

**Formato curto:**
<div v-pre>

```handlebars
{{dateShortEN date.current_date}}
```

</div>

**Resultado:** "02/24/2026"

#### Espanhol (ES)

**Formato completo:**
<div v-pre>

```handlebars
{{dateES date.current_date}}
```

</div>

**Resultado:** "24 de febrero de 2026"

**Formato curto:**
<div v-pre>

```handlebars
{{dateShortES date.current_date}}
```

</div>

**Resultado:** "24/02/2026"

#### Usando com campos customizados

<div v-pre>

```handlebars
Data de Vencimento: {{datePT custom.data_vencimento}}
```

</div>

::: tip 💡 Data de Hoje
Use `"today"` para exibir a data atual:
<div v-pre>

```handlebars
{{datePT "today"}}
```

</div>
:::

## 🔗 Combinar Helpers

Você pode combinar múltiplos helpers usando parênteses:

### Texto em Maiúsculas + Por Extenso
<div v-pre>

```handlebars
{{uppercase (inWordsBRL custom.valor)}}
```

</div>

**Resultado:** "MIL TREZENTOS E CINQUENTA REAIS E CINQUENTA CENTAVOS"

### Data em Maiúsculas
<div v-pre>

```handlebars
{{uppercase (datePT date.current_date)}}
```

</div>

**Resultado:** "24 DE FEVEREIRO DE 2026"

### Title Case + Moeda
<div v-pre>

```handlebars
{{titleCase (inWordsUSD custom.value)}}
```

</div>

**Resultado:** "One Thousand Three Hundred Fifty Dollars And Fifty Cents"

## 💡 Exemplos Práticos

### Contrato de Prestação de Serviços
<div v-pre>

```html
<h1>CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h1>

<p><strong>CONTRATANTE:</strong> {{uppercase customer.name}}</p>
<p><strong>CPF:</strong> {{customer.document}}</p>
<p><strong>Endereço:</strong> {{customer.address.street}}, {{customer.address.number}} - {{customer.address.city}}/{{customer.address.state}}</p>

<h2>VALOR DO CONTRATO</h2>
<p>O valor total deste contrato é de <strong>R$ {{custom.valor}}</strong> ({{inWordsBRL custom.valor}}).</p>

<p>Firmado em {{datePT "today"}}.</p>
```

</div>

### Ficha de Cadastro Multilíngue
<div v-pre>

```html
<h2>Customer Information</h2>
<p><strong>Name:</strong> {{titleCase customer.name}}</p>
<p><strong>Email:</strong> {{lowercase customer.email}}</p>
<p><strong>Registration Date:</strong> {{dateEN date.current_date}}</p>
```

</div>

### Relatório com Cálculos
<div v-pre>

```html
<h2>Relatório Financeiro</h2>

<table>
  <tr>
    <td>Valor Principal:</td>
    <td>{{inWordsBRL custom.valor_principal}}</td>
  </tr>
  <tr>
    <td>Data de Emissão:</td>
    <td>{{dateShortPT "today"}}</td>
  </tr>
</table>
```

</div>

## 🎯 Dicas Avançadas

### 1. Formatação Consistente
Use sempre o mesmo helper para tipos similares de dados:
<div v-pre>

```handlebars
{{titleCase customer.name}}     // ✅ Consistente
{{uppercase customer.name}}     // ❌ Diferente do padrão
```

</div>

### 2. Contexto Visual
Adicione contexto ao redor das variáveis:
<div v-pre>

```handlebars
CPF: {{customer.document}}                    // ✅ Com contexto
{{customer.document}}                          // ❌ Sem contexto
```

</div>

### 3. Valores Padrão
Para variáveis opcionais, considere usar condicionais (veja [Condicionais](./conditionals)):
<div v-pre>

```handlebars
{{#if custom.observacoes}}
  <p><strong>Observações:</strong> {{custom.observacoes}}</p>
{{/if}}
```

</div>

## 🎬 Próximo Passo

Aprenda a usar [Condicionais](./conditionals) para criar documentos ainda mais inteligentes e dinâmicos!
