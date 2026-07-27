import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Medical Module (EMR)","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/medical.md","filePath":"en/features/medical.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/medical.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="medical-module-emr" tabindex="-1">Medical Module (EMR) <a class="header-anchor" href="#medical-module-emr" aria-label="Permalink to &quot;Medical Module (EMR)&quot;">​</a></h1><p>Electronic medical records linked to CRM: patients, consultations, prescriptions, and certificates.</p><h2 id="guide" tabindex="-1">Guide <a class="header-anchor" href="#guide" aria-label="Permalink to &quot;Guide&quot;">​</a></h2><ul><li><a href="/en/guide/medical/">Medical overview</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/medical.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const medical = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  medical as default
};
