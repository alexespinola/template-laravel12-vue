<script setup>
import { Link } from '@inertiajs/vue3';

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
                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                            <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                            <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                        </svg>
                        <span class="ml-3">Dashboard</span>
                    </Link>
                </li>

                <!-- Flowbite Example -->
                <li>
                    <Link
                        :href="route('flowbite.example')"
                        :class="[
                            'flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
                            route().current('flowbite.example') ? 'bg-gray-100 dark:bg-gray-700' : ''
                        ]"
                    >
                        <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                            <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                            <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                        </svg>
                        <span class="ml-3">Flowbite Example</span>
                    </Link>
                </li>

                <!-- Línea separadora -->
                <li>
                    <hr class="my-4 border-gray-200 dark:border-gray-700">
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
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                        </svg>
                        <span class="ml-3">Profile</span>
                    </Link>
                </li>

                <!-- Settings -->
                <li>
                    <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 0C4.612 0 0 4.336 0 9.667c0 5.331 4.612 9.667 10 9.667s10-4.336 10-9.667C20 4.336 15.388 0 10 0Zm0 17.556c-4.34 0-7.778-3.582-7.778-8s3.438-8 7.778-8s7.778 3.582 7.778 8s-3.438 8-7.778 8Z"/>
                            <path d="m10.806 10.2 2.125 2.29a.694.694 0 0 1-.011.983.68.68 0 0 1-.972-.011L9.694 11.15a.697.697 0 0 1-.2-.49V5.556a.694.694 0 1 1 1.389 0v4.444c0 .07.028.139.077.189l.846.011Z"/>
                        </svg>
                        <span class="ml-3">Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
