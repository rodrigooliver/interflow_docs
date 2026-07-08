# Julio 2026

Actualizaciones del mes de julio de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.7.4](/es/changelog/2026/07/2026.7.4) | 08/07 | **Atajos en Secuencia** — múltiples mensajes con intervalo configurable por atajo, editor en el admin y modal de revisión en el chat antes del envío |
| [2026.7.3](/es/changelog/2026/07/2026.7.3) | 07/07 | **Nodo Punto de Control** — seguimiento explícito de volumen y tasa de respuesta en flujos, con reporte filtrable (período, canal, agente) e indicador en el funnel de ventas |
| [2026.7.2](/es/changelog/2026/07/2026.7.2) | 03/07 | **Soporte para DeepSeek** — nuevo proveedor de IA (modelos V4 Flash/Pro) disponible con clave propia, en el Agente de IA, Probar Prompt y Mejorar Texto, con Thinking Mode configurable |
| [2026.7.1](/es/changelog/2026/07/2026.7.1) | 01/07 | **Chat de Prueba de Flujos** — panel lateral en FlowBuilder para simular conversaciones en tiempo real, con indicador de nodo activo, override de debounce y modo dividido con vista del agente |

---

## Resumen del Mes

### ✨ Nuevas Funcionalidades (8)
- **Secuencias en Atajos de Mensaje** (v2026.7.4) — atajos con hasta 10 mensajes, intervalo configurable por paso (0,5s–30s), badge en el listado y compatibilidad con atajos antiguos
- **Composer de Secuencia en el Chat** (v2026.7.4) — modal de revisión al usar atajo secuencial: editar textos, eliminar adjuntos, ajustar intervalos y enviar con un clic o Enter
- **Nodo Punto de Control** (v2026.7.3) — nodo no bloqueante en la categoría Estadísticas para medir volumen de paso y/o tasa de respuesta, con ventana configurable por nodo (predeterminado 48h) y snapshot opcional de variables
- **Reporte de Analytics de Follow-up** (v2026.7.3) — panel renovado con filtros (período, canal, agente), actualización manual, design system y reporte acotado por punto de control
- **Soporte para DeepSeek** (v2026.7.2) — nuevo proveedor de IA (DeepSeek V4 Flash/Pro) disponible con clave propia del cliente, con Thinking Mode configurable (Alto/Máximo)
- **Chat de Prueba de Flujos** (v2026.7.1) — entorno completo en FlowBuilder para probar flujos con cliente real, panel lateral, vista dividida, indicador de nodo en tiempo real y override de debounce
- **Badge de Canal de Prueba** (v2026.7.1) — identificación visual en ámbar en el encabezado del chat cuando el atendimiento es de un canal tipo `test`
- **Indicador flotante de nodo activo** (v2026.7.1) — badge debajo del botón de flujo en el encabezado del agente con nombre del nodo, estado de debounce y tooltip con horario

### 🔄 Mejoras (7)
- **Menú de atajos en el chat** (v2026.7.4) — visual alineado al design system, con posicionamiento estable vía portal
- **Compatibilidad con atajos existentes** (v2026.7.4) — normalización automática del formato antiguo al modelo de pasos
- **Rastreo automático eliminado** (v2026.7.3) — contabilizador acoplado al timeout de "Esperar Respuesta" y reagendamiento del Agente de IA eliminado; las métricas dependen solo de Puntos de Control explícitos
- **Prueba con borrador no publicado** (v2026.7.3) — probar desde el Constructor de Flujos usa nodes/edges en borrador; vía Agente de IA, mantiene la versión publicada
- **Reinicio de prueba más completo** (v2026.7.3) — elimina la sesión de flujo anterior del chat al reiniciar la prueba
- **Notificaciones desactivadas en la prueba** (v2026.7.3) — los mensajes de prueba ya no notifican al equipo
- **Indicador visual de progreso** (v2026.7.3) — edge animado hasta el nodo activo durante la prueba

### 🐛 Correcciones (4)
- **Rendimiento de la verificación de timeouts** (v2026.7.3) — procesamiento en lotes con concurrencia, eliminando retrasos de hasta 20-30 minutos
- **Nodo destacado incorrectamente** (v2026.7.3) — corregido dato residual que mantenía más de un nodo con borde verde en el Constructor de Flujos
- **Error de FK al eliminar chat de prueba** (v2026.7.1) — eliminación en orden correcto para evitar violación de constraint entre `chats` y `flow_sessions`
- **Override de debounce no propagado** (v2026.7.1) — `debounceOverrideMs` ahora pasado correctamente a `createFlowEngine`

---

::: info 📝 Total
**4 lanzamientos** este mes!
:::
