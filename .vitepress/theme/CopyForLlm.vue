<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

const rawModules = import.meta.glob(
  ['../../**/*.md', '!../../node_modules/**', '!../../.vitepress/**'],
  { query: '?raw', import: 'default' },
) as Record<string, () => Promise<string>>

const { page, lang } = useData()
const copied = ref(false)

const labels: Record<string, { copy: string; done: string }> = {
  'pt-BR': { copy: 'Copiar para LLM', done: 'Copiado' },
  en: { copy: 'Copy for LLM', done: 'Copied' },
  es: { copy: 'Copiar para LLM', done: 'Copiado' },
}

const label = computed(() => labels[lang.value] ?? labels['pt-BR'])

const moduleKey = computed(() => `../../${page.value.relativePath}`)
const canCopy = computed(() => Boolean(rawModules[moduleKey.value]))

function toMarkdown(raw: string) {
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '').trim()
}

async function copy() {
  const load = rawModules[moduleKey.value]
  if (!load) return
  const raw = await load()
  await navigator.clipboard.writeText(toMarkdown(raw))
  copied.value = true
  window.setTimeout(() => {
    copied.value = false
  }, 1600)
}
</script>

<template>
  <div v-if="canCopy" class="if-copy-llm">
    <button type="button" @click="copy">
      {{ copied ? label.done : label.copy }}
    </button>
  </div>
</template>
