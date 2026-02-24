# 🎨 Crear Plantillas de Documentos

Aprenda a crear plantillas de documentos profesionales con el editor visual de Interflow.

## 📝 Creando una Nueva Plantilla

### Paso 1: Acceder a Plantillas
1. En el menú lateral, vaya a **Plantillas de Documentos**
2. Haga clic en **"+ Nueva Plantilla"**
3. Complete la información básica:
   - **Nombre**: Identificación de la plantilla (ej: "Contrato de Prestación de Servicios")
   - **Descripción**: Detalles sobre el uso de la plantilla
   - **Tipo de Entidad**: Seleccione `Cliente` u otro tipo

### Paso 2: Editor HTML
El editor ofrece herramientas completas de formato:

#### Formato de Texto
- **Negrita** (`Ctrl/Cmd + B`)
- *Cursiva* (`Ctrl/Cmd + I`)
- <u>Subrayado</u> (`Ctrl/Cmd + U`)
- ~~Tachado~~
- Colores de texto y fondo
- Tamaños de fuente

#### Estructura
- Encabezados (H1 a H6)
- Listas ordenadas y desordenadas
- Tablas
- Divisores horizontales
- Bloques de citas

#### Alineación
- Izquierda
- Centro
- Derecha
- Justificado

## 🔤 Insertar Variables

### Variables del Sistema
Use la sintaxis <code v-pre>{{variable}}</code> para insertar datos dinámicos:

<div v-pre>

```handlebars
Nombre: {{customer.name}}
Email: {{customer.email}}
Teléfono: {{customer.phone}}
Fecha: {{date.current_date}}
```

</div>

### Panel de Variables
El panel lateral derecho muestra todas las variables disponibles:

#### 👤 Datos del Cliente
<div v-pre>

```handlebars
{{customer.name}}          // Juan Silva
{{customer.email}}         // juan@email.com
{{customer.phone}}         // (11) 98765-4321
{{customer.document}}      // DNI/CUIT
{{customer.address.street}}    // Calle de las Flores
{{customer.address.city}}      // Buenos Aires
{{customer.address.state}}     // BA
{{customer.address.zip_code}}  // C1234ABC
```

</div>

#### 📅 Datos del Sistema
<div v-pre>

```handlebars
{{date.current_date}}      // 2026-02-24
{{date.current_time}}      // 14:30:00
{{organization.name}}      // Nombre de la Empresa
{{user.name}}              // Nombre del Usuario
```

</div>

#### 🎯 Variables Personalizadas
Haga clic en **"Configurar Variables Personalizadas"** para crear campos específicos:

<div v-pre>

```handlebars
{{custom.valor}}           // Valor personalizado
{{custom.plazo}}           // Plazo en días
{{custom.descuento}}       // Porcentaje de descuento
```

</div>

**Tipos de variables personalizadas:**
- `text` - Texto libre
- `number` - Números
- `date` - Fechas
- `boolean` - Verdadero/Falso

## 🎨 Configuraciones Avanzadas

### Marca de Agua

#### Marca de Agua de Texto
1. Active **"Habilitar marca de agua"**
2. Seleccione **Tipo**: "Texto"
3. Configure:
   - **Texto**: "CONFIDENCIAL", "BORRADOR", etc.
   - **Opacidad**: 0.1 a 1.0 (recomendado: 0.2-0.3)
   - **Rotación**: -45° a 45° (predeterminado: -45°)

**Ejemplo:**
```
Texto: CONFIDENCIAL
Opacidad: 0.2
Rotación: -45°
```

#### Marca de Agua de Imagen
1. Seleccione **Tipo**: "Imagen"
2. Pegue la **URL de la imagen**
3. Configure:
   - **Página Completa**: Cubrir toda la página
   - **Opacidad**: 0.1 a 1.0
   - **Ancho/Alto**: Dimensiones personalizadas (vw/vh o px)

**Ejemplo:**
```
URL: https://ejemplo.com/logo.png
Página Completa: Sí
Opacidad: 0.15
```

### Configuración de Página (PDF)

#### Márgenes
Configure los márgenes del documento en milímetros:

```
Superior: 20mm
Inferior: 20mm
Izquierda: 20mm
Derecha: 20mm
```

**Valores recomendados:**
- **Predeterminado**: 20mm en todos los márgenes
- **Documento Formal**: 25mm superior/inferior, 30mm laterales
- **Sin Márgenes**: 0mm (para diseños personalizados)

::: tip 💡 Consejo
Márgenes más pequeños aprovechan mejor el espacio, pero pueden dificultar la impresión. Use al menos 10mm para documentos que se imprimirán.
:::

## 💾 Guardar la Plantilla

1. Revise todo el contenido en el editor
2. Verifique las variables y helpers
3. Pruebe las configuraciones de marca de agua y márgenes
4. Haga clic en **"Guardar Plantilla"**

## ✅ Buenas Prácticas

### Diseño
- ✅ Use **encabezados claros** para organizar el contenido
- ✅ Mantenga **espaciado consistente** entre secciones
- ✅ Elija **fuentes legibles** (Helvetica, Arial, Times New Roman)
- ✅ Use **tablas** para organizar datos estructurados

### Variables
- ✅ Pruebe con **datos reales** antes de finalizar
- ✅ Use **valores predeterminados** para variables opcionales
- ✅ Agregue **contexto** alrededor de las variables (ej: "DNI: <span v-pre>{{customer.document}}</span>")

### Formato
- ✅ Use **estilos en línea** para garantizar que el formato se preserve
- ✅ Evite **fuentes externas** que puedan no estar disponibles en la exportación
- ✅ Pruebe en **ambos formatos** (PDF y DOCX) para garantizar compatibilidad

### Rendimiento
- ✅ **Optimice imágenes** antes de usar como marca de agua (máx 2MB)
- ✅ Evite **plantillas muy complejas** (>5000 líneas de HTML)
- ✅ Use **condicionales** para mostrar solo datos relevantes

::: warning ⚠️ Atención
Algunos estilos CSS pueden no ser compatibles por igual en PDF y DOCX. Siempre pruebe la generación en ambos formatos.
:::

## 🎬 Próximo Paso

Ahora que sabe cómo crear plantillas, aprenda a usar [Variables y Helpers](./variables) para hacer sus documentos aún más dinámicos y potentes!
