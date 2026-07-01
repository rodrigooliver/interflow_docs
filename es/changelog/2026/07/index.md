# Julio 2026

Actualizaciones del mes de julio de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.7.1](/es/changelog/2026/07/2026.7.1) | 01/07 | **Chat de Prueba de Flujos** — panel lateral en FlowBuilder para simular conversaciones en tiempo real, con indicador de nodo activo, override de debounce y modo dividido con vista del agente |

---

## Resumen del Mes

### ✨ Nuevas Funcionalidades (3)
- **Chat de Prueba de Flujos** (v2026.7.1) — entorno completo en FlowBuilder para probar flujos con cliente real, panel lateral, vista dividida, indicador de nodo en tiempo real y override de debounce
- **Badge de Canal de Prueba** (v2026.7.1) — identificación visual en ámbar en el encabezado del chat cuando el atendimiento es de un canal tipo `test`
- **Indicador flotante de nodo activo** (v2026.7.1) — badge debajo del botón de flujo en el encabezado del agente con nombre del nodo, estado de debounce y tooltip con horario

### 🐛 Correcciones (2)
- **Error de FK al eliminar chat de prueba** (v2026.7.1) — eliminación en orden correcto para evitar violación de constraint entre `chats` y `flow_sessions`
- **Override de debounce no propagado** (v2026.7.1) — `debounceOverrideMs` ahora pasado correctamente a `createFlowEngine`

---

::: info 📝 Total
**1 lanzamiento** este mes!
:::
