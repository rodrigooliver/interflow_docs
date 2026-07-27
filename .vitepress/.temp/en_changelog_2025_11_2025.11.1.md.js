import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.11.1","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/11/2025.11.1.md","filePath":"en/changelog/2025/11/2025.11.1.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/11/2025.11.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-11-1" tabindex="-1">v2025.11.1 <a class="header-anchor" href="#v2025-11-1" aria-label="Permalink to &quot;v2025.11.1&quot;">​</a></h1><p>Release date: <strong>November 04, 2025</strong></p><hr><h2 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-label="Permalink to &quot;New Features&quot;">​</a></h2><h3 id="support-reports" tabindex="-1">Support Reports <a class="header-anchor" href="#support-reports" aria-label="Permalink to &quot;Support Reports&quot;">​</a></h3><p>New report module to analyze team and agent performance.</p><h4 id="how-to-access" tabindex="-1">How to access? <a class="header-anchor" href="#how-to-access" aria-label="Permalink to &quot;How to access?&quot;">​</a></h4><ol><li>Access <strong>Reports</strong> in the sidebar</li><li>Navigate to the <strong>&quot;Support&quot;</strong> tab</li><li>Select the desired period</li><li>View metrics by team or individual agent</li></ol><h4 id="available-metrics" tabindex="-1">Available metrics: <a class="header-anchor" href="#available-metrics" aria-label="Permalink to &quot;Available metrics:&quot;">​</a></h4><ul><li>📊 Average response time</li><li>📈 Resolution rate</li><li>⏱️ Average support time</li><li>📉 Support volume by period</li></ul><hr><h3 id="json-to-text-conversion" tabindex="-1">JSON to Text Conversion <a class="header-anchor" href="#json-to-text-conversion" aria-label="Permalink to &quot;JSON to Text Conversion&quot;">​</a></h3><p>Display formatted values instead of raw JSON in custom fields and forms.</p><h4 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h4><ul><li>System automatically identifies JSON values</li><li>Displays human-readable format</li><li>Keeps raw JSON for exports</li></ul><hr><h3 id="deployment-mode" tabindex="-1">Deployment Mode <a class="header-anchor" href="#deployment-mode" aria-label="Permalink to &quot;Deployment Mode&quot;">​</a></h3><p>New option to schedule deployments and batch updates.</p><h4 id="features" tabindex="-1">Features: <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features:&quot;">​</a></h4><ul><li>📅 Scheduled deployments</li><li>🔄 Batch updates</li><li>⚠️ Impact notifications</li></ul><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Better operational visibility</li><li>✅ Easier data reading</li><li>✅ Controlled updates</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/11/2025.11.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_11_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_11_1 as default
};
