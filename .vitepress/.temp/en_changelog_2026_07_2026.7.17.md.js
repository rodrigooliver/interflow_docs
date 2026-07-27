import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.17","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/07/2026.7.17.md","filePath":"en/changelog/2026/07/2026.7.17.md","lastUpdated":1785186611000}');
const _sfc_main = { name: "en/changelog/2026/07/2026.7.17.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-17" tabindex="-1">v2026.7.17 <a class="header-anchor" href="#v2026-7-17" aria-label="Permalink to &quot;v2026.7.17&quot;">​</a></h1><p>Release date: <strong>July 27, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="customer-tax-id-variable-in-message-shortcuts" tabindex="-1">Customer tax ID variable in message shortcuts <a class="header-anchor" href="#customer-tax-id-variable-in-message-shortcuts" aria-label="Permalink to &quot;Customer tax ID variable in message shortcuts&quot;">​</a></h3><p>Message shortcuts now support the <code>{{customer.document}}</code> variable, which is automatically replaced with the customer&#39;s <strong>tax ID (CPF/CNPJ)</strong> when the message is sent.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Include the customer&#39;s document in ready-made messages without typing it manually</li><li>Reduce typing errors in processes that require a tax ID</li><li>Keep the value always aligned with the customer record</li></ul><h4 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h4><ol><li>Go to <strong>Organization</strong> → <strong>Message Shortcuts</strong></li><li>Create or edit a shortcut</li><li>In the variable selector, choose <strong>customer.document</strong> (Basic information)</li><li>Save the shortcut</li><li>In the conversation, type <code>/</code> to apply the shortcut — the customer&#39;s document is filled in automatically</li></ol><div class="tip custom-block"><p class="custom-block-title">Customer without a document</p><p>If the customer has no tax ID on file, the variable is replaced with empty text.</p></div><blockquote><p>Full guide: <a href="/en/guide/chat/message-shortcuts">Message Shortcuts</a></p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>Faster support with ready-to-use customer data</li><li>Lower risk of mistakes when sharing a tax ID</li><li>Consistent personalization of ready-made messages</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/07/2026.7.17.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_17 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_17 as default
};
