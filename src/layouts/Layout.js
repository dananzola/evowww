import React, { useEffect, useState } from 'react';
import NavigationBar from '../comps/NavigationBar';
import Footer from '../comps/Footer';
import { Outlet } from 'react-router-dom';
import Header from '../comps/Header';
import Connections from '../comps/Connections'

export default function Layout() {

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
            <img className="rotate" src="/imgs/e.png" alt="" />
            <img className="rotateS" src="/imgs/e.png" alt="" />
            <div className="container px-4 px-lg-6" id="containerPad">
            <div className="row gx-4 gx-lg-6">

            <Header />
                <NavigationBar />
                <div className="col-lg-7" id="body">
                    <Outlet />
                </div>
                <Connections /> 

            

            
                    <Footer />
            </div>
            
            </div>
        </div>
    )
}