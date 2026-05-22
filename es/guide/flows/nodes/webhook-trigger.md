# Nodo: Webhook Trigger

Recibe eventos de sistemas externos e inicia un flujo automáticamente.

## Visión General

El nodo **Webhook Trigger** es el punto de entrada de un flujo activado por un sistema externo vía HTTP. A diferencia del nodo Start (que requiere interacción del usuario), el Webhook Trigger se activa mediante una llamada a la API — desde plataformas de ventas, ERPs, CRMs o cualquier servicio que envíe datos.

Casos de uso:

- Crear o actualizar un cliente cuando llega un nuevo pedido de una tienda
- Iniciar un flujo de bienvenida al recibir el registro de un lead
- Enrutar diferentes acciones según el tipo de evento recibido
- Integrar con servicios como **Kiwify**, **Hotmart**, **Shopify** o cualquier webhook personalizado

## Cómo añadir al flujo

1. En el constructor de flujos, arrastra el nodo **Webhook Trigger** al área de trabajo
2. Haz clic en el nodo para abrir el panel de configuración
3. Se generará automáticamente una URL única — cópiala y configúrala en el sistema externo

## Pestañas de configuración

### Pestaña: General

#### URL del Webhook

La URL se genera automáticamente con el formato:

```
https://api.tuapp.com/webhooks/flow/{id}
```

Copia esta URL y configúrala en el sistema externo como destino del webhook.

#### Mapeo de Variables

Mapea campos del payload a variables del flujo:

| Campo en el Body | Variable del Flujo |
|------------------|-------------------|
| `body.user.name` | `nombre_cliente` |
| `body.order.total` | `valor_pedido` |
| `body.event` | `tipo_evento` |

Usa notación de punto para campos anidados y `[0]` para arrays:
- `body.data[0].email`
- `body.customer.address.city`

#### Guardar body completo como JSON

Activa esta opción para guardar todo el payload en una variable de tipo `objeto`. Útil para payloads dinámicos o para inspeccionar el contenido completo.

---

### Pestaña: Seguridad

#### Tipo de Autenticación

| Tipo | Descripción |
|------|-------------|
| **Bearer** | Token en el header `Authorization: Bearer <token>` |
| **Header personalizado** | Token en un header definido por el usuario |
| **Query param** | Token como parámetro en la URL (`?token=xxx`) |
| **HMAC** | Firma criptográfica en el payload (ver abajo) |
| **Público** | Sin autenticación — acepta cualquier llamada |

**Gestionar el token:**

- Haz clic en **Generar nuevo token** para crear un token seguro automáticamente
- O introduce tu propio valor en el campo de texto y haz clic en **Guardar token**
- El token se almacena **cifrado** en la base de datos
- Haz clic en el icono de ojo para revelar el token original (solo administradores)

#### Autenticación HMAC

Usa cuando el sistema externo envía una **firma criptográfica** del payload (ej.: Kiwify, Hotmart):

| Campo | Descripción |
|-------|-------------|
| **Algoritmo** | SHA-1, SHA-256 o SHA-512 |
| **Origen de la firma** | `query` (parámetro en la URL) o `header` |
| **Nombre del parámetro** | Nombre del query param o header que contiene la firma |
| **Secreto** | La clave secreta compartida con el servicio externo |

Ejemplo para Kiwify:
- Algoritmo: `SHA-1`
- Origen: `query`
- Parámetro: `signature`

#### Lista de IPs permitidos

Lista las IPs permitidas (una por línea). Las llamadas de otras IPs serán rechazadas con `403`. Deja vacío para aceptar cualquier IP.

#### Lista de Orígenes permitidos

Lista los dominios permitidos. Ej.: `https://app.kiwify.com.br`. Deja vacío para aceptar cualquier origen.

---

### Pestaña: Cliente & Chat

Configura la creación/actualización automática de clientes y chats basada en los datos del webhook.

#### Vinculación con Cliente

Activa el toggle y añade los campos del cliente:

1. Haz clic en **Añadir** para agregar una nueva fila de mapeo
2. Selecciona el **campo del cliente** (Nombre, Email, Documento, WhatsApp, etc.)
3. Introduce el **camino en el body** (ej.: `body.customer.email`)
4. Haz clic en el **icono de lupa** 🔍 en los campos que se usarán para **localizar** al cliente

**Lógica de búsqueda (OR):** el sistema busca cualquier cliente que coincida con *al menos uno* de los campos con la lupa activa. Activa la lupa en al menos un campo.

**Reglas de actualización al encontrar cliente existente:**

| Campo | Regla |
|-------|-------|
| **Nombre** | Siempre actualizado |
| **Email / Teléfono** | Actualiza la columna directa si está vacía; de lo contrario añade en `customer_contacts` |
| **Documento** | Actualizado solo si está vacío |
| **WhatsApp, Instagram, Telegram** | Siempre añadido en `customer_contacts` (sin sobrescribir) |

Si no se encuentra ningún cliente, se crea uno nuevo automáticamente con los datos mapeados.

#### Vinculación con Chat

Activa el toggle y configura:

| Campo | Descripción |
|-------|-------------|
| **Canal** | Canal por el que se creará el chat (WhatsApp, email, Instagram, etc.) |
| **Camino del contacto** | Dónde está el número/correo en el body (ej.: `body.customer.phone`) |
| **Tipo de contacto** | `whatsapp`, `phone`, `email`, `instagram`, etc. |

El chat se encontrará o creará automáticamente. El contacto también se registra en `customer_contacts` si no existe.

::: tip
Con la vinculación de Cliente + Chat configurada, el flujo se ejecuta en **modo completo** — puede enviar mensajes, esperar respuestas, etc. Sin vinculación (o vinculación incompleta), el flujo se ejecuta en **modo headless** (solo se ejecutan los nodos que no dependen de un chat).
:::

---

### Pestaña: Eventos

Configura el enrutamiento condicional basado en un campo del payload.

#### Camino del Evento

Indica dónde está el tipo de evento en el payload (ej.: `body.event`, `body.type`, `body.trigger`).

#### Casos

Añade un caso para cada tipo de evento esperado:

| Campo | Descripción |
|-------|-------------|
| **Etiqueta** | Nombre descriptivo (ej.: "Compra aprobada") |
| **Valor** | Valor exacto del evento (ej.: `purchase.approved`) — soporta `{{variable}}` |

Cada caso genera un **handle de salida naranja** en el nodo. Un **handle gris (else)** siempre se crea para eventos no mapeados.

**Ejemplo de enrutamiento:**

```
body.event = "purchase.approved"  →  handle "Compra aprobada"
body.event = "purchase.refunded"  →  handle "Reembolso"
body.event = (cualquier otro)     →  handle "else"
```

---

## Modo "Escuchar" — Pruebas en tiempo real

El modo **Escuchar** espera la llegada de un webhook real y muestra los datos para facilitar la configuración.

1. Haz clic en **Escuchar** en el panel del nodo
2. Envía un webhook de prueba desde el sistema externo
3. Los datos aparecen en tiempo real: body, headers, query params
4. La IP y el origen del llamante se muestran como sugerencia para la lista de permitidos
5. Haz clic en **Mapear** junto a cualquier campo para añadirlo automáticamente al mapeo de variables
6. Haz clic en el icono de **copiar** para copiar el camino del campo (ej.: `body.data[0].name`)

La pestaña **Registros** muestra el historial de las últimas llamadas recibidas y también permite mapear variables a partir de llamadas anteriores.

---

## Comportamiento en el flujo

### Con vinculación de Cliente + Chat configurada

El flujo se ejecuta en **modo completo**:
- Todos los nodos se ejecutan normalmente
- El cliente y el chat se vinculan a la sesión del flujo
- Es posible enviar mensajes, esperar respuestas, etc.

### Sin vinculación (o vinculación incompleta)

El flujo se ejecuta en **modo headless**:
- Los nodos que dependen de un chat (enviar texto, esperar input, etc.) se **omiten**
- Los nodos independientes (Variable, Actualizar Cliente, Solicitud HTTP, etc.) **se ejecutan normalmente**

### Enrutamiento por evento

Cuando la pestaña **Eventos** está configurada:

1. El backend extrae el valor del campo de evento del payload
2. Lo compara con los casos configurados (interpolando variables si es necesario)
3. Dirige al handle correspondiente
4. Si ningún caso coincide, usa el handle **else**

---

## Ejemplos de uso

### Integración con Kiwify (HMAC SHA-1)

```
Autenticación: HMAC
Algoritmo: SHA-1
Origen: query
Parámetro: signature
Camino del evento: body.event

Casos:
  "order_approved"  →  Iniciar onboarding
  "order_refunded"  →  Cancelar acceso
  else              →  Registrar evento desconocido
```

### Nuevo lead de formulario

```
Mapeos:
  body.name   → nombre
  body.email  → email
  body.phone  → telefono

Vinculación con Cliente:
  Email ← body.email  [🔍 búsqueda]
  Nombre ← body.name
  WhatsApp ← body.phone

Vinculación con Chat:
  Canal: WhatsApp Oficial
  Contacto: body.phone
  Tipo: whatsapp
```

---

## Consejos

- Usa **múltiples campos de búsqueda** (lupa) para evitar duplicar clientes cuando el sistema externo puede enviar email en un evento y WhatsApp en otro
- El modo **Escuchar** es la forma más rápida de mapear variables — no es necesario editar los caminos manualmente
- Combina con el nodo **Condición** después del Webhook Trigger para lógica más compleja que el enrutamiento simple por evento
- Para webhooks públicos (sin token), usa la **lista de IPs permitidos** para garantizar que solo el servidor externo pueda disparar el flujo

## Próximos Pasos

- [Constructor de Flujos](/es/guide/flows/builder)
- [Tipos de Nodos](/es/guide/flows/nodes/)
- [Variables](/es/guide/flows/variables)
- [Solicitud HTTP](/es/guide/flows/nodes/request)
