# Varredura de funil

A varredura lê a conversa e decide se o cliente continua no estágio atual ou muda para um estágio permitido.

::: tip Acesso
**CRM** → **Funis** → **Varredura**.
:::

> Changelog: [v2026.9.13](/changelog/2026/09/2026.9.13)

## O que a leitura usa

Cada decisão recebe:

- **Contexto do negócio** — o que a empresa vende e o que conta como interesse
- **Regras** — por exemplo, interesse só vale neste negócio; outro assunto vai para um estágio nomeado
- A data de hoje e a data de cada mensagem
- O estágio atual
- As mensagens recentes, no modo que você escolher

Os destinos possíveis são **manter** ou um dos **estágios de destino**. A mudança automática só ocorre se o estágio sugerido for outro, a probabilidade passar do mínimo e a leitura puder alterar aquele cliente.

A **escolha do estágio** usa o Jev (sem texto gerado). Opcionalmente:

- **Interesse (0–100)** — mesma requisição Jev (`score`, 10 faixas → 0–100), checkbox na configuração.
- **Motivo ao mover** — modelo de texto (Interflow / OpenAI / DeepSeek), só quando o cliente muda de estágio.

## Configuração na interface

Em **Varredura** → **Configuração**, use as abas nesta ordem:

1. **Decisão do Jev** — contexto do negócio, regras e **Como o Jev lê** (probabilidade mínima para mover, quantidade de mensagens e escopo da conversa).
2. **Para onde mover** — estágios de destino permitidos. Sem nenhum, a varredura não move ninguém.
3. **Fila e rotina** — ligar a rotina diária (02:00 horário de Brasília, fila sequencial entre organizações) e **Quem entra na rotina** (origem, tipo de cliente, interações).
4. **Depois da leitura** — **Enriquecer o cliente** (interesse na leitura, motivo ao mover) e **Disparos do estágio de destino** (conversão e fluxo silencioso quando a varredura move). A transferência manual na fila não usa esses interruptores de conversão/fluxo.

A página pode mostrar avisos se faltar destino ou origem com a rotina ligada; você ainda pode salvar.

## Quem entra na rotina

A rotina diária só inclui clientes que:

- Estão em um **estágio de origem** marcado. Sem nenhum, ninguém entra
- Passam no tipo de cliente e no mínimo de interações, se você ligou esses filtros
- Tiveram mensagem nova desde a última leitura **ou** passaram do prazo **Revisar de novo após**

O prazo padrão é **7 dias**. O relógio recomeça depois de cada leitura e também depois de uma mudança manual de estágio. Deixe o campo vazio para entrar só quem teve mensagem nova.

Uma mudança manual recente não é desfeita na hora. Na rotina, depois do prazo, essa pessoa volta a ser lida e pode mudar de estágio.

## Contexto das mensagens

Ao lado da quantidade de mensagens:

| Opção | O que entra |
|-------|-------------|
| Somente o cliente | Só mensagens do cliente. A quantidade conta essas mensagens. É o padrão |
| Cliente e a última resposta do agente | As mensagens do cliente mais a resposta mais recente do agente |
| Cliente e agente | A conversa dos dois, até o limite |

## Fila

No horário fixo da plataforma (**02:00**, horário de Brasília), a rotina monta a fila de cada organização que ligou a rotina. Várias organizações no mesmo instante entram em **sequência** no worker (uma por vez). A que espera aparece como **Aguardando**. O filtro salvo não é reaplicado no meio da fila.

Na fila você pode:

- **Pausar** e **Continuar** sem esperar o dia seguinte
- **Repetir falhas** — só quem falhou volta; movidos e mantidos ficam como estão até uma rotina futura
- Filtrar **Para transferir** — quem tem chat, estágio sugerido e ainda não foi movido
- **Transferir** depois de confirmar
- Abrir o **chat** e o **cliente** em modal
- **Recarregar**. Filtro e página ficam no endereço da página

Criar a fila de um estágio usa aquele estágio, mesmo que ele não esteja na origem da rotina. O botão **Iniciar** em um item lê só aquela pessoa.

## Limitações

- Sem estágio de origem e de destino, a rotina diária não liga
- A leitura automática não inventa um estágio fora da lista de destino
- Quem já foi movido ou mantido naquela fila só volta numa rotina futura, com mensagem nova ou com o prazo vencido
