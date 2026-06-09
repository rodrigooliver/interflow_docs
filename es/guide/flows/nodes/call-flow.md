# Nodo: Llamar otro Flujo

Termina el flujo actual e inicia automáticamente otro flujo, manteniendo el contexto de la conversación.

## Visión General

El nodo **Llamar otro Flujo** permite modularizar tus flujos de chatbot, dividiendo flujos grandes en partes más pequeñas y reutilizables. Al llegar a este nodo, la sesión del flujo actual termina y otro flujo se inicia automáticamente — sin que el cliente note la transición.

**Casos de uso:**

- Reutilizar un flujo de bienvenida, triaje o cierre en múltiples contextos
- Dividir un flujo complejo en módulos independientes
- Pasar datos recopilados de un flujo a otro

## Cómo agregar al flujo

1. En el constructor de flujos, arrastra el nodo **Llamar otro Flujo** al canvas (categoría **Acciones**)
2. Haz clic en el nodo para abrir el modal de configuración
3. Configura en 3 pasos

## Configuración

### Paso 1 — Flujo

Selecciona el flujo que deseas activar. Usa el campo de búsqueda para filtrar por nombre.

### Paso 2 — Nodo inicial

Elige en qué nodo debe comenzar el flujo de destino. Si no seleccionas, el flujo comenzará desde el nodo predeterminado (`start`).

::: tip 💡 Flexibilidad
Puedes iniciar el flujo de destino en cualquier nodo, no necesariamente el inicio. Esto permite crear puntos de entrada diferentes para el mismo flujo según el contexto.
:::

### Paso 3 — Variables (opcional)

Mapea las variables que deseas pasar al flujo de destino:

| Columna | Descripción |
|---------|-------------|
| **Izquierda** | Variable del flujo de destino que recibirá el valor |
| **Derecha** | Valor a enviar: texto fijo o variable del flujo actual |

**Ejemplos de mapeo:**

```
nombre_cliente  ←  {{customer_name}}      (pasa variable del flujo actual)
origen          ←  whatsapp               (valor fijo)
descripcion     ←  Pedido #{{pedido_id}}  (interpola múltiples variables)
```

## Comportamiento

Al llegar a este nodo durante una conversación:

1. La sesión del flujo actual se **termina automáticamente**
2. El flujo de destino se **inicia** con las variables mapeadas ya disponibles
3. La conversación continúa sin interrupciones para el cliente

## Próximos Pasos

- [Constructor de Flujos](/es/guide/flows/builder) - Visión general del constructor
- [Tipos de Nodos](/es/guide/flows/nodes/) - Todos los nodos disponibles
- [Variables](/es/guide/flows/nodes/variable) - Trabajando con variables
