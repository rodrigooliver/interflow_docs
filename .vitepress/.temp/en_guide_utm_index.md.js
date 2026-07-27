import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"UTM / Campaign Tracking","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/utm/index.md","filePath":"en/guide/utm/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/utm/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="utm-campaign-tracking" tabindex="-1">UTM / Campaign Tracking <a class="header-anchor" href="#utm-campaign-tracking" aria-label="Permalink to &quot;UTM / Campaign Tracking&quot;">​</a></h1><p>Track campaigns, leads, WhatsApp links, forms, and ad pixels.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>UTM</strong>. Requires module <code>utm</code>.</p></div><h2 id="areas" tabindex="-1">Areas <a class="header-anchor" href="#areas" aria-label="Permalink to &quot;Areas&quot;">​</a></h2><p>Dashboard · Campaigns · Details · Leads · Analytics · WhatsApp links · Forms · Pixels (Facebook, Google Ads, GA)</p><h2 id="create-a-campaign" tabindex="-1">Create a campaign <a class="header-anchor" href="#create-a-campaign" aria-label="Permalink to &quot;Create a campaign&quot;">​</a></h2><ol><li><strong>UTM → Campaigns → New</strong></li><li>Set name and UTM params (source, medium, campaign…)</li><li>Configure WhatsApp links, forms, and pixels under the campaign tabs</li><li>Review leads and convert them into CRM customers when ready</li></ol><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/crm/funnels">CRM funnels</a></li><li><a href="/en/guide/crm/customers">Customers</a></li><li><a href="/en/guide/chat/bulk-messages">Bulk messages</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/utm/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
