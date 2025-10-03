<template>
    <div>
        <Head title="Flowbite Example" />

        <AuthenticatedLayout2>
            <div class="py-12">
                <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="content-container">
                        <div class="p-6">
                            <h1 class="page-title">Flowbite Components Example</h1>

                            <!-- Alert Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Alert Component</h2>
                                <fwb-alert type="success" closable>
                                    ¡Flowbite se ha instalado correctamente!
                                </fwb-alert>
                            </div>

                            <!-- Button Components -->
                            <div class="mb-6">
                                <h2 class="section-title">Button Components</h2>
                                <div class="space-y-4">
                                    <!-- Colores según documentación oficial -->
                                    <div class="space-x-2 space-y-2">
                                        <fwb-button color="default">Default</fwb-button>
                                        <fwb-button color="alternative">Alternative</fwb-button>
                                        <fwb-button color="dark">Dark</fwb-button>
                                        <fwb-button color="light">Light</fwb-button>
                                        <fwb-button color="green">Green</fwb-button>
                                        <fwb-button color="red">Red</fwb-button>
                                        <fwb-button color="yellow">Yellow</fwb-button>
                                        <fwb-button color="purple">Purple</fwb-button>
                                        <fwb-button color="pink">Pink</fwb-button>
                                        <fwb-button color="blue">Blue</fwb-button>
                                    </div>

                                    <!-- Outline buttons -->
                                    <div class="space-x-2">
                                        <fwb-button color="default" outline>Default Outline</fwb-button>
                                        <fwb-button color="dark" outline>Dark Outline</fwb-button>
                                        <fwb-button color="green" outline>Green Outline</fwb-button>
                                        <fwb-button color="red" outline>Red Outline</fwb-button>
                                        <fwb-button color="yellow" outline>Yellow Outline</fwb-button>
                                        <fwb-button color="purple" outline>Purple Outline</fwb-button>
                                    </div>

                                    <!-- Tamaños -->
                                    <div class="space-x-2 items-center flex">
                                        <fwb-button size="xs">Extra Small</fwb-button>
                                        <fwb-button size="sm">Small</fwb-button>
                                        <fwb-button size="md">Medium</fwb-button>
                                        <fwb-button size="lg">Large</fwb-button>
                                        <fwb-button size="xl">Extra Large</fwb-button>
                                    </div>

                                    <!-- Pill buttons -->
                                    <div class="space-x-2">
                                        <fwb-button color="default" pill>Default Pill</fwb-button>
                                        <fwb-button color="green" pill>Green Pill</fwb-button>
                                        <fwb-button color="red" pill>Red Pill</fwb-button>
                                        <fwb-button color="purple" pill>Purple Pill</fwb-button>
                                    </div>

                                    <!-- Gradient buttons (monochrome) -->
                                    <div class="space-x-2">
                                        <fwb-button gradient="blue">Blue Gradient</fwb-button>
                                        <fwb-button gradient="green">Green Gradient</fwb-button>
                                        <fwb-button gradient="red">Red Gradient</fwb-button>
                                        <fwb-button gradient="purple">Purple Gradient</fwb-button>
                                        <fwb-button gradient="pink">Pink Gradient</fwb-button>
                                    </div>

                                    <!-- Gradient buttons (duotone) -->
                                    <div class="space-x-2">
                                        <fwb-button gradient="purple-blue">Purple to Blue</fwb-button>
                                        <fwb-button gradient="green-blue">Green to Blue</fwb-button>
                                        <fwb-button gradient="red-yellow">Red to Yellow</fwb-button>
                                        <fwb-button gradient="pink-orange">Pink to Orange</fwb-button>
                                    </div>
                                </div>
                            </div>

                            <!-- Card Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Card Component</h2>
                                <fwb-card class="max-w-sm">
                                    <template #header>
                                        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            Noteworthy technology acquisitions 2021
                                        </h5>
                                    </template>
                                    <p class="font-normal text-gray-700 dark:text-gray-400">
                                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                    </p>
                                    <template #footer>
                                        <fwb-button>
                                            Read more
                                            <template #suffix>
                                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                                </svg>
                                            </template>
                                        </fwb-button>
                                    </template>
                                </fwb-card>
                            </div>

                            <!-- Input Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Input Component</h2>
                                <div class="max-w-sm">
                                    <fwb-input
                                        v-model="inputValue"
                                        label="Email"
                                        placeholder="example@email.com"
                                        type="email"
                                    />
                                    <p class="mt-2 text-sm secondary-text">Valor actual: {{ inputValue }}</p>
                                </div>
                            </div>

                            <!-- Modal Example -->
                            <div class="mb-6">
                                <h2 class="section-title">Modal Component</h2>
                                <fwb-button @click="showModal = true">Open Modal</fwb-button>
                                <fwb-modal v-if="showModal" @close="showModal = false">
                                    <template #header>
                                        <div class="flex items-center text-lg font-semibold text-gray-900 dark:text-white">
                                            Modal Header
                                        </div>
                                    </template>
                                    <template #body>
                                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                            Este es un modal de ejemplo usando Flowbite Vue. Puedes personalizar el contenido según tus necesidades.
                                        </p>
                                    </template>
                                    <template #footer>
                                        <div class="flex justify-between">
                                            <fwb-button @click="showModal = false" color="blue">
                                                Aceptar
                                            </fwb-button>
                                            <fwb-button @click="showModal = false" color="alternative">
                                                Cancelar
                                            </fwb-button>
                                        </div>
                                    </template>
                                </fwb-modal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout2>
    </div>
</template>

<script setup>
import AuthenticatedLayout2 from '@/Layouts/AuthenticatedLayout2.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import {
    FwbAlert,
    FwbButton,
    FwbCard,
    FwbInput,
    FwbModal
} from 'flowbite-vue';

const inputValue = ref('');
const showModal = ref(false);
</script>
