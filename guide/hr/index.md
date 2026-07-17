# RH / Ponto

Controle de jornada com cartão ponto, locais (geofence), banco de horas, calendário, ausências e folha gerencial.

> Changelog: [v2026.7.11](/changelog/2026/07/2026.7.11)

## Visão geral

O módulo **RH / Ponto** permite:

- Bater ponto (entrada, pausa, retorno e saída) com foto e GPS
- Definir locais permitidos (geofence) ou liberar home office por pessoa
- Configurar **jornada semanal** por colaborador (dias e horas)
- Cadastrar **feriados / sem expediente** e **atestados / folgas** individuais
- Acompanhar banco de horas e prévia de folha **com horas por dia**
- Notificar gestores por push quando alguém registra o ponto
- Separar a visão do colaborador (**Meu perfil RH**) da visão admin

::: warning Importante
O módulo **não** vem ligado por padrão. Um superadmin precisa ativar **RH / Ponto** em **Admin → Organizações → Módulos**.
:::

::: tip Bater ponto sem calendário
Não é necessário cadastrar feriados no calendário para bater ponto. O calendário e as ausências só afetam o **cálculo da folha** (jornada esperada do dia).
:::

## Como liberar o módulo

1. Acesse **Admin → Organizações**
2. Edite a organização e abra a aba **Módulos**
3. Ative **RH / Ponto** e salve
4. Recarregue o app — o item **RH / Ponto** aparece no menu

## Bater ponto

1. No menu, abra **RH / Ponto → Bater ponto**
2. Permita **localização** (se a organização exigir GPS)
3. Se a foto for obrigatória:
   - Com webcam: o preview aparece espelhado (como selfie)
   - Sem webcam: use **Enviar foto**
4. Clique em **Registrar entrada** (ou pausa / retorno / saída, conforme o status)

### Tipos de batida

| Tipo | Significado |
|------|-------------|
| Entrada | Início da jornada |
| Pausa | Início do intervalo |
| Retorno | Fim do intervalo |
| Saída | Fim da jornada |

## Locais / Geofence

1. Abra **RH / Ponto → Locais**
2. Cadastre nome, coordenadas e raio (metros)
3. Em **Colaboradores**, escolha o modo de geofence de cada pessoa:

| Modo | Comportamento |
|------|----------------|
| Herdar org | Usa a regra padrão da organização |
| Obrigatório | Precisa estar em um local permitido |
| Home office | Geofence desligado para essa pessoa |
| Locais custom | Usa apenas os locais vinculados à pessoa |

## Colaboradores e jornada (admin)

Em **RH / Ponto → Colaboradores** o admin cadastra cargo, **jornada semanal**, geofence, férias e remuneração (quando permitido).

### Jornada semanal

No modal de cadastro/edição:

1. Marque os dias em que a pessoa trabalha
2. Informe as horas de cada dia (ex.: seg–sex `8`, sábado `4`)
3. Salve

A folha usa essa jornada para calcular horas esperadas, HE e faltas. Dias desmarcados (0h) não geram falta.

Ao abrir o card de uma pessoa:

- **Ponto** — batidas com filtro; use **Detalhes** para ver foto e evidências
- **Banco de horas** — saldo e movimentos
- **Folha** — prévia do período com totais e **horas por dia**
- **Ausências** — atestados e folgas individuais (com anexo)
- **Notificações** — quem recebe push quando essa pessoa bate ponto

## Calendário RH (feriados / sem expediente)

Em **RH / Ponto → Calendário** (admin):

1. Cadastre a data e um título
2. Escolha o tipo: **Feriado** ou **Sem expediente**
3. Opcional: marque **recorrente todos os anos** (mesmo dia/mês)

Esses dias **zeram a jornada esperada** na folha para todos os colaboradores (não geram falta). Se alguém bater ponto nesse dia, o tempo pode contar como HE.

## Ausências (atestado e folga)

No detalhe do colaborador → aba **Ausências**:

1. Clique em **Registrar**
2. Tipo: **Atestado médico** ou **Folga individual**
3. Informe início e fim, observação (ex.: onde o atestado foi apresentado) e anexe PDF/imagem se houver
4. Salve

Ausências também **zeram o esperado** nos dias cobertos, só para aquela pessoa.

## Meu perfil RH (colaborador)

Em **RH / Ponto → Meu perfil RH** o colaborador vê:

- Suas batidas (sem foto e sem IP)
- Banco de horas
- Prévia de folha com totais e **horas por dia** (horas, sem valores salariais sensíveis)

A rota e a tela são **separadas** da visão admin, por privacidade.

## Batidas (admin)

Em **RH / Ponto → Batidas**:

- Filtre por colaborador, tipo e período
- A coluna **Foto** só indica se há anexo (`Sim` / `—`) — a imagem **não** carrega na listagem
- Clique em **Detalhes** para abrir o modal (foto sob demanda, IP, GPS, dispositivo)
- GPS na linha ou no modal abre o mapa
- Ordem cronológica (mais antiga → mais recente)

## Banco de horas e folha

- **Banco de horas** — saldo e histórico; admin pode lançar ajuste
- **Folha** — prévia gerencial do período:
  - Totais por colaborador (normais, HE, faltas, estimativas)
  - Seção **Horas por dia** (entrada, saída, trabalhado, esperado, status do dia)
  - Exportação **CSV período** ou **CSV diário**
  - Fechamento do período

::: tip Observação
A folha na Interflow é **gerencial** e não substitui folha oficial / eSocial.
:::

### Status do dia na folha

| Status | Significado |
|--------|-------------|
| Trabalho | Dia com jornada esperada |
| Folga | Sem jornada na escala da pessoa |
| Feriado / Sem expediente | Calendário da organização |
| Atestado / Folga individual | Ausência cadastrada no colaborador |

## Notificações push

1. Abra o detalhe admin do colaborador
2. Aba **Notificações**
3. Marque os usuários que devem receber o push OneSignal
4. Salve

Quando a pessoa bater ponto, os destinatários recebem uma notificação com link para o perfil RH dela.

## Permissões e privacidade

| Quem | O que vê |
|------|----------|
| Colaborador | Bater ponto, Meu perfil RH, próprio banco/folha (sem foto/IP) |
| Admin / Owner | Colaboradores, batidas com detalhes/foto, locais, calendário, folha, ausências, notificações |

No servidor, respostas de batidas para não-admin **não incluem** foto, IP nem user-agent.
