# RH / Ponto

Controle de jornada com cartão ponto, locais (geofence), banco de horas, calendário, ausências e folha gerencial.

> Changelog: [v2026.8.3](/changelog/2026/08/2026.8.3) · [v2026.7.11](/changelog/2026/07/2026.7.11)

## Visão geral

O módulo **RH / Ponto** permite:

- Bater ponto (entrada, pausa, retorno e saída) com foto e GPS
- Definir locais permitidos (geofence) ou liberar home office por pessoa
- Configurar **jornada por horário** (entrada, almoço e saída) e **carga contratual** (padrão 44h)
- Cadastrar **feriados / sem expediente** e **atestados / folgas** individuais
- Acompanhar banco de horas, **relatório mensal** e prévia de folha **com as 4 marcações do dia**
- Definir o destino das horas extras (banco, compensação ou pagamento) em **Configurações RH**
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

Em **RH / Ponto → Colaboradores** o admin cadastra cargo, **jornada**, geofence, férias e remuneração (quando permitido). A jornada também pode ser editada no detalhe da pessoa, aba **Jornada**.

### Horário de presença e carga contratual

São dois conceitos diferentes:

| Conceito | O que é | Exemplo do escritório |
|----------|---------|------------------------|
| Horário de presença | Quando a pessoa deve estar no expediente | Seg–sex, 08:00–12:00 e 13:30–18:30 (9h/dia) |
| Carga contratual | Horas “normais” da semana (CLT 44h) | 8h48 por dia útil — a 1h a mais da semana é extra |

No editor:

1. Marque os dias em que a pessoa trabalha
2. Informe **manhã** e **tarde** (início e fim), ou use **Jornada do escritório**
3. Opcional: **Copiar para dias úteis**
4. Carga contratual semanal: deixe vazio para herdar 44h da organização, ou informe um valor próprio
5. Salve

A folha compara o **trabalhado** com a carga contratual (não com as 9h de presença). Quem cumpre o horário do escritório gera **12 min extra por dia = 1h por semana**. Dias desmarcados não geram falta.

Atraso é a entrada depois do primeiro horário cadastrado, descontada a tolerância da organização.

Ao abrir o card de uma pessoa:

- **Ponto** — batidas com filtro; use **Detalhes** para ver foto e evidências
- **Jornada** — horários reais e carga contratual
- **Banco de horas** — saldo do período, créditos, débitos e movimentos
- **Folha** — prévia com totais (atrasos, HE, faltas, delta do banco) e **4 marcações por dia**
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

Em **Folga individual**, marque **Descontar a carga do dia no banco de horas** se a folga deve sair do saldo (banco habilitado).

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

- **Banco de horas** — saldo atual, filtro de mês, saldo inicial/final, créditos, débitos e CSV; admin pode lançar ajuste
- **Folha** — prévia gerencial do período:
  - Totais por colaborador (normais, HE, atrasos, faltas, delta do banco, estimativas)
  - Seção **Horas por dia** (entrada, saída almoço, retorno, saída, trabalhado, esperado, atraso, HE, falta)
  - Exportação **CSV período** ou **CSV diário**
  - **Fechar período** grava o resumo **e** movimenta o banco conforme a política

### Destino das horas extras

Em **RH / Ponto → Configurações RH**:

| Modo | Comportamento no fechamento |
|------|-----------------------------|
| Compensar e banco (padrão) | HE abate atraso/falta do período; o restante credita o banco |
| Só banco | HE credita; faltas debitam |
| Pagar HE | HE fica na folha; o banco não se move |

Também dá para definir tolerância de atraso, carga semanal padrão (2640 min = 44h), fuso, teto e prazo do banco.

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
| Admin / Owner | Colaboradores, jornada, batidas com detalhes/foto, locais, calendário, folha, banco, ausências, notificações, configurações RH |

No servidor, respostas de batidas para não-admin **não incluem** foto, IP nem user-agent.
