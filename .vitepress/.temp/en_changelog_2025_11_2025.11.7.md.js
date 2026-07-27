import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.7","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.7.md","filePath":"en/changelog/2025/11/2025.11.7.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.7.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-7" tabindex="-1">v2025.11.7 <a class="header-anchor" href="#v2025-11-7" aria-label="Permalink to &quot;v2025.11.7&quot;">​</a></h1><p>Release date: <strong>November 13, 2025</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="phone-number-chat-search" tabindex="-1">Phone Number Chat Search <a class="header-anchor" href="#phone-number-chat-search" aria-label="Permalink to &quot;Phone Number Chat Search&quot;">​</a></h3><p>Search for conversations using the customer&#39;s phone number.</p><h4 id="how-to-use" tabindex="-1">How to use? <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use?&quot;">​</a></h4><ol><li>In the conversations list, click the search field</li><li>Type the phone number (with or without country code)</li><li>Results appear instantly</li><li>Click to open the conversation</li></ol><h4 id="search-formats-accepted" tabindex="-1">Search formats accepted: <a class="header-anchor" href="#search-formats-accepted" aria-label="Permalink to &quot;Search formats accepted:&quot;">​</a></h4><ul><li>✅ <code>5511999999999</code> (full with country code)</li><li>✅ <code>11999999999</code> (with area code)</li><li>✅ <code>999999999</code> (number only)</li><li>✅ <code>+55 11 99999-9999</code> (formatted)</li></ul><hr><h3 id="configurable-default-tab" tabindex="-1">Configurable Default Tab <a class="header-anchor" href="#configurable-default-tab" aria-label="Permalink to &quot;Configurable Default Tab&quot;">​</a></h3><p>Choose which tab opens first when entering the system.</p><h4 id="how-to-configure" tabindex="-1">How to configure? <a class="header-anchor" href="#how-to-configure" aria-label="Permalink to &quot;How to configure?&quot;">​</a></h4><ol><li>Go to <strong>Settings</strong> → <strong>Preferences</strong></li><li>Locate <strong>&quot;Default Tab&quot;</strong></li><li>Select preferred option: <ul><li>💬 Chats</li><li>👥 Customers</li><li>📅 Appointments</li><li>📊 Dashboard</li></ul></li><li>Save</li></ol><h4 id="per-user-setting" tabindex="-1">Per-user setting: <a class="header-anchor" href="#per-user-setting" aria-label="Permalink to &quot;Per-user setting:&quot;">​</a></h4><ul><li>Each user can configure their own</li><li>Does not affect other team members</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Quickly find any conversation</li><li>✅ Personalized experience</li><li>✅ Fewer clicks to start working</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.7.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_7 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_7 as default
};
