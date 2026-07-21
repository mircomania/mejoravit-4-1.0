import styles from '../../../styles/modules/home/sectionHp3.module.css';

import logo from '../../../assets/images/common/logo.svg';
import icon from '../../../assets/images/home/icono-home-3-1.svg';

import { Form } from '../../form/Form';

export const SectionHp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2>Precalifica para obtener tu</h2>

                <img src={logo} alt="logotipo de Mejoravit" />

                <p>
                    Ingresa tus datos para precalificar, y un asesor certificado se comunicará contigo para brindarte más información sobre tu crédito
                    Mejoravit.
                </p>
            </header>

            <div className={styles.sectionForm}>
                <h3>Ingresa tus Datos </h3>

                <p className={styles.obligatorio}>*Obligatorio</p>

                <Form />

                <div className={styles.politicasForm}>
                    <img src={icon} alt="candando de seguridad que protege tus datos" />

                    <p>Sus datos están protegidos. El uso de esta información es exclusivamente para fines de evaluación técnica habitacional.</p>
                </div>
            </div>
        </section>
    );
};
