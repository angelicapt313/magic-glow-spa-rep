import React from 'react';
import cosmetico from '../assets/images/cosmetico.png'
import { Link } from 'react-router-dom';
import '../styles/header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand magic-glow-spa">
                    <img alt='Cosmetico png' src={cosmetico} className='mx-2' style={{width:'30px', height:'30px'}} />
                    Magic Glow Spa
                </Link>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/services" className="nav-link">Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Reservation</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Header;