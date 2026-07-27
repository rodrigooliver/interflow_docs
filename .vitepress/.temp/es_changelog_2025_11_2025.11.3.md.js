import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.3","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.3.md","filePath":"es/changelog/2025/11/2025.11.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-3" tabindex="-1">v2025.11.3 <a class="header-anchor" href="#v2025-11-3" aria-label="Permalink to &quot;v2025.11.3&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>06 de Noviembre de 2025</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="mensajes-de-recordatorio-automatico-24h-48h" tabindex="-1">Mensajes de Recordatorio Automático 24h/48h <a class="header-anchor" href="#mensajes-de-recordatorio-automatico-24h-48h" aria-label="Permalink to &quot;Mensajes de Recordatorio Automático 24h/48h&quot;">​</a></h3><p>Configura recordatorios automáticos para ser enviados antes de las citas.</p><h4 id="¿como-configurar" tabindex="-1">¿Cómo configurar? <a class="header-anchor" href="#¿como-configurar" aria-label="Permalink to &quot;¿Cómo configurar?&quot;">​</a></h4><ol><li>Accede a <strong>Configuraciones</strong> → <strong>Citas</strong></li><li>Localiza la sección <strong>&quot;Recordatorios Automáticos&quot;</strong></li><li>Activa las opciones deseadas: <ul><li>✅ 24 horas antes</li><li>✅ 48 horas antes</li></ul></li><li>Personaliza el modelo del mensaje de recordatorio</li><li>Guarda</li></ol><h4 id="recursos" tabindex="-1">Recursos: <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos:&quot;">​</a></h4><ul><li>⏰ Programación automática</li><li>📝 Mensajes personalizables</li><li>🔄 Respeta el estado de la cita (solo confirmadas)</li><li>❌ No envía si está cancelada</li></ul><hr><h3 id="configuracion-rapida-restringida-para-administradores" tabindex="-1">Configuración Rápida Restringida para Administradores <a class="header-anchor" href="#configuracion-rapida-restringida-para-administradores" aria-label="Permalink to &quot;Configuración Rápida Restringida para Administradores&quot;">​</a></h3><p>El asistente de Configuración Rápida ahora es visible solo para perfiles de administrador.</p><h4 id="¿quien-tiene-acceso" tabindex="-1">¿Quién tiene acceso? <a class="header-anchor" href="#¿quien-tiene-acceso" aria-label="Permalink to &quot;¿Quién tiene acceso?&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Perfil</th><th>Acceso</th></tr></thead><tbody><tr><td>Propietario</td><td>✅ Sí</td></tr><tr><td>Admin</td><td>✅ Sí</td></tr><tr><td>Agente</td><td>❌ No</td></tr></tbody></table><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Menos ausencias</li><li>✅ Automatización sin intervención</li><li>✅ Configuraciones críticas protegidas</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_3 as default
};
