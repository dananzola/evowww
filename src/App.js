import './App.css';
import './fire.scss';
import React, { useEffect, useState } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Footer from './comps/Footer';
import Body from './comps/Body';
import NavigationBar from './comps/NavigationBar';

const bootstrap = require('bootstrap');

function App() {
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const getCurrentTime = () => {
            const date = new Date();
            const hours = date.getHours();

            if (hours >= 6 && hours < 12) {
                setBackgroundImage('imgs/beachbg.png');
            } else if (hours >= 12 && hours < 18) {
                setBackgroundImage('imgs/afternoon.png');
            } else {
                setBackgroundImage('imgs/evening.png');
            }
        };

        getCurrentTime();
    }, []);

    return (
        
            <div
                className="App"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
            }}>

            <NavigationBar />

                <img className="rotate" src="/imgs/e.png" alt="" />
                <img className="rotateS" src="/imgs/e.png" alt="" />
                
            <div className="container px-4 px-lg-6" id="containerPad">

                    {<Body />}
                    

            </div>
                <Footer />
            </div>
       
    );
}

export default App;