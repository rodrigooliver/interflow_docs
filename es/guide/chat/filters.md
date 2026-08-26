# Filtros de conversaciones

Además de los filtros rápidos (Mías, Sin asignar, Grupos), el panel avanzado recorta la cola por equipo, tag, canal, estado, embudo y **campos personalizados del cliente**.

Changelog: [v2026.8.14](/es/changelog/2026/08/2026.8.14)

---

## Dónde filtrar

| Superficie | Qué hace |
|------------|----------|
| Panel de filtros en **Chats** | Recorta la lista y los contadores |
| **Exportar informe** | Aplica el mismo recorte a la exportación |
| **Configurar filtros rápidos** | Guarda el criterio en el atajo del equipo |

---

## Campos personalizados

El filtro usa la **ficha del cliente** ligada a la conversación — el mismo conjunto de campos de Clientes.

Tipos que entran:

- Lista (un valor)
- Selección múltiple
- Fecha
- Fecha y hora

Para cada campo, elige un modo:

| Modo | Resultado |
|------|-----------|
| Todos los valores / Todas las fechas | El campo no restringe la lista |
| Sin valor | Solo conversaciones cuyo cliente **no completó** el campo |
| Valores específicos / Período específico | Solo conversaciones cuyo cliente coincide con las opciones o el intervalo |

Varios campos activos se combinan: el cliente debe cumplir **todos**.

---

## Cómo usar el panel

1. En **Chats**, abre el panel de filtros
2. Expande **Campos personalizados**
3. Marca el modo y, si corresponde, las opciones o el período
4. Aplica — la lista, los chips activos y los contadores siguen

Los administradores pueden incluir los mismos criterios en **Configurar filtros rápidos**, para que el equipo abra la cola ya recortada.

---

## Qué no entra

- Grupos de WhatsApp y chats internos (no tienen cliente)
- Conversaciones individuales **sin** cliente vinculado
- Campos de texto, número y sí/no — aún no filtran la lista
- Columnas extra de esos campos en el archivo del informe — el recorte vale; las columnas exportables siguen en el roadmap

---

## Relacionado

- [Interfaz de Chat](/es/guide/chat/interface#filtros-personalizados)
- [Clientes — Campos personalizados](/es/guide/crm/customers#campos-personalizados)
