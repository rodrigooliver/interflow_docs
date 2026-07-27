import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chat & Support","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/chat.md","filePath":"en/features/chat.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/chat.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chat-support" tabindex="-1">Chat &amp; Support <a class="header-anchor" href="#chat-support" aria-label="Permalink to &quot;Chat &amp; Support&quot;">​</a></h1><p>Day-to-day agent tools: inbox, shortcuts, tags, closure types, and campaigns.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights&quot;">​</a></h2><ul><li>Unified <a href="/en/guide/chat/interface">chat interface</a></li><li><a href="/en/guide/chat/bulk-messages">Bulk messages</a> (message, flow, or silent flow)</li><li><a href="/en/guide/chat/tags">Tags</a> and <a href="/en/guide/chat/closure-types">closure types</a></li><li><a href="/en/guide/chat/message-shortcuts">Message shortcuts</a> and <a href="/en/guide/chat/text-enhancer">text enhancer</a></li><li>Internal agent chat</li><li><a href="/en/guide/tasks">My tasks</a></li></ul><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/chat/interface">Chat interface</a></li><li><a href="/en/guide/chat/bulk-messages">Bulk messages</a></li><li><a href="/en/guide/chat/tags">Tags</a></li><li><a href="/en/guide/chat/closure-types">Closure types</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/chat.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const chat = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  chat as default
};
