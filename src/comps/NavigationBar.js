import React from 'react';

const NavigationBar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">

            <div className="container px-4 px-lg-5">

                <a className="smoke-glow-text nav-link text-smoke-effect" href="#!" id="titles">evolve</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCol" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                <div className="collapse navbar-collapse" id="navCol">
                    <ul className="navbar-nav ml-auto" style={{ paddingLeft: '1em' }}>
                        <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">Contact</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
};

export default NavigationBar;