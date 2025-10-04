<template>
    <AuthenticatedLayout>
        <Head title="Dashboard - License Hub" />

        <template #header>
            <div class="flex items-center justify-between px-4">
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    <font-awesome-icon icon="home" class="mr-2" />
                    Dashboard - Template Laravel Vue.js
                </h2>
                <fwb-button color="blue" @click="showWelcomeAlert">
                    <font-awesome-icon icon="info-circle" class="mr-2" />
                    Project Info
                </fwb-button>
            </div>
        </template>

        <div class="py-6">
            <div class="max-w-8xl mx-auto sm:px-6 lg:px-8 space-y-6">

                <!-- Welcome Alert -->
                <fwb-alert v-if="showAlert" type="success" icon @close="showAlert = false">
                    <template #icon>
                        <font-awesome-icon icon="rocket" />
                    </template>
                    <span class="font-medium">¡Bienvenido a License Hub!</span>
                    Aplicación moderna construida con Laravel 12, Vue 3, Inertia.js y componentes Flowbite.
                </fwb-alert>

                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <!-- Laravel Card -->
                    <fwb-card class="p-2 max-w-sm bg-gradient-to-br from-red-500 to-red-600 text-white border-0">
                        <div class="flex items-center justify-between">
                            <div>
                                <h5 class="text-2xl font-bold text-white">Laravel</h5>
                                <p class="text-red-100">v12.32.5</p>
                            </div>
                            <font-awesome-icon icon="server" class="text-4xl text-red-100" />
                        </div>
                    </fwb-card>

                    <!-- Vue Card -->
                    <fwb-card class="p-2 max-w-sm bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                        <div class="flex items-center justify-between">
                            <div>
                                <h5 class="text-2xl font-bold text-white">Vue.js</h5>
                                <p class="text-green-100">v3.4.0</p>
                            </div>
                            <font-awesome-icon icon="code" class="text-4xl text-green-100" />
                        </div>
                    </fwb-card>

                    <!-- Inertia Card -->
                    <fwb-card class="p-2 max-w-sm bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                        <div class="flex items-center justify-between">
                            <div>
                                <h5 class="text-2xl font-bold text-white">Inertia.js</h5>
                                <p class="text-purple-100">v2.0.0</p>
                            </div>
                            <font-awesome-icon icon="rocket" class="text-4xl text-purple-100" />
                        </div>
                    </fwb-card>

                    <!-- Components Card -->
                    <fwb-card class="p-2 max-w-sm bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                        <div class="flex items-center justify-between">
                            <div>
                                <h5 class="text-2xl font-bold text-white">Components</h5>
                                <p class="text-blue-100">12+ Librerías integradas</p>
                            </div>
                            <font-awesome-icon icon="cubes" class="text-4xl text-blue-100" />
                        </div>
                    </fwb-card>
                </div>

                <!-- Main Content -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    <!-- Project Features -->
                    <fwb-card>
                        <template #header>
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                <font-awesome-icon icon="star" class="mr-2 text-yellow-500" />
                                Características del Proyecto
                            </h5>
                        </template>

                        <div class="space-y-3">
                            <div v-for="feature in features" :key="feature.name" class="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                                <font-awesome-icon :icon="feature.icon" :class="feature.color + ' text-lg mr-3'" />
                                <div class="flex-1">
                                    <p class="font-medium text-gray-900 dark:text-white">{{ feature.name }}</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ feature.description }}</p>
                                </div>
                                <fwb-button size="xs" color="light" @click="showFeatureInfo(feature)">
                                    <font-awesome-icon icon="info" />
                                </fwb-button>
                            </div>
                        </div>
                    </fwb-card>

                    <!-- UI Libraries -->
                    <fwb-card>
                        <template #header>
                            <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            <font-awesome-icon icon="star" class="mr-2 text-pink-500" />
                                Librerías de UI Instaladas
                            </h5>
                        </template>

                        <div class="space-y-3">
                            <div v-for="library in uiLibraries" :key="library.name" class="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-700">
                                <div class="flex items-center">
                                    <div :class="library.bgColor + ' p-2 rounded-lg mr-3'">
                                        <font-awesome-icon :icon="library.icon" class="text-white" />
                                    </div>
                                    <div>
                                        <p class="font-medium text-gray-900 dark:text-white">{{ library.name }}</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">{{ library.version }}</p>
                                    </div>
                                </div>
                                <fwb-button size="xs" color="blue" @click="openDocumentation(library.docs)">
                                    <font-awesome-icon icon="external-link-alt" class="mr-1" />
                                    Docs
                                </fwb-button>
                            </div>
                        </div>
                    </fwb-card>
                </div>

                <!-- Quick Actions -->
                <fwb-card>
                    <template #header>
                        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
                        <font-awesome-icon icon="home" class="mr-2 text-yellow-500" />
                            Acciones Rápidas
                        </h5>
                    </template>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <fwb-button color="blue" @click="navigateToFlowbite" class="flex flex-col items-center p-4">
                            <font-awesome-icon icon="eye" class="text-2xl mb-0 mx-2" />
                            <span>Ver Componentes</span>
                        </fwb-button>

                        <fwb-button color="green" @click="showThemeOptions" class="flex flex-col items-center p-4">
                            <font-awesome-icon icon="moon" class="text-2xl mb-0 mx-2" />
                            <span>Cambiar Tema</span>
                        </fwb-button>

                        <fwb-button color="purple" @click="showProjectStats" class="flex flex-col items-center p-4">
                            <font-awesome-icon icon="star" class="text-2xl mb-0 mx-2" />
                            <span>Estadísticas</span>
                        </fwb-button>

                        <fwb-button color="red" @click="openGitHub" class="flex flex-col items-center p-4">
                            <font-awesome-icon icon="fa-brands fa-github" class="text-2xl mb-0 mx-2" />
                            <span>GitHub</span>
                        </fwb-button>
                    </div>
                </fwb-card>

            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref } from 'vue';
import { router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Swal from 'sweetalert2';
import {
    FwbAlert,
    FwbButton,
    FwbCard
} from 'flowbite-vue';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faHome, faInfoCircle, faRocket, faStar, faEye, faMoon,
    faExternalLinkAlt, faInfo, faCubes, faMobileAlt, faTable,
    faExclamationTriangle, faFlag, faClock, faHeart, faServer, faCode
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(
    faHome, faInfoCircle, faRocket, faStar, faEye, faMoon,
    faGithub, faExternalLinkAlt, faInfo, faCubes, faMobileAlt, faTable,
    faExclamationTriangle, faFlag, faClock, faHeart, faServer, faCode
);

// Reactive data
const showAlert = ref(true);

// Project features data
const features = ref([
    {
        name: 'Dark Mode Support',
        description: 'Sistema completo de tema oscuro/claro con persistencia',
        icon: 'moon',
        color: 'text-blue-500'
    },
    {
        name: 'Responsive Design',
        description: 'Diseño adaptativo para todos los dispositivos',
        icon: 'mobile-alt',
        color: 'text-green-500'
    },
    {
        name: 'Interactive Tables',
        description: 'Tablas de datos con Tabulator y funcionalidades avanzadas',
        icon: 'table',
        color: 'text-purple-500'
    },
    {
        name: 'Component System',
        description: 'Arquitectura modular con componentes reutilizables',
        icon: 'cubes',
        color: 'text-orange-500'
    },
    {
        name: 'FontAwesome Icons',
        description: 'Más de 2000 iconos con importación por componente',
        icon: 'flag',
        color: 'text-pink-500'
    },
    {
        name: 'SweetAlert2',
        description: 'Alertas y modales interactivos y atractivos',
        icon: 'exclamation-triangle',
        color: 'text-yellow-500'
    }
]);

// UI Libraries data
const uiLibraries = ref([
    {
        name: 'Tailwind CSS',
        version: 'v3.2.1',
        icon: 'star',
        bgColor: 'bg-cyan-500',
        docs: 'https://tailwindcss.com/docs'
    },
    {
        name: 'Flowbite',
        version: 'v3.1.2',
        icon: 'heart',
        bgColor: 'bg-blue-500',
        docs: 'https://flowbite.com/docs'
    },
    {
        name: 'Flowbite Vue',
        version: 'v0.2.2',
        icon: 'code',
        bgColor: 'bg-green-500',
        docs: 'https://flowbite-vue.com'
    },
    {
        name: 'FontAwesome',
        version: 'v7.1.0',
        icon: 'flag',
        bgColor: 'bg-indigo-500',
        docs: 'https://fontawesome.com/icons'
    },
    {
        name: 'Tabulator',
        version: 'v6.3.1',
        icon: 'table',
        bgColor: 'bg-purple-500',
        docs: 'https://tabulator.info/docs'
    },
    {
        name: 'SweetAlert2',
        version: 'v11.14.5',
        icon: 'heart',
        bgColor: 'bg-red-500',
        docs: 'https://sweetalert2.github.io'
    },
    {
        name: 'Luxon',
        version: 'v3.7.2',
        icon: 'clock',
        bgColor: 'bg-yellow-500',
        docs: 'https://moment.github.io/luxon'
    },
    {
        name: 'Vite',
        version: 'v7.1.9',
        icon: 'rocket',
        bgColor: 'bg-orange-500',
        docs: 'https://vitejs.dev'
    }
]);

// Functions
const showWelcomeAlert = () => {
    Swal.fire({
        title: '🚀 License Hub',
        html: `
        <div class="text-left">
            <p class="mb-3"><strong>Stack Tecnológico:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Laravel 12.32.5 - Framework PHP robusto</li>
                <li>Vue.js 3.4 - Framework JavaScript progresivo</li>
                <li>Inertia.js 2.0 - Arquitectura monolítica moderna</li>
                <li>Vite 7.1.9 - Herramientas de desarrollo</li>
                <li>Tailwind CSS 3.2.1 - Framework de CSS</li>
            </ul>
            <p class="mt-4 mb-2"><strong>Características:</strong></p>
            <ul class="list-disc list-inside space-y-1 text-sm">
                <li>Dark mode completo</li>
                <li>Componentes Flowbite Vue</li>
                <li>Tablas interactivas con Tabulator</li>
                <li>Iconos FontAwesome</li>
                <li>Alertas SweetAlert2</li>
            </ul>
        </div>
        `,
        icon: 'info',
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#3B82F6',
        width: '600px'
    });
};

const showFeatureInfo = (feature) => {
    Swal.fire({
        title: feature.name,
        text: feature.description,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: '#3B82F6'
    });
};

const navigateToFlowbite = () => {
    router.visit('ui-example');
};

const showThemeOptions = () => {
    Swal.fire({
        title: 'Opciones de Tema',
        text: 'Usa el botón de luna/sol en la barra superior para cambiar entre modo claro y oscuro.',
        icon: 'info',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3B82F6'
    });
};

const showProjectStats = () => {
    Swal.fire({
        title: '📊 Estadísticas del Proyecto',
        html: `
        <div class="text-left">
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="bg-blue-50 p-3 rounded">
                    <div class="font-bold text-blue-800">Componentes Vue</div>
                    <div class="text-2xl font-bold text-blue-600">15+</div>
                </div>
                <div class="bg-green-50 p-3 rounded">
                    <div class="font-bold text-green-800">UI Libraries</div>
                    <div class="text-2xl font-bold text-green-600">8</div>
                </div>
                <div class="bg-purple-50 p-3 rounded">
                    <div class="font-bold text-purple-800">FontAwesome Icons</div>
                    <div class="text-2xl font-bold text-purple-600">2000+</div>
                </div>
                <div class="bg-orange-50 p-3 rounded">
                    <div class="font-bold text-orange-800">Features</div>
                    <div class="text-2xl font-bold text-orange-600">20+</div>
                </div>
            </div>
        </div>
        `,
        confirmButtonText: 'Genial!',
        confirmButtonColor: '#3B82F6',
        width: '500px'
    });
};

const openGitHub = () => {
    window.open('https://github.com/alexespinola/template-laravel12-vue', '_blank');
};

const openDocumentation = (url) => {
    window.open(url, '_blank');
};
</script>
