import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import DatePicker from '@/Components/DatePicker.vue';

// Mock Flowbite
vi.mock('flowbite', () => ({
    Datepicker: vi.fn().mockImplementation(() => ({
        show: vi.fn(),
        hide: vi.fn(),
        destroy: vi.fn(),
        getDate: vi.fn(() => new Date()),
        setDate: vi.fn()
    }))
}));

// Mock FontAwesome
vi.mock('@fortawesome/fontawesome-svg-core', () => ({
    library: {
        add: vi.fn()
    }
}));

vi.mock('@fortawesome/free-solid-svg-icons', () => ({
    faCalendar: {}
}));

describe('DatePicker Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(DatePicker, {
            props: {
                modelValue: '',
                placeholder: 'Select date'
            },
            global: {
                stubs: {
                    'font-awesome-icon': true
                }
            }
        });
    });

    it('renders correctly', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('input').exists()).toBe(true);
    });

    it('has correct placeholder', () => {
        expect(wrapper.find('input').attributes('placeholder')).toBe('Select date');
    });

    it('emits update:modelValue when input changes', async () => {
        const input = wrapper.find('input');
        await input.setValue('2024-01-15');

        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
    });

    it('applies correct CSS classes', () => {
        const input = wrapper.find('input');
        expect(input.classes()).toContain('bg-gray-50');
        expect(input.classes()).toContain('border');
        expect(input.classes()).toContain('border-gray-300');
    });

    it('has FontAwesome calendar icon', () => {
        expect(wrapper.find('[data-testid="calendar-icon"]').exists()).toBe(false); // Stubbed
        // Icon is stubbed, so we check the stub exists
        expect(wrapper.findComponent({ name: 'font-awesome-icon' }).exists()).toBe(true);
    });
});
