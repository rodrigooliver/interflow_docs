# Integración Firecrawl

Use Firecrawl para extraer contenido de páginas web (incluidos sitios con JavaScript) y alimentar el **Agente de IA** con texto en markdown.

> Changelog: [v2026.7.13](/es/changelog/2026/07/2026.7.13)

## Qué es

Firecrawl es un servicio externo que hace scrape de páginas y devuelve el contenido limpio. En Interflow, la **API key pertenece a la organización** (Configuración → Integraciones) y la usa la herramienta **Investigar información en sitios** del Agente de IA.

## Configurar la clave

1. Cree una cuenta y una API key en [Firecrawl](https://www.firecrawl.dev/)
2. En Interflow: **Configuración → Integraciones**
3. Busque **Firecrawl**
4. Pegue la clave, valide y guarde

La clave se almacena **cifrada** y aparece enmascarada en la interfaz.

## Usar en el Agente de IA

1. Abra el **Agente de IA** (Prompt) → **Acciones / Herramientas**
2. Agregue **Investigar información sobre…**
3. Elija el motor **Firecrawl** y seleccione la integración guardada
4. Registre los sitios permitidos (URL + descripción)
5. Opcional: active la **búsqueda libre en la web**
6. Guarde y publique el prompt

> Paso a paso de la herramienta: [Herramientas de IA — Investigar información en sitios](/es/guide/ai-agents/tools/research-websites)

## Firecrawl vs HTML puro

| Motor | ¿Necesita clave? | Indicado para |
|-------|------------------|---------------|
| **Firecrawl** | Sí | Sitios con JavaScript / SPAs, búsqueda libre en la web |
| **HTML puro** | No | Páginas HTML estáticas, sin costo de API |

## Relacionados

- [Herramientas de IA](/es/guide/ai-agents/tools/)
- [Agentes IA](/es/guide/ai-agents/)
