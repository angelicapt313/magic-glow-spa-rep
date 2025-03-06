import { React, useEffect } from 'react';
import { useCart } from '../context/CartContext';

function Cart({ toggleCart }) {

  // Evitar scroll en Cart.jsx cuando el carrito está abierto.
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const { cartData } = useCart();

  // const grandTotal = cart.reduce((acc, product) => acc + product.ProductPrice * product.quantityAdded, 0);

  return (

    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">

    {/* Carrito */}
    <div className="relative sm:max-w-[80%] md:w-96 h-screen sm:h-auto bg-white shadow-lg flex flex-col">
      
      {/* Botón de Cerrar */}
      <button
        className="button-close absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        onClick={toggleCart}
      >
        ✖
      </button>

      {/* Contenedor del Carrito */}
      <div className="p-4 mt-10 overflow-y-auto max-h-screen">
        {cartData.length === 0 ? (
          <p className="text-center font-semibold text-gray-700">
            No hay servicios en el carrito.
          </p>
        ) : (
          cartData.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-gray-100 rounded-lg shadow-md p-4 mb-2 flex items-center"
            >
              {/* Imagen del Servicio */}
              <img
                src={appointment.image}
                className="w-16 h-16 rounded-lg object-cover"
                alt="Cosmetico"
              />

              {/* Información de la Cita */}
              <ul className="ml-4 flex flex-col">
                <li className="font-semibold text-gray-800">
                  {appointment.fullName}
                </li>
                <li className="text-sm text-gray-600">
                  {new Date(appointment.selectedDate).toLocaleDateString(
                    "es-ES",
                    { day: "numeric", month: "short", year: "2-digit" }
                  )}
                </li>
                <li className="text-sm text-gray-600">
                  {appointment.selectedTime} hrs
                </li>
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
  );

}

export default Cart;