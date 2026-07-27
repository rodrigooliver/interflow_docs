import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.12.6","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/12/2025.12.6.md","filePath":"en/changelog/2025/12/2025.12.6.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/12/2025.12.6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-12-6" tabindex="-1">v2025.12.6 <a class="header-anchor" href="#v2025-12-6" aria-label="Permalink to &quot;v2025.12.6&quot;">​</a></h1><p>Release date: <strong>December 15, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="new-color-options-in-custom-filters" tabindex="-1">New Color Options in Custom Filters <a class="header-anchor" href="#new-color-options-in-custom-filters" aria-label="Permalink to &quot;New Color Options in Custom Filters&quot;">​</a></h3><p>Expanded color palette available for selection in custom filters in the conversations menu.</p><h4 id="what-changes" tabindex="-1">What changes? <a class="header-anchor" href="#what-changes" aria-label="Permalink to &quot;What changes?&quot;">​</a></h4><ul><li>More colors available for visual filter identification</li><li>Enhanced customization according to team needs</li><li>More intuitive conversation classification and distinction by categories</li></ul><h4 id="how-to-use" tabindex="-1">How to use? <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use?&quot;">​</a></h4><ol><li>When creating or editing a custom filter</li><li>View the expanded color palette</li><li>Select the desired color</li><li>Save the filter and use normally</li></ol><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Greater agility to find information</li><li>✅ Better visual organization</li><li>✅ Quick identification by colors</li><li>✅ More efficient support</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/12/2025.12.6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_12_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_12_6 as default
};
