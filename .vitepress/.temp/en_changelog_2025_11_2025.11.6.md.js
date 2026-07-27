import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.6","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.6.md","filePath":"en/changelog/2025/11/2025.11.6.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-6" tabindex="-1">v2025.11.6 <a class="header-anchor" href="#v2025-11-6" aria-label="Permalink to &quot;v2025.11.6&quot;">​</a></h1><p>Release date: <strong>November 12, 2025</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="private-message-deletion" tabindex="-1">Private Message Deletion <a class="header-anchor" href="#private-message-deletion" aria-label="Permalink to &quot;Private Message Deletion&quot;">​</a></h3><p>Delete private notes that were sent by mistake.</p><h4 id="how-to-delete" tabindex="-1">How to delete? <a class="header-anchor" href="#how-to-delete" aria-label="Permalink to &quot;How to delete?&quot;">​</a></h4><ol><li>Hover over the private message</li><li>Click the menu (⋮)</li><li>Select <strong>&quot;Delete message&quot;</strong></li><li>Confirm deletion</li></ol><h4 id="rules" tabindex="-1">Rules: <a class="header-anchor" href="#rules" aria-label="Permalink to &quot;Rules:&quot;">​</a></h4><ul><li>✅ Only the author can delete</li><li>✅ Admins can delete any</li><li>❌ Customer messages cannot be deleted</li><li>🕐 Log preserved for audit</li></ul><hr><h3 id="funnel-stage-on-exit" tabindex="-1">Funnel Stage on Exit <a class="header-anchor" href="#funnel-stage-on-exit" aria-label="Permalink to &quot;Funnel Stage on Exit&quot;">​</a></h3><p>Define which funnel stage customer goes to when leaving support.</p><h4 id="how-to-configure" tabindex="-1">How to configure? <a class="header-anchor" href="#how-to-configure" aria-label="Permalink to &quot;How to configure?&quot;">​</a></h4><ol><li>Go to <strong>Settings</strong> → <strong>Funnels</strong></li><li>Locate <strong>&quot;Default stage on exit&quot;</strong> option</li><li>Select desired stage for each funnel</li><li>Save</li></ol><h4 id="behavior" tabindex="-1">Behavior: <a class="header-anchor" href="#behavior" aria-label="Permalink to &quot;Behavior:&quot;">​</a></h4><ul><li>When agent ends support → Customer moves to defined stage</li><li>If flow ends → Also applies configured stage</li><li>Respects manual moves (does not override)</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Clean internal communication</li><li>✅ Automatic funnel organization</li><li>✅ Visual pipeline always updated</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_6 as default
};
