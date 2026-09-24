# Mejorador de Texto

Mejora tus mensajes con inteligencia artificial directamente en el campo de texto.

## Visión General

El Mejorador de Texto es una herramienta de IA integrada al chat que ayuda a los agentes a escribir mensajes mejores, más claros y profesionales. Accede rápidamente con `Ctrl+J` para transformar tus mensajes.

## Cómo Acceder

### Atajo de Teclado

1. En el campo de texto del chat, presiona `Ctrl+J`
2. El panel del mejorador se abrirá
3. Selecciona la acción deseada
4. La IA procesa e inserta el resultado

### Vía Menú

1. En el campo de texto, haz clic en el ícono de IA ()
2. Selecciona la opción de mejora
3. Espera el procesamiento

## Acciones Disponibles

### Mejoras de Texto

| Acción | Descripción | Ejemplo |
|--------|-------------|---------|
| **Mejorar** | Mejora claridad y gramática | "me puedes ayudar?" → "¿Podrías ayudarme?" |
| **Formalizar** | Hace el texto más formal | "hola, q tal?" → "Hola, ¿cómo está?" |
| **Simplificar** | Simplifica texto complejo | Términos técnicos → Lenguaje simple |
| **Expandir** | Expande el mensaje con más detalles | Agrega contexto y explicaciones |
| **Resumir** | Resume textos largos | Crea versión concisa |

### Transformaciones

| Acción | Descripción |
|--------|-------------|
| **Corregir ortografía** | Corrige errores de digitación y gramática |
| **Traducir** | Traduce a otro idioma |
| **Tono amigable** | Ajusta a tono más acogedor |
| **Tono profesional** | Ajusta a tono más corporativo |

### Acciones Contextuales

| Acción | Descripción |
|--------|-------------|
| **Responder cliente** | Genera respuesta basada en el último mensaje |
| **Explicar producto** | Genera explicación sobre producto mencionado |
| **Agradecer** | Crea mensaje de agradecimiento |
| **Despedir** | Crea mensaje de cierre |

## Comandos Personalizados

Crea tus propios comandos de IA para acciones frecuentes.

### Creando un Comando

1. Accede a **Configuraciones** → **Mejorador de Texto**
2. Haz clic en **"Nuevo Comando"**
3. Configura:
   - **Nombre**: Identificación del comando (ej: "Respuesta estándar")
   - **Gatillo**: Atajo que activa (ej: `/precio`, `/soporte`)
   - **Prompt**: Instrucción para la IA
   - **Posición**: Dónde insertar resultado (antes/después del cursor)
4. Haz clic en **"Guardar"**

### Ejemplos de Comandos

```
Nombre: Respuesta de precio
Gatillo: /precio
Prompt: Genera una respuesta educada explicando que
        enviaré la lista de precios en seguida.
```

```
Nombre: Cierre positivo
Gatillo: /chao
Prompt: Crea un mensaje de despedida amigable
        agradeciendo el contacto.
```

```
Nombre: Pedir datos
Gatillo: /datos
Prompt: Solicita educadamente nombre completo, email
        y teléfono del cliente.
```

### Usando Comandos

1. En el campo de texto, escribe `/` seguido del gatillo
2. O presiona `Ctrl+J` y selecciona de la lista
3. El comando se ejecuta y el texto se inserta

### Variables en los Comandos

Usa variables para personalizar:

| Variable | Descripción |
|----------|-------------|
| `{{customer_name}}` | Nombre del cliente |
| `{{last_message}}` | Último mensaje del cliente |
| `{{channel}}` | Canal actual |
| `{{agent_name}}` | Tu nombre |

**Ejemplo:**
```
Prompt: Agradece a {{customer_name}} por el contacto e
        informa que estoy a disposición.
```

## Configuraciones

### Activar/Desactivar

1. Accede a **Configuraciones** → **Mejorador de Texto**
2. Toggle para activar o desactivar
3. Cuando desactivado, `Ctrl+J` no funciona

### Modelo de IA

Elige qué modelo usar para las mejoras:

| Modelo | Velocidad | Calidad |
|--------|-----------|---------|
| GPT-3.5 | Rápido | Buena |
| GPT-4 | Más lento | Excelente |

### Idioma Predeterminado

Configura el idioma predeterminado para las mejoras y traducciones.

## Consejos de Uso

### Buenas Prácticas

- Usa **Formalizar** para mensajes iniciales
- Usa **Simplificar** para explicaciones técnicas
- Crea comandos para respuestas frecuentes
- Revisa siempre antes de enviar

### Atajos Rápidos

| Atajo | Acción |
|-------|--------|
| `Ctrl+J` | Abrir mejorador |
| `/` | Listar comandos |
| `Esc` | Cerrar panel |
| `Enter` | Ejecutar seleccionado |

## Ejemplos Prácticos

### Antes y Después

**Mensaje original:**
```
hola me puedes enviar la factura q no la recibi
```

**Después de "Formalizar":**
```
¡Hola! ¿Podrías enviarme la factura, por favor?
Aún no la he recibido.
```

---

**Mensaje original:**
```
El sistema utiliza protocolo HTTPS con criptografía AES-256
y autenticación vía OAuth 2.0 con tokens JWT.
```

**Después de "Simplificar":**
```
El sistema usa una conexión segura y protegida.
Tus datos quedan encriptados y seguros.
```

## Límites

- **Tokens**: Cada mejora consume tokens de IA
- **Tamaño**: Máximo de 2000 caracteres por vez
- **Frecuencia**: Espera el procesamiento antes de nueva solicitud

## Próximos Pasos

- [Interfaz de Chat](/es/guide/chat/interface) - Volver a la interfaz
- [Agentes IA](/es/guide/ai-agents/) - IA autónoma para atención
- [Configuraciones](/es/guide/settings/) - Más configuraciones

