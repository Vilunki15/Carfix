import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';
import Maps from './Maps';
import NoCookies from './NoCookies';

const Contact = ({ isCookiesAccepted }) => {
    let mapsContent;
    console.log(isCookiesAccepted)
    if (isCookiesAccepted === false) {
        mapsContent = <NoCookies />
    }
    else {
        mapsContent = <Maps />
    }

    return (
        <div className='content'>
            <h1>Yhteystiedot</h1>
            <ul>
                <li className='content-li'>Puhelin: 045 224 9515</li>
                <li className='content-li'>Osoite: Tervatie 4, 86300 Oulainen</li>
                <li className='content-li'>Sähköposti: carfixoulainen@gmail.com</li>
            </ul>
            {mapsContent}
        </div>
    );
}

export default Contact;