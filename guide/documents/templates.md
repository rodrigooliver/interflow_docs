# 🎨 Criar Modelos de Documentos

Aprenda a criar modelos de documentos profissionais com o editor visual do Interflow.

## 📝 Criando um Novo Modelo

### Passo 1: Acessar Modelos
1. No menu lateral, acesse **Modelos de Documentos**
2. Clique em **"+ Novo Modelo"**
3. Preencha as informações básicas:
   - **Nome**: Identificação do modelo (ex: "Contrato de Prestação de Serviços")
   - **Descrição**: Detalhes sobre o uso do modelo
   - **Tipo de Entidade**: Selecione `Cliente` ou outro tipo

### Passo 2: Editor HTML
O editor oferece ferramentas completas de formatação:

#### Formatação de Texto
- **Negrito** (`Ctrl/Cmd + B`)
- *Itálico* (`Ctrl/Cmd + I`)
- <u>Sublinhado</u> (`Ctrl/Cmd + U`)
- ~~Tachado~~
- Cores de texto e fundo
- Tamanhos de fonte

#### Estrutura
- Títulos (H1 a H6)
- Listas ordenadas e não ordenadas
- Tabelas
- Divisores horizontais
- Blocos de citação

#### Alinhamento
- Esquerda
- Centro
- Direita
- Justificado

## 🔤 Inserindo Variáveis

### Variáveis do Sistema
Use a sintaxe <code v-pre>{{variavel}}</code> para inserir dados dinâmicos:

<div v-pre>

```handlebars
Nome: {{customer.name}}
Email: {{customer.email}}
Telefone: {{customer.phone}}
Data: {{date.current_date}}
```

</div>

### Painel de Variáveis
O painel lateral direito exibe todas as variáveis disponíveis:

#### 👤 Dados do Cliente

<div v-pre>

```handlebars
{{customer.name}}          // João Silva
{{customer.email}}         // joao@email.com
{{customer.phone}}         // (11) 98765-4321
{{customer.document}}      // CPF/CNPJ
{{customer.address.street}}    // Rua das Flores
{{customer.address.city}}      // São Paulo
{{customer.address.state}}     // SP
{{customer.address.zip_code}}  // 01234-567
```

</div>

#### 📅 Dados do Sistema

<div v-pre>

```handlebars
{{date.current_date}}      // 2026-02-24
{{date.current_time}}      // 14:30:00
{{organization.name}}      // Nome da Empresa
{{user.name}}              // Nome do Usuário
```

</div>

#### 🎯 Variáveis Customizadas
Clique em **"Configurar Variáveis Customizadas"** para criar campos específicos:

<div v-pre>

```handlebars
{{custom.valor}}           // Valor personalizado
{{custom.prazo}}           // Prazo em dias
{{custom.desconto}}        // Percentual de desconto
```

</div>

**Tipos de variáveis customizadas:**
- `text` - Texto livre
- `number` - Números
- `date` - Datas
- `boolean` - Verdadeiro/Falso

## 🎨 Configurações Avançadas

### Marca d'Água

#### Marca d'Água de Texto
1. Ative **"Habilitar marca d'água"**
2. Selecione **Tipo**: "Texto"
3. Configure:
   - **Texto**: "CONFIDENCIAL", "RASCUNHO", etc.
   - **Opacidade**: 0.1 a 1.0 (recomendado: 0.2-0.3)
   - **Rotação**: -45° a 45° (padrão: -45°)

**Exemplo:**
```
Texto: CONFIDENCIAL
Opacidade: 0.2
Rotação: -45°
```

#### Marca d'Água de Imagem
1. Selecione **Tipo**: "Imagem"
2. Cole a **URL da imagem**
3. Configure:
   - **Página Completa**: Cobrir toda a página
   - **Opacidade**: 0.1 a 1.0
   - **Largura/Altura**: Dimensões personalizadas (vw/vh ou px)

**Exemplo:**
```
URL: https://exemplo.com/logo.png
Página Completa: Sim
Opacidade: 0.15
```

### Configuração de Página (PDF)

#### Margens
Configure as margens do documento em milímetros:

```
Superior: 20mm
Inferior: 20mm
Esquerda: 20mm
Direita: 20mm
```

**Valores recomendados:**
- **Padrão**: 20mm em todas as margens
- **Documento Formal**: 25mm superior/inferior, 30mm laterais
- **Sem Margens**: 0mm (para designs customizados)

::: tip 💡 Dica
Margens menores aproveitam melhor o espaço, mas podem dificultar a impressão. Use no mínimo 10mm para documentos que serão impressos.
:::

## 💾 Salvando o Modelo

1. Revise todo o conteúdo no editor
2. Verifique as variáveis e helpers
3. Teste as configurações de marca d'água e margens
4. Clique em **"Salvar Modelo"**

## ✅ Boas Práticas

### Design
- ✅ Use **títulos claros** para organizar o conteúdo
- ✅ Mantenha **espaçamento consistente** entre seções
- ✅ Escolha **fontes legíveis** (Helvetica, Arial, Times New Roman)
- ✅ Use **tabelas** para organizar dados estruturados

### Variáveis
- ✅ Teste com **dados reais** antes de finalizar
- ✅ Use **valores padrão** para variáveis opcionais
- ✅ Adicione **contexto** ao redor das variáveis (ex: "CPF: <span v-pre>{{customer.document}}</span>")

### Formatação
- ✅ Use **estilos inline** para garantir que a formatação seja preservada
- ✅ Evite **fontes externas** que possam não estar disponíveis na exportação
- ✅ Teste em **ambos os formatos** (PDF e DOCX) para garantir compatibilidade

### Performance
- ✅ **Otimize imagens** antes de usar como marca d'água (max 2MB)
- ✅ Evite **templates muito complexos** (>5000 linhas de HTML)
- ✅ Use **condicionais** para exibir apenas dados relevantes

::: warning ⚠️ Atenção
Alguns estilos CSS podem não ser suportados igualmente em PDF e DOCX. Sempre teste a geração em ambos os formatos.
:::

## 🎬 Próximo Passo

Agora que você sabe criar modelos, aprenda a usar [Variáveis e Helpers](./variables) para tornar seus documentos ainda mais dinâmicos e poderosos!
