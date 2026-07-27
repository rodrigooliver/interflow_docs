import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.11","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.11.md","filePath":"es/changelog/2025/11/2025.11.11.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.11.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-11" tabindex="-1">v2025.11.11 <a class="header-anchor" href="#v2025-11-11" aria-label="Permalink to &quot;v2025.11.11&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>19 de Noviembre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="sugerencia-automatica-de-campos-al-finalizar-atencion" tabindex="-1">Sugerencia Automática de Campos al Finalizar Atención <a class="header-anchor" href="#sugerencia-automatica-de-campos-al-finalizar-atencion" aria-label="Permalink to &quot;Sugerencia Automática de Campos al Finalizar Atención&quot;">​</a></h3><p>Al finalizar la atención, el sistema sugiere campos no rellenados que deberían ser completados.</p><h4 id="¿como-funciona" tabindex="-1">¿Cómo funciona? <a class="header-anchor" href="#¿como-funciona" aria-label="Permalink to &quot;¿Cómo funciona?&quot;">​</a></h4><ol><li>Agente hace clic en <strong>&quot;Finalizar Atención&quot;</strong></li><li>Sistema identifica campos no rellenados</li><li>Modal aparece con lista de campos</li><li>Agente puede rellenar rápidamente</li><li>Completa el cierre y los datos son guardados</li></ol><h4 id="tipos-de-campos-sugeridos" tabindex="-1">Tipos de campos sugeridos: <a class="header-anchor" href="#tipos-de-campos-sugeridos" aria-label="Permalink to &quot;Tipos de campos sugeridos:&quot;">​</a></h4><ul><li>📝 Campos de texto (nombre, observaciones)</li><li>📋 Campos select (estado, origen)</li><li>🏷️ Tags</li><li>📊 Embudo (etapa actual)</li></ul><h4 id="configuracion" tabindex="-1">Configuración: <a class="header-anchor" href="#configuracion" aria-label="Permalink to &quot;Configuración:&quot;">​</a></h4><ol><li>Accede a <strong>Configuraciones</strong> → <strong>Atención</strong></li><li>Localiza <strong>&quot;Sugerencia de Campos al Finalizar&quot;</strong></li><li>Selecciona qué campos deben ser sugeridos</li><li>Define cuáles son obligatorios</li><li>Guarda</li></ol><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Registros más completos</li><li>✅ Sin datos olvidados</li><li>✅ Mejores informes</li><li>✅ Métricas más precisas</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.11.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_11 as default
};
