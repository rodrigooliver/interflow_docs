import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Multi-Channel Support","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/channels.md","filePath":"en/features/channels.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/channels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="multi-channel-support" tabindex="-1">Multi-Channel Support <a class="header-anchor" href="#multi-channel-support" aria-label="Permalink to &quot;Multi-Channel Support&quot;">​</a></h1><p>Centralize WhatsApp (Official &amp; WAHA), Instagram, Facebook Messenger, and Email in one inbox.</p><h2 id="highlights" tabindex="-1">Highlights <a class="header-anchor" href="#highlights" aria-label="Permalink to &quot;Highlights&quot;">​</a></h2><ul><li>Full history, media, internal notes, and team transfers</li><li><a href="/en/guide/channels/whatsapp-templates">WhatsApp templates</a> for messaging outside the 24h window</li><li>Delivery/read status in real time</li></ul><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/channels/">Channels overview</a></li><li><a href="/en/guide/channels/whatsapp-business">WhatsApp Business</a></li><li><a href="/en/guide/channels/whatsapp-waha">WhatsApp WAHA</a></li><li><a href="/en/guide/channels/instagram">Instagram</a></li><li><a href="/en/guide/channels/facebook">Facebook Messenger</a></li><li><a href="/en/guide/channels/email">Email</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/channels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const channels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  channels as default
};
