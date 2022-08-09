import React from 'react';
import CartIcon from './Cart/CartIcon';

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
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
        3
      </span>
    </button>
  )
}

export default HeaderCartButton;