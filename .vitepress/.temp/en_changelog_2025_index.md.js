import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Changelog 2025","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/index.md","filePath":"en/changelog/2025/index.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="changelog-2025" tabindex="-1">Changelog 2025 <a class="header-anchor" href="#changelog-2025" aria-label="Permalink to &quot;Changelog 2025&quot;">​</a></h1><p>All Interflow platform updates in 2025.</p><h2 id="months" tabindex="-1">Months <a class="header-anchor" href="#months" aria-label="Permalink to &quot;Months&quot;">​</a></h2><h3 id="december" tabindex="-1">December <a class="header-anchor" href="#december" aria-label="Permalink to &quot;December&quot;">​</a></h3><ul><li><a href="/en/changelog/2025/12/">December 2025</a> - 9 releases, 14 improvements</li></ul><h3 id="november" tabindex="-1">November <a class="header-anchor" href="#november" aria-label="Permalink to &quot;November&quot;">​</a></h3><ul><li><a href="/en/changelog/2025/11/">November 2025</a> - 14 releases, 25 improvements</li></ul><h3 id="october" tabindex="-1">October <a class="header-anchor" href="#october" aria-label="Permalink to &quot;October&quot;">​</a></h3><ul><li><a href="/en/changelog/2025/10/">October 2025</a> - 5 releases, 10 improvements</li></ul><hr><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Use the sidebar navigation to quickly access specific versions.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
