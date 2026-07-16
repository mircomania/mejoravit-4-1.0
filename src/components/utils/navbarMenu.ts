import type { NavItem } from '../../types/navigation';

export const navbarMenu: NavItem[] = [
    {
        id: 'inicio',
        to: '/',
        label: 'Inicio',
        title: 'Ir al inicio',
        dataLink: 'navbar-inicio-link',
        type: 'route',
    },
    {
        id: 'precalificar',
        to: '/precalificar',
        label: 'Precalificar',
        title: 'Precalifica tu fondo Mejoravit',
        dataLink: 'navbar-precalificar-link',
        type: 'route',
    },
    {
        id: 'informacion',
        to: '/informacion',
        label: 'Información del fondo',
        title: 'Revisa la informacion de tu fondo Mejoravit',
        dataLink: 'navbar-informacion-link',
        type: 'route',
    },
];
