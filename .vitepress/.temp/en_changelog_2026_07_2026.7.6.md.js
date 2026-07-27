import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.6","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/07/2026.7.6.md","filePath":"en/changelog/2026/07/2026.7.6.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/07/2026.7.6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-6" tabindex="-1">v2026.7.6 <a class="header-anchor" href="#v2026-7-6" aria-label="Permalink to &quot;v2026.7.6&quot;">​</a></h1><p>Release date: <strong>July 10, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="hide-closed-customers-in-the-sales-funnel" tabindex="-1">Hide closed customers in the Sales Funnel <a class="header-anchor" href="#hide-closed-customers-in-the-sales-funnel" aria-label="Permalink to &quot;Hide closed customers in the Sales Funnel&quot;">​</a></h3><p>In <strong>CRM → Sales Funnel</strong>, you can now hide customers whose last conversation is <strong>Closed</strong> (or marked as resolved). The team sees only who still needs attention — without deleting history or data from the system.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Focus on customers who are <strong>pending</strong> or <strong>in progress</strong></li><li>Reduce noise on the board when many cards are already closed</li><li>Keep full history available for lookups and reports</li></ul><h4 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h4><ol><li>Open the <strong>Sales Funnel</strong> in CRM</li><li>At the top of the funnel, enable <strong>Hide closed</strong></li><li>Columns will list only customers without a closed last conversation</li><li>Turn the option off anytime to see everyone again</li></ol><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>This option works together with <strong>Only mine</strong>. Customers with no conversation remain visible in the funnel.</p></div><blockquote><p>Full guide: <a href="/en/guide/crm/customers#sales-funnel">Customer Management — Sales Funnel</a></p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Cleaner day-to-day funnel view</li><li>✅ Prioritize open conversations</li><li>✅ History and data preserved — only the view changes</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/07/2026.7.6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_6 as default
};
