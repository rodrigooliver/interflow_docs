import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Security & API","description":"","frontmatter":{},"headers":[],"relativePath":"en/features/security.md","filePath":"en/features/security.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/features/security.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="security-api" tabindex="-1">Security &amp; API <a class="header-anchor" href="#security-api" aria-label="Permalink to &quot;Security &amp; API&quot;">​</a></h1><p>Granular permissions, API keys, and org isolation best practices.</p><h2 id="guides" tabindex="-1">Guides <a class="header-anchor" href="#guides" aria-label="Permalink to &quot;Guides&quot;">​</a></h2><ul><li><a href="/en/guide/settings/">Settings</a></li><li><a href="/en/guide/teams/">Teams</a></li><li><a href="/en/guide/integrations/api-keys">API keys</a></li><li><a href="/en/api/">API intro</a></li><li><a href="/en/api/authentication">API authentication</a></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/features/security.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const security = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  security as default
};
