# Integración con DeepSeek

DeepSeek es un proveedor alternativo de IA que puedes conectar usando tu propia clave de API. A diferencia de OpenAI, usar DeepSeek **no consume los tokens incluidos en tu plan de Interflow** — la facturación la realiza directamente DeepSeek, en tu propia cuenta.

::: warning PAGO OBLIGATORIO
Es necesario agregar créditos/método de pago a tu cuenta de DeepSeek para usar la API, que funciona por consumo de tokens.
:::

## Cómo obtener una clave de API de DeepSeek

1. Accede a la [plataforma de DeepSeek](https://platform.deepseek.com/api_keys) e inicia sesión en tu cuenta (o crea una nueva)
2. Navega hasta **"API Keys"** en el menú del panel
3. Haz clic en **"Create new API key"**, dale un nombre para identificarla (ej: "Interflow") y agrega un método de pago
4. Copia la clave generada y pégala en Interflow

::: danger ATENCIÓN
Solo podrás ver la clave **una única vez** después de la creación. Guárdala en un lugar seguro antes de cerrar la ventana.
:::

## Configurar en Interflow

Puedes registrar tu clave de DeepSeek de dos formas:

### Opción 1: Desde la pantalla de Integraciones

1. En Interflow, ve a **Configuración** → **Integraciones**
2. Haz clic en **"Agregar DeepSeek"**
3. Dale un título a la integración y pega tu clave de API
4. Haz clic en **Validar** y luego en **Guardar**

### Opción 2: Directamente desde el formulario del Prompt

1. Al crear o editar un Agente de IA, abre el campo de **Integración**
2. Selecciona **"+ Agregar DeepSeek"**
3. Completa el título y la clave de API, valida y guarda
4. La integración creada queda automáticamente seleccionada para el prompt actual

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configuración de la clave DeepSeek en Interflow</p>
</div>

## Modelos disponibles

| Modelo | Entrada (cache miss) | Entrada (cache hit) | Salida | Observación |
|--------|-----------------------|-----------------------|--------|-------------|
| DeepSeek V4 Flash | $0.14 / 1M tokens | $0.0028 / 1M tokens | $0.28 / 1M tokens | Rápido y económico, ideal para la mayoría de los casos |
| DeepSeek V4 Pro | $0.435 / 1M tokens | $0.003625 / 1M tokens | $0.87 / 1M tokens | Más capaz, recomendado para tareas complejas |

::: info FUENTE DE LOS PRECIOS
Valores consultados en la [página oficial de precios de DeepSeek](https://api-docs.deepseek.com/quick_start/pricing). Pueden cambiar por parte de DeepSeek sin previo aviso.
:::

## Thinking Mode (razonamiento)

Ambos modelos soportan un modo opcional de razonamiento en cadena llamado **Thinking Mode**. Cuando un modelo DeepSeek está seleccionado en el prompt, el formulario muestra un control exclusivo:

- **Activar/desactivar** el Thinking Mode
- **Esfuerzo de razonamiento**: Alto o Máximo

::: tip CONSEJO
Con el Thinking Mode activado, la **temperatura es ignorada** — esta es una limitación de la propia API de DeepSeek, que no permite combinar razonamiento en cadena con control de temperatura.
:::

## Dónde se puede usar el modelo DeepSeek

Una vez configurada la integración y seleccionado un modelo DeepSeek en tu prompt, se usa automáticamente en:

- El **Agente de IA** de tus flujos
- **Probar Prompt** (dentro de la pantalla de edición del prompt)
- **Mejorar Texto** (cuando el prompt asociado usa DeepSeek)

## ¿Necesitas ayuda?

Si tienes dudas sobre la integración:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponible en la plataforma
