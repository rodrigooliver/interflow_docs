# Integración con OpenAI

Para usar las funciones de IA de Interflow más allá de los tokens incluidos en tu plan, necesitas configurar tu clave de API de OpenAI. Sigue las instrucciones a continuación para obtener tu clave.

::: warning PAGO OBLIGATORIO
Es necesario agregar un método de pago válido a tu cuenta de OpenAI para usar la API, que funciona por consumo con una recarga mínima de **$5 USD**.
:::

## Cómo obtener una clave de API de OpenAI

### Opción 1: Cuenta nueva (sin organizaciones)

1. Accede al sitio web de OpenAI e inicia sesión en tu cuenta (o crea una nueva)
2. Haz clic en **"Start Building"** en la esquina superior derecha
3. Sigue el proceso guiado que:
   - Creará tu organización
   - Generará tu API Key
   - Solicitará método de pago automáticamente
4. Copia la clave generada y pégala en Interflow

### Opción 2: Cuenta existente (con organizaciones)

1. Accede al sitio web de OpenAI e inicia sesión en tu cuenta
2. Navega hasta **"API Keys"** en el menú lateral
3. Haz clic en **"Create new secret key"**
4. Dale un nombre para identificar la clave (ej: "Interflow")
5. Agrega un método de pago (si aún no lo tienes)
6. Copia la clave generada y pégala en Interflow

::: danger ATENCIÓN
Solo podrás ver la clave **una única vez** después de la creación. Guárdala en un lugar seguro antes de cerrar la ventana.
:::

## Configurar en Interflow

1. En Interflow, ve a **Configuración** → **Integraciones**
2. Localiza la sección **OpenAI**
3. Pega tu clave de API en el campo indicado
4. Haz clic en **Guardar**

<!-- Placeholder para screenshot -->
<div style="background: #f5f5f5; border: 2px dashed #ccc; border-radius: 12px; padding: 60px 20px; text-align: center; margin: 20px 0;">
  <span style="font-size: 48px;">📸</span>
  <p style="color: #666; margin-top: 8px;">Screenshot: Configuración de la clave OpenAI en Interflow</p>
</div>

## Enlaces útiles

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 20px 0;">

<a href="https://platform.openai.com" target="_blank" style="text-decoration: none;">
  <div style="background: #10a37f; color: white; border-radius: 8px; padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
    <span>🔗</span>
    <span>Visitar el sitio de OpenAI</span>
  </div>
</a>

<a href="https://platform.openai.com/account/billing" target="_blank" style="text-decoration: none;">
  <div style="background: #1a1a1a; color: white; border-radius: 8px; padding: 12px 20px; display: flex; align-items: center; gap: 8px;">
    <span>💳</span>
    <span>Agregar método de pago</span>
  </div>
</a>

</div>

## Precios y consumo

OpenAI cobra por **tokens consumidos**. El costo varía según el modelo utilizado.

::: info MODELOS DISPONIBLES
A continuación se muestran los **modelos principales**, pero puedes elegir cualquier otro modelo disponible en OpenAI. Consulta la [documentación oficial](https://platform.openai.com/docs/models) para ver todos los modelos.
:::

### Modelos con razonamiento

| Modelo | Entrada | Salida | Observación |
|--------|---------|--------|-------------|
| GPT-5.5 | $5.00 / 1M tokens | $30.00 / 1M tokens | Razonamiento premium |
| GPT-5.4 | $2.50 / 1M tokens | $15.00 / 1M tokens | Razonamiento más reciente |
| GPT-5.4 Mini | $0.75 / 1M tokens | $4.50 / 1M tokens | Razonamiento económico |
| GPT-5.4 Nano | $0.20 / 1M tokens | $1.25 / 1M tokens | Razonamiento súper económico |
| GPT-5.2 | $1.75 / 1M tokens | $14.00 / 1M tokens | Razonamiento avanzado |
| GPT-5.1 / GPT-5 | $1.25 / 1M tokens | $10.00 / 1M tokens | Razonamiento |
| GPT-5 Mini | $0.25 / 1M tokens | $2.00 / 1M tokens | Versión rápida y económica |
| GPT-5 Nano | $0.05 / 1M tokens | $0.40 / 1M tokens | Más económico de la familia |

### Modelos de conversación (Chat)

| Modelo | Entrada | Salida |
|--------|---------|--------|
| GPT-5.3 / 5.2 Chat Latest | $1.75 / 1M tokens | $14.00 / 1M tokens |
| GPT-5.1 / GPT-5 Chat Latest | $1.25 / 1M tokens | $10.00 / 1M tokens |

### Modelos sin razonamiento

| Modelo | Entrada | Salida | Observación |
|--------|---------|--------|-------------|
| GPT-4.1 | $2.00 / 1M tokens | $8.00 / 1M tokens | Modelo inteligente y versátil |
| GPT-4.1 Mini | $0.40 / 1M tokens | $1.60 / 1M tokens | Bajo costo con buen rendimiento |
| GPT-4.1 Nano | $0.10 / 1M tokens | $0.40 / 1M tokens | Más económico, ideal para tareas ligeras |

::: tip CONSEJO
Para la mayoría de los casos de atención, **GPT-5 Nano**, **GPT-5 Mini** o **GPT-5.4 Nano** ofrecen excelente relación costo-beneficio. Usa **GPT-4.1** cuando no necesites razonamiento avanzado. Lista completa en [Agentes IA](/es/guide/ai-agents/).
:::

## ¿Necesitas ayuda?

Si tienes dudas sobre la integración:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponible en la plataforma

