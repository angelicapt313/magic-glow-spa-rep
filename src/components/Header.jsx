import React from 'react';
import cosmetico from '../assets/images/cosmetico.png'
import { Link } from 'react-router-dom';
import '../styles/header.css';
import imgCart from '../assets/images/imgCart.svg';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand magic-glow-spa">
                    <img alt='Cosmetico png' src={cosmetico} className='mx-2' style={{ width: '30px', height: '30px' }} />
                    Magic Glow Spa
                </Link>
                <div className="flex">
                    <Link to="/cart">
                        <img src={imgCart} />
                    </Link>
                </div>
            </div>
        </nav>
    )
}


export default Header;