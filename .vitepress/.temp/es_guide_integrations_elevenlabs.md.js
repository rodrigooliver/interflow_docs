import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integración ElevenLabs","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/integrations/elevenlabs.md","filePath":"es/guide/integrations/elevenlabs.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/integrations/elevenlabs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integracion-elevenlabs" tabindex="-1">Integración ElevenLabs <a class="header-anchor" href="#integracion-elevenlabs" aria-label="Permalink to &quot;Integración ElevenLabs&quot;">​</a></h1><p>TTS (texto a voz) para flujos y automatizaciones de audio.</p><ol><li>Obtenga una API key en <a href="https://elevenlabs.io" target="_blank" rel="noreferrer">elevenlabs.io</a></li><li><strong>Configuración → Integraciones → ElevenLabs</strong> → pegue la clave → Guardar</li></ol><p>Usada por el <a href="/es/guide/flows/nodes/elevenlabs">nodo ElevenLabs TTS</a>.</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/integrations/elevenlabs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elevenlabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  elevenlabs as default
};
