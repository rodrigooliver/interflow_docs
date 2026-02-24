# 🎨 Creating Document Templates

Learn how to create professional document templates with Interflow's visual editor.

## 📝 Creating a New Template

### Step 1: Access Templates
1. In the sidebar menu, go to **Document Templates**
2. Click **"+ New Template"**
3. Fill in the basic information:
   - **Name**: Template identification (e.g., "Service Agreement")
   - **Description**: Details about template usage
   - **Entity Type**: Select `Customer` or another type

### Step 2: HTML Editor
The editor offers complete formatting tools:

#### Text Formatting
- **Bold** (`Ctrl/Cmd + B`)
- *Italic* (`Ctrl/Cmd + I`)
- <u>Underline</u> (`Ctrl/Cmd + U`)
- ~~Strikethrough~~
- Text and background colors
- Font sizes

#### Structure
- Headings (H1 to H6)
- Ordered and unordered lists
- Tables
- Horizontal dividers
- Blockquotes

#### Alignment
- Left
- Center
- Right
- Justified

## 🔤 Inserting Variables

### System Variables
Use the <code v-pre>{{variable}}</code> syntax to insert dynamic data:

<div v-pre>

```handlebars
Name: {{customer.name}}
Email: {{customer.email}}
Phone: {{customer.phone}}
Date: {{date.current_date}}
```

</div>

### Variables Panel
The right sidebar displays all available variables:

#### 👤 Customer Data
<div v-pre>

```handlebars
{{customer.name}}          // John Smith
{{customer.email}}         // john@email.com
{{customer.phone}}         // (11) 98765-4321
{{customer.document}}      // CPF/SSN
{{customer.address.street}}    // Main Street
{{customer.address.city}}      // New York
{{customer.address.state}}     // NY
{{customer.address.zip_code}}  // 10001
```

</div>

#### 📅 System Data
<div v-pre>

```handlebars
{{date.current_date}}      // 2026-02-24
{{date.current_time}}      // 14:30:00
{{organization.name}}      // Company Name
{{user.name}}              // User Name
```

</div>

#### 🎯 Custom Variables
Click **"Configure Custom Variables"** to create specific fields:

<div v-pre>

```handlebars
{{custom.value}}           // Custom value
{{custom.term}}            // Term in days
{{custom.discount}}        // Discount percentage
```

</div>

**Custom variable types:**
- `text` - Free text
- `number` - Numbers
- `date` - Dates
- `boolean` - True/False

## 🎨 Advanced Settings

### Watermark

#### Text Watermark
1. Enable **"Enable watermark"**
2. Select **Type**: "Text"
3. Configure:
   - **Text**: "CONFIDENTIAL", "DRAFT", etc.
   - **Opacity**: 0.1 to 1.0 (recommended: 0.2-0.3)
   - **Rotation**: -45° to 45° (default: -45°)

**Example:**
```
Text: CONFIDENTIAL
Opacity: 0.2
Rotation: -45°
```

#### Image Watermark
1. Select **Type**: "Image"
2. Paste the **image URL**
3. Configure:
   - **Full Page**: Cover the entire page
   - **Opacity**: 0.1 to 1.0
   - **Width/Height**: Custom dimensions (vw/vh or px)

**Example:**
```
URL: https://example.com/logo.png
Full Page: Yes
Opacity: 0.15
```

### Page Configuration (PDF)

#### Margins
Configure document margins in millimeters:

```
Top: 20mm
Bottom: 20mm
Left: 20mm
Right: 20mm
```

**Recommended values:**
- **Default**: 20mm on all margins
- **Formal Document**: 25mm top/bottom, 30mm sides
- **No Margins**: 0mm (for custom designs)

::: tip 💡 Tip
Smaller margins make better use of space but can make printing difficult. Use at least 10mm for documents that will be printed.
:::

## 💾 Saving the Template

1. Review all content in the editor
2. Check variables and helpers
3. Test watermark and margin settings
4. Click **"Save Template"**

## ✅ Best Practices

### Design
- ✅ Use **clear headings** to organize content
- ✅ Maintain **consistent spacing** between sections
- ✅ Choose **readable fonts** (Helvetica, Arial, Times New Roman)
- ✅ Use **tables** to organize structured data

### Variables
- ✅ Test with **real data** before finalizing
- ✅ Use **default values** for optional variables
- ✅ Add **context** around variables (e.g., "SSN: <span v-pre>{{customer.document}}</span>")

### Formatting
- ✅ Use **inline styles** to ensure formatting is preserved
- ✅ Avoid **external fonts** that may not be available in export
- ✅ Test in **both formats** (PDF and DOCX) to ensure compatibility

### Performance
- ✅ **Optimize images** before using as watermark (max 2MB)
- ✅ Avoid **very complex templates** (>5000 lines of HTML)
- ✅ Use **conditionals** to display only relevant data

::: warning ⚠️ Warning
Some CSS styles may not be supported equally in PDF and DOCX. Always test generation in both formats.
:::

## 🎬 Next Step

Now that you know how to create templates, learn to use [Variables & Helpers](./variables) to make your documents even more dynamic and powerful!
