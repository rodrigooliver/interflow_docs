import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Agendar","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ai-agents/tools/schedule.md","filePath":"guide/ai-agents/tools/schedule.md","lastUpdated":1784359757000}');
const _sfc_main = { name: "guide/ai-agents/tools/schedule.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="agendar" tabindex="-1">Agendar <a class="header-anchor" href="#agendar" aria-label="Permalink to &quot;Agendar&quot;">​</a></h1><p>Cria novos agendamentos diretamente pela conversa.</p><p><strong>Configuração:</strong></p><table tabindex="0"><thead><tr><th>Campo</th><th>Descrição</th></tr></thead><tbody><tr><td><strong>Agenda</strong></td><td>Selecione qual agenda utilizar</td></tr><tr><td><strong>Serviços</strong></td><td>Todos ou específicos</td></tr><tr><td><strong>Profissionais</strong></td><td>Todos ou específicos</td></tr><tr><td><strong>Operações</strong></td><td>Tipos de operação permitidos</td></tr></tbody></table><p><strong>Fluxo de agendamento:</strong></p><ol><li>Cliente solicita agendamento</li><li>IA verifica horários disponíveis</li><li>Cliente escolhe data/horário</li><li>IA confirma e registra o agendamento</li></ol><p><strong>Exemplo de uso:</strong></p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>👤 Cliente: Quero agendar uma consulta</span></span>
<span class="line"><span>🤖 IA: Claro! Temos horários disponíveis de segunda a sexta.</span></span>
<span class="line"><span>       Qual dia e horário você prefere?</span></span>
<span class="line"><span></span></span>
<span class="line"><span>👤 Cliente: Quinta às 14h</span></span>
<span class="line"><span>🤖 IA: ✅ Agendamento confirmado!</span></span>
<span class="line"><span>       📅 Quinta-feira, 26/12/2025 às 14:00</span></span>
<span class="line"><span>       Enviarei um lembrete 24h antes!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("guide/ai-agents/tools/schedule.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  schedule as default
};
