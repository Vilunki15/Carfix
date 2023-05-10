<li onClick={() => handlePageChange('home')}>ETUSIVU</li>
                    <li onClick={() => handlePageChange('services')}>PALVELUT</li>
                    <li onClick={() => handlePageChange('gallery')}>GALLERIA</li>
                    <li onClick={() => handlePageChange('contact')}>YHTEYSTIEDOT</li>
                    <nav>
                <ul>
                    <li><a href="#" onClick={() => handlePageChange('home')}>ETUSIVU</a></li>
                    <li><a href="#" onClick={() => handlePageChange('services')}>PALVELUT</a></li>
                    <li><a href="#" onClick={() => handlePageChange('gallery')}>GALLERIA</a></li>
                    <li><a href="#" onClick={() => handlePageChange('contact')}>YHTEYSTIEDOT</a></li>
                    <li><a href='https://www.facebook.com/CarFixoulainen/' target='_blanck' rel="noopener noreferrer">FACEBOOK</a></li>
                    <li><a href='https://www.instagram.com/carfix_oulainen/' target='_blanck' rel="noopener noreferrer">INSTAGRAM</a></li>
                </ul>
            </nav>
import React, { useState } from 'react';
import {
    Route,
    NavLink,
    HashRouter
} from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <p>home</p>
        </div>
    )
}

const Services = () => {
    return (
        <div>
            <p>services</p>
        </div>
    )
}

const Gallery = () => {
    return (
        <div>
            <p>gallery</p>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <p>contact</p>
        </div>
    )
}

const Testi = () => {
    return (
        <div>
            <p>testi</p>
        </div>
    )
}

const Main = ({ currentPage }) => {
    let mainContent;

    switch (currentPage) {
        case 'home':
            mainContent = <Home />;
            break;
        case 'services':
            mainContent = <Services />;
            break;
        case 'gallery':
            mainContent = <Gallery />;
            break;
        case 'contact':
            mainContent = <Contact />;
            break;
        default:
            mainContent = <Testi />;
    }
    return (
        <div>
            {mainContent}
        </div>
    )
}

export default Main;


 return (
        <div className='navbar'>
            <HashRouter>
                <div>
                    <ul>
                        <li><NavLink to='/'>Etusivu</NavLink></li>
                        <li><NavLink to='/services'>Palvelut</NavLink></li>
                    </ul>
                    <div className='main'>
                        <Route path='/' Component={Home} />
                        <Route path='/services' Component={Services} />
                    </div>
                </div>
            </HashRouter>
        </div>
    )