import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.7.12","description":"","frontmatter":{},"headers":[],"relativePath":"changelog/2026/07/2026.7.12.md","filePath":"changelog/2026/07/2026.7.12.md","lastUpdated":1784358846000}');
const _sfc_main = { name: "changelog/2026/07/2026.7.12.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-7-12" tabindex="-1">v2026.7.12 <a class="header-anchor" href="#v2026-7-12" aria-label="Permalink to &quot;v2026.7.12&quot;">​</a></h1><p>Data de lançamento: <strong>18 de julho de 2026</strong></p><hr><h2 id="novas-funcionalidades" tabindex="-1">Novas Funcionalidades <a class="header-anchor" href="#novas-funcionalidades" aria-label="Permalink to &quot;Novas Funcionalidades&quot;">​</a></h2><h3 id="verificacao-por-chave-de-acesso-no-whatsapp-waha" tabindex="-1">Verificação por chave de acesso no WhatsApp WAHA <a class="header-anchor" href="#verificacao-por-chave-de-acesso-no-whatsapp-waha" aria-label="Permalink to &quot;Verificação por chave de acesso no WhatsApp WAHA&quot;">​</a></h3><p>Algumas contas do WhatsApp passaram a exigir uma <strong>chave de acesso</strong> (passkey) ao vincular um novo aparelho. No canal <strong>WhatsApp (WAHA)</strong>, a conexão não fica mais só no QR Code ou no código de pareamento: quando o WhatsApp pede essa verificação, a Interflow mostra o passo na tela do canal.</p><h4 id="para-que-serve" tabindex="-1">Para que serve? <a class="header-anchor" href="#para-que-serve" aria-label="Permalink to &quot;Para que serve?&quot;">​</a></h4><ul><li>Concluir a conexão quando o WhatsApp solicita verificação de segurança</li><li>Manter o fluxo dentro da Interflow, sem abrir o painel técnico da integração</li><li>Confirmar, quando necessário, o código de 4 dígitos exibido no celular</li></ul><h4 id="como-usar" tabindex="-1">Como usar? <a class="header-anchor" href="#como-usar" aria-label="Permalink to &quot;Como usar?&quot;">​</a></h4><ol><li>Em <strong>Canais</strong>, abra o canal <strong>WhatsApp (WAHA)</strong> desconectado</li><li>Se aparecer o aviso, instale a extensão do navegador indicada (Chrome/Edge/Brave ou Firefox)</li><li>Inicie a conexão com <strong>QR Code</strong> ou <strong>número de telefone</strong></li><li>Se o WhatsApp pedir a chave de acesso, clique em <strong>Confirmar conexão</strong>, confirme na aba que abrir e use o autenticador do dispositivo (Touch ID, Windows Hello, etc.)</li><li>Se aparecer um código de 4 dígitos, confira no celular e clique em <strong>O código confere</strong></li></ol><blockquote><p>Guia completo: <a href="/guide/channels/whatsapp-waha">WhatsApp WAHA</a></p></blockquote><hr><h2 id="beneficios" tabindex="-1">Benefícios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Benefícios&quot;">​</a></h2><ul><li>Contas com exigência de passkey voltam a conectar normalmente pelo canal WAHA</li><li>Aviso antecipado quando a extensão do navegador ainda não está instalada</li><li>Fluxo guiado na própria tela do canal, alinhado à verificação do WhatsApp</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("changelog/2026/07/2026.7.12.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_7_12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_7_12 as default
};
