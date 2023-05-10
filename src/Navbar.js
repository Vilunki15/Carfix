import React, { useState } from 'react';

const Navbar = () => {
    const [ currentPage, setCurrentPage ] = useState('home');
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }
    return (
        <div className='navbar'>
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
        </div>
    )
}

export default Navbar;