import React, { useState, useEffect } from 'react';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import './App.css';
import './Assets/Font/fonts.css';

const Main = () => {
    const [ currentWidth, setCurrentWidth ] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setCurrentWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    //Using useState to store current main content
    const [ currentPage, setCurrentPage ] = useState('home');
    //function for pagechange
    const handlePageChange = (page) => () => {
        setCurrentPage(page);
    }
    const [ currentMenu, setCurrentMenu ] = useState();
    if (currentWidth < 786) {
    
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
            <div className='mobile-menu-button'>
                <button>☰</button>
            </div>
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