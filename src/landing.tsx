import logo from './logo.svg';
import React , {useEffect, useState} from 'react';

import image1 from './assets/image1.JPG';
import image2 from './assets/image2.JPG';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';
import video1 from './assets/video1.mp4';
import video2 from './assets/video2.mp4';

import './App.css';

const Landing = () => {
    const [media, setMedia] = useState<JSX.Element[]>([]); 

    const MediaSources = [image1, image2, image3, image4, video1, video2]
    useEffect(() => {
        const ShuffleMedia = MediaSources.sort(() => 0.5 - Math.random());
        const SelectedMedia = ShuffleMedia.slice(0, 3);

        let logoElement = document.querySelector('.App-logo');
        let buttonElement = document.querySelector('.intro-button');

        let logoRect = logoElement.getBoundingClientRect();
        let buttonRect = buttonElement.getBoundingClientRect();

        let logoAndButtonHeight = Math.max(logoRect.height, buttonRect.height);
        let logoAndButtonWidth = Math.max(logoRect.width, buttonRect.width);


        const MediaElements = SelectedMedia.map((src, index) => {
            const ext = src.split('.').pop();

            const randomTop = Math.random() * logoAndButtonHeight
            const randomLeft = Math.random() * logoAndButtonWidth;
            
            const randomSize = 200 + Math.random() * 20; 

            if(ext  == 'mp4') {
                return <video key = {index} src = {src} autoPlay muted loop className = "random-media" style={{top: `${randomTop}%`, left: `${randomLeft}%`, width: `${randomSize}px`, zIndex: -1}} />
            }
            else {
                return <img key = {index} src = {src} className = "random-media" style={{top: `${randomTop}%`, left: `${randomLeft}%`, width: `${randomSize}px`, zIndex: -1}} />
            }

        });

        setMedia(MediaElements);

    }, []);

    return (
        <div className = "App">
            <header className = "App-header">
                <img src = {logo} className = "App-logo" alt = "logo" />
                <button  className = "intro-button" > S T A R T</button>
                {media} {}
            </header>
            
        </div>   
     );
}

export default Landing;




