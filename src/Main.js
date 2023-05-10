import React, { useState } from 'react';

const Home = () => {
    return (
        <div>
            <p>home</p>
        </div>
    )
}

const Services = () => {
    return (
        <div>
            <p>services</p>
        </div>
    )
}

const Gallery = () => {
    return (
        <div>
            <p>gallery</p>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <p>contact</p>
        </div>
    )
}

const Testi = () => {
    return (
        <div>
            <p>testi</p>
        </div>
    )
}

const Main = ({ currentPage }) => {
    let mainContent;

    switch (currentPage) {
        case 'home':
            mainContent = <Home />;
            break;
        case 'services':
            mainContent = <Services />;
            break;
        case 'gallery':
            mainContent = <Gallery />;
            break;
        case 'contact':
            mainContent = <Contact />;
            break;
        default:
            mainContent = <Testi />;
    }
    return (
        <div>
            {mainContent}
        </div>
    )
}

export default Main;