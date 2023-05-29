import React, { useState, useEffect } from 'react';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';
import './App.css';
import './Assets/Font/fonts.css';
import CookiePrompt from './CookiePrompt';

const Main = () => {
    //useStates for cookies. 
    const [ isCookiesAccepted, setCookiesAccepted ] = useState(false);
    const [ isCookiesPrompted, setCookiesPrompted ] = useState(false);
    //cookie component hide or show. Hidden when clicked
    let cookiePrompt;
    if (isCookiesPrompted == false) {
        cookiePrompt = <CookiePrompt setCookiesAccepted={setCookiesAccepted} setCookiesPrompted={setCookiesPrompted} />
    }
    else if (isCookiesPrompted == true) {
        cookiePrompt = null
    }
    //Using useState to store current main content
    const [ currentPage, setCurrentPage ] = useState('home');
    //Switch case for page selector
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
            mainContent = <Contact isCookiesAccepted={isCookiesAccepted} />;
            break;
        default:
            mainContent = <Home />;
    }
    //function for pagechange
    const handlePageChange = (page) => () => {
        setCurrentPage(page);
    }
    //useState for keeping mobile menu state.  
    const [ isMenuOpen, setIsMenuOpen ] = useState('off');
    const handleNavbtn = () => {
        let navbar = document.querySelector('.navbar');
        if (isMenuOpen == 'on') {
            navbar.classList.remove('open');
            setIsMenuOpen('off');
        }
        else {
            navbar.classList.add('open');
            setIsMenuOpen('on');
        }
    }
    //function for url redirecting
    const redirectToUrl = (url) => {
        window.open(url, '_blanck', 'noreferrer noopener');
    }
    //returning navbuttons and selected content. Also social media links
    return (
        <div>
            <div className='mobile-menu-button'>
                <button onClick={handleNavbtn}>☰</button>
            </div>
            <div className='navbar'>
                <button onClick={handlePageChange('home')}>ETUSIVU</button>
                <button onClick={handlePageChange('services')}>PALVELUT</button>
                <button onClick={handlePageChange('gallery')}>GALLERIA</button>
                <button onClick={handlePageChange('contact')}>YHTEYSTIEDOT</button>
                <button onClick={() => redirectToUrl('https://www.facebook.com/CarFixoulainen/')}>FACEBOOK</button>
                <button onClick={() => redirectToUrl('https://www.instagram.com/carfix_oulainen/')}>INSTAGRAM</button>
            </div>
            <div>
                {mainContent}
            </div>
            <div>
                {cookiePrompt}
            </div>
        </div>
    );
}

export default Main;