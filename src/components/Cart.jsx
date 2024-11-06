import { useCart } from '../context/CartContext';
import '../styles/cart.css';

function Cart({ toggleCart }) {

  const { cartData } = useCart();

  // const grandTotal = cart.reduce((acc, product) => acc + product.ProductPrice * product.quantityAdded, 0);

  return (
    <>

      <div className="cart-overlay d-flex justify-content-center align-items-center">
        <div className="cart-container d-flex flex-column vh-100 position-relative ms-auto">
          <button className="btn-close rounded-circle p-2" onClick={toggleCart}></button>
          <div className="cart-list w-70 bg-white p-4 flex-grow-1">
            {cartData.length === 0 ? (
              <p className="text-center fw-bold">No hay servicios en el carrito.</p>
            ) : (
              cartData.map((appointment, index) => (
                <ul className="list-unstyled">
                  <h5>Detalles del servicio</h5>
                  <li key={index} className="mb-3">
                    <p>{appointment.service} - {appointment.fullName}</p> 
                  </li>
                  <li className="mb-3">
                    <p>{appointment.selectedDate = new Date(appointment.selectedDate).toLocaleDateString() }</p> - <p>{appointment.selectedTime}</p> 
                  </li>
                </ul>
              ))

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