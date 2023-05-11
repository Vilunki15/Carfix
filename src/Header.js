import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';
import logo from './Assets/Img/headerImg.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='CarFix Oulainen Logo' />
        </div>
    )
}

export default Header;