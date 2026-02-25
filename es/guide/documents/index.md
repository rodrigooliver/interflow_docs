# 📄 Plantillas de Documentos

Interflow cuenta con un potente sistema de generación de documentos que permite crear plantillas personalizadas en PDF y DOCX con datos dinámicos de clientes y variables personalizadas.

## 🎯 Características Principales

### ✨ Editor Visual
- **Editor HTML WYSIWYG** con Jodit Editor
- Formateo enriquecido de texto (negrita, cursiva, colores, tamaños)
- Soporte para tablas, listas e imágenes
- Estilos CSS en línea para garantizar fidelidad en la exportación

### 📊 Variables Dinámicas
- **Datos del Cliente**: Nombre, email, teléfono, dirección, documentos
- **Datos del Sistema**: Fecha actual, organización, usuario
- **Variables Personalizadas**: Cree campos específicos para sus plantillas

### 🔧 Helpers Handlebars
Sistema completo de transformación de datos:

- **Texto**: `uppercase`, `lowercase`, `capitalize`, `titleCase`
- **Números en Letras**: `formatInWordsPT`, `formatInWordsEN`, `formatInWordsES`, `formatInWordsBRL`, etc.
- **Monedas (símbolo)**: `formatCurrencyBRL`, `formatCurrencyUSD`, `formatCurrencyEUR`, etc.
- **Monedas (en letras)**: `formatInWordsBRL`, `formatInWordsUSD`, etc.
- **Fechas**: `formatDatePT`, `formatDateShortPT`, `formatDateTimePT`, `formatDay`, `formatMonthPT`, `formatYear`
- **Hora**: `formatTime`, `formatTimeWithSeconds` (con soporte GMT)
- **Condicionales**: Mostrar contenido basado en condiciones

### 🎨 Configuraciones Avanzadas

#### PDF
- Márgenes personalizados (superior, inferior, izquierda, derecha)
- Marca de agua (texto o imagen)
- Opacidad y rotación configurables
- Descarga automática

#### DOCX
- Marca de agua de texto o imagen
- Opacidad ajustable
- Posicionamiento centrado o página completa
- Generación nativa con biblioteca `docx`

## 📚 Próximos Pasos

<div class="tip custom-block">
  <p class="custom-block-title">💡 Comience Ahora</p>
  <p>Explore las secciones a continuación para aprender a crear plantillas potentes:</p>
  <ul>
    <li><a href="./templates">Crear Plantillas</a> - Aprenda a crear y configurar plantillas</li>
    <li><a href="./variables">Variables y Helpers</a> - Domine el sistema de variables dinámicas</li>
    <li><a href="./conditionals">Condicionales</a> - Use lógica condicional en sus documentos</li>
  </ul>
</div>

## 🚀 Casos de Uso

### Contratos y Propuestas
Genere contratos personalizados con datos del cliente, montos en letras y cláusulas condicionales.

### Fichas de Registro
Cree fichas completas con todos los datos del cliente, incluyendo dirección y documentos.

### Informes Personalizados
Produzca informes con variables personalizadas, fechas formateadas y cálculos automáticos.

### Documentos Multilingües
Utilice helpers de idioma para generar documentos en PT, EN o ES automáticamente.
