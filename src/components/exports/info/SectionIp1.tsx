import styles from '../../../styles/modules/info/sectionIp1.module.css';
import icono from '../../../assets/images/info/icono-info-1-1.svg';

import img from '../../../assets/images/info/img-info-1.webp';

import { BotonNav } from '../../utils/BotonNav';

export const SectionIp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionContenido}>
                <div className={styles.badge}>
                    <img src={icono} alt="icono de casa" />

                    <p>BIENESTAR DE HOGAR</p>
                </div>

                <h1>Soluciones de Bienestar para tu Vivienda</h1>

                <p>
                    Transforma tu espacio con el apoyo institucional diseñado para mejorar tu calidad de vida. Tu ahorro previo en el fondo de
                    vivienda sirve como el respaldo principal para asegurar estas mejoras.
                </p>

                <BotonNav to="/precalificar" className="boton-nav">
                    Precalificar ahora
                </BotonNav>
            </div>

            <img src={img} alt="Una familia tranquila y feliz" className={styles.imgSection} />
        </section>
    );
};
