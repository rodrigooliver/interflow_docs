# Secuencias en Atajos de Mensaje

Envía varios mensajes en orden con un solo atajo, definiendo intervalos entre cada uno para un ritmo natural de conversación.

## ¿Qué es?

Un **atajo en secuencia** agrupa de 2 a 10 mensajes que se envían automáticamente, uno tras otro, respetando el intervalo configurado entre ellos. Cada paso puede tener texto, adjuntos y firma del agente independientes.

Los atajos con **solo un mensaje** siguen funcionando exactamente como antes.

## ¿Para qué sirve?

| Escenario | Ejemplo |
|-----------|---------|
| Saludo por etapas | Mensaje de bienvenida → presentación → pregunta inicial |
| Envío de material | Texto introductorio → PDF → instrucciones de uso |
| Follow-up estructurado | Confirmación → detalles → call-to-action |

## Dónde acceder

| Área | Ruta |
|------|------|
| **Configurar atajos** | Organización → Atajos de Mensaje |
| **Usar en el chat** | Escribe `/` en el campo de mensaje y selecciona el atajo |

## Configurar un atajo secuencial

1. Ve a **Organización** → **Atajos de Mensaje**
2. Haz clic en **Nuevo Atajo** o edita uno existente
3. En la sección **Mensajes**, completa el primer paso (texto y adjuntos)
4. Haz clic en **Agregar mensaje** para incluir más pasos
5. En cada paso (excepto el último), define el **intervalo antes del siguiente**:
   - Opciones: 0,5s, 1s, 2s, 3s, 5s, 10s, 15s o 30s
6. Marca o desmarca **Firmar mensaje** por paso, si es necesario
7. Reordena con los botones de mover arriba/abajo
8. Guarda

En el listado, los atajos con más de un mensaje muestran un badge (ej.: `3 msgs`).

::: tip 💡 Compatibilidad
Los atajos creados antes de esta versión se convierten automáticamente al formato de pasos. No es necesario recrearlos.
:::

## Usar en el chat

1. En el atendimiento, escribe `/` y elige el atajo deseado
2. Si el atajo tiene **más de un mensaje**, se abre un **modal de revisión**:
   - Edita el texto de cualquier paso
   - Elimina adjuntos de pasos específicos (sin cambiar el atajo guardado)
   - Ajusta intervalos entre mensajes
3. Haz clic en **Enviar Secuencia** o presiona **Enter**
4. Los mensajes aparecen en el chat en secuencia, con los intervalos configurados

Para cancelar, usa **Cancelar secuencia**, **ESC** o haz clic fuera del modal.

::: info 📌 Campo de mensaje
El campo de escritura normal **permanece visible** mientras el modal está abierto, para mantener el contexto de la conversación.
:::

## Limitaciones

- Máximo de **10 mensajes** por atajo
- Intervalos disponibles: 0,5s a 30s (valores fijos)
- La edición en el modal **no altera** el atajo guardado — solo el envío actual

## Relacionado

- [Interfaz de Chat](/es/guide/chat/interface) — visión general del atendimiento
- [Changelog v2026.7.4](/es/changelog/2026/07/2026.7.4) — detalles de esta versión
