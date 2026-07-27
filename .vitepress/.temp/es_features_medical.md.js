import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Módulo médico (EMR)","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/medical.md","filePath":"es/features/medical.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/medical.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modulo-medico-emr" tabindex="-1">Módulo médico (EMR) <a class="header-anchor" href="#modulo-medico-emr" aria-label="Permalink to &quot;Módulo médico (EMR)&quot;">​</a></h1><p>Historia clínica ligada al CRM: pacientes, consultas, recetas y certificados.</p><h2 id="guia" tabindex="-1">Guía <a class="header-anchor" href="#guia" aria-label="Permalink to &quot;Guía&quot;">​</a></h2><ul><li><a href="/es/guide/medical/">Médico</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/medical.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const medical = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  medical as default
};
