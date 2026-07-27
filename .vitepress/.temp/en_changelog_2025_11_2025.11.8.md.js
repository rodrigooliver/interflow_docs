import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.8","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.8.md","filePath":"en/changelog/2025/11/2025.11.8.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-8" tabindex="-1">v2025.11.8 <a class="header-anchor" href="#v2025-11-8" aria-label="Permalink to &quot;v2025.11.8&quot;">​</a></h1><p>Release date: <strong>November 14, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="facebook-messenger-integration" tabindex="-1">Facebook Messenger Integration <a class="header-anchor" href="#facebook-messenger-integration" aria-label="Permalink to &quot;Facebook Messenger Integration&quot;">​</a></h3><p>Connect your Facebook page to receive and respond to messages.</p><h4 id="how-to-connect" tabindex="-1">How to connect? <a class="header-anchor" href="#how-to-connect" aria-label="Permalink to &quot;How to connect?&quot;">​</a></h4><ol><li>Go to <strong>Channels</strong> → <strong>Add Channel</strong></li><li>Select <strong>Facebook Messenger</strong></li><li>Click <strong>&quot;Connect with Facebook&quot;</strong></li><li>Log in to your Facebook account</li><li>Select the page to connect</li><li>Grant necessary permissions</li><li>Channel is created and ready to use</li></ol><h4 id="features" tabindex="-1">Features: <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features:&quot;">​</a></h4><ul><li>💬 Receive messages in real-time</li><li>📎 Send and receive attachments</li><li>👤 Automatic customer identification</li><li>🔄 Message sync</li><li>📊 Complete history preserved</li></ul><h4 id="requirements" tabindex="-1">Requirements: <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements:&quot;">​</a></h4><ul><li>Facebook page with messages enabled</li><li>Admin permissions on the page</li><li>Valid Facebook account</li></ul><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>You can connect multiple pages, each becomes a separate channel.</p></div><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Centralized Messenger support</li><li>✅ No switching between apps</li><li>✅ Uses all Interflow resources</li><li>✅ AI and automations work with Messenger</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_8 as default
};
