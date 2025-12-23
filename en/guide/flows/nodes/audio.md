# Nó: Enviar Áudio

Envia arquivos de áudio para o cliente.

## Visão Geral

O nó **Enviar Áudio** permite enviar arquivos de áudio ao cliente. Você pode fazer upload de um arquivo ou fornecer uma URL dinâmica usando variáveis.

## Configurações

### URL do Áudio

Você pode fornecer o áudio de três formas:

1. **Upload direto**: Clique no ícone de upload para selecionar um arquivo do seu computador. O arquivo será enviado automaticamente para o bucket da Interflow e a URL será preenchida.
2. **URL externa**: Insira a URL do arquivo de áudio hospedado externamente
3. **URL dinâmica**: Use variáveis para construir URLs dinâmicas

**Formatos suportados:** MP3, WAV, OGG, M4A

**Tamanho máximo:** 10 MB

::: tip Upload Integrado
Ao fazer upload direto, o arquivo é armazenado no bucket da Interflow, garantindo disponibilidade e performance otimizada.
:::

### URL Dinâmica com Variáveis

Você pode usar variáveis para construir URLs dinâmicas:

```
https://api.exemplo.com/audios/{{audio_id}}.mp3
```

### Transcrição

Campo opcional para adicionar uma transcrição do áudio. Esta transcrição:

- **Não é enviada ao cliente**
- Serve apenas para contexto interno
- Útil para agentes IA entenderem o conteúdo do áudio

### Fixar Mensagem

Quando ativado, a mensagem é fixada no chat para fácil acesso pelos atendentes.

## Conexões

| Handle | Posição | Descrição |
|--------|---------|-----------|
| Entrada | Esquerda | Recebe conexão do nó anterior |
| Saída | Direita | Conecta ao próximo nó |

## Exemplos de Uso

### Áudio de Boas-vindas

Configure um áudio pré-gravado de boas-vindas para humanizar o atendimento inicial.

### Instruções em Áudio

Envie instruções em formato de áudio para clientes que preferem ouvir ao invés de ler.

### Áudio Dinâmico

Use variáveis para enviar áudios personalizados baseados no contexto:

```
{{base_url}}/audios/{{idioma}}/instrucoes.mp3
```

## Boas Práticas

::: tip Qualidade
Utilize áudios com boa qualidade de gravação e volume adequado.
:::

::: tip Duração
Prefira áudios curtos (até 1 minuto). Para conteúdos longos, divida em partes.
:::

::: tip Transcrição
Sempre adicione a transcrição para melhorar o contexto quando usado com IA.
:::

## Próximos Passos

- [Nó: Enviar Imagem](/guide/flows/nodes/image)
- [Nó: ElevenLabs TTS](/guide/flows/nodes/elevenlabs)

