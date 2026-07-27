import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CRM & Customers","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/crm.md","filePath":"en/features/crm.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/crm.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="crm-customers" tabindex="-1">CRM &amp; Customers <a class="header-anchor" href="#crm-customers" aria-label="Permalink to &quot;CRM &amp; Customers&quot;">​</a></h1><p>Customer management, custom fields, and Kanban funnels with automation.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights&quot;">​</a></h2><ul><li>Full profile, history, and custom fields</li><li><a href="/en/guide/crm/funnels">Sales funnels</a> with <code>crm_stage_change</code> flows</li><li>Segmentation by tags and stages for campaigns</li></ul><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/crm/customers">Customer management</a></li><li><a href="/en/guide/crm/funnels">Sales funnels</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/crm.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const crm = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  crm as default
};
