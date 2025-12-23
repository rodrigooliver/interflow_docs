# Nó: Atualizar Cliente

Atualiza dados do cliente ou do atendimento durante o fluxo.

## Visão Geral

O nó **Atualizar Cliente** permite modificar informações do cliente ou do atendimento, como funil, equipe, atendente, tags e campos personalizados.

## Configurações

### Campos Disponíveis

| Campo | Descrição |
|-------|-----------|
| **Funil** | Altera o funil e etapa do cliente |
| **Equipe** | Atribui a uma equipe específica |
| **Atendente** | Atribui a um atendente específico |
| **Adicionar Tag** | Adiciona uma tag ao cliente |
| **Remover Tag** | Remove uma tag do cliente |
| **Campo Personalizado** | Atualiza um campo customizado |
| **Avaliação** | Define a avaliação do atendimento |
| **Feedback** | Define o feedback do atendimento |

### Funil

Selecione o funil e a etapa desejada:

1. Escolha o **Funil**
2. Escolha a **Etapa** dentro do funil

### Equipe

Selecione a equipe para atribuir o atendimento.

### Atendente

Selecione o atendente responsável pelo atendimento.

### Tags

**Adicionar Tag:** Selecione uma tag para adicionar ao cliente.

**Remover Tag:** Selecione uma tag para remover do cliente.

### Campo Personalizado

1. Selecione o **Campo** desejado
2. Defina o **Valor**

**Tipos de campos suportados:**
- Texto
- Número
- Seleção (opções pré-definidas)
- Data
- Data/Hora

Para campos de data, você pode usar:
- Data específica
- Data atual (com fuso horário)

## Uso de Variáveis

Campos de texto suportam variáveis:

```
{{resposta_cliente}}
```

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua após a atualização |

## Exemplos de Uso

### Mover para Etapa do Funil

Após qualificar um lead:

```
[Input] → Interesse confirmado?
[Condição] → Se "sim"
  [Atualizar Cliente] → Funil: Vendas
                        Etapa: Lead Qualificado
```

### Atribuir Equipe por Assunto

```
[Input] → Sobre o que deseja falar?
[Condição] → Se "Suporte"
  [Atualizar Cliente] → Equipe: Suporte Técnico
[Condição] → Se "Vendas"
  [Atualizar Cliente] → Equipe: Comercial
```

### Adicionar Tag de Interesse

```
[Input] → Qual produto te interessa?
[Atualizar Cliente] → Adicionar Tag: "Interesse em {{produto}}"
```

### Salvar Dados em Campo Personalizado

```
[Input] → Qual seu CPF?
[Atualizar Cliente] → Campo: CPF
                      Valor: {{cpf_informado}}
```

### Registrar Data de Contato

```
[Atualizar Cliente] → Campo: Último Contato
                      Valor: Data/Hora atual
                      Fuso: America/Sao_Paulo
```

## Restrições por Tipo de Fluxo

::: warning Atenção
Alguns campos não estão disponíveis em todos os tipos de fluxo:

- Fluxos de **Encerramento de Atendimento** não permitem alterar Equipe ou Atendente
- Outros tipos de fluxo podem ter restrições específicas

Se um campo não aparecer, verifique o tipo do seu fluxo.
:::

## Boas Práticas

::: tip Organização
Use tags de forma consistente para facilitar a segmentação posterior.
:::

::: tip Funis
Mantenha os clientes no funil correto para acompanhar a jornada.
:::

::: tip Campos Personalizados
Crie campos personalizados para armazenar informações específicas do seu negócio.
:::

::: tip Atribuição
Atribua atendentes ou equipes baseado no contexto para melhor atendimento.
:::

## Próximos Passos

- [Nó: Condição](/guide/flows/nodes/condition)
- [Nó: Encerrar Atendimento](/guide/flows/nodes/close-attendance)

