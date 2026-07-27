import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Integración AWS S3","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/integrations/s3.md","filePath":"es/guide/integrations/s3.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/integrations/s3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="integracion-aws-s3" tabindex="-1">Integración AWS S3 <a class="header-anchor" href="#integracion-aws-s3" aria-label="Permalink to &quot;Integración AWS S3&quot;">​</a></h1><p>Use su propio bucket S3 para archivos de la organización.</p><ol><li>Cree bucket + credenciales IAM (mínimo privilegio)</li><li><strong>Configuración → Integraciones → AWS S3</strong></li><li>Informe región/endpoint, bucket y claves → Guardar</li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/integrations/s3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const s3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  s3 as default
};
