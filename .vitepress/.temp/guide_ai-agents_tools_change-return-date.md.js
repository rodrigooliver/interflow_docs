import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alterar Data de Retorno","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/change-return-date.md","filePath":"guide/ai-agents/tools/change-return-date.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/change-return-date.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alterar-data-de-retorno" tabindex="-1">Alterar Data de Retorno <a class="header-anchor" href="#alterar-data-de-retorno" aria-label="Permalink to &quot;Alterar Data de Retorno&quot;">​</a></h1><p>Reprograma o follow-up automático do cliente.</p><p><strong>Configuração:</strong></p><ol><li>Selecione o <strong>Fluxo</strong> de retorno</li><li>Selecione o <strong>Nó</strong> inicial do retorno</li><li>Salve</li></ol><p><strong>Quando usar:</strong></p><ul><li>Cliente menciona data futura (&quot;Me liga semana que vem&quot;)</li><li>Cliente não pode conversar agora (&quot;Estou ocupado&quot;)</li><li>Reagendamento de follow-up</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Agora não posso, me liga quinta-feira</span></span>
<span class="line"><span>🤖 IA: Sem problemas! Entro em contato na quinta-feira. </span></span>
<span class="line"><span>       Tenha um ótimo dia! 👋</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Sistema: Follow-up reagendado para quinta-feira]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/change-return-date.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeReturnDate = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeReturnDate as default
};
