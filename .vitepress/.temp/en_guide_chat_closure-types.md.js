import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Closure Types","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/chat/closure-types.md","filePath":"en/guide/chat/closure-types.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/chat/closure-types.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="closure-types" tabindex="-1">Closure Types <a class="header-anchor" href="#closure-types" aria-label="Permalink to &quot;Closure Types&quot;">​</a></h1><p>Standardize why a chat was closed and optionally start an <code>attendance_closure</code> flow (e.g. CSAT).</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>Closure types</strong>.</p></div><ol><li>Create a type (name)</li><li>Optionally link an <code>attendance_closure</code> flow</li><li>Agents pick it when closing a chat</li></ol><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/chat/interface">Chat interface</a></li><li><a href="/en/guide/flows/builder">Flow builder</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/chat/closure-types.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const closureTypes = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  closureTypes as default
};
