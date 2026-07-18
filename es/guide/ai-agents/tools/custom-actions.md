# Acciones Personalizadas

Cree herramientas personalizadas para necesidades específicas de su negocio.

### Estructura de una Herramienta

Cada herramienta personalizada tiene:

| Campo | Descripción |
|-------|-------------|
| **Descripción** | Qué hace la herramienta (usado por la IA para decidir cuándo usarla) |
| **Nombre** | Identificador técnico (generado automáticamente) |
| **Parámetros** | Datos que la IA debe recopilar |
| **Acciones** | Qué ejecutar cuando la herramienta es activada |

### Creando una Herramienta

1. En la pestaña **Herramientas**, haga clic en **"Acción Personalizada"**
2. Complete la descripción (ej: "Consulta el estado de un pedido")
3. El nombre será generado automáticamente (ej: `consulta_el_estado_de_un_pedido`)
4. Agregue los parámetros necesarios

### Configurando Parámetros

Cada parámetro tiene:

| Campo | Descripción |
|-------|-------------|
| **Nombre** | Identificador del parámetro |
| **Tipo** | string, number, boolean, etc. |
| **Descripción** | Explica qué representa el parámetro |
| **Obligatorio** | Si la IA siempre debe recopilar ese dato |
| **Valores permitidos** | Lista de opciones válidas (opcional) |

**Ejemplo de parámetros:**
```json
{
  "numero_pedido": {
    "type": "string",
    "description": "Número del pedido del cliente",
    "required": true
  },
  "tipo_consulta": {
    "type": "string",
    "enum": ["estado", "rastreo", "factura"],
    "description": "Tipo de información deseada"
  }
}
```

### Configurando Acciones

En la pestaña **Acciones** de la herramienta, defina qué sucede cuando es ejecutada:

- **Ir a nodo del flujo**: Dirige a un nodo específico
- **Solicitud HTTP**: Llama a una API externa
- **Actualizar variable**: Modifica una variable del flujo

### Visualizando JSON

Haga clic en el botón **JSON** para ver la herramienta en formato OpenAI:

```json
{
  "name": "consulta_estado_pedido",
  "description": "Consulta el estado de un pedido del cliente",
  "strict": true,
  "parameters": {
    "type": "object",
    "properties": {
      "numero_pedido": {
        "type": "string",
        "description": "Número del pedido"
      }
    },
    "required": ["numero_pedido"],
    "additionalProperties": false
  }
}
```

## Buenas Prácticas

### ✅ Haga

- Use descripciones claras y específicas
- Defina parámetros con tipos correctos
- Pruebe cada herramienta antes de publicar
- Limite los valores permitidos cuando sea posible
- Configure acciones de respaldo

### ❌ Evite

- Descripciones vagas que confunden a la IA
- Muchas herramientas similares
- Parámetros innecesarios
- Herramientas sin acciones definidas

## Ejemplos Prácticos

### Consulta de Saldo

```json
{
  "name": "consulta_saldo",
  "description": "Consulta el saldo disponible en la cuenta del cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "tipo_saldo": {
        "type": "string",
        "enum": ["disponible", "bloqueado", "total"],
        "description": "Tipo de saldo a consultar"
      }
    },
    "required": []
  }
}
```

### Segunda Vía de Factura

```json
{
  "name": "segunda_via_factura",
  "description": "Genera segunda vía de factura para pago",
  "parameters": {
    "type": "object",
    "properties": {
      "mes_referencia": {
        "type": "string",
        "description": "Mes de referencia de la factura (ej: 01/2025)"
      },
      "enviar_por": {
        "type": "string",
        "enum": ["whatsapp", "email"],
        "description": "Cómo enviar la factura"
      }
    },
    "required": ["mes_referencia"]
  }
}
```

### Actualización de Dirección

```json
{
  "name": "actualizar_direccion",
  "description": "Actualiza la dirección de entrega del cliente",
  "parameters": {
    "type": "object",
    "properties": {
      "codigo_postal": {
        "type": "string",
        "description": "Código postal de la nueva dirección"
      },
      "numero": {
        "type": "string",
        "description": "Número de la residencia"
      },
      "complemento": {
        "type": "string",
        "description": "Complemento (apto, bloque, etc.)"
      }
    },
    "required": ["codigo_postal", "numero"]
  }
}
```
