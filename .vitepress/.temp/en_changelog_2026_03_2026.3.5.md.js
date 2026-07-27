import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.3.5","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/03/2026.3.5.md","filePath":"en/changelog/2026/03/2026.3.5.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/03/2026.3.5.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-3-5" tabindex="-1">v2026.3.5 <a class="header-anchor" href="#v2026-3-5" aria-label="Permalink to &quot;v2026.3.5&quot;">​</a></h1><p>Release date: <strong>March 24, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="block-media-in-whatsapp-groups" tabindex="-1">Block media in WhatsApp groups <a class="header-anchor" href="#block-media-in-whatsapp-groups" aria-label="Permalink to &quot;Block media in WhatsApp groups&quot;">​</a></h3><p>You can now configure the channel to <strong>not store</strong> photos, videos, audio, and documents sent in WhatsApp groups. Only text messages are saved.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li><strong>Save space</strong> – Groups often receive many heavy files from multiple participants. This option prevents them from taking up space in your plan</li><li><strong>Predictability</strong> – You have more control over plan usage and reduce the risk of extra costs or blocks</li><li><strong>History preserved</strong> – Text messages continue to be stored normally</li></ul><p>When the option is active, media remains visible in WhatsApp but is not saved on the platform. In the conversation history, a notice indicates that the media was blocked or removed to save space.</p><h4 id="how-to-use" tabindex="-1">How to use? <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use?&quot;">​</a></h4><ol><li>In the left sidebar menu, click <strong>Channels</strong></li><li>Click the desired WhatsApp channel</li><li>Click <strong>Edit</strong> (or on the channel name)</li><li>In the <strong>Groups</strong> section, enable <strong>Enable groups</strong> (if not already active)</li><li>Check <strong>Block media in groups</strong></li><li>Click <strong>Save</strong></li></ol><p>To start storing media again, simply uncheck this option and save.</p><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ <strong>Significant space savings</strong> – Fewer heavy files stored</li><li>✅ <strong>Greater predictability</strong> – Plan usage more controlled</li><li>✅ <strong>Lower risk of extra costs</strong> – Avoid exceeding the contracted limit</li><li>✅ <strong>Simple configuration</strong> – One click on the channel and you&#39;re done</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/03/2026.3.5.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_3_5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_3_5 as default
};
