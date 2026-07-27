import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.3","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/12/2025.12.3.md","filePath":"es/changelog/2025/12/2025.12.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/12/2025.12.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-3" tabindex="-1">v2025.12.3 <a class="header-anchor" href="#v2025-12-3" aria-label="Permalink to &quot;v2025.12.3&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>08 de Diciembre de 2025</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="archivo-automatico-para-conversaciones-en-atencion" tabindex="-1">Archivo Automático para Conversaciones en Atención <a class="header-anchor" href="#archivo-automatico-para-conversaciones-en-atencion" aria-label="Permalink to &quot;Archivo Automático para Conversaciones en Atención&quot;">​</a></h3><p>Ahora es posible archivar conversaciones que están en estado &quot;en atención&quot;, permitiendo mejor organización de la lista de chats activos.</p><h4 id="¿como-funciona" tabindex="-1">¿Cómo funciona? <a class="header-anchor" href="#¿como-funciona" aria-label="Permalink to &quot;¿Cómo funciona?&quot;">​</a></h4><ul><li>Archiva conversaciones activas para organizar tu lista</li><li>Cuando el cliente envía un nuevo mensaje, la conversación se <strong>desarchiva automáticamente</strong></li><li>Ningún mensaje importante se pierde</li></ul><hr><h3 id="ia-lista-solo-citas-futuras" tabindex="-1">IA Lista Solo Citas Futuras <a class="header-anchor" href="#ia-lista-solo-citas-futuras" aria-label="Permalink to &quot;IA Lista Solo Citas Futuras&quot;">​</a></h3><p>La IA ahora muestra solo citas que aún van a ocurrir, ignorando horarios pasados.</p><h4 id="¿que-cambia" tabindex="-1">¿Qué cambia? <a class="header-anchor" href="#¿que-cambia" aria-label="Permalink to &quot;¿Qué cambia?&quot;">​</a></h4><ul><li>Al pedir una lista de citas, solo se muestran compromisos futuros</li><li>Información desactualizada ya no aparece</li><li>Mayor agilidad para encontrar próximas citas</li></ul><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Atención más organizada</li><li>✅ Información siempre relevante</li><li>✅ Mayor eficiencia en el día a día</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/12/2025.12.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_3 as default
};
