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
{{formatInWordsPT custom.quantidade}}
```

</div>

**Exemplo:** `250` → "duzentos e cinquenta"

#### Inglês
<div v-pre>

```handlebars
{{formatInWordsEN custom.quantidade}}
```

</div>

**Exemplo:** `250` → "two hundred and fifty"

#### Espanhol
<div v-pre>

```handlebars
{{formatInWordsES custom.cantidad}}
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
{{formatInWordsBRL custom.valor}}
```

</div>

**Exemplo:** `1350.50` → "mil trezentos e cinquenta reais e cinquenta centavos"

#### Dólar Americano (USD)
<div v-pre>

```handlebars
{{formatInWordsUSD custom.value}}
```

</div>

**Exemplo:** `1350.50` → "one thousand three hundred fifty dollars and fifty cents"

#### Euro (EUR)
<div v-pre>

```handlebars
{{formatInWordsEUR custom.value}}
```

</div>

**Exemplo:** `1350.50` → "one thousand three hundred fifty euros and fifty cents"

#### Peso Argentino (ARS)
<div v-pre>

```handlebars
{{formatInWordsARS custom.valor}}
```

</div>

**Exemplo:** `1350.50` → "mil trescientos cincuenta pesos argentinos"

#### Guarani Paraguaio (PYG)
<div v-pre>

```handlebars
{{formatInWordsPYG custom.monto}}
```

</div>

**Exemplo:** `1350` → "mil trescientos cincuenta guaraníes"

::: warning ⚠️ Atenção
Helpers monetários incluem o número E o nome da moeda. Não adicione "reais", "dólares", etc. manualmente, pois ficará duplicado.
:::

### 💵 Formatação de Moeda (Símbolo)

Formata valor numérico com símbolo da moeda. Use o helper do país desejado:

<div v-pre>

```handlebars
{{formatCurrencyBRL custom.valor}}     // R$ 1.350,50
{{formatCurrencyUSD custom.valor}}     // $1,350.50
{{formatCurrencyEUR custom.valor}}     // 1.350,50 €
{{formatCurrencyARS custom.valor}}     // $ 1.350,50
```

</div>

`formatCurrency` (sem sufixo) retorna apenas o número formatado (1.350,50), sem símbolo.

### 📅 Datas

#### Formato completo (PT, EN, ES)
<div v-pre>

```handlebars
{{formatDatePT date.current_date}}     // 24 de fevereiro de 2026
{{formatDateEN date.current_date}}     // February 24, 2026
{{formatDateES date.current_date}}     // 24 de febrero de 2026
```

</div>

#### Formato curto
<div v-pre>

```handlebars
{{formatDateShortPT date.current_date}}  // 24/02/2026
{{formatDateShortEN date.current_date}}  // 02/24/2026
{{formatDateShortES date.current_date}}  // 24/02/2026
```

</div>

#### Dia, mês e ano (separados, aceita GMT)
<div v-pre>

```handlebars
{{formatDay date.current_date}}        // 24
{{formatMonthPT date.current_date}}    // fevereiro
{{formatMonthEN date.current_date}}    // February
{{formatMonthES date.current_date}}    // febrero
{{formatYear date.current_date}}       // 2026
```

</div>

#### Data e hora (aceita GMT, use `"now"` para agora)
<div v-pre>

```handlebars
{{formatDateTimePT date.current_date}}           // 24/02/2026 às 14:30
{{formatDateTimePT "now" -3}}                    // Data/hora atual em GMT-3
{{formatDateTimeEN custom.data_hora}}            // Feb 24, 2026 at 14:30
{{formatDateTimeES custom.data_hora -4}}         // Com offset GMT-4
```

</div>

#### Apenas hora (aceita GMT)
<div v-pre>

```handlebars
{{formatTime custom.horario}}          // 14:30
{{formatTimeWithSeconds custom.horario}}  // 14:30:00
{{formatTime "now" -3}}                // Hora atual em GMT-3
```

</div>

#### Usando com campos customizados

<div v-pre>

```handlebars
Data de Vencimento: {{formatDatePT custom.data_vencimento}}
```

</div>

::: tip 💡 Data e hora atuais
Use `"today"` para data atual e `"now"` para data/hora atual:
<div v-pre>

```handlebars
{{formatDatePT "today"}}
{{formatDateTimePT "now" -3}}
```

</div>
:::

## 🔗 Combinar Helpers

Você pode combinar múltiplos helpers usando parênteses:

### Texto em Maiúsculas + Por Extenso
<div v-pre>

```handlebars
{{uppercase (formatInWordsBRL custom.valor)}}
```

</div>

**Resultado:** "MIL TREZENTOS E CINQUENTA REAIS E CINQUENTA CENTAVOS"

### Data em Maiúsculas
<div v-pre>

```handlebars
{{uppercase (formatDatePT date.current_date)}}
```

</div>

**Resultado:** "24 DE FEVEREIRO DE 2026"

### Title Case + Moeda
<div v-pre>

```handlebars
{{titleCase (formatInWordsUSD custom.value)}}
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
<p>O valor total deste contrato é de <strong>{{formatCurrencyBRL custom.valor}}</strong> ({{formatInWordsBRL custom.valor}}).</p>

<p>Firmado em {{formatDatePT "today"}}.</p>
```

</div>

### Ficha de Cadastro Multilíngue
<div v-pre>

```html
<h2>Customer Information</h2>
<p><strong>Name:</strong> {{titleCase customer.name}}</p>
<p><strong>Email:</strong> {{lowercase customer.email}}</p>
<p><strong>Registration Date:</strong> {{formatDateEN date.current_date}}</p>
```

</div>

### Relatório com Cálculos
<div v-pre>

```html
<h2>Relatório Financeiro</h2>

<table>
  <tr>
    <td>Valor Principal:</td>
    <td>{{formatInWordsBRL custom.valor_principal}}</td>
  </tr>
  <tr>
    <td>Data de Emissão:</td>
    <td>{{formatDateShortPT "today"}}</td>
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
