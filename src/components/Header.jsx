import React from 'react';
import cosmetico from '../assets/images/cosmetico.png'
import { Link } from 'react-router-dom';
import '../styles/header.css';
import imgCart from '../assets/images/imgCart.svg';
import close from '../assets/images/close.svg';

const Header = ({ toggleCart, showCart }) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand magic-glow-spa">
                    <img alt='Cosmetico png' src={cosmetico} className='mx-2' style={{ width: '30px', height: '30px' }} />
                    Magic Glow Spa
                </Link>
                <div className="flex ">
                    <button className='btn' onClick={toggleCart}>
                        <img
                            src={showCart ? close : imgCart}
                            alt={showCart ? 'Close Cart' : 'Open Cart'}
                            className="icon z-3"
                            style={{ width: '30px', height: '30px' }}
                        />
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default Header;