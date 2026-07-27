import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.4.9","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/04/2026.4.9.md","filePath":"en/changelog/2026/04/2026.4.9.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/04/2026.4.9.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-4-9" tabindex="-1">v2026.4.9 <a class="header-anchor" href="#v2026-4-9" aria-label="Permalink to &quot;v2026.4.9&quot;">​</a></h1><p>Release date: <strong>April 22, 2026</strong></p><hr><h2 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-label="Permalink to &quot;Bug Fixes&quot;">​</a></h2><h3 id="multi-select-of-chat-messages-create-task" tabindex="-1">Multi-select of chat messages (create task) <a class="header-anchor" href="#multi-select-of-chat-messages-create-task" aria-label="Permalink to &quot;Multi-select of chat messages (create task)&quot;">​</a></h3><p>In message selection mode (e.g. to create tasks from the chat), clicking <strong>directly on the checkbox</strong> could unexpectedly clear the selection or exit selection mode, while clicking the message body worked as expected.</p><p>The issue came from using a hidden <code>&lt;input type=&quot;checkbox&quot;&gt;</code> inside a <code>&lt;label&gt;</code>: the <code>change</code> and row <code>click</code> paths could call the same <code>handleSelectMessage</code> twice in a row, toggling the selection back. The UI was updated to a single <code>click</code> handler with <code>stopPropagation</code> while keeping the same checkbox look.</p><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Consistent multi-select when clicking the checkbox or the message</li><li>✅ A clearer, faster flow when creating tasks from several messages</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/04/2026.4.9.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_4_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_4_9 as default
};
