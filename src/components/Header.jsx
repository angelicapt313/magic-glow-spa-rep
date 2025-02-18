import React from 'react';
import cosmetico from '../assets/images/cosmetico.png'
import { Link } from 'react-router-dom';
import imgCart from '../assets/images/imgCart.svg';
import close from '../assets/images/close.svg';

const Header = ({ toggleCart, showCart }) => {
    return (
        
        <nav className="py-4 px-4 md:px-8">
            <div className="flex items-center justify-between">
                <Link to="/" className="magic-glow flex items-center text-lg font-semibold no-underline">
                    <img alt="Cosmetico png" src={cosmetico} className="w-8 h-8 mr-2" />
                    Magic Glow
                </Link>
                <button onClick={toggleCart} className="focus:outline-none">
                    <img
                        src={showCart ? close : imgCart}
                        alt={showCart ? 'Close Cart' : 'Open Cart'}
                        className="w-8 h-8"
                    />
                </button>
            </div>
        </nav>

    )
}


export default Header;