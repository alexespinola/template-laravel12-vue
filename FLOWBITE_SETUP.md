# Flowbite Vue - Guía de Instalación y Uso

## ✅ Instalación Completada

Flowbite ha sido instalado y configurado correctamente en tu proyecto Laravel + Inertia + Vue.

### Paquetes Instalados
- `flowbite` - La biblioteca principal de Flowbite
- `flowbite-vue` - Componentes Vue para Flowbite

### Configuración Realizada

#### 1. Tailwind CSS (`tailwind.config.js`)
```javascript
export default {
    content: [
        // ... otras rutas
        './node_modules/flowbite/**/*.js'  // ✅ Agregado
    ],
    plugins: [
        forms,
        require('flowbite/plugin')  // ✅ Agregado
    ],
};
```

#### 2. Archivo principal JS (`resources/js/app.js`)
```javascript
// Importar Flowbite
import 'flowbite';  // ✅ Agregado
```

## 🚀 Uso de Componentes Flowbite

### Página de Ejemplo
Hemos creado una página de ejemplo en: `resources/js/Pages/FlowbiteExample.vue`

**URL para probar:** http://127.0.0.1:8000/flowbite-example

### Componentes Disponibles

#### 1. Alert
```vue
<template>
    <fwb-alert type="success" closable>
        ¡Mensaje de éxito!
    </fwb-alert>
</template>

<script setup>
import { FwbAlert } from 'flowbite-vue';
</script>
```

#### 2. Button
```vue
<template>
    <fwb-button color="blue">Primary Button</fwb-button>
    <fwb-button color="green">Success Button</fwb-button>
    <fwb-button color="red">Danger Button</fwb-button>
</template>

<script setup>
import { FwbButton } from 'flowbite-vue';
</script>
```

#### 3. Card
```vue
<template>
    <fwb-card>
        <template #header>
            <h5>Card Title</h5>
        </template>
        <p>Card content...</p>
        <template #footer>
            <fwb-button>Action</fwb-button>
        </template>
    </fwb-card>
</template>

<script setup>
import { FwbCard, FwbButton } from 'flowbite-vue';
</script>
```

#### 4. Input
```vue
<template>
    <fwb-input 
        v-model="inputValue" 
        label="Email" 
        placeholder="example@email.com"
        type="email"
    />
</template>

<script setup>
import { FwbInput } from 'flowbite-vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

#### 5. Modal
```vue
<template>
    <fwb-button @click="showModal = true">Open Modal</fwb-button>
    <fwb-modal v-if="showModal" @close="showModal = false">
        <template #header>
            <div class="text-lg font-semibold">Modal Header</div>
        </template>
        <template #body>
            <p>Modal content...</p>
        </template>
        <template #footer>
            <fwb-button @click="showModal = false">Close</fwb-button>
        </template>
    </fwb-modal>
</template>

<script setup>
import { FwbModal, FwbButton } from 'flowbite-vue';
import { ref } from 'vue';

const showModal = ref(false);
</script>
```

## 📚 Más Componentes Disponibles

Flowbite Vue incluye muchos más componentes:

- **Navigation**: Navbar, Breadcrumb, Sidebar
- **Forms**: Input, Select, Textarea, Checkbox, Radio
- **Data Display**: Table, List, Badge, Avatar
- **Feedback**: Alert, Toast, Spinner, Progress
- **Overlay**: Modal, Dropdown, Tooltip, Popover
- **Typography**: Heading, Paragraph, Blockquote
- **Layout**: Card, Accordion, Tabs

## 🔗 Recursos Útiles

- [Documentación oficial de Flowbite Vue](https://flowbite-vue.com/)
- [Componentes disponibles](https://flowbite-vue.com/components/)
- [Documentación de Flowbite](https://flowbite.com/docs/getting-started/introduction/)

## 🛠 Comandos de Desarrollo

```bash
# Iniciar servidor de desarrollo de Vite
npm run dev

# Iniciar servidor de Laravel
php artisan serve

# Compilar para producción
npm run build
```

## 🔧 Nueva Funcionalidad: AuthenticatedLayout2

### Layout con Sidebar y Modo Oscuro
Hemos creado un nuevo layout (`AuthenticatedLayout2.vue`) que incluye:

#### ✨ Características:
- **Sidebar fijo**: Menú lateral que ocupa todo el alto de la pantalla
- **Modo oscuro/claro**: Toggle funcional con persistencia en localStorage
- **Responsive**: Se adapta automáticamente a dispositivos móviles
- **Componentes Flowbite**: Integración completa con la biblioteca
- **Navegación mejorada**: Iconos y estados activos

#### 🎯 URLs para Probar:
- **Dashboard tradicional**: http://127.0.0.1:8000/dashboard
- **Dashboard con sidebar**: http://127.0.0.1:8000/dashboard2 
- **Ejemplo Flowbite**: http://127.0.0.1:8000/flowbite-example

#### 🛠 Configuración Técnica:
- ✅ Tailwind CSS configurado con `darkMode: 'class'`
- ✅ Composable `useTheme.js` para manejo global del tema
- ✅ Inicialización automática del tema
- ✅ Prevención de parpadeo (flash) inicial

## ✅ Estado Actual

- ✅ Flowbite instalado
- ✅ Flowbite Vue instalado  
- ✅ Tailwind CSS configurado con modo oscuro
- ✅ Página de ejemplo creada
- ✅ Layout con sidebar implementado
- ✅ Toggle modo oscuro/claro funcional
- ✅ Composable para manejo de tema
- ✅ Ruta de ejemplo agregada
- ✅ Compilación exitosa
- ✅ Servidores funcionando

## 🔴 Solución al Problema de Colores en Flowbite

### Problema Identificado:
- **Versión antigua**: Flowbite Vue 0.2.2 tiene soporte limitado para colores
- **Algunos colores no funcionan** correctamente o no están implementados

### ✅ Soluciones Implementadas:

#### 1. **Componente CustomButton**
Creado un componente personalizado (`CustomButton.vue`) que replica el estilo de Flowbite usando solo Tailwind CSS:

```vue
<CustomButton color="red">Red Button</CustomButton>
<CustomButton color="green" outline>Green Outline</CustomButton>
<CustomButton color="blue" size="lg">Large Blue</CustomButton>
```

**Colores disponibles garantizados:**
- `blue`, `green`, `red`, `yellow`, `purple`, `pink`, `gray`, `dark`, `light`, `alternative`

**Características:**
- ✅ Todos los colores funcionan correctamente
- ✅ Soporte para variante `outline`
- ✅ Múltiples tamaños: `xs`, `sm`, `md`, `lg`, `xl`
- ✅ Modo oscuro completamente compatible
- ✅ Estados disabled y hover
- ✅ Transiciones suaves

#### 2. **Botones HTML/Tailwind Directos**
Como alternativa, se pueden usar botones con clases Tailwind CSS directamente:

```html
<button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition-colors">
    Red Button
</button>
```

### 🎯 Recomendación:
- **Usa CustomButton** para máxima compatibilidad y consistencia
- **Usa botones Tailwind directos** para casos específicos
- **Usa Flowbite components** solo para colores que sepas que funcionan

**¡Ahora tienes botones con colores garantizados que funcionan perfecto!** 🎉
