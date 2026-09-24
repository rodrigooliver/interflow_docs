# Nó: Nota Privada

Adiciona uma nota privada ao atendimento, visível apenas para a equipe.

## Visão Geral

O nó **Nota Privada** cria uma anotação no atendimento que:

- É visível apenas para atendentes
- **Não é enviada** ao cliente
- Pode ser fixada para destaque
- Aparece como nota/observação no atendimento

## Configurações

### Texto da Nota

Campo para escrever o conteúdo da nota. Suporta:

- Texto livre
- Variáveis (<code v-pre>{{nome_variavel}}</code>)
- Múltiplas linhas

### Fixar Mensagem

Quando ativado, a nota é fixada no topo do chat para fácil acesso.

## Uso de Variáveis

Personalize as notas com variáveis:

```
ATENÇÃO: Cliente VIP

Dados coletados:
- Produto de interesse: {{produto_interesse}}
- Orçamento disponível: {{orcamento}}
- Prazo: {{prazo}}
```

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Continua para o próximo nó |

## Exemplos de Uso

### Resumo para Atendente

Quando transferir para atendimento humano:

```
RESUMO DO ATENDIMENTO

Cliente: {{customer_name}}
Assunto: {{assunto}}
Problema: {{descricao_problema}}

Tentativas já realizadas:
- Reiniciar aplicativo
- Limpar cache
- Atualizar versão (aguardando)

Próximos passos sugeridos:
Verificar logs do servidor
```

### Alerta Importante

```
CLIENTE COM RECLAMAÇÃO

Este cliente já entrou em contato 3x sobre o mesmo problema.
Tratar com prioridade!

Histórico:
{{historico_contatos}}
```

### Dados Sensíveis

Para informações que o atendente precisa ver:

```
DADOS DE VERIFICAÇÃO

CPF informado: {{cpf}}
Último pedido: {{ultimo_pedido}}
Valor pendente: R$ {{valor_pendente}}
```

### Instrução para Equipe

```
INSTRUÇÕES

Oferecer 10% de desconto se cliente demonstrar
interesse em cancelar.

Código do cupom: FIDELIDADE10
```

## Diferença: Nota Privada vs Mensagem do Sistema

| Característica | Nota Privada | Mensagem do Sistema |
|----------------|--------------|---------------------|
| Aparece como nota | Sim | Não |
| Pode ser fixada | Sim | Não |
| Destaque visual | Amarelo | Neutro |
| Uso principal | Anotações importantes | Logs e documentação |

## Visualização

A nota privada aparece:

- Na timeline do atendimento (para atendentes)
- Com destaque visual (fundo amarelo)
- Fixada no topo (se configurado)
- **NÃO** é enviada ao cliente
- **NÃO** aparece no chat do cliente

## Boas Práticas

::: tip Use para Informações Importantes
Reserve notas privadas para informações que o atendente precisa ver imediatamente.
:::

::: tip Fixe com Moderação
Fixe apenas notas realmente críticas para não poluir a visualização.
:::

::: tip Seja Claro
Escreva de forma clara e objetiva para que qualquer atendente entenda.
:::

::: tip Estruture a Informação
Use formatação (linhas, emojis, listas) para facilitar a leitura rápida.
:::

## Próximos Passos

- [Nó: Mensagem do Sistema](/guide/flows/nodes/system-message)
- [Nó: Atualizar Cliente](/guide/flows/nodes/update-customer)

