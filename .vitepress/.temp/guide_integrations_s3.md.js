import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integração AWS S3","description":"","frontmatter":{},"headers":[],"relativePath":"guide/integrations/s3.md","filePath":"guide/integrations/s3.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "guide/integrations/s3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integracao-aws-s3" tabindex="-1">Integração AWS S3 <a class="header-anchor" href="#integracao-aws-s3" aria-label="Permalink to &quot;Integração AWS S3&quot;">​</a></h1><p>Configure um bucket S3 próprio para armazenamento de arquivos da organização (quando o plano/organização permitir storage externo).</p><h2 id="configurar" tabindex="-1">Configurar <a class="header-anchor" href="#configurar" aria-label="Permalink to &quot;Configurar&quot;">​</a></h2><ol><li>Crie um bucket e credenciais IAM com permissão de leitura/escrita</li><li>No Interflow: <strong>Configurações → Integrações</strong></li><li>Localize <strong>AWS S3</strong></li><li>Informe endpoint/região, bucket e chaves</li><li>Salve e teste o envio de um arquivo</li></ol><div class="danger custom-block"><p class="custom-block-title">Segurança</p><p>Nunca compartilhe access keys em canais públicos. Prefira usuários IAM com escopo mínimo no bucket.</p></div><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/guide/settings/">Configurações</a></li><li><a href="/guide/settings/">Uso / armazenamento</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/integrations/s3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const s3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  s3 as default
};
