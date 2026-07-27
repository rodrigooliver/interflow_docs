import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automatización e IA","description":"","frontmatter":{},"headers":[],"relativePath":"es/features/automation.md","filePath":"es/features/automation.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "es/features/automation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="automatizacion-e-ia" tabindex="-1">Automatización e IA <a class="header-anchor" href="#automatizacion-e-ia" aria-label="Permalink to &quot;Automatización e IA&quot;">​</a></h1><p>Flujos visuales, agentes de IA e integraciones para automatizar la atención.</p><h2 id="destacados" tabindex="-1">Destacados <a class="header-anchor" href="#destacados" aria-label="Permalink to &quot;Destacados&quot;">​</a></h2><ul><li>Constructor drag-and-drop con decenas de nodos</li><li>Agentes IA con herramientas y base de conocimiento</li><li>Automatizaciones por etapa CRM, cierre, transferencia y agenda</li><li>Integraciones: OpenAI, DeepSeek, ElevenLabs, Minimax, Firecrawl</li></ul><h2 id="guias" tabindex="-1">Guías <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guías&quot;">​</a></h2><ul><li><a href="/es/guide/flows/builder">Constructor de flujos</a></li><li><a href="/es/guide/flows/nodes/">Tipos de nodos</a></li><li><a href="/es/guide/ai-agents/">Agentes IA</a></li><li><a href="/es/guide/ai-agents/tools/">Herramientas de IA</a></li><li><a href="/es/guide/integrations/openai">Integraciones</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/features/automation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automation as default
};
