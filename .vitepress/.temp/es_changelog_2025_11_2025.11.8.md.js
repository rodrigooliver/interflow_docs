import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.8","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.8.md","filePath":"es/changelog/2025/11/2025.11.8.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.8.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-8" tabindex="-1">v2025.11.8 <a class="header-anchor" href="#v2025-11-8" aria-label="Permalink to &quot;v2025.11.8&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>14 de Noviembre de 2025</strong></p><hr><h2 id="nueva-funcionalidad" tabindex="-1">Nueva Funcionalidad <a class="header-anchor" href="#nueva-funcionalidad" aria-label="Permalink to &quot;Nueva Funcionalidad&quot;">​</a></h2><h3 id="integracion-con-facebook-messenger" tabindex="-1">Integración con Facebook Messenger <a class="header-anchor" href="#integracion-con-facebook-messenger" aria-label="Permalink to &quot;Integración con Facebook Messenger&quot;">​</a></h3><p>Conecta tu página de Facebook para recibir y responder mensajes.</p><h4 id="¿como-conectar" tabindex="-1">¿Cómo conectar? <a class="header-anchor" href="#¿como-conectar" aria-label="Permalink to &quot;¿Cómo conectar?&quot;">​</a></h4><ol><li>Accede a <strong>Canales</strong> → <strong>Agregar Canal</strong></li><li>Selecciona <strong>Facebook Messenger</strong></li><li>Haz clic en <strong>&quot;Conectar con Facebook&quot;</strong></li><li>Inicia sesión en tu cuenta de Facebook</li><li>Selecciona la página a conectar</li><li>Otorga los permisos necesarios</li><li>El canal es creado y listo para usar</li></ol><h4 id="recursos" tabindex="-1">Recursos: <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos:&quot;">​</a></h4><ul><li>💬 Recibe mensajes en tiempo real</li><li>📎 Envía y recibe adjuntos</li><li>👤 Identificación automática del cliente</li><li>🔄 Sincronización de mensajes</li><li>📊 Historial completo preservado</li></ul><h4 id="requisitos" tabindex="-1">Requisitos: <a class="header-anchor" href="#requisitos" aria-label="Permalink to &quot;Requisitos:&quot;">​</a></h4><ul><li>Página de Facebook con mensajes activados</li><li>Permisos de administrador en la página</li><li>Cuenta de Facebook válida</li></ul><div class="tip custom-block"><p class="custom-block-title">Consejo</p><p>Puedes conectar múltiples páginas, cada una se convierte en un canal separado.</p></div><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Atención de Messenger centralizada</li><li>✅ Sin cambiar entre apps</li><li>✅ Usa todos los recursos de Interflow</li><li>✅ IA y automatizaciones funcionan con Messenger</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.8.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_8 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_8 as default
};
