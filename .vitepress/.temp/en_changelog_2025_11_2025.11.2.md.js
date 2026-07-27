import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.2","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.2.md","filePath":"en/changelog/2025/11/2025.11.2.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-2" tabindex="-1">v2025.11.2 <a class="header-anchor" href="#v2025-11-2" aria-label="Permalink to &quot;v2025.11.2&quot;">​</a></h1><p>Release date: <strong>November 05, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="multiple-photos-upload-on-mobile" tabindex="-1">Multiple Photos Upload on Mobile <a class="header-anchor" href="#multiple-photos-upload-on-mobile" aria-label="Permalink to &quot;Multiple Photos Upload on Mobile&quot;">​</a></h3><p>You can now select and send multiple photos at once through the mobile app.</p><h4 id="how-to-use" tabindex="-1">How to use? <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use?&quot;">​</a></h4><ol><li>Open a conversation in the mobile app</li><li>Tap the attachment icon 📎</li><li>Select <strong>&quot;Photo Gallery&quot;</strong></li><li>Tap to select multiple images</li><li>Confirm the selection</li><li>All photos are sent in sequence</li></ol><h4 id="features" tabindex="-1">Features: <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features:&quot;">​</a></h4><ul><li>📸 Batch selection of images</li><li>🔢 Counter shows how many selected</li><li>⚡ Parallel upload for faster sending</li><li>✅ Send confirmation for each</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ No more sending one photo at a time</li><li>✅ Faster customer service</li><li>✅ Better mobile experience</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.2.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_2 as default
};
