# Nó: Decisor IA

A IA escolhe uma saída do fluxo a partir do contexto e da descrição de cada opção.

## Visão geral

O nó **Decisor IA** fica na paleta de integrações. No canvas aparecem só os títulos das saídas. O contexto, a confiança e as descrições ficam no painel lateral.

O uso desconta o saldo de créditos de IA da Interflow. Não usa chave de OpenAI do cliente.

## Como configurar

1. Arraste **Decisor IA** para o fluxo
2. Clique no título de uma saída
3. Preencha o contexto. Use o botão de variável para incluir, por exemplo, `{{conversation.lastMessages:10}}` ou `{{conversation.lastMessages:50}}`
4. Em cada opção, informe o título e a descrição. A descrição é o critério que a IA compara
5. Ajuste a confiança mínima (0 a 100). O padrão é 70

## Saídas

| Saída | Quando segue |
|-------|----------------|
| Cada opção | A IA escolhe essa opção e a confiança fica igual ou acima do mínimo |
| Nenhuma | A IA não escolhe, a escolha não existe, ou a confiança fica abaixo do mínimo |
| Erro | Sem saldo de créditos ou falha na chamada |

A variável `ai_decision` guarda a opção escolhida, a confiança e a saída usada.

## Limitações

- Cada opção precisa de descrição. Sem descrição, a opção não entra na decisão
- Sem saldo, o fluxo não escolhe uma opção: segue **Erro**
