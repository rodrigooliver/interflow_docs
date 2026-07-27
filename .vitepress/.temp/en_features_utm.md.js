import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UTM / Tracking","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/utm.md","filePath":"en/features/utm.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/utm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utm-tracking" tabindex="-1">UTM / Tracking <a class="header-anchor" href="#utm-tracking" aria-label="Permalink to &quot;UTM / Tracking&quot;">​</a></h1><p>Campaigns, leads, WhatsApp links, forms, and ad pixels.</p><h2 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h2><ul><li><a href="/en/guide/utm/">UTM overview</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/utm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const utm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  utm as default
};
