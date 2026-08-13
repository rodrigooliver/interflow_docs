# Canal y condiciones en el Agente IA

El mismo Agente IA puede atender en varios canales y adaptar el texto, los contextos adicionales y las herramientas listas según el **origen de la conversación**, la **etapa del embudo** y las **etiquetas** del cliente.

Changelog: [v2026.8.8](/es/changelog/2026/08/2026.8.8)

---

## Canal en el contexto

En cada interacción, el agente recibe el canal actual en el mensaje de contexto del sistema:

- nombre (ej.: WhatsApp Ventas)
- tipo (WhatsApp, Instagram, correo, etc.)
- ID
- identificador (número, @ de Instagram, correo…)

Así la IA diferencia conversaciones y puede adaptar tono, ofertas y transferencias.

---

## Reglas de las condiciones

Las mismas reglas valen en el prompt, en los contextos adicionales y en las herramientas listas.

| Configuración | Resultado |
|---------------|-----------|
| Ningún filtro | Siempre entra |
| Varios canales (o etapas, o etiquetas) | O — basta uno |
| Canal **y** embudo **y** etiquetas | Y — todos los tipos rellenados deben coincidir |

Ejemplo: canales A y B + etiqueta VIP → la condición vale si el canal es A o B **y** el cliente tiene la etiqueta VIP.

---

## Si / si no en el texto del prompt

En la pestaña **Contexto**, el editor tiene un botón de ramificación para insertar un bloque condicional.

1. Elija canal, etapa y/o etiquetas
2. Complete el texto **si es verdadero**
3. (Opcional) complete **si es falso**
4. El bloque entra en el prompt; en el editor, `{{#if}}`, `{{else}}` y `{{/if}}` aparecen resaltados

Solo el texto de la ramificación que coincide va a la IA. Sin **si es falso**, el bloque desaparece cuando la condición no se cumple.

---

## Contextos adicionales

Cada contexto extra puede tener **Mostrar cuando**. Los que pasan la condición se concatenan en **un solo texto** al final.

- Sin condición = entra siempre
- Lista de WhatsApp sigue disponible como plantilla
- El tipo en blanco sirve para textos condicionales (tono, reglas, ofertas por canal)

---

## Herramientas listas

En cada acción del sistema, use **Disponible cuando**. La herramienta solo se envía a la IA si se cumple la condición.

Las herramientas personalizadas y la base de conocimiento **no** usan este filtro en esta versión.

---

## Probar

En la pestaña **Probar**, abra **Simular contexto** y elija canal, etapa y etiquetas. La prueba aplica las mismas reglas de la conversación real (bloques si / si no y contextos adicionales).

---

## Limitaciones

- Sin anidamiento de si / si no (varios bloques en secuencia, sí)
- Las condiciones aún no se aplican a herramientas personalizadas ni a la base de conocimiento
- El agente sigue ligado a los canales por el **flujo / disparador**; esta función no crea un vínculo directo prompt↔canal
