import styles from '../../../styles/modules/info/sectionIp3.module.css';
import img from '../../../assets/images/info/img-info-2.png';

import { sectionIp3Menu } from '../../utils/sectionIp3Menu';

export const SectionIp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <article>
                <h2>¿Cómo puedes utilizar tus recursos para mejora?</h2>

                <p>
                    El apoyo institucional está diseñado para ser versátil y cubrir las necesidades reales de habitabilidad y sostenibilidad de tu
                    familia.
                </p>

                <div className={styles.itemsContainer}>
                    {sectionIp3Menu.map((item) => (
                        <div key={item.id} className={styles.itemContainer}>
                            <img src={item.img} alt={item.title} />

                            <h3>{item.title}</h3>
                        </div>
                    ))}
                </div>
            </article>

            <img src={img} alt="familia feliz planeando las reformas en su hogar" />
        </section>
    );
};
