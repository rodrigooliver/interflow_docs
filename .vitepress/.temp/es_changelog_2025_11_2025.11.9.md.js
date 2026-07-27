import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.9","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.9.md","filePath":"es/changelog/2025/11/2025.11.9.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.9.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-9" tabindex="-1">v2025.11.9 <a class="header-anchor" href="#v2025-11-9" aria-label="Permalink to &quot;v2025.11.9&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>17 de Noviembre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="bloqueo-de-clientes-duplicados" tabindex="-1">Bloqueo de Clientes Duplicados <a class="header-anchor" href="#bloqueo-de-clientes-duplicados" aria-label="Permalink to &quot;Bloqueo de Clientes Duplicados&quot;">​</a></h3><p>El sistema ahora detecta automáticamente y bloquea la creación de clientes duplicados.</p><h4 id="¿como-funciona" tabindex="-1">¿Cómo funciona? <a class="header-anchor" href="#¿como-funciona" aria-label="Permalink to &quot;¿Cómo funciona?&quot;">​</a></h4><p>Al intentar crear un cliente con datos que ya existen:</p><ol><li>El sistema verifica registros existentes</li><li>Si encuentra duplicado, muestra alerta</li><li>Opción para ver el cliente existente</li><li>O combinar datos en el existente</li></ol><h4 id="criterios-de-deteccion" tabindex="-1">Criterios de detección: <a class="header-anchor" href="#criterios-de-deteccion" aria-label="Permalink to &quot;Criterios de detección:&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Campo</th><th>Detección</th></tr></thead><tbody><tr><td>Teléfono</td><td>✅ Exacto (ignora formato)</td></tr><tr><td>Email</td><td>✅ Exacto (ignora mayúsculas)</td></tr><tr><td>WhatsApp</td><td>✅ Exacto (normalizado)</td></tr></tbody></table><h4 id="¿que-sucede-si-se-encuentra-duplicado" tabindex="-1">¿Qué sucede si se encuentra duplicado? <a class="header-anchor" href="#¿que-sucede-si-se-encuentra-duplicado" aria-label="Permalink to &quot;¿Qué sucede si se encuentra duplicado?&quot;">​</a></h4><ul><li>🚫 Nueva creación es bloqueada</li><li>🔗 Link al registro existente mostrado</li><li>🔄 Opción para combinar datos</li><li>✏️ Opción para actualizar existente</li></ul><div class="warning custom-block"><p class="custom-block-title">Atención</p><p>La combinación automática puede ser desactivada en Configuraciones → Clientes → &quot;Permitir duplicados&quot;.</p></div><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Base de clientes limpia</li><li>✅ Sin historiales divididos</li><li>✅ Informes más precisos</li><li>✅ Mejor experiencia del cliente</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.9.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_9 as default
};
