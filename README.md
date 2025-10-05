# 🚀 Template - Laravel 12 + Vue 3 + Inertia.js

[![Laravel](https://img.shields.io/badge/Laravel-12.x-FF2D20?style=flat-square&logo=laravel)](https://laravel.com)
[![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org)
[![Inertia.js](https://img.shields.io/badge/Inertia.js-2.x-9553E9?style=flat-square&logo=inertia)](https://inertiajs.com)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

Modern web application built with Laravel, Vue 3, and Inertia.js featuring a complete UI component ecosystem with dark mode support, interactive data tables, and comprehensive user interface components.

## 📋 Table of Contents

- [🛠️ Technology Stack](#️-technology-stack)
- [📦 UI Components & Libraries](#-ui-components--libraries)
- [🔧 Prerequisites](#-prerequisites)
- [⚡ Quick Start](#-quick-start)
- [🎨 UI Features](#-ui-features)
- [📚 Documentation Links](#-documentation-links)
- [🏗️ Project Structure](#️-project-structure)
- [🔄 Development Workflow](#-development-workflow)
- [🧪 Testing](#-testing)
- [🧪 Lint Javascript](#-ESLint-Commands)
- [🏗️ Code styling and standard PHP](#-code-styling-and-standard)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🛠️ Technology Stack

### Backend Framework
- **[Laravel 12.32.5](https://laravel.com)** - PHP web application framework
- **[Inertia.js 2.0](https://inertiajs.com)** - Modern monolith architecture

### Frontend Framework
- **[Vue.js 3.4](https://vuejs.org)** - Progressive JavaScript framework
- **[Vite 7.1.9](https://vitejs.dev)** - Next generation frontend tooling

### Development Dependencies
- **PHP 8.2+** - Server-side scripting language
- **Node.js 20.19+** - JavaScript runtime (required for Vite 7.x)
- **NPM/Yarn** - Package managers

---

## 📦 UI Components & Libraries

### 🎨 Styling & Design System

#### [Tailwind CSS 3.2.1](https://tailwindcss.com)
Utility-first CSS framework for rapid UI development.
```bash
# Configuration
postcss.config.js, tailwind.config.js
```
- **Features**: Responsive design, dark mode support, utility classes
- **Plugins**: `@tailwindcss/forms`, `@tailwindcss/vite`

#### [Flowbite 3.1.2](https://flowbite.com)
Component library built on top of Tailwind CSS.
```bash
# JavaScript components and utilities
import 'flowbite';
```
- **Components**: Modals, dropdowns, alerts, buttons
- **Integration**: JavaScript functionality for interactive components

#### [Flowbite Vue 0.2.2](https://flowbite-vue.com)
Official Vue 3 components for Flowbite.
```javascript
// Available components
import {
    FwbAlert, FwbButton, FwbCard, FwbInput, 
    FwbModal, FwbDropdown, FwbListGroup, 
    FwbListGroupItem, FwbToast
} from 'flowbite-vue';
```
- **Documentation**: [Flowbite Vue Components](https://flowbite-vue.com/components)
- **Features**: TypeScript support, Vue 3 Composition API

### 🔤 Icons & Visual Elements

#### [FontAwesome 7.1.0](https://fontawesome.com)
Comprehensive icon library with Vue 3 integration.
```javascript
// Core packages
@fortawesome/fontawesome-svg-core
@fortawesome/vue-fontawesome

// Icon packages
@fortawesome/free-solid-svg-icons    // 2000+ solid icons
@fortawesome/free-regular-svg-icons  // 150+ regular icons  
@fortawesome/free-brands-svg-icons   // 500+ brand icons
```
- **Usage**: `<font-awesome-icon icon="user" />`
- **Documentation**: [FontAwesome Vue](https://fontawesome.com/docs/web/use-with/vue/)
- **Features**: Tree-shaking, component-level imports, animations

### 📊 Data Tables & Interaction

#### [Tabulator 6.3.1](https://tabulator.info)
Feature-rich interactive data table library.
```javascript
// Full-featured import
import { TabulatorFull as Tabulator } from 'tabulator-tables';
```
- **Features**: 
  - Sorting, filtering, pagination
  - Inline editing and validation
  - Row selection and bulk operations
  - Responsive design
  - Dark mode support
  - CSV/JSON export
- **Documentation**: [Tabulator Documentation](https://tabulator.info/docs/6.3)
- **Custom Styling**: `resources/css/tabulator.css` with Tailwind integration

#### [Luxon 3.7.2](https://moment.github.io/luxon/)
Modern date/time manipulation library (required by Tabulator).
```javascript
// Date formatting for Tabulator
import { DateTime } from 'luxon';
```
- **Usage**: Date formatters, timezone handling
- **Documentation**: [Luxon Documentation](https://moment.github.io/luxon/api-docs/index.html)

### 🎛️ Form Components

#### Custom DatePicker Component
Enhanced date picker built on top of Flowbite's datepicker.
```vue
<DatePicker 
    v-model="selectedDate" 
    placeholder="Select date"
    @change="onDateChange" 
/>
```
- **Features**: Vue reactivity, event handling, dark mode support
- **Location**: `resources/js/Components/DatePicker.vue`

### 🎨 Theme & Dark Mode

#### Custom Theme System
```javascript
// Theme composable
import { useTheme } from '@/composables/useTheme.js';
const { isDarkMode, toggleDarkMode, initializeTheme } = useTheme();
```
- **Features**: 
  - Automatic dark/light mode detection
  - LocalStorage persistence
  - System preference detection
  - Smooth transitions

---

## 🔧 Prerequisites

### System Requirements
- **PHP**: >= 8.2
- **Node.js**: >= 20.19.0 (required for Vite 7.x)
- **NPM**: >= 10.x
- **Composer**: >= 2.x

### Recommended Development Environment
- **OS**: Windows 10/11, macOS, or Linux
- **Web Server**: Apache/Nginx or Laravel's built-in server
- **Database**: MySQL 8.0+ or PostgreSQL 13+
- **IDE**: VS Code with Vue/Laravel extensions

---

## ⚡ Quick Start

### 1. Clone & Install Dependencies
```bash
git clone <repository-url>
cd license-hub

# Install PHP dependencies
composer install

# Install Node.js dependencies  
npm install
```

### 2. Environment Configuration
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Configure database in .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=license_hub
DB_USERNAME=your_username
DB_PASSWORD=your_password

# Set Vite environment variables
APP_NAME="My Application"
```

### 3. Database Setup
```bash
# Run migrations
php artisan migrate

# Seed database (optional)
php artisan db:seed
```

### 4. Development Servers
```bash
# Terminal 1: Laravel backend
php artisan serve

# Terminal 2: Vite frontend
npm run dev
```

### 5. Access Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:8000

---

## 🎨 UI Features

### 🌓 Dark Mode Support
- **System Integration**: Automatic detection of system preferences
- **Manual Toggle**: User-controlled theme switching
- **Persistence**: Theme choice saved in localStorage
- **Components**: All UI components support dark mode

### 📱 Responsive Design
- **Mobile First**: Tailwind CSS mobile-first approach
- **Breakpoints**: Full responsive breakpoint coverage
- **Sidebar**: Collapsible navigation for mobile devices
- **Tables**: Responsive data tables with column hiding

### 🧩 Component Architecture
```
resources/js/
├── Components/
│   ├── ApplicationLogo.vue      # Application branding
│   ├── DatePicker.vue          # Custom date picker
│   ├── Sidebar.vue             # Navigation sidebar
│   └── TabulatorTable.vue      # Data table component
├── Layouts/
│   ├── AuthenticatedLayout.vue  # Main app layout
│   └── GuestLayout.vue         # Public pages layout
└── Pages/
    ├── Dashboard.vue           # Dashboard page
    └── FlowbiteExample.vue     # Component showcase
```

### 🎯 Custom Components

#### TabulatorTable Component
```vue
<TabulatorTable
    ref="tabulatorRef"
    title="Users Management"
    :data="tableData"
    :columns="tableColumns"
    :options="tableOptions"
    @row-click="onRowClick"
    @row-selected="onRowSelected"
    @cell-edited="onCellEdited"
/>
```

#### DatePicker Component
```vue
<DatePicker
    v-model="selectedDate"
    placeholder="Select date"
    @change="onDateChange"
/>
```

---

## 📚 Documentation Links

### 🔗 Official Documentation

| Technology | Documentation | GitHub |
|------------|---------------|--------|
| **Laravel** | [laravel.com/docs](https://laravel.com/docs) | [laravel/laravel](https://github.com/laravel/laravel) |
| **Vue.js** | [vuejs.org/guide](https://vuejs.org/guide/) | [vuejs/core](https://github.com/vuejs/core) |
| **Inertia.js** | [inertiajs.com](https://inertiajs.com) | [inertiajs/inertia](https://github.com/inertiajs/inertia) |
| **Vite** | [vitejs.dev/guide](https://vitejs.dev/guide/) | [vitejs/vite](https://github.com/vitejs/vite) |
| **Tailwind CSS** | [tailwindcss.com/docs](https://tailwindcss.com/docs) | [tailwindlabs/tailwindcss](https://github.com/tailwindlabs/tailwindcss) |

### 🎨 UI Libraries Documentation

| Library | Documentation | Version |
|---------|---------------|---------|
| **Flowbite** | [flowbite.com/docs](https://flowbite.com/docs/getting-started/introduction/) | 3.1.2 |
| **Flowbite Vue** | [flowbite-vue.com](https://flowbite-vue.com) | 0.2.2 |
| **FontAwesome** | [fontawesome.com/docs](https://fontawesome.com/docs) | 7.1.0 |
| **Tabulator** | [tabulator.info/docs](https://tabulator.info/docs/6.3) | 6.3.1 |
| **Luxon** | [moment.github.io/luxon](https://moment.github.io/luxon/) | 3.7.2 |

---

## 🏗️ Project Structure

```
template-laravel-12-vue/
├── 📁 app/                     # Laravel application logic
├── 📁 bootstrap/               # Framework bootstrap files  
├── 📁 config/                  # Configuration files
├── 📁 database/                # Migrations, seeders, factories
├── 📁 public/                  # Public assets
├── 📁 resources/               # Frontend resources
│   ├── 📁 css/ 
│   │   ├── app.css            # Main stylesheet
│   │   └── tabulator.css      # Tabulator dark mode styles
│   ├── 📁 js/
│   │   ├── app.js             # Application entry point
│   │   ├── bootstrap.js       # Framework bootstrap
│   │   ├── 📁 Components/     # Vue components
│   │   ├── 📁 Layouts/        # Layout components
│   │   ├── 📁 Pages/          # Page components
│   │   └── 📁 composables/    # Vue composables
│   └── 📁 views/              # Blade templates
├── 📁 routes/                  # Application routes
├── 📁 storage/                 # File storage
├── 📁 tests/                   # Test files
├── 📁 vendor/                  # Composer dependencies
├── 📁 node_modules/            # NPM dependencies
├── .env                        # Environment variables
├── composer.json               # PHP dependencies
├── package.json                # Node dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

---

## 🔄 Development Workflow

### 🚀 Available Scripts

```bash
# Development
npm run dev          # Start Vite development server
npm run build        # Build for production
php artisan serve    # Start Laravel development server

# Laravel specific
php artisan migrate              # Run database migrations
php artisan migrate:fresh --seed # Fresh migration with seeding
php artisan route:list          # List all routes
php artisan tinker              # Interactive shell

# Asset compilation
npm run build        # Production build
npm run dev          # Development build with HMR
```

### 🔧 Configuration Files

#### Vite Configuration (`vite.config.js`)
```javascript
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
```

#### Tailwind Configuration (`tailwind.config.js`)
```javascript
import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './node_modules/flowbite/**/*.js'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [forms, flowbite],
};
```

### 🎯 Component Development Guidelines

#### 1. Component Structure
```vue
<template>
    <!-- Template content -->
</template>

<script setup>
// Imports
// Props
// Emits  
// Reactive data
// Computed properties
// Methods
// Lifecycle hooks
</script>

<style scoped>
/* Component-specific styles */
</style>
```

#### 2. FontAwesome Usage
```javascript
// Component-level imports (recommended)
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faHome);
```

#### 3. Dark Mode Implementation
```vue
<template>
    <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        <!-- Content -->
    </div>
</template>
```

---

## 🧪 Testing

### Backend Testing
```bash
# Run PHP tests
php artisan test

# Run with coverage
php artisan test --coverage

# Run specific test
php artisan test --filter=ExampleTest
```

### Frontend Testing
```bash
# Run tests
npm run test
```

## 🧪 ESLint-Commands

```bash

# Analizar todo el código JavaScript/Vue
npm run lint

# Analizar y corregir automáticamente todo el código
npm run lint:fix

# Analizar solo archivos JavaScript/Vue en resources/js
npm run lint:js

# Analizar y corregir automáticamente solo JS/Vue
npm run lint:js:fix

```


```bash
# Analizar un archivo específico
npx eslint resources/js/Pages/Welcome.vue

# Corregir automáticamente un archivo específico
npx eslint resources/js/Pages/Welcome.vue --fix

# Analizar toda la carpeta resources/js
npx eslint resources/js/**/*.{js,vue}

# Corregir toda la carpeta resources/js
npx eslint resources/js/**/*.{js,vue} --fix
```
---

## Code styling and standard
### Server-side
We use larastan to verify that the code meets our standards.


```bash
# You should analyze the new code before integrate it with branches corresponding to productive environments (develop, main, etc).
# You can do it by using the following command (within the dev container)
vendor/bin/phpstan analyse --memory-limit=1G
```


```bash
# use PHP CodeSniffer to ensure that our code complies with PSR12 standards.
# Execute the following command to run the PSR12 standars checking
vendor/bin/phpcs --standard=PSR12 app
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request

### Code Style Guidelines
- **PHP**: Follow PSR-12 coding standards
- **Vue**: Use Composition API and `<script setup>`
- **CSS**: Use Tailwind utility classes, avoid custom CSS when possible
- **JavaScript**: Use ES6+ features, prefer const/let over var

---

## 📄 License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

## 🆘 Support & Troubleshooting

### Common Issues

#### Node.js Version Warning
```bash
# Error: You are using Node.js 20.18.0. Vite requires Node.js version 20.19+ 
# Solution: Upgrade Node.js to 20.19+ or 22.12+
```

#### FontAwesome Icons Not Showing
```bash
# Ensure correct imports in components
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIconName } from '@fortawesome/free-solid-svg-icons';
library.add(faIconName);
```

#### Dark Mode Not Working
```bash
# Ensure Tailwind darkMode is set to 'class' in tailwind.config.js
darkMode: 'class'
```

### Getting Help
- 📧 **Issues**: [GitHub Issues](https://github.com/yourusername/license-hub/issues)
- 📖 **Laravel Docs**: [laravel.com/docs](https://laravel.com/docs)
- 💬 **Vue Community**: [discord.gg/vue](https://discord.gg/vue)

---

<p align="center">
Built with ❤️ using Laravel, Vue.js, and modern web technologies
</p>
