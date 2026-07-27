import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integração Minimax","description":"","frontmatter":{},"headers":[],"relativePath":"guide/integrations/minimax.md","filePath":"guide/integrations/minimax.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/integrations/minimax.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integracao-minimax" tabindex="-1">Integração Minimax <a class="header-anchor" href="#integracao-minimax" aria-label="Permalink to &quot;Integração Minimax&quot;">​</a></h1><p>Configure a Minimax para TTS (texto-para-fala) como alternativa de voz em fluxos.</p><h2 id="configurar" tabindex="-1">Configurar <a class="header-anchor" href="#configurar" aria-label="Permalink to &quot;Configurar&quot;">​</a></h2><ol><li>Obtenha as credenciais na Minimax</li><li>No Interflow: <strong>Configurações → Integrações</strong></li><li>Localize <strong>Minimax</strong></li><li>Informe a chave/credenciais e salve</li></ol><h2 id="onde-e-usada" tabindex="-1">Onde é usada <a class="header-anchor" href="#onde-e-usada" aria-label="Permalink to &quot;Onde é usada&quot;">​</a></h2><ul><li>Nó <strong>Minimax TTS</strong> nos fluxos (<code>/guide/flows/nodes/minimax</code>)</li></ul><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/flows/nodes/minimax">Nó Minimax</a></li><li><a href="/guide/integrations/elevenlabs">ElevenLabs</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/integrations/minimax.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const minimax = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  minimax as default
};
