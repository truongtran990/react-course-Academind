import React, { useContext, useEffect, useState } from 'react';

import CartIcon from './Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const [btnHighlighted, setbtnHighlighted] = useState(false);
  // define a cart context to access the context 
  const cartCtx = useContext(CartContext);
  
  const { items } = cartCtx;
  // get number of cart item from the context 
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0);
  
  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    // after the items - cartCtx is change -> call the useEffect -> create timer -> after 300ms -> setBtnHighlighted is false.
    setbtnHighlighted(true);
    const timer = setTimeout(() => {
      setbtnHighlighted(false);
    }, 300);
  
    return () => {
      console.log('CLEAN UP');
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button 
      className={btnClasses} 
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