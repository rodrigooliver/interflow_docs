# Gestión de Clientes

Gestiona todos tus clientes de forma centralizada en el CRM de Interflow.

## Visión General

El CRM de Interflow permite gestionar todos tus contactos en un único lugar, con historial completo de interacciones, campos personalizados y segmentación por tags.

## Accediendo a Clientes

1. En el menú principal, haz clic en **Clientes**
2. Verás la lista de todos los clientes registrados
3. Usa filtros para encontrar clientes específicos

## Registro de Cliente

### Campos Estándar

| Campo | Descripción | Obligatorio |
|-------|-------------|-------------|
| **Nombre** | Nombre completo del cliente | Sí |
| **Email** | Email de contacto | No |
| **Teléfono** | Número principal | No |
| **WhatsApp** | Número de WhatsApp | No |

### Creando un Cliente Manualmente

1. Haz clic en **"Nuevo cliente"**
2. Llena los campos
3. Agrega tags (opcional)
4. Haz clic en **"Guardar"**

### Creación Automática

Los clientes son creados automáticamente cuando:
- Inician una conversación en cualquier canal
- Son importados vía planilla
- Son creados vía API

### Bloqueo de Clientes Duplicados

El sistema detecta automáticamente y bloquea la creación de clientes duplicados.

**Cómo funciona:**

1. Al intentar crear un cliente con datos existentes
2. El sistema verifica registros existentes
3. Si encuentra duplicado, muestra alerta
4. Opción de ver el cliente existente
5. O combinar datos en el existente

**Criterios de detección:**

| Campo | Detección |
|-------|-----------|
| Teléfono | ✅ Exacto (ignora formato) |
| Email | ✅ Exacto (ignora mayúsculas) |
| WhatsApp | ✅ Exacto (normalizado) |

**Opciones cuando encuentra duplicado:**

- 🚫 Nueva creación es bloqueada
- 🔗 Link al registro existente mostrado
- 🔄 Opción de combinar datos
- ✏️ Opción de actualizar existente

::: tip 💡 Configuración
La combinación automática puede ser desactivada en **Configuraciones → Clientes → "Permitir duplicados"**.
:::

## Perfil del Cliente

Al hacer clic en un cliente, accedes a su perfil completo:

### Información

- Datos de contacto
- Campos personalizados
- Tags
- Fecha de registro
- Última interacción

### Historial

- Todas las conversaciones
- Citas
- Compras/transacciones
- Notas internas

### Acciones

- Iniciar nueva conversación
- Agendar tarea
- Agregar nota
- Editar registro

## Búsqueda y Filtros

### Búsqueda Rápida

Escribe en el campo de búsqueda para encontrar clientes por:
- Nombre
- Email
- Teléfono
- Tags

### Filtros Avanzados

| Filtro | Descripción |
|--------|-------------|
| **Tags** | Filtrar por tags específicos |
| **Canal** | Por canal de origen |
| **Fecha** | Por período de registro |
| **Campos** | Por valores de campos personalizados |
| **Estado** | Activos, inactivos, etc. |

### Guardando Filtros

1. Configura los filtros deseados
2. Haz clic en **"Guardar filtro"**
3. Da un nombre al filtro
4. Accede rápidamente por el selector

### Visibilidad Restringida para Agentes

Agentes ven solo clientes de equipos a los que están asignados.

**Áreas afectadas:**
- 📋 Lista de clientes
- 🔍 Búsqueda de clientes
- 📊 Informes (datos filtrados)
- 📤 Exportaciones (respeta visibilidad)

::: warning ⚠️ Seguridad
Administradores continúan viendo todos los clientes. Esta configuración protege datos sensibles entre equipos.
:::

## Importación de Clientes

### Vía Planilla (CSV/Excel)

1. Ve a **Clientes** → **Importar**
2. Descarga el modelo de planilla
3. Llena con tus datos
4. Haz upload del archivo
5. Mapea los campos
6. Confirma la importación

## Exportación de Clientes

1. Aplica los filtros deseados
2. Haz clic en **"Exportar"**
3. Selecciona el formato (CSV, Excel, JSON)
4. Descarga el archivo

::: warning ⚠️ Datos Sensibles
Si la opción "Ocultar Datos de Contacto de los Agentes" está activa, agentes no verán email, teléfono y WhatsApp en las exportaciones.
:::

## Informes Avanzados de Clientes

Genera informes con agrupaciones y subdivisiones personalizadas:

1. En **Clientes** → haz clic en **"Informes Avanzados"** 📊
2. Haz clic en **"Nueva Configuración"**
3. Sigue el asistente de 5 pasos:
   - **Paso 1**: Upload del JSON (exportar de la lista de clientes)
   - **Paso 2**: Configura agrupaciones (ej: por Origen, Estado)
   - **Paso 3**: Configura columna de total
   - **Paso 4**: Configura subdivisiones (ej: motivos de no compra)
   - **Paso 5**: Revisa y guarda

**Recursos:**
- Normalización inteligente (unifica variaciones)
- Preview en tiempo real
- Exportación a CSV
- Modelos guardados reutilizables

Ve más en [Informes](/es/guide/reports/).

## Eliminación Masiva de Clientes

Los administradores y propietarios pueden eliminar varios clientes simultáneamente, con la opción de borrar también todos los chats vinculados.

### Cómo usar

1. Ve a **Clientes** y selecciona los clientes deseados usando las casillas de verificación
2. Haz clic en **"Eliminar seleccionados"**
3. En el modal de confirmación, marca **"También eliminar todos los chats vinculados"** (visible solo para admin y owner)
4. Confirma la eliminación

::: warning ⚠️ Irreversible
Los mensajes, archivos y sesiones de flujo de todos los chats de los clientes seleccionados se eliminarán permanentemente. Los pedidos POS se mantienen.
:::

### Elementos por Página

Elige cuántos clientes mostrar por página en el listado:

- En la parte inferior de la lista, selecciona **10 por página** (predeterminado) o **50 por página**

---

## Control de Acceso al CRM

Control granular sobre quién puede ver y acceder a cada cliente en el CRM.

### Visibilidad por Equipo (Agentes)

Los agentes ven solo los clientes de los equipos a los que están asignados.

::: info ℹ️ Administradores
Los administradores continúan viendo todos los clientes. Esta configuración protege datos sensibles entre equipos.
:::

### Datos Sensibles (Privacidad)

Protege la información de contacto de los clientes para los agentes:

1. Ve a **Configuración → Clientes**
2. Activa **"Ocultar datos de contacto a los agentes"**
3. Los agentes no verán teléfono, email y WhatsApp en listas y exportaciones

---

## Combinación de Clientes

Cuando identificas duplicados:

1. Selecciona los clientes duplicados
2. Haz clic en **"Combinar"**
3. Elige qué registro mantener como principal
4. Confirma la combinación

::: tip CONSEJO
La combinación mantiene el historial completo de ambos registros.
:::

## Campos Personalizados

### Cascada de Alteración en Campos Select

Al renombrar una opción de campo personalizado del tipo select, todos los registros son actualizados automáticamente.

**Cómo funciona:**

1. Accede a un cliente → **Campos Personalizados**
2. Haz clic en ✏️ al lado del campo
3. Haz clic en ✏️ al lado de la opción que quieres renombrar
4. Escribe el nuevo valor
5. Haz clic en **"Actualizar"**

**Qué se actualiza:**
- ✅ Definición del campo
- ✅ Todos los clientes que usan esa opción
- ✅ Muestra cuántos registros fueron afectados

**Protecciones:**
- 🔒 Detecta ediciones concurrentes
- 🚫 Bloquea duplicados
- ⚠️ Avisa sobre conflictos

## Notas y Tareas

### Agregando Notas

1. En el perfil del cliente, ve a **Notas**
2. Haz clic en **"Nueva nota"**
3. Escribe el contenido
4. Guarda

Las notas son visibles solo para tu equipo.

### Creando Tareas

1. En el perfil del cliente, haz clic en **"Nueva tarea"**
2. Define:
   - Título
   - Descripción
   - Fecha de vencimiento
   - Responsable
   - Prioridad
3. Guarda

## Próximos Pasos

- [Informes](/es/guide/reports/) - Informes avanzados de clientes
- [Configuraciones](/es/guide/settings/) - Permisos y visibilidad
- [Chat](/es/guide/chat/interface) - Atención integrada
