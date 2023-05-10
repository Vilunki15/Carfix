import React, { useState } from 'react';
import Home from './Home';
import Services from './Services';
import Gallery from './Gallery';
import Contact from './Contact';

const Main = () => {
    const [ currentPage, setCurrentPage ] = useState('home');
    const handlePageChange = (page) => () => {
        setCurrentPage(page);
    }
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
            mainContent = <Home />;
            
    }

    return (
        <div>
            <div>
                <button onClick={handlePageChange('home')}>Etusivu</button>
                <button onClick={handlePageChange('services')}>Palvelut</button>
                <button onClick={handlePageChange('gallery')}>Galleria</button>
                <button onClick={handlePageChange('contact')}>Yhteystiedot</button>
            </div>
            <div>
                {mainContent}
            </div>
        </div>
    );
}

export default Main;