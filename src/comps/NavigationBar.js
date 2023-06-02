import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div className="container px-4 px-lg-5">
                <a className="smoke-glow-text nav-link text-smoke-effect" href="#!" id="titles">
                    evolve
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navCol"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navCol">
                    <ul className="navbar-nav ml-auto" style={{ paddingLeft: '1em' }}>
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={scrollToTop}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active" onClick={scrollToTop}>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link" activeClassName="active" onClick={scrollToTop}>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link" activeClassName="active" onClick={scrollToTop}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
