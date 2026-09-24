# Nó: Enviar Documento

Envia documentos (PDF, DOC, etc.) para o cliente.

## Visão Geral

O nó **Enviar Documento** permite enviar arquivos de documentos ao cliente, como PDFs, planilhas, documentos de texto e outros formatos.

## Configurações

### URL do Documento

Você pode fornecer o documento de três formas:

1. **Upload direto**: Clique no ícone de upload para selecionar um arquivo do seu computador. O arquivo será enviado automaticamente para o bucket da Interflow e a URL será preenchida.
2. **URL externa**: Insira a URL do documento hospedado externamente
3. **URL dinâmica**: Use variáveis para construir URLs dinâmicas

**Formatos suportados:** PDF, DOC, DOCX, XLS, XLSX, TXT, CSV

**Tamanho máximo:** 10 MB

::: tip Upload Integrado
Ao fazer upload direto, o arquivo é armazenado no bucket da Interflow, garantindo disponibilidade e performance otimizada.
:::

### URL Dinâmica com Variáveis

Use variáveis para enviar documentos dinamicamente:

```
https://api.exemplo.com/contratos/{{contract_id}}.pdf
```

### Legenda

Texto que acompanha o documento. Útil para explicar o conteúdo.

### Fixar Mensagem

Quando ativado, o documento é fixado no chat.

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Conecta ao próximo nó |

## Exemplos de Uso

### Contratos

Envie contratos para assinatura:

```
Legenda:
Contrato de Prestação de Serviços
Por favor, leia atentamente e nos avise se tiver dúvidas.
```

### Boletos e Faturas

Envie boletos ou faturas em PDF:

```
Legenda:
Boleto - Vencimento: {{due_date}}
Valor: R$ {{amount}}
```

### Manuais e Guias

Envie manuais de produtos ou guias de uso.

### Relatórios

Envie relatórios personalizados gerados dinamicamente.

## Boas Práticas

::: tip Nome do Arquivo
Certifique-se de que o arquivo tenha um nome descritivo para facilitar a identificação.
:::

::: tip PDF
PDF é o formato mais recomendado por sua compatibilidade universal.
:::

::: tip Segurança
Para documentos sensíveis, considere usar links temporários ou com autenticação.
:::

## Próximos Passos

- [Nó: Enviar Imagem](/guide/flows/nodes/image)
- [Nó: Enviar Email](/guide/flows/nodes/email)

