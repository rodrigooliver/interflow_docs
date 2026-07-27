import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integração ElevenLabs","description":"","frontmatter":{},"headers":[],"relativePath":"guide/integrations/elevenlabs.md","filePath":"guide/integrations/elevenlabs.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/integrations/elevenlabs.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integracao-elevenlabs" tabindex="-1">Integração ElevenLabs <a class="header-anchor" href="#integracao-elevenlabs" aria-label="Permalink to &quot;Integração ElevenLabs&quot;">​</a></h1><p>Use a ElevenLabs para síntese de voz (TTS) em fluxos e automações de áudio.</p><h2 id="configurar" tabindex="-1">Configurar <a class="header-anchor" href="#configurar" aria-label="Permalink to &quot;Configurar&quot;">​</a></h2><ol><li>Obtenha uma API key em <a href="https://elevenlabs.io" target="_blank" rel="noreferrer">elevenlabs.io</a></li><li>No Interflow: <strong>Configurações → Integrações</strong></li><li>Localize <strong>ElevenLabs</strong></li><li>Cole a chave e salve</li></ol><h2 id="onde-e-usada" tabindex="-1">Onde é usada <a class="header-anchor" href="#onde-e-usada" aria-label="Permalink to &quot;Onde é usada&quot;">​</a></h2><ul><li>Nó <strong>ElevenLabs TTS</strong> nos <a href="/guide/flows/nodes/elevenlabs">fluxos</a></li><li>Geração de áudio para envio em canais compatíveis</li></ul><div class="warning custom-block"><p class="custom-block-title">Custos</p><p>O consumo é cobrado pela ElevenLabs conforme seu plano na provedora.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/flows/nodes/elevenlabs">Nó ElevenLabs</a></li><li><a href="/guide/integrations/minimax">Minimax TTS</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/integrations/elevenlabs.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const elevenlabs = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  elevenlabs as default
};
