# Autobuses

El módulo dibuja el vehículo, abre viajes y reserva el asiento en la atención. La reserva ocupa la plaza. No cobra y no emite pasaje.

El menú solo aparece si la organización tiene el módulo **Autobuses** activo en la lista de organizaciones.

## Dónde abrirlo

En **Citas**, **Autobuses** abre los viajes. **Autobuses** en la lista interna abre la flota.

## Dibujo

Cada piso tiene su propio formato: una o dos columnas de cada lado. Haga clic en el espacio para definir asiento, vacío, puerta, escalera, baño, bebedero o conductor. La salida de emergencia queda en el lateral de la fila.

**Reorganizar** vuelve a numerar de adelante hacia atrás. La reserva sigue el número. Cambiar un número solo vale si ese número todavía no existe.

Guardar el autobús actualiza los viajes de ese vehículo. El mismo número de asiento mantiene la reserva.

## Viaje

El viaje tiene salida y duración. El mismo autobús no entra en otro horario que cruce el viaje más dos horas de intervalo.

En la página del viaje, haga clic en una plaza libre para reservar. Puede elegir el cliente y una de sus conversaciones. Haga clic en una plaza ocupada para liberarla.

## Asistente de IA

En el prompt, la acción **Plazas del autobús** deja que el agente liste viajes, vea el mapa y reserve. Sin esa acción, la herramienta no entra en la conversación.

Publicado en [v2026.11.5](/es/changelog/2026/11/2026.11.5).
