import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"v2025.10.1","description":"","frontmatter":{},"headers":[],"relativePath":"en/changelog/2025/10/2025.10.1.md","filePath":"en/changelog/2025/10/2025.10.1.md","lastUpdated":1784358336000}');
const _sfc_main = { name: "en/changelog/2025/10/2025.10.1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="v2025-10-1" tabindex="-1">v2025.10.1 <a class="header-anchor" href="#v2025-10-1" aria-label="Permalink to &quot;v2025.10.1&quot;">​</a></h1><p>Release date: <strong>October 25, 2025</strong></p><hr><h2 id="new-feature" tabindex="-1">New Feature <a class="header-anchor" href="#new-feature" aria-label="Permalink to &quot;New Feature&quot;">​</a></h2><h3 id="option-to-pause-or-keep-flow-when-attending" tabindex="-1">Option to Pause or Keep Flow When Attending <a class="header-anchor" href="#option-to-pause-or-keep-flow-when-attending" aria-label="Permalink to &quot;Option to Pause or Keep Flow When Attending&quot;">​</a></h3><p>When clicking &quot;Attend&quot; on a chat with active flow, you can now choose what to do.</p><h4 id="how-does-it-work" tabindex="-1">How does it work? <a class="header-anchor" href="#how-does-it-work" aria-label="Permalink to &quot;How does it work?&quot;">​</a></h4><p><strong>Setting in Settings:</strong></p><ul><li><strong>ENABLED</strong> ✅ = Always pauses automatically (no prompt)</li><li><strong>DISABLED</strong> ❌ = Asks what to do when there&#39;s active flow</li></ul><h4 id="options-modal" tabindex="-1">Options modal: <a class="header-anchor" href="#options-modal" aria-label="Permalink to &quot;Options modal:&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Option</th><th>What happens</th></tr></thead><tbody><tr><td>🟡 <strong>Pause Flow and Attend</strong></td><td>Pauses flow, you take over</td></tr><tr><td>🔵 <strong>Continue Flow and Attend</strong></td><td>Keeps flow active</td></tr><tr><td>⚪ <strong>Cancel</strong></td><td>Does not attend</td></tr></tbody></table><h4 id="when-to-use-each-option" tabindex="-1">When to use each option? <a class="header-anchor" href="#when-to-use-each-option" aria-label="Permalink to &quot;When to use each option?&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Situation</th><th>Choice</th></tr></thead><tbody><tr><td>Confused/frustrated customer</td><td>🟡 Pause</td></tr><tr><td>Complex problem</td><td>🟡 Pause</td></tr><tr><td>Just want to supervise</td><td>🔵 Continue</td></tr><tr><td>Flow is going well</td><td>🔵 Continue</td></tr></tbody></table><div class="warning custom-block"><p class="custom-block-title">Attention</p><p>&quot;Continue Flow&quot; = Customer receives messages from you AND from the flow!</p></div><hr><h2 id="benefits" tabindex="-1">Benefits <a class="header-anchor" href="#benefits" aria-label="Permalink to &quot;Benefits&quot;">​</a></h2><ul><li>✅ Control over automations when attending</li><li>✅ Avoids customer confusion with duplicate messages</li><li>✅ Flexibility for each situation</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/changelog/2025/10/2025.10.1.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _2025_10_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  _2025_10_1 as default
};
