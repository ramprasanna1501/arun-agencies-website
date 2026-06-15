import { defineConfig } from 'vite'
// @ts-ignore
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
// @ts-ignore
import fs from 'fs'

declare const __dirname: string;

// Programmatically copy our generated cool drinks image from the artifacts folder
try {
  const assetsDir = path.resolve(__dirname, 'src/assets')
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true })
  }
  const sourcePath = 'C:\\Users\\ADMIN\\.gemini\\antigravity-ide\\brain\\729d74c4-7f2f-45d8-9d95-bd69253205ab\\cool_drinks_display_1781539444980.png'
  const destPath = path.join(assetsDir, 'cool_drinks_display.png')
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath)
  }
} catch (e) {
  console.error('Failed to copy cool drinks image:', e)
}


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id: string) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
