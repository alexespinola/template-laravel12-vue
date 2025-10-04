import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

export default [
    // Configuración base de JavaScript recomendada
    js.configs.recommended,

    // Configuración recomendada para Vue.js
    ...pluginVue.configs['flat/recommended'],

    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                // Variables globales del navegador
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                localStorage: 'readonly',
                sessionStorage: 'readonly',
                setTimeout: 'readonly',
                setInterval: 'readonly',
                clearTimeout: 'readonly',
                clearInterval: 'readonly',
                MutationObserver: 'readonly',
                // Variables globales de Node.js (para archivos de configuración)
                process: 'readonly',
                __dirname: 'readonly',
                __filename: 'readonly',
                // Variables globales de Vite
                import: 'readonly',
                // Variables globales de Laravel/Inertia
                route: 'readonly'
            }
        },
        rules: {
            // Reglas de JavaScript
            'no-unused-vars': 'warn',
            'no-console': ['warn', { allow: ['error', 'warn'] }],
            'prefer-const': 'error',
            'no-var': 'error',
            'eqeqeq': 'error',
            'curly': 'error',
            'semi': ['error', 'always'],
            'quotes': ['error', 'single'],
            'indent': ['error', 4],
            'comma-dangle': ['error', 'never'],

            // Reglas específicas de Vue
            'vue/html-indent': ['error', 4],
            'vue/max-attributes-per-line': ['error', {
                'singleline': 5,
                'multiline': 1
            }],
            'vue/singleline-html-element-content-newline': 'off',
            'vue/multiline-html-element-content-newline': 'off',
            'vue/html-self-closing': ['warn', {
                'html': {
                    'void': 'always',
                    'normal': 'never',
                    'component': 'always'
                },
                'svg': 'always',
                'math': 'always'
            }],
            'vue/component-name-in-template-casing': ['warn', 'PascalCase', {
                'registeredComponentsOnly': false,
                'ignores': ['fwb-button', 'fwb-card', 'fwb-alert', 'fwb-modal', 'fwb-input', 'fwb-dropdown', 'fwb-list-group', 'fwb-list-group-item', 'fwb-toast']
            }],
            'vue/multi-word-component-names': 'off',
            'vue/require-prop-types': 'warn',
            'vue/require-default-prop': 'off',
            'vue/no-unused-components': 'warn',
            'vue/no-unused-vars': 'warn',
            'vue/attributes-order': 'warn'
        }
    },

    // Configuración específica para archivos de configuración
    {
        files: ['vite.config.js', 'vitest.config.js', 'tailwind.config.js', 'postcss.config.js'],
        languageOptions: {
            globals: {
                module: 'readonly',
                require: 'readonly',
                exports: 'readonly'
            }
        },
        rules: {
            'no-console': 'off'
        }
    },

    // Configuración específica para archivos de test
    {
        files: ['tests/**/*.js', '**/*.test.js', '**/*.spec.js'],
        languageOptions: {
            globals: {
                // Variables globales de Vitest
                vi: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                test: 'readonly',
                expect: 'readonly',
                beforeEach: 'readonly',
                afterEach: 'readonly',
                beforeAll: 'readonly',
                afterAll: 'readonly',
                global: 'readonly',
                // Variables globales del navegador para tests
                window: 'readonly',
                document: 'readonly',
                HTMLElement: 'readonly',
                Element: 'readonly'
            }
        },
        rules: {
            'no-console': 'off',
            'no-unused-vars': 'warn'
        }
    },

    // Ignorar ciertos archivos
    {
        ignores: [
            'node_modules/**',
            'vendor/**',
            'public/build/**',
            'storage/**',
            'bootstrap/cache/**',
            'database/**'
        ]
    }
];
