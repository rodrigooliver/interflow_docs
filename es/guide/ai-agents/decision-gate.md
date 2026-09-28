# Decisión antes del agente

Antes del modelo de conversación, el Agente IA puede decidir si debe actuar. La decisión usa JEV y no escribe la respuesta al cliente.

Changelog: [v2026.9.15](/es/changelog/2026/09/2026.9.15)

---

## Dónde configurarlo

1. Abra el Agente IA
2. Vaya a la pestaña **Decisión**
3. Active **Evaluar antes de ejecutar el agente**

El inicio manual del flujo no pasa por esta decisión. Ejecutar el agente en un mensaje tampoco.

---

## Condiciones antes de la decisión

Opcionales. Si el cliente ya está en una etiqueta o etapa, la regla vale sin llamar a JEV.

| Tipo | Qué ocurre |
|------|----------------|
| Bloquear el agente | No responde en este mensaje. El próximo mensaje automático se evalúa de nuevo |
| Saltar la decisión y ejecutar | El agente de conversación responde con normalidad |

Si coinciden una regla de bloquear y otra de saltar, prevalece bloquear.

---

## Opciones de salida

JEV elige una opción a partir de la instrucción y del texto de cada opción.

| Efecto | Qué ocurre |
|--------|----------------|
| Continuar | El agente de conversación se ejecuta. Los mensajes siguientes de la misma sesión no vuelven a pasar por la decisión |
| Pausar lo automático | No responde y lo automático de este chat no entra de nuevo. El inicio manual sigue disponible |
| Intentar de nuevo | No responde ahora. El próximo mensaje del cliente pasa otra vez por la decisión |

En cualquier efecto se puede, si se quiere, agregar etiquetas, quitar etiquetas o mover la etapa. Eso es extra respecto a la decisión.

Cuando el agente no continúa, el chat muestra un mensaje de sistema con el motivo.
