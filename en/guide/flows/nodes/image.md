# Nó: Enviar Imagem

Envia imagens para o cliente com legenda opcional.

## Visão Geral

O nó **Enviar Imagem** permite enviar imagens ao cliente. Suporta upload direto ou URL externa, com opção de adicionar legenda.

## Configurações

### URL da Imagem

Você pode fornecer a imagem de três formas:

1. **Upload direto**: Clique no ícone de upload para selecionar um arquivo do seu computador. O arquivo será enviado automaticamente para o bucket da Interflow e a URL será preenchida.
2. **URL externa**: Insira a URL da imagem hospedada externamente
3. **URL dinâmica**: Use variáveis para construir URLs dinâmicas

**Formatos suportados:** JPG, JPEG, PNG, GIF, WebP

**Tamanho máximo:** 5 MB

::: tip Upload Integrado
Ao fazer upload direto, o arquivo é armazenado no bucket da Interflow, garantindo disponibilidade e performance otimizada.
:::

### URL Dinâmica com Variáveis

Use variáveis para enviar imagens dinamicamente:

```
https://api.exemplo.com/produtos/{{product_id}}/imagem.jpg
```

### Legenda

Texto que acompanha a imagem. Suporta:

- Texto simples
- Variáveis (<code v-pre>{{nome_variavel}}</code>)
- Emojis

**Exemplo:**
```
Produto: {{product_name}}
Preço: R$ {{product_price}}
```

### Fixar Mensagem

Quando ativado, a imagem é fixada no chat.

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Conecta ao próximo nó |

## Exemplos de Uso

### Catálogo de Produtos

Envie imagens de produtos com informações:

```
Legenda:
{{product_name}}
De R$ {{old_price}} por R$ {{new_price}}
Frete grátis!
```

### Comprovantes

Envie comprovantes de pagamento ou documentos visuais.

### QR Code

Envie QR Codes gerados dinamicamente para pagamentos PIX.

## Boas Práticas

::: tip Resolução
Use imagens com boa resolução, mas otimizadas para web (< 1 MB quando possível).
:::

::: tip Formato
Prefira JPG para fotos e PNG para imagens com transparência ou texto.
:::

::: tip Legenda
Adicione legendas informativas para contextualizar a imagem.
:::

## Próximos Passos

- [Nó: Enviar Vídeo](/guide/flows/nodes/video)
- [Nó: Enviar Documento](/guide/flows/nodes/document)

