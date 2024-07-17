import React from 'react';
import cosmetico from '../assets/images/cosmetico.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img alt='Cosmetico png' src={cosmetico} className='mx-2' style={{width:'30px', height:'30px'}} />
                    Magic Glow
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reservation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}


export default Header;