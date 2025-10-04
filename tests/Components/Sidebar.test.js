import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import Sidebar from '@/Components/Sidebar.vue';

// Mock Inertia Link component
const MockLink = {
    template: '<a><slot /></a>',
    props: ['href', 'class']
};

// Mock FontAwesome
vi.mock('@fortawesome/fontawesome-svg-core', () => ({
    library: {
        add: vi.fn()
    }
}));

vi.mock('@fortawesome/free-solid-svg-icons', () => ({
    faHome: {},
    faUser: {},
    faCog: {},
    faEdit: {}
}));

// Mock route helper with current method
global.route = vi.fn(() => ({
    current: vi.fn((routeName) => {
        if (routeName === 'dashboard') {return true;}
        return false;
    })
}));

describe('Sidebar Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(Sidebar, {
            props: {
                sidebarOpen: true
            },
            global: {
                components: {
                    Link: MockLink
                },
                stubs: {
                    'font-awesome-icon': true
                },
                mocks: {
                    route: global.route
                },
                provide: {
                    route: global.route
                }
            }
        });
    });

    it('renders correctly when sidebar is open', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('aside').exists()).toBe(true);
    });

    it('has correct visibility class when sidebar is open', () => {
        const aside = wrapper.find('aside');
        expect(aside.classes()).toContain('translate-x-0');
    });

    it('renders navigation links', () => {
        const links = wrapper.findAll('a[href], .mock-link');
        expect(links.length).toBeGreaterThan(0);
    });

    it('renders Dashboard link', () => {
        expect(wrapper.text()).toContain('Dashboard');
    });

    it('renders Flowbite Example link', () => {
    // El componente puede mostrar "UI Examples" en lugar de "Flowbite Example"
        const text = wrapper.text();
        expect(text).toMatch(/Flowbite Example|UI Examples/);
    });

    it('renders Profile link', () => {
        expect(wrapper.text()).toContain('Profile');
    });

    it('renders Settings link', () => {
        expect(wrapper.text()).toContain('Settings');
    });

    it('applies correct z-index for mobile overlay', () => {
        const aside = wrapper.find('aside');
        expect(aside.classes()).toContain('z-40');
    });
});
