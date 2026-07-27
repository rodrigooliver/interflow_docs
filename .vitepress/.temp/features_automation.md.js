import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Automação e IA","description":"","frontmatter":{},"headers":[],"relativePath":"features/automation.md","filePath":"features/automation.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "features/automation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="automacao-e-ia" tabindex="-1">Automação e IA <a class="header-anchor" href="#automacao-e-ia" aria-label="Permalink to &quot;Automação e IA&quot;">​</a></h1><p>Fluxos visuais, agentes de IA e integrações para automatizar o atendimento.</p><h2 id="destaques" tabindex="-1">Destaques <a class="header-anchor" href="#destaques" aria-label="Permalink to &quot;Destaques&quot;">​</a></h2><ul><li>Construtor drag-and-drop com dezenas de nós</li><li>Agentes IA com ferramentas e base de conhecimento</li><li>Automações por estágio CRM, encerramento, transferência e agenda (silent flows)</li><li>Integrações: OpenAI, DeepSeek, ElevenLabs, Minimax, Firecrawl</li></ul><h2 id="guias" tabindex="-1">Guias <a class="header-anchor" href="#guias" aria-label="Permalink to &quot;Guias&quot;">​</a></h2><ul><li><a href="/guide/flows/builder">Construtor de fluxos</a></li><li><a href="/guide/flows/nodes/">Tipos de nós</a></li><li><a href="/guide/ai-agents/">Agentes IA</a></li><li><a href="/guide/ai-agents/tools/">Ferramentas da IA</a></li><li><a href="/guide/integrations/openai">Integrações</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/automation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const automation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  automation as default
};
