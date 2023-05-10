import React, { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';

const Main = () => {
    const [ currentPage, setCurrentPage ] = useState('home');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div className='navbar'>
            <HashRouter>
                <div>
                    <ul>
                        <li><NavLink to='/'>Etusivu</NavLink></li>
                        <li><NavLink to='/services'>Palvelut</NavLink></li>
                    </ul>
                </div>
                <div>
                    <Route path='/' Component={Home} />
                    <Route path='/services' Component={Services} />
                </div>
            </HashRouter>
        </div>
    )
}

export default Main;