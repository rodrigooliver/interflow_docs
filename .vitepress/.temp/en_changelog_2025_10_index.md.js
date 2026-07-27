import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"October 2025","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/10/index.md","filePath":"en/changelog/2025/10/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/10/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="october-2025" tabindex="-1">October 2025 <a class="header-anchor" href="#october-2025" aria-label="Permalink to &quot;October 2025&quot;">​</a></h1><p>Updates for October 2025.</p><h2 id="versions" tabindex="-1">Versions <a class="header-anchor" href="#versions" aria-label="Permalink to &quot;Versions&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Version</th><th>Date</th><th>Highlights</th></tr></thead><tbody><tr><td><a href="/en/changelog/2025/10/2025.10.5">2025.10.5</a></td><td>10/31</td><td>Pinned messages, Private note node, Reactivate archived</td></tr><tr><td><a href="/en/changelog/2025/10/2025.10.4">2025.10.4</a></td><td>10/30</td><td>Multi-team filter, Advanced customer reports</td></tr><tr><td><a href="/en/changelog/2025/10/2025.10.3">2025.10.3</a></td><td>10/29</td><td>Hide sensitive data from agents</td></tr><tr><td><a href="/en/changelog/2025/10/2025.10.2">2025.10.2</a></td><td>10/27</td><td>Cascade update in select fields, Calendar import</td></tr><tr><td><a href="/en/changelog/2025/10/2025.10.1">2025.10.1</a></td><td>10/25</td><td>Pause flow when attending</td></tr></tbody></table><hr><h2 id="month-summary" tabindex="-1">Month Summary <a class="header-anchor" href="#month-summary" aria-label="Permalink to &quot;Month Summary&quot;">​</a></h2><h3 id="new-features-9" tabindex="-1">New Features (9) <a class="header-anchor" href="#new-features-9" aria-label="Permalink to &quot;New Features (9)&quot;">​</a></h3><ul><li>Pinned messages in chat</li><li>Private note node in flow</li><li>Reactivate archived conversation on new message</li><li>Option to skip flow on transfer</li><li>Multi-team chat filter</li><li>Advanced customer reports</li><li>Calendar event import with date filter</li><li>Cascade update in select fields</li><li>Pause flow when attending</li></ul><h3 id="security-1" tabindex="-1">Security (1) <a class="header-anchor" href="#security-1" aria-label="Permalink to &quot;Security (1)&quot;">​</a></h3><ul><li>Hide sensitive data from agents</li></ul><hr><div class="info custom-block"><p class="custom-block-title">Total</p><p><strong>5 releases</strong> with <strong>10 improvements</strong> this month!</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/10/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
