import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integración Minimax","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/integrations/minimax.md","filePath":"es/guide/integrations/minimax.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/integrations/minimax.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integracion-minimax" tabindex="-1">Integración Minimax <a class="header-anchor" href="#integracion-minimax" aria-label="Permalink to &quot;Integración Minimax&quot;">​</a></h1><p>Proveedor TTS alternativo para nodos de audio en flujos.</p><ol><li>Obtenga credenciales Minimax</li><li><strong>Configuración → Integraciones → Minimax</strong> → guardar</li></ol><p>Vea el <a href="/es/guide/flows/nodes/minimax">nodo Minimax</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/integrations/minimax.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const minimax = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  minimax as default
};
