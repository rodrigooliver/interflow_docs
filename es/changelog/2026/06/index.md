# Junio 2026

Actualizaciones del mes de junio de 2026.

## Versiones

| Versión | Fecha | Destacados |
|---------|-------|------------|
| [2026.6.2](/es/changelog/2026/06/2026.6.2) | 09/06 | **Eliminación automática de clientes por límite de uso** — configurable en Límites, con botón "Ejecutar ahora" y progreso en tiempo real; los clientes con pedidos POS ahora pueden ser eliminados |
| [2026.6.1](/es/changelog/2026/06/2026.6.1) | 08/06 | **Botones de plantilla WhatsApp Official ahora guardados en el historial** — botones de respuesta rápida, URL y teléfono mostrados correctamente en el chat tras envío manual o masivo |

---

## Resumen del Mes

### ✨ Nuevas Funcionalidades (2)
- **Eliminación automática de clientes por límite de uso** (v2026.6.2) — eliminación configurable en Configuración > Límites (disparador %, meta %, orden por último contacto o registro, conversaciones vinculadas, hora de ejecución), procesada por la cola de eliminación existente
- **Botón "Ejecutar ahora" en las limpiezas automáticas** (v2026.6.2) — dispara la limpieza de Clientes o Almacenamiento inmediatamente, con estado "En curso..." que bloquea disparos duplicados

### 🔄 Cambios (1)
- **Los clientes con pedidos (POS) ahora pueden ser eliminados** (v2026.6.2) — pedidos preservados en el historial de ventas, solo desvinculados del cliente

### 🐛 Correcciones (1)
- **Botones de plantilla WhatsApp Official no se mostraban en el chat** (v2026.6.1) — los botones de las plantillas (respuesta rápida, URL, teléfono) ahora se guardan en el `metadata` del mensaje y se renderizan en el historial del chat; corrige el envío manual y el disparo masivo

---

::: info 📝 Total
**2 lanzamientos** en este mes!
:::
