import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    ignores: ['dist', 'node_modules'], // node_modules'ı da eklemek genellikle iyi bir fikirdir.
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // TypeScript dosyalarını da dahil ediyoruz
    languageOptions: {
      ecmaVersion: 'latest', // 'latest' kullanmak genellikle daha iyidir
      globals: {
        ...globals.browser, // Browser globals'larını ekliyoruz
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: 'detect' } }, // React versiyonunu otomatik olarak algılar
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh, // Geliştirme ortamı için
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,  // JSX Runtime'ı kullanıyorsanız
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off', //  Veya 'warn' olarak ayarlayabilirsiniz, güvenlik açısından önemlidir
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],      
    },
    env: {
      browser: true, // Browser ortamını açıkça belirtiyoruz.
      es2022: true,  // veya 'es6' 
    },
  },
]