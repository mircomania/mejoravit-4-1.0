import styles from '../../../styles/modules/info/sectionIp4.module.css';

import { BotonNav } from '../../utils/BotonNav';

export const SectionIp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <article>
                <h2>Asegura el futuro de tu patrimonio hoy</h2>

                <p>Inicia el proceso para recibir tu apoyo institucional y comienza a transformar tu hogar con calidad y bienestar.</p>

                <BotonNav to="/precalificar" className="boton-2">
                    Inicia tu Mejoravit
                </BotonNav>
            </article>
        </section>
    );
};
