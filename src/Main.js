import React, { useState } from 'react';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import './App.css';

const Main = () => {
    //Using useState to store current main content
    const [ currentPage, setCurrentPage ] = useState('home');
    //function for pagechange
    const handlePageChange = (page) => () => {
        setCurrentPage(page);
    }
    let mainContent;
    //Switch case for page selector
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
            mainContent = <Home />;
            
    }
    //returning navbuttons and selected content. Also social media links
    return (
        <div>
            <div className='navbar'>
                <button onClick={handlePageChange('home')}>ETUSIVU</button>
                <button onClick={handlePageChange('services')}>PALVELUT</button>
                <button onClick={handlePageChange('gallery')}>GALLERIA</button>
                <button onClick={handlePageChange('contact')}>YHTEYSTIEDOT</button>
                <button><a href='https://www.facebook.com/CarFixoulainen/' target='_blanck' rel='noreferrer noopener'>FACEBOOK</a></button>
                <button><a href='https://www.instagram.com/carfix_oulainen/' target='_blanck' rel='noreferrer noopener'>INSTAGRAM</a></button>
            </div>
            <div>
                {mainContent}
            </div>
        </div>
    );
}

export default Main;