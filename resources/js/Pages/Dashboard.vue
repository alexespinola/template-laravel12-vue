<template>
    <AuthenticatedLayout>
        <Head title="Dashboard" />

        <template #header>
            <h2 class="mx-auto sm:px-6 lg:px-8  font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-5">
            <div class="max-w-8xl mx-auto sm:px-4 lg:px-2">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900 dark:text-gray-100">
                        <h1 class="text-2xl font-bold mb-4">¡Bienvenido!</h1>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- Card 1 -->
                            <div class="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
                                <div class="flex items-center">
                                    <div class="flex-1">
                                        <h3 class="text-lg font-semibold">Total Users</h3>
                                        <p class="text-3xl font-bold">1,234</p>
                                    </div>
                                    <div class="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                                        <font-awesome-icon
                                            icon="check-circle"
                                            class="w-6 h-6"
                                        />
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
                                        <font-awesome-icon
                                            icon="plus"
                                            class="w-6 h-6"
                                        />
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
                                        <font-awesome-icon
                                            icon="dollar-sign"
                                            class="w-6 h-6"
                                        />
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
    </AuthenticatedLayout>
</template>

<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faPlus, faDollarSign } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckCircle, faPlus, faDollarSign);
</script>
