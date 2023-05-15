import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';

const Services = () => {
    return (
        <div className='content'>
            <h1>Palvelut</h1>
            <h3>Henkilöautot</h3>
            <ul>
                <li className='content-li'>Pesu 20€ (pesuvaha +15€)</li>
                <li className='content-li'>Moottorin pesu 25€</li>
                <li className='content-li'>Kevyt sisustan pesu, imorointi, pölyt ja lasit 40€</li>
                <li className='content-li'>Täydellinen sisustan pesu, imorointi, pintojen puhdistus/hoito, lasit ja penkkien pesu alk 80€</li>
                <li className='content-li'>Tuulilasin pinnoitus 40€ (kaikki lasit +50€)</li>
                <li className='content-li'>Vahaus 50€</li>
                <li className='content-li'>Kovavahaus 90€</li>
                <li className='content-li'>Koneellinen kiillotus alk 150€ (1-step)</li>
                <li className='content-li'>Ajovaloumpioiden kiillotus alk 60€</li>
                <li className='content-li'>Hajunpoisto/otsonointi 60€</li>
                <li className='content-li'>Täysfiksi alk 200€</li>
            </ul>
            <h3>Pakettiautot (Henkilöautoista eroavat hinnat)</h3>
            <ul>
                <li className='content-li'>Pesu 25€ (pesuvaha +20€)</li>
                <li className='content-li'>Moottorin pesu 20€</li>
                <li className='content-li'>Kevyt sisustan pesu 30€</li>
                <li className='content-li'>Täydellinen sisustan pesu alk 70€</li>
                <li className='content-li'>Vahaus alk 60€</li>
                <li className='content-li'>Kovavahaus alk 90€</li>
                <li className='content-li'>Tuulilasin pinnoitus 40€ (kaikki lasit +20€)</li>
                <li className='content-li'>Koneellinen kiillotus alk 200€ (1-step)</li>
                <li className='content-li'>Tavaratilan pesu alk 25€</li>
                <li className='content-li'>Täysfiksi alk 250€</li>
            </ul>
            <p className='single-text'>Myös pienet ruostevauriokorjaukset (hinta tapauskohtainen)</p>
        </div>
    )
}

export default Services;