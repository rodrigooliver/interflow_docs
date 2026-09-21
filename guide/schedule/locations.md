# Locais e salas

Cadastre **salas, boxes ou unidades** com nome livre. Quando a agenda usa locais, o local vira o centro de controle: horários, sobreposição e o compromisso passam a depender da sala.

## Diferença em relação aos profissionais

| Recurso | O que controla | Quando usar |
|---------|----------------|-------------|
| **Profissionais** | Quem atende | Clínica com dentistas, médicos ou atendentes |
| **Locais** | Onde acontece | Salas, boxes, consultórios ou unidades que não podem se sobrepor |

As duas opções podem ficar ligadas ao mesmo tempo. O local não substitui o profissional: ele define o espaço.

## Ativar locais na agenda

1. Abra **Agenda** → **Agendas**
2. Edite a agenda
3. Marque **Usar locais**
4. Se quiser impedir dois compromissos na mesma sala, marque **Bloquear local duplicado (esta agenda)**
5. Salve

Com **Usar locais** ativo, o campo **Local** fica obrigatório ao criar ou editar um agendamento.

## Cadastrar um local

1. Abra a agenda e vá em **Profissionais/Serviços**
2. Clique em **Adicionar local**
3. Informe o nome (ex.: Sala 01) e, se quiser, descrição e cor
4. Escolha os **serviços** que aquele local realiza — vazio = todos os serviços da agenda
5. Se a agenda usa profissionais, escolha quem pode atender ali — vazio = qualquer profissional
6. Salve

Locais inativos somem da escolha no agendamento, mas continuam listados na gestão.

## Disponibilidade por local

1. Abra a aba **Disponibilidade**
2. Selecione o local
3. Defina os dias e horários daquela sala

A ocupação respeita o horário do local. Com o bloqueio de sobreposição ligado, a mesma sala não recebe dois compromissos no mesmo horário.

## No dia a dia

- **Novo agendamento**: escolha o local junto com serviço e profissional
- **Lista**: o card do compromisso mostra o local
- **Filtro**: filtre a lista por local
- **Colunas**: nas views **Lista** e **Dia**, divida **Por local**
- **Lista de agendas**: o card mostra quantos locais aquela agenda tem

## Agente IA

Nas ações de agenda do agente, você escolhe se ele usa **todos os locais** ou **locais específicos**. O agente só sugere e cria horários nos locais liberados.

## Limitações

- Locais valem por agenda: cada agenda tem o próprio cadastro
- Duplicar a agenda copia os locais e os horários; os agendamentos não vão junto
- Ações de agente já salvas continuam apontando para a agenda original até você ajustar

> Changelog: [v2026.9.12](/changelog/2026/09/2026.9.12)
