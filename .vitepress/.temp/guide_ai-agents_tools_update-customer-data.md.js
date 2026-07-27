import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Atualizar Dados do Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/update-customer-data.md","filePath":"guide/ai-agents/tools/update-customer-data.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/update-customer-data.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="atualizar-dados-do-cliente" tabindex="-1">Atualizar Dados do Cliente <a class="header-anchor" href="#atualizar-dados-do-cliente" aria-label="Permalink to &quot;Atualizar Dados do Cliente&quot;">​</a></h1><p>Atualiza campos personalizados do cadastro do cliente.</p><p><strong>Configuração:</strong></p><ol><li>Selecione os campos que a IA pode atualizar</li><li>Defina se são obrigatórios ou opcionais</li><li>Salve</li></ol><p><strong>Campos disponíveis:</strong></p><ul><li>Campos personalizados criados em Configurações</li><li>Campos padrão do sistema</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Meu email é joao@email.com</span></span>
<span class="line"><span>🤖 IA: Perfeito! Já salvei seu email. Posso enviar confirmações por lá agora.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/update-customer-data.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const updateCustomerData = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  updateCustomerData as default
};
