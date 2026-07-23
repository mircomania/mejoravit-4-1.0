import styles from '../../../styles/modules/info/sectionIp2.module.css';
import icono1 from '../../../assets/images/info/icono-info-2-1.svg';
import icono2 from '../../../assets/images/info/icono-info-2-2.svg';

import { sectionIp2Menu } from '../../utils/sectionIp2Menu';

export const SectionIp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <article className={styles.contenido1}>
                <header>
                    <img src={icono1} alt="Lista de requisitos" />

                    <h2>Requisitos para el apoyo</h2>
                </header>

                <div className={styles.itemsContainer}>
                    {sectionIp2Menu.map((item) => (
                        <div key={item.id} className={styles.itemContainer}>
                            <div className={styles.numberContainer}>{item.id}</div>

                            <h3>{item.title}</h3>

                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </article>

            <article className={styles.contenido2}>
                <img src={icono2} alt="Escudo de respaldo" />

                <h2>Respaldo Seguro</h2>

                <p>
                    Tu ahorro previo en el fondo de vivienda funciona como respaldo directo para el apoyo institucional, brindándote mayor seguridad
                    financiera.
                </p>
            </article>
        </section>
    );
};
