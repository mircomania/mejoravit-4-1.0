import { TitleSEO } from '../../utils/TitleSEO';

import { SectionPp1 } from '../exports/SectionPp1';

const PoliticasPage = () => {
    return (
        <main>
            <TitleSEO
                title="Mejoravit | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de fondo Mejoravit."
                canonical="https://mejoravitenlinea.com.mx/politica-privacidad"
            />

            <SectionPp1 />
        </main>
    );
};

export default PoliticasPage;
