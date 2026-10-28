import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from 'eslint-config-prettier/flat'
import globals from 'globals'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,ts,mts,vue}'],
  },

  globalIgnores(['**/dist/**', '**/coverage/**', '**/playwright-report/**', '**/test-results/**']),

  pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,

  // testy jednostkowe Vitesta
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  // pliki konfiguracyjne i testy e2e działają w Node
  {
    files: ['*.config.*', 'e2e/**'],
    languageOptions: { globals: globals.node },
  },

  // na końcu: wyłącza reguły, które gryzą się z Prettierem
  skipFormatting,
)
