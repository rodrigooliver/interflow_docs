import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Enero 2026","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2026/01/index.md","filePath":"es/changelog/2026/01/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2026/01/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="enero-2026" tabindex="-1">Enero 2026 <a class="header-anchor" href="#enero-2026" aria-label="Permalink to &quot;Enero 2026&quot;">​</a></h1><p>Actualizaciones del mes de enero de 2026.</p><h2 id="versiones" tabindex="-1">Versiones <a class="header-anchor" href="#versiones" aria-label="Permalink to &quot;Versiones&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Versión</th><th>Fecha</th><th>Destacados</th></tr></thead><tbody><tr><td><a href="/es/changelog/2026/01/2026.1.2">2026.1.2</a></td><td>21/01</td><td><strong>Control de acceso granular al CRM</strong>, Consulta de clientes por permiso</td></tr><tr><td><a href="/es/changelog/2026/01/2026.1.1">2026.1.1</a></td><td>20/01</td><td><strong>Plantillas WhatsApp Oficial en envío masivo</strong>, Flujos activados en cualquier mensaje</td></tr></tbody></table><hr><h2 id="resumen-del-mes" tabindex="-1">Resumen del Mes <a class="header-anchor" href="#resumen-del-mes" aria-label="Permalink to &quot;Resumen del Mes&quot;">​</a></h2><h3 id="nuevas-funcionalidades-4" tabindex="-1">Nuevas Funcionalidades (4) <a class="header-anchor" href="#nuevas-funcionalidades-4" aria-label="Permalink to &quot;Nuevas Funcionalidades (4)&quot;">​</a></h3><ul><li><strong>Control de acceso granular al CRM</strong> - Sistema completo de permisos para que agentes visualicen solo sus clientes en el CRM</li><li><strong>Consulta de clientes por permiso de usuario</strong> - Agentes con <code>agent_limited</code> visualizan solo sus clientes en todos los módulos</li><li><strong>Plantillas de WhatsApp Oficial en envío masivo</strong> - Envíe plantillas pre-aprobadas a múltiples contactos</li><li><strong>Flujos activados en cualquier mensaje</strong> - Cree automatizaciones inteligentes basadas en palabras clave durante toda la conversación</li></ul><hr><div class="info custom-block"><p class="custom-block-title">Total</p><p><strong>2 lanzamientos</strong> con <strong>4 funcionalidades</strong> este mes!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2026/01/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
