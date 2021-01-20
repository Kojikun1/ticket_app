import React, { useState, useContext, createContext, Children} from 'react';

interface CartData {
     
}

const CartContext = createContext(null)


export default function Cart(){
    return (
        <CartContext.Provider value={null} >
             {Children}
        </CartContext.Provider>
    )
}

export function useCart(){
    return useContext(CartContext);
}