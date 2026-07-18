# Cambiar Embudo

Mueve al cliente entre etapas del embudo de ventas/atención.

**Configuración:**

| Campo | Descripción |
|-------|-------------|
| **Etapas de origen** | De qué etapas el cliente puede salir |
| **Etapas de destino** | A qué etapas puede ser movido |

**Cuándo usar:**
- Cliente demuestra interés (mover a "Calificado")
- Cliente cierra negocio (mover a "Vendido")
- Cliente pide no ser contactado (mover a "No interesado")

**Ejemplo de uso:**
```text
👤 Cliente: Quiero cerrar el plan Pro
🤖 IA: ¡Excelente elección! Voy a registrar tu decisión y un consultor 
       se pondrá en contacto para finalizar.

[Sistema: Cliente movido a etapa "Cierre"]
```

