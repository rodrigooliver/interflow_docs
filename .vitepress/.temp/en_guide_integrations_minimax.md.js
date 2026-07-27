import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Minimax Integration","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/integrations/minimax.md","filePath":"en/guide/integrations/minimax.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/integrations/minimax.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="minimax-integration" tabindex="-1">Minimax Integration <a class="header-anchor" href="#minimax-integration" aria-label="Permalink to &quot;Minimax Integration&quot;">​</a></h1><p>Alternative TTS provider for flow audio nodes.</p><ol><li>Get Minimax credentials</li><li><strong>Settings → Integrations → Minimax</strong> → save</li></ol><p>See the <a href="/en/guide/flows/nodes/minimax">Minimax node</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/integrations/minimax.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const minimax = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  minimax as default
};
