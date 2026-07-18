# Investigar información en sitios

Permite que la IA **lea contenido de páginas web** durante la atención y use el texto (en markdown) para responder con información actualizada — limitada a los sitios que usted libere.

**Cuándo usar:**
- Consultar catálogo, stock, precios o políticas en el sitio de la empresa
- Seguir docs, changelogs o páginas de producto sin pegar el texto en el prompt
- Sitios con JavaScript (motor Firecrawl) o HTML estático (motor HTML puro)

**Configuración:**
1. Agregue la acción **Investigar información sobre…**
2. Elija el motor:
   - **Firecrawl** — necesita la [integración](/es/guide/integrations/firecrawl) (API key de la organización); renderiza JS y permite búsqueda libre opcional
   - **HTML puro** — fetch estático, sin clave; mejor para páginas sin SPA
3. Registre los **sitios** (URL + descripción de lo que hay en cada uno)
4. Con Firecrawl: opcionalmente active la **búsqueda libre en la web**
5. Guarde el prompt

**Comportamiento:**
- La IA puede cambiar query params (ej.: `?search=Civic` → `?search=Corolla`)
- Puede abrir **subpáginas** bajo el mismo path del sitio configurado
- Si la página es solo un índice, el resultado puede traer `followUpLinks` para una segunda llamada

::: warning ⚠️ Motor HTML
Los sitios hechos solo con React/Next pueden devolver resultados vacíos o incompletos con HTML puro. Prefiera **Firecrawl**.
:::

::: tip 💡 Seguridad
Con la búsqueda libre **desactivada**, el servidor solo acepta URLs de los sitios configurados (y subpáginas del mismo path).
:::

**Ejemplo:**
```text
👤 Cliente: ¿Tienen Corolla 2022 en stock?
🤖 IA: [scrape del sitio con ?search=Corolla] Sí — encontré 3 unidades…
```

> Changelog: [v2026.7.13](/es/changelog/2026/07/2026.7.13) · Integración: [Firecrawl](/es/guide/integrations/firecrawl)

