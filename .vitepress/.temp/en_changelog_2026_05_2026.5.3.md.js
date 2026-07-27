import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2026.5.3","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2026/05/2026.5.3.md","filePath":"en/changelog/2026/05/2026.5.3.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2026/05/2026.5.3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2026-5-3" tabindex="-1">v2026.5.3 <a class="header-anchor" href="#v2026-5-3" aria-label="Permalink to &quot;v2026.5.3&quot;">​</a></h1><p>Release date: <strong>May 22, 2026</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="crm-stage-transfer-between-funnels" tabindex="-1">CRM Stage Transfer Between Funnels <a class="header-anchor" href="#crm-stage-transfer-between-funnels" aria-label="Permalink to &quot;CRM Stage Transfer Between Funnels&quot;">​</a></h3><p>You can now transfer an entire stage — along with all customers in it — from one sales funnel to another. This simplifies process adjustments and sales restructuring without moving customers one by one.</p><h4 id="what-is-it-for" tabindex="-1">What is it for? <a class="header-anchor" href="#what-is-it-for" aria-label="Permalink to &quot;What is it for?&quot;">​</a></h4><ul><li>Reorganize funnel structure when the sales process changes</li><li>Consolidate stages into another funnel without losing customers or history</li><li>Adapt funnels by team or business line with more flexibility</li><li>Preserve stage automations (<code>flow_start_id</code>, UTM conversion events)</li></ul><h4 id="how-to-use" tabindex="-1">How to use? <a class="header-anchor" href="#how-to-use" aria-label="Permalink to &quot;How to use?&quot;">​</a></h4><ol><li>Open <strong>CRM</strong> and select the funnel containing the target stage</li><li>Choose one of the options: <ul><li>In the stage column <strong>⋮ menu</strong>, click <strong>Transfer to another funnel</strong></li><li>Or open <strong>Manage Stages</strong> and click the transfer icon (⇄) next to the stage</li></ul></li><li>In the modal, confirm the stage name and the number of customers that will be migrated</li><li>Select the <strong>target funnel</strong> from the list (the current funnel is excluded)</li><li>Click <strong>Transfer</strong></li></ol><blockquote><p>💡 This action is only available when the organization has <strong>two or more funnels</strong>. The transferred stage is automatically added to the <strong>end</strong> of the target funnel.</p></blockquote><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Funnel reorganization without manual customer migration</li><li>✅ Customer stage history fully preserved</li><li>✅ Stage automations and settings maintained after transfer</li><li>✅ Remaining stage positions in the source funnel automatically reorganized</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2026/05/2026.5.3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2026_5_3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2026_5_3 as default
};
