/**
 * Script para sincronizar arquivos de i18n
 * Se um arquivo não existir em EN ou ES, copia do PT (root)
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')

const locales = ['en', 'es']

// Pastas que precisam ser sincronizadas
const foldersToSync = ['guide', 'api', 'features']

// Arquivos na raiz que precisam ser copiados
const rootFilesToSync = ['changelog.md']

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
}

function copyFileIfNotExists(src, dest) {
  if (!fs.existsSync(dest) && fs.existsSync(src)) {
    ensureDir(path.dirname(dest))
    fs.copyFileSync(src, dest)
    console.log(`📄 Copiado: ${path.relative(rootDir, dest)}`)
    return true
  }
  return false
}

function syncFolder(folderName) {
  const srcFolder = path.join(rootDir, folderName)
  
  if (!fs.existsSync(srcFolder)) {
    return
  }

  // Percorrer recursivamente
  function walkDir(dir, relativePath = '') {
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const srcPath = path.join(dir, item)
      const stat = fs.statSync(srcPath)
      const relPath = path.join(relativePath, item)
      
      if (stat.isDirectory()) {
        walkDir(srcPath, relPath)
      } else if (item.endsWith('.md')) {
        // Copiar para cada locale se não existir
        for (const locale of locales) {
          const destPath = path.join(rootDir, locale, folderName, relPath)
          copyFileIfNotExists(srcPath, destPath)
        }
      }
    }
  }
  
  walkDir(srcFolder)
}

function syncRootFiles() {
  for (const file of rootFilesToSync) {
    const srcPath = path.join(rootDir, file)
    
    for (const locale of locales) {
      const destPath = path.join(rootDir, locale, file)
      copyFileIfNotExists(srcPath, destPath)
    }
  }
}

console.log('🔄 Sincronizando arquivos de i18n...\n')

// Sincronizar pastas
for (const folder of foldersToSync) {
  syncFolder(folder)
}

// Sincronizar arquivos da raiz
syncRootFiles()

console.log('\n✅ Sincronização concluída!')

