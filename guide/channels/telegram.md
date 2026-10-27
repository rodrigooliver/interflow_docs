---
title: Telegram Bot
description: Como conectar um bot do Telegram e atender mensagens diretas e grupos na Interflow.
app: /app/settings/channels/new/telegram
---

# Telegram Bot

O canal **Telegram Bot** recebe e responde conversas de um bot criado no Telegram. O cliente fala com o bot. A equipe responde na caixa de entrada da Interflow.

## O que este canal não é

Não é uma conta pessoal do Telegram e não usa o número de celular de alguém da equipe. Canais de broadcast do Telegram também ficam de fora.

## Antes de conectar

1. Tenha uma conta no Telegram
2. A API da Interflow precisa estar publicada em **HTTPS**. O Telegram não entrega mensagens em um endereço local sem HTTPS
3. O plano da organização precisa ter o tipo de canal **Telegram Bot** ligado

## Criar o bot

1. No Telegram, procure **@BotFather** e abra a conversa oficial. Se aparecer a lista de comandos, envie `/start` e depois `/newbot`
2. O BotFather pergunta o nome. Esse nome **pode ter espaço**. Exemplo que funciona: `Interflow Bot`
3. Em seguida ele pede o username. Esse campo **não aceita espaço** e **precisa terminar em `bot`**
4. Usernames recusados nesse passo: `Interflow` (não termina em `bot`) e `Interflow Bot` (espaço). Um username aceito: `Interflow_Bot`. O bot fica em `t.me/Interflow_Bot`
5. Quando a resposta for **Done**, o BotFather mostra o token: um número, dois-pontos e uma chave. Copie só essa linha
6. Não encaminhe a mensagem do token. Quem tem o token controla o bot. Se ela vazou, envie `/revoke` ao BotFather e use o token novo

Opcional, ainda no BotFather (`/help` lista os comandos):

- `/setdescription` define a descrição do perfil
- `/setabouttext` define o texto curto "sobre"
- `/setuserpic` define a foto
- `/setjoingroups` define se o bot pode entrar em grupos
- `/setprivacy` com **Disable** faz o bot ler todas as mensagens dos grupos em que ele está. Com a privacidade ligada, o bot só vê menções, respostas às mensagens dele e comandos

## Conectar na Interflow

1. Abra **Configurações → Canais**
2. Clique em **Novo canal** e escolha **Telegram Bot**
3. Preencha o nome do canal, como a equipe vai reconhecê-lo na lista
4. Cole o token e salve
5. Se o token for válido e o endereço da API for HTTPS, o canal fica conectado e o bot passa a enviar as mensagens para a Interflow

Para trocar o token ou desligar o recebimento, abra o canal e use a aba **Conexão**.

## O que chega na conversa

| Origem | O que a Interflow faz |
|--------|------------------------|
| Mensagem direta | Cria ou reabre o atendimento daquela pessoa |
| Grupo | Cria o atendimento do grupo, se o bot estiver nele |
| Texto, imagem, vídeo, áudio, arquivo e figurinha estática | Entram na conversa |
| Mensagem editada | Atualiza o texto já gravado |

O nome do cliente vem do nome e do sobrenome do Telegram. O username fica no identificador da conversa. O id numérico é o usado para responder.

## Como a equipe responde

Na conversa, envie texto, imagem, vídeo, áudio ou arquivo. Não há janela de 24 horas: a resposta pode sair a qualquer momento, dentro dos limites do Telegram.

- Texto: até 4096 caracteres
- A legenda de um arquivo: até 1024 caracteres
- Não há ícone de entregue ou lido. O status para em enviado quando o Telegram aceita a mensagem

## Grupos

1. Abra o grupo no Telegram
2. Adicione o bot como membro
3. Se a equipe precisa ver todas as mensagens, e não só menções, desligue a privacidade no BotFather (`/setprivacy` → **Disable**)

O título do grupo é o nome do atendimento. O username de quem escreveu no grupo não substitui o id do grupo.

## Trocar ou remover o bot

- **Substituir o token:** na aba Conexão, cole o token novo e salve. O bot anterior deixa de entregar mensagens neste canal
- **Desconectar:** use **Desconectar**. O bot para de enviar atualizações até uma nova conexão
- **Excluir o canal:** só é possível quando não há conversas vinculadas. Apague os atendimentos antes, se precisar remover o canal

Voltar ao [changelog v2026.10.35](/changelog/2026/10/2026.10.35).
