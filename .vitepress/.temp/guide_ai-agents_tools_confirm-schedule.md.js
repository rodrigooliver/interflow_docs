import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Confirmar Agendamento","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/confirm-schedule.md","filePath":"guide/ai-agents/tools/confirm-schedule.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/confirm-schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="confirmar-agendamento" tabindex="-1">Confirmar Agendamento <a class="header-anchor" href="#confirmar-agendamento" aria-label="Permalink to &quot;Confirmar Agendamento&quot;">​</a></h1><p>Confirma agendamentos existentes do cliente.</p><p><strong>Configuração:</strong></p><ul><li><strong>Agenda</strong>: Selecione qual agenda consultar</li></ul><p><strong>Comportamento:</strong></p><ul><li>A IA identifica agendamentos pendentes do cliente</li><li>Apresenta os detalhes para confirmação</li><li>Marca como confirmado após aceite</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 IA: Olá! Vi que você tem um agendamento para amanhã às 10h.</span></span>
<span class="line"><span>       Posso confirmar sua presença?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 Cliente: Sim, confirmo</span></span>
<span class="line"><span>🤖 IA: Perfeito! Seu agendamento está confirmado. Até amanhã! ✅</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/confirm-schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirmSchedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  confirmSchedule as default
};
