import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.7","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/07/2026.7.7.md","filePath":"en/changelog/2026/07/2026.7.7.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/07/2026.7.7.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-7" tabindex="-1">v2026.7.7 <a class="header-anchor" href="#v2026-7-7" aria-label="Permalink to &quot;v2026.7.7&quot;">​</a></h1><p>Release date: <strong>July 10, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="customer-search-in-the-sales-funnel" tabindex="-1">Customer search in the Sales Funnel <a class="header-anchor" href="#customer-search-in-the-sales-funnel" aria-label="Permalink to &quot;Customer search in the Sales Funnel&quot;">​</a></h3><p>In <strong>CRM → Sales Funnel</strong>, you can now <strong>search customers by name</strong> at the top of the funnel. Results show which <strong>stage</strong> and <strong>position</strong> the customer is in — and clicking a result opens the customer edit modal.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Quickly find a contact in funnels with many cards</li><li>See stage and position without scrolling the board</li><li>Open the customer right away, even if the card is not on the loaded page of the column</li></ul><h4 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h4><ol><li>Open the <strong>Sales Funnel</strong> in CRM</li><li>At the top of the funnel, type the name in <strong>Search customer by name...</strong></li><li>Review the list with stage (colored badge) and position (<code>#N of T</code>)</li><li>Click a result to open the customer <strong>edit modal</strong></li><li>If the card is already visible in the column, it is also highlighted on the board</li></ol><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Search respects the <strong>Only mine</strong> and <strong>Hide closed</strong> filters. It covers the entire current funnel, not only cards already loaded on screen.</p></div><blockquote><p>Full guide: <a href="/en/guide/crm/customers#sales-funnel">Customer Management — Sales Funnel</a></p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Fast lookup of customers in large funnels</li><li>✅ Immediate visibility of stage and position on the board</li><li>✅ Direct access to the customer record without relying on column pagination</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/07/2026.7.7.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_7 as default
};
