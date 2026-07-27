import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"POS (Point of Sale)","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/pos/index.md","filePath":"en/guide/pos/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/pos/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="pos-point-of-sale" tabindex="-1">POS (Point of Sale) <a class="header-anchor" href="#pos-point-of-sale" aria-label="Permalink to &quot;POS (Point of Sale)&quot;">​</a></h1><p>Counter sales, orders, products, inventory, and tables — integrated with Interflow.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>POS</strong>. Requires the <code>pos</code> module.</p></div><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Area</th><th>Purpose</th></tr></thead><tbody><tr><td><strong>Dashboard</strong></td><td>KPIs and shortcuts</td></tr><tr><td><strong>Sales</strong></td><td>Cart, barcode, payment</td></tr><tr><td><strong>Products</strong></td><td>Catalog, variants, stock</td></tr><tr><td><strong>Orders</strong></td><td>Orders and quotes</td></tr><tr><td><strong>Cashier</strong></td><td>POS shift session</td></tr><tr><td><strong>Inventory</strong></td><td>Stock levels/movements</td></tr><tr><td><strong>Tables</strong></td><td>Dining room</td></tr><tr><td><strong>Settings</strong></td><td>Store, receipt, payments, tables</td></tr></tbody></table><h2 id="typical-sale-flow" tabindex="-1">Typical sale flow <a class="header-anchor" href="#typical-sale-flow" aria-label="Permalink to &quot;Typical sale flow&quot;">​</a></h2><ol><li>Open <strong>POS → Sales</strong></li><li>Add products (search or barcode)</li><li>Optional: link <strong>customer</strong> and/or <strong>table</strong></li><li><strong>Checkout</strong> → choose payment method → confirm</li></ol><h2 id="order-types" tabindex="-1">Order types <a class="header-anchor" href="#order-types" aria-label="Permalink to &quot;Order types&quot;">​</a></h2><p>POS · Quote · Delivery · Pickup · Dine-in</p><h2 id="restaurant-vs-retail" tabindex="-1">Restaurant vs retail <a class="header-anchor" href="#restaurant-vs-retail" aria-label="Permalink to &quot;Restaurant vs retail&quot;">​</a></h2><ul><li><strong>Restaurant:</strong> enable table service in settings; use tables + dine-in orders</li><li><strong>Retail:</strong> fast checkout with barcode/SKU</li></ul><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/financial/">Financial</a></li><li><a href="/en/guide/crm/customers">Customers</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/pos/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
