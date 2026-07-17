import styles from '../../../styles/modules/home/sectionHp2.module.css';

import { sectionHp2Menu } from '../../utils/sectionHp2Menu';

export const SectionHp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header>
                <h2>Camino a Mejoravit</h2>

                <p>Sigue estos pasos institucionales</p>
            </header>

            <div className={styles.menu}>
                {sectionHp2Menu.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <div className={styles.imgContainer}>
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className={styles.textoContainer}>
                            <h3>{item.title}</h3>

                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
