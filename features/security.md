# Segurança e API

Controle quem acessa o quê com permissões granulares, perfis de usuário, equipes e chaves de API — com boas práticas de isolamento por organização e LGPD.

## Para que serve

- Donos e administradores que configuram a organização, equipes e integrações
- Gestores que organizam rodízio de atendimento e supervisão por equipe
- Agentes com acesso limitado (dados ocultos, filtros restritos)
- Desenvolvedores que integram sistemas via API e webhooks

## O que você pode fazer

- Configurar organização: nome, logo, timezone, idioma e preferências de atendimento
- Definir perfis granulares: owner, admin, manager, agent, agent_limited, financial, sales, medical_*
- Ocultar dados de contato de agentes e restringir visibilidade do CRM por equipe (LGPD)
- Gerenciar [equipes](/guide/teams/) com líderes, fluxo automático ao transferir e rodízio inteligente
- Configurar rodízio com gatilhos, modos auto-atender/reservar, fallback, horários e plantão
- Conectar integrações: [OpenAI](/guide/integrations/openai), [DeepSeek](/guide/integrations/deepseek), [ElevenLabs](/guide/integrations/elevenlabs), [Minimax](/guide/integrations/minimax), [Firecrawl](/guide/integrations/firecrawl) e [S3](/guide/integrations/s3)
- Gerar [chaves de API](/guide/integrations/api-keys) para integração com a [API Interflow](/api/)
- Controlar visibilidade de canais e pausar fluxos ao assumir atendimento manualmente

## Como se conecta

- **[Chat e Atendimento](/features/chat)** — permissões de canal, ocultação de contatos, transferência por equipe
- **[CRM e Clientes](/features/crm)** — controle de acesso por equipe e dados sensíveis
- **[Automação e IA](/features/automation)** — integrações de IA, TTS e webhooks
- **[Relatórios](/features/reports)** — visibilidade de métricas conforme perfil

## Guias

- [Configurações](/guide/settings/)
- [Equipes](/guide/teams/)
- [Chaves de API](/guide/integrations/api-keys)
- [API — introdução](/api/)
- [Autenticação da API](/api/authentication)
