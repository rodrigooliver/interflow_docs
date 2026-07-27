import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"ElevenLabs Integration","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/integrations/elevenlabs.md","filePath":"en/guide/integrations/elevenlabs.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/integrations/elevenlabs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="elevenlabs-integration" tabindex="-1">ElevenLabs Integration <a class="header-anchor" href="#elevenlabs-integration" aria-label="Permalink to &quot;ElevenLabs Integration&quot;">​</a></h1><p>TTS (text-to-speech) for flows and audio automations.</p><ol><li>Get an API key at <a href="https://elevenlabs.io" target="_blank" rel="noreferrer">elevenlabs.io</a></li><li><strong>Settings → Integrations → ElevenLabs</strong> → paste key → Save</li></ol><p>Used by the <a href="/en/guide/flows/nodes/elevenlabs">ElevenLabs TTS node</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Usage is billed by ElevenLabs according to your provider plan.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/integrations/elevenlabs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elevenlabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  elevenlabs as default
};
