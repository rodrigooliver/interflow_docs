import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Sales Funnels (CRM Kanban)","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/crm/funnels.md","filePath":"en/guide/crm/funnels.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/crm/funnels.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="sales-funnels-crm-kanban" tabindex="-1">Sales Funnels (CRM Kanban) <a class="header-anchor" href="#sales-funnels-crm-kanban" aria-label="Permalink to &quot;Sales Funnels (CRM Kanban)&quot;">​</a></h1><p>Track customers in visual pipelines with custom stages and stage-change automations.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>CRM</strong> → <strong>Funnels</strong>. .</p></div><h2 id="create-a-funnel" tabindex="-1">Create a funnel <a class="header-anchor" href="#create-a-funnel" aria-label="Permalink to &quot;Create a funnel&quot;">​</a></h2><ol><li>Open <strong>CRM → Funnels</strong></li><li><strong>New funnel</strong> → name + display mode (<code>sales</code>, <code>pipeline</code>, <code>support</code>, <code>hidden</code>)</li><li>Default stages are usually New / In progress / Done</li></ol><h2 id="stages" tabindex="-1">Stages <a class="header-anchor" href="#stages" aria-label="Permalink to &quot;Stages&quot;">​</a></h2><ul><li>Rename, reorder, add stages</li><li>Attach a <strong><code>crm_stage_change</code></strong> flow via <code>flow_start_id</code></li><li>Optional chart role / UTM event</li><li>Move customers between stages/funnels</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You cannot delete funnels/stages that still have customers. Move them first.</p></div><h2 id="kanban-usage" tabindex="-1">Kanban usage <a class="header-anchor" href="#kanban-usage" aria-label="Permalink to &quot;Kanban usage&quot;">​</a></h2><p>Drag cards between columns · Search across the funnel · <strong>Only mine</strong> · <strong>Hide finished</strong></p><h3 id="stage-automation" tabindex="-1">Stage automation <a class="header-anchor" href="#stage-automation" aria-label="Permalink to &quot;Stage automation&quot;">​</a></h3><ol><li>Create a flow typed <strong>CRM stage change</strong></li><li>Select it on the stage</li><li>Moving a customer into that stage starts the flow</li></ol><div class="danger custom-block"><p class="custom-block-title">Avoid loops</p><p>Stage-change flows must not use interactive input nodes or update the funnel in a way that re-enters the same stage.</p></div><h2 id="related" tabindex="-1">Related <a class="header-anchor" href="#related" aria-label="Permalink to &quot;Related&quot;">​</a></h2><ul><li><a href="/en/guide/crm/customers">Customers</a></li><li><a href="/en/guide/utm/">UTM</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/crm/funnels.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const funnels = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  funnels as default
};
