import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';
import { Helmet } from 'react-helmet';
import logo from './Assets/Img/headerImg.jpg'

const Header = () => {
    return (
        <div> 
            <div className='metadata'>
                <Helmet>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <meta name="description" content="Autonpesu- ja fixauspalvelut laidasta laitaan teille tarjoaa CarFix Oulainen!"/>
                    <meta name="keywords" content="Autonpesu, carifix, fix, oulainen, auto, likainen, autot, fixaus"/>
                    <meta name="author" content="CarFix Oulainen"/>
                    <meta property="og:title" content="CarFix Oulainen"/>
                    <meta property="og:description" content="Autonpesu- ja fixauspalvelut laidasta laitaan teille tarjoaa CarFix Oulainen!"/>
                    <meta property="og:image" content="https://carfixoulainen.fi/static/media/headerImg.bc743134605778701916.jpg"/>
                    <meta property="og:url" content="https://carfixoulainen.fi/"/>
                    <title>CarFix Oulainen</title>
                </Helmet>
            </div>
            <div className='header'>
                <img src={logo} alt='CarFix Oulainen Logo' />
            </div>
        </div>
    )
}

export default Header;