import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import '../styles/cart.css';

function Cart({ toggleCart }) {

    const { cart, removeFromCart } = useContext(CartContext);

    // const grandTotal = cart.reduce((acc, product) => acc + product.ProductPrice * product.quantityAdded, 0);

    return (
      <div className="cart-overlay d-flex justify-content-center align-items-center">
      <div className="cart-container d-flex flex-column vh-100 position-relative ms-auto">
      <button className="btn-close rounded-circle p-2" onClick={toggleCart}></button>
        <div className="cart-list w-70 bg-white p-4 flex-grow-1">
          <ul className="list-unstyled">
            <li className="mb-3">
              <strong>Servicio:</strong> Servicio Ejemplo
            </li>
            <li className="mb-3">
              <strong>Nombre:</strong> Nombre del Cliente
            </li>
            <li className="mb-3">
              <strong>Horario y Fecha:</strong> 12:00 PM, 12 de Agosto
            </li>
            <li className="mb-3">
              <strong>Estatus:</strong> Confirmado
            </li>
          </ul>
        </div>
        <div className="cart-footer bg-dark bg-opacity-75 p-3 text-center text-white">
          <button className="btn">Al Lien</button>
        </div>
      </div>
    
    </div>
  
    );

}

export default Cart;