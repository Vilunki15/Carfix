import React from 'react';
import './App.css';
import './Assets/Font/fonts.css';

const Home = () => {
    return (
        <div className='content'>
            <h1>Etusivu</h1>
            <p>Autonpesu- ja fixauspalvelut laidasta laitaan teille tarjoaa CarFix Oulainen!</p>
            <label htmlFor='contentUL'>Palveluitamme: </label>
            <ul id='contentUL'> 
                <li className='contentLI'>autonpesut sisältä ja ulkoa</li>
                <li className='contentLI'>auton fixaukset</li>
                <li className='contentLI'>kiillotukset</li>
                <li className='contentLI'>vahaus</li>
            </ul>
        </div>
    )
}

export default Home;