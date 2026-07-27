import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alterar Funil","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/change-funnel.md","filePath":"guide/ai-agents/tools/change-funnel.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/change-funnel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alterar-funil" tabindex="-1">Alterar Funil <a class="header-anchor" href="#alterar-funil" aria-label="Permalink to &quot;Alterar Funil&quot;">​</a></h1><p>Move o cliente entre etapas do funil de vendas/atendimento.</p><p><strong>Configuração:</strong></p><table tabindex="0"><thead><tr><th>Campo</th><th>Descrição</th></tr></thead><tbody><tr><td><strong>Etapas de origem</strong></td><td>De quais etapas o cliente pode sair</td></tr><tr><td><strong>Etapas de destino</strong></td><td>Para quais etapas pode ser movido</td></tr></tbody></table><p><strong>Quando usar:</strong></p><ul><li>Cliente demonstra interesse (mover para &quot;Qualificado&quot;)</li><li>Cliente fecha negócio (mover para &quot;Vendido&quot;)</li><li>Cliente pede para não ser contatado (mover para &quot;Não interessado&quot;)</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Quero fechar o plano Pro</span></span>
<span class="line"><span>🤖 IA: Excelente escolha! Vou registrar sua decisão e um consultor </span></span>
<span class="line"><span>       entrará em contato para finalizar.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Sistema: Cliente movido para etapa &quot;Fechamento&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/change-funnel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeFunnel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeFunnel as default
};
