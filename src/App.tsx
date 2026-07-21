import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { HomePage } from './components/pages/HomePage';
import { Footer } from './components/common/Footer';

import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './utils/scrollToTop';

const ContactoPage = lazy(() => import('./components/pages/ContactoPage'));

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
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
