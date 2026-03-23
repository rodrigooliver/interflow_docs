# Volumen de Mensajes

Haz seguimiento de cuántos mensajes envió cada agente o equipo en cualquier período.

## ¿Qué es este reporte?

El reporte de Volumen de Mensajes muestra la **cantidad de mensajes enviados por los agentes** a lo largo del tiempo. Con él, los gestores pueden identificar quién atiende más, comparar el desempeño entre equipos y verificar tendencias de volumen a lo largo de los días, semanas o meses.

::: info Permisos
El acceso al módulo de Reportes es exclusivo para **Dueños**, **Administradores** y **Gerentes**. Los agentes (agent y agent_limited) no ven este elemento en el menú.
:::

## Cómo Acceder

1. En el menú lateral, haz clic en **Reportes** (📊)
2. En la página de reportes, elige:
   - **Volumen por Agente** – mensajes individuales de cada miembro del equipo
   - **Volumen por Equipo** – mensajes agrupados por equipo

## Selección de Período

En la esquina superior derecha de cada reporte, usa el selector de período:

| Opción | Qué muestra |
|--------|------------|
| **Hoy** | Solo el día actual (agrupado por hora) |
| **Esta semana** | Lunes hasta hoy (agrupado por día) |
| **Este mes** | Inicio del mes hasta hoy (agrupado por día) |
| **Este año** | Inicio del año hasta hoy (agrupado por mes) |
| **Día específico** | Un día elegido en el calendario (por hora) |
| **Mes específico** | Un mes y año elegidos (por día) |
| **Año específico** | Un año elegido (por mes) |

## Tarjetas de Resumen

Justo debajo del selector de período, aparecen **tarjetas de colores** — una por cada agente o equipo. Cada tarjeta muestra:

- Nombre del agente / equipo
- Total de mensajes en el período seleccionado

**Interacción:** Haz clic en una tarjeta para **filtrar el gráfico** y ver solo los datos de ese agente o equipo. Haz clic de nuevo para volver a la vista general.

## El Gráfico

El gráfico muestra la evolución del volumen de mensajes a lo largo del período seleccionado.

- **Eje horizontal (X):** períodos de tiempo (horas, días o meses según el período)
- **Eje vertical (Y):** cantidad de mensajes
- **Líneas o barras de colores:** cada color representa un agente o equipo diferente

### Tipos de gráfico

Usa los botones en la esquina del gráfico para alternar entre:

| Tipo | Cuándo usar |
|------|------------|
| **Barra** | Comparar volúmenes entre agentes en cada período |
| **Línea** | Visualizar la tendencia a lo largo del tiempo |

Pasa el mouse sobre el gráfico para ver los valores exactos en cada punto.

## Impresión

Haz clic en el botón **Imprimir** (🖨️) al lado del selector de período para generar una versión limpia para imprimir.

La versión impresa incluye:
- Título y subtítulo del reporte
- Período seleccionado (ej: `01/03/2026 — 23/03/2026`)
- Filtro activo, si lo hay (ej: nombre del agente seleccionado)
- Fecha y hora de generación
- Tarjetas de resumen con totales
- Gráfico

::: tip 💡 Consejo
La barra lateral, los botones y el selector de período se ocultan automáticamente al imprimir. No es necesario configurar nada.
:::

## Ejemplos de Uso

### Ver el volumen del mes actual por agente
1. Abre **Reportes → Volumen por Agente**
2. Selecciona **Este mes** en el selector
3. Compara las tarjetas para ver quién envió más mensajes

### Analizar la productividad de un agente específico en marzo
1. Abre **Reportes → Volumen por Agente**
2. Selecciona **Mes específico** → elige Marzo/2026
3. Haz clic en la tarjeta del agente deseado
4. Analiza el gráfico de línea con la evolución diaria

### Comparar equipos en el último año
1. Abre **Reportes → Volumen por Equipo**
2. Selecciona **Este año**
3. Usa el gráfico de barras para ver el volumen mensual de cada equipo

### Generar reporte para presentar en reunión
1. Configura el período y filtros deseados
2. Haz clic en **Imprimir**
3. En el diálogo de impresión, elige **Guardar como PDF** si prefieres un archivo digital

## Próximos Pasos

- [Visión General de Reportes](/es/guide/reports/) – Conoce todos los reportes disponibles
- [Configuraciones](/es/guide/settings/) – Gestiona equipos y permisos
