import React from 'react';
//import './App.css';
import './Slides.css';
import './Assets/Font/fonts.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import pic0 from './Assets/Img/pic0.jpg';
import pic1 from './Assets/Img/pic1.jpg';
import pic2 from './Assets/Img/pic2.jpg';
import pic3 from './Assets/Img/pic3.jpg';
import pic4 from './Assets/Img/pic4.jpg';
import pic5 from './Assets/Img/pic5.jpg';

const Gallery = () => {
    const images = [
        pic0,
        pic1,
        pic2,
        pic3,
        pic4,
        pic5
    ];
    return (
        <div className='gallery' style={{backgroundColor: "#404040"}}>
        <Slide>
            <div className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[0]})` }}></div>
            </div>
            <div className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[1]})` }}></div>
            </div>
            <div className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[2]})` }}></div>
            </div>
            <div className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[3]})` }}></div>
            </div>
            <div className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[4]})` }}></div>
            </div>
            <div className='each-slide-effect'>
                <div style={{ 'backgroundImage': `url(${images[5]})` }}></div>
            </div>
        </Slide>
        </div>
    )
}

export default Gallery;