import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Tags","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/chat/tags.md","filePath":"en/guide/chat/tags.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/chat/tags.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tags" tabindex="-1">Tags <a class="header-anchor" href="#tags" aria-label="Permalink to &quot;Tags&quot;">​</a></h1><p>Color labels to organize chats, customers, and automations.</p><div class="tip custom-block"><p class="custom-block-title">Access</p><p>Sidebar → <strong>Tags</strong>.</p></div><p>Create tags with <strong>name</strong> and <strong>color</strong>. Use them in inbox filters and <a href="/en/guide/chat/bulk-messages">bulk campaigns</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Deleting a tag does <strong>not</strong> strip historical associations from messages/prompts.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/chat/tags.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const tags = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  tags as default
};
