import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.10.3","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/10/2025.10.3.md","filePath":"en/changelog/2025/10/2025.10.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/10/2025.10.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-10-3" tabindex="-1">v2025.10.3 <a class="header-anchor" href="#v2025-10-3" aria-label="Permalink to &quot;v2025.10.3&quot;">​</a></h1><p>Release date: <strong>October 29, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="hide-sensitive-data-from-agents" tabindex="-1">Hide Sensitive Data from Agents <a class="header-anchor" href="#hide-sensitive-data-from-agents" aria-label="Permalink to &quot;Hide Sensitive Data from Agents&quot;">​</a></h3><p>Global setting to hide customer contact information from agents.</p><h4 id="how-to-configure" tabindex="-1">How to configure? <a class="header-anchor" href="#how-to-configure" aria-label="Permalink to &quot;How to configure?&quot;">​</a></h4><ol><li>Go to <strong>Settings</strong> → <strong>General Tab</strong></li><li>Locate <strong>&quot;Hide Contact Data from Agents&quot;</strong></li><li>Activate the toggle</li><li>Setting is applied immediately</li></ol><h4 id="who-sees-the-data" tabindex="-1">Who sees the data? <a class="header-anchor" href="#who-sees-the-data" aria-label="Permalink to &quot;Who sees the data?&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Profile</th><th>Access</th></tr></thead><tbody><tr><td>Superadmin</td><td>✅ Full access</td></tr><tr><td>Owner</td><td>✅ Full access</td></tr><tr><td>Admin</td><td>✅ Full access</td></tr><tr><td><strong>Agent</strong></td><td>❌ Data hidden</td></tr></tbody></table><h4 id="what-is-hidden-from-agents" tabindex="-1">What is hidden from agents: <a class="header-anchor" href="#what-is-hidden-from-agents" aria-label="Permalink to &quot;What is hidden from agents:&quot;">​</a></h4><ul><li>❌ Email, Phone, WhatsApp</li><li>❌ Contacts in export (CSV, Excel, JSON)</li><li>❌ Contacts in search results</li><li>❌ Contacts when starting chat</li><li>❌ External IDs from chat and messages</li><li>❌ Contacts section when editing customer</li></ul><h4 id="what-agents-can-do" tabindex="-1">What agents CAN do: <a class="header-anchor" href="#what-agents-can-do" aria-label="Permalink to &quot;What agents CAN do:&quot;">​</a></h4><ul><li>✅ View and edit customer name</li><li>✅ View and manage tags</li><li>✅ View and edit custom fields</li><li>✅ Attend chats normally</li><li>✅ Send and receive messages</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Customer privacy protection</li><li>✅ GDPR compliance</li><li>✅ Reduced leak risk</li><li>✅ Agents remain productive</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/10/2025.10.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_10_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_10_3 as default
};
