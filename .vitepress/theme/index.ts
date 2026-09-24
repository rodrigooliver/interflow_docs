import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import '@fontsource-variable/geist'
import '@fontsource-variable/geist-mono'
import CopyForLlm from './CopyForLlm.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(CopyForLlm),
      'home-hero-actions-after': () => h(CopyForLlm),
    })
  },
  enhanceApp({ app, router, siteData }) {
    // extensões do app podem ser adicionadas aqui
  }
} satisfies Theme

