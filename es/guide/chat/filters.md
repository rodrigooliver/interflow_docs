# Filtros de conversaciones

Además de los filtros rápidos (Mías, Sin asignar, Grupos), el panel avanzado recorta la cola por equipo, tag, canal, estado, embudo, **mensajes no leídos** y **campos personalizados del cliente**.

Changelog: [v2026.8.17](/es/changelog/2026/08/2026.8.17) · [v2026.8.14](/es/changelog/2026/08/2026.8.14)

---

## Dónde filtrar

| Superficie | Qué hace |
|------------|----------|
| Panel de filtros en **Chats** | Recorta la lista y los contadores |
| **Exportar informe** | Aplica el mismo recorte y permite marcar campos personalizados como columnas |
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

## Mensajes no leídos

El recorte **No leídos** puede ir en el panel, en el botón del encabezado y en los **filtros rápidos personalizados**.

| Dónde | Qué hace |
|-------|----------|
| Botón **No leídos** en el encabezado de la lista | Recorte rápido de la lista actual, sin guardarlo en el atajo |
| Panel de filtros | El mismo criterio, visible junto con los demás recortes |
| **Configurar filtros rápidos** | Guarda “no leídas” en el atajo, combinado con responsable, equipo, canal y el resto |

1. En **Chats**, abre **Configurar filtros rápidos**
2. Duplica un filtro (o edita uno personalizado) y abre **Configuración**
3. Marca **No leídos** y combínalo con los otros criterios
4. Guarda — al hacer clic en el atajo, la lista, el chip y el contador siguen

El botón del encabezado sigue disponible para refinar la lista en el momento. Cambiar a una pestaña predeterminada del sistema apaga el recorte de no leídas. Archivados sigue como interruptor aparte.

---

## Columnas en el informe

En **Exportar informe**, la lista de columnas incluye **todos** los campos personalizados de la organización (texto, número, lista, fecha, fecha/hora y sí/no — no solo los que filtran).

1. Abre **Exportar informe** en Chats
2. A la derecha, baja hasta **Campos personalizados**
3. Marca los campos que deben convertirse en columnas en el archivo
4. Exporta

Los campos salen desmarcados por defecto. Un grupo o conversación sin cliente queda con la celda vacía.

---

## Qué no entra

- Grupos de WhatsApp y chats internos (no tienen cliente)
- Conversaciones individuales **sin** cliente vinculado
- Campos de texto, número y sí/no — aún no filtran la lista (solo entran como columnas del informe)

---

## Relacionado

- [Interfaz de Chat](/es/guide/chat/interface#filtros-personalizados)
- [Clientes — Campos personalizados](/es/guide/crm/customers#campos-personalizados)
