# WhatsApp Business API

Integra la API oficial de WhatsApp Business de Meta para atención profesional.

## Visión General

WhatsApp Business API es la solución oficial de Meta para empresas que necesitan atención a escala. Es recomendado para operaciones con alto volumen de mensajes.

## Requisitos

Antes de comenzar, necesitas:

- [x] **Cuenta Meta Business verificada**
- [x] **Número de teléfono dedicado** (no puede estar en uso en WhatsApp común)
- [x] **Documento de la empresa** (Registro empresarial o equivalente)

## Ventajas

| Recurso | Descripción |
|---------|-----------|
| **Oficial** | Integración aprobada por Meta |
| **Estable** | Alta disponibilidad |
| **Templates** | Mensajes activos para clientes que no iniciaron conversación |
| **Pagos** | Integración con pagos vía WhatsApp |
| **Multiagente** | Múltiples agentes simultáneos |

## Configuración

### Paso 1: Crear Cuenta en Meta Business Suite

1. Accede a [business.facebook.com](https://business.facebook.com)
2. Crea una cuenta Meta Business
3. Completa la verificación del negocio

![Meta Business Suite](/images/guide/channels/whatsapp_business/meta_business_es.png)

### Paso 2: Configurar WhatsApp Business

1. En Meta Business Suite, ve a **Cuentas** → **Cuentas de WhatsApp**
2. Agrega una nueva cuenta de WhatsApp Business
3. Registra tu número de teléfono
4. Completa la verificación

### Paso 3: Conectar en Interflow

1. En el menú lateral izquierdo, haz clic en **Canales**
2. Haz clic en **"Agregar canal"**
3. Selecciona el tipo **WhatsApp Oficial**
4. Sigue el flujo de autenticación
5. Selecciona el número que deseas conectar

<!-- Placeholder para video -->
<div style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 8px; font-size: 18px;">Video: Configurando WhatsApp Business API (próximamente)</p>
</div>

## Templates de Mensaje

Para iniciar conversaciones con clientes que no te han enviado mensaje en las últimas 24h, necesitas usar templates aprobados.

### Accediendo a Templates

Los templates están disponibles dentro de la edición del canal. Para accederlos:

1. En el menú lateral izquierdo, haz clic en **Canales**
2. Haz clic en el canal WhatsApp que deseas editar
3. En el header de la página, haz clic en **Templates**

### Creando un Template

1. En la pestaña **Templates** del canal
2. Haz clic en **"Nuevo template"**
3. Completa los campos:
   - Nombre del template
   - Categoría (Marketing, Utilitario, Autenticación)
   - Idioma
   - Contenido del mensaje
4. Envía para aprobación

### Ejemplo de Template

```
Hola {{1}},

Tu pedido #{{2}} ha sido confirmado y será enviado pronto.

Síguelo en: {{3}}

¡Gracias por comprar con nosotros!
```

**Variables:**
- `{{1}}` = Nombre del cliente
- `{{2}}` = Número del pedido
- `{{3}}` = Link de seguimiento

### Estado de Aprobación

| Estado | Significado |
|--------|-------------|
| 🟡 **Pendiente** | En análisis por Meta |
| 🟢 **Aprobado** | Listo para usar |
| 🔴 **Rechazado** | Necesita ajustes |

::: tip CONSEJO
Los templates son aprobados más rápidamente cuando siguen las políticas de Meta. Evita lenguaje promocional excesivo.
:::

## Ventana de 24 Horas

WhatsApp Business API tiene una regla de ventana de atención:

- **Dentro de 24h**: Puedes enviar cualquier mensaje
- **Fuera de 24h**: Solo templates aprobados

```
Cliente envía mensaje → Ventana de 24h abierta → Conversación libre
                                          ↓
                              24h pasan sin respuesta
                                          ↓
                              Ventana cierra → Solo templates
```

## Costos

WhatsApp Business API tiene costos por conversación. Consulta la tabla de precios actualizada en [developers.facebook.com/docs/whatsapp/pricing](https://developers.facebook.com/docs/whatsapp/pricing).

## Solución de Problemas

### Número no conecta

1. Verifica si el número no está en otro WhatsApp
2. Confirma que la verificación del negocio está completa
3. Espera hasta 24h después de la solicitud

### Templates rechazados

Motivos comunes:
- Contenido promocional en exceso
- Falta de claridad en el propósito
- Uso de lenguaje prohibido

### Mensajes no se entregan

- Verifica si el número del destinatario es correcto
- Confirma que el cliente tiene WhatsApp activo
- Revisa si estás respetando la ventana de 24h
- Si el error es **130472** (*User's phone number is part of an experiment*) o **131049** (*This message was not delivered to maintain healthy ecosystem engagement*), consulta [Errores de WhatsApp Business](/es/guide/channels/whatsapp-business-errors)

## Errores

Para códigos y mensajes devueltos por Meta (incluidos **130472** y **131049**), consulta la página dedicada:

→ [Errores de WhatsApp Business](/es/guide/channels/whatsapp-business-errors)

## Próximos Pasos

- [Errores de WhatsApp Business](/es/guide/channels/whatsapp-business-errors)
- [Automatización con Flujos](/es/guide/flows/builder)
- [Métricas de Atención](/es/guide/reports/support)
