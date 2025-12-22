---
layout: home

hero:
  name: "Interflow"
  text: "Documentação Oficial"
  tagline: Plataforma completa de atendimento multicanal e CRM para sua empresa
  image:
    src: /hero-image.svg
    alt: Interflow
  actions:
    - theme: brand
      text: Começar Agora
      link: /guia/introducao
    - theme: alt
      text: API Reference
      link: /api/
    - theme: alt
      text: GitHub
      link: https://github.com/rodrigooliver/interflow

features:
  - icon: 💬
    title: Atendimento Multicanal
    details: WhatsApp Business, Instagram, Facebook Messenger e Email integrados em uma única plataforma. Centralize todos os seus canais de comunicação.
  - icon: 🤖
    title: Automação Inteligente
    details: Construa fluxos de atendimento automatizados com nosso editor visual drag-and-drop. Integre com IA para respostas inteligentes.
  - icon: 👥
    title: CRM Completo
    details: Gerencie seus clientes, acompanhe negócios em funis de venda, use campos personalizados e segmente sua base com tags.
  - icon: 📅
    title: Agendamentos
    details: Sistema completo de agendamentos com calendário, lembretes automáticos e integração com Google Calendar.
  - icon: 💰
    title: Gestão Financeira
    details: Controle receitas, despesas, transações e gere relatórios financeiros detalhados da sua operação.
  - icon: 🛒
    title: PDV Integrado
    details: Ponto de venda completo com gestão de produtos, vendas e integração com meios de pagamento.
  - icon: 📊
    title: Relatórios e Analytics
    details: Dashboards em tempo real, métricas de atendimento, performance da equipe e insights para tomada de decisão.
  - icon: 🌍
    title: Multi-idioma
    details: Suporte nativo para Português, Inglês e Espanhol. Interface adaptável ao idioma de sua preferência.
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #6366f1 30%, #a855f7);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #6366f1 50%, #a855f7 50%);
  --vp-home-hero-image-filter: blur(44px);
}

.VPHero .image-bg {
  opacity: 0.8;
}
</style>

---

## ⚠️ Documentação em Atualização

::: warning AVISO IMPORTANTE
Esta documentação está em fase de **atualização contínua**. Novas seções e conteúdos estão sendo adicionados regularmente. 

Se você encontrar alguma informação desatualizada ou tiver dúvidas, entre em contato conosco através do suporte.
:::

---

## 🚀 Início Rápido

Siga estes passos para começar a usar a Interflow:

<div class="tip custom-block" style="padding-top: 8px">

1. **Crie sua conta** - Acesse [app.interflow.chat](https://app.interflow.chat) e registre-se
2. **Configure sua organização** - Adicione informações da sua empresa
3. **Conecte um canal** - Integre WhatsApp, Instagram ou outro canal
4. **Convide sua equipe** - Adicione membros e defina permissões
5. **Comece a atender** - Receba e gerencie conversas

</div>

➡️ [Ver guia completo de introdução](/guia/introducao)

---

## 📱 Canais Suportados

| Canal | Status | Recursos |
|-------|--------|----------|
| WhatsApp Business API | ✅ Disponível | Mensagens, mídia, templates, catálogos |
| WhatsApp (WAHA/Evolution) | ✅ Disponível | Mensagens, mídia, grupos |
| Instagram Direct | ✅ Disponível | Mensagens, stories, mídia |
| Facebook Messenger | ✅ Disponível | Mensagens, mídia, automação |
| Email (IMAP/SMTP) | ✅ Disponível | Envio, recebimento, anexos |
| Telegram | 🔜 Em breve | - |
| SMS | 🔜 Em breve | - |

---

## 🎬 Vídeos e Tutoriais

::: info EM CONSTRUÇÃO
Área de vídeos tutoriais em desenvolvimento. Em breve teremos:

- **Vídeo de introdução** - Conheça a plataforma
- **Configuração de canais** - Passo a passo de integração
- **Construtor de fluxos** - Como criar automações
- **Gestão de equipes** - Configurando permissões
:::

<!-- Placeholder para vídeo -->
<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 60px; text-align: center; margin: 20px 0;">
  <span style="color: white; font-size: 48px;">▶️</span>
  <p style="color: white; margin-top: 16px; font-size: 18px;">Vídeo de Introdução (Em breve)</p>
</div>

---

## 📸 Screenshots da Plataforma

::: info EM CONSTRUÇÃO
Galeria de screenshots em desenvolvimento. Em breve você verá:

- Interface de chat
- Construtor de fluxos
- Dashboard de relatórios
- CRM e funis de venda
- Módulo financeiro
:::

<!-- Placeholder para screenshots -->
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 80px 20px; text-align: center;">
    <span style="font-size: 32px;">💬</span>
    <p style="color: #666; margin-top: 8px;">Interface de Chat</p>
  </div>
  <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 80px 20px; text-align: center;">
    <span style="font-size: 32px;">🔧</span>
    <p style="color: #666; margin-top: 8px;">Construtor de Fluxos</p>
  </div>
  <div style="background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); border-radius: 12px; padding: 80px 20px; text-align: center;">
    <span style="font-size: 32px;">📊</span>
    <p style="color: #666; margin-top: 8px;">Dashboard</p>
  </div>
</div>

---

## 💻 Tecnologias

A Interflow é construída com tecnologias modernas e robustas:

| Frontend | Backend | Infraestrutura |
|----------|---------|----------------|
| React 18 | Node.js | Supabase |
| TypeScript | Express.js | PostgreSQL |
| Vite | WebSocket | Docker |
| Tailwind CSS | Redis | Kubernetes |
| ReactFlow | Bull Queue | AWS |

---

## 📞 Suporte

Precisa de ajuda? Temos várias formas de suporte:

- 📧 **Email**: suporte@interflow.chat
- 💬 **Chat**: Disponível na plataforma
- 📖 **Documentação**: Você está aqui!
- 🐛 **Issues**: [GitHub Issues](https://github.com/rodrigooliver/interflow/issues)

