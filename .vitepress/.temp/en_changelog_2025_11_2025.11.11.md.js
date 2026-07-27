import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.11","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.11.md","filePath":"en/changelog/2025/11/2025.11.11.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.11.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-11" tabindex="-1">v2025.11.11 <a class="header-anchor" href="#v2025-11-11" aria-label="Permalink to &quot;v2025.11.11&quot;">​</a></h1><p>Release date: <strong>November 19, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="auto-field-suggestions-when-closing-support" tabindex="-1">Auto Field Suggestions When Closing Support <a class="header-anchor" href="#auto-field-suggestions-when-closing-support" aria-label="Permalink to &quot;Auto Field Suggestions When Closing Support&quot;">​</a></h3><p>When closing support, the system suggests unfilled fields that should be completed.</p><h4 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h4><ol><li>Agent clicks <strong>&quot;Close Support&quot;</strong></li><li>System identifies unfilled fields</li><li>Modal appears with field list</li><li>Agent can fill quickly</li><li>Complete closing and data is saved</li></ol><h4 id="field-types-suggested" tabindex="-1">Field types suggested: <a class="header-anchor" href="#field-types-suggested" aria-label="Permalink to &quot;Field types suggested:&quot;">​</a></h4><ul><li>📝 Text fields (name, notes)</li><li>📋 Select fields (status, source)</li><li>🏷️ Tags</li><li>📊 Funnel (current stage)</li></ul><h4 id="configuration" tabindex="-1">Configuration: <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration:&quot;">​</a></h4><ol><li>Go to <strong>Settings</strong> → <strong>Support</strong></li><li>Locate <strong>&quot;Field Suggestions on Close&quot;</strong></li><li>Select which fields should be suggested</li><li>Define which are mandatory</li><li>Save</li></ol><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ More complete registrations</li><li>✅ No forgotten data</li><li>✅ Better reports</li><li>✅ More accurate metrics</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.11.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_11 as default
};
