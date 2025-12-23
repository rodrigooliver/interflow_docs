# Nó: Definir Variável

Define ou modifica o valor de uma variável existente no fluxo.

## Visão Geral

O nó **Definir Variável** permite atualizar o valor de variáveis durante a execução do fluxo. As variáveis podem ser usadas em outros nós para personalizar mensagens e lógica.

::: warning Importante
Este nó apenas **altera** variáveis existentes. Para **criar** novas variáveis, você deve usar o **Modal de Variáveis** no header do construtor de fluxos (ícone de variáveis na barra superior).
:::

## Criando Variáveis

Antes de usar este nó, crie a variável:

1. No editor de fluxos, clique no ícone **Variáveis** (ícone `{ }`) no header
2. Clique em **"Nova Variável"**
3. Defina o **nome** e o **tipo** da variável
4. Salve a variável

Após criar, a variável estará disponível para seleção neste nó.

## Configurações

### Variável

Selecione a variável que deseja definir. Apenas variáveis previamente criadas aparecem na lista.

### Modo de Definição

| Modo | Descrição |
|------|-----------|
| **Valor Direto** | Define um valor estático ou com variáveis |
| **Código JavaScript** | Usa código JS para calcular o valor |

### Valor Direto

Para variáveis simples, insira o valor diretamente:

**String:**
```
Olá, {{customer_name}}!
```

**Número:**
```
100
```

**Booleano:**
```
true ou false (seleção)
```

**Objeto (JSON):**
```json
{
  "nome": "{{customer_name}}",
  "email": "{{customer_email}}",
  "ativo": true
}
```

### Código JavaScript

Para lógica complexa, use código JavaScript:

**Exemplo - Concatenação:**
```javascript
return nome + " " + sobrenome;
```

**Exemplo - Cálculo:**
```javascript
return quantidade * preco * 1.1; // Com 10% de taxa
```

**Exemplo - Manipulação de Texto:**
```javascript
return customer_name.toUpperCase();
```

**Exemplo - Data:**
```javascript
return new Date().toLocaleDateString('pt-BR');
```

**Exemplo - Condicional:**
```javascript
return idade >= 18 ? "maior" : "menor";
```

## Tipos de Variáveis

| Tipo | Descrição | Exemplo |
|------|-----------|---------|
| **string** | Texto | `"Olá mundo"` |
| **number** | Número | `42`, `3.14` |
| **boolean** | Verdadeiro/Falso | `true`, `false` |
| **object** | Objeto JSON | `{"key": "value"}` |

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua após definir a variável |

## Exemplos de Uso

### Nome Completo

```javascript
// Combinar nome e sobrenome
return customer_first_name + " " + customer_last_name;
```

### Formatação de Valor

```javascript
// Formatar como moeda
return "R$ " + valor.toFixed(2).replace(".", ",");
```

### Extrair Domínio do Email

```javascript
// Pegar domínio do email
return email.split("@")[1];
```

### Validar CPF

```javascript
// Remover caracteres não numéricos
return cpf.replace(/\D/g, "");
```

### Data Formatada

```javascript
// Data atual formatada
const hoje = new Date();
return hoje.toLocaleDateString('pt-BR', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
});
```

### Objeto de Dados

```javascript
// Criar objeto com dados do cliente
return {
  nome: customer_name,
  email: customer_email,
  telefone: customer_phone,
  data_cadastro: new Date().toISOString()
};
```

## Variáveis Disponíveis no Código

No código JavaScript, você tem acesso a:

- Todas as variáveis do fluxo (pelo nome)
- Variáveis do sistema:
  - `customer_name` - Nome do cliente
  - `customer_email` - Email do cliente
  - `customer_phone` - Telefone do cliente
  - E outras variáveis de contexto

## Boas Práticas

::: tip Nomes Descritivos
Use nomes descritivos para variáveis: `valor_total` em vez de `v1`.
:::

::: tip Tipos Corretos
Certifique-se de que o tipo da variável corresponde ao valor que você está definindo.
:::

::: tip Validação
Valide dados antes de processá-los para evitar erros.
:::

```javascript
// Validação antes de processar
if (!email || !email.includes('@')) {
  return '';
}
return email.toLowerCase();
```

::: warning Código Seguro
Evite loops infinitos ou operações muito pesadas no código JavaScript.
:::

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Atualizar Cliente](/guide/flows/nodes/update-customer)

