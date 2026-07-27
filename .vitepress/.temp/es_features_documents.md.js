import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Plantillas de documentos","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/documents.md","filePath":"es/features/documents.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/features/documents.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="plantillas-de-documentos" tabindex="-1">Plantillas de documentos <a class="header-anchor" href="#plantillas-de-documentos" aria-label="Permalink to &quot;Plantillas de documentos&quot;">​</a></h1><p>Genere documentos desde plantillas con variables y condicionales.</p><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/documents/">Visión general</a></li><li><a href="/es/guide/documents/templates">Crear plantillas</a></li><li><a href="/es/guide/documents/variables">Variables y helpers</a></li><li><a href="/es/guide/documents/conditionals">Condicionales</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/documents.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const documents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  documents as default
};
