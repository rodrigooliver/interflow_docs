# Cambiar Dirección del Cliente

Permite que la IA **guarde o actualice la dirección** del cliente en el registro cuando informe los datos en la conversación (calle, número, ciudad, estado, código postal, etc.) o envíe una **ubicación GPS**.

**Cuándo usar:**
- El cliente informa una dirección de entrega o facturación
- El cliente envía el pin de ubicación en WhatsApp
- Actualización de la dirección predeterminada ya registrada
- Recolección de dirección en flujos de pedido o visita

**Qué puede guardar la IA:**
- Calle y número (o línea completa de la dirección)
- Complemento, ciudad, estado y código postal
- País y etiqueta opcional de la dirección
- Latitud y longitud (GPS)
- Instrucciones de entrega/acceso (ej.: interfono, portón)
- Dirección marcada como predeterminada (actualiza la existente o crea una nueva)

**Ubicación GPS:**
- Acepta coordenadas separadas (`latitude` / `longitude`) o el formato del mensaje de ubicación (ej.: `-3.03, -59.98`)
- Si solo llega el GPS, el sistema intenta completar calle, ciudad y demás campos mediante geocodificación inversa (Google Maps con clave configurada, o Nominatim)

**Ejemplo de uso:**
```text
👤 Cliente: Mi dirección es Calle de las Flores, 120, apto 3, São Paulo - SP, CP 01310-100
🤖 IA: ¡Listo! Ya guardé esa dirección en tu registro. ¿Necesitas algo más?
```

```text
👤 Cliente: [envía ubicación en el mapa]
🤖 IA: Recibí tu ubicación y ya actualicé la dirección en el registro.
```

::: tip 💡 Contexto automático
Las direcciones ya registradas también entran en el **Customer info** del primer mensaje de contexto del agente, para que la IA no tenga que preguntar de nuevo.
:::

::: info ⚠️ Única
Esta acción puede agregarse solo una vez por agente.
:::

