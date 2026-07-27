import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Módulo médico (EMR)","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/medical/index.md","filePath":"es/guide/medical/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/medical/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modulo-medico-emr" tabindex="-1">Módulo médico (EMR) <a class="header-anchor" href="#modulo-medico-emr" aria-label="Permalink to &quot;Módulo médico (EMR)&quot;">​</a></h1><p>Historia clínica ligada al CRM: pacientes, consultas, recetas, certificados y plantillas.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>Médico</strong>. Requiere módulo <code>medical</code>.</p></div><div class="info custom-block"><p class="custom-block-title">Paciente = Cliente</p><p>Cada paciente es un <strong>cliente</strong> del CRM.</p></div><h2 id="areas" tabindex="-1">Áreas <a class="header-anchor" href="#areas" aria-label="Permalink to &quot;Áreas&quot;">​</a></h2><p>Consultas · Historias · Recetas · Certificados · Plantillas · Pacientes</p><h2 id="flujo-tipico" tabindex="-1">Flujo típico <a class="header-anchor" href="#flujo-tipico" aria-label="Permalink to &quot;Flujo típico&quot;">​</a></h2><ol><li>Localice/cree el paciente</li><li>Cree una <strong>consulta</strong></li><li>Registre la <strong>historia</strong></li><li>Emite <strong>receta</strong> / <strong>certificado</strong></li><li>Adjunte archivos</li></ol><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/crm/customers">Clientes</a></li><li><a href="/es/guide/schedule/">Agenda</a></li><li><a href="/es/guide/documents/">Documentos</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/medical/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
