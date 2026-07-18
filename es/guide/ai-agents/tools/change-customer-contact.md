# Cambiar Contacto del Cliente

Permite que la IA **guarde o actualice teléfono, WhatsApp o e-mail** del cliente cuando informe el contacto en la conversación.

**Cuándo usar:**
- El cliente informa un teléfono o WhatsApp adicional
- Actualización del e-mail informado en el chat
- Recolección de contacto en flujos de registro o confirmación

**Configuración:**
1. Agregue la acción **Cambiar Contacto del Cliente**
2. Seleccione los tipos permitidos: teléfono, WhatsApp y/o e-mail
3. Guarde el prompt

::: tip 💡 E-mail
Cuando el tipo sea e-mail, el valor también actualiza el campo principal de e-mail del cliente.
:::

**Ejemplo de uso:**
```text
👤 Cliente: Mi WhatsApp es (11) 98888-7777
🤖 IA: ¡Perfecto! Ya guardé ese WhatsApp en tu registro.
```

::: info ⚠️ Única
Esta acción puede agregarse solo una vez por agente.
:::

