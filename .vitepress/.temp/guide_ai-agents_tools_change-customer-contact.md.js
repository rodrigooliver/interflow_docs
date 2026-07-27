import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alterar Contato do Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/change-customer-contact.md","filePath":"guide/ai-agents/tools/change-customer-contact.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/change-customer-contact.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alterar-contato-do-cliente" tabindex="-1">Alterar Contato do Cliente <a class="header-anchor" href="#alterar-contato-do-cliente" aria-label="Permalink to &quot;Alterar Contato do Cliente&quot;">​</a></h1><p>Permite que a IA <strong>salve ou atualize telefone, WhatsApp ou e-mail</strong> do cliente quando ele informar o contato na conversa.</p><p><strong>Quando usar:</strong></p><ul><li>Cliente informa um telefone ou WhatsApp adicional</li><li>Atualização do e-mail informado no chat</li><li>Coleta de contato em fluxos de cadastro ou confirmação</li></ul><p><strong>Configuração:</strong></p><ol><li>Adicione a ação <strong>Alterar Contato do Cliente</strong></li><li>Selecione os tipos permitidos: telefone, WhatsApp e/ou e-mail</li><li>Salve o prompt</li></ol><div class="tip custom-block"><p class="custom-block-title">💡 E-mail</p><p>Quando o tipo for e-mail, o valor também atualiza o campo principal de e-mail do cliente.</p></div><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Meu WhatsApp é (11) 98888-7777</span></span>
<span class="line"><span>🤖 IA: Perfeito! Já salvei esse WhatsApp no seu cadastro.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta ação pode ser adicionada apenas uma vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/change-customer-contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerContact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerContact as default
};
