import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.6","description":"","frontmatter":{},"headers":[],"relativePath":"es/changelog/2025/11/2025.11.6.md","filePath":"es/changelog/2025/11/2025.11.6.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "es/changelog/2025/11/2025.11.6.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-6" tabindex="-1">v2025.11.6 <a class="header-anchor" href="#v2025-11-6" aria-label="Permalink to &quot;v2025.11.6&quot;">​</a></h1><p>Fecha de lanzamiento: <strong>12 de Noviembre de 2025</strong></p><hr><h2 id="nuevas-funcionalidades" tabindex="-1">Nuevas Funcionalidades <a class="header-anchor" href="#nuevas-funcionalidades" aria-label="Permalink to &quot;Nuevas Funcionalidades&quot;">​</a></h2><h3 id="eliminacion-de-mensajes-privados" tabindex="-1">Eliminación de Mensajes Privados <a class="header-anchor" href="#eliminacion-de-mensajes-privados" aria-label="Permalink to &quot;Eliminación de Mensajes Privados&quot;">​</a></h3><p>Elimina notas privadas que fueron enviadas por error.</p><h4 id="¿como-eliminar" tabindex="-1">¿Cómo eliminar? <a class="header-anchor" href="#¿como-eliminar" aria-label="Permalink to &quot;¿Cómo eliminar?&quot;">​</a></h4><ol><li>Pasa el mouse sobre el mensaje privado</li><li>Haz clic en el menú (⋮)</li><li>Selecciona <strong>&quot;Eliminar mensaje&quot;</strong></li><li>Confirma la eliminación</li></ol><h4 id="reglas" tabindex="-1">Reglas: <a class="header-anchor" href="#reglas" aria-label="Permalink to &quot;Reglas:&quot;">​</a></h4><ul><li>✅ Solo el autor puede eliminar</li><li>✅ Admins pueden eliminar cualquiera</li><li>❌ Mensajes del cliente no pueden ser eliminados</li><li>🕐 Log preservado para auditoría</li></ul><hr><h3 id="etapa-del-embudo-al-salir" tabindex="-1">Etapa del Embudo al Salir <a class="header-anchor" href="#etapa-del-embudo-al-salir" aria-label="Permalink to &quot;Etapa del Embudo al Salir&quot;">​</a></h3><p>Define a qué etapa del embudo va el cliente al salir de la atención.</p><h4 id="¿como-configurar" tabindex="-1">¿Cómo configurar? <a class="header-anchor" href="#¿como-configurar" aria-label="Permalink to &quot;¿Cómo configurar?&quot;">​</a></h4><ol><li>Accede a <strong>Configuraciones</strong> → <strong>Embudos</strong></li><li>Localiza la opción <strong>&quot;Etapa predeterminada al salir&quot;</strong></li><li>Selecciona la etapa deseada para cada embudo</li><li>Guarda</li></ol><h4 id="comportamiento" tabindex="-1">Comportamiento: <a class="header-anchor" href="#comportamiento" aria-label="Permalink to &quot;Comportamiento:&quot;">​</a></h4><ul><li>Cuando el agente finaliza la atención → Cliente se mueve a la etapa definida</li><li>Si el flujo termina → También aplica la etapa configurada</li><li>Respeta movimientos manuales (no sobrescribe)</li></ul><hr><h2 id="beneficios" tabindex="-1">Beneficios <a class="header-anchor" href="#beneficios" aria-label="Permalink to &quot;Beneficios&quot;">​</a></h2><ul><li>✅ Comunicación interna limpia</li><li>✅ Organización automática del embudo</li><li>✅ Pipeline visual siempre actualizado</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/changelog/2025/11/2025.11.6.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_6 as default
};
