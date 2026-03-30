# Março 2026

Atualizações do mês de março de 2026.

## Versões

| Versão | Data | Destaques |
|--------|------|-----------|
| [2026.3.8](/changelog/2026/03/2026.3.8) | 30/03 | **Marcar lida no WhatsApp ao resolver (WAHA)** e **pausar fluxo ao resolver** – Opção em Configurações; leitura no WhatsApp ao finalizar; pausa automática de fluxo como em `pause-flow` |
| [2026.3.7](/changelog/2026/03/2026.3.7) | 25/03 | **Encaminhar mensagens e mensagem inicial tipada** – Encaminhe no chat para novo atendimento; API aceita texto ou mídia por URL; atendimento automático ao criar com mensagem inicial; toast para abrir a nova conversa |
| [2026.3.6](/changelog/2026/03/2026.3.6) | 24/03 | **Base de Conhecimento para Agente IA** – Cadastre documentos internos que a IA consulta automaticamente durante os atendimentos, reduzindo tokens e melhorando a precisão |
| [2026.3.5](/changelog/2026/03/2026.3.5) | 24/03 | **Bloquear Mídias em Grupos** – Configure para não armazenar fotos, vídeos, áudios e documentos em grupos WhatsApp e economize espaço |
| [2026.3.4](/changelog/2026/03/2026.3.4) | 23/03 | **Relatórios de Volume** – Acompanhe mensagens por atendente e por equipe, com gráfico, filtros de período e impressão |
| [2026.3.3](/changelog/2026/03/2026.3.3) | 20/03 | **Seleção de Equipe** – Escolha a equipe ao iniciar conversa individual, em campanhas ou via API |
| [2026.3.2](/changelog/2026/03/2026.3.2) | 16/03 | **Grupos WhatsApp (WAHA)** – Adicionar participante como cliente, excluir mensagens, foto do grupo, lista de participantes |
| [2026.3.1](/changelog/2026/03/2026.3.1) | 12/03 | **Módulo de Cobrança (Billing)** – Contratos, splits, recebedores, templates, gateway Asaas e baixa manual |

---

## Resumo do Mês

### ✨ Novas Funcionalidades (8)
- **Marcar lida no WhatsApp ao resolver e pausar fluxo ao resolver** – Configuração opcional em Atendimento para enviar leitura no WhatsApp (WAHA) ao finalizar ou marcar como resolvido; pausa automática de sessão de fluxo equivalente a `POST /pause-flow`
- **Encaminhar mensagens e mensagem inicial tipada** – Encaminhe mensagens do chat para um novo contato/canal; `POST /chat/create` aceita `initialMessage` como string ou objeto (texto, imagem, vídeo, áudio, documento com URL HTTPS); ao criar com mensagem inicial, o sistema pode atender automaticamente ou adicionar você como colaborador; no encaminhamento, toast com **Ir para conversa** em vez de redirecionar na hora
- **Base de Conhecimento para Agente IA** – Espaço dedicado para cadastrar documentos internos (políticas, horários, FAQs, etc.) que a IA consulta automaticamente durante os atendimentos via RAG híbrido (embeddings vetoriais + busca por palavras-chave). Cada documento vira uma ferramenta automática, sem configuração adicional
- **Bloquear Mídias em Grupos** – Opção para não armazenar fotos, vídeos, áudios e documentos em grupos WhatsApp, economizando espaço do plano e reduzindo risco de custos extras
- **Relatórios de Volume de Mensagens** – Novo módulo com visão por atendente e por equipe: gráfico de barras/linhas, filtros de período flexíveis (dia/semana/mês/ano/específico), cards de resumo clicáveis e impressão com cabeçalho automático. Acesso restrito a donos, admins e gerentes
- **Seleção de Equipe ao Iniciar Conversa** – Escolha a equipe responsável no momento da criação do atendimento, seja individualmente, em campanhas ou via API. O sistema segue uma ordem automática de fallback quando nenhuma equipe é selecionada
- **Grupos WhatsApp (WAHA)** – Experiência completa em grupos externos: adicionar como cliente (menu da mensagem e lista de participantes), excluir mensagens (incluindo de outros), foto do grupo e modal de participantes
- **Módulo de Cobrança (Billing)** – Sistema financeiro completo com contratos, divisão de receita automática, templates, recebedores, relatório de repasses e integração Asaas

---

::: info 📝 Total
**8 releases** com **8 funcionalidades** neste mês!
:::
