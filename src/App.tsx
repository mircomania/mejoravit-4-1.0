import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/common/Footer';

import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './utils/scrollToTop';

const ContactoPage = lazy(() => import('./components/pages/ContactoPage'));
const InfoPage = lazy(() => import('./components/pages/InfoPage'));

function App() {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/precalificar" element={<ContactoPage />} />
                    <Route path="/informacion" element={<InfoPage />} />
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
