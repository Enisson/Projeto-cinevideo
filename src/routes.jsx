import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Movie from './pages/Movie';
import Favorites from './pages/Favorites';

const ReactRoutes = () => {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/filme/:id' element={ <Movie />}/>
                <Route path='/favoritos' element={<Favorites />}/>
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default ReactRoutes;