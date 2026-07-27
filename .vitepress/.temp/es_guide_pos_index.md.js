import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"PDV (Punto de Venta)","description":"","frontmatter":{},"headers":[],"relativePath":"es/guide/pos/index.md","filePath":"es/guide/pos/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "es/guide/pos/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pdv-punto-de-venta" tabindex="-1">PDV (Punto de Venta) <a class="header-anchor" href="#pdv-punto-de-venta" aria-label="Permalink to &quot;PDV (Punto de Venta)&quot;">​</a></h1><p>Ventas de mostrador, pedidos, productos, inventario y mesas.</p><div class="tip custom-block"><p class="custom-block-title">Acceso</p><p>Menú → <strong>PDV</strong>. Requiere el módulo <code>pos</code>.</p></div><h2 id="vision-general" tabindex="-1">Visión general <a class="header-anchor" href="#vision-general" aria-label="Permalink to &quot;Visión general&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Área</th><th>Función</th></tr></thead><tbody><tr><td><strong>Panel</strong></td><td>KPIs y atajos</td></tr><tr><td><strong>Ventas</strong></td><td>Carrito, código de barras, pago</td></tr><tr><td><strong>Productos</strong></td><td>Catálogo, variantes, stock</td></tr><tr><td><strong>Pedidos</strong></td><td>Pedidos y presupuestos</td></tr><tr><td><strong>Caja</strong></td><td>Sesión de caja</td></tr><tr><td><strong>Inventario</strong></td><td>Niveles y movimientos</td></tr><tr><td><strong>Mesas</strong></td><td>Salón</td></tr><tr><td><strong>Configuración</strong></td><td>Tienda, recibo, pagos, mesas</td></tr></tbody></table><h2 id="flujo-tipico-de-venta" tabindex="-1">Flujo típico de venta <a class="header-anchor" href="#flujo-tipico-de-venta" aria-label="Permalink to &quot;Flujo típico de venta&quot;">​</a></h2><ol><li>Abra <strong>PDV → Ventas</strong></li><li>Agregue productos (búsqueda o código de barras)</li><li>Opcional: vincule <strong>cliente</strong> y/o <strong>mesa</strong></li><li><strong>Finalizar venta</strong> → elija pago → confirme</li></ol><h2 id="tipos-de-pedido" tabindex="-1">Tipos de pedido <a class="header-anchor" href="#tipos-de-pedido" aria-label="Permalink to &quot;Tipos de pedido&quot;">​</a></h2><p>PDV · Presupuesto · Entrega · Retiro · Consumo en el local</p><h2 id="relacionados" tabindex="-1">Relacionados <a class="header-anchor" href="#relacionados" aria-label="Permalink to &quot;Relacionados&quot;">​</a></h2><ul><li><a href="/es/guide/financial/">Financiero</a></li><li><a href="/es/guide/crm/customers">Clientes</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("es/guide/pos/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
