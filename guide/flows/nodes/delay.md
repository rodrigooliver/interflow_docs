# Nó: Atraso (Delay)

Aguarda um tempo determinado antes de continuar o fluxo.

## Visão Geral

O nó **Atraso** (Delay) pausa a execução do fluxo por um período configurado. Útil para simular digitação, agendar ações ou criar pausas estratégicas.

## Configurações

### Tipo de Atraso

| Tipo | Descrição |
|------|-----------|
| **Segundos** | Aguarda um número específico de segundos |
| **Até Horário** | Aguarda até um horário específico do dia |
| **Até Dia da Semana** | Aguarda até um dia e horário específicos |

### Configuração por Tipo

#### Segundos

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Segundos** | Tempo de espera em segundos | `5`, `30`, `120` |

**Uso com variáveis:** O valor pode ser uma variável numérica.

#### Até Horário

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Horário** | Hora para continuar | `09:00`, `14:30` |
| **Fuso Horário** | Fuso a considerar | `America/Sao_Paulo` |

#### Até Dia da Semana

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| **Dia** | Dia da semana | Segunda, Terça, etc. |
| **Horário** | Hora para continuar | `09:00` |
| **Fuso Horário** | Fuso a considerar | `America/Sao_Paulo` |

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua após o atraso |

## Exemplos de Uso

### Simular Digitação

Adicione um pequeno delay entre mensagens para parecer mais humano:

```
[Texto] → "Olá! Deixa eu verificar isso para você..."
[Delay] → 3 segundos
[Texto] → "Encontrei! Aqui está a informação..."
```

### Agendamento

Agende uma mensagem para o horário comercial:

```
[Delay] → Até Horário: 09:00
          Fuso: America/Sao_Paulo
[Texto] → "Bom dia! Continuando nosso atendimento..."
```

### Follow-up

Crie um follow-up após algumas horas:

```
[Texto] → "Obrigado pelo interesse! Vou te enviar mais informações em breve."
[Delay] → 7200 segundos (2 horas)
[Texto] → "Oi! Passando aqui para saber se conseguiu ver o material que enviei."
```

### Atendimento em Horário Comercial

Configure para continuar apenas em dias úteis:

```
[Delay] → Até Dia: Segunda-feira
          Horário: 08:00
          Fuso: America/Sao_Paulo
[Texto] → "Voltamos! Como posso ajudar?"
```

## Fusos Horários Disponíveis

A Interflow suporta os principais fusos horários:

- **America/Sao_Paulo** (Brasília)
- **America/Fortaleza** (Nordeste)
- **America/Manaus** (Amazonas)
- **America/Rio_Branco** (Acre)
- **America/New_York** (EUA - Leste)
- **Europe/London** (Reino Unido)
- **Europe/Lisbon** (Portugal)
- E muitos outros...

## Boas Práticas

::: tip Delays Curtos
Para simular digitação, use delays de 2-5 segundos. Delays muito longos podem frustrar o cliente.
:::

::: tip Horário Comercial
Use "Até Horário" para garantir que mensagens importantes cheguem em horário comercial.
:::

::: tip Comunicar Espera
Se o delay for longo, informe o cliente que ele receberá uma resposta depois.
:::

::: warning Limites
Delays muito longos (dias) podem fazer o cliente esquecer do atendimento. Use com moderação.
:::

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Aguardar Resposta](/guide/flows/nodes/input)

