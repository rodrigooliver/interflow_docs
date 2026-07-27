import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Recursos","description":"","frontmatter":{},"headers":[],"relativePath":"features/index.md","filePath":"features/index.md","lastUpdated":1784357915000}');
const _sfc_main = { name: "features/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="recursos" tabindex="-1">Recursos <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos&quot;">​</a></h1><p>Conheça os recursos da plataforma Interflow. Use o <strong>menu à esquerda</strong> para navegar por área.</p><h2 id="visao-geral" tabindex="-1">Visão geral <a class="header-anchor" href="#visao-geral" aria-label="Permalink to &quot;Visão geral&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Recurso</th><th>O que faz</th></tr></thead><tbody><tr><td><a href="/features/channels">Atendimento Multicanal</a></td><td>WhatsApp, Instagram, Facebook e Email em uma caixa de entrada</td></tr><tr><td><a href="/features/chat">Chat e Atendimento</a></td><td>Inbox, tags, disparos em massa, atalhos e chat interno</td></tr><tr><td><a href="/features/automation">Automação e IA</a></td><td>Fluxos visuais, agentes IA e integrações</td></tr><tr><td><a href="/features/crm">CRM e Clientes</a></td><td>Perfis, campos personalizados e funis Kanban</td></tr><tr><td><a href="/features/schedule">Agenda</a></td><td>Calendário, lembretes, fluxos silenciosos e booking</td></tr><tr><td><a href="/features/hr">RH / Ponto</a></td><td>Cartão ponto, geofence, banco de horas e folha</td></tr><tr><td><a href="/features/documents">Documentos</a></td><td>Modelos com variáveis e condicionais</td></tr><tr><td><a href="/features/financial">Financeiro</a></td><td>Receitas, despesas, caixas e categorias</td></tr><tr><td><a href="/features/billing">Cobrança</a></td><td>Contratos, parcelas, splits e Asaas</td></tr><tr><td><a href="/features/pos">PDV</a></td><td>Vendas, produtos, pedidos, estoque e mesas</td></tr><tr><td><a href="/features/utm">UTM</a></td><td>Campanhas, leads, formulários e pixels</td></tr><tr><td><a href="/features/medical">Médico (EMR)</a></td><td>Pacientes, consultas, prontuários e receitas</td></tr><tr><td><a href="/features/reports">Relatórios</a></td><td>Volume por agente/equipe e exportações</td></tr><tr><td><a href="/features/partner">Portal do Parceiro</a></td><td>Organizações, planos, comissões e wallet</td></tr><tr><td><a href="/features/security">Segurança e API</a></td><td>Permissões granulares e chaves de API</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Prefere o passo a passo?</p><p>Os <strong>Guias</strong> trazem instruções detalhadas de configuração e uso. Em cada recurso há links para a documentação completa.</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("features/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  index as default
};
