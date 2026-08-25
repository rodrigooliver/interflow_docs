# Disparos masivos

Campañas por segmentos: mensaje directo, flujo WAHA o **flujo silencioso** en el último chat.

::: tip Acceso
Menú → **Disparos masivos**. Requiere `bulkMessages`.
:::

## Modos de envío

| Modo | Comportamiento | Notas |
|------|-----------|------------|
| `message` | Envía texto/plantilla | Plantillas oficiales **APPROVED** |
| `flow` | Dispara flujo `general` vía WAHA | Delay ≥ 20s |
| `silent_flow` | Ejecuta `bulk_silent` en el **último chat** sin mensaje al cliente | Delay ≥ 5s; nodos de media/texto/input bloqueados |

## Crear campaña

1. Abra **Disparos masivos** → **Nueva**
2. Elija modo y filtros (canal, tags, etapas CRM, estado…)
3. Configure mensaje/plantilla/flujo e intervalo
4. Inicie — puede pausar o cancelar después

## WhatsApp WAHA

En modo **mensaje** con canal WAHA:

- **Enviar solo a conversaciones existentes** viene marcado por defecto — no abre un contacto nuevo en ese número
- Si WhatsApp restringe primeros contactos, la campaña **se pausa al momento** y no se reanuda sola
- Quien ya tiene conversación en el canal puede seguir recibiendo

Útil para no agravar el bloqueo cuando varias personas disparan por el mismo número.

> Guía del canal: [WhatsApp WAHA — Restricción de contactos nuevos](/es/guide/channels/whatsapp-waha#restriccion-de-contactos-nuevos)

## Relacionados

- [Plantillas WhatsApp](/es/guide/channels/whatsapp-templates)
- [Tags](/es/guide/chat/tags)
- [Embudos CRM](/es/guide/crm/funnels)
