import React from 'react';

import CartContext from './cart-context';


// Create a provider to provide the data. Which one want to use the data -> it was define as a consumer
const CartProvider = (props) => {

  const addItemToCartHandler = item => {

  };
  const removeItemFromCartHandler = id => {

  };
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;