# 📄 Modelos de Documentos

O Interflow possui um poderoso sistema de geração de documentos que permite criar modelos personalizados em PDF e DOCX com dados dinâmicos de clientes e variáveis customizadas.

## 🎯 Características Principais

### ✨ Editor Visual
- **Editor HTML WYSIWYG** com Jodit Editor
- Formatação rica de texto (negrito, itálico, cores, tamanhos)
- Suporte a tabelas, listas e imagens
- Estilos CSS inline para garantir fidelidade na exportação

### 📊 Variáveis Dinâmicas
- **Dados do Cliente**: Nome, email, telefone, endereço, documentos
- **Dados do Sistema**: Data atual, organização, usuário
- **Variáveis Customizadas**: Crie campos específicos para seus modelos

### 🔧 Helpers Handlebars
Sistema completo de transformação de dados:

- **Texto**: `uppercase`, `lowercase`, `capitalize`, `titleCase`
- **Números por Extenso**: Suporte a PT, EN, ES
- **Moedas**: BRL, USD, EUR, ARS, PYG e mais
- **Datas**: Formatação por extenso em múltiplos idiomas
- **Condicionais**: Exibir conteúdo baseado em condições

### 🎨 Configurações Avançadas

#### PDF
- Margens personalizadas (superior, inferior, esquerda, direita)
- Marca d'água (texto ou imagem)
- Opacidade e rotação configuráveis
- Download automático

#### DOCX
- Marca d'água de texto ou imagem
- Opacidade ajustável
- Posicionamento centralizado ou página completa
- Geração nativa com biblioteca `docx`

## 📚 Próximos Passos

<div class="tip custom-block">
  <p class="custom-block-title">💡 Comece Agora</p>
  <p>Explore as seções abaixo para aprender a criar modelos poderosos:</p>
  <ul>
    <li><a href="./templates">Criar Modelos</a> - Aprenda a criar e configurar templates</li>
    <li><a href="./variables">Variáveis e Helpers</a> - Domine o sistema de variáveis dinâmicas</li>
    <li><a href="./conditionals">Condicionais</a> - Use lógica condicional nos seus documentos</li>
  </ul>
</div>

## 🚀 Casos de Uso

### Contratos e Propostas
Gere contratos personalizados com dados do cliente, valores por extenso e cláusulas condicionais.

### Fichas de Cadastro
Crie fichas completas com todos os dados do cliente, incluindo endereço e documentos.

### Relatórios Personalizados
Produza relatórios com variáveis customizadas, datas formatadas e cálculos automáticos.

### Documentos Multilíngues
Utilize helpers de idioma para gerar documentos em PT, EN ou ES automaticamente.
