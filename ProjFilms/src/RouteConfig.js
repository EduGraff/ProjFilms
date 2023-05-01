import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Plans from './pages/plans';
import Details from './pages/details';
import Error from './pages/error.js';
import Cadaster from './pages/cadaster';

export default function RoutesConfig() {
    return (
        <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about/:name' element={<About />} />
                <Route path='/plans' element={<Plans />} />
                <Route path='/details/:filme' element={<Details />} />
                <Route path='/cadaster' element={<Cadaster />} />
                <Route path='*' element={<Error />} />
            </Routes >  
    )};