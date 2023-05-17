import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';

const Contact = () => {
    return (
        <div className='content'>
            <h1>Yhteystiedot</h1>
            <ul>
                <li className='content-li'>Puhelin: 045 224 9515</li>
                <li className='content-li'>Osoite: Tervatie 4, 86300 Oulaine</li>
                <li className='content-li'>Sähköposti: carfixoulainen@gmail.com</li>
            </ul>
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.6967193785586!2d24.821257982101386!3d64.26053719357195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46811b8f7a4ddcc7%3A0xf37773dffa91d0f6!2sCarFix%20Oulainen!5e0!3m2!1sfi!2sfi!4v1684147313028!5m2!1sfi!2sfi'
                width='90%'
                height='450'
                marginLeft='auto'
                marginRigth='auto'
                style={{ border: '0', paddingBottom: '50px' }}
                allowFullScreen=''
                loading='lazy'
            ></iframe>
        </div>
    )
}

export default Contact;