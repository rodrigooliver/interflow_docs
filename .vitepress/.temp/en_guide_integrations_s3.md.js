import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"AWS S3 Integration","description":"","frontmatter":{},"headers":[],"relativePath":"en/guide/integrations/s3.md","filePath":"en/guide/integrations/s3.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "en/guide/integrations/s3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="aws-s3-integration" tabindex="-1">AWS S3 Integration <a class="header-anchor" href="#aws-s3-integration" aria-label="Permalink to &quot;AWS S3 Integration&quot;">​</a></h1><p>Use your own S3 bucket for organization file storage when enabled.</p><ol><li>Create a bucket + IAM credentials (least privilege)</li><li><strong>Settings → Integrations → AWS S3</strong></li><li>Enter region/endpoint, bucket, and keys → Save</li></ol><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Never expose access keys in public client apps.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("en/guide/integrations/s3.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const s3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  s3 as default
};
