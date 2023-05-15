import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';

const Services = () => {
    return (
        <div className='content'>
            <h1>Palvelut</h1>
            <h3>Henkilöautot</h3>
            <ul>
                <li className='contentLI'>Pesu 20€ (pesuvaha +15€)</li>
                <li className='contentLI'>Moottorin pesu 25€</li>
                <li className='contentLI'>Kevyt sisustan pesu, imorointi, pölyt ja lasit 40€</li>
                <li className='contentLI'>Täydellinen sisustan pesu, imorointi, pintojen puhdistus/hoito, lasit ja penkkien pesu alk 80€</li>
                <li className='contentLI'>Tuulilasin pinnoitus 40€ (kaikki lasit +50€)</li>
                <li className='contentLI'>Vahaus 50€</li>
                <li className='contentLI'>Kovavahaus 90€</li>
                <li className='contentLI'>Koneellinen kiillotus alk 150€ (1-step)</li>
                <li className='contentLI'>Ajovaloumpioiden kiillotus alk 60€</li>
                <li className='contentLI'>Hajunpoisto/otsonointi 60€</li>
                <li className='contentLI'>Täysfiksi alk 200€</li>
            </ul>
            <h3>Pakettiautot (Henkilöautoista eroavat hinnat)</h3>
            <ul>
                <li className='contentLI'>Pesu 25€ (pesuvaha +20€)</li>
                <li className='contentLI'>Moottorin pesu 20€</li>
                <li className='contentLI'>Kevyt sisustan pesu 30€</li>
                <li className='contentLI'>Täydellinen sisustan pesu alk 70€</li>
                <li className='contentLI'>Vahaus alk 60€</li>
                <li className='contentLI'>Kovavahaus alk 90€</li>
                <li className='contentLI'>Tuulilasin pinnoitus 40€ (kaikki lasit +20€)</li>
                <li className='contentLI'>Koneellinen kiillotus alk 200€ (1-step)</li>
                <li className='contentLI'>Tavaratilan pesu alk 25€</li>
                <li className='contentLI'>Täysfiksi alk 250€</li>
            </ul>
            <p id='singleText'>Myös pienet ruostevauriokorjaukset (hinta tapauskohtainen)</p>
        </div>
    )
}

export default Services;