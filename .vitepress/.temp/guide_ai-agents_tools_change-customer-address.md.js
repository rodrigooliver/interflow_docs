import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Alterar Endereço do Cliente","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/change-customer-address.md","filePath":"guide/ai-agents/tools/change-customer-address.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/change-customer-address.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="alterar-endereco-do-cliente" tabindex="-1">Alterar Endereço do Cliente <a class="header-anchor" href="#alterar-endereco-do-cliente" aria-label="Permalink to &quot;Alterar Endereço do Cliente&quot;">​</a></h1><p>Permite que a IA <strong>salve ou atualize o endereço</strong> do cliente no cadastro quando ele informar os dados na conversa (rua, número, cidade, estado, CEP, etc.) ou enviar uma <strong>localização GPS</strong>.</p><p><strong>Quando usar:</strong></p><ul><li>Cliente informa endereço de entrega ou cobrança</li><li>Cliente envia o pin de localização no WhatsApp</li><li>Atualização do endereço padrão já cadastrado</li><li>Coleta de endereço em fluxos de pedido ou visita</li></ul><p><strong>O que a IA pode gravar:</strong></p><ul><li>Rua e número (ou linha completa do endereço)</li><li>Complemento, cidade, estado e CEP</li><li>País e rótulo opcional do endereço</li><li>Latitude e longitude (GPS)</li><li>Instruções de entrega/acesso (ex.: interfone, portão)</li><li>Endereço marcado como padrão (atualiza o existente ou cria um novo)</li></ul><p><strong>Localização GPS:</strong></p><ul><li>Aceita coordenadas separadas (<code>latitude</code> / <code>longitude</code>) ou no formato da mensagem de localização (ex.: <code>-3.03, -59.98</code>)</li><li>Se só o GPS chegar, o sistema tenta completar rua, cidade e demais campos por geocoding reverso (Google Maps com chave configurada, ou Nominatim)</li></ul><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Meu endereço é Rua das Flores, 120, apto 3, São Paulo - SP, CEP 01310-100</span></span>
<span class="line"><span>🤖 IA: Pronto! Já salvei esse endereço no seu cadastro. Precisa de mais alguma coisa?</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: [envia localização no mapa]</span></span>
<span class="line"><span>🤖 IA: Recebi sua localização e já atualizei o endereço no cadastro.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">💡 Contexto automático</p><p>Os endereços já cadastrados também entram no <strong>Customer info</strong> da primeira mensagem de contexto do agente, para a IA não precisar perguntar de novo.</p></div><div class="info custom-block"><p class="custom-block-title">⚠️ Única</p><p>Esta ação pode ser adicionada apenas uma vez por agente.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/change-customer-address.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const changeCustomerAddress = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  changeCustomerAddress as default
};
