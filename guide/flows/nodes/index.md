# Tipos de Nós do Construtor de Fluxos

Esta seção detalha todos os tipos de nós disponíveis no Construtor de Fluxos da Interflow, suas funcionalidades e como configurá-los.

## Nó Inicial

- [Start (Início)](/guide/flows/nodes/start) - Ponto de entrada do fluxo

## Nós de Envio

Nós para enviar mensagens e conteúdo ao cliente:

- [Mensagem de Texto](/guide/flows/nodes/text) - Envia texto, listas e links
- [Enviar Áudio](/guide/flows/nodes/audio) - Envia arquivos de áudio
- [Enviar Imagem](/guide/flows/nodes/image) - Envia imagens com legenda
- [Enviar Vídeo](/guide/flows/nodes/video) - Envia vídeos
- [Enviar Documento](/guide/flows/nodes/document) - Envia PDFs e documentos
- [Enviar Email](/guide/flows/nodes/email) - Envia emails via SMTP

## Nós de Recebimento

Nós para capturar respostas do cliente:

- [Aguardar Resposta (Input)](/guide/flows/nodes/input) - Captura texto ou opções

## Nós de Controle de Fluxo

Nós para controlar a lógica e direcionamento:

- [Delay](/guide/flows/nodes/delay) - Pausa a execução
- [Condição](/guide/flows/nodes/condition) - Cria ramificações condicionais
- [Aleatório (Random)](/guide/flows/nodes/random) - Distribui aleatoriamente
- [Pular Para (Jump To)](/guide/flows/nodes/jump-to) - Redireciona para outro nó

## Nós de Dados

Nós para manipular variáveis e dados:

- [Definir Variável](/guide/flows/nodes/variable) - Define ou calcula valores
- [Atualizar Cliente](/guide/flows/nodes/update-customer) - Atualiza dados do cliente
- [Requisição HTTP](/guide/flows/nodes/request) - Chama APIs externas

## Nós de Ações

Nós para executar ações automatizadas:

- [Criar Tarefa](/guide/flows/nodes/create-task) - Cria tarefas automaticamente

## Nós de IA

Nós para integração com inteligência artificial:

- [Agente IA](/guide/flows/nodes/agenteia) - Executa agente pré-configurado
- [OpenAI](/guide/flows/nodes/openai) - Integração direta com GPT
- [ElevenLabs TTS](/guide/flows/nodes/elevenlabs) - Síntese de voz ElevenLabs
- [Minimax TTS](/guide/flows/nodes/minimax) - Síntese de voz Minimax

## Nós de Sistema

Nós para ações internas e organização:

- [Mensagem de Sistema](/guide/flows/nodes/system-message) - Mensagem interna
- [Nota Privada](/guide/flows/nodes/private-note) - Adiciona nota ao atendimento
- [Encerrar Atendimento](/guide/flows/nodes/close-attendance) - Fecha o atendimento
- [Grupo](/guide/flows/nodes/group) - Agrupa nós visualmente

## Nós de Vendas

Nós específicos para o módulo de vendas:

- [POS (Ponto de Venda)](/guide/flows/nodes/pos) - Integração com sistema de vendas

## Visão Geral dos Nós

| Nó | Categoria | Descrição |
|----|-----------|-----------|
| Start | Inicial | Ponto de entrada do fluxo |
| Texto | Envio | Envia mensagem de texto |
| Áudio | Envio | Envia arquivo de áudio |
| Imagem | Envio | Envia imagem |
| Vídeo | Envio | Envia vídeo |
| Documento | Envio | Envia documento |
| Email | Envio | Envia email |
| Input | Recebimento | Aguarda resposta |
| Delay | Controle | Pausa execução |
| Condição | Controle | Ramificação lógica |
| Random | Controle | Distribuição aleatória |
| Jump To | Controle | Redirecionamento |
| Variável | Dados | Define valores |
| Atualizar Cliente | Dados | Atualiza cadastro |
| Requisição HTTP | Dados | Chama APIs |
| Criar Tarefa | Ações | Cria tarefas |
| Agente IA | IA | Executa agente |
| OpenAI | IA | Integração GPT |
| ElevenLabs | IA | Síntese de voz |
| Minimax | IA | Síntese de voz |
| Mensagem Sistema | Sistema | Mensagem interna |
| Nota Privada | Sistema | Nota no atendimento |
| Encerrar | Sistema | Fecha atendimento |
| Grupo | Sistema | Organização visual |
| POS | Vendas | Sistema de vendas |

## Próximos Passos

- [Construtor de Fluxos](/guide/flows/builder)
- [Gatilhos de Fluxo](/guide/flows/triggers)
- [Variáveis](/guide/flows/variables)
