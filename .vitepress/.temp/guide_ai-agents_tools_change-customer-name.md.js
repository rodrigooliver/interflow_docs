import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alterar Nome do Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/change-customer-name.md","filePath":"guide/ai-agents/tools/change-customer-name.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/change-customer-name.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alterar-nome-do-cliente" tabindex="-1">Alterar Nome do Cliente <a class="header-anchor" href="#alterar-nome-do-cliente" aria-label="Permalink to &quot;Alterar Nome do Cliente&quot;">​</a></h1><p>Permite que a IA atualize o nome do cliente no cadastro durante a conversa.</p><p><strong>Quando usar:</strong></p><ul><li>Cliente informa nome diferente do cadastrado</li><li>Primeira interação onde o nome é coletado</li><li>Correção de nomes digitados errado</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Meu nome é João Silva, não João Santos</span></span>
<span class="line"><span>🤖 IA: Pronto, João! Já atualizei seu cadastro. Como posso ajudá-lo?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta ação pode ser adicionada apenas uma vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/change-customer-name.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerName = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerName as default
};
