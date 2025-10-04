// Mock de Flowbite para tests
export const initFlowbite = vi.fn();
export const initDatepickers = vi.fn();
export const initDropdowns = vi.fn();
export const initModals = vi.fn();
export const initTooltips = vi.fn();
export const initPopovers = vi.fn();

export const Datepicker = class MockDatepicker {
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;
        this._selectedDate = null;
    }

    setDate(date) {
        this._selectedDate = date;
        if (typeof this.options.onSelect === 'function') {
            this.options.onSelect(date);
        }
    }

    getDate() {
        return this._selectedDate;
    }

    show() {
    // Mock show behavior
    }

    hide() {
    // Mock hide behavior
    }

    destroy() {
    // Mock destroy behavior
    }
};

export const Modal = class MockModal {
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;
    }

    show() {
    // Mock show behavior
    }

    hide() {
    // Mock hide behavior
    }

    toggle() {
    // Mock toggle behavior
    }
};

export const Dropdown = class MockDropdown {
    constructor(element, options = {}) {
        this.element = element;
        this.options = options;
    }

    show() {
    // Mock show behavior
    }

    hide() {
    // Mock hide behavior
    }

    toggle() {
    // Mock toggle behavior
    }
};

// Mock por defecto
export default {
    initFlowbite,
    initDatepickers,
    initDropdowns,
    initModals,
    initTooltips,
    initPopovers,
    Datepicker,
    Modal,
    Dropdown
};
