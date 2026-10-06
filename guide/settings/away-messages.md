# Mensagens de ausência

A tela **Mensagens de ausência** fica em Configurações, abaixo de Equipes.

## Ausência individual

Texto padrão usado quando o atendente marca ausência e não grava uma mensagem própria. O modal do atendente abre com esse texto. Se ele salvar outro, vale só para ele.

Quando o atendente da conversa está offline com o aviso ligado, essa mensagem tem prioridade sobre as regras da empresa.

## Regras gerais

Cada regra tem texto próprio e é editada em um modal.

- **Canais:** busca e seleção dos canais já criados. Nenhum selecionado vale para todos.
- **Status:** aguardando, em atendimento, ou os dois se nenhum for marcado.
- **Fluxo:** com ou sem fluxo. "Com fluxo" inclui sessão ativa, fluxo prestes a iniciar (contato novo) ou fluxo marcado para disparar na resposta.
- **Horário:** fuso da regra e intervalos por dia. O mesmo dia não se repete. Sem nenhum dia, a regra vale sempre. Um intervalo que cruza a meia-noite é válido. Fim vazio vale até 23:59.

A ordem da lista é a prioridade. A primeira regra que casar é enviada. Conversas sem atendente também podem receber a regra.

O mesmo chat não recebe outra ausência automática (individual ou da empresa) por 30 minutos.

> Changelog: [v2026.10.8](/changelog/2026/10/2026.10.8)
