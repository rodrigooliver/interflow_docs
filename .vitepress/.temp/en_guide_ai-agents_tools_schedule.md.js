import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Schedule","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/ai-agents/tools/schedule.md","filePath":"en/guide/ai-agents/tools/schedule.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "en/guide/ai-agents/tools/schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="schedule" tabindex="-1">Schedule <a class="header-anchor" href="#schedule" aria-label="Permalink to &quot;Schedule&quot;">​</a></h1><p>Creates new appointments directly through conversation.</p><p><strong>Configuration:</strong></p><table tabindex="0"><thead><tr><th>Field</th><th>Description</th></tr></thead><tbody><tr><td><strong>Calendar</strong></td><td>Select which calendar to use</td></tr><tr><td><strong>Services</strong></td><td>All or specific</td></tr><tr><td><strong>Professionals</strong></td><td>All or specific</td></tr><tr><td><strong>Operations</strong></td><td>Allowed operation types</td></tr></tbody></table><p><strong>Appointment flow:</strong></p><ol><li>Customer requests appointment</li><li>AI checks available times</li><li>Customer chooses date/time</li><li>AI confirms and registers the appointment</li></ol><p><strong>Usage example:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Customer: I want to schedule an appointment</span></span>
<span class="line"><span>🤖 AI: Sure! We have availability Monday through Friday.</span></span>
<span class="line"><span>       What day and time do you prefer?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 Customer: Thursday at 2pm</span></span>
<span class="line"><span>🤖 AI: ✅ Appointment confirmed!</span></span>
<span class="line"><span>       📅 Thursday, December 26, 2025 at 2:00 PM</span></span>
<span class="line"><span>       I&#39;ll send a reminder 24h before!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/ai-agents/tools/schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  schedule as default
};
