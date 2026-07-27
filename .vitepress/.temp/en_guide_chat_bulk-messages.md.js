import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Bulk Messages","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/chat/bulk-messages.md","filePath":"en/guide/chat/bulk-messages.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/chat/bulk-messages.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="bulk-messages" tabindex="-1">Bulk Messages <a class="header-anchor" href="#bulk-messages" aria-label="Permalink to &quot;Bulk Messages&quot;">​</a></h1><p>Run campaigns for customer segments: direct message, WAHA flow, or <strong>silent flow</strong> on the last chat.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>Bulk messages</strong>. Requires <code>bulkMessages</code>.</p></div><h2 id="send-modes" tabindex="-1">Send modes <a class="header-anchor" href="#send-modes" aria-label="Permalink to &quot;Send modes&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Mode</th><th>Behavior</th><th>Notes</th></tr></thead><tbody><tr><td><code>message</code></td><td>Send text/template</td><td>Official templates must be <strong>APPROVED</strong></td></tr><tr><td><code>flow</code></td><td>Start a <code>general</code> flow via WAHA</td><td>Delay ≥ 20s recommended</td></tr><tr><td><code>silent_flow</code></td><td>Run <code>bulk_silent</code> on the customer&#39;s <strong>last chat</strong> with <strong>no</strong> outbound message</td><td>Delay ≥ 5s; media/text/input nodes blocked</td></tr></tbody></table><h2 id="create-a-campaign" tabindex="-1">Create a campaign <a class="header-anchor" href="#create-a-campaign" aria-label="Permalink to &quot;Create a campaign&quot;">​</a></h2><ol><li>Open <strong>Bulk messages</strong> → <strong>New</strong></li><li>Choose send mode and audience filters (channel, tags, CRM stages, status…)</li><li>Configure message/template/flow and interval</li><li>Start — you can pause or cancel later</li></ol><div class="warning custom-block"><p class="custom-block-title">Silent flows</p><p><code>bulk_silent</code> does not talk to the contact. Use it for CRM updates, tasks, webhooks, etc.</p></div><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/channels/whatsapp-templates">WhatsApp templates</a></li><li><a href="/en/guide/chat/tags">Tags</a></li><li><a href="/en/guide/crm/funnels">CRM funnels</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/chat/bulk-messages.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const bulkMessages = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  bulkMessages as default
};
