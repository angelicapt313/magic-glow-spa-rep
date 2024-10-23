import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

    const [cartData, setCartData] = useState({
        service: '',
        fullName: '',
        selectedTime: '',
        selectedDate: '',
        status: ''
    });

    const addShopCart = (product) => {
        setCartData((prevCart) => {
            const productExists = prevCart.find(item => item.ProductID === product.ProductID);

            if (productExists) {
                if (product.quantityAdded > 0) {
                    return prevCart.map(item => item.ProductID === product.ProductID ? { ...item, quantityAdded: product.quantityAdded } : item
                    );
                } else {
                    return prevCart.filter(item => item.ProductID !== product.ProductID);
                }

            }
            return [...prevCart, product,];
        });
    };

    const removeFromCart = (productId) => {
        setCartData((prevCart) => prevCart.filter(item => item.ProductID !== productId));
    }

    return (
        <CartContext.Provider value={{ cartData, setCartData, addShopCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

