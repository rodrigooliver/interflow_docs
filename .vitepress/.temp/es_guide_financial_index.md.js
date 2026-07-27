import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Módulo Financiero","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/financial/index.md","filePath":"es/guide/financial/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/financial/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="modulo-financiero" tabindex="-1">Módulo Financiero <a class="header-anchor" href="#modulo-financiero" aria-label="Permalink to &quot;Módulo Financiero&quot;">​</a></h1><p>Control de ingresos, gastos, cajas, categorías y métodos de pago.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>Financiero</strong>. El módulo <code>financial</code> debe estar habilitado.</p></div><h2 id="vision-general" tabindex="-1">Visión general <a class="header-anchor" href="#vision-general" aria-label="Permalink to &quot;Visión general&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Área</th><th>Función</th></tr></thead><tbody><tr><td><strong>Dashboard</strong></td><td>Saldos, resumen y atajos</td></tr><tr><td><strong>Transacciones</strong></td><td>Listar, filtrar, crear, marcar pagado/recibido</td></tr><tr><td><strong>Cajas</strong></td><td>Cuentas de caja y operadores</td></tr><tr><td><strong>Categorías</strong></td><td>Categorías de ingreso/gasto</td></tr><tr><td><strong>Métodos de pago</strong></td><td>Crédito, tasas, cuotas</td></tr><tr><td><strong>Informes</strong></td><td>Informes del módulo</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p><strong>Facturación</strong> (contratos/Asaas) es un módulo aparte — ver <a href="/es/guide/billing/">Facturación</a>.</p></div><h2 id="crear-una-transaccion" tabindex="-1">Crear una transacción <a class="header-anchor" href="#crear-una-transaccion" aria-label="Permalink to &quot;Crear una transacción&quot;">​</a></h2><ol><li>Abra <strong>Financiero → Transacciones</strong></li><li>Elija <strong>Ingreso</strong> o <strong>Gasto</strong></li><li>Complete: descripción, valor, categoría, vencimiento</li><li>Opcional: método, caja, cliente, notas, frecuencia/cuotas</li><li>Guarde</li></ol><h3 id="estados" tabindex="-1">Estados <a class="header-anchor" href="#estados" aria-label="Permalink to &quot;Estados&quot;">​</a></h3><p>Pendiente · Pagado/Recibido · Vencido · Cancelado</p><h2 id="cajas" tabindex="-1">Cajas <a class="header-anchor" href="#cajas" aria-label="Permalink to &quot;Cajas&quot;">​</a></h2><p>Cree cajas, agregue <strong>operadores</strong> y defina permisos por caja. Cada usuario solo ve las cajas donde es operador (salvo permisos especiales).</p><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/billing/">Facturación</a></li><li><a href="/es/guide/pos/">PDV</a></li><li><a href="/es/guide/reports/">Informes</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/financial/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
