import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.12","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/07/2026.7.12.md","filePath":"en/changelog/2026/07/2026.7.12.md","lastUpdated":1784358846000}');
const _sfc_main = { name: "en/changelog/2026/07/2026.7.12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-12" tabindex="-1">v2026.7.12 <a class="header-anchor" href="#v2026-7-12" aria-label="Permalink to &quot;v2026.7.12&quot;">​</a></h1><p>Release date: <strong>July 18, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="passkey-verification-for-whatsapp-waha" tabindex="-1">Passkey verification for WhatsApp WAHA <a class="header-anchor" href="#passkey-verification-for-whatsapp-waha" aria-label="Permalink to &quot;Passkey verification for WhatsApp WAHA&quot;">​</a></h3><p>Some WhatsApp accounts now require a <strong>passkey</strong> when linking a new device. On the <strong>WhatsApp (WAHA)</strong> channel, connection is no longer only QR Code or pairing code: when WhatsApp asks for this verification, Interflow shows the step on the channel screen.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Finish connecting when WhatsApp requests a security check</li><li>Keep the flow inside Interflow, without opening the integration’s technical dashboard</li><li>Confirm, when needed, the 4-digit code shown on the phone</li></ul><h4 id="how-to-use-it" tabindex="-1">How to use it? <a class="header-anchor" href="#how-to-use-it" aria-label="Permalink to &quot;How to use it?&quot;">​</a></h4><ol><li>Under <strong>Channels</strong>, open a disconnected <strong>WhatsApp (WAHA)</strong> channel</li><li>If the banner appears, install the suggested browser extension (Chrome/Edge/Brave or Firefox)</li><li>Start the connection with <strong>QR Code</strong> or <strong>phone number</strong></li><li>If WhatsApp asks for a passkey, click <strong>Confirm connection</strong>, confirm in the tab that opens, and use your device authenticator (Touch ID, Windows Hello, etc.)</li><li>If a 4-digit code appears, check it on the phone and click <strong>The code matches</strong></li></ol><blockquote><p>Full guide: <a href="/en/guide/channels/whatsapp-waha">WhatsApp WAHA</a></p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>Accounts that require a passkey can connect again through the WAHA channel</li><li>Early warning when the browser extension is not installed yet</li><li>Guided flow on the channel screen, aligned with WhatsApp’s verification</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/07/2026.7.12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_12 as default
};
