import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Confirm Appointment","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/confirm-schedule.md","filePath":"en/guide/ai-agents/tools/confirm-schedule.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/confirm-schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="confirm-appointment" tabindex="-1">Confirm Appointment <a class="header-anchor" href="#confirm-appointment" aria-label="Permalink to &quot;Confirm Appointment&quot;">​</a></h1><p>Confirms existing customer appointments.</p><p><strong>Configuration:</strong></p><ul><li><strong>Calendar</strong>: Select which calendar to query</li></ul><p><strong>Behavior:</strong></p><ul><li>AI identifies customer&#39;s pending appointments</li><li>Presents details for confirmation</li><li>Marks as confirmed after acceptance</li></ul><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>🤖 AI: Hello! I see you have an appointment tomorrow at 10am.</span></span>
<span class="line"><span>       Can I confirm your attendance?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 Customer: Yes, confirmed</span></span>
<span class="line"><span>🤖 AI: Perfect! Your appointment is confirmed. See you tomorrow! ✅</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/confirm-schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const confirmSchedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  confirmSchedule as default
};
