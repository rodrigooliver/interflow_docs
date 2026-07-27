import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Plantillas WhatsApp (API Oficial)","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/channels/whatsapp-templates.md","filePath":"es/guide/channels/whatsapp-templates.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/channels/whatsapp-templates.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="plantillas-whatsapp-api-oficial" tabindex="-1">Plantillas WhatsApp (API Oficial) <a class="header-anchor" href="#plantillas-whatsapp-api-oficial" aria-label="Permalink to &quot;Plantillas WhatsApp (API Oficial)&quot;">​</a></h1><p>Gestione plantillas de Meta para iniciar conversaciones fuera de la ventana de 24h, disparos y nuevos chats.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p><strong>Canales →</strong> WhatsApp Business (Official) → <strong>Plantillas</strong></p></div><p>Sincronice el estado desde Meta. Solo plantillas <strong>APPROVED</strong> se pueden usar en chat y <a href="/es/guide/chat/bulk-messages">disparos masivos</a>.</p><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/channels/whatsapp-business">WhatsApp Business</a></li><li><a href="/es/guide/chat/bulk-messages">Disparos masivos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/channels/whatsapp-templates.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const whatsappTemplates = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  whatsappTemplates as default
};
