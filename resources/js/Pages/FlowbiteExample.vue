<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DatePicker from '@/Components/DatePicker.vue';
import TabulatorTable from '@/Components/TabulatorTable.vue';
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import {
    FwbToast ,
    FwbAlert,
    FwbButton,
    FwbCard,
    FwbInput,
    FwbModal,
    FwbDropdown,
    FwbListGroup,
    FwbListGroupItem
} from 'flowbite-vue';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faStar, faHeart, faCheck, faExclamationTriangle, faInfoCircle,
    faUser, faHome, faCog, faCalendar, faSearch, faPlus, faTrash, faDownload
} from '@fortawesome/free-solid-svg-icons';
import {
    faHeart as faHeartRegular,
    faUser as faUserRegular,
    faCalendar as faCalendarRegular
} from '@fortawesome/free-regular-svg-icons';
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(
    faStar, faHeart, faCheck, faExclamationTriangle, faInfoCircle,
    faUser, faHome, faCog, faCalendar, faSearch, faPlus, faTrash, faDownload,
    faHeartRegular, faUserRegular, faCalendarRegular,
    faGithub, faTwitter, faFacebook, faLinkedin
);

const inputValue = ref('');
const showModal = ref(false);
const selectedDate = ref('DD/MM/YYYY');

// Referencias y datos para Tabulator
const tabulatorRef = ref(null);
const tableData = ref([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active', created_at: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active', created_at: '2024-01-16' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', status: 'Inactive', created_at: '2024-01-17' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active', created_at: '2024-01-18' },
]);
const tableColumns = ref([
    { title: 'ID', field: 'id', width: 80, sorter: 'number' },
    { title: 'Name', field: 'name', sorter: 'string' },
    { title: 'Email', field: 'email', sorter: 'string' },
    { title: 'Role', field: 'role', sorter: 'string' },
    { title: 'Status', field: 'status', sorter: 'string' },
    { title: 'Created', field: 'created_at', sorter: 'date' }
]);

const tableOptions = ref({
    rowHeader:{
        headerSort:false,
        resizable: false,
        frozen:true,
        headerHozAlign:"center",
        hozAlign:"center",
        formatter:"rowSelection",
        titleFormatter:"rowSelection",
        cellClick:function(e, cell){
            cell.getRow().toggleSelect();
        }
    },
    height: 'auto',
    layout: 'fitColumns',
    responsiveLayout: 'hide',
    pagination: 'local',
    movableColumns: true,
    resizableRows: true,
    selectable: true,
    tooltips: true,
    addRowPos: 'top',
    history: true
});

// Función para manejar cambios en el datepicker
const onDateChange = (date) => {
    selectedDate.value = date;
};

// Funciones para Tabulator
const addNewRow = () => {
    if (tabulatorRef.value) {
        const newId = Math.max(...tableData.value.map(row => row.id), 0) + 1;
        tabulatorRef.value.addRow({
            id: newId,
            name: 'New User',
            email: `user${newId}@example.com`,
            role: 'User',
            status: 'Active',
            created_at: new Date().toISOString().split('T')[0]
        });
    }
};

const deleteSelected = () => {
    if (tabulatorRef.value) {
        tabulatorRef.value.deleteSelectedRows();
    }
};

const downloadCSV = () => {
    if (tabulatorRef.value) {
        tabulatorRef.value.downloadCSV();
    }
};

const onRowClick = (rowData) => {
    console.log('Row clicked:', rowData);
};

const onRowSelected = (selectedRows) => {
    console.log('Rows selected:', selectedRows);
};

const onCellEdited = (cellData) => {
    console.log('Cell edited:', cellData);
};
</script>


<template>
    <div>
        <Head title="Flowbite Example" />

        <AuthenticatedLayout>
            <template #header>
                <h2 class="mx-auto sm:px-6 lg:px-2  font-semibold text-xl text-gray-800 dark:text-gray-200 ">
                    Flowbite Components Example
                </h2>
            </template>

            <div class="py-5">
                <div class="max-w-8xl mx-auto sm:px-4 lg:px-2">
                    <div class="content-container">
                        <div class="p-6">
                            <h1 class="page-title">Flowbite Components Example</h1>

                            <!-- DatePicker Component -->
                            <div class="mb-6">
                                <h2 class="section-title">DatePicker Component</h2>
                                <DatePicker
                                    v-model="selectedDate"
                                    placeholder="Select date"
                                    @change="onDateChange"
                                />
                            </div>

                            <hr>

                            <!-- Tabulator Table Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Tabulator Table Component</h2>
                                <p class="text-gray-600 dark:text-gray-400 mb-4">
                                    Interactive data table with sorting, filtering, pagination, and editing capabilities.
                                </p>

                                <div class="mb-4 flex gap-2 flex-wrap">
                                    <button
                                        @click="addNewRow"
                                        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        <font-awesome-icon icon="plus" class="mr-2" />
                                        Add Row
                                    </button>
                                    <button
                                        @click="deleteSelected"
                                        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        <font-awesome-icon icon="trash" class="mr-2" />
                                        Delete Selected
                                    </button>
                                    <button
                                        @click="downloadCSV"
                                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        <font-awesome-icon icon="download" class="mr-2" />
                                        Download CSV
                                    </button>
                                </div>

                                <TabulatorTable
                                    ref="tabulatorRef"
                                    title="Table example"
                                    :data="tableData"
                                    :columns="tableColumns"
                                    :options="tableOptions"
                                    @row-click="onRowClick"
                                    @row-selected="onRowSelected"
                                    @cell-edited="onCellEdited"
                                />
                            </div>

                            <hr>

                            <!-- FontAwesome Icons -->
                            <div class="mb-6">
                                <h2 class="section-title">FontAwesome Icons</h2>
                                <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                    <!-- Solid Icons -->
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon icon="user" class="text-2xl text-blue-500 mb-2" />
                                        <p class="text-xs">fas user</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon icon="home" class="text-2xl text-green-500 mb-2" />
                                        <p class="text-xs">fas home</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon icon="cog" class="text-2xl text-yellow-500 mb-2" />
                                        <p class="text-xs">fas cog</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon icon="calendar" class="text-2xl text-purple-500 mb-2" />
                                        <p class="text-xs">fas calendar</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon icon="search" class="text-2xl text-red-500 mb-2" />
                                        <p class="text-xs">fas search</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon icon="plus" class="text-2xl text-indigo-500 mb-2" />
                                        <p class="text-xs">fas plus</p>
                                    </div>

                                    <!-- Regular Icons -->
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon :icon="['far', 'user']" class="text-2xl text-gray-500 mb-2" />
                                        <p class="text-xs">far user</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon :icon="['far', 'calendar']" class="text-2xl text-gray-500 mb-2" />
                                        <p class="text-xs">far calendar</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon :icon="['far', 'heart']" class="text-2xl text-pink-500 mb-2" />
                                        <p class="text-xs">far heart</p>
                                    </div>

                                    <!-- Brand Icons -->
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon :icon="['fab', 'github']" class="text-2xl text-gray-800 dark:text-white mb-2" />
                                        <p class="text-xs">fab github</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon :icon="['fab', 'twitter']" class="text-2xl text-blue-400 mb-2" />
                                        <p class="text-xs">fab twitter</p>
                                    </div>
                                    <div class="text-center p-4 border rounded-lg dark:border-gray-600">
                                        <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl text-blue-600 mb-2" />
                                        <p class="text-xs">fab linkedin</p>
                                    </div>
                                </div>

                                <!-- Icon Sizes -->
                                <div class="mt-6">
                                    <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Icon Sizes</h3>
                                    <div class="flex items-center space-x-4">
                                        <font-awesome-icon icon="star" class="text-xs text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-sm text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-base text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-lg text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-xl text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-2xl text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-3xl text-yellow-500" />
                                        <font-awesome-icon icon="star" class="text-4xl text-yellow-500" />
                                    </div>
                                </div>

                                <!-- Spinning Icons -->
                                <div class="mt-6">
                                    <h3 class="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Animated Icons</h3>
                                    <div class="flex items-center space-x-4">
                                        <font-awesome-icon icon="cog" spin class="text-2xl text-blue-500" />
                                        <font-awesome-icon icon="search" pulse class="text-2xl text-green-500" />
                                        <font-awesome-icon icon="heart" beat class="text-2xl text-red-500" />
                                    </div>
                                </div>
                            </div>

                            <hr>

                            <!-- Dropdown Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Dropdown Component</h2>
                                <div class="flex space-x-4 mb-4">
                                    <fwb-dropdown placement="bottom">
                                        <template #trigger>
                                            <fwb-button color="light">
                                                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                                                <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                                                </svg>
                                            </fwb-button>
                                        </template>
                                            <fwb-list-group >
                                                <fwb-list-group-item>
                                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                                </fwb-list-group-item>
                                                <fwb-list-group-item>
                                                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                                </fwb-list-group-item>
                                            </fwb-list-group>
                                    </fwb-dropdown>

                                    <fwb-dropdown placement="bottom">
                                        <fwb-list-group >
                                            <fwb-list-group-item>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </fwb-list-group-item>
                                            <fwb-list-group-item>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </fwb-list-group-item>
                                        </fwb-list-group>
                                    </fwb-dropdown>
                                </div>
                            </div>

                            <hr>

                            <!-- Alert Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Alert Component</h2>
                                <fwb-alert type="success" closable icon class="dark:bg-gray-700">
                                    ¡Flowbite se ha instalado correctamente!
                                </fwb-alert>
                            </div>

                            <hr>

                            <!-- Toast Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Toast Component</h2>
                                <fwb-toast type="success" icon class="dark:bg-gray-700">
                                    ¡Flowbite se ha instalado correctamente!
                                </fwb-toast>
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

                            <hr>

                            <!-- Card Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Card Component</h2>
                                <fwb-card class="max-w-sm p-3">
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

                            <hr>

                            <!-- Input Component -->
                            <div class="mb-6">
                                <h2 class="section-title">Input Component</h2>
                                <div class="max-w-sm">
                                    <fwb-input
                                        v-model="inputValue"
                                        label="Email"
                                        placeholder="example@email.com"
                                        type="email"
                                        validation-status=""
                                        label-class="dark:text-gray-200"
                                    />
                                    <p class="mt-2 text-sm secondary-text">Valor actual: {{ inputValue }}</p>


                                    <fwb-input
                                        v-model="inputValue"
                                        label="Your name"
                                        placeholder="Success input"
                                        required
                                        validation-status="success"
                                    >
                                        <template #validationMessage>
                                        <span class="font-medium">Well done!</span> Some success message.
                                        </template>
                                    </fwb-input>

                                    <fwb-input
                                        v-model="inputValue"
                                        label="Your name"
                                        placeholder="Error input"
                                        required
                                        validation-status="error"
                                    >
                                        <template #validationMessage>
                                        <span class="font-medium">Oh, snapp!</span> Some error message.
                                        </template>
                                    </fwb-input>
                                </div>
                            </div>

                            <hr>

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
        </AuthenticatedLayout>
    </div>
</template>

