import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Modelos de Documentos","description":"","frontmatter":{},"headers":[],"relativePath":"features/documents.md","filePath":"features/documents.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/documents.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modelos-de-documentos" tabindex="-1">Modelos de Documentos <a class="header-anchor" href="#modelos-de-documentos" aria-label="Permalink to &quot;Modelos de Documentos&quot;">​</a></h1><p>Gere documentos a partir de templates com variáveis e condicionais.</p><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/documents/">Visão geral</a></li><li><a href="/guide/documents/templates">Criar modelos</a></li><li><a href="/guide/documents/variables">Variáveis e helpers</a></li><li><a href="/guide/documents/conditionals">Condicionais</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/documents.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const documents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  documents as default
};
