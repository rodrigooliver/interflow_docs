# Transcrição de áudios

Converta automaticamente áudios das conversas em texto, com controles por canal.

## O que é

Quando um áudio chega ou é enviado no atendimento, a Interflow pode gerar uma **transcrição em texto** com IA (OpenAI Whisper). O texto:

- Aparece junto à mensagem de áudio na conversa
- Entra no contexto do **Agente de IA** e do assistente
- Facilita leitura rápida e buscas no histórico

## Requisitos

- Canal com a opção de transcrição desejada **ativada**
- Integração **OpenAI** ativa **ou** saldo de **créditos de IA** na organização

Sem chave OpenAI nem créditos, o áudio é salvo normalmente, mas **sem** texto de transcrição.

## Configurações por canal

Em **Canais** → editar o canal:

| Configuração | Padrão | Escopo |
|--------------|--------|--------|
| **Transcrever áudios do cliente** | Ligado | Áudios enviados pelo cliente |
| **Transcrever áudios do agente** | Desligado | Áudios enviados pelo agente no Interflow ou pelo app do canal |
| **Transcrever áudios em grupos** | Desligado | Somente **WhatsApp WAHA**, quando grupos estão habilitados |

### Canais antigos

Se a configuração ainda não foi salva:

- Cliente: permanece **ligado** (comportamento anterior)
- Agente e grupos: permanecem **desligados** até ativação manual

### Áudio enviado pelo celular do agente

Para o áudio enviado fora do Interflow (pelo WhatsApp do celular) ser armazenado e transcrito:

1. Ative o upload de mídias enviadas pelo WhatsApp / mídias externas no canal
2. Ative **Transcrever áudios do agente**

Sem o upload da mídia, não há arquivo para transcrever.

### Grupos (WhatsApp WAHA)

Por padrão, áudios de grupo **não** são transcritos (grupos costumam não usar IA). Para habilitar:

1. Ative **Habilitar grupos** no canal WAHA
2. Ative **Transcrever áudios em grupos**
3. Mantenha as opções de cliente e/ou agente conforme necessário

## Como usar no dia a dia

1. Configure o canal conforme a tabela acima
2. Ao receber ou enviar um áudio elegível, aguarde a transcrição
3. Leia o bloco **Transcrição** abaixo do player de áudio
4. Use o texto no histórico e no contexto da IA nas próximas respostas

## Créditos e custo

Quando a organização usa a chave Interflow (créditos de IA), a transcrição consome créditos do tipo **Transcrição de Áudio**, conforme a duração do arquivo. Com chave OpenAI própria da organização, o uso segue a conta OpenAI do cliente.

## Limitações

- A falha na transcrição **não** impede o envio ou o recebimento do áudio
- Áudios muito longos ou com qualidade ruim podem gerar texto incompleto
- Em grupos WAHA, a transcrição só ocorre com **Transcrever áudios em grupos** ativo

## Relacionado

- [WhatsApp WAHA](/guide/channels/whatsapp-waha) — grupos e mídias
- [Changelog v2026.7.15](/changelog/2026/07/2026.7.15)
