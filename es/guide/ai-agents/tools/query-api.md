# Consultar API

Permite que la IA **consulte y ejecute operaciones en una API externa** durante la atención (base URL, autenticación cifrada y lista de rutas permitidas). Cada ruta se convierte en una tool cuyo **nombre es el id en slug** (ej.: `get_order`).

**Cuándo usar:**
- Consultar estado de pedido, cobro, stock o cliente en sistemas externos
- Crear/actualizar registros vía API REST
- Exponer solo endpoints seguros (allowlist), sin búsqueda abierta en la web

**Configuración:**
1. Agregue la acción **Consultar API**
2. Indique la **Base URL** y el tipo de autenticación (Bearer, header o query)
3. Guarde la clave (queda **cifrada**, mismo patrón que Integrations)
4. Agregue rutas: `id` (slug), descripción, method, path y parámetros — o use **Generar con IA**
5. Opcional: **pruebe cada ruta** en el servidor antes de publicar

#### Generar rutas con IA

Al agregar una acción nueva (aún sin rutas), el asistente **se abre automáticamente**. Puede:

- Describir en lenguaje natural lo que el agente debe hacer
- Indicar la **URL de la documentación** (opcional)
- Pegar **fragmentos de la documentación** o ejemplos de llamadas (`curl`)

La IA arma **solo las rutas necesarias**, además del nombre, descripción y slug de la acción. Revise, ajuste y pruebe antes de poner en producción.

```text
Ejemplo de descripción + curl:

Quiero integrar la API de Mercado Pago en la atención.
El agente necesita buscar un cliente por documento y listar cobros.

curl -X GET "https://api.mercadopago.com/v1/customers/search?email=user@email.com" \
  -H "Authorization: Bearer $MP_ACCESS_TOKEN"
```

::: tip 💡 Asistente con web search
**Generar con IA** usa búsqueda en la web **solo en la configuración**. En la atención, el agente solo llama las rutas que usted permitió.
:::

#### Probar rutas

En cada ruta, use **Probar ruta**, complete parámetros de ejemplo y ejecute. La prueba corre en el **servidor** (la clave no va al navegador). El estado de la última prueba aparece como OK, Error o Sin probar.

::: warning ⚠️ POST / PUT
Las pruebas de creación o actualización pueden **generar datos reales** en el sistema externo. No es necesario probar todas las rutas.
:::

::: info ⚠️ Claves
La clave nunca entra en el schema de la tool ni en la respuesta al modelo. En la UI aparece enmascarada (`••••`).
:::

**Ejemplo:**
```text
👤 Cliente: ¿Cuál es el estado del pedido 12345?
🤖 IA: [llama get_order] Tu pedido 12345 está en tránsito.
```

> Changelog: [v2026.7.10](/es/changelog/2026/07/2026.7.10)

