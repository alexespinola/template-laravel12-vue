import { ref, onMounted } from 'vue';

// Estado global del tema
const isDarkMode = ref(false);

// Función para actualizar el tema
const updateTheme = () => {
    const html = document.documentElement;
    const body = document.body;

    if (isDarkMode.value) {
        html.classList.add('dark');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.remove('dark');
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
};

// Función para alternar modo oscuro
const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    updateTheme();
};

// Función para inicializar tema
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        isDarkMode.value = true;
    } else {
        isDarkMode.value = false;
    }

    updateTheme();
};

// Composable para el manejo del tema
export function useTheme() {
    // Inicializar tema solo si no se ha hecho antes
    onMounted(() => {
        if (typeof window !== 'undefined') {
            initializeTheme();
        }
    });

    return {
        isDarkMode,
        toggleDarkMode,
        updateTheme,
        initializeTheme
    };
}
