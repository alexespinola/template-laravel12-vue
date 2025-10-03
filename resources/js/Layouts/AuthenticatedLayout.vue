<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Sidebar from '@/Components/Sidebar.vue';
import { Link } from '@inertiajs/vue3';
import { useTheme } from '@/composables/useTheme.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes, faSun, faMoon, faSignOutAlt, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {
    faUser as faUserRegular,
    faCalendar as faCalendarRegular
} from '@fortawesome/free-regular-svg-icons';
library.add(faBars, faTimes, faSun, faMoon, faSignOutAlt, faChevronDown, faUserRegular, faCalendarRegular);
// Usar el composable del tema
const { isDarkMode, toggleDarkMode, initializeTheme } = useTheme();
import {
    FwbAlert,
    FwbButton,
    FwbDropdown,
    FwbListGroup,
    FwbListGroupItem
} from 'flowbite-vue';

const appName = import.meta.env.VITE_APP_NAME || '';

// Inicializar tema inmediatamente para evitar parpadeo
if (typeof window !== 'undefined') {
    initializeTheme();
}

// Función para detectar si es dispositivo pequeño
const isSmallDevice = () => {
    if (typeof window !== 'undefined') {
        return window.innerWidth < 640; // Tailwind's 'sm' breakpoint
    }
    return false;
};

// Estados reactivos - sidebar cerrado por defecto en dispositivos pequeños
const sidebarOpen = ref(!isSmallDevice());
const showUserDropdown = ref(false);

// Función para alternar el sidebar
const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value;
};

// Función para manejar el cambio de tamaño de ventana
const handleResize = () => {
    if (isSmallDevice()) {
        sidebarOpen.value = false;
    } else {
        sidebarOpen.value = true;
    }
};

// Inicializar cuando se monta el componente
onMounted(() => {
    // Agregar listener para cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);
});

// Limpiar listener al desmontar
onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
        <!-- Navbar superior -->
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <!-- Botón toggle sidebar -->
                        <button
                            @click="toggleSidebar"
                            type="button"
                            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <font-awesome-icon :icon="['fas', 'bars']" class="w-6 h-6" />
                        </button>

                        <!-- Logo -->
                        <Link :href="route('dashboard')" class="flex ml-2 md:mr-24">
                            <ApplicationLogo class="h-8 mr-3" />
                            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                {{appName}}
                            </span>
                        </Link>
                    </div>

                    <div class="flex items-center">
                        <div class="flex items-center ml-3 space-x-3">
                            <!-- Toggle dark mode -->
                            <button
                                @click="toggleDarkMode"
                                type="button"
                                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2"
                                :title="isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
                            >
                                <!-- Icono de luna (modo oscuro activo) -->
                                <font-awesome-icon
                                    v-if="isDarkMode"
                                    :icon="['fas', 'moon']"
                                    class="w-5 h-5"
                                />
                                <!-- Icono de sol (modo claro activo) -->
                                <font-awesome-icon
                                    v-else
                                    :icon="['fas', 'sun']"
                                    class="w-5 h-5"
                                />
                            </button>

                            <!-- Dropdown usuario -->
                            <fwb-dropdown align-to-end placement="bottom">
                                <template #trigger>
                                    <fwb-button color="light" class="border-0 focus:ring-0">
                                        <font-awesome-icon :icon="['far', 'user']" class="w-5 h-5" />
                                    </fwb-button>
                                </template>
                                <!-- <nav class="py-2 text-sm text-gray-700 dark:text-gray-200"> -->
                                    <fwb-list-group >
                                        <fwb-list-group-item>
                                            <div class="">
                                                <span class="block text-sm text-gray-900 dark:text-white font-medium">{{ $page.props.auth.user.name }}</span>
                                                <span class="block text-sm text-gray-500 truncate dark:text-gray-400">{{ $page.props.auth.user.email }}</span>
                                            </div>
                                        </fwb-list-group-item>
                                        <fwb-list-group-item>
                                            <Link
                                                :href="route('logout')"
                                                method="post"
                                                as="button"
                                                class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white transition-colors duration-150"
                                                @click="showUserDropdown = false"
                                            >
                                                <div class="flex items-right">
                                                    <font-awesome-icon :icon="['fas', 'sign-out-alt']" class="w-4 h-4 mr-2" />
                                                    Log Out
                                                </div>
                                            </Link>
                                        </fwb-list-group-item>
                                    </fwb-list-group>
                                <!-- </nav> -->
                            </fwb-dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Sidebar -->
        <Sidebar :sidebar-open="sidebarOpen" />

        <!-- Contenido principal -->
        <div :class="['p-4 transition-all duration-300', sidebarOpen ? 'sm:ml-64' : 'ml-0']">
            <div class="p-2 mt-14">
                <!-- Page Heading -->
                <header v-if="$slots.header" class="bg-white rounded-lg shadow dark:bg-gray-800 mb-4">
                    <div class="px-4 py-4 sm:px-4 lg:px-2">
                        <slot name="header" />
                    </div>
                </header>

                <!-- Page Content -->
                <main class="bg-white rounded-lg shadow dark:bg-gray-800">
                    <div class="px-4 py-4 sm:px-4 lg:px-2">
                        <slot />
                    </div>
                </main>
            </div>
        </div>

        <!-- Overlay para móvil -->
        <div
            v-if="sidebarOpen"
            @click="sidebarOpen = false"
            class="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30 sm:hidden"
        ></div>
    </div>
</template>
