<template>
    <div class="relative max-w-sm">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <font-awesome-icon
                icon="calendar"
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
            />
        </div>
        <input
            ref="datepickerInput"
            :id="inputId"
            datepicker
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            :placeholder="placeholder"
            :value="modelValue"
            @input="handleInput"
            @change="handleChange"
        >
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watch } from 'vue';
// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
library.add(faCalendar);

// Props
const props = defineProps({
    modelValue: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: 'Select date'
    },
    id: {
        type: String,
        default: null
    }
});

// Emits
const emit = defineEmits(['update:modelValue', 'change']);

// Refs
const datepickerInput = ref(null);

// Generar ID único si no se proporciona
const inputId = props.id || `datepicker-${Math.random().toString(36).substr(2, 9)}`;

// Función para manejar cambios en el input
const handleInput = (event) => {
    const newValue = event.target.value || '';
    lastValue = newValue;
    emit('update:modelValue', newValue);
    emit('change', newValue);
};

// Función para manejar cambios (cuando el datepicker cambia el valor)
const handleChange = (event) => {
    const newValue = event.target.value || '';
    lastValue = newValue;
    emit('update:modelValue', newValue);
    emit('change', newValue);
};

// Función para inicializar Flowbite en el elemento
const initializeFlowbite = async () => {
    await nextTick();

    if (datepickerInput.value) {
        try {
            // Forzar la inicialización de Flowbite en este elemento específico
            if (window.flowbite && window.flowbite.initFlowbite) {
                window.flowbite.initFlowbite();
            } else if (typeof window !== 'undefined' && !window.vitest) {
                // Solo hacer dynamic import si no estamos en entorno de testing
                // Fallback: reinicializar todos los elementos datepicker
                import('flowbite').then((flowbite) => {
                    if (flowbite.initFlowbite) {
                        flowbite.initFlowbite();
                    }
                }).catch(() => {
                    // Silenciar errores en tests
                });
            }

            // Agregar listener personalizado para detectar cambios del datepicker
            setupDatepickerListener();
        } catch (error) {
            console.error('Error al inicializar DatePicker:', error);
        }
    }
};

// Función para configurar el listener del datepicker
const setupDatepickerListener = () => {
    if (datepickerInput.value) {
        // Usar MutationObserver para detectar cambios en el valor
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                    const newValue = datepickerInput.value.value;
                    if (newValue !== props.modelValue) {
                        emit('update:modelValue', newValue);
                        emit('change', newValue);
                    }
                }
            });
        });

        observer.observe(datepickerInput.value, {
            attributes: true,
            attributeFilter: ['value']
        });

        // También escuchar eventos de click en el calendario
        document.addEventListener('click', (event) => {
            // Si se hace click en una fecha del datepicker
            if (event.target.matches('[data-date]') || event.target.closest('[data-date]')) {
                setTimeout(() => {
                    // Verificar que el elemento aún existe
                    if (!datepickerInput.value) return;

                    const currentValue = datepickerInput.value.value || '';
                    if (currentValue !== props.modelValue) {
                        emit('update:modelValue', currentValue);
                        emit('change', currentValue);
                    }
                }, 100);
            }
        });
    }
};

// Variable para el polling
let pollingInterval = null;
let lastValue = '';

// Función para reinicializar
const reinitialize = () => {
    stopPolling();
    setTimeout(() => {
        if (datepickerInput.value) {
            initializeFlowbite();
            startPolling();
        }
    }, 100);
};

// Función para iniciar el polling
const startPolling = () => {
    if (datepickerInput.value) {
        lastValue = datepickerInput.value.value || '';
        pollingInterval = setInterval(() => {
            // Verificar que el elemento aún existe
            if (!datepickerInput.value) {
                stopPolling();
                return;
            }

            const currentValue = datepickerInput.value.value || '';
            if (currentValue !== lastValue) {
                lastValue = currentValue;
                emit('update:modelValue', currentValue);
                emit('change', currentValue);
            }
        }, 200);
    }
};

// Función para detener el polling
const stopPolling = () => {
    if (pollingInterval) {
        clearInterval(pollingInterval);
        pollingInterval = null;
    }
};

// Watchers
watch(() => props.modelValue, (newValue) => {
    if (datepickerInput.value && (datepickerInput.value.value || '') !== (newValue || '')) {
        datepickerInput.value.value = newValue || '';
        lastValue = newValue || '';
    }
});

// Lifecycle
onMounted(() => {
    initializeFlowbite();
    setTimeout(() => {
        startPolling();
    }, 500);
});

onUnmounted(() => {
    stopPolling();
});

// Exponer métodos para uso externo
defineExpose({
    reinitialize,
    initialize: initializeFlowbite,
    startPolling,
    stopPolling
});
</script>
