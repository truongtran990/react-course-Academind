import React, { useReducer } from 'react';

import CartContext from './cart-context';


const defaultCartState = {
  items: [],
  totalAmount: 0,  
};
// state is the last state snapshot
const cartReducer = (state, action) => {
// return a new snapshot
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const updatedItems = state.items.filter(item => item.id !== state.item.id);
    const removeItem = state.items.filter(item => item.id === state.item.id);
    const updatedTotalAmount = state.totalAmount - (removeItem.amount * removeItem.price);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

// Create a provider to provide the data. Which one want to use the data -> it was define as a consumer
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item});
  };
  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id});
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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