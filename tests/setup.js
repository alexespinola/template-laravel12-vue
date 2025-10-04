// Test setup file
import { vi } from 'vitest';

// Mock Inertia.js
global.route = vi.fn(() => '#');

// Mock localStorage
Object.defineProperty(window, 'localStorage', {
    value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
        removeItem: vi.fn(),
        clear: vi.fn()
    },
    writable: true
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(), // deprecated
        removeListener: vi.fn(), // deprecated
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
    }))
});

// Mock FontAwesome
vi.mock('@fortawesome/fontawesome-svg-core', () => ({
    library: {
        add: vi.fn()
    }
}));

vi.mock('@fortawesome/vue-fontawesome', () => ({
    FontAwesomeIcon: {
        name: 'FontAwesomeIcon',
        template: '<i class="fa-icon"></i>'
    }
}));

// Mock Tabulator
vi.mock('tabulator-tables', () => ({
    TabulatorFull: vi.fn().mockImplementation(() => ({
        setData: vi.fn(),
        setColumns: vi.fn(),
        addRow: vi.fn(),
        deleteRow: vi.fn(),
        getSelectedRows: vi.fn(() => []),
        getSelectedData: vi.fn(() => []),
        deselectRow: vi.fn(),
        download: vi.fn(),
        destroy: vi.fn()
    }))
}));

// Mock Luxon
vi.mock('luxon', () => ({
    DateTime: {
        now: vi.fn(() => ({
            toFormat: vi.fn(() => '2024-01-01')
        })),
        fromISO: vi.fn(() => ({
            toFormat: vi.fn(() => '2024-01-01')
        }))
    }
}));

// Mock SweetAlert2
vi.mock('sweetalert2', () => ({
    default: {
        fire: vi.fn().mockResolvedValue({ isConfirmed: true }),
        close: vi.fn()
    }
}));

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
}));

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn()
}));

import { config } from '@vue/test-utils';

// Mock global functions
global.vi = vi;

// Mock Inertia.js functions
global.route = vi.fn(() => ({
    current: vi.fn((routeName) => {
    // Mock implementation for route.current()
        if (routeName === 'dashboard') {return true;}
        if (routeName === 'flowbite.example') {return false;}
        if (routeName === 'profile.edit') {return false;}
        return false;
    })
}));

// Configure Vue Test Utils
config.global.mocks = {
    $page: {
        props: {
            auth: {
                user: {
                    name: 'Test User',
                    email: 'test@example.com'
                }
            }
        }
    },
    route: global.route
};

// Mock Inertia.js Link component
config.global.stubs = {
    Link: {
        name: 'Link',
        template: '<a><slot /></a>',
        props: ['href', 'method', 'as']
    }
};

// Mock Flowbite with all required methods and dynamic import support
// Mock de Flowbite completo
vi.mock('flowbite', () => ({
    default: {
        initFlowbite: vi.fn(),
        initDatepickers: vi.fn(),
        initDropdowns: vi.fn(),
        initModals: vi.fn()
    },
    initFlowbite: vi.fn(),
    initDatepickers: vi.fn(),
    initDropdowns: vi.fn(),
    initModals: vi.fn()
}));

// Mock global para manejar import() dinámico
global.importFlowbite = vi.fn().mockResolvedValue({
    initFlowbite: vi.fn(),
    initDatepickers: vi.fn(),
    initDropdowns: vi.fn(),
    initModals: vi.fn()
});

// Mock FontAwesome
vi.mock('@fortawesome/fontawesome-svg-core', () => ({
    library: {
        add: vi.fn()
    }
}));

vi.mock('@fortawesome/vue-fontawesome', () => ({
    FontAwesomeIcon: {
        name: 'FontAwesomeIcon',
        template: '<i class="fa-icon"></i>',
        props: ['icon', 'class']
    }
}));

// Mock FontAwesome icon packages
vi.mock('@fortawesome/free-solid-svg-icons', () => ({
    faHome: {},
    faUser: {},
    faCog: {},
    faEdit: {},
    faCalendar: {}
}));
vi.mock('@fortawesome/free-regular-svg-icons', () => ({}));
vi.mock('@fortawesome/free-brands-svg-icons', () => ({}));

// Mock CSS imports
vi.mock('tabulator-tables/dist/css/tabulator.min.css', () => ({}));

// Mock Luxon
vi.mock('luxon', () => ({
    DateTime: {
        now: vi.fn(() => ({ toISO: () => '2023-01-01T00:00:00.000Z' })),
        fromISO: vi.fn(() => ({ toISO: () => '2023-01-01T00:00:00.000Z' }))
    }
}));

// Marcar que estamos en entorno de testing
global.window.vitest = true;

// Mock dynamic import function for Flowbite specifically
const originalImport = global.import || window.import;
global.import = vi.fn((module) => {
    if (module === 'flowbite') {
        return Promise.resolve({
            default: {
                initFlowbite: vi.fn(),
                initDatepickers: vi.fn(),
                Datepicker: class MockDatepicker {
                    constructor(element, options = {}) {
                        this.element = element;
                        this.options = options;
                    }
                    setDate(date) {
                        if (typeof this.options.onSelect === 'function') {
                            this.options.onSelect(date);
                        }
                    }
                    getDate() { return null; }
                    show() {}
                    hide() {}
                    destroy() {}
                }
            }
        });
    }
    return originalImport ? originalImport(module) : Promise.resolve({});
});
