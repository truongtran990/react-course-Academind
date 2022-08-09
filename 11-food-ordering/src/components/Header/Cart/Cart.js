import React from 'react';

import classes from './Cart.module.css';
import Modal from '../../Modal/Modal';

const Cart = (props) => {

  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        [
          {id: 'c1', name: 'sushi', 'amount': 2, price: 12.99},
        ].map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  );
  
  return (
    // click the backdrop of modal to close the cart modal
    <Modal onClose={props.onClose}>
      {cartItems}
      <div>
        <span className={classes.total}>Total amount</span>
        <span>46.7</span>
      </div>
      <div className={classes.actions}>
        {/* click the close button to close the cart modal */}
        <button 
          className={classes['button--alt']}
          onClick={props.onClose}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart;