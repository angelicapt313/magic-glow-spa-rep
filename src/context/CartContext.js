import React, { createContext, useContext, useState } from "react";


export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cartData, setCartData] = useState([]);

    const addAppointment = (newAppointment) => {
        setCartData((cartData) => 
            [...cartData, newAppointment]
    );

        // const appointmentExists = cartData.find(appointment => appointment.id === newAppointment.id);

        // const productExists = prevCart.find(item => item.ProductID === product.ProductID);

        // if (productExists) {
        //     if (product.quantityAdded > 0) {
        //         return prevCart.map(item => item.ProductID === product.ProductID ? { ...item, quantityAdded: product.quantityAdded } : item
        //         );
        //     } else {
        //         return prevCart.filter(item => item.ProductID !== product.ProductID);
        //     }

        // }
        // return [...prevCart, product,];
        // });


        // const removeFromCart = (productId) => {
        //     setCartData((prevCart) => prevCart.filter(item => item.ProductID !== productId));
        // }
    };

    return (
        <CartContext.Provider value={{ cartData, addAppointment }}>
            {children}
        </CartContext.Provider>
    );
};

