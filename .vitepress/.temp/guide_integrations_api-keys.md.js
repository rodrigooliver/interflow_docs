import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Chaves de API","description":"","frontmatter":{},"headers":[],"relativePath":"guide/integrations/api-keys.md","filePath":"guide/integrations/api-keys.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/integrations/api-keys.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="chaves-de-api" tabindex="-1">Chaves de API <a class="header-anchor" href="#chaves-de-api" aria-label="Permalink to &quot;Chaves de API&quot;">​</a></h1><p>Gere chaves para integrar sistemas externos à <a href="/api/">API da Interflow</a>.</p><div class="tip custom-block"><p class="custom-block-title">Acesso</p><p><strong>Configurações → API Keys</strong></p></div><h2 id="criar-uma-chave" tabindex="-1">Criar uma chave <a class="header-anchor" href="#criar-uma-chave" aria-label="Permalink to &quot;Criar uma chave&quot;">​</a></h2><ol><li>Abra <strong>Configurações → API Keys</strong></li><li>Clique em <strong>Nova chave</strong></li><li>Dê um nome descritivo (ex.: “ERP produção”)</li><li>Copie a chave gerada e guarde em local seguro</li><li>Use o header de autenticação documentado em <a href="/api/authentication">Autenticação</a></li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>A chave secreta costuma ser exibida <strong>apenas uma vez</strong>. Se perder, revogue e crie outra.</p></div><h2 id="boas-praticas" tabindex="-1">Boas práticas <a class="header-anchor" href="#boas-praticas" aria-label="Permalink to &quot;Boas práticas&quot;">​</a></h2><ul><li>Uma chave por sistema/ambiente</li><li>Revogue chaves não utilizadas</li><li>Nunca embuta chaves em apps client-side públicos</li><li>Monitore erros 401/403 na API</li></ul><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/api/">API — Introdução</a></li><li><a href="/api/authentication">Autenticação</a></li><li><a href="/api/messages/send">Enviar mensagem</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/integrations/api-keys.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const apiKeys = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  apiKeys as default
};
