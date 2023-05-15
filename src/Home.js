import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';

const Home = () => {
    return (
        <div className='content'>
            <h1>Etusivu</h1>
            <p>Autonpesu- ja fixauspalvelut laidasta laitaan teille tarjoaa CarFix Oulainen!</p>
            <label htmlFor='content-ul'>Palveluitamme: </label>
            <ul id='content-ul'> 
                <li className='content-li'>autonpesut sisältä ja ulkoa</li>
                <li className='content-li'>auton fixaukset</li>
                <li className='content-li'>kiillotukset</li>
                <li className='content-li'>vahaus</li>
            </ul>
        </div>
    )
}

export default Home;