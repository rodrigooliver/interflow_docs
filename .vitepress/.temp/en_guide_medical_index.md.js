import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Medical Module (EMR)","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/medical/index.md","filePath":"en/guide/medical/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/medical/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="medical-module-emr" tabindex="-1">Medical Module (EMR) <a class="header-anchor" href="#medical-module-emr" aria-label="Permalink to &quot;Medical Module (EMR)&quot;">​</a></h1><p>Electronic medical records linked to CRM: patients, consultations, prescriptions, certificates, and clinical templates.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>Medical</strong>. Requires module <code>medical</code>.</p></div><div class="info custom-block"><p class="custom-block-title">Patient = Customer</p><p>Each patient is a CRM <strong>customer</strong>. Clinical history lives on the patient file.</p></div><h2 id="areas" tabindex="-1">Areas <a class="header-anchor" href="#areas" aria-label="Permalink to &quot;Areas&quot;">​</a></h2><p>Consultations · Records · Prescriptions · Certificates · Templates · Patients ( with tabs)</p><h2 id="typical-flow" tabindex="-1">Typical flow <a class="header-anchor" href="#typical-flow" aria-label="Permalink to &quot;Typical flow&quot;">​</a></h2><ol><li>Find/create the patient</li><li>Create a <strong>consultation</strong></li><li>Write the <strong>record</strong></li><li>Issue <strong>prescription</strong> / <strong>certificate</strong> from templates</li><li>Attach files as needed</li></ol><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/crm/customers">Customers</a></li><li><a href="/en/guide/schedule/">Schedule</a></li><li><a href="/en/guide/documents/">Documents</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/medical/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
