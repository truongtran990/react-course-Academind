import React, { useContext } from 'react';

import CartIcon from './Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  // define a cart context to access the context 
  const cartCtx = useContext(CartContext);

  // get number of cart item from the context 
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);

  return (
    <button 
      className={classes.button} 
      onClick={props.onClick}
    >
      {/* for cart icon */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* for cart text */}
      <span>Your Cart </span>
      {/* for a quantity of item in your cart */}
      <span className={classes.badge}>
        {numberOfCartItems}
      </span>
    </button>
  )
}

export default HeaderCartButton;