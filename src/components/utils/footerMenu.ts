import type { NavItem } from '../../types/navigation';

export const footerMenu: NavItem[] = [
    {
        id: 'inicio',
        to: '/',
        label: 'Inicio',
        title: 'Ir al inicio',
        dataLink: 'footer-inicio-link',
        type: 'route',
    },
    {
        id: 'precalificar',
        to: '/precalificar',
        label: 'Contacto',
        title: 'Precalifica tu fondo Mejoravit',
        dataLink: 'footer-precalificar-link',
        type: 'route',
    },
    {
        id: 'privacidad',
        to: '/politica-privacidad',
        label: 'Privacidad',
        title: 'Conoce la politica de privacidad',
        dataLink: 'footer-privacidad-link',
        type: 'route',
    },
];
