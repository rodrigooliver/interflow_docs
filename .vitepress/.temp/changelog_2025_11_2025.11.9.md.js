import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.9","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2025/11/2025.11.9.md","filePath":"changelog/2025/11/2025.11.9.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "changelog/2025/11/2025.11.9.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-9" tabindex="-1">v2025.11.9 <a class="header-anchor" href="#v2025-11-9" aria-label="Permalink to &quot;v2025.11.9&quot;">​</a></h1><p>Data de lançamento: <strong>17 de Novembro de 2025</strong></p><hr><h2 id="nova-funcionalidade" tabindex="-1">Nova Funcionalidade <a class="header-anchor" href="#nova-funcionalidade" aria-label="Permalink to &quot;Nova Funcionalidade&quot;">​</a></h2><h3 id="bloqueio-de-cadastro-duplicado-de-clientes" tabindex="-1">Bloqueio de Cadastro Duplicado de Clientes <a class="header-anchor" href="#bloqueio-de-cadastro-duplicado-de-clientes" aria-label="Permalink to &quot;Bloqueio de Cadastro Duplicado de Clientes&quot;">​</a></h3><p>O sistema agora impede cadastros duplicados automaticamente.</p><h4 id="como-funciona" tabindex="-1">Como funciona? <a class="header-anchor" href="#como-funciona" aria-label="Permalink to &quot;Como funciona?&quot;">​</a></h4><p>Ao tentar cadastrar um cliente com dados já existentes:</p><ol><li>Sistema verifica CPF, CNPJ, email ou telefone</li><li>Se encontrar duplicidade, exibe aviso:</li></ol><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>⚠️ Cliente já existe</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Este contato já está cadastrado:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>João Silva</span></span>
<span class="line"><span>WhatsApp: (11) 99999-9999</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Ver Cliente Existente]  [Cancelar]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li>Você pode ver o cliente existente ou cancelar</li></ol><h4 id="reconhece-diferentes-formatos" tabindex="-1">Reconhece diferentes formatos: <a class="header-anchor" href="#reconhece-diferentes-formatos" aria-label="Permalink to &quot;Reconhece diferentes formatos:&quot;">​</a></h4><ul><li>✅ (11) 99999-9999</li><li>✅ 11 99999-9999</li><li>✅ +55 11 99999-9999</li><li>✅ 5511999999999</li><li>✅ Formatos do WhatsApp Business</li></ul><h4 id="protecao-para" tabindex="-1">Proteção para: <a class="header-anchor" href="#protecao-para" aria-label="Permalink to &quot;Proteção para:&quot;">​</a></h4><ul><li>📱 WhatsApp</li><li>☎️ Telefone</li><li>📧 Email</li><li>🆔 CPF/CNPJ</li></ul><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>✅ Evita confusão com cadastros duplicados</li><li>✅ Economia de tempo na busca</li><li>✅ Dados sempre organizados</li><li>✅ Histórico unificado do cliente</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2025/11/2025.11.9.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_9 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_9 as default
};
