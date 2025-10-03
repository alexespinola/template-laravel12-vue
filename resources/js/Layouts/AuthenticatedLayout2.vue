<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Sidebar from '@/Components/Sidebar.vue';
import { Link } from '@inertiajs/vue3';
import { useTheme } from '@/composables/useTheme.js';

// Usar el composable del tema
const { isDarkMode, toggleDarkMode, initializeTheme } = useTheme();

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

// Función para cerrar dropdown al hacer clic fuera
const closeDropdownOnClickOutside = (event) => {
    if (showUserDropdown.value && !event.target.closest('.user-dropdown')) {
        showUserDropdown.value = false;
    }
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
    // Agregar listener para cerrar dropdown
    document.addEventListener('click', closeDropdownOnClickOutside);

    // Agregar listener para cambio de tamaño de ventana
    window.addEventListener('resize', handleResize);
});

// Limpiar listener al desmontar
onUnmounted(() => {
    document.removeEventListener('click', closeDropdownOnClickOutside);
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
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>

                        <!-- Logo -->
                        <Link :href="route('dashboard')" class="flex ml-2 md:mr-24">
                            <ApplicationLogo class="h-8 mr-3" />
                            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                License Hub
                            </span>
                        </Link>
                    </div>

                    <div class="flex items-center">
                        <div class="flex items-center ml-3 space-x-3">
                            <!-- Toggle modo oscuro -->
                            <button
                                @click="toggleDarkMode"
                                type="button"
                                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                                :title="isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
                            >
                                <!-- Icono de luna (modo oscuro activo) -->
                                <svg v-if="isDarkMode" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                </svg>
                                <!-- Icono de sol (modo claro activo) -->
                                <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
                                </svg>
                            </button>

                            <!-- Dropdown usuario -->
                            <div class="relative user-dropdown">
                                <button
                                    @click="showUserDropdown = !showUserDropdown"
                                    type="button"
                                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                >
                                    <img
                                        class="w-8 h-8 rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        :alt="$page.props.auth.user.name"
                                    >
                                </button>

                                <!-- Dropdown menu -->
                                <div
                                    v-show="showUserDropdown"
                                    class="absolute right-0 z-50 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                                >
                                    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                        <div>{{ $page.props.auth.user.name }}</div>
                                        <div class="font-medium truncate">{{ $page.props.auth.user.email }}</div>
                                    </div>

                                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                                        <li>
                                            <Link
                                                :href="route('profile.edit')"
                                                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                                @click="showUserDropdown = false"
                                            >
                                                Profile
                                            </Link>
                                        </li>
                                    </ul>

                                    <div class="py-1">
                                        <Link
                                            :href="route('logout')"
                                            method="post"
                                            as="button"
                                            class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                            @click="showUserDropdown = false"
                                        >
                                            Log Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Sidebar -->
        <Sidebar :sidebar-open="sidebarOpen" />

        <!-- Contenido principal -->
        <div :class="['p-4 transition-all duration-300', sidebarOpen ? 'sm:ml-64' : 'ml-0']">
            <div class="p-4 mt-14">
                <!-- Page Heading -->
                <header v-if="$slots.header" class="bg-white rounded-lg shadow dark:bg-gray-800 mb-4">
                    <div class="px-4 py-6 sm:px-6 lg:px-8">
                        <slot name="header" />
                    </div>
                </header>

                <!-- Page Content -->
                <main>
                    <slot />
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
