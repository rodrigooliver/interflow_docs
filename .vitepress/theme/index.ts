import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // slots personalizados podem ser adicionados aqui
    })
  },
  enhanceApp({ app, router, siteData }) {
    // extensões do app podem ser adicionadas aqui
  }
} satisfies Theme

