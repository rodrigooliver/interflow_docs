# Módulo de Cobrança (Billing)

O módulo de Cobrança é o sistema financeiro integrado do Interflow. Ele permite gerenciar contratos, parcelas, divisão de receita entre recebedores, integração com gateways de pagamento e emissão/baixa de cobranças, tudo dentro da mesma plataforma.

::: tip 💡 Acesso
O módulo está disponível em **Menu lateral → Cobrança** (ícone de carteira).
:::

---

## Visão Geral

O módulo é composto por cinco áreas principais:

| Área | Descrição |
|------|-----------|
| **Contratos** | Gerenciamento de contratos com clientes, parcelas e status |
| **Recebedores** | Cadastro de quem recebe splits de receita |
| **Templates** | Modelos reutilizáveis para criação rápida de contratos |
| **Repasses** | Relatório de splits gerados e controle de distribuição |
| **Configurações** | Integração com gateways de pagamento (Asaas) |

---

## Contratos

### O que é um contrato?

Um contrato representa um acordo de pagamento com um cliente. Ele define:

- **Cliente vinculado** – quem irá pagar
- **Valor total e número de parcelas**
- **Modo de cobrança** – por parcela individual ou link de pagamento único
- **Moeda**
- **Gateway de pagamento** utilizado (ex: Asaas)
- **Divisão de receita** – como o valor recebido será distribuído entre recebedores

### Status do Contrato

| Status | Descrição |
|--------|-----------|
| `Rascunho` | Contrato criado mas ainda não ativado |
| `Ativo` | Contrato em andamento; cobranças podem ser geradas |
| `Concluído` | Todas as parcelas foram pagas |
| `Cancelado` | Contrato encerrado manualmente |

### Criando um Contrato

1. Acesse **Cobrança → Contratos**
2. Clique em **Novo contrato**
3. Escolha entre **criar do zero** ou **usar um template**
4. Selecione o **cliente** (quem vai pagar)
5. Preencha título, valor, parcelas, moeda e gateway
6. Configure a **divisão de receita** (opcional, mas recomendado)
7. Clique em **Salvar**

> Se o título estiver vazio ao selecionar template e cliente, ele é preenchido automaticamente como **"Nome do Template – Nome do Cliente"**.

### Ativando um Contrato

Contratos criados inicialmente ficam em **Rascunho**. Para colocar em operação:

1. Abra o contrato
2. Clique em **Ativar**
3. Confirme na janela de confirmação

### Cancelando um Contrato

Ao cancelar um contrato **ativo** com integração Asaas:

- As parcelas pendentes/em atraso são canceladas no banco
- As cobranças abertas no Asaas são **removidas sequencialmente** (da última para a primeira — requisito do Asaas para parcelamentos)
- Um evento de auditoria é registrado

### Parcelas

Cada contrato possui parcelas geradas automaticamente. Cada parcela tem:

- Número e vencimento
- Valor
- Status: `Pendente`, `Em atraso`, `Pago`, `Cancelado`
- Link para cobrança no gateway (quando gerado)
- Indicador de origem do pagamento (**Asaas** ou **Manual**)

#### Ações por parcela

| Ação | Quando disponível |
|------|-------------------|
| Gerar cobrança | Modo "por parcela", sem cobrança existente |
| Gerar link de pagamento | Modo "link de pagamento", sem cobrança existente |
| Marcar como pago | Parcelas pendentes ou em atraso |

### Marcando como Pago Manualmente

Quando uma parcela precisa ser baixada fora do gateway (ex: pagamento em dinheiro, transferência direta):

1. Clique em **Marcar como pago** na parcela
2. Preencha o **valor recebido** (pré-preenchido com o valor da parcela)
3. Informe a **data do pagamento** (padrão: hoje)
4. Clique em **Confirmar pagamento**

O sistema então:
- Marca a cobrança como recebida no Asaas via `receiveInCash` (se houver cobrança aberta — sem movimentação financeira na conta Asaas)
- Registra o pagamento com `gateway: manual` e salva quem marcou como pago
- Processa os splits de receita automaticamente
- Verifica se o contrato foi concluído

> Se a parcela tiver cobrança no gateway, um aviso amarelo é exibido antes da confirmação.

---

## Recebedores

Recebedores são as pessoas ou empresas que recebem partes da receita dos contratos (splits).

### Tipos de Recebedor

| Tipo | Descrição |
|------|-----------|
| `Percentual` | Recebe uma porcentagem fixa do valor pago |
| `Fixo` | Recebe um valor fixo por pagamento |
| `Taxa` | Controle interno da taxa do gateway (preenchida automaticamente) |
| `Restante` | Recebe o que sobra após todos os outros splits |

### Cadastrando um Recebedor

1. Acesse **Cobrança → Recebedores**
2. Clique em **Novo recebedor**
3. Preencha nome, tipo e dados opcionais (CPF/CNPJ, banco/PIX em "Observações")
4. Salve

::: tip Observações
O campo **Observações** é ideal para guardar a chave PIX ou dados bancários do recebedor. Essas informações aparecem no momento de lançar um repasse, facilitando a transferência.
:::

---

## Templates de Contrato

Templates permitem padronizar configurações que se repetem entre contratos.

### O que é configurado no template?

- Título base, valor, número de parcelas
- Moeda e gateway de pagamento padrão
- Modo de cobrança (por parcela ou link)
- Divisão de receita (splits) pré-configurada

### Recebedor Obrigatório no Template

Ao configurar um split no template, é possível marcar **"Recebedor obrigatório"**. Isso significa:

- No template, o recebedor não precisa ser preenchido
- Ao **gerar um contrato** a partir do template, o sistema exige que aquele recebedor seja selecionado

Útil para splits cujo recebedor varia por contrato (ex: o honorário vai para o profissional responsável por cada caso).

---

## Divisão de Receita (Splits)

A divisão de receita define como o valor pago pelo cliente é distribuído. Os splits são configurados por contrato (ou template) e processados automaticamente a cada pagamento.

### Tipos de Split

| Tipo | Comportamento |
|------|---------------|
| `Percentual` | Calcula X% do valor pago. Enviado ao gateway Asaas automaticamente. |
| `Fixo` | Valor fixo por pagamento. Enviado ao gateway. |
| `Taxa` | Valor da taxa do gateway (informado pelo Asaas no webhook). Marcado como distribuído automaticamente na data do pagamento. **Nunca enviado ao gateway.** |
| `Restante` | Calculado após todos os outros splits. Descontada a taxa, se configurada. **Nunca enviado ao gateway — sempre manual.** |

> Só pode existir **um split do tipo Taxa** e **um do tipo Restante** por contrato/template.

### Auto-distribuir

O campo **Auto-distribuir** em um split faz com que o repasse gerado seja marcado automaticamente como distribuído no momento do pagamento. Ideal para repasses internos onde não há transferência real (ex: o split vai para a própria empresa).

### Lançar Distribuição

Splits não automáticos precisam ser lançados manualmente:

1. No **Relatório de Repasses**, localize o repasse
2. Clique em **Lançar**
3. Informe a data de distribuição e o valor pago
4. Confirme

---

## Relatório de Repasses

O relatório centraliza todos os splits gerados pelos pagamentos.

### Filtros disponíveis

- **Período** – Filtro por data de vencimento do repasse
- **Contrato** – Filtra por contrato específico (seletor modal)
- **Recebedor** – Filtra por recebedor (seletor modal)
- **Tipo de distribuição** – Auto ou manual
- **Status** – Distribuído ou pendente

### Colunas do relatório

| Coluna | Descrição |
|--------|-----------|
| Recebedor | Nome do recebedor |
| Tipo | Tipo de split (percentual, fixo, taxa, restante) |
| Valor Devido | Valor calculado para este split |
| Vencimento | Data de vencimento do repasse |
| Venc. Parcela | Data de vencimento da parcela do cliente |
| Dt. Pagamento | Data em que o cliente efetuou o pagamento |
| Distribuição | Tipo (auto/manual) |
| Distribuído | Status (sim/não) |

---

## Configurações de Pagamento

### Integrando com o Asaas

1. Acesse **Cobrança → Configurações**
2. Selecione **Asaas**
3. Insira sua **chave de API** (começa com `$aact_...`)
4. Escolha o ambiente (**Sandbox** para testes, **Produção** para uso real)
5. Salve

> Stripe e Mercado Pago estão disponíveis em breve.

### Configurando o Webhook

Para receber notificações de pagamento automaticamente:

1. No painel do Asaas → **Minha Conta → Configurações → Integrações → Webhook**
2. Adicione a URL: `https://node.interflow.chat/webhooks/asaas`
3. Selecione os eventos: `PAYMENT_RECEIVED`, `PAYMENT_CONFIRMED`, `PAYMENT_RECEIVED_IN_CASH`
4. No campo **Token de autenticação**, gere ou defina uma chave secreta e copie o valor
5. Salve no Asaas
6. Cole essa mesma chave no campo **Chave secreta do webhook** em **Cobrança → Configurações** no Interflow

::: warning Segurança
A chave secreta garante que apenas eventos legítimos do Asaas sejam processados. Sem ela, qualquer requisição à URL do webhook seria aceita. **Guarde a chave em local seguro — ela não poderá ser visualizada novamente no Asaas.**
:::

### Modos de Cobrança

| Modo | Descrição |
|------|-----------|
| **Por parcela** | Cada parcela gera uma cobrança individual no Asaas (boleto, PIX, etc.) |
| **Link de pagamento** | Um único link de pagamento parcelado é gerado para o contrato inteiro |

### Webhooks

O Asaas envia eventos para o Interflow sempre que um pagamento é processado. O sistema:

- Identifica automaticamente se o pagamento pertence a um contrato
- Registra o pagamento com idempotência (evita duplicatas)
- Processa os splits automaticamente
- **Ignora webhooks de parcelas já pagas** (ex: `RECEIVED_IN_CASH` que chega após baixa manual)

---

## Fluxo Completo

```
Criar Template → Criar Contrato → Ativar → Gerar Cobrança → Cliente Paga
                                                                    ↓
                                              Webhook Asaas / Baixa Manual
                                                                    ↓
                                              Splits processados automaticamente
                                                                    ↓
                                              Relatório de Repasses atualizado
                                                                    ↓
                                              Lançar distribuição (manual ou auto)
```

---

## Perguntas Frequentes

**Posso ter múltiplos splits no mesmo contrato?**
Sim. Você pode combinar percentual + fixo + taxa + restante. A única restrição é um split de cada tipo para `taxa` e `restante`.

**O que acontece se o webhook do Asaas chegar depois da baixa manual?**
O sistema verifica se a parcela já está com status `pago` antes de processar. Se já estiver paga, o webhook é ignorado silenciosamente.

**O split do tipo "restante" é enviado ao Asaas?**
Não. O restante é calculado internamente após o pagamento e a dedução das taxas. Ele sempre fica pendente de lançamento manual.

**Como funciona a ordem de cancelamento de cobranças no Asaas?**
Para parcelamentos, o Asaas exige que as cobranças sejam canceladas da **última parcela para a primeira**. O sistema faz isso automaticamente ao cancelar um contrato.
