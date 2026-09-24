---
title: Solicitudes
description: Cómo pedir un cambio en el producto, elegir la urgencia y seguir créditos, plazo y estado hasta la implantación.
---

# Solicitudes

Pide una función nueva, una mejora o la corrección de un error del sistema y sigue el pedido hasta que esté en el aire.

::: tip Acceso
Menú **Solicitudes**.
:::

> Relacionado: [Copiloto](/es/guide/copilot)

## Qué es

Cada pedido se convierte en una tarjeta con estado, plazo y créditos. El saldo de la organización aparece en la parte superior de la página. Lo que no se usa se acumula.

## Cómo crear una

1. En **Solicitudes**, haz clic en **Nueva solicitud**
2. Describe lo que necesitas, en lenguaje común
3. Haz clic en **Continuar en el copiloto**

El copiloto tiene que estar en modo **Agente** o **Agente directo** para guardar. En modo **Pregunta** solo explica el camino.

En el chat, el flujo es este:

1. Revisa la documentación para ver si el producto ya hace eso
2. Busca un pedido parecido, terminado o en curso. Si lo encuentra, lo cuenta en el chat y solo sigue si tú quieres
3. Consulta el saldo
4. Clasifica el pedido y muestra cuatro urgencias, cada una con crédito y plazo
5. Tú eliges la urgencia en el chat
6. Si la pantalla abierta muestra el problema o la interfaz que va a cambiar, toma una captura. Un pedido que no depende de la pantalla sigue sin captura
7. Guarda la solicitud y devuelve el enlace **Ver tu solicitud**

También puedes empezar desde el copiloto en cualquier pantalla, sin el botón. La página abierta queda registrada en el pedido, para que el equipo sepa de dónde partió.

Si el saldo no cubre la urgencia elegida, el copiloto abre la compra de créditos en la misma página (**Comprar**).

## Categorías

El copiloto elige la categoría a partir de lo que describiste.

| Categoría | Cuándo entra |
|-----------|----------------|
| Nueva funcionalidad | Algo que el sistema todavía no hace |
| Mejora | Un ajuste en algo que ya existe |
| Corrección de error | Error de pantalla, botón o comportamiento del propio sistema |
| Integración | Conectar con un sistema externo |
| Crear agente IA | Un agente nuevo |
| Modificar agente IA | Cambiar un agente o un flujo, incluso cuando responde mal |
| Interfaz | Aspecto y uso de la pantalla |
| Rendimiento | Lentitud |
| Seguridad | Protección de datos |
| Otro | Lo que no encaje arriba |

::: warning Corrección de error
La corrección de error cubre un fallo del propio sistema. Un agente o flujo que responde mal entra en **Modificar agente IA**. Solo la corrección de error deja de gastar créditos.
:::

Un pedido vago, del tipo "quiero mejorar todo", entra como mejora de tamaño medio. Describe el resultado que esperas y, si puedes, un ejemplo del día a día.

## Urgencia

| Urgencia | Efecto |
|----------|--------|
| Baja | Plazo más largo y menos créditos |
| Media | Plazo y crédito de referencia |
| Alta | Entrega más rápida y más créditos |
| Urgente | La más rápida y el mayor costo |

El plazo también se alarga cuando ya hay muchos pedidos en curso. La fecha que aparece en el chat es la estimación del momento del presupuesto.

En la corrección de error la cuenta es de compensación: la urgencia baja devuelve más créditos cuando el equipo aprueba; la urgencia alta devuelve menos, porque la corrección pasa al frente.

## Créditos

El número en la parte superior de **Solicitudes** es el saldo. El historial se abre al hacer clic en él.

- **Disponible** = saldo real menos lo que ya está reservado en pedidos **pendientes**. La corrección de error no reserva
- Al crear, el sistema comprueba si lo disponible cubre la urgencia elegida
- El crédito sale del saldo cuando el equipo **aprueba**
- Mientras el pedido está pendiente, la tarjeta muestra el valor como estimación
- Si un pedido ya cobrado se rechaza, el valor vuelve al saldo
- La corrección de error no descuenta. En la aprobación, el equipo puede **sumar** créditos de compensación
- Falta saldo: usa **Comprar** en la misma página

El plan deposita créditos a lo largo del tiempo. El saldo no se pone a cero al final del mes.

## Estado

| Estado | Significado |
|--------|-------------|
| Pendiente | Enviado, esperando el análisis del equipo |
| Aprobado | Aceptado. Los créditos se cobraron, o se sumaron en el caso de corrección de error |
| En desarrollo | El equipo lo está haciendo |
| En pruebas | En validación |
| Implantado | En el aire. Si hay instrucciones de uso, la tarjeta muestra **Ver instrucciones** |
| Rechazado | No se hará. El motivo aparece en el detalle |

Recibes un aviso cuando el pedido se aprueba o se rechaza.

## Después de enviarlo

En la lista se puede filtrar por estado, buscar por texto y ordenar por más recientes, más votados o plazo.

En la tarjeta y en el detalle:

- **Votar** apoya un pedido de la organización
- Los comentarios están en el detalle, junto a la descripción y los adjuntos
- Mientras esté **pendiente** y sea tuyo, puedes **eliminarlo** o **ajustar la urgencia**. Título, descripción y categoría se quedan como se enviaron
- Se puede adjuntar un archivo (imagen, PDF, hoja de cálculo, vídeo y otros, hasta 50 MB cada uno)

La captura del copiloto empieza visible para ti y para el equipo. El equipo puede liberar la imagen para los demás.

## Qué pasa después del envío

Enviar coloca el pedido en la cola de análisis. El cambio llega al producto después de que el equipo aprueba y termina el trabajo. El plazo de la tarjeta es la estimación de la urgencia elegida en ese momento.
