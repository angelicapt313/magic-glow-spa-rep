import { useCart } from '../context/CartContext';
import '../styles/cart.css';

function Cart({ toggleCart }) {

  const { cartData } = useCart();

  // const grandTotal = cart.reduce((acc, product) => acc + product.ProductPrice * product.quantityAdded, 0);

  return (


    <div className="cart-overlay d-flex justify-content-center align-items-center">
      <div className="cart-container d-flex flex-column vh-100 position-relative ms-auto">
        <button className="btn-close rounded-circle p-2" onClick={toggleCart}></button>
        <div className="cart-list w-70 bg-white p-4 flex-grow-1 overflow-auto">
          {cartData.length === 0 ? (
            <p className="text-center fw-bold">No hay servicios en el carrito.</p>
          ) : (
            cartData.map((appointment) => (

              <div className="card card-effect my-2" key={appointment.id}>
                <div className="card-body d-flex justify-content-evenly align-items-center ">
                  <img src={appointment.image} className='image-service' alt='Cosmetico.png' />

                  <ul className="list-unstyled align-self-center m-0">

                    <li className="">
                      <p className='m-0 p-1'> {appointment.fullName}</p>
                    </li>
                    <li className="">
                      <p className='m-0 p-1 text-capitalize'>{new Date(appointment.selectedDate).toLocaleDateString('es-Es', {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit'
                      })} </p>
                    </li>
                    <li>
                      <p>{appointment.selectedTime}hrs</p>
                    </li>
                  </ul>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );

}

export default Cart;