import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.3","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.3.md","filePath":"en/changelog/2025/11/2025.11.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-3" tabindex="-1">v2025.11.3 <a class="header-anchor" href="#v2025-11-3" aria-label="Permalink to &quot;v2025.11.3&quot;">​</a></h1><p>Release date: <strong>November 06, 2025</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="automatic-24h-48h-reminder-messages" tabindex="-1">Automatic 24h/48h Reminder Messages <a class="header-anchor" href="#automatic-24h-48h-reminder-messages" aria-label="Permalink to &quot;Automatic 24h/48h Reminder Messages&quot;">​</a></h3><p>Configure automatic reminders to be sent before appointments.</p><h4 id="how-to-configure" tabindex="-1">How to configure? <a class="header-anchor" href="#how-to-configure" aria-label="Permalink to &quot;How to configure?&quot;">​</a></h4><ol><li>Go to <strong>Settings</strong> → <strong>Appointments</strong></li><li>Locate <strong>&quot;Automatic Reminders&quot;</strong> section</li><li>Enable desired options: <ul><li>✅ 24 hours before</li><li>✅ 48 hours before</li></ul></li><li>Customize the reminder message template</li><li>Save</li></ol><h4 id="features" tabindex="-1">Features: <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features:&quot;">​</a></h4><ul><li>⏰ Automatic scheduling</li><li>📝 Customizable messages</li><li>🔄 Respects appointment status (only confirmed)</li><li>❌ Does not send if cancelled</li></ul><hr><h3 id="quick-setup-restricted-to-administrators" tabindex="-1">Quick Setup Restricted to Administrators <a class="header-anchor" href="#quick-setup-restricted-to-administrators" aria-label="Permalink to &quot;Quick Setup Restricted to Administrators&quot;">​</a></h3><p>The Quick Setup wizard is now visible only for admin profiles.</p><h4 id="who-has-access" tabindex="-1">Who has access? <a class="header-anchor" href="#who-has-access" aria-label="Permalink to &quot;Who has access?&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Profile</th><th>Access</th></tr></thead><tbody><tr><td>Owner</td><td>✅ Yes</td></tr><tr><td>Admin</td><td>✅ Yes</td></tr><tr><td>Agent</td><td>❌ No</td></tr></tbody></table><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Fewer no-shows</li><li>✅ No-touch automation</li><li>✅ Protected critical settings</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_3 as default
};
