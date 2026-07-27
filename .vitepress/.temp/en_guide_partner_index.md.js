import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Partner Portal","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/partner/index.md","filePath":"en/guide/partner/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/partner/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="partner-portal" tabindex="-1">Partner Portal <a class="header-anchor" href="#partner-portal" aria-label="Permalink to &quot;Partner Portal&quot;">​</a></h1><p>Manage resold organizations, plans, invoices, commissions, and Asaas wallet splits.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>Partner Portal</strong>. Only for partners with accepted program and <strong>active</strong> status.</p></div><h2 id="tabs" tabindex="-1">Tabs <a class="header-anchor" href="#tabs" aria-label="Permalink to &quot;Tabs&quot;">​</a></h2><p>Organizations · Invoices · Commissions · Wallet</p><h2 id="organizations-plans" tabindex="-1">Organizations &amp; plans <a class="header-anchor" href="#organizations-plans" aria-label="Permalink to &quot;Organizations &amp; plans&quot;">​</a></h2><p>Create orgs, attach plans, manage custom plans under <strong>Plans</strong>.</p><h2 id="wallet" tabindex="-1">Wallet <a class="header-anchor" href="#wallet" aria-label="Permalink to &quot;Wallet&quot;">​</a></h2><p>Set <code>asaas_wallet_id</code> in <strong>Wallet</strong>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Without a wallet, partner revenue split is <strong>not applied</strong>.</p></div><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/billing/">Billing</a></li><li><a href="/en/guide/settings/">Settings</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/partner/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
