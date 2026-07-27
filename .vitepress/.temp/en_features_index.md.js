import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Features","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/index.md","filePath":"en/features/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h1><p>Explore Interflow capabilities. Use the <strong>left menu</strong> to browse by area.</p><h2 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-label="Permalink to &quot;Overview&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Feature</th><th>What it does</th></tr></thead><tbody><tr><td><a href="/en/features/channels">Multi-Channel</a></td><td>WhatsApp, Instagram, Facebook and Email in one inbox</td></tr><tr><td><a href="/en/features/chat">Chat &amp; Support</a></td><td>Inbox, tags, bulk messages, shortcuts and internal chat</td></tr><tr><td><a href="/en/features/automation">Automation &amp; AI</a></td><td>Visual flows, AI agents and integrations</td></tr><tr><td><a href="/en/features/crm">CRM &amp; Customers</a></td><td>Profiles, custom fields and Kanban funnels</td></tr><tr><td><a href="/en/features/schedule">Schedule</a></td><td>Calendar, reminders, silent flows and booking</td></tr><tr><td><a href="/en/features/hr">HR / Time Clock</a></td><td>Punch, geofence, hour bank and payroll</td></tr><tr><td><a href="/en/features/documents">Documents</a></td><td>Templates with variables and conditionals</td></tr><tr><td><a href="/en/features/financial">Financial</a></td><td>Income, expenses, cashiers and categories</td></tr><tr><td><a href="/en/features/billing">Billing</a></td><td>Contracts, installments, splits and Asaas</td></tr><tr><td><a href="/en/features/pos">POS</a></td><td>Sales, products, orders, inventory and tables</td></tr><tr><td><a href="/en/features/utm">UTM</a></td><td>Campaigns, leads, forms and pixels</td></tr><tr><td><a href="/en/features/medical">Medical (EMR)</a></td><td>Patients, consultations, records and prescriptions</td></tr><tr><td><a href="/en/features/reports">Reports</a></td><td>Agent/team volume and exports</td></tr><tr><td><a href="/en/features/partner">Partner Portal</a></td><td>Organizations, plans, commissions and wallet</td></tr><tr><td><a href="/en/features/security">Security &amp; API</a></td><td>Granular permissions and API keys</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Need step-by-step?</p><p>The <strong>Guides</strong> cover full setup and usage. Each feature page links to the detailed docs.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
