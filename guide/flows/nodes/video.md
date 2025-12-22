# Nó: Enviar Vídeo

Envia arquivos de vídeo para o cliente.

## Visão Geral

O nó **Enviar Vídeo** permite enviar arquivos de vídeo ao cliente, seja por upload ou URL externa.

## Configurações

### URL do Vídeo

Você pode fornecer o vídeo de três formas:

1. **Upload direto**: Clique no ícone de upload para selecionar um arquivo do seu computador. O arquivo será enviado automaticamente para o bucket da Interflow e a URL será preenchida.
2. **URL externa**: Insira a URL do vídeo hospedado externamente
3. **URL dinâmica**: Use variáveis para construir URLs dinâmicas

**Formatos suportados:** MP4, 3GP, MOV

**Tamanho máximo:** 50 MB

::: tip Upload Integrado
Ao fazer upload direto, o arquivo é armazenado no bucket da Interflow, garantindo disponibilidade e performance otimizada.
:::

### URL Dinâmica com Variáveis

Use variáveis para enviar vídeos dinamicamente:

```
https://cdn.exemplo.com/tutoriais/{{video_id}}.mp4
```

### Legenda

Texto que acompanha o vídeo. Suporta variáveis.

### Fixar Mensagem

Quando ativado, o vídeo é fixado no chat.

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Conecta ao próximo nó |

## Exemplos de Uso

### Tutoriais

Envie vídeos tutoriais para ajudar o cliente com instruções visuais.

### Demonstrações de Produto

Mostre seu produto em ação com vídeos demonstrativos.

### Vídeos Personalizados

Use variáveis para enviar vídeos específicos baseados no contexto do atendimento.

## Boas Práticas

::: tip Duração
Prefira vídeos curtos (até 2 minutos). Para conteúdos longos, considere enviar links.
:::

::: tip Compressão
Comprima vídeos para reduzir o tempo de envio sem perder muita qualidade.
:::

::: tip Formato
MP4 com codec H.264 oferece melhor compatibilidade entre dispositivos.
:::

## Próximos Passos

- [Nó: Enviar Documento](/guide/flows/nodes/document)
- [Nó: Enviar Áudio](/guide/flows/nodes/audio)

