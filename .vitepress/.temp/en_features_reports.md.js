import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Reports & Analytics","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/reports.md","filePath":"en/features/reports.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/reports.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="reports-analytics" tabindex="-1">Reports &amp; Analytics <a class="header-anchor" href="#reports-analytics" aria-label="Permalink to &quot;Reports &amp; Analytics&quot;">​</a></h1><p>Agent/team volume, exports, and operational dashboards.</p><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/reports/">Reports overview</a></li><li><a href="/en/guide/reports/volume-reports">Message volume</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/reports.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const reports = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  reports as default
};
