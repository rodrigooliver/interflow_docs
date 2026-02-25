# 📄 Document Templates

Interflow features a powerful document generation system that allows you to create custom PDF and DOCX templates with dynamic customer data and custom variables.

## 🎯 Key Features

### ✨ Visual Editor
- **WYSIWYG HTML Editor** with Jodit Editor
- Rich text formatting (bold, italic, colors, sizes)
- Support for tables, lists, and images
- Inline CSS styles to ensure export fidelity

### 📊 Dynamic Variables
- **Customer Data**: Name, email, phone, address, documents
- **System Data**: Current date, organization, user
- **Custom Variables**: Create specific fields for your templates

### 🔧 Handlebars Helpers
Complete data transformation system:

- **Text**: `uppercase`, `lowercase`, `capitalize`, `titleCase`
- **Numbers in Words**: `formatInWordsPT`, `formatInWordsEN`, `formatInWordsES`, `formatInWordsBRL`, etc.
- **Currency (symbol)**: `formatCurrencyBRL`, `formatCurrencyUSD`, `formatCurrencyEUR`, etc.
- **Currency (in words)**: `formatInWordsBRL`, `formatInWordsUSD`, etc.
- **Dates**: `formatDatePT`, `formatDateShortPT`, `formatDateTimePT`, `formatDay`, `formatMonthPT`, `formatYear`
- **Time**: `formatTime`, `formatTimeWithSeconds` (with GMT support)
- **Conditionals**: Display content based on conditions

### 🎨 Advanced Settings

#### PDF
- Custom margins (top, bottom, left, right)
- Watermark (text or image)
- Configurable opacity and rotation
- Automatic download

#### DOCX
- Text or image watermark
- Adjustable opacity
- Centered or full-page positioning
- Native generation with `docx` library

## 📚 Next Steps

<div class="tip custom-block">
  <p class="custom-block-title">💡 Get Started Now</p>
  <p>Explore the sections below to learn how to create powerful templates:</p>
  <ul>
    <li><a href="./templates">Creating Templates</a> - Learn to create and configure templates</li>
    <li><a href="./variables">Variables & Helpers</a> - Master the dynamic variable system</li>
    <li><a href="./conditionals">Conditionals</a> - Use conditional logic in your documents</li>
  </ul>
</div>

## 🚀 Use Cases

### Contracts and Proposals
Generate personalized contracts with customer data, amounts in words, and conditional clauses.

### Registration Forms
Create complete forms with all customer data, including address and documents.

### Custom Reports
Produce reports with custom variables, formatted dates, and automatic calculations.

### Multilingual Documents
Use language helpers to automatically generate documents in PT, EN, or ES.
