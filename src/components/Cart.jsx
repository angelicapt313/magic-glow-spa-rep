import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import '../styles/cart.css';

function Cart({ toggleCart }) {

  const { cartData } = useContext(CartContext);

  // const grandTotal = cart.reduce((acc, product) => acc + product.ProductPrice * product.quantityAdded, 0);

  return (
    <>

      <div className="cart-overlay d-flex justify-content-center align-items-center">
        <div className="cart-container d-flex flex-column vh-100 position-relative ms-auto">
          <button className="btn-close rounded-circle p-2" onClick={toggleCart}></button>
          <div className="cart-list w-70 bg-white p-4 flex-grow-1">
            {!cartData.service ? (
              <p className="text-center fw-bold">No hay servicios en el carrito.</p>
            ) : (
              <ul className="list-unstyled">
                <li className="mb-3">
                  <strong>Servicio:</strong> {cartData.service}
                </li>
                <li className="mb-3">
                  <strong>Nombre:</strong> {cartData.fullName}
                </li>
                <li className="mb-3">
                  <strong>Fecha:</strong> {cartData.selectedDate.toLocaleString()}
                </li>
                <li className="mb-3">
                  <strong>Horario:</strong> {cartData.selectedTime}
                </li>
                <li className="mb-3">
                  <strong>Estatus:</strong> {cartData.status}
                </li>
              </ul>
            )}



          </div>
          <div className="cart-footer bg-dark bg-opacity-75 p-3 text-center text-white">
            <button className="btn">MGS</button>
          </div>
        </div>

      </div>


    </>
  );

}

export default Cart;