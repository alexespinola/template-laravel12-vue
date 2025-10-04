<script setup>
import { Link } from '@inertiajs/vue3';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faUser, faCog, faEdit } from '@fortawesome/free-solid-svg-icons';
library.add(faHome, faUser, faCog, faEdit);

// Props del componente
defineProps({
    sidebarOpen: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <!-- Sidebar -->
    <aside
        :class="[
            'fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700',
            sidebarOpen ? 'translate-x-0' : '-translate-x-full sm:translate-x-0'
        ]"
    >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <!-- Dashboard -->
                <li>
                    <Link
                        :href="route('dashboard')"
                        :class="[
                            'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
                            route().current('dashboard') ? 'bg-gray-100 dark:bg-gray-700' : ''
                        ]"
                    >
                        <FontAwesomeIcon
                            icon="home"
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                        <span class="ml-3">Dashboard</span>
                    </Link>
                </li>

                <!-- Flowbite Example -->
                <li>
                    <Link
                        :href="route('ui.example')"
                        :class="[
                            'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
                            route().current('ui.example') ? 'bg-gray-100 dark:bg-gray-700' : ''
                        ]"
                    >
                        <FontAwesomeIcon
                            icon="edit"
                            class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                        <span class="ml-3">UI Examples</span>
                    </Link>
                </li>

                <!-- Línea separadora -->
                <li>
                    <hr class="my-4 border-gray-200 dark:border-gray-700" />
                </li>

                <!-- Profile -->
                <li>
                    <Link
                        :href="route('profile.edit')"
                        :class="[
                            'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
                            route().current('profile.edit') ? 'bg-gray-100 dark:bg-gray-700' : ''
                        ]"
                    >
                        <FontAwesomeIcon
                            icon="user"
                            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                        <span class="ml-3">Profile</span>
                    </Link>
                </li>

                <!-- Settings -->
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <FontAwesomeIcon
                            icon="cog"
                            class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        />
                        <span class="ml-3">Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
