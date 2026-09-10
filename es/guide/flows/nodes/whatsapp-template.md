# Nodo: Plantilla de WhatsApp

Envía plantillas aprobadas desde flujos ejecutados en canales de WhatsApp Oficial.

## Cuándo usarlo

WhatsApp Oficial permite mensajes directos durante las 24 horas posteriores al último mensaje del cliente. Fuera de esa ventana, usa una plantilla aprobada.

El nodo **Condición** permite elegir el camino:

1. Agrega el tipo **Ventana de 24h de WhatsApp**
2. Elige **Está abierta** o **Está cerrada**
3. Conecta cada salida con la acción correspondiente

Esta condición solo se evalúa en canales de **WhatsApp Oficial**. En otros canales no es aplicable.

## Configurar el nodo

1. Arrastra **Plantilla de WhatsApp** desde la categoría **Enviar**
2. Haz clic en el nodo para abrir la configuración
3. Agrega una asignación
4. Selecciona un canal de WhatsApp Oficial
5. Selecciona una plantilla aprobada de ese canal
6. Completa todas las variables de la plantilla
7. Guarda la configuración

## Asignaciones por canal

Las plantillas pertenecen al canal donde fueron registradas. Si el mismo flujo puede ejecutarse en varios canales oficiales, agrega una asignación para cada canal.

Durante la ejecución, el nodo identifica el canal de la conversación y envía solo la plantilla asignada. Si no existe una asignación o la plantilla no está aprobada, el flujo usa la salida **Error**, cuando está conectada.

## Variables

Cada parámetro `{{1}}`, `{{2}}` y siguientes acepta:

- Texto fijo
- Variables del flujo
- Datos del cliente disponibles en el selector

Ejemplo:

```text
{{1}} = {{customer.name}}
{{2}} = {{numero_pedido}}
```

## Ejemplo de flujo

```text
Condición: canal = WhatsApp Oficial
  └─ Condición: ventana de 24h está abierta
       ├─ Sí → Mensaje de Texto
       └─ Si no → Plantilla de WhatsApp
```

## Restricciones

- Disponible solo para canales de WhatsApp Oficial
- Lista únicamente plantillas aprobadas
- Cada plantilla debe pertenecer al mismo canal de la conversación
- No está disponible en flujos de campaña silenciosa masiva

## Próximos pasos

- [Nodo Condición](/es/guide/flows/nodes/condition)
- [Tipos de Nodos](/es/guide/flows/nodes/)
- [Plantillas de WhatsApp](/es/guide/channels/whatsapp-templates)
- [Changelog v2026.9.3](/es/changelog/2026/09/2026.9.3)
