# Vozes do sistema

Gere áudio a partir do texto no atendimento, com vozes cadastradas da organização.

> Changelog: [v2026.10.11](/changelog/2026/10/2026.10.11) · [v2026.10.9](/changelog/2026/10/2026.10.9) · [v2026.8.24](/changelog/2026/08/2026.8.24)

## Para que serve

- Enviar áudio com a voz da marca, sem gravar no microfone
- Padronizar tom, velocidade e provedor entre atendentes
- Guardar o roteiro na mesma mensagem, como transcrição
- Usar a mesma voz nas [respostas em áudio do Agente IA](/guide/ai-agents/#resposta-em-audio)

## Onde acessar

| Área | Caminho |
|------|---------|
| **Cadastrar vozes** | Menu lateral → **Vozes** |
| **Usar no chat** | Campo de mensagem → **Gravar baseado em texto** |
| **Usar no Agente IA** | Agente IA → aba **Envio** → **Responder com áudio** |

O botão no chat só aparece se existir pelo menos uma voz **ativa** e o canal aceitar áudio.

## Catálogo Interflow

Em **Vozes** há duas abas:

| Aba | O que faz |
|-----|-----------|
| **Catálogo** | ElevenLabs (busca, idioma, gênero, idade e categoria) e Gemini (30 vozes prontas e escolha do modelo). A amostra grátis da ElevenLabs não debita créditos. **Testar texto** gera um MP3 com as opções escolhidas e consome créditos |
| **Minhas vozes** | Presets da organização. A busca e **Nova voz** ficam nesta aba |

**Usar esta voz** grava o preset em **Minhas vozes**, já disponível no chat e no Agente IA. O modelo inicial é o Flash v2.5. No formulário, cada modelo mostra o preço por 1K caracteres.

Gerar áudio com voz do catálogo debita os **créditos de IA**:

| Modelos | Preço |
|---------|--------|
| Flash v2.5, v4 Turbo e v3 Conversacional | US$ 0,13 por 1K caracteres |
| v4, v3 e Multilingual v2 | US$ 0,26 por 1K caracteres |

Sem saldo, o áudio não é gerado. Vozes ligadas a uma integração própria continuam na chave dessa integração, sem débito de créditos. O MiniMax do catálogo ainda não está disponível.

## Gemini

Na aba **Gemini**, escolha o modelo no topo. **Geral** usa o Gemini 2.5 Flash TTS. **Testar texto** abre um campo já preenchido; o áudio segue a voz do card e o modelo escolhido.

Em **Minhas vozes** e no formulário, **Testar texto** usa o modelo, a voz e as demais opções já salvas ou em edição. O mesmo teste existe para ElevenLabs, OpenAI e Minimax.

O arquivo sai em MP3. A API do Gemini entrega PCM ou WAV; a Interflow converte antes de guardar.

## Pré-requisito

Cadastre uma integração de TTS em **Configurações**:

| Provedor | Uso |
|----------|-----|
| OpenAI | Vozes e modelos de speech da OpenAI |
| ElevenLabs | Vozes da conta ElevenLabs |
| Minimax | Vozes e idioma da conta Minimax |
| Gemini | Vozes prontas, modelo TTS e estilo em texto. A mesma chave da [integração Gemini](/guide/integrations/gemini) |

São os mesmos provedores dos nós de áudio do fluxo.

## Cadastrar uma voz

Admin e owner criam, editam e excluem. Os demais membros só usam as vozes ativas.

1. Abra **Vozes** → **Nova voz**
2. Dê um nome (ex.: Atendente feminina)
3. Escolha a integração — o provedor vem dela
4. Ajuste voz, modelo, velocidade e os demais campos do provedor
5. Deixe **Ativa** e salve

Voz inativa some do botão no chat, mas permanece na lista para reativar depois.

Para copiar uma voz, use **Duplicar** no card ou no formulário de edição. Abre uma nova voz com os mesmos dados e o nome `(cópia)` — ajuste e salve.

## Usar no atendimento

1. Digite o texto no campo da mensagem
2. Clique em **Gravar baseado em texto**
   - **Uma** voz ativa: gera na hora
   - **Duas ou mais**: escolha a voz no menu
3. O áudio entra como preview; o roteiro recolhe
4. **Editar** abre o texto de novo; **Regenerar** gera outro arquivo com a mesma voz
5. Envie

Remover o preview apaga o arquivo gerado. Regenerar também substitui o arquivo anterior.

## O que o cliente recebe

No Interflow a mensagem é **uma**: áudio + texto como transcrição.

No WhatsApp (e canais de voz sem legenda no áudio), o cliente **só ouve** o áudio. O roteiro não vai como mensagem de texto separada.

## Limitações

- Sem voz ativa, o botão não aparece
- Sem texto no campo, não gera
- Canais que não enviam áudio não mostram o botão
- Só admin e owner alteram o cadastro das vozes
