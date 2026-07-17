# RH / Ponto

Controle de jornada com cartão ponto, locais (geofence), banco de horas e folha gerencial.

> Changelog: [v2026.7.11](/changelog/2026/07/2026.7.11)

## Visão geral

O módulo **RH / Ponto** permite:

- Bater ponto (entrada, pausa, retorno e saída) com foto e GPS
- Definir locais permitidos (geofence) ou liberar home office por pessoa
- Acompanhar banco de horas e prévia de folha
- Notificar gestores por push quando alguém registra o ponto
- Separar a visão do colaborador (**Meu perfil RH**) da visão admin

::: warning Importante
O módulo **não** vem ligado por padrão. Um superadmin precisa ativar **RH / Ponto** em **Admin → Organizações → Módulos**.
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

## Colaboradores (admin)

Em **RH / Ponto → Colaboradores** o admin cadastra cargo, jornada, geofence, férias e remuneração (quando permitido).

Ao abrir o card de uma pessoa:

- **Ponto** — batidas com filtro, **foto** e mapa
- **Banco de horas** — saldo e movimentos
- **Folha** — prévia do período (com valores estimados para admin)
- **Notificações** — quem recebe push quando essa pessoa bate ponto

## Meu perfil RH (colaborador)

Em **RH / Ponto → Meu perfil RH** o colaborador vê:

- Suas batidas (sem foto e sem IP)
- Banco de horas
- Prévia de folha (horas, sem valores salariais sensíveis)

A rota e a tela são **separadas** da visão admin, por privacidade.

## Batidas (admin)

Em **RH / Ponto → Batidas**:

- Filtre por colaborador, tipo e período
- Veja foto, GPS (clique abre o mapa) e IP
- Use a ordem cronológica (mais antiga → mais recente)

## Banco de horas e folha

- **Banco de horas** — saldo e histórico; admin pode lançar ajuste
- **Folha** — prévia gerencial do período, fechamento e exportação CSV

::: tip Observação
A folha na Interflow é **gerencial** e não substitui folha oficial / eSocial.
:::

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
| Admin / Owner | Colaboradores, batidas com foto/IP, locais, folha, notificações |

No servidor, respostas de batidas para não-admin **não incluem** foto, IP nem user-agent.
