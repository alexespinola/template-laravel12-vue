<template>
    <AuthenticatedLayout2>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Dashboard con Sidebar
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <h1 class="text-2xl font-bold mb-4">¡Bienvenido al nuevo Dashboard!</h1>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Card 1 -->
                            <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold">Total Users</h3>
                                        <p class="text-3xl font-bold">1,234</p>
                                    </div>
                                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 2 -->
                            <div class="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold">Active Licenses</h3>
                                        <p class="text-3xl font-bold">567</p>
                                    </div>
                                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 3 -->
                            <div class="bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg p-6 text-white">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold">Revenue</h3>
                                        <p class="text-3xl font-bold">$12,345</p>
                                    </div>
                                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clip-rule="evenodd"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-8">
                            <h2 class="text-xl font-semibold mb-4">Características del nuevo layout:</h2>
                            <ul class="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                                <li>✅ Menú lateral fijo con navegación completa</li>
                                <li>✅ Toggle para alternar entre modo claro y oscuro</li>
                                <li>✅ Diseño responsive que se adapta a móviles</li>
                                <li>✅ Navbar superior con información del usuario</li>
                                <li>✅ Componentes de Flowbite integrados</li>
                                <li>✅ Transiciones suaves entre estados</li>
                                <li>✅ Persistencia del tema seleccionado</li>
                            </ul>
                        </div>

                        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                            <p class="text-blue-800 dark:text-blue-200">
                                <strong>💡 Tip:</strong> Usa el botón en la esquina superior derecha para alternar between modo claro y oscuro. El estado se guardará automáticamente en localStorage.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout2>
</template>

<script setup>
import AuthenticatedLayout2 from '@/Layouts/AuthenticatedLayout2.vue';
import { Head } from '@inertiajs/vue3';
</script>
