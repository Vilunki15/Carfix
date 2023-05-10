import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

const App = () => {
    return (
        <div className='body'>
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default App;