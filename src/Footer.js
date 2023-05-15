import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';


const Footer = () => {
    return (
        <div className='footer'>
            <footer>
                <div className='container-left'>
                    <ul>
                        <li>CarFix Oulainen</li>
                        <li>Tervatie 4, 86300 Oulainen</li>
                        <li>Y-Tunnus: 2821171-5</li>
                    </ul>
                </div>
                <div className='container-right'>
                    <ul>
                        <li>Puhelin: 045 224 9515</li>
                        <li>Sähköposti: carfixoulainen@gmail.com</li>
                        <li>Verkkosivut: &copy;Vilunki 2023</li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;