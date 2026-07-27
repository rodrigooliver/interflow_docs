import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"WhatsApp Templates (Official API)","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/channels/whatsapp-templates.md","filePath":"en/guide/channels/whatsapp-templates.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/channels/whatsapp-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="whatsapp-templates-official-api" tabindex="-1">WhatsApp Templates (Official API) <a class="header-anchor" href="#whatsapp-templates-official-api" aria-label="Permalink to &quot;WhatsApp Templates (Official API)&quot;">​</a></h1><p>Manage Meta templates to start conversations outside the 24h window, bulk sends, and new chats.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p><strong>Channels →</strong> WhatsApp Business (Official) → <strong>Templates</strong></p></div><p>Sync status from Meta. Only <strong>APPROVED</strong> templates can be used in chat and <a href="/en/guide/chat/bulk-messages">bulk messages</a>.</p><table tabindex="0"><thead><tr><th>Status</th><th>Meaning</th></tr></thead><tbody><tr><td>APPROVED</td><td>Ready</td></tr><tr><td>PENDING</td><td>Under review</td></tr><tr><td>REJECTED</td><td>Fix and resubmit</td></tr></tbody></table><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/channels/whatsapp-business">WhatsApp Business</a></li><li><a href="/en/guide/chat/bulk-messages">Bulk messages</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/channels/whatsapp-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whatsappTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  whatsappTemplates as default
};
