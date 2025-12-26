# Informes

Analiza métricas y rendimiento de tu atención en Interflow.

## Visión General

El módulo de Informes de Interflow ofrece análisis detallados sobre atención, clientes, equipo y citas. Usa datos para tomar decisiones informadas y mejorar continuamente tu operación.

## Accediendo a Informes

1. En el menú principal, haz clic en **Informes** (📊)
2. Selecciona el tipo de informe deseado
3. Configura los filtros de período y criterios
4. Visualiza o exporta los datos

## Informes de Atención

Análisis de rendimiento de atención al cliente.

### Métricas Disponibles

| Métrica | Descripción |
|---------|-------------|
| **Tiempo promedio de respuesta** | Tiempo para primera respuesta |
| **Tiempo promedio de resolución** | Tiempo para resolver la atención |
| **Tasa de resolución** | % de atenciones resueltas con éxito |
| **Volumen de atenciones** | Cantidad por período |
| **Satisfacción del cliente** | Nota promedio |

### Filtros

- **Período**: Fecha inicial y final
- **Equipo**: Filtrar por equipo específico
- **Agente**: Filtrar por atendente
- **Canal**: WhatsApp, Instagram, Email, etc.
- **Estado**: Resuelto, pendiente, en progreso

### Visualizaciones

- 📊 **Gráficos de línea**: Evolución a lo largo del tiempo
- 📈 **Gráficos de barra**: Comparativo entre períodos/equipos
- 🥧 **Gráficos de pizza**: Distribución por categoría
- 📋 **Tablas**: Datos detallados exportables

## Informes Avanzados de Clientes

Generador de informes con agrupaciones y subdivisiones personalizadas.

### Cómo Crear

1. En **Clientes** → haz clic en **"Informes Avanzados"** 📊
2. Haz clic en **"Nueva Configuración"**
3. Sigue el asistente de 5 pasos:

**Paso 1: Upload de Datos**
- Haz upload de un JSON (exportar de la lista de clientes)
- El sistema lee la estructura de datos

**Paso 2: Configurar Agrupaciones**
- Selecciona campos para agrupar (ej: por Origen, Estado)
- Define la jerarquía de agrupación

**Paso 3: Configurar Columna de Total**
- Elige cómo calcular el total
- Opciones: conteo, suma, promedio

**Paso 4: Configurar Subdivisiones**
- Agrega subdivisiones (ej: motivos de no compra)
- Configura criterios de clasificación

**Paso 5: Revisar y Guardar**
- Ve el preview del informe
- Da un nombre a la configuración
- Guarda para reutilización

### Recursos

| Recurso | Descripción |
|---------|-------------|
| **Normalización inteligente** | Unifica variaciones de texto |
| **Preview en tiempo real** | Ve el resultado mientras configuras |
| **Exportación CSV** | Descarga para Excel/Sheets |
| **Modelos guardados** | Reutiliza configuraciones |

## Informes de Equipo

Analiza el rendimiento individual y colectivo del equipo.

### Métricas por Agente

| Métrica | Descripción |
|---------|-------------|
| **Atenciones realizadas** | Cantidad de atenciones |
| **Tiempo promedio de respuesta** | Velocidad de respuesta |
| **Tasa de resolución** | % de éxito |
| **Satisfacción** | Nota promedio recibida |
| **Tiempo online** | Horas conectado |

### Ranking del Equipo

Visualiza los mejores rendimientos:

- 🥇 **Top agentes** por volumen
- ⚡ **Más rápidos** en respuesta
- ⭐ **Mejor evaluados** por clientes

## Informes de Citas

Métricas del módulo de agenda.

### Métricas Disponibles

| Métrica | Descripción |
|---------|-------------|
| **Total de citas** | Cantidad en el período |
| **Tasa de asistencia** | % que asistió |
| **Tasa de cancelación** | % cancelado |
| **Tasa de no-show** | % que faltó |
| **Tiempo promedio de atención** | Duración promedio |

### Análisis

- **Por servicio**: Qué servicios son más populares
- **Por profesional**: Rendimiento de cada profesional
- **Por horario**: Qué horarios tienen más demanda
- **Por día de la semana**: Días más movidos

## Exportación de Datos

### Formatos Disponibles

| Formato | Uso Recomendado |
|---------|-----------------|
| **CSV** | Excel, Google Sheets |
| **Excel (.xlsx)** | Análisis avanzados |
| **PDF** | Presentaciones, impresión |
| **JSON** | Integraciones, APIs |

### Cómo Exportar

1. Configura los filtros deseados
2. Haz clic en **"Exportar"**
3. Selecciona el formato
4. Espera la descarga

::: tip 💡 Consejo
Para informes grandes, el sistema genera el archivo en background y envía por email cuando esté listo.
:::

## Programación de Informes

Recibe informes automáticamente por email.

### Configuración

1. Accede a **Informes** → **Programaciones**
2. Haz clic en **"Nueva Programación"**
3. Configura:
   - **Informe**: Qué informe enviar
   - **Frecuencia**: Diario, semanal, mensual
   - **Destinatarios**: Emails que recibirán
   - **Formato**: PDF, Excel, etc.
4. Guarda

## Permisos

### Quién puede acceder a informes

| Perfil | Acceso |
|--------|--------|
| Owner | ✅ Todos los informes |
| Admin | ✅ Todos los informes |
| Manager | ✅ Informes de su equipo |
| Agent | ⚠️ Solo métricas personales |

::: warning ⚠️ Atención
Agentes con restricción de visibilidad ven solo datos filtrados de sus equipos.
:::

## Próximos Pasos

- [Agenda](/es/guide/schedule/) - Métricas de citas
- [CRM y Clientes](/es/guide/crm/customers) - Informes de clientes
- [Configuraciones](/es/guide/settings/) - Permisos de informes


