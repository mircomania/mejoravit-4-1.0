import styles from '../../../styles/modules/contacto/sectionCp1.module.css';

import icono from '../../../assets/images/home/icono-home-2-2.svg';

import { sectionCp1Menu } from '../../utils/sectionCp1Menu';

export const SectionCp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <article className={styles.sectionContenido}>
                <header>
                    <img src={icono} alt="Lista de datos" />

                    <h1>¿Por qué estos datos?</h1>
                </header>

                <div className={styles.sectionDatos}>
                    {sectionCp1Menu.map((item) => (
                        <div key={item.id} className={styles.dato}>
                            <img src={item.img} alt={item.title} />

                            <div>
                                <h3>{item.title}</h3>

                                <p>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>
        </section>
    );
};
