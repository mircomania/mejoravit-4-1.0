import styles from '../../../styles/modules/home/sectionHp1.module.css';
import imgFondo from '../../../assets/images/home/fondo-home.png';
import icono from '../../../assets/images/home/icon-home-1.png';

import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { BotonNav } from '../../utils/BotonNav';

export const SectionHp1 = () => {
    const isMobile = useMediaQuery('(max-width: 575px)');

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                {!isMobile && <img src={imgFondo} className={styles.imgFondo} alt="Fondo de la sección" />}

                <div className={styles.contenido}>
                    <div className={styles.badge}>
                        <img src={icono} alt="icono de casa" />

                        <p>Apoyo Institucional para tu Vivienda</p>
                    </div>

                    <h1>
                        Usa tu <span style={{ color: 'var(--color-red)' }}>Mejoravit</span> para transformar tu Hogar
                    </h1>

                    <p>
                        Accede a recursos para mejora mediante tu fondo acumulado. Transforma tu espacio con soluciones institucionales diseñadas para
                        elevar la calidad de vida de tu familia.
                    </p>

                    <BotonNav to="/precalificar" className="boton-1" dataCta="home-precalificar-btn-1">
                        Precalificación rápida
                    </BotonNav>
                </div>
            </div>
        </section>
    );
};
