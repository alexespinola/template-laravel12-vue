<template>
    <div>
        <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">{{ title }}</h3>
        <div ref="tabulatorEl" class="bg-white dark:bg-gray-800 rounded-lg shadow-sm"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { DateTime } from 'luxon';
import 'tabulator-tables/dist/css/tabulator.min.css';
import '../../css/tabulator.css';

// Configurar DateTime de Luxon para Tabulator
window.DateTime = DateTime;

// Props
const props = defineProps({
    title: {
        type: String,
        default: 'Data Table'
    },
    data: {
        type: Array,
        default: () => []
    },
    columns: {
        type: Array,
        default: () => []
    },
    options: {
        type: Object,
        default: () => ({})
    }
});

// Emits
const emit = defineEmits(['row-click', 'row-selected', 'cell-edited']);

// Referencias
const tabulatorEl = ref(null);
let tabulator = null;

// Inicializar Tabulator
const initTabulator = () => {
    if (!tabulatorEl.value) return;

    // Configuración base
    const defaultOptions = {
        height: 'auto',
        layout: 'fitColumns',
        pagination: 'local',
        paginationSize: 10,
        paginationSizeSelector: [10, 50, 100, 250, 500],
        movableColumns: true,
        resizableRows: true,
        tooltips: true,
        selectable: true,
        responsiveLayout: 'hide'
    };

    // Combinar opciones por defecto con las recibidas por props
    const config = {
        ...defaultOptions,
        ...props.options,
        data: props.data,
        columns: props.columns,
        // Eventos
        rowClick: (e, row) => {
            emit('row-click', row.getData());
        },
        rowSelectionChanged: (data, rows) => {
            emit('row-selected', data);
        },
        cellEdited: (cell) => {
            emit('cell-edited', {
                field: cell.getField(),
                value: cell.getValue(),
                oldValue: cell.getOldValue(),
                row: cell.getRow().getData()
            });
        }
    };

    tabulator = new Tabulator(tabulatorEl.value, config);
};

// Watchers para reaccionar a cambios en las props
watch(() => props.data, (newData) => {
    if (tabulator) {
        tabulator.setData(newData);
    }
}, { deep: true });

watch(() => props.columns, (newColumns) => {
    if (tabulator) {
        tabulator.setColumns(newColumns);
    }
}, { deep: true });

// Métodos expuestos para el componente padre
const addRow = (data, top = true) => {
    if (tabulator) {
        return tabulator.addRow(data, top);
    }
};

const deleteSelectedRows = () => {
    if (tabulator) {
        const selectedRows = tabulator.getSelectedRows();
        selectedRows.forEach(row => row.delete());
    }
};

const downloadCSV = (filename = 'data.csv') => {
    if (tabulator) {
        tabulator.download('csv', filename);
    }
};

const getSelectedData = () => {
    if (tabulator) {
        return tabulator.getSelectedData();
    }
    return [];
};

const clearSelection = () => {
    if (tabulator) {
        tabulator.deselectRow();
    }
};

// Exponer métodos para el componente padre
defineExpose({
    addRow,
    deleteSelectedRows,
    downloadCSV,
    getSelectedData,
    clearSelection,
    tabulator: () => tabulator
});

// Lifecycle
onMounted(() => {
    initTabulator();
});

onUnmounted(() => {
    if (tabulator) {
        tabulator.destroy();
    }
});
</script>

<style scoped>
/* Los estilos principales están en /resources/css/tabulator.css */
/* Solo estilos adicionales específicos del componente aquí si son necesarios */
</style>
