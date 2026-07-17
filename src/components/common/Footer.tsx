import { SmartLink } from '../../utils/SmartLink';
import { NavItems } from '../utils/NavItems';

import { footerMenu } from '../utils/footerMenu';

import logo from '../../assets/images/common/logo.svg';

export function Footer() {
    return (
        <footer className="footer">
            <SmartLink to="/" aria-label="Ir a la página de inicio" data-link="footer-logo-btn">
                <img src={logo} alt="Logotipo de Mejoravit en el pie de página" loading="lazy" decoding="async" />
            </SmartLink>

            <ul>
                {footerMenu.map((item) => (
                    <li key={item.id}>
                        <NavItems item={item} />
                    </li>
                ))}
            </ul>

            <p>© 2026 Mejoravit. All rights reserved.</p>
        </footer>
    );
}
